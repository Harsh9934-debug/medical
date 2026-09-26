import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingAssistant from "@/components/FloatingAssistant";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-jakarta",
});

const serif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-serif-display",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://incrediblemedicare.com"),
  title: "Incredible Medicare | Leading Pharmaceutical Company & PCD Franchise",
  description:
    "Incredible Medicare is an ISO 9001:2015 & WHO-GMP certified pharmaceutical company based at Unicity Business Park, Zirakpur, Punjab. Offering 650+ formulations, PCD Pharma franchise, and third-party contract manufacturing across India.",
  keywords: [
    "Incredible Medicare",
    "PCD Pharma Franchise",
    "Third Party Manufacturing",
    "Pharma Company in Chandigarh Zirakpur",
    "WHO GMP Certified Pharma",
    "Pharmaceutical Formulations India",
    "Pharma Contract Manufacturing"
  ],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Incredible Medicare | Pharmaceutical Excellence & PCD Franchise",
    description:
      "Partner with Incredible Medicare for lucrative PCD Pharma Franchise and reliable third-party contract manufacturing across India.",
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
      <body className="min-h-screen bg-white text-slate-900 flex flex-col antialiased selection:bg-sky-100 selection:text-sky-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingAssistant />
      </body>
    </html>
  );
}
