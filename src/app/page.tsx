"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { SectionBg } from "@/components/motion/SectionBg";
import { YouTubeCoverBackground } from "@/components/motion/YouTubeCoverBackground";
import { useRouter } from "next/navigation";
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
  Factory,
  Shield,
  Bone,
  Stethoscope,
  Leaf,
  Droplet,
  Box,
  Landmark,
  Users,
  Brain,
  HeartPulse,
  Droplets,
  Calendar,
  MapPin,
} from "lucide-react";
import {
  COMPANY_INFO,
} from "@/data/company";
import { PRODUCTS, Product } from "@/data/products";
import EnquiryModal from "@/components/EnquiryModal";
import { Stagger, StaggerItem, Reveal } from "@/components/motion/Reveal";
import { CountUp } from "@/components/motion/CountUp";
import { Parallax } from "@/components/motion/Parallax";
import { Ticker } from "@/components/motion/Ticker";
import { ProcessFlow } from "@/components/motion/ProcessFlow";

const CATEGORY_ICONS = [PillIcon, Shield, Bone, Stethoscope, Leaf, Droplet];

const CARD_TINTS = [
  "bg-teal-200/60",
  "bg-emerald-200/50",
  "bg-violet-200/50",
  "bg-orange-200/50",
  "bg-blue-200/60",
  "bg-rose-200/50",
];

export default function HomePage() {
  const router = useRouter();
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [heroSearch, setHeroSearch] = useState("");

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
      <section data-no-reveal className="relative isolate overflow-hidden bg-[#042f2e]">
        <div className="pointer-events-none absolute inset-0 -z-20" aria-hidden="true">
          <YouTubeCoverBackground
            id="4zCSgGybRcg"
            title="Incredible Medicare — Corporate Overview"
            className="h-full w-full"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#042f2e]/75 via-[#042f2e]/35 to-[#042f2e]/85" />

        {/* Centered copy */}
        <div className="relative mx-auto flex min-h-[560px] max-w-7xl items-center px-4 py-14 sm:px-6 lg:min-h-[calc(100svh-10.1rem)] lg:px-8">
          <Stagger immediate delay={0.15} gap={0.11} className="mx-auto flex max-w-5xl flex-col items-center text-center">
            <StaggerItem as="h1" className="font-serif text-4xl font-semibold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-[56px]">
              Delivering Excellence in{" "}
              <span className="relative inline-block text-teal-300">
                Pharmaceutical Manufacturing
                <svg
                  viewBox="0 0 300 14"
                  preserveAspectRatio="none"
                  className="pointer-events-none absolute -bottom-2 left-0 h-3 w-full text-teal-300/70"
                  aria-hidden="true"
                >
                  <path
                    d="M2 9c20-10 40-10 60 0s40 10 60 0 40-10 60 0 40 10 60 0 40-10 56 0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray="0.5 9"
                  />
                </svg>
              </span>
              <br />
              <span className="whitespace-nowrap">&amp; PCD Franchise</span>
            </StaggerItem>

            <StaggerItem as="p" className="mt-7 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
              <strong className="font-semibold text-white">
                Incredible Medicare
              </strong>{" "}
              delivers high-standard, bioequivalent medicines across India.
              Backed by Class 10,000 cleanrooms, 650+ approved DCGI
              formulations, and nationwide franchise monopoly rights.
            </StaggerItem>

            <StaggerItem className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/products"
                className="btn-shine inline-flex items-center gap-3 rounded-[4px] bg-[#0D9488] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(13,148,136,0.3)] transition-all hover:bg-[#0f766e] hover:shadow-lg"
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
                className="inline-flex cursor-pointer items-center gap-3 rounded-[4px] border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition-all hover:border-[#0D9488] hover:text-[#0D9488]"
              >
                <FileText className="h-4 w-4 text-[#0D9488]" />
                <span>Request Franchise Terms</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </StaggerItem>

            {/* Search */}
            <StaggerItem className="mt-9 w-full max-w-xl">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  router.push("/products");
                }}
                className="flex items-center gap-2 rounded-[4px] border border-slate-200 bg-white p-1.5 shadow-[0_10px_30px_rgba(15,50,90,0.08)]"
              >
                <Search className="ml-3 h-4 w-4 shrink-0 text-slate-400" />
                <input
                  type="text"
                  value={heroSearch}
                  onChange={(e) => setHeroSearch(e.target.value)}
                  placeholder="Search 650+ products (e.g. CEFIX-200, PANTO-DSR, AZITRO-500)"
                  aria-label="Search products"
                  className="min-w-0 flex-1 bg-transparent px-1 py-2 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-[4px] bg-[#0b192c] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#115e59]"
                >
                  Search
                </button>
              </form>
              <div className="mt-3 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs text-slate-300">
                <span className="font-semibold text-white">Popular:</span>
                {["CEFIX-200", "PANTO-DSR", "AZITRO-500"].map((term, i) => (
                  <React.Fragment key={term}>
                    <Link href="/products" className="font-medium text-teal-300 hover:underline">
                      {term}
                    </Link>
                    {i < 2 && <span className="text-slate-300">&middot;</span>}
                  </React.Fragment>
                ))}
              </div>
            </StaggerItem>
          </Stagger>
        </div>

      </section>

      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-[#eef7f5] via-[#f5faf9] to-white">
        {/* Operations panel */}
        <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-14 sm:px-6 lg:px-8 lg:pb-20">
          <Reveal direction="up" delay={0.1} className="relative overflow-hidden rounded-[4px] bg-[#04101f] shadow-[0_30px_70px_rgba(4,16,31,0.35)]">
            <Image
              src="/infra-packs.jpg"
              alt="High-speed blister packaging line at Incredible Medicare"
              fill
              sizes="(min-width:1024px) 1200px, 100vw"
              className="object-cover"
            />
            {/* Neutral scrim, bottom-only, so the overlay copy stays readable without tinting the photo */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

            {/* Top badges */}
            <div className="relative flex items-center justify-between px-5 pt-5 sm:px-8 sm:pt-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                Cleanroom Class 10,000 Active
              </span>
              <span className="hidden items-center gap-2 rounded-full border border-white/15 bg-black/30 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur sm:inline-flex">
                <MapPin className="h-3.5 w-3.5" />
                Kathua Manufacturing Campus
              </span>
            </div>

            {/* Overlay copy */}
            <div className="relative flex flex-col justify-end gap-6 px-5 pb-8 pt-40 sm:px-8 sm:pt-56 lg:flex-row lg:items-end lg:justify-between lg:pt-72">
              <div className="max-w-lg">
                <h3 className="text-xl font-bold text-white sm:text-2xl">
                  Commercial Formulation &amp; Packaging Automation
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  High-speed Alu-Alu, blister packaging, and computerized
                  quality assay lines operating under strict cGMP protocols.
                </p>
              </div>
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-black/30 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-300 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Quality Systems Active
              </span>
            </div>

            {/* Floating stat card (desktop) */}
            <div className="animate-float pointer-events-none absolute right-8 top-1/3 hidden w-[260px] rounded-[4px] border border-white/70 bg-white/85 p-5 shadow-xl backdrop-blur-md lg:block">
              <div className="flex items-center gap-3">
                <Pill className="h-10 w-10 shrink-0 text-[#0D9488]" strokeWidth={1.3} />
                <div>
                  <div className="font-serif text-4xl font-medium leading-none text-[#0b192c]">
                    <CountUp value="650+" />
                  </div>
                  <div className="mt-1 text-xs font-medium text-[#0b192c]">
                    Approved Products
                  </div>
                </div>
              </div>
              <div className="my-3 h-px w-8 bg-slate-300" />
              <ul className="space-y-2 text-xs text-slate-700">
                {[
                  "Wide Therapeutic Range",
                  "DCGI Approved Formulations",
                  "Consistent Quality Standards",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#0D9488]" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            {/* Stat strip */}
            <div className="relative grid grid-cols-2 gap-px border-t border-white/10 bg-white/10 sm:grid-cols-4">
              {[
                { icon: Pill, value: "650+", sub: "Approved Molecules" },
                { icon: Users, value: "850+", sub: "Distribution Partners" },
                { icon: Factory, value: "120M+", sub: "Units Produced / Year" },
                { icon: Clock, value: "15+", sub: "Years of Experience" },
              ].map((s) => (
                <div key={s.sub} className="bg-[#04101f] px-5 py-6 text-center sm:text-left">
                  <s.icon className="mx-auto h-5 w-5 text-emerald-400 sm:mx-0" strokeWidth={1.6} />
                  <div className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
                    <CountUp value={s.value} />
                  </div>
                  <div className="mt-0.5 text-xs text-slate-400">{s.sub}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Certification strip */}
        <div className="relative border-t border-slate-200 bg-white">
          {/* Looping preview clip, floating over the panel/strip boundary (desktop) */}
          <div className="pointer-events-none absolute right-[4%] -top-24 hidden w-[220px] xl:block">
            <div className="animate-float overflow-hidden rounded-[4px] border border-white shadow-xl">
              <div className="relative h-[130px] w-full">
                <Image
                  src="/viseo.gif"
                  alt="Incredible Medicare production preview"
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-4 gap-y-6 px-6 py-8 sm:grid-cols-3 sm:px-6 lg:grid-cols-5 lg:px-8">
            {[
              { icon: ShieldCheck, a: "WHO-GMP", b: "Certified Facilities" },
              { icon: Award, a: "ISO 9001:2015", b: "Quality Assured" },
              { icon: FileCheck, a: "650+ Formulations", b: "DCGI Approved" },
              { icon: Globe2, a: "28+ States", b: "Pan-India Coverage" },
              { icon: PhoneCall, a: "Prompt Dispatch", b: "Consignment Tracking" },
            ].map((f, i, arr) => (
              <div
                key={f.a}
                className={`flex items-center gap-3 ${
                  i === arr.length - 1 ? "col-span-2 justify-center sm:col-span-1 sm:justify-start" : "justify-start"
                }`}
              >
                <f.icon className="h-6 w-6 shrink-0 text-[#0D9488]" strokeWidth={1.6} />
                <div className="text-left leading-tight">
                  <div className="text-sm font-bold text-[#0b192c]">{f.a}</div>
                  <div className="text-xs text-slate-500">{f.b}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Ticker />

      {/* 3. ABOUT INCREDIBLE MEDICARE SNAPSHOT */}
      <section className="relative overflow-clip py-16 lg:py-20 bg-gradient-to-br from-[#ccfbf1] via-[#f0fdfa] to-[#ccfbf1] border-b border-slate-200">
        <div className="pointer-events-none absolute -top-32 -right-32 h-[460px] w-[460px] rounded-full bg-[#99f6e4]/60 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 left-1/3 h-[460px] w-[460px] rounded-full bg-[#99f6e4]/60 blur-3xl" />
        <div className="pointer-events-none absolute top-1/3 -left-40 h-[380px] w-[380px] rounded-full bg-[#f0fdfa]/70 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Box */}
            <div className="lg:col-span-6 relative space-y-4 lg:space-y-0 lg:h-[640px] lg:sticky lg:top-40 lg:self-start">
              {/* Photo 1 */}
              <Parallax speed={45} className="relative h-56 sm:h-72 lg:absolute lg:left-0 lg:top-0 lg:h-[58%] lg:w-[74%] overflow-hidden rounded-[4px] lg:rounded-tl-none lg:rounded-br-none lg:rounded-tr-[3rem] lg:rounded-bl-[3rem] shadow-[0_10px_40px_rgba(13,148,136,0.15)]">
                <Image
                  src="/about-cleanroom.jpg"
                  alt="Technician in cleanroom gowning reviewing batch data"
                  fill
                  sizes="(min-width:1024px) 40vw, 100vw"
                  className="object-cover"
                  style={{ objectPosition: "35% 40%" }}
                />
              </Parallax>

              {/* Cards */}
              <Parallax speed={-30} className="lg:absolute lg:right-0 lg:top-[19%] lg:w-[70%] lg:z-10 space-y-3">
                {[
                  {
                    tag: "HQ",
                    tagClass: "bg-[#0f766e]",
                    title: "Corporate Headquarters",
                    addr: ["Unicity Business Park, Dhakoli,", "Zirakpur, Punjab - 160104, India"],
                    body: "Strategically located in the Chandigarh Tricity industrial corridor, our corporate headquarters coordinates pan-India distribution, partner logistics, regulatory documentation, and strategic expansions.",
                    href: "/contact",
                  },
                  {
                    tag: "PLAN",
                    tagClass: "bg-[#0b192c]",
                    title: "Manufacturing Unit",
                    addr: ["SIDCO Industrial Complex, Ghatti,", "Kathua, Jammu & Kashmir - 184143, India"],
                    body: "Operates under WHO-GMP compliance, equipped with high-speed automated blister packing, liquid bottle lines, Class 10,000 cleanrooms, and dedicated QA/QC analytical suites.",
                    href: "/infrastructure",
                  },
                ].map((c) => (
                  <div
                    key={c.title}
                    className="bg-white/95 backdrop-blur rounded-[4px] border border-white p-5 shadow-[0_10px_40px_rgba(13,148,136,0.14)]"
                  >
                    <div className="flex items-center gap-3 pb-3 border-b border-slate-200/80">
                      <div className={`w-11 h-11 shrink-0 rounded-[4px] ${c.tagClass} text-white flex items-center justify-center font-bold text-xs`}>
                        {c.tag}
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-bold text-[#0b192c] text-base">{c.title}</h3>
                        <address className="mt-1 flex items-start gap-1.5 text-xs not-italic leading-snug text-slate-600">
                          <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#0f766e]" />
                          <span>
                            {c.addr.map((l) => (
                              <span key={l} className="block">{l}</span>
                            ))}
                          </span>
                        </address>
                      </div>
                    </div>
                    <div className="flex items-end gap-3 pt-3">
                      <p className="text-[13px] text-slate-600 leading-relaxed">{c.body}</p>
                      <Link
                        href={c.href}
                        aria-label={c.title}
                        className="shrink-0 w-9 h-9 rounded-full bg-[#f0fdfa] text-[#0f766e] border border-[#99f6e4] flex items-center justify-center hover:bg-[#0f766e] hover:text-white transition"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                ))}
              </Parallax>

              {/* Photo 2 */}
              <Parallax speed={60} className="relative h-56 sm:h-72 lg:absolute lg:left-[3%] lg:bottom-0 lg:h-[36%] lg:w-[80%] overflow-hidden rounded-[4px] shadow-[0_10px_40px_rgba(13,148,136,0.15)]">
                <Image
                  src="/about-qc-lab.jpg"
                  alt="QA/QC scientists testing samples in a laminar flow hood"
                  fill
                  sizes="(min-width:1024px) 40vw, 100vw"
                  className="object-cover"
                  style={{ objectPosition: "50% 45%" }}
                />
                <div className="absolute left-4 bottom-4 flex items-center gap-3 rounded-[4px] bg-white/85 backdrop-blur px-4 py-2.5 shadow-lg">
                  <div className="w-9 h-9 rounded-[4px] bg-[#f0fdfa] text-[#0f766e] flex items-center justify-center">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-medium text-[#0b192c] leading-tight">
                    State-of-the-Art
                    <br />
                    Manufacturing Facility
                  </span>
                </div>
              </Parallax>
            </div>

            {/* Content Box */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-4">
                <span className="inline-block rounded-[4px] border border-[#99f6e4] bg-white/70 px-4 py-1.5 text-[#0f766e] text-xs font-bold uppercase tracking-wider">
                  About Incredible Medicare
                </span>
                <h2 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold text-[#0b192c] tracking-tight leading-[1.1]">
                  From Punjab to Nationwide Markets — Expanding with{" "}
                  <span className="text-[#0d9488]">Clinical Integrity.</span>
                </h2>
                <div className="accent-bar"></div>
              </div>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  <strong className="text-[#0b192c]">Incredible Medicare</strong> is a distinguished Indian
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
                    className="flex items-center gap-2.5 text-[13px] font-medium text-[#0b192c]"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#0d9488] shrink-0" strokeWidth={1.8} />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 grid grid-cols-2 gap-3 sm:flex sm:items-center sm:gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center gap-2 px-3 sm:px-7 py-3.5 bg-[#0f766e] hover:bg-[#115e59] text-white text-xs sm:text-sm whitespace-nowrap font-semibold rounded-[4px] shadow-[0_8px_24px_rgba(15,118,110,0.3)] transition"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-3 sm:px-7 py-3.5 bg-white/80 hover:bg-white text-[#0b192c] text-xs sm:text-sm whitespace-nowrap font-semibold rounded-[4px] border border-[#99f6e4] transition"
                >
                  <span>Contact Headquarters</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProcessFlow />

      {/* 5. FEATURED PRODUCT SHOWCASE */}
      <section className="relative isolate overflow-hidden py-16 lg:py-20 border-b border-slate-200">
        <SectionBg src="/infra-packs.jpg" />
        <div className="pointer-events-none absolute -top-32 -left-32 h-[380px] w-[380px] rounded-full bg-[#ccfbf1]/50 blur-3xl" />
        <div className="pointer-events-none absolute top-1/2 -right-40 h-[420px] w-[420px] rounded-full bg-[#ccfbf1]/50 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-10">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4">
                <span className="text-[#0f766e] text-xs font-bold uppercase tracking-[0.18em]">
                  Comprehensive Formulations
                </span>
                <span className="hidden sm:block h-px w-14 bg-[#0f766e]/60" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0b192c] tracking-tight mt-3">
                Featured{" "}
                <span className="text-[#0d9488]">Pharmaceutical</span> Products
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed">
                High-efficacy medicines produced in accordance with IP/BP/USP
                standards, offering dependable clinical relief and doctor trust.
              </p>
            </div>

            <Link
              href="/products"
              className="group flex items-center gap-4 lg:w-[480px] rounded-[4px] border border-white bg-gradient-to-r from-[#f0fdfa] to-[#f4f8fe] p-5 shadow-[0_10px_40px_rgba(13,148,136,0.10)] hover:shadow-[0_14px_44px_rgba(13,148,136,0.18)] transition"
            >
              <div className="w-14 h-14 shrink-0 rounded-[4px] bg-[#ccfbf1] text-[#0d9488] flex items-center justify-center">
                <Package className="w-7 h-7" strokeWidth={1.6} />
              </div>
              <div className="flex-1 min-w-0 border-r border-[#99f6e4]/70 pr-4">
                <div className="font-bold text-[#0b192c] text-base">
                  View Our Complete Portfolio
                </div>
                <p className="text-sm text-slate-500 mt-0.5 leading-snug">
                  Explore all 650+ formulations across multiple therapeutic
                  segments.
                </p>
              </div>
              <span className="w-11 h-11 shrink-0 rounded-full bg-[#0d9488] text-white flex items-center justify-center shadow-[0_6px_18px_rgba(13,148,136,0.4)] group-hover:translate-x-0.5 transition">
                <ArrowRight className="w-5 h-5" />
              </span>
            </Link>
          </div>

          {/* Category Filter Tabs */}
          <div className="grid grid-cols-2 gap-2.5 mb-8 sm:flex sm:flex-wrap sm:items-center sm:gap-3">
            {categories.map((cat, i) => {
              const CatIcon = CATEGORY_ICONS[i] ?? PillIcon;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`inline-flex items-center justify-start gap-2 px-3 sm:px-4 py-2.5 text-xs sm:text-[13px] text-left leading-tight font-medium rounded-[4px] border transition cursor-pointer ${activeCategory === cat
                      ? "bg-[#0d9488] text-white border-[#0d9488] shadow-[0_6px_18px_rgba(13,148,136,0.3)]"
                      : "bg-white/80 text-[#0b192c] border-[#ccfbf1] hover:border-[#0d9488]/40 hover:bg-white"
                    }`}
                >
                  <CatIcon className={`w-4 h-4 shrink-0 ${activeCategory === cat ? "text-white" : "text-[#0d9488]"}`} />
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, i) => (
              <div
                key={product.id}
                className="relative overflow-hidden bg-white/90 rounded-[4px] border border-white p-6 shadow-[0_10px_40px_rgba(13,148,136,0.09)] hover:-translate-y-1 hover:shadow-[0_14px_44px_rgba(13,148,136,0.16)] transition-all flex flex-col justify-between group"
              >
                <div
                  className={`pointer-events-none absolute -top-16 -right-16 h-44 w-44 rounded-full blur-2xl ${CARD_TINTS[i % CARD_TINTS.length]}`}
                />
                <div className="relative">
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-semibold text-[#0d9488] bg-[#f0fdfa] px-3 py-1.5 rounded-[4px]">
                      {product.form}
                    </span>
                    <span className="text-xs font-medium text-slate-500">
                      {product.packingType}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-[#0b192c] tracking-tight uppercase group-hover:text-[#0d9488] transition-colors">
                    {product.name}
                  </h3>

                  <div className="text-sm font-medium text-slate-700 mt-2 line-clamp-2">
                    {product.genericName}
                  </div>

                  <p className="text-[13px] text-slate-500 mt-3 leading-relaxed line-clamp-3">
                    {product.description}
                  </p>

                  <div className="mt-5 pt-4 border-t border-slate-200/70 grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2.5 pr-3 border-r border-slate-200/70">
                      <div className="w-9 h-9 shrink-0 rounded-full bg-[#f0fdfa] text-[#0d9488] flex items-center justify-center">
                        <Box className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[11px] text-slate-400">Packaging</div>
                        <div className="text-[13px] font-semibold text-[#0b192c] leading-tight">
                          {product.packaging}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-9 h-9 shrink-0 rounded-full bg-[#f0fdfa] text-[#0d9488] flex items-center justify-center">
                        <Landmark className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[11px] text-slate-400">Division</div>
                        <div className="text-[13px] font-semibold text-[#0b192c] leading-tight line-clamp-2">
                          {product.division}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative mt-6 grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => openQuoteForProduct(product.name)}
                    className="inline-flex items-center justify-center gap-2 py-3 bg-[#0d9488] hover:bg-[#0f766e] text-white text-sm font-semibold rounded-[4px] shadow-[0_6px_18px_rgba(13,148,136,0.3)] transition cursor-pointer"
                  >
                    Enquire Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <Link
                    href={`/products`}
                    className="inline-flex items-center justify-center gap-2 py-3 bg-[#ccfbf1] hover:bg-[#ccfbf1] text-[#0b192c] text-sm font-semibold rounded-[4px] transition"
                  >
                    <FileText className="w-4 h-4 text-[#0d9488]" />
                    Details
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#0f766e] hover:bg-[#115e59] text-white font-bold text-sm rounded-[4px] transition shadow-[0_8px_24px_rgba(15,118,110,0.3)]"
            >
              <span>Explore Entire Product Directory</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 10. CALL TO ACTION: READY TO PARTNER */}
      <section className="relative overflow-hidden py-16 lg:py-20 bg-gradient-to-br from-[#0b192c] via-black to-black">
        <div className="pointer-events-none absolute -top-32 -left-40 h-[420px] w-[420px] rounded-full bg-teal-500/10 blur-3xl" />
        <div className="pointer-events-none absolute top-10 -right-40 h-[380px] w-[380px] rounded-full bg-amber-400/10 blur-3xl" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-4">
              <span className="hidden sm:block h-px w-12 bg-gradient-to-r from-transparent to-amber-400/60" />
              <span className="text-amber-400 text-xs font-bold uppercase tracking-[0.22em]">
                Unleash Business Growth
              </span>
              <span className="hidden sm:block h-px w-12 bg-gradient-to-l from-transparent to-amber-400/60" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white tracking-tight mt-4 leading-[1.1]">
              Ready to Partner With{" "}
              <span className="block text-teal-400">Incredible Medicare?</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base lg:text-lg mt-6 leading-relaxed">
              Connect with our business development team today to inquire about
              available district monopoly rights for PCD franchise or discuss
              third-party contract manufacturing schedules.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-8">
              <button
                type="button"
                onClick={() => {
                  setSelectedProduct("");
                  setEnquiryModalOpen(true);
                }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-400 text-[#0b192c] font-semibold text-sm sm:text-base rounded-[4px] shadow-[0_10px_28px_rgba(251,191,36,0.25)] transition hover:brightness-105 cursor-pointer"
              >
                <FileText className="w-5 h-5" />
                <span>Get Instant Price List &amp; Terms</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href={`tel:+${COMPANY_INFO.whatsapp}`}
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-semibold text-sm sm:text-base rounded-[4px] border border-white/15 backdrop-blur transition"
              >
                <PhoneCall className="w-5 h-5 text-teal-400" />
                <span>Call: {COMPANY_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Trust row */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6">
            {[
              { icon: ShieldCheck, a: "WHO-GMP Certified", b: "Manufacturing Facilities" },
              { icon: Users, a: "Pan-India Presence", b: "Distribution Support" },
              { icon: Box, a: "Flexible", b: "Packaging Options" },
              { icon: FileCheck, a: "Transparent", b: "Pricing & Terms" },
            ].map((f, i) => (
              <div
                key={f.a}
                className={`flex items-center justify-center gap-4 px-4 ${i > 0 ? "lg:border-l lg:border-white/10" : ""}`}
              >
                <div className="w-14 h-14 shrink-0 text-teal-400 flex items-center justify-center">
                  <f.icon className="w-7 h-7" strokeWidth={1.6} />
                </div>
                <div className="leading-snug">
                  <div className="font-bold text-white text-sm sm:text-base">{f.a}</div>
                  <div className="text-slate-400 text-sm sm:text-base">{f.b}</div>
                </div>
              </div>
            ))}
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
