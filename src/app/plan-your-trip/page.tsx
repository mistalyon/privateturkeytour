import { CtaBand } from "@/components/cta-band";
import { EnquiryForm } from "@/components/enquiry-form";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { RelatedLinks } from "@/components/related-links";
import { keywordList, pageKeywords } from "@/content/keywords";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Plan a Trip to Turkey | Private Tour Enquiry",
  description:
    "Plan a trip to Turkey with a private designer. Share dates, pace, and interests—we return with custom Turkey itinerary ideas for your private tour.",
  path: "/plan-your-trip",
  keywords: keywordList(pageKeywords.planYourTrip),
});

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Plan your trip", href: "/plan-your-trip" },
];

const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
  "Merhaba, privateturkeytour.com sitesinden size ulaşıyorum.",
)}`;

export default function PlanYourTripPage() {
  return (
    <main>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <PageHero
        eyebrow="Plan a trip to Turkey"
        title="Plan a trip to Turkey—privately."
        description="Share a few details and we will come back with thoughtful first ideas for a private Turkey tour across Türkiye."
        answer="The fastest way to plan a trip to Turkey privately is to send your travel dates, trip length, preferred regions, and stay style. We respond with a custom Turkey itinerary outline—not a generic package. Email, WhatsApp, or the form below all work."
        breadcrumbs={breadcrumbs}
      />

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-[1100px] gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">What helps most</p>
            <ul className="mt-6 space-y-4 text-base leading-8 text-black/70">
              <li className="border-b border-black/10 pb-4">
                Approximate travel dates and trip length
              </li>
              <li className="border-b border-black/10 pb-4">
                Regions you care about—or openness to our suggestion
              </li>
              <li className="border-b border-black/10 pb-4">
                Pace: immersive days vs slower mornings
              </li>
              <li className="border-b border-black/10 pb-4">
                Stay style: boutique, design-led, classic, or elevated
              </li>
              <li>Any celebrations, access needs, or must-avoids</li>
            </ul>
            <p className="mt-8 text-sm leading-7 text-black/55">
              Direct email:{" "}
              <a
                className="underline underline-offset-4"
                href={`mailto:${siteConfig.email}`}
              >
                {siteConfig.email}
              </a>
              <br />
              WhatsApp:{" "}
              <a
                className="underline underline-offset-4"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {siteConfig.phoneDisplay}
              </a>
            </p>
          </div>

          <EnquiryForm />
        </div>
      </section>

      <RelatedLinks
        title="Browse before you enquire"
        items={[
          {
            title: "Private Turkey Tours",
            href: "/private-turkey-tours",
            description: "What tailor-made journeys include.",
          },
          {
            title: "Sample itineraries",
            href: "/itineraries",
            description: "7, 10, and 14-day private routes.",
          },
          {
            title: "Destinations",
            href: "/destinations",
            description: "Istanbul to the Turquoise Coast.",
          },
          {
            title: "Private Turkey tour cost",
            href: "/guides/private-turkey-tour-cost",
            description: "What drives the quote.",
          },
          {
            title: "How it works",
            href: "/how-it-works",
            description: "From brief to arrival.",
          },
          {
            title: "Best time to visit Turkey",
            href: "/guides/best-time-to-visit-turkey",
            description: "Pick the month that fits.",
          },
        ]}
      />

      <CtaBand
        eyebrow="Meanwhile"
        title="Browse while you think."
        body="Explore destinations and sample itineraries, then come back when the shape of the trip feels clearer."
        href="/itineraries"
        label="View itineraries"
      />
    </main>
  );
}
