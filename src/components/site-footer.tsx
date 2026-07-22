import Link from "next/link";

import { siteConfig } from "@/lib/site";

const columns = [
  {
    title: "Explore",
    links: [
      { href: "/private-turkey-tours", label: "Private Turkey Tours" },
      { href: "/destinations", label: "Destinations" },
      { href: "/itineraries", label: "Itineraries" },
      { href: "/guides", label: "Guides" },
    ],
  },
  {
    title: "Plan",
    links: [
      { href: "/how-it-works", label: "How it works" },
      { href: "/plan-your-trip", label: "Plan your trip" },
      { href: "/faq", label: "FAQ" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      {
        href: `mailto:${siteConfig.email}`,
        label: "Email",
      },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-black px-5 pb-8 pt-16 text-[#f4f0e8] sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1344px] gap-12 border-b border-white/15 pb-12 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div>
          <p className="font-heading text-3xl tracking-[-0.03em]">
            Private Turkey Tour
          </p>
          <p className="mt-4 max-w-sm text-sm leading-7 text-white/55">
            {siteConfig.tagline}. Designed in Türkiye with licensed local guides
            and seamless in-country care.
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
        <p>Based in Türkiye · Serving private travelers worldwide</p>
      </div>
    </footer>
  );
}
