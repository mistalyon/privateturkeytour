import Link from "next/link";

const whatsappNumber = "905446732202";
const whatsappMessage =
  "Merhaba, privateturkeytour.com sitesinden size ulaşıyorum.";
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

export function WhatsAppCta() {
  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.02] hover:bg-[#20c85b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#25D366]"
      aria-label="WhatsApp ile bize yazın"
    >
      <span aria-hidden>WhatsApp</span>
      <span className="h-1 w-1 rounded-full bg-white/80" />
      <span aria-hidden>Hemen Yaz</span>
    </Link>
  );
}
