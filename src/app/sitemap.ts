import type { MetadataRoute } from "next";

import { sitemapEntries } from "@/content/navigation";

export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapEntries();
}
