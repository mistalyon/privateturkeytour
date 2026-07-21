import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://privateturkeytour.com"),
  title: "Private Turkey Tour | Bespoke Journeys Across Türkiye",
  description:
    "Private, tailor-made journeys across Türkiye with expert local guides, handpicked stays, and seamless in-country care.",
  openGraph: {
    title: "Private Turkey Tour",
    description:
      "Bespoke private journeys built around your pace, curiosity, and style.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
