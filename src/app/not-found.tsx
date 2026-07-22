import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <main className="px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-[900px] text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-6 font-heading text-[clamp(3rem,8vw,6rem)] leading-[0.9] tracking-[-0.05em]">
          This page has wandered off the map.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-black/60">
          Try one of the hubs below, or start planning and we will help you find
          the right route.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link
            href="/destinations"
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-12 rounded-full bg-black px-6 text-[#f4f0e8]",
            )}
          >
            Destinations
          </Link>
          <Link
            href="/plan-your-trip"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "h-12 rounded-full border-black px-6",
            )}
          >
            Plan your trip
          </Link>
        </div>
      </div>
    </main>
  );
}
