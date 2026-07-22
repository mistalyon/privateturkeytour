import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { ContentLink } from "@/content/types";

export function RelatedLinks({
  title = "Continue exploring",
  items,
}: {
  title?: string;
  items: ContentLink[];
}) {
  return (
    <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-[1100px]">
        <p className="eyebrow">{title}</p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group border border-black/10 bg-[#efe9df] p-6 transition hover:border-black/30"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-heading text-2xl leading-tight tracking-[-0.02em]">
                  {item.title}
                </h3>
                <ArrowUpRight
                  className="size-5 shrink-0 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-black/60">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
