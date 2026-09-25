import { defaultLocale, type Locale } from "./locales";
import { de } from "./messages/de";
import { en } from "./messages/en";
import { es } from "./messages/es";
import { fr } from "./messages/fr";
import { it } from "./messages/it";
import type { Dictionary } from "./types";

const dictionaries: Record<Locale, Dictionary> = { fr, en, it, es, de };

/** The UI dictionary for a locale. Server components resolve the locale with `getLocale()`. */
export function getDictionary(locale: Locale = defaultLocale): Dictionary {
  return dictionaries[locale];
}

export { defaultLocale, isLocale, locales, ogLocales } from "./locales";
export type { Locale } from "./locales";
export type { Dictionary } from "./types";
export { localeAlternates, localizeHref, splitLocale, switchLocaleHref } from "./paths";
export { pageAlternates } from "./metadata";
