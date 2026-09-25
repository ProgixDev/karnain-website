import type { Dictionary } from "../types";

/** German UI dictionary. Same shape as `fr`; hrefs stay locale-free paths. */
export const de: Dictionary = {
  nav: {
    brandHome: "Karnain — Startseite",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
    items: [
      { label: "Kollektion", href: "/collection" },
      { label: "Das Haus", href: "/maison" },
      { label: "Kontakt", href: "/#contact" },
    ],
  },

  heroCarousel: {
    carousel: "Unsere Signature-Düfte",
    eyebrow: "Extrait de parfum",
    previous: "Vorheriger Duft",
    next: "Nächster Duft",
    discover: "Entdecken",
  },

  hero: {
    eyebrow: "Parfumhaus · Frankreich",
    statement: "Die Kunst des Parfums, auf französische Art.",
    lede: "Außergewöhnliche Düfte, komponiert aus den edelsten Essenzen, für alle, die Parfum zu ihrer Signatur machen.",
    primaryCta: "Kollektion entdecken",
    secondaryCta: "Kontakt aufnehmen",
  },

  signatures: {
    eyebrow: "Die Unverzichtbaren",
    title: "Die Signaturen",
    intro: "Unsere begehrtesten Düfte, zuerst zu entdecken.",
  },

  collection: {
    eyebrow: "Die Kollektion",
    title: "Karnain Addicte",
    intro:
      "Eine Kollektion außergewöhnlicher Parfums — Klassiker, die jeder Parfumliebhaber besitzen sollte.",
    imageComingSoon: "Bild folgt",
    fromLabel: "Ab",
  },

  collectionPage: {
    eyebrow: "Die Kollektion",
    title: "Karnain Addicte",
    intro: "Sechs außergewöhnliche Düfte. Nach Duftfamilie filtern, um Ihren zu finden.",
    filterLabel: "Filtern",
    filterAll: "Alle",
  },

  badges: {
    new: "Neu",
    bestSeller: "Bestseller",
  },

  story: {
    eyebrow: "Das Haus",
    title: "Die Kunst des Parfums",
    body1:
      "Seit dem 16. Jahrhundert werden der Anbau von Duftpflanzen und die Kunst der Komposition in der Region um Grasse weitergegeben. Karnain steht in diesem Erbe, mit Sinn für Maß und Eleganz.",
    body2:
      "Unsere Parfums werden von großen Nasen komponiert, ausgebildet in den renommiertesten Häusern, aus den edelsten Essenzen — Rohstoffe aus allen Teilen der Welt, ohne Kompromisse.",
    cta: "Das Haus entdecken",
  },

  maison: {
    eyebrow: "Das Haus",
    title: "Eintritt in die Welt von Karnain",
    lede: "Karnain entstand aus einer einfachen Überzeugung: Ein Parfum trägt man nicht, man erzählt es. Jeder Duft des Hauses ist als Erinnerung gedacht, die man mit sich nimmt.",
    chapters: [
      {
        title: "Der Ursprung",
        body1:
          "Alles beginnt mit einer Obsession — der nach der richtigen Geste. Einen Rohstoff dem anderen vorziehen, auf wenige Tropfen genau dosieren, von vorn beginnen, bis sich der Akkord von selbst durchsetzt.",
        body2:
          "Das Haus geht in seinem eigenen Tempo. Wenige, lange ausgearbeitete Düfte statt einer Kollektion, die sich ausdehnt. Was wir signieren, muss sich zehn Jahre tragen lassen, ohne aus der Mode zu kommen.",
      },
      {
        title: "Die Komposition",
        body1:
          "Unsere Parfums sind Extraits: hohe Konzentration, lange Haltbarkeit, eine langsame Entwicklung auf der Haut. Die Rohstoffe werden für ihren Charakter gewählt — eine Rose, die nicht brav ist, ein Leder, das seine Rauheit behält, eine Vanille, die nie in leichte Süße kippt.",
        body2:
          "Nichts wird zur Zierde hinzugefügt. Dient eine Note dem Akkord nicht, fliegt sie raus.",
      },
      {
        title: "Der Flakon",
        body1:
          "Dickes Glas, ein goldener Verschluss, ein weißes Etikett, das den Duft sprechen lässt. Der Karnain-Flakon ist von Duft zu Duft derselbe — nur die Farbe des Parfums ändert sich.",
        body2: "Es ist eine Familie, keine Sammlung von Objekten.",
      },
    ],
    quote: "Ein gelungenes Parfum fällt nicht sofort auf. Man erkennt es.",
    closingTitle: "Finden Sie Ihren",
    closingBody:
      "Sechs Düfte, sechs Charaktere. Der richtige ist selten der, den man vermutet — nehmen Sie sich Zeit, sie zu entdecken.",
    closingCta: "Kollektion entdecken",
  },

  maisonStrip: {
    alt: "Die sechs Karnain-Düfte, jeder auf seinem Rohstoff: Vanille, Leder, Kirsche, Schokolade, Rose und Tabak.",
  },

  campaign: {
    eyebrow: "Das Haus Karnain",
    title: "Sechs außergewöhnliche Düfte. Eine Signatur.",
    cta: "Kollektion entdecken",
  },

  instagram: {
    eyebrow: "Folgen Sie uns",
    handle: "@karnain_paris",
    cta: "Auf Instagram folgen",
  },

  contact: {
    eyebrow: "Kontakt",
    title: "Ruft Sie ein Duft?",
    body: "Schreiben Sie uns — wir beraten Sie gern.",
    emailCta: "Schreiben Sie uns",
    emailSubject: "Anfrage — Karnain Parfums",
  },

  cart: {
    bag: "Warenkorb",
    openBag: "Warenkorb öffnen",
    closeBag: "Warenkorb schließen",
    addToBag: "In den Warenkorb",
    title: "Ihr Warenkorb",
    empty: "Ihr Warenkorb ist leer.",
    emptyCta: "Kollektion entdecken",
    subtotal: "Zwischensumme",
    increase: "Menge erhöhen",
    decrease: "Menge verringern",
    remove: "Entfernen",
    continue: "Weiter einkaufen",
    viewBag: "Warenkorb ansehen",
    checkout: "Zur Kasse",
    checkoutPending: "Weiterleitung zur Zahlung…",
    checkoutSoon: "Die Online-Zahlung kommt bald.",
  },

  orderConfirmation: {
    confirmed: {
      eyebrow: "Bestellung bestätigt",
      title: "Vielen Dank für Ihre Bestellung",
      body: "Ihre Zahlung ist eingegangen. Eine Bestätigungs-E-Mail erreicht Sie in Kürze.",
      cta: "Weiter einkaufen",
      href: "/collection",
    },
    processing: {
      eyebrow: "Bestellung erfasst",
      title: "Vielen Dank für Ihre Bestellung",
      body: "Ihre Zahlung wird geprüft. Sie erhalten eine E-Mail, sobald sie bestätigt ist.",
      cta: "Weiter einkaufen",
      href: "/collection",
    },
    failed: {
      eyebrow: "Zahlung nicht abgeschlossen",
      title: "Ihre Bestellung ist nicht zustande gekommen",
      body: "Es wurde kein Betrag abgebucht. Ihr Warenkorb wartet, falls Sie es erneut versuchen möchten.",
      cta: "Zurück zum Warenkorb",
      href: "/panier",
    },
    unknown: {
      eyebrow: "Bestellung",
      title: "Bestellung nicht gefunden",
      body: "Wir finden diese Bestellung nicht. Falls Sie gerade bezahlt haben, gilt die Bestätigungs-E-Mail.",
      cta: "Kollektion entdecken",
      href: "/collection",
    },
  },

  product: {
    backToCollection: "Zurück zur Kollektion",
    notesTitle: "Die Noten",
    noteHead: "Kopfnote",
    noteHeart: "Herznote",
    noteBase: "Basisnote",
    adviceLabel: "Beratung gewünscht?",
    emailCta: "Schreiben Sie uns",
    emailSubject: "Beratung — {fragrance}",
    galleryZoom: "Bild vergrößern",
    galleryClose: "Schließen",
    galleryPrev: "Vorheriges Bild",
    galleryNext: "Nächstes Bild",
    alsoTitle: "Ebenfalls entdecken",
    notFoundTitle: "Duft nicht gefunden",
    notFoundBody: "Dieser Duft existiert nicht oder ist nicht mehr verfügbar.",
    errorTitle: "Ein Fehler ist aufgetreten",
    errorBody: "Dieser Duft kann derzeit nicht angezeigt werden.",
    retry: "Erneut versuchen",
    imageAlt: "{fragrance} — Bild {n}",
  },

  footer: {
    tagline: "Französisches Parfumhaus. Außergewöhnliche Düfte, auf französische Art.",
    maisonTitle: "Das Haus",
    serviceTitle: "Kundenservice",
    followTitle: "Folgen Sie uns",
    instagram: "Instagram",
    legalNote: "Impressum und AGB — in Kürze verfügbar.",
    rights: "Alle Rechte vorbehalten.",
  },

  meta: {
    baseline: "Parfumhaus",
    description:
      "Karnain, französisches Parfumhaus. Außergewöhnliche Düfte aus den edelsten Essenzen, komponiert auf französische Art.",
    cartTitle: "Ihr Warenkorb",
    thankYouTitle: "Danke",
  },

  locale: {
    switchLabel: "Sprache",
    names: { fr: "Français", en: "English", it: "Italiano", es: "Español", de: "Deutsch" },
  },
};
