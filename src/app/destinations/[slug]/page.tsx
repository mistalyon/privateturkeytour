import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CtaBand } from "@/components/cta-band";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { RelatedLinks } from "@/components/related-links";
import {
  destinations,
  getDestination,
  getDestinationSlugs,
} from "@/content/destinations";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getDestinationSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const destination = getDestination(slug);
  if (!destination) return {};

  return buildMetadata({
    title: destination.title,
    description: destination.description,
    path: `/destinations/${destination.slug}`,
    image: destination.image,
    keywords: [
      destination.focusKeyword,
      ...destination.secondaryKeywords,
      "private turkey tour",
    ],
  });
}

export default async function DestinationPage({ params }: Props) {
  const { slug } = await params;
  const destination = getDestination(slug);
  if (!destination) notFound();

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Destinations", href: "/destinations" },
    {
      name: destination.name,
      href: `/destinations/${destination.slug}`,
    },
  ];

  return (
    <main>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          faqSchema(destination.faqs),
          {
            "@context": "https://schema.org",
            "@type": "TouristDestination",
            name: destination.name,
            description: destination.description,
            image: `https://privateturkeytour.com${destination.image}`,
          },
        ]}
      />

      <PageHero
        eyebrow="Private destination"
        title={destination.title}
        description={destination.description}
        answer={destination.answer}
        breadcrumbs={breadcrumbs}
      />

      <section className="px-5 py-10 sm:px-8 lg:px-12">
        <div className="relative mx-auto min-h-[420px] max-w-[1100px] overflow-hidden">
          <Image
            src={destination.image}
            alt={`${destination.name}, Türkiye`}
            fill
            priority
            sizes="(max-width: 1100px) 100vw, 1100px"
            className="object-cover"
          />
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-[1100px] gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="eyebrow">Best time</p>
            <p className="mt-4 text-lg leading-8 text-black/70">
              {destination.bestTime}
            </p>
            <p className="eyebrow mt-10">Highlights</p>
            <ul className="mt-4 space-y-3 text-black/70">
              {destination.highlights.map((item) => (
                <li key={item} className="border-b border-black/10 pb-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-10">
            {destination.sections.map((section) => (
              <article key={section.heading}>
                <h2 className="font-heading text-3xl tracking-[-0.03em] sm:text-4xl">
                  {section.heading}
                </h2>
                <p className="mt-4 text-base leading-8 text-black/65">
                  {section.body}
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
            Common questions
          </h2>
          <div className="mt-8">
            <FaqList items={destination.faqs} />
          </div>
        </div>
      </section>

      <RelatedLinks items={destination.related} />
      <CtaBand
        title={`Design your ${destination.name} chapter.`}
        body="Share dates and preferences. We will shape a private day plan that fits the rest of your Turkey journey."
      />

      <section className="border-t border-black/10 px-5 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1100px] flex-wrap gap-4 text-sm text-black/55">
          <span>Also exploring:</span>
          {destinations
            .filter((item) => item.slug !== destination.slug)
            .map((item) => (
              <Link
                key={item.slug}
                className="underline underline-offset-4 hover:text-black"
                href={`/destinations/${item.slug}`}
              >
                {item.name}
              </Link>
            ))}
        </div>
      </section>
    </main>
  );
}
