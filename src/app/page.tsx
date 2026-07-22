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

import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { buttonVariants } from "@/components/ui/button";
import { destinations } from "@/content/destinations";
import { guides } from "@/content/guides";
import { itineraries } from "@/content/itineraries";
import { keywordList, pageKeywords } from "@/content/keywords";
import { faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Private Turkey Tours | Custom Itineraries Across Türkiye",
  description:
    "Private Turkey tours with licensed local guides, boutique stays, and custom itineraries across Istanbul, Cappadocia, Ephesus, Pamukkale, and the Turquoise Coast. Plan your tailor-made journey.",
  path: "/",
  keywords: keywordList({
    ...pageKeywords.home,
    secondary: [
      ...pageKeywords.home.secondary,
      "turkey itinerary",
      "private istanbul tour",
      "private cappadocia tour",
      "best time to visit turkey",
    ],
  }),
});

const inclusions = [
  "Dedicated local travel designer",
  "Licensed expert private guides",
  "Handpicked boutique stays",
  "Private, door-to-door transport",
  "Flexible daily pacing—not coach schedules",
  "In-country support from arrival to departure",
];

const homeFaqs = [
  {
    question: "What is a private Turkey tour?",
    answer:
      "A private Turkey tour is a tailor-made journey with licensed local guides, handpicked stays, and logistics designed around your dates and pace—not a fixed group departure or shared coach circuit.",
  },
  {
    question: "How long should a private Turkey tour be?",
    answer:
      "Most first-timers choose a 7 day Turkey itinerary (Istanbul + Cappadocia), a 10 day Turkey itinerary adding Ephesus, or a 14 day route that continues to the Turquoise Coast.",
  },
  {
    question: "When is the best time for a private Turkey tour?",
    answer:
      "April–June and September–October are strongest overall. May and October often balance weather, Cappadocia balloon odds, and softer crowds.",
  },
  {
    question: "Who are private Turkey tours best for?",
    answer:
      "Couples, honeymoon travelers, families, and cultural travelers who want privacy, flexible timing, and specialist guiding rather than a packaged group schedule.",
  },
];

const featuredGuides = [
  "best-time-to-visit-turkey",
  "things-to-do-in-istanbul",
  "things-to-do-in-cappadocia",
  "private-turkey-tour-cost",
  "turkey-in-may",
  "how-to-plan-a-private-turkey-trip",
]
  .map((slug) => guides.find((guide) => guide.slug === slug))
  .filter(Boolean);

export default function Home() {
  return (
    <main>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Private Turkey Tours | Custom Itineraries Across Türkiye",
            description:
              "Private Turkey tours with licensed local guides, boutique stays, and custom itineraries across Türkiye.",
            url: "https://privateturkeytour.com",
            about: "Private Turkey tours",
          },
          faqSchema(homeFaqs),
        ]}
      />

      <section className="relative overflow-hidden border-b border-black/10">
        <div className="mx-auto grid min-h-[700px] max-w-[1440px] lg:min-h-[calc(100vh-80px)] lg:grid-cols-[1.06fr_0.94fr]">
          <div className="flex flex-col justify-between px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
            <div className="max-w-3xl">
              <p className="eyebrow">Private Turkey Tour</p>
              <h1 className="mt-8 max-w-[900px] font-heading text-[clamp(3.4rem,7.5vw,7.2rem)] leading-[0.84] tracking-[-0.06em]">
                Private Turkey Tours
                <span className="mt-2 block italic text-[0.82em] tracking-[-0.04em]">
                  made yours.
                </span>
              </h1>
              <p className="mt-10 max-w-xl text-base leading-7 text-black/65 sm:text-lg sm:leading-8">
                Custom private Turkey tours with licensed local guides,
                boutique stays, and seamless in-country care—from Istanbul and
                Cappadocia to Ephesus and the Turquoise Coast.
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
                  href="/private-turkey-tours"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "lg" }),
                    "h-12 rounded-full px-6 hover:bg-black/5",
                  )}
                >
                  How private tours work
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
              alt="Private Turkey tour moment at the Blue Mosque in Istanbul"
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
                <Link
                  href="/destinations/istanbul"
                  className="mt-1 block font-heading text-3xl underline-offset-4 hover:underline"
                >
                  Private Istanbul tour
                </Link>
              </div>
              <div className="flex size-12 items-center justify-center rounded-full border border-white/40 backdrop-blur-sm">
                <Compass className="size-5" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1100px]">
          <p className="eyebrow">Quick answer</p>
          <h2 className="mt-5 max-w-4xl font-heading text-[clamp(2.6rem,5vw,4.4rem)] leading-[0.95] tracking-[-0.045em]">
            What is a private Turkey tour?
          </h2>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-black/65">
            A private Turkey tour replaces fixed group departures with a custom
            itinerary, licensed private guides, and door-to-door care. You
            choose the regions—typically Istanbul, Cappadocia, Ephesus,
            Pamukkale, or the Turquoise Coast—and we shape pacing, stays, and
            experiences around your dates, not a coach schedule.
          </p>
          <div className="mt-10 grid gap-6 border-t border-black/10 pt-10 sm:grid-cols-3">
            <p className="text-sm leading-7 text-black/60">
              Start with our{" "}
              <Link
                className="underline underline-offset-4 hover:text-black"
                href="/private-turkey-tours"
              >
                private Turkey tours
              </Link>{" "}
              hub to see who these journeys are designed for.
            </p>
            <p className="text-sm leading-7 text-black/60">
              Compare styles in{" "}
              <Link
                className="underline underline-offset-4 hover:text-black"
                href="/guides/private-vs-group-turkey-tours"
              >
                private vs group Turkey tours
              </Link>
              , then review{" "}
              <Link
                className="underline underline-offset-4 hover:text-black"
                href="/guides/private-turkey-tour-cost"
              >
                private Turkey tour cost
              </Link>{" "}
              drivers.
            </p>
            <p className="text-sm leading-7 text-black/60">
              Prefer a clear process first? Read{" "}
              <Link
                className="underline underline-offset-4 hover:text-black"
                href="/how-it-works"
              >
                how private Turkey tours work
              </Link>{" "}
              or{" "}
              <Link
                className="underline underline-offset-4 hover:text-black"
                href="/plan-your-trip"
              >
                plan your trip
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#e9e3d8] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1344px]">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">Destinations</p>
              <h2 className="mt-5 font-heading text-[clamp(2.8rem,5.5vw,5rem)] leading-none tracking-[-0.045em]">
                Best places to visit in Turkey—privately.
              </h2>
            </div>
            <p className="max-w-sm leading-7 text-black/60">
              Explore every chapter in our{" "}
              <Link className="underline underline-offset-4" href="/destinations">
                Turkey destinations
              </Link>{" "}
              hub, then open the private destination that fits your trip first.
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
                  alt={`Private ${destination.name} tour in Türkiye`}
                  fill
                  sizes="(max-width: 768px) 100vw, 66vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.03] group-hover:opacity-85"
                />
                <div className="image-shade absolute inset-0" />
                <div className="absolute inset-x-6 bottom-6 flex items-end justify-between text-white sm:inset-x-8 sm:bottom-8">
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-white/70">
                      {destination.focusKeyword}
                    </p>
                    <h3 className="mt-2 font-heading text-3xl sm:text-4xl">
                      {destination.name}
                    </h3>
                  </div>
                  <ArrowUpRight
                    className="size-6 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
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
              <p className="eyebrow">Turkey itinerary ideas</p>
              <h2 className="mt-5 font-heading text-[clamp(2.8rem,5vw,4.8rem)] leading-none tracking-[-0.045em]">
                Private Turkey itineraries for 7, 10 &amp; 14 days.
              </h2>
            </div>
            <Link
              href="/itineraries"
              className="text-sm underline underline-offset-4 hover:text-black/70"
            >
              Browse all Turkey itinerary ideas
            </Link>
          </div>
          <p className="mt-8 max-w-3xl text-base leading-8 text-black/60">
            These sample private Turkey itineraries show how a tailor-made route
            can unfold. Every journey is reshaped around your dates, hotel
            style, and whether you want a compact Istanbul–Cappadocia loop or a
            fuller arc to Ephesus and the coast.
          </p>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {itineraries.map((itinerary) => (
              <Link
                key={itinerary.slug}
                href={`/itineraries/${itinerary.slug}`}
                className="border border-black/10 bg-[#efe9df] p-7 transition hover:border-black/30"
              >
                <p className="text-xs uppercase tracking-[0.16em] text-black/45">
                  {itinerary.focusKeyword}
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

      <section className="border-y border-black/10 bg-[#e9e3d8] px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1344px]">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Signature experiences</p>
              <h2 className="mt-5 font-heading text-[clamp(2.8rem,5vw,4.5rem)] leading-none tracking-[-0.045em]">
                Cappadocia balloons, Istanbul food tours &amp; private gulets.
              </h2>
            </div>
            <Link
              href="/experiences"
              className="text-sm underline underline-offset-4 hover:text-black/70"
            >
              Explore Turkey experiences
            </Link>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              {
                href: "/experiences/cappadocia-hot-air-balloon",
                title: "Cappadocia hot air balloon",
                body: "Sunrise flights with weather-smart backups on a private Cappadocia tour.",
              },
              {
                href: "/experiences/istanbul-food-tour",
                title: "Istanbul food tour",
                body: "Private culinary walks across Europe and Asia—markets, bites, and local tables.",
              },
              {
                href: "/experiences/gulet-cruise",
                title: "Private gulet cruise Turkey",
                body: "Turquoise Coast coves and swimming days without shared cabin mates.",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border border-black/10 bg-[#f4f0e8] p-7 transition hover:border-black/30"
              >
                <h3 className="font-heading text-2xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-black/60">
                  {item.body}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-[1344px] gap-16 lg:grid-cols-2 lg:items-center lg:gap-24">
          <div className="relative min-h-[560px] overflow-hidden sm:min-h-[680px]">
            <Image
              src="/cappadocia.jpg"
              alt="Cappadocia hot air balloon experience on a private Turkey tour"
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
            <p className="eyebrow">Why travel privately</p>
            <h2 className="mt-6 font-heading text-[clamp(2.8rem,5vw,4.8rem)] leading-[0.94] tracking-[-0.05em]">
              What is included in a private Turkey tour?
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-8 text-black/60">
              Your travel designer handles the complex parts quietly—routes,
              guides, stays, and timing—so you can be present. Private means
              tailored, whether you want a{" "}
              <Link
                className="underline underline-offset-4 hover:text-black"
                href="/private-turkey-tours/honeymoon"
              >
                Turkey honeymoon
              </Link>{" "}
              or a{" "}
              <Link
                className="underline underline-offset-4 hover:text-black"
                href="/private-turkey-tours/family"
              >
                family Turkey tour
              </Link>
              .
            </p>
            <ul className="mt-10 border-t border-black/15">
              {inclusions.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-4 border-b border-black/15 py-5"
                >
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-black text-[#f4f0e8]">
                    <Check className="size-3.5" aria-hidden="true" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1344px]">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Turkey travel guides</p>
              <h2 className="mt-5 font-heading text-[clamp(2.6rem,5vw,4.2rem)] leading-none tracking-[-0.045em]">
                Plan with clarity before you enquire.
              </h2>
            </div>
            <Link
              href="/guides"
              className="text-sm underline underline-offset-4 hover:text-black/70"
            >
              Open the Turkey travel guide hub
            </Link>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredGuides.map((guide) =>
              guide ? (
                <Link
                  key={guide.slug}
                  href={`/guides/${guide.slug}`}
                  className="border border-black/10 bg-[#efe9df] p-6 transition hover:border-black/25"
                >
                  <p className="text-xs uppercase tracking-[0.14em] text-black/45">
                    {guide.focusKeyword}
                  </p>
                  <h3 className="mt-3 font-heading text-2xl leading-tight">
                    {guide.name}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-black/60">
                    {guide.description}
                  </p>
                </Link>
              ) : null,
            )}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1344px]">
          <p className="eyebrow">From idea to arrival</p>
          <h2 className="mt-5 font-heading text-[clamp(2.6rem,5vw,4.2rem)] leading-none tracking-[-0.045em]">
            How private Turkey tours work
          </h2>
          <div className="mt-12 grid border-t border-black/15 md:grid-cols-3">
            {[
              {
                number: "01",
                icon: HeartHandshake,
                title: "Share your brief",
                text: "Dates, trip length, must-sees, pace, and stay style—so we can design a private Turkey tour around you.",
                href: "/plan-your-trip",
              },
              {
                number: "02",
                icon: Compass,
                title: "We shape the itinerary",
                text: "Your local designer drafts a thoughtful route and refines hotels, guides, and experiences with you.",
                href: "/how-it-works",
              },
              {
                number: "03",
                icon: MapPin,
                title: "Travel with in-country care",
                text: "Arrive to everything arranged, with private guiding and support throughout Türkiye.",
                href: "/contact",
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
                <Link
                  href={step.href}
                  className="mt-6 inline-block text-sm underline underline-offset-4 hover:text-black/70"
                >
                  Continue
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-black/10 bg-[#efe9df] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1100px]">
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-4 font-heading text-4xl tracking-[-0.03em] sm:text-5xl">
            Private Turkey tour questions, answered
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-black/60">
            More detail lives in our{" "}
            <Link className="underline underline-offset-4" href="/faq">
              private Turkey tour FAQ
            </Link>{" "}
            and planning guides.
          </p>
          <div className="mt-10">
            <FaqList items={homeFaqs} />
          </div>
        </div>
      </section>

      <section className="bg-black px-5 py-24 text-[#f4f0e8] sm:px-8 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1344px] text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-white/55">
            Start your private Turkey tour
          </p>
          <h2 className="mx-auto mt-8 max-w-5xl font-heading text-[clamp(3.4rem,8vw,7.5rem)] leading-[0.84] tracking-[-0.055em]">
            Design a custom Turkey itinerary
            <span className="block italic">with us.</span>
          </h2>
          <p className="mx-auto mt-10 max-w-xl text-lg leading-8 text-white/55">
            Share your dates and interests. We&apos;ll return with first ideas
            for a private journey across Türkiye—entirely yours.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/plan-your-trip"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-12 rounded-full border-white bg-white px-7 text-black hover:bg-transparent hover:text-white",
              )}
            >
              Plan your private Turkey trip
              <ArrowUpRight aria-hidden="true" />
            </Link>
            <Link
              href="/contact"
              className="text-sm text-white/70 underline underline-offset-4 hover:text-white"
            >
              Or contact us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
