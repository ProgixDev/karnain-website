import { defaultLocale, type Locale } from "@/core/i18n";
import type {
  Collection,
  CollectionTranslation,
  Fragrance,
  FragranceTranslation,
  Translations,
} from "./types";

/**
 * Merges a locale's overrides over the French base. A missing translation, or a missing field
 * inside one, falls back to French: a fragrance is never rendered empty in another language.
 */
export function localizeFragrance(
  base: Omit<Fragrance, "familyLabel">,
  translations: Translations<FragranceTranslation> | null | undefined,
  locale: Locale,
): Fragrance {
  const override = locale === defaultLocale ? undefined : translations?.[locale];
  return {
    ...base,
    familyLabel: override?.family ?? base.family,
    mood: override?.mood ?? base.mood,
    description: override?.description ?? base.description,
    notes: override?.notes ?? base.notes,
  };
}

export function localizeCollection(
  base: Collection,
  translations: Translations<CollectionTranslation> | null | undefined,
  locale: Locale,
): Collection {
  const override = locale === defaultLocale ? undefined : translations?.[locale];
  return {
    ...base,
    baseline: override?.baseline ?? base.baseline,
    description: override?.description ?? base.description,
  };
}
