import type { Dictionary } from "../types";

/** Italian UI dictionary. Same shape as `fr`; hrefs stay locale-free paths. */
export const it: Dictionary = {
  nav: {
    brandHome: "Karnain — home",
    openMenu: "Apri il menu",
    closeMenu: "Chiudi il menu",
    items: [
      { label: "Collezione", href: "/collection" },
      { label: "La maison", href: "/maison" },
      { label: "Contatti", href: "/#contact" },
    ],
  },

  heroCarousel: {
    carousel: "I nostri profumi signature",
    eyebrow: "Extrait de parfum",
    previous: "Profumo precedente",
    next: "Profumo successivo",
    discover: "Scopri",
  },

  hero: {
    eyebrow: "Maison di profumi · Francia",
    statement: "L’arte del profumo, alla francese.",
    lede: "Fragranze d’eccezione, composte con le essenze più nobili, per chi fa del profumo una firma.",
    primaryCta: "Scopri la collezione",
    secondaryCta: "Contattaci",
  },

  signatures: {
    eyebrow: "Gli imperdibili",
    title: "Le signature",
    intro: "Le nostre fragranze più desiderate, da scoprire per prime.",
  },

  collection: {
    eyebrow: "La collezione",
    title: "Karnain Addicte",
    intro:
      "Una collezione di profumi d’eccezione — i classici che ogni amante del profumo dovrebbe possedere.",
    imageComingSoon: "Immagine in arrivo",
    fromLabel: "A partire da",
  },

  collectionPage: {
    eyebrow: "La collezione",
    title: "Karnain Addicte",
    intro: "Sei fragranze d’eccezione. Filtra per famiglia per trovare la tua.",
    filterLabel: "Filtra",
    filterAll: "Tutte",
  },

  badges: {
    new: "Novità",
    bestSeller: "Best-seller",
  },

  story: {
    eyebrow: "La maison",
    title: "L’arte del profumo",
    body1:
      "Dal XVI secolo, la coltivazione delle piante da profumo e l’arte della composizione si tramandano nella regione di Grasse. Karnain si inscrive in questa eredità, con il gusto della misura e dell’eleganza.",
    body2:
      "I nostri profumi sono composti da grandi nasi, formati nelle maison più prestigiose, a partire dalle essenze più nobili — materie scelte ai quattro angoli del mondo, senza compromessi.",
    cta: "Scopri la maison",
  },

  maison: {
    eyebrow: "La maison",
    title: "Entrare nell’universo Karnain",
    lede: "Karnain nasce da una convinzione semplice: un profumo non si indossa, si racconta. Ogni fragranza della maison è pensata come un ricordo da portare con sé.",
    chapters: [
      {
        title: "L’origine",
        body1:
          "Tutto comincia con un’ossessione — quella del gesto giusto. Scegliere una materia piuttosto che un’altra, dosare a poche gocce, ricominciare finché l’accordo non si impone da sé.",
        body2:
          "La maison avanza al proprio ritmo. Poche fragranze, lavorate a lungo, piuttosto che una collezione che si dilata. Ciò che firmiamo deve potersi portare dieci anni senza passare di moda.",
      },
      {
        title: "La composizione",
        body1:
          "I nostri profumi sono estratti: alta concentrazione, lunga tenuta, un’evoluzione lenta sulla pelle. Le materie sono scelte per il loro carattere — una rosa che non è mai docile, un cuoio che conserva la sua asprezza, una vaniglia che non scivola mai nella dolcezza facile.",
        body2: "Niente è aggiunto per fare bella figura. Se una nota non serve all’accordo, esce.",
      },
      {
        title: "Il flacone",
        body1:
          "Un vetro spesso, un tappo dorato, un’etichetta bianca che lascia parlare la fragranza. Il flacone Karnain è lo stesso da una fragranza all’altra — cambia solo il colore del profumo.",
        body2: "È una famiglia, non una collezione di oggetti.",
      },
    ],
    quote: "Un profumo riuscito non si nota subito. Si riconosce.",
    closingTitle: "Trova la tua",
    closingBody:
      "Sei fragranze, sei caratteri. Quella giusta è raramente quella che si crede — prenditi il tempo di scoprirle.",
    closingCta: "Scopri la collezione",
  },

  maisonStrip: {
    alt: "Le sei fragranze Karnain, ciascuna sulla propria materia: vaniglia, cuoio, ciliegia, cioccolato, rosa e tabacco.",
  },

  campaign: {
    eyebrow: "La maison Karnain",
    title: "Sei fragranze d’eccezione. Una firma.",
    cta: "Scopri la collezione",
  },

  instagram: {
    eyebrow: "Seguici",
    handle: "@karnain_paris",
    cta: "Seguici su Instagram",
  },

  contact: {
    eyebrow: "Contatti",
    title: "Una fragranza ti chiama?",
    body: "Scrivici — ti consigliamo con piacere.",
    emailCta: "Scrivici",
    emailSubject: "Richiesta — profumi Karnain",
  },

  cart: {
    bag: "Carrello",
    openBag: "Apri il carrello",
    closeBag: "Chiudi il carrello",
    addToBag: "Aggiungi al carrello",
    title: "Il tuo carrello",
    empty: "Il tuo carrello è vuoto.",
    emptyCta: "Scopri la collezione",
    subtotal: "Subtotale",
    increase: "Aumenta la quantità",
    decrease: "Riduci la quantità",
    remove: "Rimuovi",
    continue: "Continua gli acquisti",
    viewBag: "Vedi il carrello",
    checkout: "Procedi all’ordine",
    checkoutPending: "Reindirizzamento al pagamento…",
    checkoutSoon: "Il pagamento online arriva presto.",
  },

  orderConfirmation: {
    confirmed: {
      eyebrow: "Ordine confermato",
      title: "Grazie per il tuo ordine",
      body: "Il tuo pagamento è stato ricevuto. Riceverai a breve un’e-mail di conferma.",
      cta: "Continua gli acquisti",
      href: "/collection",
    },
    processing: {
      eyebrow: "Ordine registrato",
      title: "Grazie per il tuo ordine",
      body: "Il tuo pagamento è in fase di convalida. Riceverai un’e-mail non appena sarà confermato.",
      cta: "Continua gli acquisti",
      href: "/collection",
    },
    failed: {
      eyebrow: "Pagamento non completato",
      title: "Il tuo ordine non è andato a buon fine",
      body: "Nessun importo è stato addebitato. Il tuo carrello ti aspetta se vuoi riprovare.",
      cta: "Torna al carrello",
      href: "/panier",
    },
    unknown: {
      eyebrow: "Ordine",
      title: "Ordine non trovato",
      body: "Non troviamo questo ordine. Se hai appena pagato, fa fede l’e-mail di conferma.",
      cta: "Scopri la collezione",
      href: "/collection",
    },
  },

  product: {
    backToCollection: "Torna alla collezione",
    notesTitle: "Le note",
    noteHead: "Note di testa",
    noteHeart: "Note di cuore",
    noteBase: "Note di fondo",
    adviceLabel: "Hai bisogno di un consiglio?",
    emailCta: "Scrivici",
    emailSubject: "Consiglio — {fragrance}",
    galleryZoom: "Ingrandisci l’immagine",
    galleryClose: "Chiudi",
    galleryPrev: "Immagine precedente",
    galleryNext: "Immagine successiva",
    alsoTitle: "Da scoprire anche",
    notFoundTitle: "Fragranza non trovata",
    notFoundBody: "Questa fragranza non esiste o non è più disponibile.",
    errorTitle: "Si è verificato un errore",
    errorBody: "Impossibile mostrare questa fragranza al momento.",
    retry: "Riprova",
    imageAlt: "{fragrance} — immagine {n}",
  },

  footer: {
    tagline: "Maison di profumi francese. Fragranze d’eccezione, alla francese.",
    maisonTitle: "La maison",
    serviceTitle: "Servizio clienti",
    followTitle: "Seguici",
    instagram: "Instagram",
    legalNote: "Note legali e condizioni di vendita — presto disponibili.",
    rights: "Tutti i diritti riservati.",
  },

  meta: {
    baseline: "Maison di profumi",
    description:
      "Karnain, maison di profumi francese. Fragranze d’eccezione dalle essenze più nobili, composte alla francese.",
    cartTitle: "Il tuo carrello",
    thankYouTitle: "Grazie",
  },

  locale: {
    switchLabel: "Lingua",
    names: { fr: "Français", en: "English", it: "Italiano", es: "Español", de: "Deutsch" },
  },
};
