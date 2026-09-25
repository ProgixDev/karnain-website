import type { Dictionary } from "../types";

/**
 * English UI dictionary. Same shape as `fr` (enforced by the `Dictionary` type), curly quotes
 * and real ellipses per docs/conventions/copy.md. Route hrefs stay French-pathed: paths are not
 * translated, only prefixed with the locale (see `localizeHref`).
 */
export const en: Dictionary = {
  nav: {
    brandHome: "Karnain — home",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    items: [
      { label: "Collection", href: "/collection" },
      { label: "The house", href: "/maison" },
      { label: "Contact", href: "/#contact" },
    ],
  },

  heroCarousel: {
    carousel: "Our signature fragrances",
    eyebrow: "Extrait de parfum",
    previous: "Previous fragrance",
    next: "Next fragrance",
    discover: "Discover",
  },

  hero: {
    eyebrow: "Perfume house · France",
    statement: "The art of perfume, the French way.",
    lede: "Exceptional fragrances, composed from the noblest essences, for those who make perfume a signature.",
    primaryCta: "Discover the collection",
    secondaryCta: "Contact us",
  },

  signatures: {
    eyebrow: "The essentials",
    title: "The signatures",
    intro: "Our most desired fragrances, to discover first.",
  },

  collection: {
    eyebrow: "The collection",
    title: "Karnain Addicte",
    intro: "A collection of exceptional perfumes — the classics every perfume lover ought to own.",
    imageComingSoon: "Image coming soon",
    fromLabel: "From",
  },

  collectionPage: {
    eyebrow: "The collection",
    title: "Karnain Addicte",
    intro: "Six exceptional fragrances. Filter by family to find yours.",
    filterLabel: "Filter",
    filterAll: "All",
  },

  badges: {
    new: "New",
    bestSeller: "Best-seller",
  },

  story: {
    eyebrow: "The house",
    title: "The art of perfume",
    body1:
      "Since the 16th century, the cultivation of perfume plants and the art of composition have been handed down in the Grasse region. Karnain belongs to that heritage, with a taste for restraint and elegance.",
    body2:
      "Our perfumes are composed by great noses, trained in the finest houses, from the noblest essences — materials chosen from the four corners of the world, without compromise.",
    cta: "Discover the house",
  },

  maison: {
    eyebrow: "The house",
    title: "Step into the Karnain universe",
    lede: "Karnain was born of a simple conviction: a perfume is not worn, it is told. Every fragrance of the house is conceived as a memory you carry with you.",
    chapters: [
      {
        title: "The origin",
        body1:
          "It all begins with an obsession — the right gesture. Choosing one material over another, dosing to within a few drops, starting again until the accord imposes itself.",
        body2:
          "The house moves at its own pace. Few fragrances, worked at length, rather than a collection that sprawls. What we sign must still be wearable ten years on.",
      },
      {
        title: "The composition",
        body1:
          "Our perfumes are extraits: a high concentration, long wear, a slow evolution on the skin. Materials are chosen for their character — a rose that is not well-behaved, a leather that keeps its roughness, a vanilla that never tips into easy sweetness.",
        body2: "Nothing is added for show. If a note does not serve the accord, it goes.",
      },
      {
        title: "The bottle",
        body1:
          "Thick glass, a golden cap, a white label that lets the fragrance speak. The Karnain bottle is the same from one fragrance to the next — only the colour of the perfume changes.",
        body2: "It is a family, not a collection of objects.",
      },
    ],
    quote: "A successful perfume is not noticed at once. It is recognised.",
    closingTitle: "Find yours",
    closingBody:
      "Six fragrances, six characters. The right one is rarely the one you expect — take the time to discover them.",
    closingCta: "Discover the collection",
  },

  maisonStrip: {
    alt: "The six Karnain fragrances, each on its raw material: vanilla, leather, cherry, chocolate, rose and tobacco.",
  },

  campaign: {
    eyebrow: "The house of Karnain",
    title: "Six exceptional fragrances. One signature.",
    cta: "Discover the collection",
  },

  instagram: {
    eyebrow: "Follow us",
    handle: "@karnain_paris",
    cta: "Follow us on Instagram",
  },

  contact: {
    eyebrow: "Contact",
    title: "Is a fragrance calling you?",
    body: "Write to us — we will gladly advise you.",
    emailCta: "Write to us",
    emailSubject: "Enquiry — Karnain perfumes",
  },

  cart: {
    bag: "Bag",
    openBag: "Open the bag",
    closeBag: "Close the bag",
    addToBag: "Add to bag",
    title: "Your bag",
    empty: "Your bag is empty.",
    emptyCta: "Discover the collection",
    subtotal: "Subtotal",
    increase: "Increase quantity",
    decrease: "Decrease quantity",
    remove: "Remove",
    continue: "Continue shopping",
    viewBag: "View bag",
    checkout: "Check out",
    checkoutPending: "Redirecting to payment…",
    checkoutSoon: "Online payment is coming soon.",
  },

  orderConfirmation: {
    confirmed: {
      eyebrow: "Order confirmed",
      title: "Thank you for your order",
      body: "Your payment has been received. A confirmation email will reach you shortly.",
      cta: "Continue shopping",
      href: "/collection",
    },
    processing: {
      eyebrow: "Order received",
      title: "Thank you for your order",
      body: "Your payment is being validated. You will receive an email as soon as it is confirmed.",
      cta: "Continue shopping",
      href: "/collection",
    },
    failed: {
      eyebrow: "Payment not completed",
      title: "Your order did not go through",
      body: "Nothing has been charged. Your bag is waiting if you would like to try again.",
      cta: "Back to the bag",
      href: "/panier",
    },
    unknown: {
      eyebrow: "Order",
      title: "Order not found",
      body: "We cannot find this order. If you have just paid, the confirmation email is what counts.",
      cta: "Discover the collection",
      href: "/collection",
    },
  },

  product: {
    backToCollection: "Back to the collection",
    notesTitle: "The notes",
    noteHead: "Top notes",
    noteHeart: "Heart notes",
    noteBase: "Base notes",
    adviceLabel: "Need advice?",
    emailCta: "Write to us",
    emailSubject: "Advice — {fragrance}",
    galleryZoom: "Enlarge image",
    galleryClose: "Close",
    galleryPrev: "Previous image",
    galleryNext: "Next image",
    alsoTitle: "Also discover",
    notFoundTitle: "Fragrance not found",
    notFoundBody: "This fragrance does not exist or is no longer available.",
    errorTitle: "Something went wrong",
    errorBody: "This fragrance cannot be displayed right now.",
    retry: "Try again",
    imageAlt: "{fragrance} — image {n}",
  },

  footer: {
    tagline: "French perfume house. Exceptional fragrances, the French way.",
    maisonTitle: "The house",
    serviceTitle: "Customer service",
    followTitle: "Follow us",
    instagram: "Instagram",
    legalNote: "Legal notice and terms — coming soon.",
    rights: "All rights reserved.",
  },

  meta: {
    baseline: "Perfume house",
    description:
      "Karnain, French perfume house. Exceptional fragrances from the noblest essences, composed the French way.",
    cartTitle: "Your bag",
    thankYouTitle: "Thank you",
  },

  locale: {
    switchLabel: "Language",
    names: { fr: "Français", en: "English", it: "Italiano", es: "Español", de: "Deutsch" },
  },
};
