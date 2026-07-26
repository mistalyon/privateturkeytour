import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Terms of Use",
  description:
    "Terms of use for Private Turkey Tour website content, enquiries, and itinerary planning conversations.",
  path: "/terms",
});

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Terms", href: "/terms" },
];

export default function TermsPage() {
  return (
    <main>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <PageHero
        eyebrow="Legal"
        title="Terms of Use"
        description="These terms cover use of privateturkeytour.com and planning enquiries submitted through the site."
        breadcrumbs={breadcrumbs}
      />

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[760px] space-y-10 text-base leading-8 text-black/70">
          <p>Last updated: 26 July 2026</p>
          <article>
            <h2 className="font-heading text-3xl tracking-[-0.03em] text-black">
              Website content
            </h2>
            <p className="mt-4">
              Sample itineraries, destination pages, and guides are for
              inspiration. Final trip details, inclusions, and pricing are
              confirmed only in a written proposal after your brief.
            </p>
          </article>
          <article>
            <h2 className="font-heading text-3xl tracking-[-0.03em] text-black">
              Enquiries
            </h2>
            <p className="mt-4">
              Submitting a planning form is not a booking. We respond with ideas
              and next steps. Contracts, deposits, and cancellation terms are
              provided separately before you commit.
            </p>
          </article>
          <article>
            <h2 className="font-heading text-3xl tracking-[-0.03em] text-black">
              Accuracy
            </h2>
            <p className="mt-4">
              We aim for accurate destination and seasonal guidance. Opening
              hours, balloon fly rates, site rules, and transport schedules can
              change. Your final itinerary reflects current conditions.
            </p>
          </article>
          <article>
            <h2 className="font-heading text-3xl tracking-[-0.03em] text-black">
              Intellectual property
            </h2>
            <p className="mt-4">
              Site text, branding, and design belong to {siteConfig.name}. Do
              not copy content for commercial reuse without permission.
            </p>
          </article>
          <article>
            <h2 className="font-heading text-3xl tracking-[-0.03em] text-black">
              Liability
            </h2>
            <p className="mt-4">
              To the extent permitted by law, we are not liable for indirect
              losses arising from website use. Trip-related liability is defined
              in your travel agreement and supplier terms.
            </p>
          </article>
          <article>
            <h2 className="font-heading text-3xl tracking-[-0.03em] text-black">
              Contact
            </h2>
            <p className="mt-4">
              Questions:{" "}
              <a
                className="underline underline-offset-4"
                href={`mailto:${siteConfig.email}`}
              >
                {siteConfig.email}
              </a>
              .
            </p>
          </article>
        </div>
      </section>

      <CtaBand
        title="Ready to plan?"
        body="Share dates and preferences—we will shape a private outline."
        href="/plan-your-trip"
        label="Plan your trip"
      />
    </main>
  );
}
