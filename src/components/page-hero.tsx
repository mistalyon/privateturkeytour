import { Breadcrumbs } from "@/components/breadcrumbs";
import type { BreadcrumbItem } from "@/lib/site";

export function PageHero({
  eyebrow,
  title,
  description,
  answer,
  breadcrumbs,
}: {
  eyebrow: string;
  title: string;
  description: string;
  answer?: string;
  breadcrumbs: BreadcrumbItem[];
}) {
  return (
    <section className="border-b border-black/10 px-5 pb-14 pt-10 sm:px-8 lg:px-12 lg:pb-20 lg:pt-14">
      <div className="mx-auto max-w-[1100px]">
        <Breadcrumbs items={breadcrumbs} />
        <p className="eyebrow mt-8">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl font-heading text-[clamp(3rem,7vw,5.8rem)] leading-[0.92] tracking-[-0.05em]">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-black/65">
          {description}
        </p>
        {answer ? (
          <div className="mt-10 max-w-3xl border-l-2 border-black/20 pl-5">
            <p className="text-xs uppercase tracking-[0.16em] text-black/45">
              Quick answer
            </p>
            <p className="mt-3 text-base leading-8 text-black/75">{answer}</p>
          </div>
        ) : null}
      </div>
    </section>
  );
}
