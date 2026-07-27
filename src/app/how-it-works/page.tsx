import { CtaBand } from "@/components/cta-band";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { RelatedLinks } from "@/components/related-links";
import { keywordList, pageKeywords } from "@/content/keywords";
import { breadcrumbSchema, faqSchema, howToSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "How Private Turkey Tours Work | Book a Custom Trip",
  description:
    "Learn how private Turkey tours work—from your first brief to licensed guides, boutique stays, and in-country care across Türkiye.",
  path: "/how-it-works",
  keywords: keywordList(pageKeywords.howItWorks),
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
    body: "Your local designer proposes a destination sequence, sample days, and stay direction. We refine until the rhythm feels right—and the trip is ready to book.",
  },
  {
    number: "03",
    title: "Travel with care",
    body: "Guides, transfers, and timing are arranged. While you are in Türkiye, our team stays available so small changes never become stressful.",
  },
];

const faqs = [
  {
    question: "How do private Turkey tours work compared to group tours?",
    answer:
      "You travel with your own party, licensed private guides, and a custom itinerary—no fixed coach departure calendar. Timing, hotels, and experiences are designed around your brief.",
  },
  {
    question: "How long from enquire to a bookable outline?",
    answer:
      "Most briefs receive a first private outline within a few business days, then we refine stays and signature experiences until you are ready to confirm.",
  },
  {
    question: "What is included when I book a private Turkey tour?",
    answer:
      "Typically planning, licensed guiding days as quoted, handpicked stays, private transfers or domestic flights as needed, and in-country support. Balloons, boats, and aviation upgrades are clear line items.",
  },
];

export default function HowItWorksPage() {
  return (
    <main>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          howToSchema({
            name: "How private Turkey tours work",
            description:
              "Three steps from brief to a tailor-made private Turkey tour with licensed guides and in-country care.",
            path: "/how-it-works",
            steps: steps.map((step) => ({
              name: step.title,
              text: step.body,
            })),
          }),
          faqSchema(faqs),
        ]}
      />
      <PageHero
        eyebrow="How private Turkey tours work"
        title="How private Turkey tours work."
        description="Private touring works best when design is collaborative and logistics stay invisible. Here is how we build—and sell—your journey from first brief to arrival."
        answer="How private Turkey tours work: share your dates and preferences, receive a tailor-made outline, refine stays and pacing, then travel with licensed guides, private transfers, and in-country support through the trip."
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

      <section className="border-y border-black/10 bg-[#e9e3d8] px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[760px] space-y-6 text-lg leading-8 text-black/65">
          <h2 className="font-heading text-3xl tracking-[-0.03em] text-black">
            Booking a private Turkey tour without friction
          </h2>
          <p>
            After you approve the outline, we lock hotels, guide days, and
            signature experiences as line items. You always see what changes the
            price—season, stay tier, balloons, boats, or aviation—so booking a
            custom Turkey tour feels controlled, not opaque.
          </p>
          <p>
            While you travel, WhatsApp and local coordination keep adjustments
            small. That is how private Turkey tours work in practice: design
            first, then quiet operations.
          </p>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1100px]">
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-4 font-heading text-4xl tracking-[-0.03em]">
            How booking works
          </h2>
          <div className="mt-8">
            <FaqList items={faqs} />
          </div>
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
            title: "Private Turkey Tours",
            href: "/private-turkey-tours",
            description: "The money hub: what you are buying.",
          },
          {
            title: "Contact private Turkey tour",
            href: "/contact",
            description: "Start the brief by email or WhatsApp.",
          },
        ]}
      />
      <CtaBand title="Begin with a short brief." />
    </main>
  );
}
