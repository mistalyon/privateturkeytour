import Link from "next/link";

import { siteConfig } from "@/lib/site";

const columns = [
  {
    title: "Explore",
    links: [
      { href: "/private-turkey-tours", label: "Private Turkey Tours" },
      { href: "/private-turkey-tours/honeymoon", label: "Turkey Honeymoon" },
      { href: "/private-turkey-tours/family", label: "Family Turkey Tour" },
      { href: "/itineraries", label: "Turkey Itineraries" },
      { href: "/experiences", label: "Turkey Experiences" },
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
        href: "/guides/things-to-do-in-istanbul",
        label: "Things to Do in Istanbul",
      },
      {
        href: "/guides/things-to-do-in-cappadocia",
        label: "Things to Do in Cappadocia",
      },
      {
        href: "/guides/private-turkey-tour-cost",
        label: "Private Turkey Tour Cost",
      },
      {
        href: "/guides/how-to-plan-a-private-turkey-trip",
        label: "How to Plan a Trip to Turkey",
      },
    ],
  },
  {
    title: "Plan",
    links: [
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
          <p className="font-heading text-3xl tracking-[-0.03em]">
            Private Turkey Tour
          </p>
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
        <p>Based in Türkiye · Private guided journeys worldwide</p>
      </div>
    </footer>
  );
}
