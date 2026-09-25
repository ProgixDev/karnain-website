import type { Metadata } from "next";
import { locales } from "./locales";
import { localeAlternates } from "./paths";

/** `metadata.alternates` for a public page: one hreflang per locale plus a French x-default. */
export function pageAlternates(path: string): NonNullable<Metadata["alternates"]> {
  return { languages: localeAlternates(path, locales) };
}
