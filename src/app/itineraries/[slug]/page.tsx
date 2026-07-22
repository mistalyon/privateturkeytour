import Image from "next/image";
import { notFound } from "next/navigation";

import { CtaBand } from "@/components/cta-band";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { RelatedLinks } from "@/components/related-links";
import {
  getItinerary,
  getItinerarySlugs,
} from "@/content/itineraries";
import {
  breadcrumbSchema,
  faqSchema,
  touristTripSchema,
} from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getItinerarySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const itinerary = getItinerary(slug);
  if (!itinerary) return {};

  return buildMetadata({
    title: itinerary.title,
    description: itinerary.description,
    path: `/itineraries/${itinerary.slug}`,
    image: itinerary.image,
    keywords: [
      itinerary.focusKeyword,
      ...itinerary.secondaryKeywords,
      "private turkey itinerary",
    ],
  });
}

export default async function ItineraryPage({ params }: Props) {
  const { slug } = await params;
  const itinerary = getItinerary(slug);
  if (!itinerary) notFound();

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Itineraries", href: "/itineraries" },
    { name: itinerary.name, href: `/itineraries/${itinerary.slug}` },
  ];

  return (
    <main>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          faqSchema(itinerary.faqs),
          touristTripSchema({
            name: itinerary.name,
            description: itinerary.description,
            path: `/itineraries/${itinerary.slug}`,
            itinerary: itinerary.daysOutline.map(
              (day) => `${day.day}: ${day.title}`,
            ),
          }),
        ]}
      />

      <PageHero
        eyebrow={`${itinerary.days}-day private journey`}
        title={itinerary.title}
        description={itinerary.description}
        answer={itinerary.answer}
        breadcrumbs={breadcrumbs}
      />

      <section className="px-5 py-10 sm:px-8 lg:px-12">
        <div className="relative mx-auto min-h-[380px] max-w-[1100px] overflow-hidden">
          <Image
            src={itinerary.image}
            alt={itinerary.name}
            fill
            priority
            sizes="(max-width: 1100px) 100vw, 1100px"
            className="object-cover"
          />
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-[1100px] gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">Who it is for</p>
            <p className="mt-4 text-lg leading-8 text-black/70">
              {itinerary.whoFor}
            </p>
            <p className="eyebrow mt-10">Typically includes</p>
            <ul className="mt-4 space-y-3 text-black/70">
              {itinerary.includes.map((item) => (
                <li key={item} className="border-b border-black/10 pb-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">Day-by-day outline</p>
            <div className="mt-6 space-y-6">
              {itinerary.daysOutline.map((day) => (
                <article
                  key={day.day}
                  className="border-b border-black/10 pb-6"
                >
                  <p className="text-xs uppercase tracking-[0.16em] text-black/45">
                    {day.day}
                  </p>
                  <h2 className="mt-2 font-heading text-3xl tracking-[-0.03em]">
                    {day.title}
                  </h2>
                  <p className="mt-3 text-base leading-8 text-black/65">
                    {day.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1100px]">
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-4 font-heading text-4xl tracking-[-0.03em]">
            Before you enquire
          </h2>
          <div className="mt-8">
            <FaqList items={itinerary.faqs} />
          </div>
        </div>
      </section>

      <RelatedLinks items={itinerary.related} />
      <CtaBand title="Customize this itinerary." />
    </main>
  );
}
