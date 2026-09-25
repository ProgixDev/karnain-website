import type { Locale } from "@/core/i18n";

/** Olfactory pyramid for a fragrance. */
export type ScentNotes = {
  readonly head: readonly string[];
  readonly heart: readonly string[];
  readonly base: readonly string[];
};

/**
 * A single Karnain perfume, as seen in one language. French is the source of truth stored on
 * the row; other locales are overrides merged on read (see `localize.ts`). Names and slugs are
 * never translated.
 */
export type Fragrance = {
  readonly slug: string;
  readonly name: string;
  readonly collectionSlug: string;
  /** Canonical scent family (French) — the filter key in URLs, stable across languages. */
  readonly family: string;
  /** The family as displayed in the current language. */
  readonly familyLabel: string;
  readonly priceEur: number;
  readonly mood: string;
  readonly description: string;
  readonly notes: ScentNotes;
  readonly featured: boolean;
  /** Public image paths (first is the card/primary image). Empty until imagery exists. */
  readonly images: readonly string[];
  /** `draft` fragrances are hidden from the public site (visible only in admin). */
  readonly status: "published" | "draft";
  readonly isNew: boolean;
  readonly isBestSeller: boolean;
};

/** A curated grouping of fragrances. */
export type Collection = {
  readonly slug: string;
  readonly name: string;
  readonly baseline: string;
  readonly description: string;
};

/** Per-locale overrides of a fragrance's translatable text. Every field is optional. */
export type FragranceTranslation = {
  readonly family?: string;
  readonly mood?: string;
  readonly description?: string;
  readonly notes?: ScentNotes;
};

export type CollectionTranslation = {
  readonly baseline?: string;
  readonly description?: string;
};

/** What the `translations` column holds: overrides keyed by locale, French never among them. */
export type Translations<T> = Partial<Record<Locale, T>>;
