import "server-only";
import { z } from "zod";
import { defaultLocale, type Locale } from "@/core/i18n";
import { createSupabasePublicClient, createSupabaseServerClient } from "@/core/supabase/server";
import { localizeCollection, localizeFragrance } from "./localize";
import type { Collection, Fragrance } from "./types";

/**
 * Supabase reads for the catalog. Rows cross a trust boundary, so they are zod-parsed
 * (Constitution Art. IX). Any error (network, schema drift, RLS) returns `null` so callers
 * fall back to the seed — the site never hard-fails on a data-source hiccup.
 */

const notesSchema = z.object({
  head: z.array(z.string()),
  heart: z.array(z.string()),
  base: z.array(z.string()),
});

// Per-locale overrides live in a jsonb column; unknown locales or partial objects are fine
// (missing fields fall back to French at merge time), malformed ones fail the row's parse.
const fragranceTranslationsSchema = z
  .record(
    z.string(),
    z.object({
      family: z.string().optional(),
      mood: z.string().optional(),
      description: z.string().optional(),
      notes: notesSchema.optional(),
    }),
  )
  .nullable()
  .default(null);

const collectionTranslationsSchema = z
  .record(
    z.string(),
    z.object({ baseline: z.string().optional(), description: z.string().optional() }),
  )
  .nullable()
  .default(null);

const fragranceRowSchema = z.object({
  slug: z.string(),
  name: z.string(),
  collection_slug: z.string(),
  family: z.string(),
  price_eur: z.number(),
  mood: z.string(),
  description: z.string(),
  notes: notesSchema.nullable(),
  translations: fragranceTranslationsSchema,
  images: z.array(z.string()).nullable(),
  featured: z.boolean(),
  status: z.enum(["published", "draft"]).default("published"),
  is_new: z.boolean().default(false),
  is_best_seller: z.boolean().default(false),
});

const collectionRowSchema = z.object({
  slug: z.string(),
  name: z.string(),
  baseline: z.string(),
  description: z.string(),
  translations: collectionTranslationsSchema,
});

function toFragrance(row: z.infer<typeof fragranceRowSchema>, locale: Locale): Fragrance {
  const base = {
    slug: row.slug,
    name: row.name,
    collectionSlug: row.collection_slug,
    family: row.family,
    priceEur: row.price_eur,
    mood: row.mood,
    description: row.description,
    notes: {
      head: row.notes?.head ?? [],
      heart: row.notes?.heart ?? [],
      base: row.notes?.base ?? [],
    },
    images: row.images ?? [],
    featured: row.featured,
    status: row.status,
    isNew: row.is_new,
    isBestSeller: row.is_best_seller,
  };
  return localizeFragrance(base, row.translations ?? undefined, locale);
}

export async function fetchFragrances(locale: Locale): Promise<readonly Fragrance[] | null> {
  try {
    const supabase = createSupabasePublicClient();
    const { data, error } = await supabase.from("fragrances").select("*").order("sort_order");
    if (error || !data) return null;
    const parsed = z.array(fragranceRowSchema).safeParse(data);
    if (!parsed.success) return null;
    return parsed.data.map((row) => toFragrance(row, locale));
  } catch {
    return null;
  }
}

/**
 * Catalog read **through the caller's session**, so an admin's `role` claim reaches RLS and
 * drafts come back. The public reads above deliberately use the sessionless client to stay
 * statically cached; the admin needs the opposite trade — per-request, and complete.
 */
export async function fetchFragrancesAsAdmin(): Promise<readonly Fragrance[] | null> {
  try {
    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase.from("fragrances").select("*").order("sort_order");
    if (error || !data) return null;
    const parsed = z.array(fragranceRowSchema).safeParse(data);
    if (!parsed.success) return null;
    return parsed.data.map((row) => toFragrance(row, defaultLocale));
  } catch {
    return null;
  }
}

export async function fetchCollections(locale: Locale): Promise<readonly Collection[] | null> {
  try {
    const supabase = createSupabasePublicClient();
    const { data, error } = await supabase.from("collections").select("*").order("sort_order");
    if (error || !data) return null;
    const parsed = z.array(collectionRowSchema).safeParse(data);
    if (!parsed.success) return null;
    return parsed.data.map(({ translations, ...collection }) =>
      localizeCollection(collection, translations ?? undefined, locale),
    );
  } catch {
    return null;
  }
}
