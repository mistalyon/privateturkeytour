import { audiences } from "@/content/audiences";
import { destinations } from "@/content/destinations";
import { experiences } from "@/content/experiences";
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
  {
    path: "/experiences",
    priority: 0.88,
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
    ...experiences.map((item) => `/experiences/${item.slug}`),
    ...audiences.map((item) => `/private-turkey-tours/${item.slug}`),
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
    ...experiences.map((item) => ({
      url: absoluteUrl(`/experiences/${item.slug}`),
      lastModified: new Date(item.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.84,
    })),
    ...audiences.map((item) => ({
      url: absoluteUrl(`/private-turkey-tours/${item.slug}`),
      lastModified: new Date(item.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.86,
    })),
    ...guides.map((item) => ({
      url: absoluteUrl(`/guides/${item.slug}`),
      lastModified: new Date(item.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
