import Link from "next/link";

import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Contact Private Turkey Tour",
  description:
    "Contact Private Turkey Tour to start planning a bespoke private journey across Türkiye.",
  path: "/contact",
});

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Contact", href: "/contact" },
];

export default function ContactPage() {
  return (
    <main>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <PageHero
        eyebrow="Contact"
        title="We are ready when you are."
        description="Reach the planning team directly, or use the trip form if you already have dates and preferences in mind."
        breadcrumbs={breadcrumbs}
      />

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-[1100px] gap-8 md:grid-cols-2">
          <article className="border border-black/10 bg-[#efe9df] p-8">
            <p className="eyebrow">Email</p>
            <a
              className="mt-4 block font-heading text-3xl tracking-[-0.03em] underline underline-offset-4"
              href={`mailto:${siteConfig.email}`}
            >
              {siteConfig.email}
            </a>
            <p className="mt-4 text-base leading-8 text-black/65">
              Best for quick questions or attaching preferences, dates, and
              companion details.
            </p>
          </article>
          <article className="border border-black/10 bg-[#efe9df] p-8">
            <p className="eyebrow">Plan a trip</p>
            <Link
              href="/plan-your-trip"
              className="mt-4 block font-heading text-3xl tracking-[-0.03em] underline underline-offset-4"
            >
              Open planning form
            </Link>
            <p className="mt-4 text-base leading-8 text-black/65">
              Structured brief for dates, regions, pace, and stay style—so we can
              reply with a sharper first outline.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
