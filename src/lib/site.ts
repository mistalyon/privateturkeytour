export const siteConfig = {
  name: "Private Turkey Tour",
  legalName: "Private Turkey Tour",
  url: "https://privateturkeytour.com",
  locale: "en_US",
  language: "en",
  email: "hello@privateturkeytour.com",
  description:
    "Private Turkey tours and custom itineraries across Türkiye with licensed local guides, handpicked stays, and seamless in-country care.",
  tagline: "Private Turkey tours, made yours",
  foundedYear: 2012,
  location: "Türkiye",
} as const;

export type BreadcrumbItem = {
  name: string;
  href: string;
};
