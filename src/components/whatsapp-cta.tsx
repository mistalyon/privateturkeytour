import Link from "next/link";

import { whatsappEnquireUrl } from "@/lib/site";

const whatsappUrl = whatsappEnquireUrl();

export function WhatsAppCta() {
  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.02] hover:bg-[#20c85b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#25D366]"
      aria-label="Message us on WhatsApp"
    >
      <svg
        aria-hidden
        viewBox="0 0 32 32"
        className="h-4 w-4 fill-current"
      >
        <path d="M16.01 3.2c-7.07 0-12.8 5.73-12.8 12.8 0 2.25.59 4.45 1.7 6.37L3.2 28.8l6.58-1.67a12.75 12.75 0 0 0 6.23 1.62h.01c7.07 0 12.8-5.73 12.8-12.8S23.09 3.2 16.01 3.2Zm0 23.44h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-3.9.99 1.03-3.8-.25-.4a10.61 10.61 0 1 1 8.92 4.92Zm5.81-7.91c-.32-.16-1.91-.95-2.2-1.06-.29-.1-.5-.16-.7.16-.2.32-.8 1.06-.98 1.27-.18.21-.36.24-.68.08-.32-.16-1.35-.49-2.57-1.57-.95-.85-1.59-1.9-1.78-2.22-.18-.32-.02-.5.14-.66.15-.15.32-.39.47-.58.16-.19.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.7-1.69-.96-2.31-.25-.6-.5-.52-.7-.53h-.6c-.21 0-.56.08-.86.4-.29.32-1.12 1.1-1.12 2.68s1.15 3.11 1.31 3.32c.16.21 2.27 3.47 5.49 4.87.77.33 1.37.53 1.84.67.77.24 1.47.21 2.02.13.62-.09 1.91-.78 2.18-1.54.27-.75.27-1.4.19-1.54-.08-.13-.29-.21-.61-.37Z" />
      </svg>
      <span aria-hidden>WhatsApp</span>
    </Link>
  );
}
