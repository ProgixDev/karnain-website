import type { Dictionary } from "../types";

/** Spanish UI dictionary. Same shape as `fr`; hrefs stay locale-free paths. */
export const es: Dictionary = {
  nav: {
    brandHome: "Karnain — inicio",
    openMenu: "Abrir el menú",
    closeMenu: "Cerrar el menú",
    items: [
      { label: "Colección", href: "/collection" },
      { label: "La maison", href: "/maison" },
      { label: "Contacto", href: "/#contact" },
    ],
  },

  heroCarousel: {
    carousel: "Nuestros perfumes emblemáticos",
    eyebrow: "Extrait de parfum",
    previous: "Perfume anterior",
    next: "Perfume siguiente",
    discover: "Descubrir",
  },

  hero: {
    eyebrow: "Casa de perfumes · Francia",
    statement: "El arte del perfume, a la francesa.",
    lede: "Fragancias de excepción, compuestas con las esencias más nobles, para quienes hacen del perfume una firma.",
    primaryCta: "Descubrir la colección",
    secondaryCta: "Contactarnos",
  },

  signatures: {
    eyebrow: "Los imprescindibles",
    title: "Las firmas",
    intro: "Nuestras fragancias más deseadas, para descubrir primero.",
  },

  collection: {
    eyebrow: "La colección",
    title: "Karnain Addicte",
    intro:
      "Una colección de perfumes de excepción — los clásicos que todo amante del perfume debería tener.",
    imageComingSoon: "Imagen próximamente",
    fromLabel: "Desde",
  },

  collectionPage: {
    eyebrow: "La colección",
    title: "Karnain Addicte",
    intro: "Seis fragancias de excepción. Filtra por familia para encontrar la tuya.",
    filterLabel: "Filtrar",
    filterAll: "Todas",
  },

  badges: {
    new: "Novedad",
    bestSeller: "Más vendido",
  },

  story: {
    eyebrow: "La maison",
    title: "El arte del perfume",
    body1:
      "Desde el siglo XVI, el cultivo de plantas de perfume y el arte de la composición se transmiten en la región de Grasse. Karnain se inscribe en esa herencia, con gusto por la mesura y la elegancia.",
    body2:
      "Nuestros perfumes los componen grandes narices, formadas en las casas más prestigiosas, a partir de las esencias más nobles — materias elegidas en los cuatro rincones del mundo, sin concesiones.",
    cta: "Descubrir la maison",
  },

  maison: {
    eyebrow: "La maison",
    title: "Entrar en el universo Karnain",
    lede: "Karnain nació de una convicción sencilla: un perfume no se lleva, se cuenta. Cada fragancia de la casa está pensada como un recuerdo que uno se lleva consigo.",
    chapters: [
      {
        title: "El origen",
        body1:
          "Todo empieza con una obsesión — la del gesto justo. Elegir una materia y no otra, dosificar a unas gotas de precisión, volver a empezar hasta que el acorde se impone por sí solo.",
        body2:
          "La casa avanza a su ritmo. Pocas fragancias, largamente trabajadas, antes que una colección que se estira. Lo que firmamos debe poder llevarse diez años sin pasar de moda.",
      },
      {
        title: "La composición",
        body1:
          "Nuestros perfumes son extractos: alta concentración, larga duración, una evolución lenta sobre la piel. Las materias se eligen por su carácter — una rosa que no es dócil, un cuero que conserva su aspereza, una vainilla que nunca cae en el dulzor fácil.",
        body2: "Nada se añade por adorno. Si una nota no sirve al acorde, sale.",
      },
      {
        title: "El frasco",
        body1:
          "Un vidrio grueso, un tapón dorado, una etiqueta blanca que deja hablar a la fragancia. El frasco Karnain es el mismo de una fragancia a otra — solo cambia el color del perfume.",
        body2: "Es una familia, no una colección de objetos.",
      },
    ],
    quote: "Un perfume logrado no se nota enseguida. Se reconoce.",
    closingTitle: "Encuentra la tuya",
    closingBody:
      "Seis fragancias, seis caracteres. La justa rara vez es la que uno cree — tómate el tiempo de descubrirlas.",
    closingCta: "Descubrir la colección",
  },

  maisonStrip: {
    alt: "Las seis fragancias Karnain, cada una sobre su materia: vainilla, cuero, cereza, chocolate, rosa y tabaco.",
  },

  campaign: {
    eyebrow: "La maison Karnain",
    title: "Seis fragancias de excepción. Una firma.",
    cta: "Descubrir la colección",
  },

  instagram: {
    eyebrow: "Síguenos",
    handle: "@karnain_paris",
    cta: "Seguirnos en Instagram",
  },

  contact: {
    eyebrow: "Contacto",
    title: "¿Una fragancia te llama?",
    body: "Escríbenos — te aconsejamos con gusto.",
    emailCta: "Escríbenos",
    emailSubject: "Consulta — perfumes Karnain",
  },

  cart: {
    bag: "Cesta",
    openBag: "Abrir la cesta",
    closeBag: "Cerrar la cesta",
    addToBag: "Añadir a la cesta",
    title: "Tu cesta",
    empty: "Tu cesta está vacía.",
    emptyCta: "Descubrir la colección",
    subtotal: "Subtotal",
    increase: "Aumentar la cantidad",
    decrease: "Reducir la cantidad",
    remove: "Quitar",
    continue: "Seguir comprando",
    viewBag: "Ver la cesta",
    checkout: "Tramitar el pedido",
    checkoutPending: "Redirigiendo al pago…",
    checkoutSoon: "El pago en línea llega pronto.",
  },

  orderConfirmation: {
    confirmed: {
      eyebrow: "Pedido confirmado",
      title: "Gracias por tu pedido",
      body: "Hemos recibido tu pago. En breve recibirás un correo de confirmación.",
      cta: "Seguir comprando",
      href: "/collection",
    },
    processing: {
      eyebrow: "Pedido registrado",
      title: "Gracias por tu pedido",
      body: "Tu pago se está validando. Recibirás un correo en cuanto se confirme.",
      cta: "Seguir comprando",
      href: "/collection",
    },
    failed: {
      eyebrow: "Pago no completado",
      title: "Tu pedido no se ha realizado",
      body: "No se ha cobrado ningún importe. Tu cesta te espera si quieres volver a intentarlo.",
      cta: "Volver a la cesta",
      href: "/panier",
    },
    unknown: {
      eyebrow: "Pedido",
      title: "Pedido no encontrado",
      body: "No encontramos este pedido. Si acabas de pagar, el correo de confirmación es el que cuenta.",
      cta: "Descubrir la colección",
      href: "/collection",
    },
  },

  product: {
    backToCollection: "Volver a la colección",
    notesTitle: "Las notas",
    noteHead: "Notas de salida",
    noteHeart: "Notas de corazón",
    noteBase: "Notas de fondo",
    adviceLabel: "¿Necesitas consejo?",
    emailCta: "Escríbenos",
    emailSubject: "Consejo — {fragrance}",
    galleryZoom: "Ampliar la imagen",
    galleryClose: "Cerrar",
    galleryPrev: "Imagen anterior",
    galleryNext: "Imagen siguiente",
    alsoTitle: "Descubre también",
    notFoundTitle: "Fragancia no encontrada",
    notFoundBody: "Esta fragancia no existe o ya no está disponible.",
    errorTitle: "Se ha producido un error",
    errorBody: "No es posible mostrar esta fragancia por el momento.",
    retry: "Reintentar",
    imageAlt: "{fragrance} — imagen {n}",
  },

  footer: {
    tagline: "Casa de perfumes francesa. Fragancias de excepción, a la francesa.",
    maisonTitle: "La maison",
    serviceTitle: "Atención al cliente",
    followTitle: "Síguenos",
    instagram: "Instagram",
    legalNote: "Aviso legal y condiciones de venta — próximamente.",
    rights: "Todos los derechos reservados.",
  },

  meta: {
    baseline: "Casa de perfumes",
    description:
      "Karnain, casa de perfumes francesa. Fragancias de excepción con las esencias más nobles, compuestas a la francesa.",
    cartTitle: "Tu cesta",
    thankYouTitle: "Gracias",
  },

  locale: {
    switchLabel: "Idioma",
    names: { fr: "Français", en: "English", it: "Italiano", es: "Español", de: "Deutsch" },
  },
};
