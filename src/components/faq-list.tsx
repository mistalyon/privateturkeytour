import type { FaqItem } from "@/content/types";

export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-black/15 border-y border-black/15">
      {items.map((item) => (
        <details key={item.question} className="group py-6">
          <summary className="cursor-pointer list-none font-heading text-2xl tracking-[-0.02em] marker:content-none">
            <span className="flex items-start justify-between gap-6">
              {item.question}
              <span className="mt-1 text-black/40 transition group-open:rotate-45">
                +
              </span>
            </span>
          </summary>
          <p className="mt-4 max-w-3xl text-base leading-8 text-black/60">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
