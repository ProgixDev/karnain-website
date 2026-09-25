import { locale as localeParam } from "next/root-params";
import { defaultLocale, isLocale, type Locale } from "./locales";

/**
 * The current request's locale, readable from any server component under `app/[locale]`
 * without prop drilling. Outside that tree (the admin has its own root layout) the root param is
 * undefined, so this falls back to French.
 */
export async function getLocale(): Promise<Locale> {
  const value = await localeParam();
  return isLocale(value) ? value : defaultLocale;
}
