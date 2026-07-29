import { CtaBand } from "@/components/cta-band";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { RelatedLinks } from "@/components/related-links";
import { keywordList, pageKeywords } from "@/content/keywords";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Private Turkey Tour Company | About Us",
  description:
    "About our private Turkey tour company—Türkiye-based designers of bespoke journeys with licensed local guides, boutique stays, and in-country care.",
  path: "/about",
  image: "/istanbul.jpg",
  keywords: keywordList(pageKeywords.about),
});

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
];

const faqs = [
  {
    question: "Are you a private Turkey tour company based in Türkiye?",
    answer:
      "Yes. We design and operate tailor-made private Turkey tours from Türkiye, working with licensed guides and trusted local partners in each region.",
  },
  {
    question: "Do you run group coach tours?",
    answer:
      "No. Our model is private and bespoke—your party, your pace, your itinerary—not fixed departures on a shared coach.",
  },
  {
    question: "Who do you typically design for?",
    answer:
      "Couples, honeymooners, families, multi-generational groups, solo travelers, luxury clients, golf travelers (Belek packages), and archaeology- or food-led travelers who want private guiding.",
  },
  {
    question: "Do you arrange Turkey golf holidays from Belek?",
    answer:
      "Yes. We design Belek golf packages with private transfers, tee-time coordination, and non-golfer Antalya days—quoted as clear line items, not a fixed resort flyer. See our Turkey golf holiday page.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), faqSchema(faqs)]} />
      <PageHero
        eyebrow="Private Turkey tour company"
        title="Private Turkey tour company, based in Türkiye."
        description={`${siteConfig.name} is a private Turkey tour company building bespoke journeys for travelers who want depth without group schedules—licensed guides, handpicked stays, and quiet logistics.`}
        answer="We are a private Turkey tour company designing tailor-made journeys from our base in Türkiye—licensed private guides, carefully chosen stays, and continuous local support for couples, families, solo travelers, and luxury clients."
        breadcrumbs={breadcrumbs}
      />

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[760px] space-y-8 text-lg leading-8 text-black/65">
          <p>
            As a private Turkey tour company, every itinerary begins with a
            conversation. We listen for pace, curiosity, celebration moments,
            and the evenings you want to remember—then we build the route,
            stays, and guiding around that brief.
          </p>
          <p>
            Our work is grounded in place knowledge: when Istanbul feels
            calmest, when Cappadocia valleys deserve more time, how Ephesus can
            be timed thoughtfully, and which coastal or archaeology chapters
            earn their nights on a private Turkey tour. The same logistics craft
            applies to Belek golf holidays—tee windows, hotel–course transfers,
            and non-golfer Antalya days designed as one coherent private product.
          </p>
          <p>
            Founded with a focus on private travel since {siteConfig.foundedYear}
            , we remain deliberately small enough to stay close to each journey.
            You buy a designed trip—not a seat on a standardized package.
          </p>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#e9e3d8] px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[760px]">
          <h2 className="font-heading text-3xl tracking-[-0.03em]">
            What working with our private Turkey tour company feels like
          </h2>
          <p className="mt-6 text-lg leading-8 text-black/65">
            Clear outlines, transparent cost drivers, and in-country care while
            you travel. From short Istanbul–Cappadocia packages to archaeology
            arcs, Belek golf weeks, and coastal finishes, the same private
            standard applies.
          </p>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1100px]">
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-4 font-heading text-4xl tracking-[-0.03em]">
            About our private Turkey tour company
          </h2>
          <div className="mt-8">
            <FaqList items={faqs} />
          </div>
        </div>
      </section>

      <RelatedLinks
        items={[
          {
            title: "How private Turkey tours work",
            href: "/how-it-works",
            description: "The design process from brief to arrival.",
          },
          {
            title: "Private Turkey Tours",
            href: "/private-turkey-tours",
            description: "What a tailor-made journey includes.",
          },
          {
            title: "Contact private Turkey tour",
            href: "/contact",
            description: "Reach the planning team directly.",
          },
          {
            title: "Turkey golf holiday",
            href: "/services/turkey-golf",
            description: "Belek packages designed from Türkiye.",
          },
        ]}
      />
      <CtaBand title="Tell us about your trip." />
    </main>
  );
}
