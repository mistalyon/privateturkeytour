import Link from "next/link";

import { CtaBand } from "@/components/cta-band";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { RelatedLinks } from "@/components/related-links";
import { keywordList, pageKeywords } from "@/content/keywords";
import { topicalClusters } from "@/content/topical-map";
import { breadcrumbSchema, faqSchema, itemListSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Private Turkey Tours | Tailor-Made Journeys",
  description:
    "Private Turkey tours designed around you—tailor-made itineraries, licensed private guides, boutique stays, and seamless in-country care across Türkiye. Enquire for a custom outline.",
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
      "Typically a dedicated travel designer, licensed private guides, handpicked stays, private transfers or domestic flights as needed, and ongoing support while you are in Türkiye. Signature experiences like balloons or a private gulet cruise can be added as line items.",
  },
  {
    question: "How customizable are private Turkey tours?",
    answer:
      "Fully. Destinations, pacing, hotel style, food focus, and special experiences are shaped around your brief—not a fixed departure calendar. That is the product: a journey built for you, not a seat on a coach.",
  },
  {
    question: "Who are private Turkey tours best for?",
    answer:
      "Couples, families, honeymoon travelers, cultural travelers, and anyone who prefers flexible timing over coach-group schedules. If privacy and depth matter more than the lowest group price, private is usually the right buy.",
  },
  {
    question: "How do I start booking a private Turkey tour?",
    answer:
      "Share dates, trip length, and must-sees via plan your trip or WhatsApp. We return a private outline and cost drivers—then refine stays and guiding until you are ready to confirm.",
  },
];

const audienceCards = [
  {
    title: "Cultural & heritage",
    body: "Istanbul, Ephesus, and specialist guiding for travelers who want depth without rushing.",
    href: "/destinations",
  },
  {
    title: "Honeymoon & couples",
    body: "Quiet stays, private dinners, and coastal or cave-hotel evenings shaped for two.",
    href: "/private-turkey-tours/honeymoon",
  },
  {
    title: "Family & multi-gen",
    body: "Flexible pacing, shorter ruin visits, and logistics that respect different energy levels.",
    href: "/private-turkey-tours/family",
  },
  {
    title: "Luxury & elevated",
    body: "Design-led stays, specialist guides, and refined pacing for a high-end private journey.",
    href: "/private-turkey-tours/luxury",
  },
  {
    title: "Christmas & New Year",
    body: "Festive Istanbul nights and winter Cappadocia chapters without rigid holiday packages.",
    href: "/private-turkey-tours/christmas-new-year",
  },
];

const privateCluster = topicalClusters.find((c) => c.id === "private-tours");

export default function PrivateTurkeyToursPage() {
  return (
    <main>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          faqSchema(faqs),
          itemListSchema({
            name: "Private Turkey tour routes",
            path: "/private-turkey-tours",
            items: audienceCards.map((card) => ({
              name: card.title,
              href: card.href,
            })),
          }),
        ]}
      />
      <PageHero
        eyebrow="Private Turkey tours"
        title="Private Turkey Tours, designed around you."
        description="Private Turkey tours are tailor-made journeys with licensed local guides, carefully chosen stays, and logistics handled quietly in the background—not a fixed coach package. Enquire once; we design the route you actually want to buy."
        answer="Private Turkey tours replace fixed group departures with a custom itinerary, private guiding, and door-to-door care—ideal when flexibility, privacy, and depth matter more than a standardized package. Share dates and we draft a sellable outline for Istanbul, Cappadocia, Ephesus, Pamukkale, and the Turquoise Coast."
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
              linger, and regions can be sequenced for weather and energy.
              Explore our{" "}
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
              to see how journeys typically unfold—then we customize nights,
              guiding, and signature experiences until the trip is yours to
              book.
            </p>
          </article>

          <article>
            <h2 className="font-heading text-4xl tracking-[-0.03em]">
              Why travelers upgrade to a private Turkey tour
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-black/65">
              Coach packages sell a calendar. Private Turkey tours sell recovered
              hours: early Ephesus, weather-smart Cappadocia balloon backups,
              honeymoon dinners that are not a group table, and family pacing
              that does not punish grandparents. You pay more than a coach seat;
              you buy timing, privacy, and stays chosen for your brief.
            </p>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-black/65">
              Still comparing? Read{" "}
              <Link
                className="underline underline-offset-4"
                href="/guides/private-vs-group-turkey-tours"
              >
                private vs group Turkey tours
              </Link>{" "}
              and{" "}
              <Link
                className="underline underline-offset-4"
                href="/guides/private-turkey-tour-cost"
              >
                private Turkey tour cost
              </Link>
              —then enquire when you want a real outline, not another brochure.
            </p>
          </article>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {audienceCards.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="border border-black/10 bg-[#efe9df] p-6 transition hover:border-black/25"
              >
                <h3 className="font-heading text-2xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-black/65">
                  {item.body}
                </p>
              </Link>
            ))}
          </div>

          <article>
            <h2 className="font-heading text-4xl tracking-[-0.03em]">
              How to buy: from brief to booking
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-black/65">
              Share dates, length, and must-sees. We draft a private outline—
              destinations, sample days, stay direction, and cost drivers—
              then refine until the rhythm feels right. Guides, transfers, and
              in-country support are arranged before you fly. See{" "}
              <Link
                className="underline underline-offset-4"
                href="/how-it-works"
              >
                how private Turkey tours work
              </Link>{" "}
              or go straight to{" "}
              <Link
                className="underline underline-offset-4"
                href="/plan-your-trip"
              >
                plan your trip
              </Link>
              .
            </p>
          </article>

          {privateCluster ? (
            <article>
              <h2 className="font-heading text-4xl tracking-[-0.03em]">
                Private-tour topic cluster
              </h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-black/65">
                This pillar page anchors the private Turkey tours topic. Explore
                audience routes and planning supports next:
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {privateCluster.spokes.map((spoke) => (
                  <li key={spoke.href}>
                    <Link
                      className="underline underline-offset-4"
                      href={spoke.href}
                    >
                      {spoke.title}
                    </Link>
                    <span className="text-black/45"> — {spoke.focusKeyword}</span>
                  </li>
                ))}
              </ul>
            </article>
          ) : null}
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
            title: "Turkey experiences",
            href: "/experiences",
            description: "Balloon, food tours, and private gulet days.",
          },
          {
            title: "Private Turkey tour cost",
            href: "/guides/private-turkey-tour-cost",
            description: "What actually drives the price.",
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
