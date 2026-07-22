import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { experiences } from "@/content/experiences";
import { keywordList, pageKeywords } from "@/content/keywords";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Turkey Experiences: Balloon, Food Tours & Gulet Cruises",
  description:
    "Private Turkey experiences worth planning carefully—Cappadocia hot air balloon, Istanbul food tour, and private gulet cruise days on the Turquoise Coast.",
  path: "/experiences",
  keywords: keywordList(pageKeywords.experiences),
});

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Experiences", href: "/experiences" },
];

export default function ExperiencesPage() {
  return (
    <main>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <PageHero
        eyebrow="Experience hub"
        title="Turkey experiences that change the trip."
        description="These signature Turkey experiences sit inside private journeys—not as bolted-on extras. Start with the one you care about most, then we weave it into your itinerary."
        answer="The most requested private Turkey experiences are a Cappadocia hot air balloon sunrise, a private Istanbul food tour, and a private gulet cruise along the Turquoise Coast—each timed around weather, appetite, and the rest of your route."
        breadcrumbs={breadcrumbs}
      />

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-[1100px] gap-6 md:grid-cols-3">
          {experiences.map((experience) => (
            <Link
              key={experience.slug}
              href={`/experiences/${experience.slug}`}
              className="group border border-black/10 bg-[#efe9df] transition hover:border-black/25"
            >
              <div className="relative min-h-[220px] overflow-hidden">
                <Image
                  src={experience.image}
                  alt={experience.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.14em] text-black/45">
                  {experience.duration}
                </p>
                <h2 className="mt-3 font-heading text-2xl tracking-[-0.03em]">
                  {experience.name}
                </h2>
                <p className="mt-3 text-sm leading-7 text-black/65">
                  {experience.description}
                </p>
                <p className="mt-5 inline-flex items-center gap-1 text-sm underline underline-offset-4">
                  Explore
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CtaBand
        title="Tell us which experience matters most."
        body="Balloon, food, gulet—or all three. We design the private route around the moments you care about."
      />
    </main>
  );
}
