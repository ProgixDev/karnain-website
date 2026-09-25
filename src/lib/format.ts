/**
 * Shared Intl-based formatters (docs/conventions/copy.md): user-visible dates and
 * numbers always go through these — never hand-rolled string math.
 */

const dateFormatter = new Intl.DateTimeFormat("en", { dateStyle: "medium" });
const numberFormatter = new Intl.NumberFormat("en");

// Prices are always euros; only the notation follows the language (`195,00 €` vs `€195.00`).
const eurLocales = { fr: "fr-FR", en: "en-GB", it: "it-IT", es: "es-ES", de: "de-DE" } as const;
const eurFormatters = new Map<string, Intl.NumberFormat>();

export function formatDate(date: Date | number): string {
  return dateFormatter.format(date);
}

export function formatNumber(value: number): string {
  return numberFormatter.format(value);
}

/** Price in euros in the given language's notation (fr: "195,00 €", en: "€195.00"). */
export function formatEur(value: number, locale: keyof typeof eurLocales = "fr"): string {
  let formatter = eurFormatters.get(locale);
  if (!formatter) {
    formatter = new Intl.NumberFormat(eurLocales[locale], { style: "currency", currency: "EUR" });
    eurFormatters.set(locale, formatter);
  }
  return formatter.format(value);
}
