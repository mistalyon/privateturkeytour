import Image from "next/image";
import { notFound } from "next/navigation";

import { CtaBand } from "@/components/cta-band";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { ProseSections } from "@/components/prose-sections";
import { RelatedLinks } from "@/components/related-links";
import { getService, getServiceSlugs } from "@/content/services";
import { absoluteUrl, buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return buildMetadata({
    title: service.title,
    description: service.description,
    path: `/services/${service.slug}`,
    image: service.image,
    keywords: [service.focusKeyword, ...service.secondaryKeywords],
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: service.name, href: `/services/${service.slug}` },
  ];

  return (
    <main>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          faqSchema(service.faqs),
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.name,
            description: service.description,
            url: absoluteUrl(`/services/${service.slug}`),
            image: absoluteUrl(service.image),
            provider: {
              "@type": "TravelAgency",
              name: siteConfig.name,
              url: siteConfig.url,
            },
            areaServed: {
              "@type": "Country",
              name: "Turkey",
            },
          },
        ]}
      />

      <PageHero
        eyebrow={`Private ${service.category} service`}
        title={service.title}
        description={service.description}
        answer={service.answer}
        breadcrumbs={breadcrumbs}
      />

      <section className="px-5 py-10 sm:px-8 lg:px-12">
        <div className="relative mx-auto min-h-[400px] max-w-[1100px] overflow-hidden">
          <Image
            src={service.image}
            alt={service.name}
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
              {service.duration}
            </p>
            <p className="eyebrow mt-10">Best for</p>
            <p className="mt-4 text-lg leading-8 text-black/70">
              {service.bestFor}
            </p>
            <p className="eyebrow mt-10">Highlights</p>
            <ul className="mt-4 space-y-3 text-black/70">
              {service.highlights.map((item) => (
                <li key={item} className="border-b border-black/10 pb-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <ProseSections sections={service.sections} />
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1100px]">
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-4 font-heading text-4xl tracking-[-0.03em]">
            Before you enquire
          </h2>
          <div className="mt-8">
            <FaqList items={service.faqs} />
          </div>
        </div>
      </section>

      <RelatedLinks items={service.related} />
      <CtaBand title={`Enquire about ${service.name.toLowerCase()}.`} />
    </main>
  );
}
