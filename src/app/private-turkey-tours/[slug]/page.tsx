import Image from "next/image";
import { notFound } from "next/navigation";

import { CtaBand } from "@/components/cta-band";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { RelatedLinks } from "@/components/related-links";
import { getAudience, getAudienceSlugs } from "@/content/audiences";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAudienceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const audience = getAudience(slug);
  if (!audience) return {};

  return buildMetadata({
    title: audience.title,
    description: audience.description,
    path: `/private-turkey-tours/${audience.slug}`,
    image: audience.image,
    keywords: [audience.focusKeyword, ...audience.secondaryKeywords],
  });
}

export default async function AudiencePage({ params }: Props) {
  const { slug } = await params;
  const audience = getAudience(slug);
  if (!audience) notFound();

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Private Turkey Tours", href: "/private-turkey-tours" },
    {
      name: audience.name,
      href: `/private-turkey-tours/${audience.slug}`,
    },
  ];

  return (
    <main>
      <JsonLd
        data={[breadcrumbSchema(breadcrumbs), faqSchema(audience.faqs)]}
      />

      <PageHero
        eyebrow="Audience cluster"
        title={audience.title}
        description={audience.description}
        answer={audience.answer}
        breadcrumbs={breadcrumbs}
      />

      <section className="px-5 py-10 sm:px-8 lg:px-12">
        <div className="relative mx-auto min-h-[400px] max-w-[1100px] overflow-hidden">
          <Image
            src={audience.image}
            alt={audience.name}
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
            <p className="eyebrow">Designed around</p>
            <ul className="mt-4 space-y-3 text-black/70">
              {audience.highlights.map((item) => (
                <li key={item} className="border-b border-black/10 pb-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-10">
            {audience.sections.map((section) => (
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
            Before you enquire
          </h2>
          <div className="mt-8">
            <FaqList items={audience.faqs} />
          </div>
        </div>
      </section>

      <RelatedLinks items={audience.related} />
      <CtaBand
        title={`Design your ${audience.name.toLowerCase()} journey.`}
        body="Share dates, group size, and must-haves. We return with a private outline shaped for you."
      />
    </main>
  );
}
