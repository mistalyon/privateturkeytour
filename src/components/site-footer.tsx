import Link from "next/link";

import { BrandMark } from "@/components/brand-mark";
import { siteConfig } from "@/lib/site";

const columns = [
  {
    title: "Explore",
    links: [
      { href: "/private-turkey-tours", label: "Private Turkey Tours" },
      { href: "/private-turkey-tours/honeymoon", label: "Turkey Honeymoon" },
      { href: "/private-turkey-tours/family", label: "Family Turkey Tour" },
      { href: "/private-turkey-tours/luxury", label: "Luxury Turkey Tour" },
      {
        href: "/private-turkey-tours/christmas-new-year",
        label: "Christmas & New Year",
      },
      {
        href: "/private-turkey-tours/christian-pilgrimage",
        label: "Christian Turkey Tour",
      },
      { href: "/itineraries", label: "Turkey Itineraries" },
      { href: "/experiences", label: "Turkey Experiences" },
      { href: "/services", label: "Private Services" },
    ],
  },
  {
    title: "Destinations",
    links: [
      { href: "/destinations", label: "All Destinations" },
      { href: "/destinations/istanbul", label: "Private Istanbul Tour" },
      { href: "/destinations/cappadocia", label: "Private Cappadocia Tour" },
      { href: "/destinations/ephesus", label: "Private Ephesus Tour" },
      { href: "/destinations/pamukkale", label: "Pamukkale Turkey" },
      {
        href: "/destinations/turquoise-coast",
        label: "Turquoise Coast Turkey",
      },
      { href: "/destinations/antalya", label: "Private Antalya Tour" },
      { href: "/destinations/bodrum", label: "Private Bodrum Tour" },
      { href: "/destinations/gobekli-tepe", label: "Göbeklitepe Tour" },
      { href: "/destinations/arslantepe", label: "Arslantepe Mound" },
      { href: "/destinations/catalhoyuk", label: "Çatalhöyük" },
      {
        href: "/destinations/gallipoli-troy",
        label: "Gallipoli & Troy Tour",
      },
    ],
  },
  {
    title: "Guides",
    links: [
      { href: "/guides", label: "Turkey Travel Guides" },
      {
        href: "/guides/best-time-to-visit-turkey",
        label: "Best Time to Visit Turkey",
      },
      {
        href: "/guides/how-to-plan-a-private-turkey-trip",
        label: "How to Plan a Trip to Turkey",
      },
      {
        href: "/guides/private-vs-group-turkey-tours",
        label: "Private vs Group Turkey Tours",
      },
      {
        href: "/guides/private-turkey-tour-cost",
        label: "Private Turkey Tour Cost",
      },
      {
        href: "/guides/turkey-archaeological-sites",
        label: "Archaeological Sites in Turkey",
      },
      {
        href: "/guides/things-to-do-in-istanbul",
        label: "Things to Do in Istanbul",
      },
      {
        href: "/guides/things-to-do-in-cappadocia",
        label: "Things to Do in Cappadocia",
      },
      {
        href: "/guides/things-to-do-in-ephesus",
        label: "Things to Do in Ephesus",
      },
      {
        href: "/guides/pamukkale-day-trip",
        label: "Pamukkale Day Trip",
      },
      { href: "/guides/turkey-in-may", label: "Turkey in May" },
      {
        href: "/guides/turkey-in-september",
        label: "Turkey in September",
      },
      { href: "/guides/turkey-in-october", label: "Turkey in October" },
      { href: "/guides/turkey-in-winter", label: "Turkey in Winter" },
    ],
  },
  {
    title: "Plan",
    links: [
      { href: "/services/istanbul-airport-transfer", label: "Airport Transfer" },
      { href: "/services/private-yacht-turkey", label: "Private Yacht" },
      { href: "/services/turkey-golf", label: "Turkey Golf" },
      { href: "/how-it-works", label: "How It Works" },
      { href: "/plan-your-trip", label: "Plan Your Trip" },
      { href: "/faq", label: "FAQ" },
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
      { href: `mailto:${siteConfig.email}`, label: "Email Us" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-black px-5 pb-8 pt-16 text-[#f4f0e8] sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1344px] gap-12 border-b border-white/15 pb-12 lg:grid-cols-[1.15fr_1fr_1fr_1fr_1fr]">
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-3 text-[#f4f0e8]"
            aria-label="Private Turkey Tour home"
          >
            <BrandMark className="size-9 text-[#f4f0e8]" />
            <span className="font-heading text-3xl tracking-[-0.03em]">
              Private Turkey Tour
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-7 text-white/55">
            Private Turkey tours and custom itineraries across Türkiye—licensed
            local guides, boutique stays, and seamless in-country care from
            Istanbul to Cappadocia, Ephesus, Pamukkale, and the Turquoise Coast.
          </p>
          <p className="mt-6 text-sm text-white/45">
            <Link
              className="underline underline-offset-4 hover:text-white"
              href="/plan-your-trip"
            >
              Plan your private Turkey trip
            </Link>
          </p>
        </div>
        {columns.map((column) => (
          <div key={column.title}>
            <p className="text-xs uppercase tracking-[0.18em] text-white/45">
              {column.title}
            </p>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link className="hover:text-white" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto flex max-w-[1344px] flex-col gap-4 pt-8 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}
        </p>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <Link className="hover:text-white" href="/privacy">
            Privacy
          </Link>
          <Link className="hover:text-white" href="/terms">
            Terms
          </Link>
          <span>Based in Türkiye · Private guided journeys</span>
        </div>
      </div>
    </footer>
  );
}
