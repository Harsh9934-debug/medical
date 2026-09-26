"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Award,
  Pill,
  TrendingUp,
  FileCheck,
  CheckCircle2,
  ArrowRight,
  Package,
  Layers,
  Sparkles,
  Building2,
  PhoneCall,
  Clock,
  Compass,
  FileText,
  Search,
  Check,
  ChevronRight,
  Globe2,
  FlaskConical,
  Tablets,
  Pill as PillIcon,
  PillBottle,
  Pipette,
  Wheat,
  Settings,
  Factory,
} from "lucide-react";
import {
  COMPANY_INFO,
  ANNUAL_CAPACITIES,
  DIVISIONS,
  TESTIMONIALS,
  BLOG_POSTS,
} from "@/data/company";
import { PRODUCTS, Product } from "@/data/products";
import EnquiryModal from "@/components/EnquiryModal";

const ACCREDITATION_ICONS: (React.ComponentType<{ className?: string; strokeWidth?: number }> | "iso")[] = [
  Globe2,
  "iso",
  FlaskConical,
  FileCheck,
  ShieldCheck,
];

const CAPACITY_ICONS = [Tablets, PillIcon, PillBottle, Pipette, Wheat];

export default function HomePage() {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Antibiotics & Antimicrobials",
    "Pain Management & Orthopaedics",
    "Gastroenterology & Antacids",
    "Nutraceuticals & Haematinic",
    "Dermatology & Skin Care",
  ];

  const filteredProducts =
    activeCategory === "All"
      ? PRODUCTS.filter((p) => p.featured).slice(0, 6)
      : PRODUCTS.filter((p) => p.category === activeCategory).slice(0, 6);

  const openQuoteForProduct = (prodName: string) => {
    setSelectedProduct(prodName);
    setEnquiryModalOpen(true);
  };

  return (
    <div className="w-full bg-white text-slate-900">
      {/* 1. HERO SECTION */}
      <section className="relative isolate overflow-hidden border-b border-slate-200 bg-[#f4f8fd]">
        {/* Background image, fading into the copy on the left */}
        <div className="absolute inset-y-0 right-0 -z-10 w-full lg:w-[64%]">
          <Image
            src="/herobg.png"
            alt="Cleanroom vial filling line at Incredible Medicare"
            fill
            priority
            sizes="(min-width: 1024px) 64vw, 100vw"
            className="object-cover object-[65%_center] opacity-25 lg:opacity-100 lg:[mask-image:linear-gradient(to_right,transparent_0%,black_38%)]"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-linear-to-r from-[#f4f8fd] via-[#f4f8fd]/80 to-transparent lg:from-[#f4f8fd] lg:via-[#f4f8fd]/55 lg:to-transparent lg:w-[55%]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid min-h-0 grid-cols-1 lg:min-h-[740px] lg:grid-cols-12">
            {/* Left Content */}
            <div className="flex flex-col justify-center py-14 sm:py-20 lg:col-span-7 lg:py-16 lg:pr-10">
              <div className="flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500 sm:text-xs">
                <span>WHO-GMP &amp; ISO 9001:2015 Certified</span>
                <span className="hidden h-px w-24 bg-slate-300 sm:block" />
              </div>

              <h1 className="mt-6 font-serif text-4xl font-medium leading-[1.08] tracking-tight text-[#0b1b3b] sm:text-5xl lg:text-[54px] xl:text-[60px]">
                Delivering Excellence in{" "}
                <span className="text-[#1a5fb4]">Pharmaceutical</span>{" "}
                Manufacturing &amp; PCD Franchise.
              </h1>

              <p className="mt-7 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                <strong className="font-semibold text-slate-700">
                  Incredible Medicare
                </strong>{" "}
                delivers high-standard, bioequivalent medicines across India.
                Backed by state-of-the-art cleanrooms, 650+ approved DCGI
                formulations, and nationwide franchise monopoly rights.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-3 rounded-lg bg-[#0b4a99] px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#093d80] hover:shadow-lg"
                >
                  <Package className="h-4 w-4" />
                  <span>Browse 650+ Products</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <button
                  type="button"
                  onClick={() => {
                    setSelectedProduct("");
                    setEnquiryModalOpen(true);
                  }}
                  className="inline-flex cursor-pointer items-center gap-3 rounded-lg border border-slate-300 bg-white/70 px-6 py-3.5 text-sm font-semibold text-slate-800 backdrop-blur-sm transition-all hover:border-[#0b4a99] hover:bg-white hover:text-[#0b4a99]"
                >
                  <FileText className="h-4 w-4 text-[#0b4a99]" />
                  <span>Request Franchise Terms</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="mt-12 flex flex-wrap items-center gap-y-5 sm:flex-nowrap">
                {[
                  { icon: ShieldCheck, title: "WHO-GMP", sub: "Certified" },
                  { icon: Award, title: "ISO 9001:2015", sub: "Certified" },
                  { icon: Pill, title: "650+", sub: "Approved Products" },
                ].map(({ icon: Icon, title, sub }, i) => (
                  <div
                    key={title}
                    className={`flex items-center gap-3 pr-5 sm:pr-6 xl:pr-8 ${
                      i > 0
                        ? "sm:border-l sm:border-slate-300/80 sm:pl-5 xl:pl-8"
                        : ""
                    }`}
                  >
                    <Icon
                      className="h-9 w-9 shrink-0 text-[#0b4a99]"
                      strokeWidth={1.4}
                    />
                    <div>
                      <div className="text-base font-bold leading-tight text-[#0b1b3b]">
                        {title}
                      </div>
                      <div className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500">
                        {sub}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Floating glass cards (desktop) */}
        <div className="pointer-events-none absolute inset-0 hidden lg:block">
          {/* Tagline */}
          <div className="absolute right-[4%] top-14 hidden text-[11px] font-medium uppercase leading-relaxed tracking-[0.3em] text-white [text-shadow:0_1px_6px_rgba(11,27,59,0.6)] xl:block">
            <div>Better</div>
            <div>Medicines</div>
            <div>Bigger</div>
            <div>Possibilities</div>
            <div className="mt-3 h-0.5 w-10 bg-white" />
          </div>

          {/* 650+ card */}
          <div className="pointer-events-auto absolute left-[54%] top-[26%] w-[300px] rounded-xl border border-white/70 bg-white/70 p-6 shadow-xl backdrop-blur-md">
            <div className="flex items-center gap-4">
              <Pill
                className="h-12 w-12 shrink-0 text-[#0b4a99]"
                strokeWidth={1.3}
              />
              <div>
                <div className="font-serif text-5xl font-medium leading-none text-[#0b1b3b]">
                  650+
                </div>
                <div className="mt-1.5 text-sm font-medium text-[#0b1b3b]">
                  Approved Products
                </div>
              </div>
            </div>
            <div className="my-4 h-px w-8 bg-slate-300" />
            <ul className="space-y-2.5 text-sm text-slate-700">
              {[
                "Wide Therapeutic Range",
                "DCGI Approved Formulations",
                "Consistent Quality Standards",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#0b4a99]" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 2. ACCREDITATIONS & QUALITY STANDARDS BANNER */}
      <section className="relative overflow-hidden bg-[#f4f8fd] py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <Image
          src="/bg2.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center pointer-events-none select-none"
        />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <div className="flex items-center justify-center gap-4">
              <span className="hidden sm:block h-px w-16 bg-gradient-to-r from-transparent to-[#0b4a99]/50" />
              <span className="text-[#0b5bd3] text-[11px] sm:text-xs font-bold tracking-[0.22em] uppercase">
                Regulatory Standards &amp; Certifications
              </span>
              <span className="hidden sm:block h-px w-16 bg-gradient-to-l from-transparent to-[#0b4a99]/50" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0a1f44] mt-4 leading-[1.15]">
              Engineered Under Stringent{" "}
              <span className="block">Regulatory Benchmarks</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-5 max-w-2xl mx-auto leading-relaxed">
              Our manufacturing processes and quality systems comply with global
              regulatory standards, ensuring safe, effective and reliable
              medicines for a healthier world.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5 lg:mt-24">
            {COMPANY_INFO.accreditations.map((item, i) => {
              const Icon = ACCREDITATION_ICONS[i] ?? Award;
              return (
                <div
                  key={item.title}
                  className="group bg-white/60 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-white/80 shadow-[0_8px_30px_rgba(30,80,160,0.08)] text-center hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(30,80,160,0.16)] transition-all last:col-span-2 md:last:col-span-1"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 text-[#0b5bd3] flex items-center justify-center mx-auto mb-4">
                    {Icon === "iso" ? (
                      <span className="text-sm font-black tracking-tight">ISO</span>
                    ) : (
                      <Icon className="w-7 h-7 sm:w-8 sm:h-8" strokeWidth={1.6} />
                    )}
                  </div>
                  <div className="font-bold text-[#0a1f44] text-base">{item.title}</div>
                  <div className="h-[3px] w-9 rounded-full bg-gradient-to-r from-[#0b4a99] to-[#3b8ff0] mx-auto my-3" />
                  <div className="text-[13px] text-slate-600 leading-snug">
                    {item.desc}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. ABOUT INCREDIBLE MEDICARE SNAPSHOT */}
      <section className="relative overflow-hidden py-16 lg:py-20 bg-gradient-to-br from-white via-[#f6f9fe] to-[#eaf1fb] border-b border-slate-200">
        <div className="pointer-events-none absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-[#dbe8fb]/50 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 left-1/3 h-[420px] w-[420px] rounded-full bg-[#dbe8fb]/40 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Box */}
            <div className="lg:col-span-6 relative space-y-4 lg:space-y-0 lg:h-[640px]">
              {/* Photo 1 */}
              <div className="relative h-56 sm:h-72 lg:absolute lg:left-0 lg:top-0 lg:h-[58%] lg:w-[74%] overflow-hidden rounded-3xl lg:rounded-tl-none lg:rounded-br-none lg:rounded-tr-[3rem] lg:rounded-bl-[3rem] shadow-[0_10px_40px_rgba(30,80,160,0.15)]">
                <Image
                  src="/herobg.png"
                  alt="Pharmaceutical cleanroom technician"
                  fill
                  sizes="(min-width:1024px) 40vw, 100vw"
                  className="object-cover scale-125 origin-[45%_35%]"
                  style={{ objectPosition: "45% 35%" }}
                />
              </div>

              {/* Cards */}
              <div className="lg:absolute lg:right-0 lg:top-[19%] lg:w-[70%] lg:z-10 space-y-3">
                {[
                  {
                    tag: "HQ",
                    tagClass: "bg-[#0b4a99]",
                    title: "Corporate Headquarters",
                    addr: "Unicity Business Park, Dhakoli, Zirakpur, Punjab 160104",
                    body: "Strategically located in the Chandigarh Tricity industrial corridor, our corporate headquarters coordinates pan-India distribution, partner logistics, regulatory documentation, and strategic expansions.",
                    href: "/contact",
                  },
                  {
                    tag: "PLAN",
                    tagClass: "bg-[#0a1f44]",
                    title: "Manufacturing Unit",
                    addr: "SIDCO Industrial Complex, Ghatti, Kathua, J&K 184143",
                    body: "Operates under WHO-GMP compliance, equipped with high-speed automated blister packing, liquid bottle lines, Class 10,000 cleanrooms, and dedicated QA/QC analytical suites.",
                    href: "/infrastructure",
                  },
                ].map((c) => (
                  <div
                    key={c.title}
                    className="bg-white/95 backdrop-blur rounded-2xl border border-white p-5 shadow-[0_10px_40px_rgba(30,80,160,0.14)]"
                  >
                    <div className="flex items-center gap-3 pb-3 border-b border-slate-200/80">
                      <div className={`w-11 h-11 shrink-0 rounded-xl ${c.tagClass} text-white flex items-center justify-center font-bold text-xs`}>
                        {c.tag}
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-bold text-[#0a1f44] text-base">{c.title}</h3>
                        <p className="text-xs text-slate-500">{c.addr}</p>
                      </div>
                    </div>
                    <div className="flex items-end gap-3 pt-3">
                      <p className="text-[13px] text-slate-600 leading-relaxed">{c.body}</p>
                      <Link
                        href={c.href}
                        aria-label={c.title}
                        className="shrink-0 w-9 h-9 rounded-full bg-[#e6effc] text-[#0b4a99] border border-[#cfe0f7] flex items-center justify-center hover:bg-[#0b4a99] hover:text-white transition"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {/* Photo 2 */}
              <div className="relative h-56 sm:h-72 lg:absolute lg:left-[3%] lg:bottom-0 lg:h-[36%] lg:w-[80%] overflow-hidden rounded-3xl shadow-[0_10px_40px_rgba(30,80,160,0.15)]">
                <Image
                  src="/herobg.png"
                  alt="Vial filling line"
                  fill
                  sizes="(min-width:1024px) 40vw, 100vw"
                  className="object-cover"
                  style={{ objectPosition: "85% 90%" }}
                />
                <div className="absolute left-4 bottom-4 flex items-center gap-3 rounded-2xl bg-white/85 backdrop-blur px-4 py-2.5 shadow-lg">
                  <div className="w-9 h-9 rounded-xl bg-[#e6effc] text-[#0b4a99] flex items-center justify-center">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-medium text-[#0a1f44] leading-tight">
                    State-of-the-Art
                    <br />
                    Manufacturing Facility
                  </span>
                </div>
              </div>
            </div>

            {/* Content Box */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-4">
                <span className="inline-block rounded-lg border border-[#cfe0f7] bg-white/70 px-4 py-1.5 text-[#0b4a99] text-xs font-bold uppercase tracking-wider">
                  About Incredible Medicare
                </span>
                <h2 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold text-[#0a1f44] tracking-tight leading-[1.1]">
                  From Punjab to Nationwide Markets — Expanding with{" "}
                  <span className="text-[#0b5bd3]">Clinical Integrity.</span>
                </h2>
                <div className="accent-bar"></div>
              </div>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  <strong className="text-[#0a1f44]">Incredible Medicare</strong> is a distinguished Indian
                  pharmaceutical enterprise specializing in the development,
                  manufacture, and distribution of high-grade ethical
                  formulations across multiple therapeutic segments.
                </p>
                <p>
                  Built on a foundation of precision, regulatory compliance, and
                  uncompromising quality benchmarks, we serve hospitals,
                  clinics, medical institutions, and retail chemists through our
                  dedicated network of PCD franchise associates and wholesale
                  partners.
                </p>
                <p>
                  Our extensive portfolio covers tablets, capsules, sterile
                  injectables, oral syrups, topical ointments, and advanced
                  nutraceuticals formulated to satisfy current DCGI guidelines
                  and international pharmacopeial standards.
                </p>
              </div>

              {/* Core Feature Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5 pt-2">
                {[
                  "100% WHO-GMP & ISO 9001:2015 Compliance",
                  "Monopoly-Backed PCD Pharma Franchise Rights",
                  "Over 650+ DCGI Approved Formulations",
                  "Complete Promotional Support & Visual Aids",
                  "Turnkey Third-Party Contract Manufacturing",
                  "Prompt Dispatch & Real-Time Consignment Tracking",
                ].map((feat) => (
                  <div
                    key={feat}
                    className="flex items-center gap-2.5 text-[13px] font-medium text-[#0a1f44]"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#0b5bd3] shrink-0" strokeWidth={1.8} />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#0b4a99] hover:bg-[#093d80] text-white text-sm font-semibold rounded-xl shadow-[0_8px_24px_rgba(11,74,153,0.3)] transition"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/80 hover:bg-white text-[#0a1f44] text-sm font-semibold rounded-xl border border-[#cfe0f7] transition"
                >
                  <span>Contact Headquarters</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ANNUAL MANUFACTURING CAPACITY */}
      <section className="relative overflow-hidden py-16 lg:py-20 bg-gradient-to-b from-white via-[#f5f9ff] to-[#edf3fc] border-b border-slate-200">
        <div className="pointer-events-none absolute -top-40 -right-40 h-[460px] w-[460px] rounded-full bg-[#dbe8fb]/60 blur-3xl" />
        <div className="pointer-events-none absolute top-40 -left-40 h-[380px] w-[380px] rounded-full bg-[#cfe0f7]/50 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-1/3 h-[300px] w-[600px] rounded-full bg-[#dbe8fb]/40 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-14">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-[#e3ecfa] bg-white px-5 py-2 text-[#0b5bd3] text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] shadow-[0_4px_16px_rgba(30,80,160,0.10)]">
              <Factory className="w-4 h-4" strokeWidth={2} />
              High-Volume Infrastructure
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a1f44] tracking-tight mt-5">
              Annual Manufacturing{" "}
              <span className="text-[#0b5bd3]">Capacity</span>
            </h2>
            <div className="accent-bar mx-auto mt-4"></div>
            <p className="text-sm sm:text-base text-slate-600 mt-5 leading-relaxed">
              Built for scale, consistency, and prompt batch delivery to support
              both domestic distribution and third-party corporate partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5">
            {ANNUAL_CAPACITIES.map((cap, i) => {
              const Icon = CAPACITY_ICONS[i] ?? Package;
              return (
                <div
                  key={cap.form}
                  className="bg-white/85 backdrop-blur rounded-2xl p-5 border border-white shadow-[0_10px_40px_rgba(30,80,160,0.10)] hover:-translate-y-1 hover:shadow-[0_14px_44px_rgba(30,80,160,0.18)] transition-all flex flex-col items-center text-center"
                >
                  <span className="inline-block whitespace-nowrap px-3 py-1 rounded-md text-[11px] font-semibold bg-[#eaf1fd] text-[#0b5bd3]">
                    {cap.badge}
                  </span>
                  <div className="w-[72px] h-[72px] rounded-full bg-[#e9f1fc] text-[#0b5bd3] flex items-center justify-center mt-4">
                    <Icon className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-bold text-[#0a1f44] text-base mt-4 min-h-[1.5rem] leading-snug">
                    {cap.form}
                  </h3>
                  <div className="text-3xl font-extrabold text-[#0b5bd3] mt-2 tracking-tight">
                    {cap.metric}
                  </div>
                  <p className="text-sm text-slate-500 mt-1">{cap.subtext}</p>
                  <div className="w-full mt-auto pt-5">
                    <div className="border-t border-slate-200/80 pt-4 flex items-center justify-center gap-3 text-xs text-slate-500 font-medium text-left">
                      <div className="w-9 h-9 shrink-0 rounded-full bg-[#e9f1fc] text-[#0b5bd3] flex items-center justify-center">
                        <Settings className="w-4 h-4" />
                      </div>
                      <span className="leading-tight">
                        Automated
                        <br />
                        High-Speed Lines
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. FEATURED PRODUCT SHOWCASE */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-sky-700 text-xs font-bold uppercase tracking-wider">
                Comprehensive Formulations
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
                Featured Pharmaceutical Products
              </h2>
              <div className="accent-bar mt-2"></div>
              <p className="text-sm text-slate-600 mt-2 max-w-xl">
                High-efficacy medicines produced in accordance with IP/BP/USP
                standards, offering dependable clinical relief and doctor trust.
              </p>
            </div>

            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-sky-700 hover:text-sky-900 transition"
            >
              <span>View All 650+ Formulations</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition cursor-pointer ${
                  activeCategory === cat
                    ? "bg-sky-700 text-white shadow-xs"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-bold text-sky-800 bg-sky-50 px-2.5 py-1 rounded-md border border-sky-100">
                      {product.form}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-500">
                      {product.packingType}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                    {product.name}
                  </h3>

                  <div className="text-xs font-medium text-slate-600 mt-1 line-clamp-2">
                    {product.genericName}
                  </div>

                  <p className="text-xs text-slate-500 mt-3 leading-relaxed line-clamp-3">
                    {product.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100 space-y-1 text-xs">
                    <div className="flex items-center justify-between text-slate-600">
                      <span className="text-slate-400">Packaging:</span>
                      <span className="font-semibold">{product.packaging}</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-600">
                      <span className="text-slate-400">Division:</span>
                      <span className="font-semibold text-slate-700 truncate max-w-[180px]">
                        {product.division}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-3 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => openQuoteForProduct(product.name)}
                    className="flex-1 py-2 bg-sky-700 hover:bg-sky-800 text-white text-xs font-semibold rounded-lg transition cursor-pointer"
                  >
                    Enquire Now
                  </button>
                  <Link
                    href={`/products`}
                    className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg transition"
                  >
                    Details
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm rounded-xl transition shadow-xs"
            >
              <span>Explore Entire Product Directory</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. BUSINESS SOLUTIONS: PCD FRANCHISE & THIRD PARTY */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-sky-700 text-xs font-bold uppercase tracking-wider">
              Strategic Partnerships
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Comprehensive Pharmaceutical Solutions
            </h2>
            <div className="accent-bar mx-auto"></div>
            <p className="text-sm sm:text-base text-slate-600">
              Whether you are an aspiring pharma entrepreneur looking for an
              exclusive PCD franchise or an established brand requiring reliable
              contract manufacturing, Incredible Medicare delivers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Box 1: PCD Pharma Franchise */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center font-bold">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  PCD Pharma Franchise Business
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Join our nationwide franchise network with genuine monopoly
                  rights, attractive net rates, high profit margins, and zero
                  internal competition in your designated territory.
                </p>
                <div className="space-y-2 pt-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>
                      Exclusive district-wise monopoly marketing agreements
                    </span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>
                      Free promotional inputs: Visual aids, LBLs, catch covers,
                      MR bags
                    </span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>
                      Fast pan-India dispatch with stock availability assurance
                    </span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>
                      Continuous new DCGI approved formulation launches
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedProduct("PCD Franchise Monopoly Application");
                    setEnquiryModalOpen(true);
                  }}
                  className="px-5 py-2.5 bg-sky-700 hover:bg-sky-800 text-white text-xs font-bold rounded-lg transition"
                >
                  Apply for Franchise
                </button>
                <Link
                  href="/our-services"
                  className="text-xs font-bold text-slate-700 hover:text-sky-700 flex items-center gap-1"
                >
                  <span>Learn terms</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Box 2: Third Party Manufacturing */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Third-Party Contract Manufacturing
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Leverage our WHO-GMP certified production units for turnkey
                  manufacturing of your private label medicines with strict
                  quality control and predictable timelines.
                </p>
                <div className="space-y-2 pt-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>
                      Cost-effective contract production without capex
                      investment
                    </span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>
                      Custom packaging: Alu-Alu, Blister, Amber Glass,
                      Lyophilized Vials
                    </span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>
                      Comprehensive regulatory documentation &amp; analytical
                      release
                    </span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>
                      Flexible batch sizes with guaranteed delivery schedules
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedProduct("Third Party Manufacturing Contract");
                    setEnquiryModalOpen(true);
                  }}
                  className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-lg transition"
                >
                  Request Manufacturing Quote
                </button>
                <Link
                  href="/infrastructure"
                  className="text-xs font-bold text-slate-700 hover:text-sky-700 flex items-center gap-1"
                >
                  <span>View plant specs</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SPECIALIZED DIVISIONS */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-sky-700 text-xs font-bold uppercase tracking-wider">
              Focused Market Verticals
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Specialized Business Divisions
            </h2>
            <div className="accent-bar mx-auto"></div>
            <p className="text-sm sm:text-base text-slate-600">
              Each division at Incredible Medicare operates with dedicated
              formulation expertise, tailored promotional inputs, and
              specialized clinical focus.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DIVISIONS.map((div) => (
              <div
                key={div.id}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-sky-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold text-sky-800 uppercase tracking-wider">
                      {div.category}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      {div.productCount}
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-1">
                    {div.name}
                  </h3>
                  <div className="text-xs font-semibold text-sky-700 mb-2">
                    {div.tagline}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {div.description}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-slate-200/80">
                    {div.highlights.map((h) => (
                      <div
                        key={h}
                        className="text-xs text-slate-700 flex items-center gap-1.5"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-sky-600"></div>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3">
                  <Link
                    href="/divisions"
                    className="w-full flex items-center justify-center gap-1.5 py-2 bg-white hover:bg-sky-50 text-sky-800 border border-slate-200 text-xs font-bold rounded-lg transition"
                  >
                    <span>Explore Division Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS & TRUST */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-sky-700 text-xs font-bold uppercase tracking-wider">
              Client Relationships
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Trusted by Doctors &amp; Distributors Nationwide
            </h2>
            <div className="accent-bar mx-auto"></div>
            <p className="text-sm sm:text-base text-slate-600">
              Delivering verifiable quality, ethical supply assurance, and
              long-term collaborative value across the healthcare ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-500 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <span key={i} className="text-lg">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                    &ldquo;{t.content}&rdquo;
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100">
                  <div className="font-bold text-slate-900 text-sm">
                    {t.name}
                  </div>
                  <div className="text-xs text-sky-700 font-medium">
                    {t.designation}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    {t.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. LATEST BLOG POSTS & PHARMA INSIGHTS */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-sky-700 text-xs font-bold uppercase tracking-wider">
                Industry Knowledge
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
                Latest Insights &amp; Market Updates
              </h2>
              <div className="accent-bar mt-2"></div>
            </div>

            <Link
              href="/blogs"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-sky-700 hover:text-sky-900 transition"
            >
              <span>View All Articles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post) => (
              <div
                key={post.slug}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] text-slate-500 mb-3">
                    <span className="font-semibold text-sky-700 bg-sky-50 px-2 py-0.5 rounded-md border border-sky-100">
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2 hover:text-sky-700 transition">
                    <Link href="/blogs">{post.title}</Link>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs">
                  <span className="text-slate-400">{post.date}</span>
                  <Link
                    href="/blogs"
                    className="font-bold text-sky-700 hover:text-sky-900 flex items-center gap-1"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CALL TO ACTION: READY TO PARTNER */}
      <section className="py-16 bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-sky-400 text-xs font-bold uppercase tracking-widest">
            Unleash Business Growth
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Ready to Partner With Incredible Medicare?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Contact our business development team today to inquire about
            available district monopoly rights for PCD franchise or discuss
            third-party contract manufacturing schedules.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              type="button"
              onClick={() => {
                setSelectedProduct("");
                setEnquiryModalOpen(true);
              }}
              className="px-8 py-3.5 bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm rounded-xl shadow-lg transition-all cursor-pointer"
            >
              Get Instant Price List &amp; Terms
            </button>
            <a
              href={`tel:${COMPANY_INFO.whatsapp}`}
              className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-sm rounded-xl border border-white/20 transition-all flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-sky-400" />
              <span>Call: {COMPANY_INFO.phone}</span>
            </a>
          </div>

          <div className="text-xs text-slate-400 pt-4">
            Official Email:{" "}
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="text-white underline hover:text-sky-300"
            >
              {COMPANY_INFO.email}
            </a>{" "}
            | Head Office: Unicity Business Park, Dhakoli, Zirakpur, Punjab
            160104
          </div>
        </div>
      </section>

      {/* Global Quote Modal */}
      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
        initialProduct={selectedProduct}
      />
    </div>
  );
}
