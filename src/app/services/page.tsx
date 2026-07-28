import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { RelatedLinks } from "@/components/related-links";
import { keywordList, pageKeywords } from "@/content/keywords";
import { services } from "@/content/services";
import { breadcrumbSchema, itemListSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Private Turkey Travel Services | Transfers, Yacht, Golf & Aviation",
  description:
    "Private Turkey travel services—Istanbul airport transfer, yacht charter, Belek golf holidays, helicopter, and private jet coordination inside bespoke journeys.",
  path: "/services",
  image: "/coast.jpg",
  keywords: keywordList(pageKeywords.services),
});

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
];

export default function ServicesPage() {
  return (
    <main>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          itemListSchema({
            name: "Private Turkey travel services",
            path: "/services",
            items: services.map((item) => ({
              name: item.name,
              href: `/services/${item.slug}`,
            })),
          }),
        ]}
      />
      <PageHero
        eyebrow="Private services"
        title="Private Turkey travel services that unlock the trip."
        description="Transfers, yachts, golf, helicopter, and private jet coordination—booked alone or folded into a tailor-made private Turkey tour."
        answer="The highest-intent private Turkey travel services are Istanbul airport transfers, private yacht charters, Belek golf holidays, helicopter scenic flights, and private jet hops—each quoted as a clear line item or full package around your dates."
        breadcrumbs={breadcrumbs}
      />

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-[1100px] gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group border border-black/10 bg-[#efe9df] transition hover:border-black/25"
            >
              <div className="relative min-h-[200px] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.14em] text-black/45">
                  {service.category} · {service.duration}
                </p>
                <h2 className="mt-3 font-heading text-2xl tracking-[-0.03em]">
                  {service.name}
                </h2>
                <p className="mt-3 text-sm leading-7 text-black/65">
                  {service.description}
                </p>
                <p className="mt-5 inline-flex items-center gap-1 text-sm underline underline-offset-4">
                  Explore
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <RelatedLinks
        items={[
          {
            title: "Private Turkey Tours",
            href: "/private-turkey-tours",
            description: "Fold services into a full journey.",
          },
          {
            title: "Luxury Turkey Tour",
            href: "/private-turkey-tours/luxury",
            description: "Aviation, yacht, and elevated stays.",
          },
          {
            title: "Plan your trip",
            href: "/plan-your-trip",
            description: "Tell us which service to prioritize.",
          },
        ]}
      />
      <CtaBand title="Tell us which service you need." />
    </main>
  );
}
