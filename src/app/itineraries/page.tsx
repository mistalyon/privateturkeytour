import Link from "next/link";

import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { itineraries } from "@/content/itineraries";
import { keywordList, pageKeywords } from "@/content/keywords";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Turkey Itinerary Ideas: 7, 10 & 14 Day Private Routes",
  description:
    "Browse Turkey itinerary ideas for 7, 10, and 14 days—private routes through Istanbul, Cappadocia, Ephesus, and the Turquoise Coast you can fully customize.",
  path: "/itineraries",
  keywords: keywordList(pageKeywords.itineraries),
});

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Itineraries", href: "/itineraries" },
];

export default function ItinerariesPage() {
  return (
    <main>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <PageHero
        eyebrow="Itinerary hub"
        title="Turkey itinerary ideas—private, not packaged."
        description="These sample Turkey itinerary routes show how a tailor-made journey can unfold. Every route is reshaped around your dates, pace, and interests."
        answer="Most first-time travelers choose a 7 day Turkey itinerary (Istanbul + Cappadocia), a 10 day Turkey itinerary with Ephesus, or a 14 day Turkey itinerary that continues to the Turquoise Coast."
        breadcrumbs={breadcrumbs}
      />

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-[1100px] gap-4">
          {itineraries.map((itinerary) => (
            <Link
              key={itinerary.slug}
              href={`/itineraries/${itinerary.slug}`}
              className="grid gap-4 border border-black/10 bg-[#efe9df] p-7 transition hover:border-black/30 md:grid-cols-[160px_1fr]"
            >
              <p className="text-xs uppercase tracking-[0.16em] text-black/45">
                {itinerary.days} days
              </p>
              <div>
                <h2 className="font-heading text-3xl tracking-[-0.03em]">
                  {itinerary.name}
                </h2>
                <p className="mt-3 max-w-3xl text-base leading-8 text-black/65">
                  {itinerary.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CtaBand title="Want a route built around you?" />
    </main>
  );
}
