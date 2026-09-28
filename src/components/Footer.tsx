import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  Award,
  CheckCircle2,
  Truck,
  ArrowRight,
  Factory,
  FileText,
  Handshake,
  type LucideIcon,
} from "lucide-react";
import { COMPANY_INFO, DIVISIONS } from "@/data/company";

const COMPANY_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Product Portfolio", href: "/products" },
  { name: "Our Services", href: "/our-services" },
  { name: "Infrastructure", href: "/infrastructure" },
  { name: "Divisions", href: "/divisions" },
  { name: "Global Exports", href: "/exports" },
  { name: "Pharma Insights", href: "/blogs" },
  { name: "Contact Us", href: "/contact" },
];

const ASSURANCES: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: ShieldCheck, title: "WHO-GMP & ISO Certified", desc: "Quality assured production lines" },
  { icon: Award, title: "650+ Formulations", desc: "DCGI approved portfolio" },
  { icon: CheckCircle2, title: "Monopoly PCD Rights", desc: "District-wise exclusivity" },
  { icon: Truck, title: "Pan-India Logistics", desc: "Dispatch within 24–48h" },
];

const CTA_ACTIONS: {
  icon: LucideIcon;
  title: string;
  desc: string;
  href: string;
}[] = [
  {
    icon: FileText,
    title: "Request Quotation",
    desc: "Get pricing, product list & terms",
    href: "/contact",
  },
  {
    icon: Phone,
    title: "Talk to Our Team",
    desc: COMPANY_INFO.phone,
    href: `tel:+${COMPANY_INFO.whatsapp}`,
  },
  {
    icon: Mail,
    title: "Email Us",
    desc: COMPANY_INFO.email,
    href: `mailto:${COMPANY_INFO.email}`,
  },
];

// Add the real profile URLs here; "#" keeps the icon in place until then.
const SOCIALS = [
  {
    name: "Facebook",
    href: "#",
    path: "M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z",
  },
  {
    name: "LinkedIn",
    href: "#",
    path: "M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z",
  },
  {
    name: "Instagram",
    href: "#",
    path: "M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85C2.38 3.92 3.9 2.38 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.69.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.2-4.35-2.62-6.78-6.98-6.98C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z",
  },
  {
    name: "YouTube",
    href: "#",
    path: "M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z",
  },
];

const container = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";

function ColumnHeading({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h4 className="text-xs font-bold uppercase tracking-[0.14em] text-white">
        {children}
      </h4>
      <div className="mt-2 h-[3px] w-8 rounded-full bg-teal-400" />
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="text-sm text-slate-400">
      {/* CTA band */}
      <div className="relative overflow-hidden bg-gradient-to-b from-[#0b192c] to-black py-6">
        <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-teal-500/10 blur-2xl" />
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-amber-400/10 blur-2xl" />
        <div className={`${container} relative`}>
          <div className="grid grid-cols-1 items-center gap-5 rounded-[4px] border border-white/10 bg-white/5 p-5 shadow-[0_10px_40px_rgba(0,0,0,0.25)] backdrop-blur sm:p-6 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-amber-400">
                Partner for a Healthier Tomorrow
              </span>
              <h3 className="mt-2 text-2xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-3xl">
                Let&rsquo;s Build a Stronger{" "}
                <span className="block text-teal-400">
                  Healthcare Future Together
                </span>
              </h3>
              <p className="mt-2 max-w-lg text-sm leading-relaxed text-slate-400">
                Explore PCD franchise opportunities or third-party manufacturing
                with Incredible Medicare. Get complete support, transparent
                terms, and reliable supply.
              </p>
            </div>

            <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-3 lg:col-span-6">
              {CTA_ACTIONS.map(({ icon: Icon, title, desc, href }, i) => (
                <Link
                  key={title}
                  href={href}
                  className={`group flex h-full flex-col items-start gap-1.5 ${i > 0 ? "sm:border-l sm:border-white/10 sm:pl-4" : "lg:border-l lg:border-white/10 lg:pl-4"}`}
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-[4px] bg-white/10 text-teal-400">
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <span className="flex items-center gap-2 text-sm font-bold text-white">
                    {title}
                    <ArrowRight className="h-4 w-4 text-teal-400 transition group-hover:translate-x-1" />
                  </span>
                  <span className="break-words text-xs leading-snug text-slate-400">
                    {desc}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main columns */}
      <div className="bg-black">
        <div className={`${container} py-8`}>
          <div className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-12">
            {/* Brand */}
            <div className="space-y-3 sm:col-span-2 lg:col-span-4">
              <Link href="/" className="inline-flex items-center gap-3">
                <Image
                  src="/logo.png"
                  alt="Incredible Medicare Logo"
                  width={44}
                  height={44}
                  className="object-contain"
                />
                <span className="flex flex-col leading-tight">
                  <span className="text-xl font-extrabold tracking-tight text-white">
                    Incredible <span className="text-teal-400">Medicare</span>
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                    Pharma Formulations &amp; Healthcare
                  </span>
                </span>
              </Link>

              <p className="max-w-md text-[13px] leading-relaxed text-slate-400">
                Accredited pharmaceutical manufacturer and PCD franchise company
                based in Zirakpur, Punjab. We formulate and distribute ethical
                medicines, antibiotics, analgesics, nutraceuticals and
                injectable therapies across India and export markets.
              </p>

              <div className="flex items-center gap-3">
                {SOCIALS.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    aria-label={s.name}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-teal-500 hover:text-white"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                      <path d={s.path} />
                    </svg>
                  </a>
                ))}
              </div>

              <ul className="space-y-2 border-t border-white/10 pt-3 text-[13px] text-slate-300">
                <li className="flex items-start gap-4">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-teal-400" strokeWidth={1.7} />
                  <span>{COMPANY_INFO.address}</span>
                </li>
                <li className="flex items-center gap-4">
                  <Mail className="h-5 w-5 shrink-0 text-teal-400" strokeWidth={1.7} />
                  <a href={`mailto:${COMPANY_INFO.email}`} className="transition-colors hover:text-teal-400">
                    {COMPANY_INFO.email}
                  </a>
                </li>
                <li className="flex items-center gap-4">
                  <Phone className="h-5 w-5 shrink-0 text-teal-400" strokeWidth={1.7} />
                  <a href={`tel:+${COMPANY_INFO.whatsapp}`} className="transition-colors hover:text-teal-400">
                    {COMPANY_INFO.phone}
                  </a>
                </li>
                <li className="flex items-center gap-4">
                  <Clock className="h-5 w-5 shrink-0 text-teal-400" strokeWidth={1.7} />
                  <span>{COMPANY_INFO.workingHours}</span>
                </li>
              </ul>
            </div>

            {/* Quick links */}
            <div className="lg:col-span-2 lg:border-l lg:border-white/10 lg:pl-8">
              <ColumnHeading>Quick Links</ColumnHeading>
              <ul className="mt-4 space-y-2">
                {COMPANY_LINKS.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-[13px] text-slate-400 transition-colors hover:text-teal-400"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Divisions */}
            <div className="lg:col-span-3 lg:border-l lg:border-white/10 lg:pl-8">
              <ColumnHeading>Specialized Divisions</ColumnHeading>
              <ul className="mt-4 space-y-2.5">
                {DIVISIONS.map((div) => (
                  <li key={div.id}>
                    <Link href="/divisions" className="group block">
                      <span className="block text-[13px] font-medium text-white transition-colors group-hover:text-teal-400">
                        {div.name}
                      </span>
                      <span className="text-xs text-slate-500">
                        {div.category}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Business opportunities */}
            <div className="lg:col-span-3">
              <div className="rounded-[4px] border border-white/10 bg-white/5 p-4">
                <ColumnHeading>Business Opportunities</ColumnHeading>
                <div className="mt-4 flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-teal-400">
                    <Handshake className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <div>
                    <div className="text-sm font-bold leading-snug text-white">
                      PCD Franchise Monopoly Available
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-slate-400">
                      Vacant territories open across all Indian states and Union
                      Territories, with promotional support kits.
                    </p>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="mt-3 flex w-full items-center justify-center gap-2 rounded-[4px] bg-[#0d9488] px-4 py-2 text-xs font-bold text-white transition hover:bg-[#0f766e]"
                >
                  Check Territory Availability
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>

                <div className="mt-3 flex items-start gap-3 border-t border-white/10 pt-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-teal-400">
                    <Factory className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <div>
                    <div className="text-sm font-bold text-white">
                      Manufacturing Unit
                    </div>
                    <div className="mt-1 text-xs leading-relaxed text-slate-400">
                      {COMPANY_INFO.manufacturingUnit}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Assurance ribbon */}
          <div className="mt-6 grid grid-cols-1 gap-3 rounded-[4px] border border-white/10 bg-white/5 px-5 py-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {ASSURANCES.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className={`flex items-center gap-4 lg:justify-center ${i > 0 ? "lg:border-l lg:border-white/10" : ""}`}
              >
                <Icon className="h-7 w-7 shrink-0 text-teal-400" strokeWidth={1.5} />
                <div>
                  <div className="text-[13px] font-bold text-white">{title}</div>
                  <div className="text-xs text-slate-400">{desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Legal row */}
          <div className="mt-5 flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-4 text-xs text-slate-500 sm:flex-row lg:pr-48">
            <p>
              &copy; {new Date().getFullYear()}{" "}
              <strong className="text-white">Incredible Medicare</strong>.
              All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy-policy" className="transition-colors hover:text-teal-400">
                Privacy Policy
              </Link>
              <Link href="/terms-conditions" className="transition-colors hover:text-teal-400">
                Terms &amp; Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}
