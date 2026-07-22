import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { RelatedLinks } from "@/components/related-links";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "How Private Turkey Tours Work",
  description:
    "See how Private Turkey Tour designs tailor-made journeys—from first brief to in-country care across Türkiye.",
  path: "/how-it-works",
});

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "How it works", href: "/how-it-works" },
];

const steps = [
  {
    number: "01",
    title: "Share your brief",
    body: "Dates, trip length, must-sees, pace, stay style, and any celebrations or constraints. The clearer the brief, the quieter the logistics feel later.",
  },
  {
    number: "02",
    title: "Receive a private outline",
    body: "Your local designer proposes a destination sequence, sample days, and stay direction. We refine until the rhythm feels right.",
  },
  {
    number: "03",
    title: "Travel with care",
    body: "Guides, transfers, and timing are arranged. While you are in Türkiye, our team stays available so small changes never become stressful.",
  },
];

export default function HowItWorksPage() {
  return (
    <main>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <PageHero
        eyebrow="Process"
        title="From conversation to arrival."
        description="Private touring works best when design is collaborative and logistics stay invisible. Here is how we build your journey."
        answer="We start with your dates and preferences, draft a tailor-made outline, refine stays and pacing with you, then handle guides, transfers, and in-country support through the trip."
        breadcrumbs={breadcrumbs}
      />

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-[1100px] gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.number}
              className="border border-black/10 bg-[#efe9df] p-7"
            >
              <p className="text-xs tracking-[0.16em] text-black/45">
                {step.number}
              </p>
              <h2 className="mt-8 font-heading text-3xl tracking-[-0.03em]">
                {step.title}
              </h2>
              <p className="mt-4 text-base leading-8 text-black/65">
                {step.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <RelatedLinks
        items={[
          {
            title: "How to plan a private Turkey trip",
            href: "/guides/how-to-plan-a-private-turkey-trip",
            description: "A practical checklist before you enquire.",
          },
          {
            title: "Sample itineraries",
            href: "/itineraries",
            description: "See 7, 10, and 14-day private routes.",
          },
          {
            title: "FAQ",
            href: "/faq",
            description: "Common questions, answered plainly.",
          },
        ]}
      />
      <CtaBand title="Begin with a short brief." />
    </main>
  );
}
