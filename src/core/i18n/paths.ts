import { defaultLocale, isLocale, type Locale } from "./locales";

/**
 * Locale-aware paths. Routes are not translated — `/collection` is `/collection` in every
 * language — only prefixed: French stays at the root, other locales get `/<locale>` in front.
 */

/** `localizeHref("en", "/collection")` → `/en/collection`; French hrefs are returned as is. */
export function localizeHref(locale: Locale, href: string): string {
  if (locale === defaultLocale || !href.startsWith("/")) return href;
  if (href === "/") return `/${locale}`;
  // `/#contact` → `/en#contact` (a `/en/#contact` would bounce through a trailing-slash redirect).
  if (href.startsWith("/#")) return `/${locale}${href.slice(1)}`;
  return `/${locale}${href}`;
}

/** Splits a pathname into its locale and the locale-free path (`/en/panier` → en, `/panier`). */
export function splitLocale(pathname: string): { locale: Locale; path: string } {
  const [, first = "", ...rest] = pathname.split("/");
  if (isLocale(first) && first !== defaultLocale) {
    const path = `/${rest.join("/")}`;
    return { locale: first, path: path === "/" ? "/" : path.replace(/\/$/, "") };
  }
  return { locale: defaultLocale, path: pathname || "/" };
}

/** The same page in another language (`/en/panier` + fr → `/panier`). */
export function switchLocaleHref(pathname: string, target: Locale): string {
  return localizeHref(target, splitLocale(pathname).path);
}

/** hreflang map for a locale-free path, for `metadata.alternates.languages`. */
export function localeAlternates(path: string, all: readonly Locale[]): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const locale of all) languages[locale] = localizeHref(locale, path);
  languages["x-default"] = localizeHref(defaultLocale, path);
  return languages;
}
