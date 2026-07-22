import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/destinations", label: "Destinations" },
  { href: "/itineraries", label: "Itineraries" },
  { href: "/experiences", label: "Experiences" },
  { href: "/guides", label: "Guides" },
  { href: "/how-it-works", label: "How it works" },
];

export function SiteHeader({
  variant = "default",
}: {
  variant?: "default" | "overlay";
}) {
  const overlay = variant === "overlay";

  return (
    <header
      className={cn(
        "z-20 border-b",
        overlay
          ? "absolute inset-x-0 top-0 border-black/10"
          : "sticky top-0 border-black/10 bg-[#f4f0e8]/95 backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="font-heading text-xl leading-none tracking-[-0.03em] sm:text-2xl"
          aria-label="Private Turkey Tour home"
        >
          Private Turkey Tour
        </Link>
        <nav
          className="hidden items-center gap-8 text-sm lg:flex"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <Link key={item.href} className="nav-link" href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/plan-your-trip"
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "h-10 rounded-full border-black bg-transparent px-5 hover:bg-black hover:text-[#f4f0e8]",
          )}
        >
          Plan your trip
          <ArrowUpRight aria-hidden="true" />
        </Link>
      </div>
    </header>
  );
}
