import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { destinations } from "@/content/destinations";
import { keywordList, pageKeywords } from "@/content/keywords";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Best Places to Visit in Turkey for Private Tours",
  description:
    "Explore the best places to visit in Turkey on a private tour—Istanbul, Cappadocia, Ephesus, Pamukkale, and the Turquoise Coast designed around your pace.",
  path: "/destinations",
  keywords: keywordList(pageKeywords.destinations),
});

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Destinations", href: "/destinations" },
];

export default function DestinationsPage() {
  return (
    <main>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <PageHero
        eyebrow="Destination hub"
        title="Best places to visit in Turkey—privately."
        description="These Turkey destinations form the backbone of most private tours. Start here, then open the place that matches the chapter you want first."
        answer="The most requested private Turkey destinations—and best places to visit in Turkey for first-timers—are Istanbul, Cappadocia, Ephesus & the Aegean, Pamukkale, and the Turquoise Coast, often combined in 7- to 14-day tailor-made itineraries."
        breadcrumbs={breadcrumbs}
      />

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-[1344px] gap-4 md:grid-cols-3">
          {destinations.map((destination) => (
            <Link
              key={destination.slug}
              href={`/destinations/${destination.slug}`}
              className={cn(
                "group relative min-h-[420px] overflow-hidden bg-black",
                destination.wide && "md:col-span-2",
              )}
            >
              <Image
                src={destination.image}
                alt={`${destination.name}, Türkiye`}
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover transition duration-700 group-hover:scale-[1.03] group-hover:opacity-85"
              />
              <div className="image-shade absolute inset-0" />
              <div className="absolute inset-x-6 bottom-6 flex items-end justify-between text-white">
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-white/70">
                    {destination.note}
                  </p>
                  <h2 className="mt-2 font-heading text-4xl">
                    {destination.name}
                  </h2>
                </div>
                <ArrowUpRight className="size-6" aria-hidden="true" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CtaBand
        title="Not sure where to begin?"
        body="Tell us your dates and interests. We will suggest a destination sequence that feels coherent—not crowded."
      />
    </main>
  );
}
