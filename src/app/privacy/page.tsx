import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "Privacy policy for Private Turkey Tour—how we collect, use, and protect enquiry and website information.",
  path: "/privacy",
  noIndex: false,
});

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Privacy", href: "/privacy" },
];

export default function PrivacyPage() {
  return (
    <main>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="How Private Turkey Tour handles information you share when browsing or enquiring about a private journey."
        breadcrumbs={breadcrumbs}
      />

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[760px] space-y-10 text-base leading-8 text-black/70">
          <p>Last updated: 26 July 2026</p>
          <article>
            <h2 className="font-heading text-3xl tracking-[-0.03em] text-black">
              Who we are
            </h2>
            <p className="mt-4">
              Private Turkey Tour ({siteConfig.url}) designs private journeys
              across Türkiye. Contact:{" "}
              <a
                className="underline underline-offset-4"
                href={`mailto:${siteConfig.email}`}
              >
                {siteConfig.email}
              </a>
              .
            </p>
          </article>
          <article>
            <h2 className="font-heading text-3xl tracking-[-0.03em] text-black">
              What we collect
            </h2>
            <p className="mt-4">
              When you send a planning enquiry we may collect your name, email,
              travel dates, trip preferences, and message content. Standard
              server and analytics logs may include IP address, browser type,
              and pages visited.
            </p>
          </article>
          <article>
            <h2 className="font-heading text-3xl tracking-[-0.03em] text-black">
              How we use information
            </h2>
            <p className="mt-4">
              We use enquiry details to respond, design itineraries, and
              improve our services. We do not sell personal data. We may share
              details with trusted local partners (guides, hotels, drivers)
              only as needed to deliver your trip.
            </p>
          </article>
          <article>
            <h2 className="font-heading text-3xl tracking-[-0.03em] text-black">
              Retention &amp; security
            </h2>
            <p className="mt-4">
              We keep enquiry records as long as needed for planning and legal
              obligations, then delete or anonymize them. We apply reasonable
              technical and organizational safeguards.
            </p>
          </article>
          <article>
            <h2 className="font-heading text-3xl tracking-[-0.03em] text-black">
              Your choices
            </h2>
            <p className="mt-4">
              You may request access, correction, or deletion of personal data
              we hold by emailing {siteConfig.email}. You may also stop
              marketing messages at any time (we do not run aggressive email
              campaigns by default).
            </p>
          </article>
          <article>
            <h2 className="font-heading text-3xl tracking-[-0.03em] text-black">
              Cookies
            </h2>
            <p className="mt-4">
              The site may use essential cookies for performance and optional
              analytics. You can control cookies through your browser settings.
            </p>
          </article>
        </div>
      </section>

      <CtaBand
        title="Questions about privacy?"
        body="Write to us and we will clarify how your enquiry data is handled."
        href="/contact"
        label="Contact"
      />
    </main>
  );
}
