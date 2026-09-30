"use client";

import { AmbientVideo } from "@/components/motion/AmbientVideo";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Award,
  Building2,
  Package,
  ShieldCheck,
  FileText,
  Truck,
  ArrowRight,
  ChevronRight,
  Factory,
  Handshake,
  Boxes,
  BadgePercent,
  Tags,
  Gauge,
  MapPinned,
  FlaskConical,
  Globe2,
  Users,
  MapPin,
  MessageSquareText,
} from "lucide-react";
import EnquiryModal from "@/components/EnquiryModal";
import { StepFlow } from "@/components/motion/ProcessFlow";
import { CountUp } from "@/components/motion/CountUp";

const PRIMARY_BTN =
  "inline-flex items-center gap-3 rounded-[4px] bg-[#0d9488] hover:bg-[#0f766e] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(13,148,136,0.35)] transition cursor-pointer";
const OUTLINE_BTN =
  "inline-flex items-center gap-3 rounded-[4px] border border-[#0d9488] bg-white/70 hover:bg-white px-7 py-3.5 text-sm font-semibold text-[#0d9488] transition cursor-pointer";
const GLASS =
  "rounded-[4px] border border-white bg-white/80 backdrop-blur shadow-[0_10px_40px_rgba(13,148,136,0.10)]";

function Eyebrow({
  children,
  center,
  dark,
}: {
  children: React.ReactNode;
  center?: boolean;
  /** Amber-on-navy variant for CTA sections with a dark background. */
  dark?: boolean;
}) {
  const lineClass = dark ? "bg-amber-400/40" : "bg-[#0d9488]";
  const textClass = dark ? "text-amber-400" : "text-[#0d9488]";
  return (
    <div className={`flex items-center gap-4 ${center ? "justify-center" : ""}`}>
      <span className={`h-px w-10 ${lineClass}`} />
      <span className={`${textClass} text-xs font-bold uppercase tracking-[0.14em]`}>
        {children}
      </span>
      {center && <span className={`h-px w-10 ${lineClass}`} />}
    </div>
  );
}

function StatsBar({
  items,
}: {
  items: { icon: React.ElementType; a: string; b: string }[];
}) {
  return (
    <div className={`${GLASS} grid grid-cols-2 gap-y-6 px-4 py-6 lg:grid-cols-4 lg:gap-y-0`}>
      {items.map((st, i) => (
        <div
          key={st.a}
          className={`flex items-center justify-center gap-4 px-3 ${i > 0 ? "lg:border-l lg:border-slate-200" : ""}`}
        >
          <st.icon className="w-10 h-10 shrink-0 text-[#0d9488]" strokeWidth={1.4} />
          <div className="leading-tight">
            <div className="text-2xl font-extrabold text-[#0d9488]"><CountUp value={st.a} /></div>
            <div className="mt-1 text-sm text-slate-500">{st.b}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function ServicesPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const handleOpenModal = (serviceName: string) => {
    setSelectedService(serviceName);
    setModalOpen(true);
  };

  return (
    <div className="w-full bg-white text-slate-900">
      {/* Hero */}
      <section className="relative flex items-center overflow-hidden bg-gradient-to-br from-[#f0fdfa] via-[#f0fdfa] to-[#ccfbf1] lg:min-h-[max(600px,42vw)]">
        <Image
          src="/bg3.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="pointer-events-none select-none object-cover object-right opacity-30 lg:opacity-100"
        />
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-14">
          <div className="max-w-2xl lg:max-w-[52%]">
            <Eyebrow>Our Services</Eyebrow>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-[2.6rem] xl:text-[3.25rem] font-extrabold text-[#0b192c] tracking-tight leading-[1.08]">
              PCD Pharma Franchise &amp;{" "}
              <span className="text-[#0d9488]">Third-Party Contract Manufacturing</span>
            </h1>
            <p className="mt-5 text-slate-600 text-base leading-relaxed max-w-xl">
              Incredible Medicare delivers comprehensive pharmaceutical solutions: from district-wise monopoly PCD franchises to full-scale WHO-GMP contract manufacturing for emerging and established healthcare brands.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => handleOpenModal("PCD Pharma Franchise Monopoly Rights")}
                className={PRIMARY_BTN}
              >
                Apply for Franchise
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => handleOpenModal("Third-Party Contract Manufacturing")}
                className={OUTLINE_BTN}
              >
                Get Manufacturing Quote
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 sm:flex sm:flex-wrap sm:items-center sm:gap-y-4 lg:flex-nowrap lg:w-[min(58vw,54rem)]">
              {[
                { icon: ShieldCheck, a: "WHO-GMP", b: "Certified Plant" },
                { icon: Boxes, a: "650+", b: "DCGI Formulations" },
                { icon: Truck, a: "24–48h", b: "Pan-India Dispatch" },
                { icon: MapPinned, a: "District-Wise", b: "Monopoly Rights" },
              ].map((f, i) => (
                <div
                  key={f.a}
                  className={`flex items-center gap-2.5 whitespace-nowrap ${i > 0 ? "sm:border-l sm:border-[#99f6e4] sm:pl-4" : ""}`}
                >
                  <f.icon className="w-7 h-7 shrink-0 text-[#0d9488]" strokeWidth={1.5} />
                  <div className="leading-tight">
                    <div className="text-[13px] font-bold text-[#0b192c]">{f.a}</div>
                    <div className="text-xs text-slate-500">{f.b}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating cards (desktop) */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none">
          {[
            { icon: Factory, a: "Contract Manufacturing", b: "End-to-end, WHO-GMP backed", pos: "right-[5%] top-[13%]" },
            { icon: Handshake, a: "Trusted Franchise Network", b: "Across India & Global Markets", pos: "left-[57%] top-[55%]" },
            { icon: ShieldCheck, a: "Quality You Can Trust", b: "Committed to Better Lives", pos: "right-[3%] bottom-[12%]" },
          ].map((c) => (
            <div
              key={c.a}
              className={`absolute ${c.pos} w-[260px] xl:w-[290px] flex items-center gap-4 rounded-[4px] border border-white bg-white/80 backdrop-blur px-5 py-4 shadow-[0_12px_40px_rgba(13,148,136,0.15)]`}
            >
              <span className="w-14 h-14 shrink-0 rounded-full bg-[#ccfbf1] text-[#0d9488] flex items-center justify-center">
                <c.icon className="w-7 h-7" strokeWidth={1.5} />
              </span>
              <div className="leading-snug">
                <div className="text-sm font-bold text-[#0b192c]">{c.a}</div>
                <div className="text-xs text-slate-500 mt-0.5">{c.b}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 1. Third Party Manufacturing */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f0fdfa] to-[#f0fdfa] py-16 lg:py-20">
        <div className="pointer-events-none absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-[#ccfbf1]/60 blur-3xl" />
        <div className="pointer-events-none absolute top-1/3 -left-40 h-[420px] w-[420px] rounded-full bg-[#ccfbf1]/50 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-7">
              <Eyebrow>Contract Manufacturing</Eyebrow>
              <h2 className="mt-4 text-3xl sm:text-4xl xl:text-5xl font-extrabold text-[#0b192c] tracking-tight leading-[1.1]">
                Third-Party Pharmaceutical{" "}
                <span className="block text-[#0d9488]">Manufacturing Services</span>
              </h2>
              <p className="mt-5 text-slate-600 text-[15px] leading-relaxed max-w-2xl">
                We offer reliable, end-to-end third-party manufacturing backed by our WHO-GMP certified production facility. Whether you require solid orals (tablets, capsules), liquid syrups, sterile injectables, or topical formulations, we deliver guaranteed quality, rapid turnaround, and competitive commercial pricing.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  { icon: BadgePercent, a: "Cost-Effective Production", b: "Eliminate manufacturing capex and operational overheads while maintaining strict global compliance." },
                  { icon: Tags, a: "Custom Branding & Packaging", b: "Full private labeling in Alu-Alu, Blister, Amber Glass, and tamper-evident mono cartons." },
                  { icon: Boxes, a: "Broad Formulation Scope", b: "Over 650+ approved DCGI formulations spanning all critical therapeutic areas." },
                  { icon: Gauge, a: "Timely Dispatch & Bulk Scale", b: "Automated high-capacity lines ensuring on-time batch release and uninterrupted supply chains." },
                ].map((r) => (
                  <div key={r.a} className={`${GLASS} flex items-center gap-4 px-5 py-3.5`}>
                    <r.icon className="w-7 h-7 shrink-0 text-[#0d9488]" strokeWidth={1.5} />
                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-bold text-[#0b192c]">{r.a}</div>
                      <div className="text-xs text-slate-500 mt-0.5">{r.b}</div>
                    </div>
                    <ChevronRight className="w-4 h-4 shrink-0 text-[#0d9488]" />
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <button
                  type="button"
                  onClick={() => handleOpenModal("Third-Party Contract Manufacturing")}
                  className={PRIMARY_BTN}
                >
                  Request Third-Party Manufacturing Quotation
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right: photo + navy credentials card */}
            <div className="lg:col-span-5 relative">
              <div className="relative">
                <div className="relative h-[280px] sm:h-[340px] overflow-hidden rounded-[4px] shadow-[0_16px_50px_rgba(13,148,136,0.18)]">
                  <Image
                    src="/herobg.png"
                    alt="Pharmaceutical manufacturing line"
                    fill
                    sizes="(min-width:1024px) 40vw, 100vw"
                    className="object-cover origin-right scale-125"
                    style={{ objectPosition: "90% 45%" }}
                  />
                </div>
                <div className="absolute top-6 -right-2 lg:-right-6 flex items-center gap-4 rounded-[4px] border border-white bg-white/90 backdrop-blur px-5 py-4 shadow-[0_12px_40px_rgba(13,148,136,0.18)]">
                  <Factory className="w-9 h-9 shrink-0 text-[#0d9488]" strokeWidth={1.5} />
                  <div className="leading-snug">
                    <div className="text-sm font-bold text-[#0b192c]">WHO-GMP Certified Plant</div>
                    <div className="text-xs text-slate-500">Backed by global standards.</div>
                  </div>
                </div>
              </div>

              <div className="relative -mt-10 lg:-mr-4 rounded-[4px] bg-[#0b192c] text-white p-7 sm:p-8 shadow-[0_20px_50px_rgba(11,25,44,0.4)]">
                <span className="text-teal-400 text-xs font-bold uppercase tracking-[0.14em]">
                  Manufacturing Credentials
                </span>
                <h3 className="mt-3 text-xl sm:text-2xl font-bold leading-snug">
                  SIDCO Industrial Complex, <span className="text-teal-400">Kathua</span>
                </h3>
                <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
                  {[
                    "WHO-GMP & ISO 9001:2015 Approved Plant",
                    "Class 10,000 (ISO 7) & Class 100,000 Cleanrooms",
                    "State-of-the-art HPLC and Spectroscopy Testing",
                    "Batch Release Certificates & COA with Every Order",
                    "Comprehensive Legal & DCGI Documentation Assistance",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-3">
                      <ShieldCheck className="w-4 h-4 shrink-0 text-teal-400 mt-0.5" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 pt-4 border-t border-white/10 flex items-center gap-3 text-xs text-slate-300">
                  <Image src="/logo.png" alt="Incredible Medicare" width={36} height={36} className="object-contain" />
                  <span className="flex-1 leading-snug">
                    Direct coordination from our Corporate HQ, Unicity Business Park.
                  </span>
                  <span className="flex items-center gap-1.5 whitespace-nowrap">
                    <MapPin className="w-4 h-4 text-teal-400" />
                    Zirakpur
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <StatsBar
              items={[
                { icon: Boxes, a: "650+", b: "Approved Formulations" },
                { icon: Building2, a: "2", b: "Strategic Locations" },
                { icon: ShieldCheck, a: "100%", b: "cGMP Compliant" },
                { icon: Truck, a: "24–48h", b: "Pan-India Dispatch" },
              ]}
            />
          </div>
        </div>
      </section>

      {/* 2. PCD Pharma Franchise */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f0fdfa] via-[#f6f9fe] to-[#f0fdfa] py-16 lg:py-20">
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-[400px] w-[400px] rounded-full bg-[#ccfbf1]/60 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left: support kit */}
            <div className="lg:col-span-5 order-2 lg:order-1 relative">
              <div className="relative h-[220px] sm:h-[260px] overflow-hidden rounded-[4px] shadow-[0_16px_50px_rgba(13,148,136,0.18)]">
                <Image
                  src="/herobg.png"
                  alt="Vial filling line"
                  fill
                  sizes="(min-width:1024px) 40vw, 100vw"
                  className="object-cover"
                  style={{ objectPosition: "85% 90%" }}
                />
              </div>
              <div className="absolute top-5 -left-2 lg:-left-6 flex items-center gap-4 rounded-[4px] border border-white bg-white/90 backdrop-blur px-5 py-4 shadow-[0_12px_40px_rgba(13,148,136,0.18)]">
                <Award className="w-9 h-9 shrink-0 text-[#0d9488]" strokeWidth={1.5} />
                <div className="leading-snug">
                  <div className="text-sm font-bold text-[#0b192c]">Franchise Support Kit</div>
                  <div className="text-xs text-slate-500">Free Promotional Inputs Included</div>
                </div>
              </div>

              <div className={`${GLASS} relative -mt-8 lg:-ml-4 p-6 sm:p-7 bg-white/95`}>
                <div className="space-y-2.5">
                  {[
                    ["Comprehensive Visual Aids", "Provided Free"],
                    ["Doctor Reminder Cards & LBLs", "Provided Free"],
                    ["MR Executive Bags & Catch Covers", "Provided Free"],
                    ["Visiting Cards & Prescription Pads", "Provided Free"],
                    ["Physician Promotional Samples", "Supported"],
                  ].map(([label, tag]) => (
                    <div
                      key={label}
                      className="flex items-center justify-between gap-3 rounded-[4px] border border-slate-100 bg-white px-4 py-3"
                    >
                      <span className="text-sm font-semibold text-[#0b192c]">{label}</span>
                      <span className="shrink-0 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
                        {tag}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-start gap-3 rounded-[4px] bg-[#f0fdfa] px-4 py-3.5 text-sm font-medium text-[#115e59]">
                  <ShieldCheck className="w-5 h-5 shrink-0 text-[#0d9488] mt-0.5" strokeWidth={1.7} />
                  Monopoly rights granted with formal legal authorization agreement for your district.
                </div>
              </div>
            </div>

            {/* Right: content */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <Eyebrow>Franchise Opportunity</Eyebrow>
              <h2 className="mt-4 text-3xl sm:text-4xl xl:text-5xl font-extrabold text-[#0b192c] tracking-tight leading-[1.1]">
                PCD Pharma Franchise –{" "}
                <span className="block text-[#0d9488]">Grow Your Business with Complete Monopoly</span>
              </h2>
              <p className="mt-5 text-slate-600 text-[15px] leading-relaxed max-w-2xl">
                Incredible Medicare invites pharma professionals, medical representatives, distributors, and entrepreneurs to become our exclusive franchise associates. We offer attractive net price rates, wide product availability, zero internal competition, and comprehensive promotional backing.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  { icon: MapPinned, a: "District-Wise Monopoly Rights", b: "Guaranteed exclusivity in your demarcated territory." },
                  { icon: Boxes, a: "Over 650+ Fast-Moving Formulations", b: "Antibiotics, Pain, Gastro, Derma, Neuro, Cardiac & Nutra." },
                  { icon: BadgePercent, a: "High Profit Margins", b: "Competitive commercial pricing allowing superior retail returns." },
                  { icon: Users, a: "Zero Minimum Quota Pressure", b: "Realistic, sustainable growth tailored to your local network." },
                  { icon: Truck, a: "Prompt 24-48h Pan-India Dispatch", b: "Fast logistics handling to prevent chemist stockouts." },
                ].map((p) => (
                  <div key={p.a} className={`${GLASS} flex items-center gap-4 px-5 py-3.5`}>
                    <p.icon className="w-7 h-7 shrink-0 text-[#0d9488]" strokeWidth={1.5} />
                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-bold text-[#0b192c]">{p.a}</div>
                      <div className="text-xs text-slate-500 mt-0.5">{p.b}</div>
                    </div>
                    <ChevronRight className="w-4 h-4 shrink-0 text-[#0d9488]" />
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <button
                  type="button"
                  onClick={() => handleOpenModal("PCD Pharma Franchise Monopoly Rights")}
                  className={PRIMARY_BTN}
                >
                  Apply for Territory Monopoly Rights
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Formulation R&D and Regulatory */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f0fdfa] via-[#f0fdfa] to-[#f0fdfa] py-16 lg:py-20">
        <div className="pointer-events-none absolute inset-x-0 top-0 hidden h-[460px] overflow-hidden lg:block [mask-image:linear-gradient(to_right,black_0,black_28%,transparent_44%,transparent_62%,black_82%)]">
          <Image src="/bg3.png" alt="" fill sizes="100vw" className="select-none object-cover object-top" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-14">
            <Eyebrow center>Technical Excellence</Eyebrow>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0b192c] tracking-tight">
              Formulation R&amp;D &amp;{" "}
              <span className="text-[#0d9488]">Regulatory Services</span>
            </h2>
            <div className="accent-bar mx-auto mt-4"></div>
            <p className="mt-5 text-slate-600 text-sm sm:text-base leading-relaxed">
              Supporting your business with end-to-end scientific, analytical, and documentation expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                n: "01",
                icon: FlaskConical,
                title: "Analytical Quality Assurance",
                desc: "Method development, assay verification, impurity profiling, and accelerated stability studies in compliance with ICH and pharmacopeial guidelines.",
                pill: "ICH & Pharmacopeial Compliant",
                art: { url: "/bg3.png", size: "912px auto", pos: "-575px -115px" },
              },
              {
                n: "02",
                icon: FileText,
                title: "Regulatory Dossier Preparation",
                desc: "Full technical dossiers in eCTD and ACTD formats, Certificate of Pharmaceutical Products (COPP), and Free Sale Documentation for international registration.",
                pill: "Global Registration Support",
                art: { url: "/bg2.png", size: "890px auto", pos: "-650px -10px" },
              },
              {
                n: "03",
                icon: Package,
                title: "Custom Packaging Innovation",
                desc: "Creative design assistance, multilingual carton adaptation, anti-counterfeiting holographic integration, and tamper-evident sealing solutions.",
                pill: "Tamper-Evident Solutions",
                art: { url: "/herobg.png", size: "574px auto", pos: "-343px -130px" },
              },
            ].map((c) => (
              <div key={c.title} className={`${GLASS} relative overflow-hidden p-7 flex flex-col`}>
                <span className="absolute right-6 top-5 text-5xl font-extrabold text-[#0d9488]/10">{c.n}</span>
                <c.icon className="w-10 h-10 text-[#0d9488]" strokeWidth={1.5} />
                <h3 className="mt-5 text-2xl font-extrabold text-[#0b192c]">{c.title}</h3>
                <div className="mt-2 h-[3px] w-8 rounded-full bg-[#0d9488]" />
                <p className="mt-4 text-sm text-slate-600 leading-relaxed lg:max-w-[64%]">{c.desc}</p>
                <span className="relative z-10 mt-auto pt-6 self-start">
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#99f6e4] bg-white/80 px-4 py-2 text-xs font-semibold text-[#0f766e]">
                    {c.pill}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </span>
                <div
                  className="pointer-events-none absolute bottom-0 right-0 hidden h-[230px] w-[230px] rounded-tl-full opacity-90 lg:block"
                  style={{
                    backgroundImage: `url(${c.art.url})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: c.art.size,
                    backgroundPosition: c.art.pos,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership journey */}
      <StepFlow
        tone="from-[#f0fdfa] via-[#f0fdfa] to-[#f0fdfa]"
        eyebrow="Getting Started"
        icon={Handshake}
        title="Your Partnership,"
        highlight="Step by Step"
        intro="From first enquiry to first shipment, here is how we onboard PCD franchise and contract manufacturing partners."
        steps={[
          { icon: MessageSquareText, title: "Share Your Requirement", desc: "Tell us your territory, product range or manufacturing brief." },
          { icon: MapPinned, title: "Territory & Product Finalisation", desc: "We confirm monopoly availability and shortlist the right formulations." },
          { icon: FileText, title: "Agreement & Documentation", desc: "Terms, licences and regulatory paperwork are formalised." },
          { icon: Boxes, title: "Samples & Batch Approval", desc: "Approve samples, artwork and packaging before commercial batches." },
          { icon: Truck, title: "Supply & Launch Support", desc: "Dispatch, promotional material and ongoing partner support." },
        ]}
      />

      {/* 4. CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0b192c] via-black to-black py-16 lg:py-20">
        <AmbientVideo src="/hero-5.mp4" className="opacity-35" />
        <div
          className="pointer-events-none absolute -left-32 top-4 hidden h-[420px] w-[420px] rounded-full border-[14px] border-white/10 opacity-30 lg:block xl:-left-20"
          style={{
            backgroundImage: "url(/herobg.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "1053px auto",
            backgroundPosition: "-630px -239px",
          }}
        />
        <div
          className="pointer-events-none absolute -right-32 top-10 hidden h-[420px] w-[420px] rounded-full border-[14px] border-white/10 opacity-30 lg:block xl:-right-20"
          style={{
            backgroundImage: "url(/bg3.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "1666px auto",
            backgroundPosition: "-1050px -126px",
          }}
        />
        <div className="pointer-events-none absolute -bottom-24 right-1/4 h-64 w-96 rounded-full bg-amber-400/10 blur-3xl" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <Eyebrow center dark>Partner for a Healthier Tomorrow</Eyebrow>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.1]">
            Ready to Grow with{" "}
            <span className="block text-teal-400">Incredible Medicare?</span>
          </h2>
          <p className="mt-5 text-slate-300 text-sm sm:text-base leading-relaxed">
            Tell us about your requirement and our team will get back within one working day with rates, terms, and complete support.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            <button type="button" onClick={() => handleOpenModal("")} className={PRIMARY_BTN}>
              <Handshake className="w-5 h-5" />
              Request a Quote
              <ArrowRight className="w-4 h-4" />
            </button>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-[4px] border border-[#0d9488] bg-white hover:bg-slate-50 px-7 py-3.5 text-sm font-semibold text-[#0d9488] transition cursor-pointer"
            >
              <MessageSquareText className="w-5 h-5" />
              Contact Us Directly
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 mt-12">
          <div className="grid grid-cols-2 gap-y-6 lg:grid-cols-4 lg:gap-y-0">
            {[
              { icon: Boxes, a: "650+", b: "Approved Products", blue: true },
              { icon: Globe2, a: "Pan-India", b: "Distribution Network" },
              { icon: Handshake, a: "Monopoly", b: "Franchise Rights", blue: true },
              { icon: ShieldCheck, a: "Quality Assured", b: "WHO-GMP & ISO 9001:2015" },
            ].map((f, i) => (
              <div
                key={f.a}
                className={`flex items-center justify-center gap-3 px-3 ${i > 0 ? "lg:border-l lg:border-white/10" : ""}`}
              >
                <f.icon className="w-9 h-9 shrink-0 text-teal-400" strokeWidth={1.4} />
                <div className="leading-tight">
                  <div className={`text-base font-bold ${f.blue ? "text-teal-400" : "text-white"}`}>{f.a}</div>
                  <div className="mt-0.5 text-xs text-slate-400">{f.b}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialProduct={selectedService}
      />
    </div>
  );
}
