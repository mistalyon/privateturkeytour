import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { RelatedLinks } from "@/components/related-links";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "About Private Turkey Tour",
  description:
    "We are a Türkiye-based team designing private journeys with licensed local guides, boutique stays, and seamless in-country care.",
  path: "/about",
});

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
];

export default function AboutPage() {
  return (
    <main>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <PageHero
        eyebrow="Company"
        title="Local designers. Quiet logistics. Real places."
        description={`${siteConfig.name} is a Türkiye-based team building private journeys for travelers who want depth without the friction of group schedules.`}
        answer="We design tailor-made private Turkey tours from our base in Türkiye, pairing licensed guides and carefully chosen stays with continuous local support."
        breadcrumbs={breadcrumbs}
      />

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[760px] space-y-8 text-lg leading-8 text-black/65">
          <p>
            Every itinerary begins with a conversation. We listen for pace,
            curiosity, celebration moments, and the kind of evenings you want to
            remember—then we build the route, stays, and guiding around that
            brief.
          </p>
          <p>
            Our work is grounded in place knowledge: when Istanbul feels calmest,
            when Cappadocia valleys deserve more time, how Ephesus can be timed
            thoughtfully, and which coastal bases suit swimming days versus quiet
            recovery.
          </p>
          <p>
            Founded with a focus on private travel since {siteConfig.foundedYear}
            , we remain deliberately small enough to stay close to each journey.
          </p>
        </div>
      </section>

      <RelatedLinks
        items={[
          {
            title: "How it works",
            href: "/how-it-works",
            description: "The design process from brief to arrival.",
          },
          {
            title: "Private Turkey Tours",
            href: "/private-turkey-tours",
            description: "What a tailor-made journey includes.",
          },
          {
            title: "Contact",
            href: "/contact",
            description: "Reach the planning team directly.",
          },
        ]}
      />
      <CtaBand title="Tell us about your trip." />
    </main>
  );
}
