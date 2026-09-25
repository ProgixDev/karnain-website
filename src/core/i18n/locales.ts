/**
 * Locale registry. Adding a language is additive: add its code here, a dictionary in
 * `messages/`, and product translations in the catalog (spec 014).
 */
export const locales = ["fr", "en", "it", "es", "de"] as const;

export type Locale = (typeof locales)[number];

/** French is served unprefixed at the root; every other locale lives under `/<locale>`. */
export const defaultLocale: Locale = "fr";

export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && (locales as readonly string[]).includes(value);
}

/** Open Graph locale tags, per locale. */
export const ogLocales: Record<Locale, string> = {
  fr: "fr_FR",
  en: "en_GB",
  it: "it_IT",
  es: "es_ES",
  de: "de_DE",
};
