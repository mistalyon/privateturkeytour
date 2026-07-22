import Link from "next/link";

import { CtaBand } from "@/components/cta-band";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { RelatedLinks } from "@/components/related-links";
import { keywordList, pageKeywords } from "@/content/keywords";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Private Turkey Tours | Tailor-Made Journeys",
  description:
    "Private Turkey tours designed around you—tailor-made itineraries, licensed private guides, boutique stays, and seamless in-country care across Türkiye.",
  path: "/private-turkey-tours",
  keywords: keywordList(pageKeywords.privateTurkeyTours),
});

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Private Turkey Tours", href: "/private-turkey-tours" },
];

const faqs = [
  {
    question: "What is included in a private Turkey tour?",
    answer:
      "Typically a dedicated travel designer, licensed private guides, handpicked stays, private transfers or domestic flights as needed, and ongoing support while you are in Türkiye.",
  },
  {
    question: "How customizable are private Turkey tours?",
    answer:
      "Fully. Destinations, pacing, hotel style, food focus, and special experiences are shaped around your brief—not a fixed departure calendar.",
  },
  {
    question: "Who are private Turkey tours best for?",
    answer:
      "Couples, families, honeymoon travelers, cultural travelers, and anyone who prefers flexible timing over coach-group schedules.",
  },
];

export default function PrivateTurkeyToursPage() {
  return (
    <main>
      <JsonLd
        data={[breadcrumbSchema(breadcrumbs), faqSchema(faqs)]}
      />
      <PageHero
        eyebrow="Money hub"
        title="Private Turkey Tours, designed around you."
        description="Private Turkey tours are tailor-made journeys with licensed local guides, carefully chosen stays, and logistics handled quietly in the background—not a fixed coach package."
        answer="Private Turkey tours replace fixed group departures with a custom itinerary, private guiding, and door-to-door care—ideal when flexibility, privacy, and depth matter more than a standardized package."
        breadcrumbs={breadcrumbs}
      />

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1100px] space-y-12">
          <article>
            <h2 className="font-heading text-4xl tracking-[-0.03em]">
              What “private” actually means
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-black/65">
              Your days belong to you. Museums can start earlier, lunches can
              linger, and regions can be sequenced for weather and energy. Explore
              our{" "}
              <Link
                className="underline underline-offset-4"
                href="/destinations"
              >
                destinations
              </Link>{" "}
              or browse{" "}
              <Link
                className="underline underline-offset-4"
                href="/itineraries"
              >
                sample itineraries
              </Link>{" "}
              to see how journeys typically unfold.
            </p>
          </article>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Cultural & heritage",
                body: "Istanbul, Ephesus, and specialist guiding for travelers who want depth without rushing.",
              },
              {
                title: "Honeymoon & couples",
                body: "Quiet stays, private dinners, and coastal or cave-hotel evenings shaped for two.",
              },
              {
                title: "Family & multi-gen",
                body: "Flexible pacing, shorter ruin visits, and logistics that respect different energy levels.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="border border-black/10 bg-[#efe9df] p-6"
              >
                <h3 className="font-heading text-2xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-black/65">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1100px]">
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-4 font-heading text-4xl tracking-[-0.03em]">
            Private touring, clarified
          </h2>
          <div className="mt-8">
            <FaqList items={faqs} />
          </div>
        </div>
      </section>

      <RelatedLinks
        items={[
          {
            title: "How it works",
            href: "/how-it-works",
            description: "From first conversation to arrival day.",
          },
          {
            title: "Private vs group",
            href: "/guides/private-vs-group-turkey-tours",
            description: "A clear comparison before you decide.",
          },
          {
            title: "Plan your trip",
            href: "/plan-your-trip",
            description: "Share dates and we draft first ideas.",
          },
        ]}
      />
      <CtaBand title="Start your private Turkey tour." />
    </main>
  );
}
