export const siteConfig = {
  name: "Private Turkey Tour",
  legalName: "Private Turkey Tour",
  url: "https://privateturkeytour.com",
  locale: "en_US",
  language: "en",
  email: "hello@privateturkeytour.com",
  description:
    "Private, tailor-made journeys across Türkiye with expert local guides, handpicked stays, and seamless in-country care.",
  tagline: "Bespoke private journeys across Türkiye",
  foundedYear: 2012,
  location: "Türkiye",
} as const;

export type BreadcrumbItem = {
  name: string;
  href: string;
};
