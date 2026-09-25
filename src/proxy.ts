import { type NextRequest, NextResponse } from "next/server";
import { defaultLocale, isLocale } from "@/core/i18n/locales";

/**
 * Locale routing (spec 014). French is the default and stays unprefixed, so every URL that
 * existed before other languages keeps working:
 *
 *   /collection      → rewritten internally to /fr/collection (URL unchanged for the visitor)
 *   /fr/collection   → 308 to /collection (one canonical French URL)
 *   /en/collection   → served as is
 *   /de/collection   → not a locale: rewritten to /fr/de/collection, which is a 404
 *
 * No cookies and no Accept-Language sniffing: pages stay static and the visitor picks the
 * language with the switcher. The admin, API routes and static files are not touched.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const [, first = ""] = pathname.split("/");

  if (first === defaultLocale) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(defaultLocale.length + 1) || "/";
    return NextResponse.redirect(url, 308);
  }

  if (isLocale(first)) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Everything except the admin, the API, Next internals, and files with an extension.
  matcher: ["/((?!admin|api|_next|.*\\..*).*)"],
};
