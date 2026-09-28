"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ClientFeedback from "@/components/ui/testimonial";
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
} from "lucide-react";
import {
  COMPANY_INFO,
  ANNUAL_CAPACITIES,
  DIVISIONS,
  BLOG_POSTS,
} from "@/data/company";
import { PRODUCTS, Product } from "@/data/products";
import EnquiryModal from "@/components/EnquiryModal";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { CountUp } from "@/components/motion/CountUp";
import { Ticker } from "@/components/motion/Ticker";
import { ProcessFlow } from "@/components/motion/ProcessFlow";
import { Conveyor } from "@/components/motion/Conveyor";

const ACCREDITATION_ICONS: (React.ComponentType<{ className?: string; strokeWidth?: number }> | "iso")[] = [
  Globe2,
  "iso",
  FlaskConical,
  FileCheck,
  ShieldCheck,
];

// A different accent per accreditation instead of one flat blue, so the row
// reads as five distinct credentials rather than five repeats of one icon.
const ACCREDITATION_TINTS = [
  "#0b5bd3",
  "#d97706",
  "#0d9488",
  "#7c3aed",
  "#059669",
];

function GrowthIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <path d="M8 34 24 20l10 8 20-18" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M40 10h14v14" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="10" y="42" width="10" height="14" rx="2" fill="currentColor" opacity=".55" />
      <rect x="27" y="36" width="10" height="20" rx="2" fill="currentColor" opacity=".8" />
      <rect x="44" y="30" width="10" height="26" rx="2" fill="currentColor" />
    </svg>
  );
}

function FactoryIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path d="M4 27V15l7 4v-4l7 4v-4l6 3V7h4v20z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M4 27h24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M9 23h2M15 23h2M21 23h2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M26 4c1 1 1 2 0 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity=".6" />
    </svg>
  );
}

const DIVISION_THEMES = [
  {
    icon: PillIcon,
    card: "bg-white/90",
    tile: "bg-[#e3edfb] text-[#0b5bd3]",
    pill: "bg-[#eaf1fd] text-[#0b5bd3]",
    check: "text-[#0b5bd3]",
    deco: "text-[#0b5bd3]/10",
    link: "text-[#0b4a99]",
    arrow: "bg-[#e6effc] text-[#0b5bd3]",
  },
  {
    icon: Droplets,
    card: "bg-gradient-to-br from-white/90 to-emerald-50/70",
    tile: "bg-emerald-50 text-emerald-600",
    pill: "bg-emerald-50 text-emerald-700",
    check: "text-emerald-600",
    deco: "text-emerald-500/10",
    link: "text-[#0b4a99]",
    arrow: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: Brain,
    card: "bg-gradient-to-br from-white/90 to-violet-50/70",
    tile: "bg-violet-100 text-violet-600",
    pill: "bg-violet-50 text-violet-700",
    check: "text-violet-600",
    deco: "text-violet-500/10",
    link: "text-violet-700",
    arrow: "bg-violet-50 text-violet-600",
  },
  {
    icon: HeartPulse,
    card: "bg-gradient-to-br from-orange-50/80 to-rose-50/60",
    tile: "bg-orange-100 text-orange-600",
    pill: "bg-orange-100/70 text-orange-700",
    check: "text-orange-500",
    deco: "text-orange-500/10",
    link: "text-orange-600",
    arrow: "bg-orange-100/70 text-orange-600",
  },
  {
    icon: Leaf,
    card: "bg-gradient-to-br from-white/90 to-sky-50/70",
    tile: "bg-[#e3edfb] text-[#0b5bd3]",
    pill: "bg-[#eaf1fd] text-[#0b5bd3]",
    check: "text-[#0b5bd3]",
    deco: "text-[#0b5bd3]/10",
    link: "text-[#0b4a99]",
    arrow: "bg-[#e6effc] text-[#0b5bd3]",
  },
];

const BLOG_THEMES = [
  { icon: FileText, tile: "bg-[#e3edfb] text-[#0b5bd3]", pill: "bg-[#eaf1fd] text-[#0b5bd3]" },
  { icon: ShieldCheck, tile: "bg-emerald-50 text-emerald-600", pill: "bg-emerald-50 text-emerald-700" },
  { icon: FlaskConical, tile: "bg-violet-100 text-violet-600", pill: "bg-violet-100/70 text-violet-700" },
  { icon: HeartPulse, tile: "bg-orange-100 text-orange-600", pill: "bg-orange-100/70 text-orange-700" },
  { icon: Leaf, tile: "bg-[#e3edfb] text-[#0b5bd3]", pill: "bg-[#eaf1fd] text-[#0b5bd3]" },
];

const CATEGORY_ICONS = [PillIcon, Shield, Bone, Stethoscope, Leaf, Droplet];

const CARD_TINTS = [
  "bg-sky-200/60",
  "bg-emerald-200/50",
  "bg-violet-200/50",
  "bg-orange-200/50",
  "bg-blue-200/60",
  "bg-rose-200/50",
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
      <section data-no-reveal className="relative isolate overflow-hidden border-b border-slate-200 bg-[#f4f8fd]">
        {/* Background image, fading into the copy on the left */}
        <div className="absolute inset-y-0 right-0 -z-10 w-full overflow-hidden lg:w-[64%]">
          <Image
            src="/herobg.png"
            alt="Cleanroom vial filling line at Incredible Medicare"
            fill
            priority
            sizes="(min-width: 1024px) 64vw, 100vw"
            className="animate-kenburns object-cover object-[65%_center] opacity-25 lg:opacity-100 lg:[mask-image:linear-gradient(to_right,transparent_0%,black_38%)]"
          />
        </div>
        {/* Drifting particles */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          {[
            "left-[6%] top-[18%] h-3 w-3 [animation-delay:0s]",
            "left-[34%] top-[70%] h-2 w-2 [animation-delay:-4s]",
            "left-[46%] top-[12%] h-4 w-4 [animation-delay:-8s]",
            "left-[18%] top-[82%] h-2.5 w-2.5 [animation-delay:-2s]",
          ].map((c) => (
            <span
              key={c}
              className={`animate-drift absolute rounded-full bg-[#3b8ff0]/30 ${c}`}
            />
          ))}
        </div>
        <div className="absolute inset-0 -z-10 bg-linear-to-r from-[#f4f8fd] via-[#f4f8fd]/80 to-transparent lg:from-[#f4f8fd] lg:via-[#f4f8fd]/55 lg:to-transparent lg:w-[55%]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid min-h-0 grid-cols-1 lg:min-h-[740px] lg:grid-cols-12">
            {/* Left Content */}
            <Stagger immediate delay={0.15} gap={0.11} className="flex flex-col justify-center py-14 sm:py-20 lg:col-span-7 lg:py-16 lg:pr-10">
              <StaggerItem className="flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500 sm:text-xs">
                <span>WHO-GMP &amp; ISO 9001:2015 Certified</span>
                <span className="hidden h-px w-24 bg-slate-300 sm:block" />
              </StaggerItem>

              <StaggerItem as="h1" className="mt-6 font-serif text-4xl font-medium leading-[1.08] tracking-tight text-[#0b1b3b] sm:text-5xl lg:text-[54px] xl:text-[60px]">
                Delivering Excellence in{" "}
                <span className="text-[#1a5fb4]">Pharmaceutical</span>{" "}
                Manufacturing &amp; PCD Franchise.
              </StaggerItem>

              <StaggerItem as="p" className="mt-7 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                <strong className="font-semibold text-slate-700">
                  Incredible Medicare
                </strong>{" "}
                delivers high-standard, bioequivalent medicines across India.
                Backed by state-of-the-art cleanrooms, 650+ approved DCGI
                formulations, and nationwide franchise monopoly rights.
              </StaggerItem>

              <StaggerItem className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/products"
                  className="btn-shine inline-flex items-center gap-3 rounded-[4px] bg-[#0b4a99] px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#093d80] hover:shadow-lg"
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
                  className="inline-flex cursor-pointer items-center gap-3 rounded-[4px] border border-slate-300 bg-white/70 px-6 py-3.5 text-sm font-semibold text-slate-800 backdrop-blur-sm transition-all hover:border-[#0b4a99] hover:bg-white hover:text-[#0b4a99]"
                >
                  <FileText className="h-4 w-4 text-[#0b4a99]" />
                  <span>Request Franchise Terms</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </StaggerItem>

              {/* Trust Indicators */}
              <StaggerItem className="mt-12 flex flex-wrap items-center gap-y-5 sm:flex-nowrap">
                {[
                  { icon: ShieldCheck, title: "WHO-GMP", sub: "Certified" },
                  { icon: Award, title: "ISO 9001:2015", sub: "Certified" },
                  { icon: Pill, title: "650+", sub: "Approved Products" },
                ].map(({ icon: Icon, title, sub }, i) => (
                  <div
                    key={title}
                    className={`flex items-center gap-3 pr-5 sm:pr-6 xl:pr-8 ${i > 0
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
              </StaggerItem>
            </Stagger>
          </div>
        </div>

        {/* Floating glass cards (desktop) */}
        <div className="pointer-events-none absolute inset-0 hidden lg:block">
          {/* Tagline */}
          <div className="absolute right-[4%] top-12 hidden rounded-[4px] border border-white/25 bg-[#0a1f44]/70 px-5 py-4 text-[11px] font-semibold uppercase leading-relaxed tracking-[0.3em] text-white shadow-[0_10px_30px_rgba(10,31,68,0.35)] backdrop-blur-md xl:block">
            <div>Better</div>
            <div>Medicines</div>
            <div>Bigger</div>
            <div>Possibilities</div>
            <div className="mt-3 h-0.5 w-10 bg-sky-400" />
          </div>

          {/* 650+ card */}
          <div className="animate-float pointer-events-auto absolute left-[54%] top-[26%] w-[300px] rounded-[4px] border border-white/70 bg-white/70 p-6 shadow-xl backdrop-blur-md">
            <div className="flex items-center gap-4">
              <Pill
                className="h-12 w-12 shrink-0 text-[#0b4a99]"
                strokeWidth={1.3}
              />
              <div>
                <div className="font-serif text-5xl font-medium leading-none text-[#0b1b3b]">
                  <CountUp value="650+" />
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

      <Ticker />

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
              const tint = ACCREDITATION_TINTS[i % ACCREDITATION_TINTS.length];
              return (
                <div
                  key={item.title}
                  className="group bg-white/60 backdrop-blur-md p-5 sm:p-6 rounded-[4px] border border-white/80 shadow-[0_8px_30px_rgba(30,80,160,0.08)] text-center hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(30,80,160,0.16)] transition-all last:col-span-2 md:last:col-span-1"
                >
                  <div
                    className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-4"
                    style={{ color: tint }}
                  >
                    {Icon === "iso" ? (
                      <span className="text-sm font-black tracking-tight">ISO</span>
                    ) : (
                      <Icon className="w-7 h-7 sm:w-8 sm:h-8" strokeWidth={1.6} />
                    )}
                  </div>
                  <div className="font-bold text-[#0a1f44] text-base">{item.title}</div>
                  <div
                    className="h-[3px] w-9 rounded-full mx-auto my-3"
                    style={{ background: `linear-gradient(90deg, ${tint}, ${tint}99)` }}
                  />
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
      <section className="relative overflow-hidden py-16 lg:py-20 bg-gradient-to-br from-[#dce8fa] via-[#e5eefc] to-[#d3e3f9] border-b border-slate-200">
        <div className="pointer-events-none absolute -top-32 -right-32 h-[460px] w-[460px] rounded-full bg-[#bcd3f3]/60 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 left-1/3 h-[460px] w-[460px] rounded-full bg-[#c9dcf6]/60 blur-3xl" />
        <div className="pointer-events-none absolute top-1/3 -left-40 h-[380px] w-[380px] rounded-full bg-[#e9f2ff]/70 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Box */}
            <div className="lg:col-span-6 relative space-y-4 lg:space-y-0 lg:h-[640px]">
              {/* Photo 1 */}
              <div className="relative h-56 sm:h-72 lg:absolute lg:left-0 lg:top-0 lg:h-[58%] lg:w-[74%] overflow-hidden rounded-[4px] lg:rounded-tl-none lg:rounded-br-none lg:rounded-tr-[3rem] lg:rounded-bl-[3rem] shadow-[0_10px_40px_rgba(30,80,160,0.15)]">
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
                    className="bg-white/95 backdrop-blur rounded-[4px] border border-white p-5 shadow-[0_10px_40px_rgba(30,80,160,0.14)]"
                  >
                    <div className="flex items-center gap-3 pb-3 border-b border-slate-200/80">
                      <div className={`w-11 h-11 shrink-0 rounded-[4px] ${c.tagClass} text-white flex items-center justify-center font-bold text-xs`}>
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
              <div className="relative h-56 sm:h-72 lg:absolute lg:left-[3%] lg:bottom-0 lg:h-[36%] lg:w-[80%] overflow-hidden rounded-[4px] shadow-[0_10px_40px_rgba(30,80,160,0.15)]">
                <Image
                  src="/herobg.png"
                  alt="Vial filling line"
                  fill
                  sizes="(min-width:1024px) 40vw, 100vw"
                  className="object-cover"
                  style={{ objectPosition: "85% 90%" }}
                />
                <div className="absolute left-4 bottom-4 flex items-center gap-3 rounded-[4px] bg-white/85 backdrop-blur px-4 py-2.5 shadow-lg">
                  <div className="w-9 h-9 rounded-[4px] bg-[#e6effc] text-[#0b4a99] flex items-center justify-center">
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
                <span className="inline-block rounded-[4px] border border-[#cfe0f7] bg-white/70 px-4 py-1.5 text-[#0b4a99] text-xs font-bold uppercase tracking-wider">
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
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#0b4a99] hover:bg-[#093d80] text-white text-sm font-semibold rounded-[4px] shadow-[0_8px_24px_rgba(11,74,153,0.3)] transition"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/80 hover:bg-white text-[#0a1f44] text-sm font-semibold rounded-[4px] border border-[#cfe0f7] transition"
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
                  className="bg-white/85 backdrop-blur rounded-[4px] p-5 border border-white shadow-[0_10px_40px_rgba(30,80,160,0.10)] hover:-translate-y-1 hover:shadow-[0_14px_44px_rgba(30,80,160,0.18)] transition-all flex flex-col items-center text-center"
                >
                  <span
                    className="inline-block whitespace-nowrap px-3 py-1 rounded-[4px] text-[11px] font-semibold"
                    style={{ background: `${cap.color}14`, color: cap.color }}
                  >
                    {cap.badge}
                  </span>
                  <div
                    className="w-[72px] h-[72px] rounded-full flex items-center justify-center mt-4"
                    style={{ background: `${cap.color}14`, color: cap.color }}
                  >
                    <Icon className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-bold text-[#0a1f44] text-base mt-4 min-h-[1.5rem] leading-snug">
                    {cap.form}
                  </h3>
                  <div className="text-3xl font-extrabold mt-2 tracking-tight" style={{ color: cap.color }}>
                    <CountUp value={cap.metric} />
                  </div>
                  <p className="text-sm text-slate-500 mt-1">{cap.subtext}</p>
                  <div className="w-full mt-auto pt-5">
                    <div className="border-t border-slate-200/80 pt-4 flex items-center justify-center gap-3 text-xs text-slate-500 font-medium text-left">
                      <div
                        className="w-9 h-9 shrink-0 rounded-full flex items-center justify-center"
                        style={{ background: `${cap.color}14`, color: cap.color }}
                      >
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

          <Conveyor className="mx-auto mt-14 max-w-4xl" />
        </div>
      </section>

      <ProcessFlow />

      {/* 5. FEATURED PRODUCT SHOWCASE */}
      <section className="relative overflow-hidden py-16 lg:py-20 bg-gradient-to-b from-white via-[#f6f9fe] to-[#eef4fc] border-b border-slate-200">
        <div className="pointer-events-none absolute -top-32 -left-32 h-[380px] w-[380px] rounded-full bg-[#dbe8fb]/50 blur-3xl" />
        <div className="pointer-events-none absolute top-1/2 -right-40 h-[420px] w-[420px] rounded-full bg-[#dbe8fb]/50 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-10">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4">
                <span className="text-[#0b4a99] text-xs font-bold uppercase tracking-[0.18em]">
                  Comprehensive Formulations
                </span>
                <span className="hidden sm:block h-px w-14 bg-[#0b4a99]/60" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a1f44] tracking-tight mt-3">
                Featured{" "}
                <span className="text-[#0b5bd3]">Pharmaceutical</span> Products
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed">
                High-efficacy medicines produced in accordance with IP/BP/USP
                standards, offering dependable clinical relief and doctor trust.
              </p>
            </div>

            <Link
              href="/products"
              className="group flex items-center gap-4 lg:w-[480px] rounded-[4px] border border-white bg-gradient-to-r from-[#eaf2fd] to-[#f4f8fe] p-5 shadow-[0_10px_40px_rgba(30,80,160,0.10)] hover:shadow-[0_14px_44px_rgba(30,80,160,0.18)] transition"
            >
              <div className="w-14 h-14 shrink-0 rounded-[4px] bg-[#dbe8fb] text-[#0b5bd3] flex items-center justify-center">
                <Package className="w-7 h-7" strokeWidth={1.6} />
              </div>
              <div className="flex-1 min-w-0 border-r border-[#cfe0f7]/70 pr-4">
                <div className="font-bold text-[#0a1f44] text-base">
                  View Our Complete Portfolio
                </div>
                <p className="text-sm text-slate-500 mt-0.5 leading-snug">
                  Explore all 650+ formulations across multiple therapeutic
                  segments.
                </p>
              </div>
              <span className="w-11 h-11 shrink-0 rounded-full bg-[#0b5bd3] text-white flex items-center justify-center shadow-[0_6px_18px_rgba(11,91,211,0.4)] group-hover:translate-x-0.5 transition">
                <ArrowRight className="w-5 h-5" />
              </span>
            </Link>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            {categories.map((cat, i) => {
              const CatIcon = CATEGORY_ICONS[i] ?? PillIcon;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 text-[13px] font-medium rounded-[4px] border transition cursor-pointer ${activeCategory === cat
                      ? "bg-[#0b5bd3] text-white border-[#0b5bd3] shadow-[0_6px_18px_rgba(11,91,211,0.3)]"
                      : "bg-white/80 text-[#0a1f44] border-[#e3ecfa] hover:border-[#0b5bd3]/40 hover:bg-white"
                    }`}
                >
                  <CatIcon className={`w-4 h-4 ${activeCategory === cat ? "text-white" : "text-[#0b5bd3]"}`} />
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
                className="relative overflow-hidden bg-white/90 rounded-[4px] border border-white p-6 shadow-[0_10px_40px_rgba(30,80,160,0.09)] hover:-translate-y-1 hover:shadow-[0_14px_44px_rgba(30,80,160,0.16)] transition-all flex flex-col justify-between group"
              >
                <div
                  className={`pointer-events-none absolute -top-16 -right-16 h-44 w-44 rounded-full blur-2xl ${CARD_TINTS[i % CARD_TINTS.length]}`}
                />
                <div className="relative">
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-semibold text-[#0b5bd3] bg-[#eaf1fd] px-3 py-1.5 rounded-[4px]">
                      {product.form}
                    </span>
                    <span className="text-xs font-medium text-slate-500">
                      {product.packingType}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-[#0a1f44] tracking-tight uppercase group-hover:text-[#0b5bd3] transition-colors">
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
                      <div className="w-9 h-9 shrink-0 rounded-full bg-[#eaf1fd] text-[#0b5bd3] flex items-center justify-center">
                        <Box className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[11px] text-slate-400">Packaging</div>
                        <div className="text-[13px] font-semibold text-[#0a1f44] leading-tight">
                          {product.packaging}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-9 h-9 shrink-0 rounded-full bg-[#eaf1fd] text-[#0b5bd3] flex items-center justify-center">
                        <Landmark className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[11px] text-slate-400">Division</div>
                        <div className="text-[13px] font-semibold text-[#0a1f44] leading-tight line-clamp-2">
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
                    className="inline-flex items-center justify-center gap-2 py-3 bg-[#0b5bd3] hover:bg-[#0a4db3] text-white text-sm font-semibold rounded-[4px] shadow-[0_6px_18px_rgba(11,91,211,0.3)] transition cursor-pointer"
                  >
                    Enquire Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <Link
                    href={`/products`}
                    className="inline-flex items-center justify-center gap-2 py-3 bg-[#eef3fb] hover:bg-[#e3ecfa] text-[#0a1f44] text-sm font-semibold rounded-[4px] transition"
                  >
                    <FileText className="w-4 h-4 text-[#0b5bd3]" />
                    Details
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#0b4a99] hover:bg-[#093d80] text-white font-bold text-sm rounded-[4px] transition shadow-[0_8px_24px_rgba(11,74,153,0.3)]"
            >
              <span>Explore Entire Product Directory</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. BUSINESS SOLUTIONS: PCD FRANCHISE & THIRD PARTY */}
      <section className="relative overflow-hidden py-16 lg:py-20 bg-gradient-to-b from-[#f1f6fd] via-[#f6f9fe] to-[#eef4fc] border-b border-slate-200">
        <div className="pointer-events-none absolute -top-32 -left-40 h-[420px] w-[420px] rounded-full bg-[#dbe8fb]/60 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 -right-40 h-[420px] w-[420px] rounded-full bg-[#dbe8fb]/60 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative text-center max-w-3xl mx-auto mb-12 lg:mb-14">
            <span className="text-[#0b5bd3] text-xs font-bold uppercase tracking-[0.22em]">
              Strategic Partnerships
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a1f44] tracking-tight mt-3 leading-[1.15]">
              Comprehensive{" "}
              <span className="block text-[#0b5bd3]">Pharmaceutical Solutions</span>
            </h2>
            <div className="accent-bar mx-auto mt-5"></div>
            <p className="text-sm sm:text-base text-slate-600 mt-5 leading-relaxed">
              Whether you are an aspiring pharma entrepreneur looking for an
              exclusive PCD franchise or an established brand requiring reliable
              contract manufacturing, Incredible Medicare delivers.
            </p>

            <div className="hidden xl:flex absolute -right-16 top-0 items-center gap-3 rounded-[4px] bg-white/90 backdrop-blur border border-white px-5 py-4 shadow-[0_10px_40px_rgba(30,80,160,0.12)] text-left">
              <div className="w-12 h-12 rounded-full bg-[#e9f1fc] text-[#0b5bd3] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" strokeWidth={1.6} />
              </div>
              <div className="leading-tight">
                <div className="text-xs text-slate-500">Trusted by</div>
                <div className="text-base font-bold text-[#0b4a99]">650+ Partners</div>
                <div className="text-xs text-slate-500">Across India</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-7">
            {/* Box 1: PCD Pharma Franchise */}
            <div className="relative overflow-hidden bg-white/90 rounded-[4px] p-7 sm:p-8 border border-white shadow-[0_10px_40px_rgba(30,80,160,0.10)] hover:shadow-[0_14px_44px_rgba(30,80,160,0.16)] transition-all flex flex-col justify-between">
              <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#dbe8fb]/70 blur-2xl" />
              <div className="absolute right-8 top-10 hidden sm:flex w-28 h-28 rounded-full bg-[#e3edfb] text-[#0b5bd3] items-center justify-center">
                <GrowthIcon className="w-14 h-14" />
              </div>
              <div className="relative space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-[4px] bg-[#e3edfb] text-[#0b5bd3] flex items-center justify-center">
                    <Users className="w-7 h-7" strokeWidth={1.8} />
                  </div>
                  <div className="flex items-center gap-3 mt-6">
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#0b5bd3]">
                      Grow Together
                    </span>
                    <span className="hidden sm:block h-px w-20 bg-[#cfe0f7]" />
                  </div>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0a1f44] leading-tight tracking-tight">
                  PCD Pharma{" "}
                  <span className="block text-[#0b5bd3]">Franchise Business</span>
                </h3>
                <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed max-w-md">
                  Join our nationwide franchise network with genuine monopoly
                  rights, attractive net rates, high profit margins, and zero
                  internal competition in your designated territory.
                </p>
                <ul className="space-y-2.5 pt-1 text-sm text-slate-700">
                  {[
                    "Exclusive district-wise monopoly marketing agreements",
                    "Free promotional inputs: Visual aids, LBLs, catch covers, MR bags",
                    "Fast pan-India dispatch with stock availability assurance",
                    "Continuous new DCGI approved formulation launches",
                  ].map((t) => (
                    <li key={t} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#0b5bd3] shrink-0" strokeWidth={1.8} />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedProduct("PCD Franchise Monopoly Application");
                    setEnquiryModalOpen(true);
                  }}
                  className="inline-flex items-center gap-6 px-6 py-3.5 bg-[#0b5bd3] hover:bg-[#0a4db3] text-white text-sm font-semibold rounded-[4px] shadow-[0_8px_24px_rgba(11,91,211,0.35)] transition cursor-pointer"
                >
                  Apply for Franchise
                  <ArrowRight className="w-4 h-4" />
                </button>
                <Link
                  href="/our-services"
                  className="inline-flex items-center gap-6 px-6 py-3.5 bg-white/80 hover:bg-white text-[#0a1f44] text-sm font-semibold rounded-[4px] border border-[#dbe5f5] transition"
                >
                  Learn terms
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Box 2: Third Party Manufacturing */}
            <div className="relative overflow-hidden bg-white/90 rounded-[4px] p-7 sm:p-8 border border-white shadow-[0_10px_40px_rgba(30,80,160,0.10)] hover:shadow-[0_14px_44px_rgba(30,80,160,0.16)] transition-all flex flex-col justify-between">
              <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-emerald-100/70 blur-2xl" />
              <div className="absolute right-0 top-0 hidden xl:block h-[28%] w-[26%] overflow-hidden rounded-bl-[5rem]">
                <Image
                  src="/herobg.png"
                  alt=""
                  fill
                  sizes="240px"
                  className="object-cover"
                  style={{ objectPosition: "80% 45%" }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/50 via-transparent to-transparent" />
              </div>
              <div className="relative space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-[4px] bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <FactoryIcon className="w-8 h-8" />
                  </div>
                  <span className="mt-6 text-[10px] font-bold uppercase tracking-[0.18em] text-[#0b5bd3]">
                    Manufacture with Confidence
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0a1f44] leading-tight tracking-tight">
                  Third-Party{" "}
                  <span className="block text-[#0b5bd3]">Contract Manufacturing</span>
                </h3>
                <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed max-w-md">
                  Leverage our WHO-GMP certified production units for turnkey
                  manufacturing of your private label medicines with strict
                  quality control and predictable timelines.
                </p>
                <ul className="space-y-2.5 pt-1 text-sm text-slate-700">
                  {[
                    "Cost-effective contract production without capex investment",
                    "Custom packaging: Alu-Alu, Blister, Amber Glass, Lyophilized Vials",
                    "Comprehensive regulatory documentation & analytical release",
                    "Flexible batch sizes with guaranteed delivery schedules",
                  ].map((t) => (
                    <li key={t} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" strokeWidth={1.8} />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedProduct("Third Party Manufacturing Contract");
                    setEnquiryModalOpen(true);
                  }}
                  className="inline-flex items-center gap-6 px-6 py-3.5 bg-[#0a1f44] hover:bg-[#0f2c59] text-white text-sm font-semibold rounded-[4px] shadow-[0_8px_24px_rgba(10,31,68,0.3)] transition cursor-pointer"
                >
                  Request Manufacturing Quote
                  <ArrowRight className="w-4 h-4" />
                </button>
                <Link
                  href="/infrastructure"
                  className="inline-flex items-center gap-6 px-6 py-3.5 bg-white/80 hover:bg-white text-[#0a1f44] text-sm font-semibold rounded-[4px] border border-[#dbe5f5] transition"
                >
                  View plant specs
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SPECIALIZED DIVISIONS */}
      <section className="relative overflow-hidden py-16 lg:py-20 bg-gradient-to-b from-white via-[#f6f9fe] to-[#eef4fc] border-b border-slate-200">
        <div className="pointer-events-none absolute -top-32 -left-40 h-[420px] w-[420px] rounded-full bg-[#dbe8fb]/60 blur-3xl" />
        <div className="pointer-events-none absolute top-20 -right-40 h-[380px] w-[380px] rounded-full bg-[#dbe8fb]/50 blur-3xl" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-14">
            <span className="text-[#0b5bd3] text-xs font-bold uppercase tracking-[0.22em]">
              Focused Market Verticals
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a1f44] tracking-tight mt-3">
              Specialized Business{" "}
              <span className="text-[#0b5bd3]">Divisions</span>
            </h2>
            <div className="accent-bar mx-auto mt-4"></div>
            <p className="text-sm sm:text-base text-slate-600 mt-5 leading-relaxed">
              Each division at Incredible Medicare operates with dedicated
              formulation expertise, tailored promotional inputs, and
              specialized clinical focus.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5">
            {DIVISIONS.map((div, i) => {
              const t = DIVISION_THEMES[i % DIVISION_THEMES.length];
              const Icon = t.icon;
              return (
                <div
                  key={div.id}
                  className={`relative overflow-hidden rounded-[4px] p-5 border border-white shadow-[0_8px_30px_rgba(30,80,160,0.09)] flex flex-col justify-between ${t.card} ${i < 3 ? "lg:col-span-2" : "lg:col-span-3"}`}
                >
                  <Icon
                    className={`pointer-events-none absolute -bottom-6 -right-6 w-32 h-32 ${t.deco}`}
                    strokeWidth={1}
                  />
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-11 h-11 shrink-0 rounded-[4px] flex items-center justify-center ${t.tile}`}>
                        <Icon className="w-5 h-5" strokeWidth={1.7} />
                      </div>
                      <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${t.pill}`}>
                        {div.productCount}
                      </span>
                    </div>
                    <h3 className="font-extrabold text-[#0a1f44] text-lg tracking-tight leading-snug">
                      {div.name}
                    </h3>
                    <div className="text-xs font-semibold text-[#0b5bd3] mt-0.5 mb-2">
                      {div.tagline}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed mb-3 max-w-lg">
                      {div.description}
                    </p>

                    <ul className="space-y-1.5 pt-3 border-t border-slate-200/70">
                      {div.highlights.map((h) => (
                        <li
                          key={h}
                          className="text-xs text-slate-700 flex items-center gap-2"
                        >
                          <CheckCircle2 className={`w-4 h-4 shrink-0 ${t.check}`} strokeWidth={1.8} />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="relative mt-4">
                    <Link
                      href="/divisions"
                      className={`group inline-flex items-center gap-2.5 text-xs font-bold ${t.link}`}
                    >
                      <span>Explore Division Details</span>
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center transition group-hover:translate-x-0.5 ${t.arrow}`}>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS & TRUST */}
      <div className="bg-white border-b border-slate-200 px-0 sm:px-6">
        <ClientFeedback />
      </div>

      {/* 9. LATEST BLOG POSTS & PHARMA INSIGHTS */}
      <section className="relative overflow-hidden py-16 lg:py-20 bg-gradient-to-b from-[#f1f6fd] via-[#f6f9fe] to-[#eef4fc]">
        <div className="pointer-events-none absolute -top-40 -right-32 h-[460px] w-[460px] rounded-full bg-[#dbe8fb]/60 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-32 h-[420px] w-[420px] rounded-full bg-[#cfe0f7]/60 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4">
                <span className="text-[#0b4a99]/80 text-xs font-bold uppercase tracking-[0.18em]">
                  Industry Knowledge
                </span>
                <span className="hidden sm:block h-px w-12 bg-[#0b4a99]/50" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a1f44] tracking-tight mt-3">
                Latest Insights &amp;{" "}
                <span className="text-[#0b5bd3]">Market Updates</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-500 mt-4 leading-relaxed max-w-xl">
                Explore expert insights, regulatory updates, and industry trends
                shaping the future of pharmaceutical healthcare.
              </p>
            </div>

            <Link
              href="/blogs"
              className="inline-flex items-center gap-3 self-start md:self-center rounded-full border border-[#dbe5f5] bg-white/80 hover:bg-white px-7 py-4 text-sm font-semibold text-[#0b4a99] shadow-[0_6px_20px_rgba(30,80,160,0.08)] transition"
            >
              <span>View All Articles</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5">
            {BLOG_POSTS.map((post, i) => {
              const t = BLOG_THEMES[i % BLOG_THEMES.length];
              const Icon = t.icon;
              return (
                <Link
                  key={post.slug}
                  href={`/blogs/${post.slug}`}
                  className={`group cursor-pointer bg-white/90 rounded-[4px] p-6 border border-white shadow-[0_10px_40px_rgba(30,80,160,0.09)] flex flex-col justify-between focus-visible:outline-2 focus-visible:outline-[#0b5bd3] ${i < 3 ? "lg:col-span-2" : "lg:col-span-3"}`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className={`w-14 h-14 shrink-0 rounded-full flex items-center justify-center ${t.tile}`}>
                          <Icon className="w-6 h-6" strokeWidth={1.6} />
                        </div>
                        <span className={`text-xs font-semibold px-3 py-1.5 rounded-full ${t.pill}`}>
                          {post.category}
                        </span>
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 shrink-0">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className={`font-bold text-[#0a1f44] text-lg leading-snug mb-3`}>
                      {post.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed mb-5">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200/70 flex items-center justify-between text-xs">
                    <span className="inline-flex items-center gap-2 text-slate-400">
                      <Calendar className="w-4 h-4 text-[#0b5bd3]" />
                      {post.date}
                    </span>
                    <span className="font-semibold text-[#0b4a99] group-hover:text-[#0b5bd3] flex items-center gap-1.5">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. CALL TO ACTION: READY TO PARTNER */}
      <section className="relative overflow-hidden py-16 lg:py-20 bg-gradient-to-br from-[#0a1f44] via-black to-black">
        <div className="pointer-events-none absolute -top-32 -left-40 h-[420px] w-[420px] rounded-full bg-sky-500/10 blur-3xl" />
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
              <span className="block text-sky-400">Incredible Medicare?</span>
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
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-400 text-[#0a1f44] font-semibold text-sm sm:text-base rounded-[4px] shadow-[0_10px_28px_rgba(251,191,36,0.25)] transition hover:brightness-105 cursor-pointer"
              >
                <FileText className="w-5 h-5" />
                <span>Get Instant Price List &amp; Terms</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href={`tel:+${COMPANY_INFO.whatsapp}`}
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-semibold text-sm sm:text-base rounded-[4px] border border-white/15 backdrop-blur transition"
              >
                <PhoneCall className="w-5 h-5 text-sky-400" />
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
                <div className="w-14 h-14 shrink-0 text-sky-400 flex items-center justify-center">
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
