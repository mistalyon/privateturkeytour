import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { keywordList, pageKeywords } from "@/content/keywords";

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

export default function PlanYourTripPage() {
  return (
    <main>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <PageHero
        eyebrow="Conversion"
        title="Plan a trip to Turkey—privately."
        description="Share a few details and we will come back with thoughtful first ideas for a private Turkey tour across Türkiye."
        answer="The fastest way to plan a trip to Turkey privately is to send your travel dates, trip length, preferred regions, and stay style. We respond with a custom Turkey itinerary outline—not a generic package."
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
          </div>

          <form
            action={`mailto:${siteConfig.email}`}
            method="post"
            encType="text/plain"
            className="border border-black/10 bg-[#efe9df] p-7 sm:p-10"
          >
            <label className="block text-sm text-black/70">
              Name
              <input
                required
                name="name"
                className="mt-2 w-full border border-black/15 bg-[#f4f0e8] px-4 py-3 outline-none focus:border-black"
              />
            </label>
            <label className="mt-5 block text-sm text-black/70">
              Email
              <input
                required
                type="email"
                name="email"
                className="mt-2 w-full border border-black/15 bg-[#f4f0e8] px-4 py-3 outline-none focus:border-black"
              />
            </label>
            <label className="mt-5 block text-sm text-black/70">
              Travel dates / month
              <input
                name="dates"
                className="mt-2 w-full border border-black/15 bg-[#f4f0e8] px-4 py-3 outline-none focus:border-black"
              />
            </label>
            <label className="mt-5 block text-sm text-black/70">
              Tell us about the trip
              <textarea
                required
                name="message"
                rows={6}
                className="mt-2 w-full border border-black/15 bg-[#f4f0e8] px-4 py-3 outline-none focus:border-black"
                placeholder="Trip length, companions, must-sees, pace, stay style..."
              />
            </label>
            <button
              type="submit"
              className="mt-7 h-12 rounded-full bg-black px-7 text-sm text-[#f4f0e8] transition hover:bg-black/80"
            >
              Send planning request
            </button>
            <p className="mt-4 text-sm leading-7 text-black/55">
              Prefer email directly? Write to{" "}
              <a
                className="underline underline-offset-4"
                href={`mailto:${siteConfig.email}`}
              >
                {siteConfig.email}
              </a>
              .
            </p>
          </form>
        </div>
      </section>

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
