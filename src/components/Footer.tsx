import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  Award,
  CheckCircle2,
  ArrowRight,
  ExternalLink
} from "lucide-react";
import { COMPANY_INFO, DIVISIONS } from "@/data/company";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 text-sm border-t border-slate-800">
      {/* Top Value Assurance Ribbon */}
      <div className="border-b border-slate-800/80 bg-slate-950/60 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-sky-900/40 text-sky-400 flex items-center justify-center shrink-0 border border-sky-800/40">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-white text-sm">WHO-GMP &amp; ISO</div>
              <div className="text-xs text-slate-400">Certified Production Lines</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-sky-900/40 text-sky-400 flex items-center justify-center shrink-0 border border-sky-800/40">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-white text-sm">650+ Formulations</div>
              <div className="text-xs text-slate-400">DCGI Approved Portfolio</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-sky-900/40 text-sky-400 flex items-center justify-center shrink-0 border border-sky-800/40">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-white text-sm">Monopoly PCD Rights</div>
              <div className="text-xs text-slate-400">District-wise Exclusivity</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-sky-900/40 text-sky-400 flex items-center justify-center shrink-0 border border-sky-800/40">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-white text-sm">Pan-India Logistics</div>
              <div className="text-xs text-slate-400">Dispatch Within 24-48h</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: Corporate Profile */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-white p-1 ring-1 ring-slate-700 shadow-sm flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Incredible Medicare Logo"
                  width={46}
                  height={46}
                  className="object-contain"
                />
              </div>
              <div>
                <span className="text-xl font-bold text-white tracking-tight">
                  Incredible Medicare
                </span>
                <p className="text-xs text-slate-400 font-medium">
                  Pharmaceuticals &amp; Healthcare Solutions
                </p>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-md">
              Incredible Medicare is an accredited pharmaceutical manufacturer and PCD franchise powerhouse based in Zirakpur, Punjab. We manufacture, formulate, and distribute top-tier ethical medicines, antibiotics, analgesics, gastroprokinetics, nutraceuticals, and injectable therapies.
            </p>

            <div className="pt-2 border-t border-slate-800/80 space-y-2 text-xs">
              <div className="flex items-start gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Headquarters:</strong> {COMPANY_INFO.address}
                </span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-white transition"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.whatsapp}`}
                  className="hover:text-white transition"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {[
                { name: "Home", href: "/" },
                { name: "About Incredible Medicare", href: "/about" },
                { name: "Product Portfolio", href: "/products" },
                { name: "Our Services", href: "/our-services" },
                { name: "Infrastructure & Plant", href: "/infrastructure" },
                { name: "Specialized Divisions", href: "/divisions" },
                { name: "Global Exports", href: "/exports" },
                { name: "Pharma Insights / Blog", href: "/blogs" },
                { name: "Contact & Head Office", href: "/contact" }
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <ArrowRight className="w-3 h-3 text-sky-400" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Core Divisions */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Specialized Divisions
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {DIVISIONS.map((div) => (
                <li key={div.id}>
                  <Link
                    href="/divisions"
                    className="text-slate-400 hover:text-white transition-colors block"
                  >
                    <div className="font-medium text-slate-200">{div.name}</div>
                    <div className="text-[11px] text-slate-500">{div.category}</div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Key Formulations & PCD */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Business Opportunities
            </h4>
            <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/60 space-y-3">
              <div className="text-xs font-semibold text-sky-300">
                PCD Franchise Monopoly Available
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Vacant territories open across all Indian states and Union Territories with promotional support kits.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1 text-xs font-bold text-white bg-sky-700 hover:bg-sky-600 px-3 py-1.5 rounded-lg transition"
              >
                <span>Check Territory Availability</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="pt-2 text-xs space-y-1 text-slate-400">
              <div><strong>Manufacturing Unit:</strong></div>
              <div>{COMPANY_INFO.manufacturingUnit}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sub-footer */}
      <div className="border-t border-slate-800 bg-slate-950 py-5 px-4 sm:px-6 lg:px-8 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            &copy; {new Date().getFullYear()} <strong>Incredible Medicare</strong>. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="hover:text-white transition">
              Terms &amp; Conditions
            </Link>
            <Link href="/contact" className="hover:text-white transition">
              Site Map
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
