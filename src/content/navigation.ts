import { destinations } from "@/content/destinations";
import { guides } from "@/content/guides";
import { itineraries } from "@/content/itineraries";
import { absoluteUrl } from "@/lib/seo";

export const staticPages = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  {
    path: "/private-turkey-tours",
    priority: 0.95,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/destinations",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/itineraries",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  { path: "/guides", priority: 0.85, changeFrequency: "weekly" as const },
  {
    path: "/how-it-works",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/plan-your-trip",
    priority: 0.95,
    changeFrequency: "monthly" as const,
  },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/faq", priority: 0.75, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
];

export function allContentPaths() {
  return [
    ...staticPages.map((page) => page.path),
    ...destinations.map((item) => `/destinations/${item.slug}`),
    ...itineraries.map((item) => `/itineraries/${item.slug}`),
    ...guides.map((item) => `/guides/${item.slug}`),
  ];
}

export function sitemapEntries() {
  const now = new Date();

  return [
    ...staticPages.map((page) => ({
      url: absoluteUrl(page.path),
      lastModified: now,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...destinations.map((item) => ({
      url: absoluteUrl(`/destinations/${item.slug}`),
      lastModified: new Date(item.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    ...itineraries.map((item) => ({
      url: absoluteUrl(`/itineraries/${item.slug}`),
      lastModified: new Date(item.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    ...guides.map((item) => ({
      url: absoluteUrl(`/guides/${item.slug}`),
      lastModified: new Date(item.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
