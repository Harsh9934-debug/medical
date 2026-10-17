import type { Metadata } from "next";
import { Manrope, Public_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingAssistant from "@/components/FloatingAssistant";
import AutoReveal from "@/components/motion/AutoReveal";

const jakarta = Public_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-jakarta",
});

const serif = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-serif-display",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://incrediblemedicare.com"),
  title: "Incredible Medicare | Leading Pharmaceutical Company & Contract Manufacturing",
  description:
    "Incredible Medicare is an ISO 9001:2015 & WHO-GMP certified pharmaceutical company based at Sidcul IIE Pantnagar, Rudrapur, Uttarakhand. Offering 1000+ formulations and third-party contract manufacturing across India.",
  keywords: [
    "Incredible Medicare",
    "Third Party Manufacturing",
    "Contract Manufacturing Pharma",
    "Pharma Company in Rudrapur Uttarakhand",
    "WHO GMP Certified Pharma",
    "Pharmaceutical Formulations India",
    "Pharma Contract Manufacturing"
  ],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Incredible Medicare | Pharmaceutical Excellence & Contract Manufacturing",
    description:
      "Partner with Incredible Medicare for reliable third-party contract manufacturing across India.",
    url: "https://incrediblemedicare.com",
    siteName: "Incredible Medicare",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 800,
        alt: "Incredible Medicare Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.className} ${serif.variable}`} data-theme="light">
      <body className="min-h-screen bg-white text-slate-900 flex flex-col antialiased selection:bg-teal-100 selection:text-teal-900">
        <AutoReveal />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingAssistant />
      </body>
    </html>
  );
}
