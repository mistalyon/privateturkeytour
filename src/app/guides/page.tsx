import Link from "next/link";

import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { RelatedLinks } from "@/components/related-links";
import { guides } from "@/content/guides";
import { keywordList, pageKeywords } from "@/content/keywords";
import { breadcrumbSchema, itemListSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Turkey Travel Guide for Private Tours",
  description:
    "Turkey travel guide pages for private tours—best time to visit, Turkey in May/September/October/winter, things to do, planning steps, cost, and private vs group.",
  path: "/guides",
  keywords: keywordList(pageKeywords.guides),
});

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Guides", href: "/guides" },
];

export default function GuidesPage() {
  return (
    <main>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          itemListSchema({
            name: "Turkey travel guides for private tours",
            path: "/guides",
            items: guides.map((guide) => ({
              name: guide.name,
              href: `/guides/${guide.slug}`,
            })),
          }),
        ]}
      />
      <PageHero
        eyebrow="Planning guides"
        title="Turkey travel guide—clarity before you book."
        description="These Turkey travel guide pages answer what travelers ask before a private tour—best season, how to plan a trip to Turkey, and whether private beats group—so you enquire ready to buy."
        answer="Start with the best time to visit Turkey, then how to plan a trip to Turkey, then compare private vs group Turkey tours if you are still deciding. When you are ready, plan your trip and we turn advice into a private outline."
        breadcrumbs={breadcrumbs}
      />

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-[1100px] gap-4 md:grid-cols-3">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="border border-black/10 bg-[#efe9df] p-7 transition hover:border-black/30"
            >
              <p className="text-xs uppercase tracking-[0.16em] text-black/45">
                Updated {guide.updatedAt}
              </p>
              <h2 className="mt-4 font-heading text-3xl leading-tight tracking-[-0.03em]">
                {guide.name}
              </h2>
              <p className="mt-4 text-sm leading-7 text-black/65">
                {guide.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <RelatedLinks
        items={[
          {
            title: "Private Turkey Tours",
            href: "/private-turkey-tours",
            description: "Pillar page for tailor-made journeys.",
          },
          {
            title: "Best time to visit Turkey",
            href: "/guides/best-time-to-visit-turkey",
            description: "Season framework for private trips.",
          },
          {
            title: "Plan your trip",
            href: "/plan-your-trip",
            description: "Turn research into an enquiry.",
          },
        ]}
      />

      <CtaBand title="Ready to turn advice into an itinerary?" />
    </main>
  );
}
