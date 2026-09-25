import { describe, expect, it } from "vitest";
import {
  defaultLocale,
  getDictionary,
  localeAlternates,
  locales,
  localizeHref,
  splitLocale,
  switchLocaleHref,
} from "./index";

describe("i18n", () => {
  it("defaults to French and offers English", () => {
    expect(defaultLocale).toBe("fr");
    expect(locales).toEqual(["fr", "en"]);
  });

  it("returns the French dictionary with navigation and section copy", () => {
    const dict = getDictionary();
    expect(dict.nav.items.length).toBeGreaterThan(0);
    expect(dict.hero.primaryCta).toBeTruthy();
    expect(dict.collection.title).toBe("Karnain Addicte");
  });

  it("returns an English dictionary of the same shape", () => {
    const en = getDictionary("en");
    expect(en.cart.addToBag).toBe("Add to bag");
    expect(en.nav.items.map((item) => item.href)).toEqual(
      getDictionary("fr").nav.items.map((item) => item.href),
    );
  });

  it("uses curly apostrophes in user-facing copy (no straight quotes)", () => {
    for (const locale of locales) {
      const dict = getDictionary(locale);
      expect(JSON.stringify(dict)).not.toMatch(/[^\\]'/);
    }
  });

  it("prefixes hrefs for non-default locales only", () => {
    expect(localizeHref("fr", "/collection")).toBe("/collection");
    expect(localizeHref("en", "/collection")).toBe("/en/collection");
    expect(localizeHref("en", "/")).toBe("/en");
    expect(localizeHref("en", "/#contact")).toBe("/en#contact");
    expect(localizeHref("en", "https://instagram.com/x")).toBe("https://instagram.com/x");
  });

  it("splits and switches locales on a pathname", () => {
    expect(splitLocale("/en/panier")).toEqual({ locale: "en", path: "/panier" });
    expect(splitLocale("/en")).toEqual({ locale: "en", path: "/" });
    expect(splitLocale("/panier")).toEqual({ locale: "fr", path: "/panier" });
    expect(splitLocale("/de/panier")).toEqual({ locale: "fr", path: "/de/panier" });
    expect(switchLocaleHref("/en/parfums/tobacco", "fr")).toBe("/parfums/tobacco");
    expect(switchLocaleHref("/parfums/tobacco", "en")).toBe("/en/parfums/tobacco");
  });

  it("lists hreflang alternates with a French x-default", () => {
    expect(localeAlternates("/collection", locales)).toEqual({
      fr: "/collection",
      en: "/en/collection",
      "x-default": "/collection",
    });
  });
});
