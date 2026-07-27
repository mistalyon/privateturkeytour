export const siteConfig = {
  name: "Private Turkey Tour",
  legalName: "Private Turkey Tour",
  url: "https://privateturkeytour.com",
  locale: "en_US",
  language: "en",
  email: "hello@privateturkeytour.com",
  phone: "+905446732202",
  phoneDisplay: "+90 544 673 2202",
  whatsapp: "905446732202",
  description:
    "Private Turkey tours and custom itineraries across Türkiye with licensed local guides, handpicked stays, and seamless in-country care.",
  tagline: "Private Turkey tours, made yours",
  foundedYear: 2012,
  location: "Türkiye",
  logo: "/detail.jpg",
} as const;

export type BreadcrumbItem = {
  name: string;
  href: string;
};
