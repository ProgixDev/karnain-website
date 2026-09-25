"use client";

import { createContext, useContext } from "react";
import { type Dictionary, type Locale, localizeHref } from "@/core/i18n";

type I18nContextValue = {
  locale: Locale;
  dict: Dictionary;
  /** Prefixes a locale-free path for the current language. */
  href: (path: string) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

/**
 * Hands the active locale and its dictionary to client components. Mounted once by the locale
 * layout, so only the dictionary in use is serialised to the browser.
 */
export function I18nProvider({
  locale,
  dict,
  children,
}: {
  locale: Locale;
  dict: Dictionary;
  children: React.ReactNode;
}) {
  const value: I18nContextValue = { locale, dict, href: (path) => localizeHref(locale, path) };
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nContextValue {
  const value = useContext(I18nContext);
  if (!value) throw new Error("useI18n must be used inside <I18nProvider>.");
  return value;
}
