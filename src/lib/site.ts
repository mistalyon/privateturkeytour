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
  whatsappMessage:
    "Hello, I'm reaching out from privateturkeytour.com.",
  description:
    "Private Turkey tours and custom itineraries across Türkiye with licensed local guides, handpicked stays, and seamless in-country care.",
  tagline: "Private Turkey tours, made yours",
  foundedYear: 2012,
  location: "Türkiye",
  logo: "/brand/mark.svg",
  gaId: "G-H54C4ZXL3B",
} as const;

export function whatsappEnquireUrl(message = siteConfig.whatsappMessage) {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}

export type BreadcrumbItem = {
  name: string;
  href: string;
};
