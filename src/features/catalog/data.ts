import { defaultLocale, type Locale } from "@/core/i18n";
import { isSupabaseConfigured } from "@/core/supabase/config";
import { localizeCollection, localizeFragrance } from "./localize";
import { collectionTranslations, fragranceTranslations } from "./translations";
import type { Collection, Fragrance } from "./types";

/**
 * Catalog data access — the seam between the site and its data source.
 *
 * Reads from Supabase when configured, else the in-code seed below (a faithful mirror of the
 * Supabase rows). The Supabase repository is a `server-only` module imported dynamically only
 * when configured — so this file stays client/test-safe and the site works with zero
 * configuration. Draft visibility is enforced by Supabase RLS (anon sees published only); the
 * seed contains no drafts. Public selectors take a `locale` and return the catalog as seen in
 * that language (French on the row, other languages merged from `translations`); admin selectors
 * always return French, the editable source.
 */

const PRICE_EUR = 195;

const seedCollections: readonly Collection[] = [
  {
    slug: "karnain-addicte",
    name: "Karnain Addicte",
    baseline: "La collection signature",
    description:
      "Des parfums d'exception — les classiques que les amoureux du parfum se doivent de posséder.",
  },
];

type SeedFragrance = Omit<Fragrance, "familyLabel">;

const seedFragrances: readonly SeedFragrance[] = [
  {
    slug: "tobacco",
    family: "Boisés & ambrés",
    name: "Tobacco",
    images: ["/images/fragrances/tobacco-studio-v3.png"],
    collectionSlug: "karnain-addicte",
    priceEur: PRICE_EUR,
    mood: "Chaud, boisé, enveloppant.",
    description:
      "Tobacco est un mélange délicieusement complexe de notes chaudes et fraîches. La base de tabac crée une sensation de sophistication et de mystère, tandis que la framboise ajoute une touche de fraîcheur et d'élégance.\n\nAu cœur, le cuir robuste et fumé se marie avec la profondeur aromatique du tabac, créant une ambiance chaleureuse et enveloppante. Les fleurs délicates de violette, de muguet et de rose apportent un contraste doux et floral.\n\nLe fond repose sur une base sensuelle où l'ambre et le musc s'entrelacent. La vanille douce, associée aux nuances terreuses du patchouli et de la fève tonka, ajoute une dimension addictive et chaleureuse.",
    notes: {
      head: ["Framboise", "Safran", "Bergamote"],
      heart: ["Cuir", "Tabac", "Violette", "Muguet", "Rose"],
      base: ["Ambre", "Musc", "Vanille", "Patchouli", "Fève Tonka"],
    },
    featured: true,
    status: "published",
    isNew: false,
    isBestSeller: true,
  },
  {
    slug: "cuir-90",
    family: "Boisés & ambrés",
    name: "Cuir 90",
    images: ["/images/fragrances/cuir-90-studio-v3.png"],
    collectionSlug: "karnain-addicte",
    priceEur: PRICE_EUR,
    mood: "Cuir noble, fumé, racé.",
    description:
      "« Cuir 90 » est un parfum de niche audacieux, un hommage à la fusion entre le raffinement et la puissance brute. Dès l'ouverture, une framboise juteuse éclate avec une vivacité fruitée, avant de laisser place à un cœur dominé par une note de cuir intense et fumé, renforcée par la fève tonka et l'encens.\n\nEn fond, le parfum se pose sur un accord sensuel de musc enveloppant, enrichi de vanille crémeuse. L'ambre ajoute une touche de chaleur dorée, tandis que le bois de cèdre structure l'ensemble avec une élégance boisée et intemporelle.",
    notes: {
      head: ["Framboise"],
      heart: ["Cuir", "Fève Tonka", "Encens"],
      base: ["Musc", "Vanille", "Ambre", "Bois de cèdre"],
    },
    featured: true,
    status: "published",
    isNew: false,
    isBestSeller: true,
  },
  {
    slug: "rose-des-iles",
    family: "Floraux",
    name: "Rose des Îles",
    images: ["/images/fragrances/rose-des-iles-studio-v3.png"],
    collectionSlug: "karnain-addicte",
    priceEur: PRICE_EUR,
    mood: "Rose solaire, voyageuse.",
    description:
      "« Rose des Îles » est un mélange équilibré de notes florales de rose et de bergamote, combiné à des notes plus profondes de musc et de vanille — parfait pour toutes les occasions.\n\nLa rose apporte une touche de fraîcheur et de sensualité, tandis que la bergamote ajoute une note citronnée qui réveille les sens. Le musc et la vanille apportent une profondeur et une chaleur à la fragrance.",
    notes: {
      head: ["Bergamote"],
      heart: ["Rose", "Muguet"],
      base: ["Vanille", "Musc", "Ambre"],
    },
    featured: true,
    status: "published",
    isNew: false,
    isBestSeller: true,
  },
  {
    slug: "tentation",
    family: "Gourmands",
    name: "Tentation",
    images: ["/images/fragrances/tentation-studio-v3.png"],
    collectionSlug: "karnain-addicte",
    priceEur: PRICE_EUR,
    mood: "Gourmand, sensuel, irrésistible.",
    description:
      "« Tentation » est une véritable gourmandise olfactive, un parfum qui séduit par son audace sucrée et sa profondeur sensuelle. Dès les premières notes, une fraise éclatante se mêle à la richesse sombre du cacao.\n\nAu cœur, le parfum s'intensifie avec des accords de chocolat fondant et de barbe à papa, un mélange sucré et nostalgique. En fond, une base crémeuse de vanille douce, renforcée par un musc sensuel et une touche ambrée.",
    notes: {
      head: ["Fraise", "Cacao"],
      heart: ["Chocolat", "Barbe à papa", "Sucré"],
      base: ["Vanille", "Musc", "Ambre"],
    },
    featured: true,
    status: "published",
    isNew: false,
    isBestSeller: true,
  },
  {
    slug: "sucre-addictee",
    family: "Gourmands",
    name: "Sucre Addictée",
    images: ["/images/fragrances/sucre-addictee-studio-v3.png"],
    collectionSlug: "karnain-addicte",
    priceEur: PRICE_EUR,
    mood: "Sucré, addictif, lumineux.",
    description:
      "« Sucre Addictée » est une explosion de gourmandise pure. Dès les premières notes, une barbe à papa aérienne se mêle à la pomme d'amour croquante, rappelant les douceurs de l'enfance.\n\nAu cœur, la gourmandise devient plus intense avec un accord de sucre noir et de caramel fondant, relevé d'une touche d'anis. Le fond est dominé par la vanille crémeuse et une base ambrée chaude et réconfortante.",
    notes: {
      head: ["Barbe à papa", "Pomme d'amour"],
      heart: ["Sucre noir", "Caramel", "Anis"],
      base: ["Vanille", "Ambre"],
    },
    featured: false,
    status: "published",
    isNew: true,
    isBestSeller: false,
  },
  {
    slug: "cherry-je-taime",
    family: "Gourmands",
    name: "Cherry Je t'aime",
    images: ["/images/fragrances/cherry-je-taime-studio-v3.png"],
    collectionSlug: "karnain-addicte",
    priceEur: PRICE_EUR,
    mood: "Cerise pétillante, audacieuse.",
    description:
      "« Cherry, Je t'aime » est une fragrance vibrante où les fruits rouges rencontrent des épices et des bois précieux. L'ouverture est éclatante avec un mélange juteux de cassis et de framboise, dynamisé par la bergamote et le safran.\n\nAu cœur, la cerise pulpeuse s'entrelace avec la fève tonka et l'amande, créant un accord gourmand et addictif, rehaussé de rose et de jasmin. En fond, l'ambre chaud, le musc et les bois de gaïac, vétiver et santal forment une base luxueuse, adoucie par la vanille.",
    notes: {
      head: ["Cassis", "Framboise", "Safran", "Bergamote"],
      heart: ["Fève Tonka", "Cerise", "Amande", "Patchouli", "Rose", "Jasmin"],
      base: ["Ambre", "Musc", "Vétiver", "Bois de gaïac", "Santal", "Vanille"],
    },
    featured: false,
    status: "published",
    isNew: true,
    isBestSeller: false,
  },
];

function seedFragrancesIn(locale: Locale): readonly Fragrance[] {
  return seedFragrances.map((fragrance) =>
    localizeFragrance(fragrance, fragranceTranslations[fragrance.slug], locale),
  );
}

async function allFragrances(locale: Locale): Promise<readonly Fragrance[]> {
  if (isSupabaseConfigured()) {
    const { fetchFragrances } = await import("./supabase-repo");
    const rows = await fetchFragrances(locale);
    if (rows) return rows;
  }
  return seedFragrancesIn(locale);
}

async function allCollections(locale: Locale): Promise<readonly Collection[]> {
  if (isSupabaseConfigured()) {
    const { fetchCollections } = await import("./supabase-repo");
    const rows = await fetchCollections(locale);
    if (rows) return rows;
  }
  return seedCollections.map((collection) =>
    localizeCollection(collection, collectionTranslations[collection.slug], locale),
  );
}

export async function getFragrances(locale: Locale = defaultLocale): Promise<readonly Fragrance[]> {
  return allFragrances(locale);
}

/**
 * Every fragrance the signed-in caller may see — drafts included for an admin, because the read
 * goes through their session and RLS honours the `role` claim. The public selectors above read
 * sessionlessly and therefore only ever see published rows; admin screens must use these, or a
 * draft becomes invisible and unrecoverable from the back office.
 */
async function allFragrancesForAdmin(): Promise<readonly Fragrance[]> {
  if (isSupabaseConfigured()) {
    const { fetchFragrancesAsAdmin } = await import("./supabase-repo");
    const rows = await fetchFragrancesAsAdmin();
    if (rows) return rows;
  }
  return seedFragrancesIn(defaultLocale);
}

export async function getFragrancesForAdmin(): Promise<readonly Fragrance[]> {
  return allFragrancesForAdmin();
}

export async function getFragranceForAdmin(slug: string): Promise<Fragrance | undefined> {
  return (await allFragrancesForAdmin()).find((fragrance) => fragrance.slug === slug);
}

export async function getFeaturedFragrances(
  limit = 4,
  locale: Locale = defaultLocale,
): Promise<readonly Fragrance[]> {
  return (await allFragrances(locale)).filter((fragrance) => fragrance.featured).slice(0, limit);
}

export async function getFragrance(
  slug: string,
  locale: Locale = defaultLocale,
): Promise<Fragrance | undefined> {
  return (await allFragrances(locale)).find((fragrance) => fragrance.slug === slug);
}

export async function getCollections(
  locale: Locale = defaultLocale,
): Promise<readonly Collection[]> {
  return allCollections(locale);
}

export async function getCollection(
  slug: string,
  locale: Locale = defaultLocale,
): Promise<Collection | undefined> {
  return (await allCollections(locale)).find((collection) => collection.slug === slug);
}

export async function getFragrancesByCollection(
  slug: string,
  locale: Locale = defaultLocale,
): Promise<readonly Fragrance[]> {
  return (await allFragrances(locale)).filter((fragrance) => fragrance.collectionSlug === slug);
}

/** A scent family: the canonical key used in filter URLs, and its label in the current language. */
export type ScentFamily = { readonly key: string; readonly label: string };

/** Distinct scent families, in display order. */
export async function getFamilies(locale: Locale = defaultLocale): Promise<readonly ScentFamily[]> {
  const seen = new Map<string, string>();
  for (const fragrance of await allFragrances(locale)) {
    if (!seen.has(fragrance.family)) seen.set(fragrance.family, fragrance.familyLabel);
  }
  return [...seen].map(([key, label]) => ({ key, label }));
}
