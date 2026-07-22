import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CtaBand({
  eyebrow = "Ready when you are",
  title = "Tell us what you imagine.",
  body = "Share your dates, pace, and must-sees. We will return with first ideas for a private journey across Türkiye.",
  href = "/plan-your-trip",
  label = "Plan your trip",
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
  href?: string;
  label?: string;
}) {
  return (
    <section className="bg-black px-5 py-20 text-[#f4f0e8] sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1100px] text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-white/55">
          {eyebrow}
        </p>
        <h2 className="mt-6 font-heading text-[clamp(2.8rem,7vw,5.5rem)] leading-[0.9] tracking-[-0.045em]">
          {title}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/55 sm:text-lg">
          {body}
        </p>
        <Link
          href={href}
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "mt-10 h-12 rounded-full border-white bg-white px-7 text-black hover:bg-transparent hover:text-white",
          )}
        >
          {label}
          <ArrowRight aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
