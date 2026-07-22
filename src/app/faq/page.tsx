import { CtaBand } from "@/components/cta-band";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { RelatedLinks } from "@/components/related-links";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Private Turkey Tour FAQ",
  description:
    "Answers to common questions about private Turkey tours—timing, customization, inclusions, families, and how planning works.",
  path: "/faq",
});

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "FAQ", href: "/faq" },
];

const faqs = [
  {
    question: "How far in advance should I plan a private Turkey tour?",
    answer:
      "Three to six months is comfortable for popular spring and autumn windows, especially if you want specific cave hotels or coastal stays. Shorter lead times can still work with flexible hotel choices.",
  },
  {
    question: "Can you arrange everything from arrival to departure?",
    answer:
      "Yes. Guides, transfers, domestic flights where needed, stay recommendations, and timing are coordinated so you are not managing logistics day by day.",
  },
  {
    question: "Are private Turkey tours suitable for families?",
    answer:
      "Often ideal. Private pacing makes nap windows, snack stops, and shorter site visits easier than fixed group schedules.",
  },
  {
    question: "Do you only offer luxury hotels?",
    answer:
      "No. Private means tailored. Stays can be boutique, design-led, classic, or elevated depending on your brief and budget.",
  },
  {
    question: "What if a Cappadocia balloon flight is cancelled?",
    answer:
      "Balloon mornings depend on weather. We reserve reputable operators and always keep meaningful alternatives ready so the day still feels complete.",
  },
  {
    question: "How do I start?",
    answer:
      "Send your dates, trip length, and preferences via the plan-your-trip form or email. We reply with first itinerary ideas and questions to refine the design.",
  },
];

export default function FaqPage() {
  return (
    <main>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), faqSchema(faqs)]} />
      <PageHero
        eyebrow="FAQ"
        title="Straight answers before you enquire."
        description="These are the questions travelers ask most before commissioning a private journey across Türkiye."
        breadcrumbs={breadcrumbs}
      />

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1100px]">
          <FaqList items={faqs} />
        </div>
      </section>

      <RelatedLinks
        items={[
          {
            title: "How it works",
            href: "/how-it-works",
            description: "See the planning process step by step.",
          },
          {
            title: "Private vs group",
            href: "/guides/private-vs-group-turkey-tours",
            description: "Compare touring styles clearly.",
          },
          {
            title: "Plan your trip",
            href: "/plan-your-trip",
            description: "Start with a short brief.",
          },
        ]}
      />
      <CtaBand />
    </main>
  );
}
