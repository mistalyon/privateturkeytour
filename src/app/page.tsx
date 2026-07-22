import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Compass,
  HeartHandshake,
  MapPin,
  Star,
} from "lucide-react";

import { JsonLd } from "@/components/json-ld";
import { buttonVariants } from "@/components/ui/button";
import { destinations } from "@/content/destinations";
import { itineraries } from "@/content/itineraries";
import { buildMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Private Turkey Tour | Bespoke Journeys Across Türkiye",
  description:
    "Private, tailor-made journeys across Türkiye with expert local guides, handpicked stays, and seamless in-country care.",
  path: "/",
  keywords: [
    "private turkey tour",
    "private tours turkey",
    "bespoke turkey travel",
    "custom turkey itinerary",
  ],
});

const inclusions = [
  "Dedicated local travel designer",
  "Licensed expert private guides",
  "Handpicked boutique stays",
  "Private, door-to-door transport",
];

export default function Home() {
  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Private Turkey Tour",
          description:
            "Private, tailor-made journeys across Türkiye with expert local guides.",
          url: "https://privateturkeytour.com",
        }}
      />

      <section className="relative overflow-hidden border-b border-black/10">
        <div className="mx-auto grid min-h-[700px] max-w-[1440px] lg:min-h-[calc(100vh-80px)] lg:grid-cols-[1.06fr_0.94fr]">
          <div className="flex flex-col justify-between px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
            <div className="max-w-3xl">
              <p className="eyebrow">Bespoke travel across Türkiye</p>
              <h1 className="mt-8 max-w-[850px] font-heading text-[clamp(4rem,9vw,8.8rem)] leading-[0.78] tracking-[-0.065em]">
                Turkey,
                <span className="block italic">made yours.</span>
              </h1>
              <p className="mt-10 max-w-xl text-base leading-7 text-black/65 sm:text-lg sm:leading-8">
                Private journeys built around your pace, your curiosity, and the
                places you have always wanted to see.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="/plan-your-trip"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "h-12 rounded-full bg-black px-6 text-[#f4f0e8] hover:bg-black/80",
                  )}
                >
                  Design my journey
                  <ArrowRight aria-hidden="true" />
                </Link>
                <Link
                  href="/destinations"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "lg" }),
                    "h-12 rounded-full px-6 hover:bg-black/5",
                  )}
                >
                  Explore Turkey
                </Link>
              </div>
            </div>

            <div className="mt-16 grid max-w-xl grid-cols-3 border-t border-black/15 pt-6">
              <div>
                <p className="font-heading text-3xl">100%</p>
                <p className="mt-1 text-xs uppercase tracking-[0.15em] text-black/50">
                  Private
                </p>
              </div>
              <div className="border-l border-black/15 pl-5">
                <p className="font-heading text-3xl">24/7</p>
                <p className="mt-1 text-xs uppercase tracking-[0.15em] text-black/50">
                  In-country care
                </p>
              </div>
              <div className="border-l border-black/15 pl-5">
                <p className="font-heading text-3xl">12+</p>
                <p className="mt-1 text-xs uppercase tracking-[0.15em] text-black/50">
                  Years local
                </p>
              </div>
            </div>
          </div>

          <div className="relative min-h-[560px] overflow-hidden lg:min-h-full">
            <Image
              src="/detail.jpg"
              alt="The Blue Mosque in Istanbul at golden hour"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 47vw"
              className="object-cover"
            />
            <div className="absolute inset-x-5 bottom-5 flex items-end justify-between text-white sm:inset-x-8 sm:bottom-8">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-white/70">
                  Featured destination
                </p>
                <p className="mt-1 font-heading text-3xl">Istanbul</p>
              </div>
              <div className="flex size-12 items-center justify-center rounded-full border border-white/40 backdrop-blur-sm">
                <Compass className="size-5" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <div className="mx-auto grid max-w-[1344px] gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <p className="eyebrow">The private way</p>
          <div>
            <h2 className="max-w-4xl font-heading text-[clamp(2.8rem,6vw,5.7rem)] leading-[0.95] tracking-[-0.045em]">
              No fixed departures. No crowded coaches. Just a journey that feels
              entirely your own.
            </h2>
            <div className="mt-12 grid gap-8 border-t border-black/15 pt-8 sm:grid-cols-2">
              <p className="max-w-md leading-7 text-black/60">
                We are a Turkey-based team of designers, hosts, and guides.
                Every itinerary begins with a conversation and is built from the
                ground up.
              </p>
              <p className="max-w-md leading-7 text-black/60">
                From a quiet table overlooking the Bosphorus to an archaeologist
                opening up Ephesus, we connect you with the real texture of this
                country. Explore our{" "}
                <Link
                  className="underline underline-offset-4 hover:text-black"
                  href="/private-turkey-tours"
                >
                  private Turkey tours
                </Link>{" "}
                or see{" "}
                <Link
                  className="underline underline-offset-4 hover:text-black"
                  href="/how-it-works"
                >
                  how it works
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#e9e3d8] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1344px]">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">Places worth lingering</p>
              <h2 className="mt-5 font-heading text-[clamp(3rem,6vw,5.5rem)] leading-none tracking-[-0.045em]">
                Your Turkey,
                <br />
                <span className="italic">unfolding.</span>
              </h2>
            </div>
            <p className="max-w-sm leading-7 text-black/60">
              Combine celebrated icons with the small, unscripted moments that
              make a journey memorable. Browse all{" "}
              <Link className="underline underline-offset-4" href="/destinations">
                destinations
              </Link>
              .
            </p>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-3">
            {destinations.map((destination) => (
              <Link
                key={destination.slug}
                href={`/destinations/${destination.slug}`}
                className={cn(
                  "group relative min-h-[440px] overflow-hidden bg-black",
                  destination.wide && "md:col-span-2",
                )}
              >
                <Image
                  src={destination.image}
                  alt={`${destination.name}, Türkiye`}
                  fill
                  sizes="(max-width: 768px) 100vw, 66vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.03] group-hover:opacity-85"
                />
                <div className="image-shade absolute inset-0" />
                <div className="absolute inset-x-6 bottom-6 flex items-end justify-between text-white sm:inset-x-8 sm:bottom-8">
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-white/70">
                      {destination.note}
                    </p>
                    <h3 className="mt-2 font-heading text-4xl">
                      {destination.name}
                    </h3>
                  </div>
                  <ArrowUpRight
                    className="size-6 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1344px]">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Sample private itineraries</p>
              <h2 className="mt-5 font-heading text-[clamp(2.8rem,5vw,4.8rem)] leading-none tracking-[-0.045em]">
                Routes with room to breathe.
              </h2>
            </div>
            <Link
              href="/itineraries"
              className="text-sm underline underline-offset-4 hover:text-black/70"
            >
              View all itineraries
            </Link>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {itineraries.map((itinerary) => (
              <Link
                key={itinerary.slug}
                href={`/itineraries/${itinerary.slug}`}
                className="border border-black/10 bg-[#efe9df] p-7 transition hover:border-black/30"
              >
                <p className="text-xs uppercase tracking-[0.16em] text-black/45">
                  {itinerary.days} days
                </p>
                <h3 className="mt-4 font-heading text-3xl leading-tight">
                  {itinerary.name}
                </h3>
                <p className="mt-4 text-sm leading-7 text-black/60">
                  {itinerary.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <div className="mx-auto grid max-w-[1344px] gap-16 lg:grid-cols-2 lg:items-center lg:gap-24">
          <div className="relative min-h-[600px] overflow-hidden sm:min-h-[720px]">
            <Image
              src="/cappadocia.jpg"
              alt="A hot air balloon over Cappadocia"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute bottom-5 left-5 max-w-xs bg-[#f4f0e8] p-6 sm:bottom-8 sm:left-8">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className="size-4 fill-black"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="mt-4 font-heading text-2xl leading-tight">
                “Every day felt effortless, but never ordinary.”
              </p>
              <p className="mt-4 text-xs uppercase tracking-[0.14em] text-black/50">
                Sarah &amp; James · London
              </p>
            </div>
          </div>

          <div>
            <p className="eyebrow">Designed around you</p>
            <h2 className="mt-6 font-heading text-[clamp(3.2rem,6vw,5.7rem)] leading-[0.92] tracking-[-0.05em]">
              Considered in every detail.
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-8 text-black/60">
              Your travel designer handles the complex parts quietly, leaving
              you free to be present. Every route, hotel, guide, and table is
              selected for you—not for a brochure.
            </p>
            <ul className="mt-10 border-t border-black/15">
              {inclusions.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-4 border-b border-black/15 py-5"
                >
                  <span className="flex size-7 items-center justify-center rounded-full bg-black text-[#f4f0e8]">
                    <Check className="size-3.5" aria-hidden="true" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1344px]">
          <p className="eyebrow">From idea to arrival</p>
          <div className="mt-12 grid border-t border-black/15 md:grid-cols-3">
            {[
              {
                number: "01",
                icon: HeartHandshake,
                title: "Tell us what moves you",
                text: "Share your dates, interests, pace, and the kind of moments you want to remember.",
              },
              {
                number: "02",
                icon: Compass,
                title: "We shape your journey",
                text: "Your local designer creates a thoughtful itinerary and refines it with you.",
              },
              {
                number: "03",
                icon: MapPin,
                title: "Travel with ease",
                text: "Arrive to everything arranged, with our team beside you throughout Turkey.",
              },
            ].map((step) => (
              <article
                key={step.number}
                className="border-b border-black/15 py-8 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs tracking-[0.16em] text-black/45">
                    {step.number}
                  </span>
                  <step.icon
                    className="size-5"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mt-16 font-heading text-3xl">{step.title}</h3>
                <p className="mt-4 max-w-sm leading-7 text-black/55">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/guides"
              className="text-sm underline underline-offset-4 hover:text-black/70"
            >
              Read planning guides
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-black px-5 py-24 text-[#f4f0e8] sm:px-8 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1344px] text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-white/55">
            Your private Turkey begins here
          </p>
          <h2 className="mx-auto mt-8 max-w-5xl font-heading text-[clamp(4rem,10vw,9rem)] leading-[0.8] tracking-[-0.055em]">
            Let&apos;s make it
            <span className="block italic">unforgettable.</span>
          </h2>
          <p className="mx-auto mt-10 max-w-xl text-lg leading-8 text-white/55">
            Tell us what you imagine. We&apos;ll return with first ideas for a
            journey that is entirely yours.
          </p>
          <Link
            href="/plan-your-trip"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "mt-10 h-12 rounded-full border-white bg-white px-7 text-black hover:bg-transparent hover:text-white",
            )}
          >
            Start planning
            <ArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
