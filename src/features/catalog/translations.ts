import type { CollectionTranslation, FragranceTranslation, Translations } from "./types";

/**
 * Product copy in other languages, keyed by slug. Mirrors the `translations` column seeded by
 * `supabase/migrations/*_catalog_translations.sql` — the SQL is generated from this file
 * (`scripts/catalog-translations-sql.mjs`), so edit here and regenerate rather than in both.
 * French lives on the row itself (`data.ts`); names and slugs are never translated.
 */

export const fragranceTranslations: Record<string, Translations<FragranceTranslation>> = {
  tobacco: {
    en: {
      family: "Woody & amber",
      mood: "Warm, woody, enveloping.",
      description:
        "Tobacco is a deliciously complex blend of warm and fresh notes. The tobacco base creates a feeling of sophistication and mystery, while raspberry adds a touch of freshness and elegance.\n\nAt the heart, robust, smoky leather meets the aromatic depth of tobacco, creating a warm, enveloping atmosphere. Delicate violet, lily of the valley and rose bring a soft floral contrast.\n\nThe base rests on a sensual foundation where amber and musk intertwine. Soft vanilla, paired with the earthy nuances of patchouli and tonka bean, adds an addictive, comforting dimension.",
      notes: {
        head: ["Raspberry", "Saffron", "Bergamot"],
        heart: ["Leather", "Tobacco", "Violet", "Lily of the valley", "Rose"],
        base: ["Amber", "Musk", "Vanilla", "Patchouli", "Tonka bean"],
      },
    },
  },
  "cuir-90": {
    en: {
      family: "Woody & amber",
      mood: "Noble leather, smoky, refined.",
      description:
        "“Cuir 90” is a bold niche perfume, a tribute to the fusion of refinement and raw power. From the opening, a juicy raspberry bursts with fruity vivacity, before giving way to a heart dominated by an intense, smoky leather note, reinforced by tonka bean and incense.\n\nIn the base, the perfume settles on a sensual accord of enveloping musk, enriched with creamy vanilla. Amber adds a touch of golden warmth, while cedarwood structures the whole with a woody, timeless elegance.",
      notes: {
        head: ["Raspberry"],
        heart: ["Leather", "Tonka bean", "Incense"],
        base: ["Musk", "Vanilla", "Amber", "Cedarwood"],
      },
    },
  },
  "rose-des-iles": {
    en: {
      family: "Floral",
      mood: "A sun-drenched, well-travelled rose.",
      description:
        "“Rose des Îles” is a balanced blend of floral rose and bergamot notes, combined with deeper notes of musk and vanilla — perfect for every occasion.\n\nThe rose brings a touch of freshness and sensuality, while bergamot adds a citrus note that awakens the senses. Musk and vanilla give the fragrance depth and warmth.",
      notes: {
        head: ["Bergamot"],
        heart: ["Rose", "Lily of the valley"],
        base: ["Vanilla", "Musk", "Amber"],
      },
    },
  },
  tentation: {
    en: {
      family: "Gourmand",
      mood: "Gourmand, sensual, irresistible.",
      description:
        "“Tentation” is a true olfactory indulgence, a perfume that seduces with its sweet audacity and sensual depth. From the first notes, a vivid strawberry mingles with the dark richness of cocoa.\n\nAt the heart, the perfume intensifies with accords of melting chocolate and cotton candy, a sweet and nostalgic blend. In the base, a creamy foundation of soft vanilla, reinforced by a sensual musk and a touch of amber.",
      notes: {
        head: ["Strawberry", "Cocoa"],
        heart: ["Chocolate", "Cotton candy", "Sugar"],
        base: ["Vanilla", "Musk", "Amber"],
      },
    },
  },
  "sucre-addictee": {
    en: {
      family: "Gourmand",
      mood: "Sweet, addictive, luminous.",
      description:
        "“Sucre Addictée” is an explosion of pure indulgence. From the first notes, an airy cotton candy mingles with crunchy candy apple, recalling the sweets of childhood.\n\nAt the heart, the indulgence grows more intense with an accord of dark sugar and melting caramel, lifted by a touch of anise. The base is dominated by creamy vanilla and a warm, comforting amber foundation.",
      notes: {
        head: ["Cotton candy", "Candy apple"],
        heart: ["Dark sugar", "Caramel", "Anise"],
        base: ["Vanilla", "Amber"],
      },
    },
  },
  "cherry-je-taime": {
    en: {
      family: "Gourmand",
      mood: "Sparkling cherry, daring.",
      description:
        "“Cherry, Je t’aime” is a vibrant fragrance where red fruits meet spices and precious woods. The opening is dazzling, with a juicy blend of blackcurrant and raspberry, energised by bergamot and saffron.\n\nAt the heart, plump cherry intertwines with tonka bean and almond, creating a gourmand, addictive accord, heightened by rose and jasmine. In the base, warm amber, musk and guaiac, vetiver and sandalwood form a luxurious foundation, softened by vanilla.",
      notes: {
        head: ["Blackcurrant", "Raspberry", "Saffron", "Bergamot"],
        heart: ["Tonka bean", "Cherry", "Almond", "Patchouli", "Rose", "Jasmine"],
        base: ["Amber", "Musk", "Vetiver", "Guaiac wood", "Sandalwood", "Vanilla"],
      },
    },
  },
};

export const collectionTranslations: Record<string, Translations<CollectionTranslation>> = {
  "karnain-addicte": {
    en: {
      baseline: "The signature collection",
      description: "Exceptional perfumes — the classics every perfume lover ought to own.",
    },
  },
};
