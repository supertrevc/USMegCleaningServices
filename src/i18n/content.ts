import type { Lang } from "./utils";

// Anchor IDs are shared across languages (nav + deep links rely on them).
export const SECTION_IDS = {
  about: "about-us",
  services: "our-services",
  who: "who-we-serve",
  areas: "areas-we-serve",
  pricing: "pricing",
  how: "how-we-work",
  faqs: "faqs",
  contact: "contact-us",
} as const;

export type ServiceId = "regular" | "deep" | "closet" | "move";
export type FaqId = string;

export interface ServiceCard {
  id: ServiceId;
  title: string;
  desc: string;
  img: string;
  alt: string;
}

export interface FaqItem {
  q: string;
  a: string;
}
export interface FaqGroup {
  title: string;
  items: FaqItem[];
}

export interface Review {
  name: string;
  credential: string; // Google reviewer metadata, kept verbatim (factual, not translated)
  text: string;
}

// Reviews are language-neutral (verbatim Google reviews, English).
export const reviews: Review[] = [
  {
    name: "Alli Sellberg",
    credential: "2 reviews",
    text: "Super happy with my cleaning service today! My house was smelling amazing and they were in and out very quickly. Definitely would recommend",
  },
  {
    name: "Rebecca Brave",
    credential: "Local Guide · 11 reviews · 2 photos",
    text: "I have nothing but positive feedback for Maria and her team. My apartment is always left sparkling clean and smelling fresh in a very timely manner. Prices are reasonable and Maria is so pleasant to work with. I would recommend her services to anyone.",
  },
  {
    name: "Jennifer Zervos",
    credential: "6 reviews · 1 photo",
    text: "Maria has the best cleaning service I've ever experienced! Our house is absolutely spotless when she and her crew are here. They go above and beyond to make sure everything is truly clean. They are fast, affordable, and so efficient too!",
  },
];

const SERVICE_IMG: Record<ServiceId, string> = {
  regular: "/img/services/regular.webp",
  deep: "/img/services/deep.webp",
  closet: "/img/services/closet.webp",
  move: "/img/services/move.webp",
};

type Dict = {
  meta: { title: string; description: string };
  nav: { label: string; href: string }[];
  cta: {
    textUs: string;
    textQuote: string;
    freeQuote: string;
    call: string;
    textForQuote: string;
    leaveReview: string;
    getDirections: string;
  };
  langName: { en: string; es: string };
  skipToContent: string;
  hero: {
    eyebrow: string;
    lines: string[];
    punch: string;
    primaryCta: string;
    secondaryPre: string;
    secondaryLink: string;
  };
  social: {
    google: string;
    eco: string;
    paymentsLabel: string;
    payments: string[];
  };
  about: { title: string; body: string; imgAlt: string; photoAlt: string };
  services: {
    title: string;
    intro: string;
    cards: ServiceCard[];
    alsoLabel: string;
    also: string;
  };
  who: {
    title: string;
    cols: { title: string; body: string }[];
  };
  areas: { title: string; body: string; mapTitle: string };
  pricing: {
    title: string;
    body: string;
    disclaimer: string;
    estimatedLabel: string;
    textEstimate: string;
    imgAlt: string;
    fields: {
      service: string;
      serviceOptions: { value: ServiceId; label: string }[];
      property: string;
      propertyOptions: { value: string; label: string }[];
      sqft: string;
      bathrooms: string;
      bedrooms: string;
      pets: string;
      petsNo: string;
      petsYes: string;
      floors: string;
    };
    smsTemplate: (s: {
      service: string;
      property: string;
      sqft: number;
      bath: number;
      bed: number;
      pets: string;
      amount: number;
    }) => string;
  };
  how: {
    eyebrow: string;
    title: string;
    steps: { title: string; body: string; alt: string }[];
  };
  testimonials: {
    title: string;
    sub: string;
    timeAgo: string;
    sourceLabel: string;
  };
  faq: { title: string; groups: FaqGroup[] };
  finalCta: { title: string; sub: string };
  contact: {
    title: string;
    emailLabel: string;
    bookLabel: string;
    followLabel: string;
    form: {
      heading: string;
      name: string;
      phone: string;
      emailOptional: string;
      service: string;
      message: string;
      submit: string;
      success: string;
      errorRequired: string;
      errorEmail: string;
      errorGeneric: string;
      sending: string;
    };
    jobs: {
      toggle: string;
      heading: string;
      name: string;
      phone: string;
      email: string;
      message: string;
      submit: string;
    };
  };
  footer: {
    tagline: string;
    quickLinks: string;
    legal: string;
    rights: string;
    cookiePrefs: string;
    builtNote: string;
  };
  cookie: {
    title: string;
    body: string;
    accept: string;
    reject: string;
    settings: string;
    essential: string;
    essentialDesc: string;
    analytics: string;
    analyticsDesc: string;
    save: string;
  };
  legal: {
    privacy: string;
    terms: string;
    cookies: string;
    accessibility: string;
    lastUpdated: string;
  };
  notFound: { title: string; body: string; home: string };
};

export const content: Record<Lang, Dict> = {
  // ===========================================================================
  // ENGLISH
  // ===========================================================================
  en: {
    meta: {
      title: "Cleaning Services in Tampa, FL | US Meg Cleaning Services",
      description:
        "US Meg Cleaning Services provides regular house cleaning, deep cleaning, and move-in or move-out cleaning services in Tampa, Florida. Get a free quote today.",
    },
    nav: [
      { label: "About Us", href: `#${SECTION_IDS.about}` },
      { label: "Our Services", href: `#${SECTION_IDS.services}` },
      { label: "Areas We Serve", href: `#${SECTION_IDS.areas}` },
      { label: "Who We Serve", href: `#${SECTION_IDS.who}` },
      { label: "Pricing", href: `#${SECTION_IDS.pricing}` },
      { label: "How We Work", href: `#${SECTION_IDS.how}` },
      { label: "FAQs", href: `#${SECTION_IDS.faqs}` },
      { label: "Contact Us", href: `#${SECTION_IDS.contact}` },
    ],
    cta: {
      textUs: "Text us (813) 709-6025",
      textQuote: "Text us for a free quote",
      freeQuote: "Get a free quote today",
      call: "Call (813) 709-6025",
      textForQuote: "Text for a quote",
      leaveReview: "Leave us a review",
      getDirections: "Get directions",
    },
    langName: { en: "English", es: "Español" },
    skipToContent: "Skip to main content",
    hero: {
      eyebrow: "Cleaning Services in Tampa, FL",
      lines: ["Your to-do list:", "Clean up.", "Get coffee.", "Let us do the"],
      punch: "dirty work,",
      primaryCta: "Text us for a free quote",
      secondaryPre: "Get a FREE quote today! Contact us at",
      secondaryLink: "(813) 709-6025",
    },
    social: {
      google: "on Google",
      eco: "Eco-friendly, non-toxic products",
      paymentsLabel: "We accept",
      payments: ["Cash", "Zelle", "Venmo", "Apple Cash", "Check", "Wire Transfer"],
    },
    about: {
      title: "About Us",
      body: "US Meg Cleaning Services began as the dream of a hardworking couple from Colombia. After reuniting in Tampa, they rekindled their love, re-married, and started fresh by launching a business together. What began as a small, family-owned operation cleaning homes side by side grew quickly thanks to their dedication, warmth, and attention to detail. “MEG” isn't a person's nickname — it's an acronym for Maria E. Garcia, one of the founders, whose values of hard work and family pride shape every service. Today the company offers residential cleaning in Tampa including one-time deep cleans, regular house cleaning, and move-in/move-out cleaning for homeowners who want reliable results and a home that feels fresh, clean, and cared for.",
      imgAlt: "Illustration of the US Meg Cleaning Services founders.",
      photoAlt: "A US Meg Cleaning Services team member cleaning a Tampa home.",
    },
    services: {
      title: "Our Services",
      intro:
        "Explore our Tampa cleaning services designed to keep homes, rentals, and listings spotless and welcoming.",
      cards: [
        {
          id: "regular",
          title: "Regular Cleaning",
          desc: "Weekly, bi-weekly, or monthly service. Choose a preferred time window.",
          img: SERVICE_IMG.regular,
          alt: "A bright, freshly cleaned living room.",
        },
        {
          id: "deep",
          title: "Deep Cleaning",
          desc: "Ideal for households with children or pets; a more comprehensive, detailed clean.",
          img: SERVICE_IMG.deep,
          alt: "A cleaner deep-cleaning a kitchen surface.",
        },
        {
          id: "closet",
          title: "Closet Organization",
          desc: "Arrange your wardrobe efficiently.",
          img: SERVICE_IMG.closet,
          alt: "A neatly organized closet with folded clothes.",
        },
        {
          id: "move",
          title: "Move-in & Move-Out",
          desc: "Spotless transitions; easy and stress-free.",
          img: SERVICE_IMG.move,
          alt: "An empty, spotless room ready for move-in.",
        },
      ],
      alsoLabel: "Also available:",
      also: "one-time residential cleaning, monthly subscription, full-house window cleaning, and post-holiday decoration removal.",
    },
    who: {
      title:
        "Cleaning Support for People Who Need Fast, Reliable Turnarounds",
      cols: [
        {
          title: "Homeowners",
          body: "Regular, deep, and move-in/out cleaning for busy households that want a dependable clean home without the stress.",
        },
        {
          title: "Real Estate Agents",
          body: "Quick, detail-focused cleaning for listings, open houses, and showing prep.",
        },
        {
          title: "Airbnb Hosts",
          body: "Reliable turnover cleaning so guests arrive to spotless kitchens, bathrooms, and living spaces.",
        },
      ],
    },
    areas: {
      title: "Areas We Serve Around Tampa Bay",
      body: "Residential, move-in/out, and support for Airbnb hosts and real estate agents across Tampa, Clearwater, St. Petersburg, and nearby communities.",
      mapTitle: "Map of the Tampa Bay area we serve",
    },
    pricing: {
      title: "Instant estimate tool",
      body: "Use the calculator to get a quick estimated price based on your service type, home size, bathrooms, bedrooms, pets, and layout. This estimate is a starting point — text us your details and we'll confirm the final quote for your home.",
      disclaimer:
        "Final price may vary depending on condition, add-ons, and exact cleaning needs.",
      estimatedLabel: "Estimated price",
      textEstimate: "Text us this estimate",
      imgAlt: "A US Meg cleaner at work in a Tampa home.",
      fields: {
        service: "Service type",
        serviceOptions: [
          { value: "regular", label: "Regular house cleaning" },
          { value: "deep", label: "Deep cleaning" },
          { value: "move", label: "Move-in / Move-out" },
        ],
        property: "Property type",
        propertyOptions: [
          { value: "apartment", label: "Apartment" },
          { value: "house", label: "House" },
        ],
        sqft: "Total square feet",
        bathrooms: "Bathrooms",
        bedrooms: "Bedrooms",
        pets: "Pets",
        petsNo: "No pets",
        petsYes: "Yes",
        floors: "Floors",
      },
      smsTemplate: (s) =>
        `Hi! I'd like a quote: ${s.service}, ${s.property}, ${s.sqft} sqft, ${s.bath} bath, ${s.bed} bed, pets: ${s.pets}. Estimated $${s.amount}.`,
    },
    how: {
      eyebrow: "Easy, no-fuss cleaning for busy people.",
      title: "How We Work",
      steps: [
        {
          title: "Book",
          body: "Choose your service and text us to schedule your visit.",
          alt: "Booking a cleaning by text message.",
        },
        {
          title: "Clean",
          body: "Our team arrives with supplies and equipment and takes before/after photos to guarantee quality.",
          alt: "A US Meg team member cleaning a home.",
        },
        {
          title: "Pay",
          body: "Pay at the end of the service. We accept Cash, Wire Transfer, Check, Apple Cash, Venmo, and Zelle.",
          alt: "Paying after the cleaning is complete.",
        },
      ],
    },
    testimonials: {
      title: "What Our Customers Say",
      sub: "See what homeowners, Airbnb hosts, and Tampa Bay clients are saying on Google.",
      timeAgo: "7 months ago",
      sourceLabel: "Google Review",
    },
    faq: {
      title: "Frequently Asked Questions",
      groups: [
        {
          title: "Billing and pricing",
          items: [
            {
              q: "Are there cancellation or reschedule fees?",
              a: "We only charge fees when we really need to. If you cancel or reschedule after 3:00 PM the day before your cleaning, we may charge a $40 last-minute change fee.",
            },
            {
              q: "How is my price determined?",
              a: "By the size of your home, number of pets, and frequency. Contact us for a free estimate.",
            },
            {
              q: "Will my price change if I stop regular service?",
              a: "Your first cleaning is at a standard rate; regular service earns a discounted rate. If you pause regular service for more than two cleanings, the next booking may return to the standard price.",
            },
            {
              q: "How do you charge me?",
              a: "On the day of service, after the cleaning is finished.",
            },
            {
              q: "Is tipping expected?",
              a: "Entirely optional, but very much appreciated by your team.",
            },
          ],
        },
        {
          title: "Appointments and scheduling",
          items: [
            {
              q: "How do I book?",
              a: "Call, text (813) 709-6025, or message us on Instagram.",
            },
            {
              q: "What areas do you service?",
              a: "Tampa and surrounding neighborhoods.",
            },
            {
              q: "How do I stop regular service?",
              a: "Anytime — email usmegcleaningservices@gmail.com or call (813) 709-6025.",
            },
            {
              q: "How will I know when cleaners are coming?",
              a: "We send an ETA text when we're on our way.",
            },
            {
              q: "Can I reschedule or cancel?",
              a: "No problem — call, text, or email. Reschedule by 3:00 PM the day before to avoid the last-minute fee.",
            },
          ],
        },
        {
          title: "Home access",
          items: [
            {
              q: "Do I need to be home?",
              a: "No — we just need access.",
            },
            {
              q: "How do cleaners enter?",
              a: "Let them in, hide a key, or give us a lockbox code to keep on file.",
            },
          ],
        },
        {
          title: "Your feedback",
          items: [
            {
              q: "Do you offer a satisfaction guarantee?",
              a: "Yes. If you're not completely satisfied, tell us within 24 hours and we'll come back to make it right.",
            },
            {
              q: "How can I leave feedback?",
              a: "After any visit via Instagram, or email us for anything additional.",
            },
            {
              q: "What if I'm not happy with my service?",
              a: "Your happiness matters — we'll reach out and find a way to make it right.",
            },
          ],
        },
        {
          title: "Our cleaning services",
          items: [
            {
              q: "What services do you offer?",
              a: "One-time residential cleaning, regular cleaning via monthly subscription, deep cleaning, closet organizing, full-house window cleaning, and post-holiday decoration removal.",
            },
            {
              q: "How many cleaners come?",
              a: "One or two, depending on your home and needs.",
            },
            {
              q: "Do I provide supplies?",
              a: "No — we bring our own and prefer our products to guarantee quality. If you'd rather we use yours, let us know beforehand.",
            },
            {
              q: "Are the same cleaners sent each visit?",
              a: "Yes, we make every effort, with occasional exceptions for illness, vacation, or days off.",
            },
            {
              q: "What products do you use?",
              a: "Eco-friendly, non-toxic products safe for your family and pets.",
            },
            {
              q: "What won't your teams clean?",
              a: "For health reasons, we don't clean blood, feces, vomit, or urine (human or animal).",
            },
          ],
        },
      ],
    },
    finalCta: {
      title: "Get a free quote today",
      sub: "Text us your details and we'll text you back — usually within a few hours.",
    },
    contact: {
      title: "Contact Us",
      emailLabel: "Send us an email",
      bookLabel: "Book your service",
      followLabel: "Follow us",
      form: {
        heading: "Request a quote",
        name: "Name",
        phone: "Phone",
        emailOptional: "Email (optional)",
        service: "Service type",
        message: "Message (optional)",
        submit: "Send request",
        success:
          "Thanks! We'll text you back shortly — usually within a few hours.",
        errorRequired: "Please fill in your name and phone number.",
        errorEmail: "Please enter a valid email address.",
        errorGeneric:
          "Something went wrong sending your request. Please text us at (813) 709-6025.",
        sending: "Sending…",
      },
      jobs: {
        toggle: "Looking for a job? Click to open form",
        heading: "Join our team",
        name: "Name",
        phone: "Phone",
        email: "Email",
        message: "Tell us a little about yourself",
        submit: "Send application",
      },
    },
    footer: {
      tagline:
        "Family-owned residential cleaning serving Tampa Bay, Florida. Eco-friendly products. 24-hour satisfaction guarantee.",
      quickLinks: "Quick links",
      legal: "Legal",
      rights: "All rights reserved.",
      cookiePrefs: "Cookie Preferences",
      builtNote: "By appointment — text to schedule.",
    },
    cookie: {
      title: "We value your privacy",
      body: "We use essential cookies to run this site and, with your consent, analytics cookies to understand how it's used. You can change your choice anytime.",
      accept: "Accept all",
      reject: "Reject non-essential",
      settings: "Preferences",
      essential: "Essential",
      essentialDesc: "Required for the site to function. Always on.",
      analytics: "Analytics",
      analyticsDesc:
        "Helps us understand site usage (Google Analytics, Microsoft Clarity).",
      save: "Save preferences",
    },
    legal: {
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      cookies: "Cookie Policy",
      accessibility: "Accessibility Statement",
      lastUpdated: "Last updated",
    },
    notFound: {
      title: "Page not found",
      body: "Sorry, we couldn't find that page. Let's get you back home.",
      home: "Back to home",
    },
  },

  // ===========================================================================
  // SPANISH
  // ===========================================================================
  es: {
    meta: {
      title: "Servicios de Limpieza en Tampa, FL | US Meg Cleaning Services",
      description:
        "US Meg Cleaning Services ofrece limpieza regular del hogar, limpieza profunda y limpieza de mudanza en Tampa, Florida. Solicita una cotización gratis hoy.",
    },
    nav: [
      { label: "Sobre Nosotros", href: `#${SECTION_IDS.about}` },
      { label: "Servicios", href: `#${SECTION_IDS.services}` },
      { label: "Áreas", href: `#${SECTION_IDS.areas}` },
      { label: "A Quién Servimos", href: `#${SECTION_IDS.who}` },
      { label: "Precios", href: `#${SECTION_IDS.pricing}` },
      { label: "Cómo Trabajamos", href: `#${SECTION_IDS.how}` },
      { label: "Preguntas", href: `#${SECTION_IDS.faqs}` },
      { label: "Contáctanos", href: `#${SECTION_IDS.contact}` },
    ],
    cta: {
      textUs: "Escríbenos (813) 709-6025",
      textQuote: "Escríbenos para una cotización gratis",
      freeQuote: "Obtén una cotización gratis hoy",
      call: "Llama al (813) 709-6025",
      textForQuote: "Escríbenos para cotizar",
      leaveReview: "Déjanos una reseña",
      getDirections: "Cómo llegar",
    },
    langName: { en: "English", es: "Español" },
    skipToContent: "Saltar al contenido principal",
    hero: {
      eyebrow: "Servicios de Limpieza en Tampa, FL",
      lines: [
        "Tu lista de pendientes:",
        "Limpiar.",
        "Tomar café.",
        "Deja que nosotros hagamos el",
      ],
      punch: "trabajo sucio,",
      primaryCta: "Escríbenos para una cotización gratis",
      secondaryPre: "¡Obtén una cotización GRATIS hoy! Contáctanos al",
      secondaryLink: "(813) 709-6025",
    },
    social: {
      google: "en Google",
      eco: "Productos ecológicos y no tóxicos",
      paymentsLabel: "Aceptamos",
      payments: ["Efectivo", "Zelle", "Venmo", "Apple Cash", "Cheque", "Transferencia"],
    },
    about: {
      title: "Sobre Nosotros",
      body: "US Meg Cleaning Services nació como el sueño de una pareja trabajadora de Colombia. Tras reunirse en Tampa, reavivaron su amor, se volvieron a casar y comenzaron de nuevo lanzando juntos un negocio. Lo que empezó como una pequeña empresa familiar limpiando hogares lado a lado creció rápidamente gracias a su dedicación, calidez y atención al detalle. “MEG” no es el apodo de una persona: es un acrónimo de Maria E. Garcia, una de las fundadoras, cuyos valores de trabajo duro y orgullo familiar dan forma a cada servicio. Hoy la empresa ofrece limpieza residencial en Tampa, incluyendo limpiezas profundas únicas, limpieza regular del hogar y limpieza de mudanza para quienes desean resultados confiables y un hogar que se sienta fresco, limpio y cuidado.",
      imgAlt: "Ilustración de los fundadores de US Meg Cleaning Services.",
      photoAlt: "Un miembro del equipo de US Meg Cleaning Services limpiando un hogar en Tampa.",
    },
    services: {
      title: "Nuestros Servicios",
      intro:
        "Explora nuestros servicios de limpieza en Tampa, diseñados para mantener hogares, alquileres y propiedades impecables y acogedores.",
      cards: [
        {
          id: "regular",
          title: "Limpieza Regular",
          desc: "Servicio semanal, quincenal o mensual. Elige tu horario preferido.",
          img: SERVICE_IMG.regular,
          alt: "Una sala de estar luminosa y recién limpiada.",
        },
        {
          id: "deep",
          title: "Limpieza Profunda",
          desc: "Ideal para hogares con niños o mascotas; una limpieza más completa y detallada.",
          img: SERVICE_IMG.deep,
          alt: "Una persona limpiando a fondo una cocina.",
        },
        {
          id: "closet",
          title: "Organización de Clósets",
          desc: "Organiza tu armario de forma eficiente.",
          img: SERVICE_IMG.closet,
          alt: "Un clóset ordenado con ropa doblada.",
        },
        {
          id: "move",
          title: "Mudanza de Entrada y Salida",
          desc: "Transiciones impecables; fáciles y sin estrés.",
          img: SERVICE_IMG.move,
          alt: "Una habitación vacía e impecable lista para la mudanza.",
        },
      ],
      alsoLabel: "También disponible:",
      also: "limpieza residencial única, suscripción mensual, limpieza de ventanas de toda la casa y retiro de decoración después de las fiestas.",
    },
    who: {
      title: "Apoyo de Limpieza para Quienes Necesitan Resultados Rápidos y Confiables",
      cols: [
        {
          title: "Propietarios",
          body: "Limpieza regular, profunda y de mudanza para hogares ocupados que quieren una casa limpia y confiable sin estrés.",
        },
        {
          title: "Agentes Inmobiliarios",
          body: "Limpieza rápida y detallada para propiedades en venta, casas abiertas y preparación de visitas.",
        },
        {
          title: "Anfitriones de Airbnb",
          body: "Limpieza de rotación confiable para que los huéspedes lleguen a cocinas, baños y salas impecables.",
        },
      ],
    },
    areas: {
      title: "Áreas que Servimos en Tampa Bay",
      body: "Limpieza residencial, de mudanza y apoyo para anfitriones de Airbnb y agentes inmobiliarios en Tampa, Clearwater, St. Petersburg y comunidades cercanas.",
      mapTitle: "Mapa del área de Tampa Bay que servimos",
    },
    pricing: {
      title: "Herramienta de estimación instantánea",
      body: "Usa la calculadora para obtener un precio estimado rápido según el tipo de servicio, el tamaño del hogar, los baños, las habitaciones, las mascotas y la distribución. Esta estimación es un punto de partida: escríbenos tus datos y confirmaremos la cotización final para tu hogar.",
      disclaimer:
        "El precio final puede variar según el estado, los extras y las necesidades exactas de limpieza.",
      estimatedLabel: "Precio estimado",
      textEstimate: "Envíanos esta estimación",
      imgAlt: "Una limpiadora de US Meg trabajando en un hogar de Tampa.",
      fields: {
        service: "Tipo de servicio",
        serviceOptions: [
          { value: "regular", label: "Limpieza regular del hogar" },
          { value: "deep", label: "Limpieza profunda" },
          { value: "move", label: "Mudanza de entrada / salida" },
        ],
        property: "Tipo de propiedad",
        propertyOptions: [
          { value: "apartment", label: "Apartamento" },
          { value: "house", label: "Casa" },
        ],
        sqft: "Pies cuadrados totales",
        bathrooms: "Baños",
        bedrooms: "Habitaciones",
        pets: "Mascotas",
        petsNo: "Sin mascotas",
        petsYes: "Sí",
        floors: "Pisos",
      },
      smsTemplate: (s) =>
        `¡Hola! Quisiera una cotización: ${s.service}, ${s.property}, ${s.sqft} pies², ${s.bath} baños, ${s.bed} habitaciones, mascotas: ${s.pets}. Estimado $${s.amount}.`,
    },
    how: {
      eyebrow: "Limpieza fácil y sin complicaciones para gente ocupada.",
      title: "Cómo Trabajamos",
      steps: [
        {
          title: "Reserva",
          body: "Elige tu servicio y escríbenos para agendar tu visita.",
          alt: "Reservar una limpieza por mensaje de texto.",
        },
        {
          title: "Limpiamos",
          body: "Nuestro equipo llega con productos y equipo, y toma fotos de antes/después para garantizar la calidad.",
          alt: "Un miembro del equipo de US Meg limpiando un hogar.",
        },
        {
          title: "Pagas",
          body: "Pagas al final del servicio. Aceptamos Efectivo, Transferencia, Cheque, Apple Cash, Venmo y Zelle.",
          alt: "Pago después de completar la limpieza.",
        },
      ],
    },
    testimonials: {
      title: "Lo que Dicen Nuestros Clientes",
      sub: "Mira lo que dicen propietarios, anfitriones de Airbnb y clientes de Tampa Bay en Google.",
      timeAgo: "hace 7 meses",
      sourceLabel: "Reseña de Google",
    },
    faq: {
      title: "Preguntas Frecuentes",
      groups: [
        {
          title: "Facturación y precios",
          items: [
            {
              q: "¿Hay cargos por cancelación o cambio de fecha?",
              a: "Solo cobramos cuando es realmente necesario. Si cancelas o reprogramas después de las 3:00 PM del día anterior a tu limpieza, podríamos cobrar una tarifa de cambio de último momento de $40.",
            },
            {
              q: "¿Cómo se determina mi precio?",
              a: "Según el tamaño de tu hogar, el número de mascotas y la frecuencia. Contáctanos para una estimación gratis.",
            },
            {
              q: "¿Cambiará mi precio si dejo el servicio regular?",
              a: "Tu primera limpieza tiene una tarifa estándar; el servicio regular obtiene una tarifa con descuento. Si pausas el servicio regular por más de dos limpiezas, la siguiente reserva puede volver al precio estándar.",
            },
            {
              q: "¿Cómo me cobran?",
              a: "El día del servicio, después de terminar la limpieza.",
            },
            {
              q: "¿Se espera propina?",
              a: "Es totalmente opcional, pero tu equipo la agradece mucho.",
            },
          ],
        },
        {
          title: "Citas y horarios",
          items: [
            {
              q: "¿Cómo reservo?",
              a: "Llama, escribe al (813) 709-6025 o envíanos un mensaje por Instagram.",
            },
            {
              q: "¿Qué áreas cubren?",
              a: "Tampa y los vecindarios cercanos.",
            },
            {
              q: "¿Cómo cancelo el servicio regular?",
              a: "En cualquier momento: escribe a usmegcleaningservices@gmail.com o llama al (813) 709-6025.",
            },
            {
              q: "¿Cómo sabré cuándo llegan los limpiadores?",
              a: "Enviamos un mensaje con la hora estimada de llegada cuando vamos en camino.",
            },
            {
              q: "¿Puedo reprogramar o cancelar?",
              a: "Sin problema: llama, escribe o envía un correo. Reprograma antes de las 3:00 PM del día anterior para evitar la tarifa de último momento.",
            },
          ],
        },
        {
          title: "Acceso al hogar",
          items: [
            {
              q: "¿Necesito estar en casa?",
              a: "No: solo necesitamos acceso.",
            },
            {
              q: "¿Cómo entran los limpiadores?",
              a: "Déjalos entrar, esconde una llave o danos un código de caja de seguridad para guardar en archivo.",
            },
          ],
        },
        {
          title: "Tu opinión",
          items: [
            {
              q: "¿Ofrecen garantía de satisfacción?",
              a: "Sí. Si no quedas completamente satisfecho, dínoslo dentro de 24 horas y volveremos para corregirlo.",
            },
            {
              q: "¿Cómo puedo dejar comentarios?",
              a: "Después de cualquier visita por Instagram, o escríbenos por correo para cualquier cosa adicional.",
            },
            {
              q: "¿Qué pasa si no estoy contento con mi servicio?",
              a: "Tu felicidad es importante: nos comunicaremos contigo y encontraremos la manera de corregirlo.",
            },
          ],
        },
        {
          title: "Nuestros servicios de limpieza",
          items: [
            {
              q: "¿Qué servicios ofrecen?",
              a: "Limpieza residencial única, limpieza regular por suscripción mensual, limpieza profunda, organización de clósets, limpieza de ventanas de toda la casa y retiro de decoración después de las fiestas.",
            },
            {
              q: "¿Cuántos limpiadores vienen?",
              a: "Uno o dos, según tu hogar y tus necesidades.",
            },
            {
              q: "¿Debo proporcionar los productos?",
              a: "No: traemos los nuestros y preferimos nuestros productos para garantizar la calidad. Si prefieres que usemos los tuyos, avísanos con anticipación.",
            },
            {
              q: "¿Envían los mismos limpiadores cada visita?",
              a: "Sí, hacemos todo lo posible, con excepciones ocasionales por enfermedad, vacaciones o días libres.",
            },
            {
              q: "¿Qué productos usan?",
              a: "Productos ecológicos y no tóxicos, seguros para tu familia y mascotas.",
            },
            {
              q: "¿Qué no limpian sus equipos?",
              a: "Por razones de salud, no limpiamos sangre, heces, vómito ni orina (humana o animal).",
            },
          ],
        },
      ],
    },
    finalCta: {
      title: "Obtén una cotización gratis hoy",
      sub: "Escríbenos tus datos y te responderemos pronto, normalmente en pocas horas.",
    },
    contact: {
      title: "Contáctanos",
      emailLabel: "Envíanos un correo",
      bookLabel: "Reserva tu servicio",
      followLabel: "Síguenos",
      form: {
        heading: "Solicita una cotización",
        name: "Nombre",
        phone: "Teléfono",
        emailOptional: "Correo (opcional)",
        service: "Tipo de servicio",
        message: "Mensaje (opcional)",
        submit: "Enviar solicitud",
        success:
          "¡Gracias! Te responderemos pronto, normalmente en pocas horas.",
        errorRequired: "Por favor ingresa tu nombre y número de teléfono.",
        errorEmail: "Por favor ingresa un correo electrónico válido.",
        errorGeneric:
          "Algo salió mal al enviar tu solicitud. Escríbenos al (813) 709-6025.",
        sending: "Enviando…",
      },
      jobs: {
        toggle: "¿Buscas trabajo? Haz clic para abrir el formulario",
        heading: "Únete a nuestro equipo",
        name: "Nombre",
        phone: "Teléfono",
        email: "Correo",
        message: "Cuéntanos un poco sobre ti",
        submit: "Enviar solicitud",
      },
    },
    footer: {
      tagline:
        "Limpieza residencial familiar al servicio de Tampa Bay, Florida. Productos ecológicos. Garantía de satisfacción de 24 horas.",
      quickLinks: "Enlaces rápidos",
      legal: "Legal",
      rights: "Todos los derechos reservados.",
      cookiePrefs: "Preferencias de cookies",
      builtNote: "Con cita previa: escríbenos para agendar.",
    },
    cookie: {
      title: "Valoramos tu privacidad",
      body: "Usamos cookies esenciales para el funcionamiento del sitio y, con tu consentimiento, cookies de análisis para entender cómo se usa. Puedes cambiar tu elección en cualquier momento.",
      accept: "Aceptar todas",
      reject: "Rechazar no esenciales",
      settings: "Preferencias",
      essential: "Esenciales",
      essentialDesc: "Necesarias para el funcionamiento del sitio. Siempre activas.",
      analytics: "Análisis",
      analyticsDesc:
        "Nos ayuda a entender el uso del sitio (Google Analytics, Microsoft Clarity).",
      save: "Guardar preferencias",
    },
    legal: {
      privacy: "Política de Privacidad",
      terms: "Términos del Servicio",
      cookies: "Política de Cookies",
      accessibility: "Declaración de Accesibilidad",
      lastUpdated: "Última actualización",
    },
    notFound: {
      title: "Página no encontrada",
      body: "Lo sentimos, no pudimos encontrar esa página. Volvamos al inicio.",
      home: "Volver al inicio",
    },
  },
};
