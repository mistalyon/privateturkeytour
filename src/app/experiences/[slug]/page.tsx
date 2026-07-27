import Image from "next/image";
import { notFound } from "next/navigation";

import { CtaBand } from "@/components/cta-band";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { ProseSections } from "@/components/prose-sections";
import { RelatedLinks } from "@/components/related-links";
import {
  getExperience,
  getExperienceSlugs,
} from "@/content/experiences";
import { absoluteUrl, buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getExperienceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const experience = getExperience(slug);
  if (!experience) return {};

  return buildMetadata({
    title: experience.title,
    description: experience.description,
    path: `/experiences/${experience.slug}`,
    image: experience.image,
    keywords: [
      experience.focusKeyword,
      ...experience.secondaryKeywords,
    ],
  });
}

export default async function ExperiencePage({ params }: Props) {
  const { slug } = await params;
  const experience = getExperience(slug);
  if (!experience) notFound();

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Experiences", href: "/experiences" },
    {
      name: experience.name,
      href: `/experiences/${experience.slug}`,
    },
  ];

  return (
    <main>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          faqSchema(experience.faqs),
          {
            "@context": "https://schema.org",
            "@type": "TouristAttraction",
            name: experience.name,
            description: experience.description,
            url: absoluteUrl(`/experiences/${experience.slug}`),
            image: absoluteUrl(experience.image),
            provider: {
              "@type": "TravelAgency",
              name: siteConfig.name,
              url: siteConfig.url,
            },
          },
        ]}
      />

      <PageHero
        eyebrow="Private experience"
        title={experience.title}
        description={experience.description}
        answer={experience.answer}
        breadcrumbs={breadcrumbs}
      />

      <section className="px-5 py-10 sm:px-8 lg:px-12">
        <div className="relative mx-auto min-h-[400px] max-w-[1100px] overflow-hidden">
          <Image
            src={experience.image}
            alt={experience.name}
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
            <p className="eyebrow">Duration</p>
            <p className="mt-4 text-lg leading-8 text-black/70">
              {experience.duration}
            </p>
            <p className="eyebrow mt-10">Best for</p>
            <p className="mt-4 text-lg leading-8 text-black/70">
              {experience.bestFor}
            </p>
          </div>
          <ProseSections sections={experience.sections} />
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1100px]">
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-4 font-heading text-4xl tracking-[-0.03em]">
            Common questions
          </h2>
          <div className="mt-8">
            <FaqList items={experience.faqs} />
          </div>
        </div>
      </section>

      <RelatedLinks items={experience.related} />
      <CtaBand
        title={`Add ${experience.name.toLowerCase()} to your journey.`}
        body="Share dates and preferences. We will weave this experience into a coherent private Turkey itinerary."
      />
    </main>
  );
}
