import Link from "next/link";

import { BrandMark } from "@/components/brand-mark";
import { cn } from "@/lib/utils";

export function SiteLogo({
  className,
  markClassName,
  textClassName,
  href = "/",
}: {
  className?: string;
  markClassName?: string;
  textClassName?: string;
  href?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-2.5 text-inherit no-underline",
        className,
      )}
      aria-label="Private Turkey Tour home"
    >
      <BrandMark
        className={cn("size-8 sm:size-9", markClassName)}
        title="Private Turkey Tour"
      />
      <span
        className={cn(
          "font-heading text-xl leading-none tracking-[-0.03em] sm:text-2xl",
          textClassName,
        )}
      >
        Private Turkey Tour
      </span>
    </Link>
  );
}
