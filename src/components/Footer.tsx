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
  PhoneCall,
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
  { icon: ShieldCheck, title: "WHO-GMP & ISO", desc: "Certified production lines" },
  { icon: Award, title: "650+ Formulations", desc: "DCGI approved portfolio" },
  { icon: CheckCircle2, title: "Monopoly PCD Rights", desc: "District-wise exclusivity" },
  { icon: Truck, title: "Pan-India Logistics", desc: "Dispatch within 24-48h" },
];

const container = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-900 text-sm text-slate-300">
      {/* CTA Banner */}
      <div className="border-b border-slate-800/80">
        <div className={`${container} py-10`}>
          <div className="relative overflow-hidden rounded-2xl bg-linear-to-r from-sky-800 to-sky-600 px-6 py-8 sm:px-10">
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
            <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div className="max-w-xl">
                <h3 className="text-xl font-extrabold tracking-tight text-white sm:text-2xl">
                  Ready to grow with a WHO-GMP certified partner?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-sky-100">
                  PCD franchise territories and third-party manufacturing slots
                  are open across India. Get rates and terms within one working
                  day.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 whitespace-nowrap rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-sky-800 shadow-sm transition hover:bg-sky-50"
                >
                  Request Quotation
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={`tel:+${COMPANY_INFO.whatsapp}`}
                  className="inline-flex items-center gap-2 whitespace-nowrap rounded-lg border border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  <PhoneCall className="h-4 w-4" />
                  {COMPANY_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Columns */}
      <div className={`${container} py-14`}>
        <div className="grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="space-y-5 sm:col-span-2 lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Incredible Medicare Logo"
                  width={46}
                  height={46}
                  className="object-contain"
                />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-xl font-bold tracking-tight text-white">
                  Incredible <span className="text-sky-400">Medicare</span>
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">
                  Pharma Formulations &amp; Healthcare
                </span>
              </span>
            </Link>

            <p className="max-w-md text-sm leading-relaxed text-slate-400">
              Accredited pharmaceutical manufacturer and PCD franchise company
              based in Zirakpur, Punjab. We formulate and distribute ethical
              medicines, antibiotics, analgesics, nutraceuticals and injectable
              therapies across India and export markets.
            </p>

            <ul className="space-y-3 border-t border-slate-800 pt-5 text-[13px]">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
                <span>{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-sky-400" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="transition-colors hover:text-white"
                >
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-sky-400" />
                <a
                  href={`tel:+${COMPANY_INFO.whatsapp}`}
                  className="transition-colors hover:text-white"
                >
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 shrink-0 text-sky-400" />
                <span>{COMPANY_INFO.workingHours}</span>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Company
            </h4>
            <ul className="mt-5 space-y-2.5">
              {COMPANY_LINKS.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1.5 text-slate-400 transition-colors hover:text-white"
                  >
                    <ArrowRight className="-ml-4 h-3 w-3 text-sky-400 opacity-0 transition-all group-hover:ml-0 group-hover:opacity-100" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Divisions */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Specialized Divisions
            </h4>
            <ul className="mt-5 space-y-3.5">
              {DIVISIONS.map((div) => (
                <li key={div.id}>
                  <Link href="/divisions" className="group block">
                    <span className="block font-medium text-slate-200 transition-colors group-hover:text-sky-300">
                      {div.name}
                    </span>
                    <span className="text-[11px] text-slate-500">
                      {div.category}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Franchise + Plant */}
          <div className="space-y-4 lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Business Opportunities
            </h4>
            <div className="space-y-3 rounded-xl border border-slate-700/60 bg-slate-800/50 p-4">
              <div className="text-xs font-semibold text-sky-300">
                PCD Franchise Monopoly Available
              </div>
              <p className="text-xs leading-relaxed text-slate-300">
                Vacant territories open across all Indian states and Union
                Territories, with promotional support kits.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 rounded-lg bg-sky-700 px-3 py-1.5 text-xs font-bold text-white transition hover:bg-sky-600"
              >
                Check Territory Availability
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

            <div className="flex items-start gap-3 text-xs text-slate-400">
              <Factory className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
              <div>
                <div className="font-semibold text-slate-200">
                  Manufacturing Unit
                </div>
                <div className="mt-1 leading-relaxed">
                  {COMPANY_INFO.manufacturingUnit}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Assurance Ribbon */}
      <div className="border-t border-slate-800/80 bg-slate-950/50">
        <div
          className={`${container} grid grid-cols-1 gap-5 py-6 sm:grid-cols-2 lg:grid-cols-4`}
        >
          {ASSURANCES.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center text-sky-400">
                <Icon className="h-6 w-6" />
              </span>
              <div>
                <div className="text-sm font-bold text-white">{title}</div>
                <div className="text-xs text-slate-400">{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 bg-slate-950 text-xs text-slate-400">
        <div
          className={`${container} flex flex-col items-center justify-between gap-3 py-5 sm:flex-row lg:pr-48`}
        >
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <strong className="text-slate-300">Incredible Medicare</strong>. All
            rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-conditions"
              className="transition-colors hover:text-white"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
