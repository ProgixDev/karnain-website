import { describe, expect, it } from "vitest";
import { localizeFragrance } from "./localize";

const base = {
  slug: "x",
  name: "X",
  collectionSlug: "c",
  family: "Floraux",
  priceEur: 1,
  mood: "fr mood",
  description: "fr description",
  notes: { head: ["A"], heart: [], base: [] },
  featured: false,
  images: [],
  status: "published" as const,
  isNew: false,
  isBestSeller: false,
};

describe("localizeFragrance", () => {
  it("falls back to French field by field", () => {
    const en = localizeFragrance(base, { en: { mood: "en mood" } }, "en");
    expect(en.mood).toBe("en mood");
    expect(en.description).toBe("fr description");
    expect(en.familyLabel).toBe("Floraux");
    expect(en.notes.head).toEqual(["A"]);
  });

  it("ignores translations for French and tolerates a missing column", () => {
    expect(localizeFragrance(base, { en: { mood: "en mood" } }, "fr").mood).toBe("fr mood");
    expect(localizeFragrance(base, null, "en").mood).toBe("fr mood");
  });
});
