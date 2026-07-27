import Link from "next/link";

import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { RelatedLinks } from "@/components/related-links";
import { keywordList, pageKeywords } from "@/content/keywords";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
  "Merhaba, privateturkeytour.com sitesinden size ulaşıyorum.",
)}`;

export const metadata = buildMetadata({
  title: "Contact Private Turkey Tour | Enquire Now",
  description:
    "Contact our private Turkey tour team by email, WhatsApp, or the trip form to enquire about a bespoke private guided journey across Türkiye.",
  path: "/contact",
  keywords: keywordList(pageKeywords.contact),
});

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Contact", href: "/contact" },
];

const faqs = [
  {
    question: "What is the fastest way to contact Private Turkey Tour?",
    answer:
      "WhatsApp is usually fastest for a short enquire. Email works well for longer briefs and attachments. The plan-your-trip form is best when you already have dates.",
  },
  {
    question: "What should I include when I enquire?",
    answer:
      "Travel month or exact dates, trip length, party size, must-see regions, and stay style. The clearer the brief, the sharper our first private outline.",
  },
  {
    question: "Do you reply with prices immediately?",
    answer:
      "We reply with a private outline and the main cost drivers—then refine hotels and experiences before a final quote.",
  },
];

export default function ContactPage() {
  return (
    <main>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), faqSchema(faqs)]} />
      <PageHero
        eyebrow="Contact private Turkey tour"
        title="Contact Private Turkey Tour to enquire."
        description="Contact our private Turkey tour team by email or WhatsApp, or use the trip form if you already have dates and preferences in mind."
        answer="To contact Private Turkey Tour, email hello@privateturkeytour.com, message us on WhatsApp, or submit the plan-your-trip form with dates and must-sees—we reply with a private itinerary outline and next steps."
        breadcrumbs={breadcrumbs}
      />

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-[1100px] gap-8 md:grid-cols-3">
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
              companion details when you contact our private Turkey tour team.
            </p>
          </article>
          <article className="border border-black/10 bg-[#efe9df] p-8">
            <p className="eyebrow">WhatsApp</p>
            <a
              className="mt-4 block font-heading text-3xl tracking-[-0.03em] underline underline-offset-4"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {siteConfig.phoneDisplay}
            </a>
            <p className="mt-4 text-base leading-8 text-black/65">
              Fastest path to enquire. Tell us you found us on
              privateturkeytour.com.
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
              Structured brief for dates, regions, pace, and stay style—so we
              can reply with a sharper first outline.
            </p>
          </article>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1100px]">
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-4 font-heading text-4xl tracking-[-0.03em]">
            Contact and enquire
          </h2>
          <div className="mt-8">
            <FaqList items={faqs} />
          </div>
        </div>
      </section>

      <RelatedLinks
        items={[
          {
            title: "Private Turkey Tours",
            href: "/private-turkey-tours",
            description: "What tailor-made journeys include.",
          },
          {
            title: "How private Turkey tours work",
            href: "/how-it-works",
            description: "From brief to arrival.",
          },
          {
            title: "Private Turkey tour cost",
            href: "/guides/private-turkey-tour-cost",
            description: "What drives the quote.",
          },
        ]}
      />
    </main>
  );
}
