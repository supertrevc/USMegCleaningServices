// Single source of truth for business NAP + links. Language-neutral facts only.

export const business = {
  name: "US Meg Cleaning Services",
  legalName: "US Meg Cleaning Services",
  phoneDisplay: "(813) 709-6025",
  phoneE164: "+18137096025",
  sms: "sms:+18137096025",
  tel: "tel:+18137096025",
  email: "usmegcleaningservices@gmail.com",
  mailto: "mailto:usmegcleaningservices@gmail.com",
  instagram: "https://instagram.com/megcleaningservice",
  facebook: "https://facebook.com/megcleaningservice",
  reviewLink: "https://maps.app.goo.gl/LrMRTQ6M84hFLtMz7",
  mapEmbed:
    "https://www.google.com/maps?q=Tampa%20Bay%2C%20Florida&z=9&output=embed",
  priceRange: "$$",
  city: "Tampa",
  region: "FL",
  regionName: "Florida",
  country: "US",
} as const;

// 18 service-area neighborhoods (used for chips + schema areaServed).
export const neighborhoods = [
  "Downtown Tampa",
  "Wesley Chapel",
  "Odessa",
  "University",
  "Temple Terrace",
  "Westchase",
  "Lutz",
  "East Lake-Orient Park",
  "Palm River-Clair Mel",
  "Riverview",
  "Oldsmar",
  "East Lake",
  "Tarpon Springs",
  "Palm Harbor",
  "Dunedin",
  "Clearwater",
  "Largo",
  "St. Petersburg",
] as const;

// Payment methods accepted (collected at end of service).
export const payments = [
  "Cash",
  "Zelle",
  "Venmo",
  "Apple Cash",
  "Check",
  "Wire Transfer",
] as const;
