import Image from "next/image";
import { notFound } from "next/navigation";

import { CtaBand } from "@/components/cta-band";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { RelatedLinks } from "@/components/related-links";
import { getGuide, getGuideSlugs } from "@/content/guides";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getGuideSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};

  return buildMetadata({
    title: guide.title,
    description: guide.description,
    path: `/guides/${guide.slug}`,
    image: guide.image,
    type: "article",
  });
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Guides", href: "/guides" },
    { name: guide.name, href: `/guides/${guide.slug}` },
  ];

  return (
    <main>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          faqSchema(guide.faqs),
          articleSchema({
            title: guide.title,
            description: guide.description,
            path: `/guides/${guide.slug}`,
            datePublished: guide.publishedAt,
            dateModified: guide.updatedAt,
            image: guide.image,
          }),
        ]}
      />

      <PageHero
        eyebrow="Guide"
        title={guide.title}
        description={guide.description}
        answer={guide.answer}
        breadcrumbs={breadcrumbs}
      />

      <section className="px-5 py-10 sm:px-8 lg:px-12">
        <div className="relative mx-auto min-h-[360px] max-w-[1100px] overflow-hidden">
          <Image
            src={guide.image}
            alt={guide.name}
            fill
            priority
            sizes="(max-width: 1100px) 100vw, 1100px"
            className="object-cover"
          />
        </div>
        <p className="mx-auto mt-4 max-w-[1100px] text-xs uppercase tracking-[0.14em] text-black/45">
          Published {guide.publishedAt} · Updated {guide.updatedAt}
        </p>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[760px] space-y-12">
          {guide.sections.map((section) => (
            <article key={section.heading}>
              <h2 className="font-heading text-3xl tracking-[-0.03em] sm:text-4xl">
                {section.heading}
              </h2>
              <p className="mt-4 text-lg leading-8 text-black/65">
                {section.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1100px]">
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-4 font-heading text-4xl tracking-[-0.03em]">
            Quick clarifications
          </h2>
          <div className="mt-8">
            <FaqList items={guide.faqs} />
          </div>
        </div>
      </section>

      <RelatedLinks items={guide.related} />
      <CtaBand />
    </main>
  );
}
