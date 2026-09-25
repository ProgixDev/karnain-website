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
    it: {
      family: "Legnosi & ambrati",
      mood: "Caldo, legnoso, avvolgente.",
      description:
        "Tobacco è una miscela deliziosamente complessa di note calde e fresche. La base di tabacco crea una sensazione di sofisticazione e mistero, mentre il lampone aggiunge un tocco di freschezza ed eleganza.\n\nAl cuore, il cuoio robusto e fumé si sposa con la profondità aromatica del tabacco, creando un’atmosfera calda e avvolgente. I fiori delicati di violetta, mughetto e rosa portano un contrasto dolce e floreale.\n\nIl fondo poggia su una base sensuale in cui ambra e muschio si intrecciano. La vaniglia dolce, unita alle sfumature terrose del patchouli e della fava tonka, aggiunge una dimensione avvolgente che crea dipendenza.",
      notes: {
        head: ["Lampone", "Zafferano", "Bergamotto"],
        heart: ["Cuoio", "Tabacco", "Violetta", "Mughetto", "Rosa"],
        base: ["Ambra", "Muschio", "Vaniglia", "Patchouli", "Fava tonka"],
      },
    },
    es: {
      family: "Amaderados y ambarados",
      mood: "Cálido, amaderado, envolvente.",
      description:
        "Tobacco es una mezcla deliciosamente compleja de notas cálidas y frescas. La base de tabaco crea una sensación de sofisticación y misterio, mientras la frambuesa añade un toque de frescura y elegancia.\n\nEn el corazón, el cuero robusto y ahumado se une a la profundidad aromática del tabaco, creando un ambiente cálido y envolvente. Las flores delicadas de violeta, muguete y rosa aportan un contraste suave y floral.\n\nEl fondo descansa sobre una base sensual donde el ámbar y el almizcle se entrelazan. La vainilla dulce, junto a los matices terrosos del pachulí y el haba tonka, añade una dimensión adictiva y cálida.",
      notes: {
        head: ["Frambuesa", "Azafrán", "Bergamota"],
        heart: ["Cuero", "Tabaco", "Violeta", "Muguete", "Rosa"],
        base: ["Ámbar", "Almizcle", "Vainilla", "Pachulí", "Haba tonka"],
      },
    },
    de: {
      family: "Holzig & ambriert",
      mood: "Warm, holzig, umhüllend.",
      description:
        "Tobacco ist eine köstlich komplexe Mischung aus warmen und frischen Noten. Die Tabakbasis schafft ein Gefühl von Raffinesse und Geheimnis, während Himbeere einen Hauch von Frische und Eleganz beisteuert.\n\nIm Herzen verbindet sich robustes, rauchiges Leder mit der aromatischen Tiefe des Tabaks zu einer warmen, umhüllenden Stimmung. Zarte Veilchen, Maiglöckchen und Rose setzen einen sanften, floralen Kontrast.\n\nDie Basis ruht auf einem sinnlichen Fundament, in dem sich Amber und Moschus verflechten. Weiche Vanille, gepaart mit den erdigen Nuancen von Patschuli und Tonkabohne, verleiht eine süchtig machende, warme Dimension.",
      notes: {
        head: ["Himbeere", "Safran", "Bergamotte"],
        heart: ["Leder", "Tabak", "Veilchen", "Maiglöckchen", "Rose"],
        base: ["Amber", "Moschus", "Vanille", "Patschuli", "Tonkabohne"],
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
    it: {
      family: "Legnosi & ambrati",
      mood: "Cuoio nobile, fumé, di razza.",
      description:
        "«Cuir 90» è un profumo di nicchia audace, un omaggio alla fusione tra raffinatezza e potenza grezza. Fin dall’apertura, un lampone succoso esplode con vivacità fruttata, prima di lasciare spazio a un cuore dominato da una nota di cuoio intensa e fumé, rafforzata dalla fava tonka e dall’incenso.\n\nSul fondo, il profumo si posa su un accordo sensuale di muschio avvolgente, arricchito da una vaniglia cremosa. L’ambra aggiunge un tocco di calore dorato, mentre il legno di cedro struttura l’insieme con un’eleganza legnosa e senza tempo.",
      notes: {
        head: ["Lampone"],
        heart: ["Cuoio", "Fava tonka", "Incenso"],
        base: ["Muschio", "Vaniglia", "Ambra", "Legno di cedro"],
      },
    },
    es: {
      family: "Amaderados y ambarados",
      mood: "Cuero noble, ahumado, con carácter.",
      description:
        "«Cuir 90» es un perfume de nicho audaz, un homenaje a la fusión entre el refinamiento y la fuerza bruta. Desde la apertura, una frambuesa jugosa estalla con vivacidad afrutada, antes de dar paso a un corazón dominado por una nota de cuero intensa y ahumada, reforzada por el haba tonka y el incienso.\n\nEn el fondo, el perfume se posa sobre un acorde sensual de almizcle envolvente, enriquecido con vainilla cremosa. El ámbar añade un toque de calidez dorada, mientras la madera de cedro estructura el conjunto con una elegancia amaderada e intemporal.",
      notes: {
        head: ["Frambuesa"],
        heart: ["Cuero", "Haba tonka", "Incienso"],
        base: ["Almizcle", "Vainilla", "Ámbar", "Madera de cedro"],
      },
    },
    de: {
      family: "Holzig & ambriert",
      mood: "Edles Leder, rauchig, rassig.",
      description:
        "„Cuir 90“ ist ein kühnes Nischenparfum, eine Hommage an die Verbindung von Raffinesse und roher Kraft. Gleich zu Beginn platzt eine saftige Himbeere mit fruchtiger Lebendigkeit auf, bevor ein Herz übernimmt, das von einer intensiven, rauchigen Ledernote dominiert wird, verstärkt durch Tonkabohne und Weihrauch.\n\nIn der Basis ruht das Parfum auf einem sinnlichen Akkord aus umhüllendem Moschus, bereichert durch cremige Vanille. Amber steuert goldene Wärme bei, während Zedernholz das Ganze mit holziger, zeitloser Eleganz strukturiert.",
      notes: {
        head: ["Himbeere"],
        heart: ["Leder", "Tonkabohne", "Weihrauch"],
        base: ["Moschus", "Vanille", "Amber", "Zedernholz"],
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
    it: {
      family: "Floreali",
      mood: "Rosa solare, viaggiatrice.",
      description:
        "«Rose des Îles» è una miscela equilibrata di note floreali di rosa e bergamotto, combinate con note più profonde di muschio e vaniglia — perfetta per ogni occasione.\n\nLa rosa porta un tocco di freschezza e sensualità, mentre il bergamotto aggiunge una nota agrumata che risveglia i sensi. Muschio e vaniglia donano profondità e calore alla fragranza.",
      notes: {
        head: ["Bergamotto"],
        heart: ["Rosa", "Mughetto"],
        base: ["Vaniglia", "Muschio", "Ambra"],
      },
    },
    es: {
      family: "Florales",
      mood: "Rosa solar, viajera.",
      description:
        "«Rose des Îles» es una mezcla equilibrada de notas florales de rosa y bergamota, combinada con notas más profundas de almizcle y vainilla — perfecta para cualquier ocasión.\n\nLa rosa aporta un toque de frescura y sensualidad, mientras la bergamota añade una nota cítrica que despierta los sentidos. El almizcle y la vainilla dan profundidad y calidez a la fragancia.",
      notes: {
        head: ["Bergamota"],
        heart: ["Rosa", "Muguete"],
        base: ["Vainilla", "Almizcle", "Ámbar"],
      },
    },
    de: {
      family: "Blumig",
      mood: "Sonnige, weitgereiste Rose.",
      description:
        "„Rose des Îles“ ist eine ausgewogene Mischung aus blumigen Rosen- und Bergamottenoten, kombiniert mit tieferen Noten von Moschus und Vanille — perfekt für jeden Anlass.\n\nDie Rose bringt Frische und Sinnlichkeit, während Bergamotte eine zitrische Note beisteuert, die die Sinne weckt. Moschus und Vanille verleihen dem Duft Tiefe und Wärme.",
      notes: {
        head: ["Bergamotte"],
        heart: ["Rose", "Maiglöckchen"],
        base: ["Vanille", "Moschus", "Amber"],
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
    it: {
      family: "Gourmand",
      mood: "Gourmand, sensuale, irresistibile.",
      description:
        "«Tentation» è una vera golosità olfattiva, un profumo che seduce con la sua audacia zuccherina e la sua profondità sensuale. Fin dalle prime note, una fragola brillante si mescola alla ricchezza scura del cacao.\n\nAl cuore, il profumo si intensifica con accordi di cioccolato fondente e zucchero filato, una miscela dolce e nostalgica. Sul fondo, una base cremosa di vaniglia dolce, rafforzata da un muschio sensuale e da un tocco ambrato.",
      notes: {
        head: ["Fragola", "Cacao"],
        heart: ["Cioccolato", "Zucchero filato", "Zucchero"],
        base: ["Vaniglia", "Muschio", "Ambra"],
      },
    },
    es: {
      family: "Gourmand",
      mood: "Goloso, sensual, irresistible.",
      description:
        "«Tentation» es una auténtica golosina olfativa, un perfume que seduce por su audacia dulce y su profundidad sensual. Desde las primeras notas, una fresa brillante se mezcla con la riqueza oscura del cacao.\n\nEn el corazón, el perfume se intensifica con acordes de chocolate fundido y algodón de azúcar, una mezcla dulce y nostálgica. En el fondo, una base cremosa de vainilla suave, reforzada por un almizcle sensual y un toque ambarado.",
      notes: {
        head: ["Fresa", "Cacao"],
        heart: ["Chocolate", "Algodón de azúcar", "Azúcar"],
        base: ["Vainilla", "Almizcle", "Ámbar"],
      },
    },
    de: {
      family: "Gourmand",
      mood: "Gourmand, sinnlich, unwiderstehlich.",
      description:
        "„Tentation“ ist eine wahre olfaktorische Süßspeise, ein Parfum, das mit süßer Kühnheit und sinnlicher Tiefe verführt. Schon in den ersten Noten mischt sich eine leuchtende Erdbeere mit der dunklen Fülle des Kakaos.\n\nIm Herzen steigert sich das Parfum mit Akkorden aus schmelzender Schokolade und Zuckerwatte, einer süßen, nostalgischen Mischung. In der Basis eine cremige Grundlage aus weicher Vanille, verstärkt durch sinnlichen Moschus und einen Hauch Amber.",
      notes: {
        head: ["Erdbeere", "Kakao"],
        heart: ["Schokolade", "Zuckerwatte", "Zucker"],
        base: ["Vanille", "Moschus", "Amber"],
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
    it: {
      family: "Gourmand",
      mood: "Dolce, avvolgente, luminoso.",
      description:
        "«Sucre Addictée» è un’esplosione di pura golosità. Fin dalle prime note, uno zucchero filato aereo si mescola alla mela caramellata croccante, ricordando le dolcezze dell’infanzia.\n\nAl cuore, la golosità si fa più intensa con un accordo di zucchero scuro e caramello fondente, ravvivato da un tocco di anice. Il fondo è dominato dalla vaniglia cremosa e da una base ambrata calda e rassicurante.",
      notes: {
        head: ["Zucchero filato", "Mela caramellata"],
        heart: ["Zucchero scuro", "Caramello", "Anice"],
        base: ["Vaniglia", "Ambra"],
      },
    },
    es: {
      family: "Gourmand",
      mood: "Dulce, adictivo, luminoso.",
      description:
        "«Sucre Addictée» es una explosión de pura golosina. Desde las primeras notas, un algodón de azúcar aéreo se mezcla con la manzana caramelizada crujiente, evocando los dulces de la infancia.\n\nEn el corazón, la golosina se intensifica con un acorde de azúcar moreno y caramelo fundido, realzado por un toque de anís. El fondo está dominado por la vainilla cremosa y una base ambarada cálida y reconfortante.",
      notes: {
        head: ["Algodón de azúcar", "Manzana caramelizada"],
        heart: ["Azúcar moreno", "Caramelo", "Anís"],
        base: ["Vainilla", "Ámbar"],
      },
    },
    de: {
      family: "Gourmand",
      mood: "Süß, süchtig machend, leuchtend.",
      description:
        "„Sucre Addictée“ ist eine Explosion purer Süße. Schon in den ersten Noten mischt sich luftige Zuckerwatte mit knackigem kandiertem Apfel und weckt Erinnerungen an die Süßigkeiten der Kindheit.\n\nIm Herzen wird die Süße intensiver, mit einem Akkord aus dunklem Zucker und schmelzendem Karamell, aufgefrischt durch einen Hauch Anis. Die Basis wird von cremiger Vanille und einem warmen, tröstlichen Amber-Fundament bestimmt.",
      notes: {
        head: ["Zuckerwatte", "Kandierter Apfel"],
        heart: ["Dunkler Zucker", "Karamell", "Anis"],
        base: ["Vanille", "Amber"],
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
    it: {
      family: "Gourmand",
      mood: "Ciliegia frizzante, audace.",
      description:
        "«Cherry, Je t’aime» è una fragranza vibrante in cui i frutti rossi incontrano spezie e legni preziosi. L’apertura è brillante, con una miscela succosa di ribes nero e lampone, energizzata da bergamotto e zafferano.\n\nAl cuore, la ciliegia polposa si intreccia con la fava tonka e la mandorla, creando un accordo goloso e avvolgente, esaltato da rosa e gelsomino. Sul fondo, l’ambra calda, il muschio e i legni di gaiac, vetiver e sandalo formano una base lussuosa, addolcita dalla vaniglia.",
      notes: {
        head: ["Ribes nero", "Lampone", "Zafferano", "Bergamotto"],
        heart: ["Fava tonka", "Ciliegia", "Mandorla", "Patchouli", "Rosa", "Gelsomino"],
        base: ["Ambra", "Muschio", "Vetiver", "Legno di gaiac", "Sandalo", "Vaniglia"],
      },
    },
    es: {
      family: "Gourmand",
      mood: "Cereza chispeante, audaz.",
      description:
        "«Cherry, Je t’aime» es una fragancia vibrante donde los frutos rojos se encuentran con especias y maderas preciosas. La apertura es deslumbrante, con una mezcla jugosa de grosella negra y frambuesa, dinamizada por la bergamota y el azafrán.\n\nEn el corazón, la cereza carnosa se entrelaza con el haba tonka y la almendra, creando un acorde goloso y adictivo, realzado por la rosa y el jazmín. En el fondo, el ámbar cálido, el almizcle y las maderas de gaiac, vetiver y sándalo forman una base lujosa, suavizada por la vainilla.",
      notes: {
        head: ["Grosella negra", "Frambuesa", "Azafrán", "Bergamota"],
        heart: ["Haba tonka", "Cereza", "Almendra", "Pachulí", "Rosa", "Jazmín"],
        base: ["Ámbar", "Almizcle", "Vetiver", "Madera de gaiac", "Sándalo", "Vainilla"],
      },
    },
    de: {
      family: "Gourmand",
      mood: "Prickelnde Kirsche, kühn.",
      description:
        "„Cherry, Je t’aime“ ist ein lebendiger Duft, in dem rote Früchte auf Gewürze und kostbare Hölzer treffen. Der Auftakt ist strahlend, mit einer saftigen Mischung aus schwarzer Johannisbeere und Himbeere, belebt durch Bergamotte und Safran.\n\nIm Herzen verflicht sich fleischige Kirsche mit Tonkabohne und Mandel zu einem gourmandigen, süchtig machenden Akkord, gehoben von Rose und Jasmin. In der Basis bilden warmer Amber, Moschus sowie Guajak-, Vetiver- und Sandelholz ein luxuriöses Fundament, gemildert durch Vanille.",
      notes: {
        head: ["Schwarze Johannisbeere", "Himbeere", "Safran", "Bergamotte"],
        heart: ["Tonkabohne", "Kirsche", "Mandel", "Patschuli", "Rose", "Jasmin"],
        base: ["Amber", "Moschus", "Vetiver", "Guajakholz", "Sandelholz", "Vanille"],
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
    it: {
      baseline: "La collezione signature",
      description:
        "Profumi d’eccezione — i classici che ogni amante del profumo dovrebbe possedere.",
    },
    es: {
      baseline: "La colección emblemática",
      description:
        "Perfumes de excepción — los clásicos que todo amante del perfume debería tener.",
    },
    de: {
      baseline: "Die Signature-Kollektion",
      description:
        "Außergewöhnliche Parfums — Klassiker, die jeder Parfumliebhaber besitzen sollte.",
    },
  },
};
