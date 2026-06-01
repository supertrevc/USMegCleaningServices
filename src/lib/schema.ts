import { business, neighborhoods, payments } from "../data/business";
import { content, reviews } from "../i18n/content";
import type { Lang } from "../i18n/utils";

const SITE_NAME = business.name;

export function localBusinessSchema(site: string, lang: Lang) {
  const t = content[lang];
  return {
    "@context": "https://schema.org",
    "@type": "HouseCleaningService",
    "@id": `${site}/#business`,
    name: SITE_NAME,
    image: `${site}/img/og-image.png`,
    url: `${site}/${lang}/`,
    telephone: business.phoneE164,
    email: business.email,
    priceRange: business.priceRange,
    description: t.meta.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: business.city,
      addressRegion: business.region,
      addressCountry: business.country,
    },
    areaServed: neighborhoods.map((n) => ({
      "@type": "City",
      name: n,
    })),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      description: "By appointment — text to schedule.",
    },
    paymentAccepted: payments.join(", "),
    currenciesAccepted: "USD",
    sameAs: [business.instagram, business.facebook],
    // AggregateRating is intentionally omitted until we have the REAL numbers from the
    // Google Business Profile. To enable, uncomment and fill in the live values:
    // aggregateRating: {
    //   "@type": "AggregateRating",
    //   ratingValue: "5.0", // <-- real average from GBP
    //   reviewCount: "00",  // <-- real total review count from GBP
    // },
  };
}

export function serviceSchemas(site: string, lang: Lang) {
  const t = content[lang];
  return t.services.cards.map((c) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: c.title,
    name: c.title,
    description: c.desc,
    provider: { "@id": `${site}/#business` },
    areaServed: { "@type": "City", name: `${business.city}, ${business.region}` },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceSmsNumber: business.phoneE164,
      servicePhone: business.phoneE164,
    },
  }));
}

export function faqSchema(lang: Lang) {
  const t = content[lang];
  const items = t.faq.groups.flatMap((g) => g.items);
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };
}

export function reviewSchemas(site: string) {
  return reviews.map((r) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: { "@id": `${site}/#business`, name: SITE_NAME },
    author: { "@type": "Person", name: r.name },
    reviewRating: {
      "@type": "Rating",
      ratingValue: "5",
      bestRating: "5",
    },
    reviewBody: r.text,
  }));
}

/** Full graph for the home page. */
export function homeSchemas(site: string, lang: Lang) {
  return [
    localBusinessSchema(site, lang),
    ...serviceSchemas(site, lang),
    faqSchema(lang),
    ...reviewSchemas(site),
  ];
}
