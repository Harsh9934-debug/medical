"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Pill,
  Droplets,
  Brain,
  HeartPulse,
  Leaf,
  Layers,
  Boxes,
  Users,
  MapPinned,
  Handshake,
  ShieldCheck,
  FileText,
  Stethoscope,
  MessageSquareText,
} from "lucide-react";
import { DIVISIONS } from "@/data/company";
import EnquiryModal from "@/components/EnquiryModal";
import { Reveal } from "@/components/motion/Reveal";
import { CountUp } from "@/components/motion/CountUp";

const PRIMARY_BTN =
  "inline-flex items-center justify-center gap-3 rounded-[4px] bg-[#0d9488] hover:bg-[#0f766e] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(13,148,136,0.35)] transition cursor-pointer";
const OUTLINE_BTN =
  "inline-flex items-center justify-center gap-3 rounded-[4px] border border-[#0d9488] bg-white/70 hover:bg-white px-7 py-3.5 text-sm font-semibold text-[#0d9488] transition cursor-pointer";
const GLASS =
  "rounded-[4px] border border-white bg-white/80 backdrop-blur shadow-[0_10px_40px_rgba(13,148,136,0.10)]";

const THEMES = [
  { icon: Pill, tone: "text-[#0d9488]", pill: "bg-[#f0fdfa] text-[#0d9488]", card: "from-white/90 to-[#f0fdfa]/70", deco: "text-[#0d9488]/10", check: "text-[#0d9488]" },
  { icon: Droplets, tone: "text-emerald-600", pill: "bg-emerald-50 text-emerald-700", card: "from-white/90 to-emerald-50/70", deco: "text-emerald-500/10", check: "text-emerald-600" },
  { icon: Brain, tone: "text-violet-600", pill: "bg-violet-50 text-violet-700", card: "from-white/90 to-violet-50/70", deco: "text-violet-500/10", check: "text-violet-600" },
  { icon: HeartPulse, tone: "text-orange-600", pill: "bg-orange-100/70 text-orange-700", card: "from-orange-50/80 to-rose-50/60", deco: "text-orange-500/10", check: "text-orange-500" },
  { icon: Leaf, tone: "text-[#0d9488]", pill: "bg-[#f0fdfa] text-[#0d9488]", card: "from-white/90 to-teal-50/70", deco: "text-[#0d9488]/10", check: "text-[#0d9488]" },
];

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

export default function DivisionsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDivision, setSelectedDivision] = useState("");

  const handleEnquireDivision = (divName: string) => {
    setSelectedDivision(divName);
    setModalOpen(true);
  };

  return (
    <div className="w-full bg-white text-slate-900">
      {/* Hero */}
      <section className="relative flex items-center overflow-hidden bg-gradient-to-br from-[#f0fdfa] via-[#f0fdfa] to-[#ccfbf1] lg:min-h-[max(580px,40vw)]">
        <div className="pointer-events-none absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full bg-[#ccfbf1]/60 blur-3xl" />

        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[46%] overflow-hidden rounded-bl-[9rem] shadow-[0_20px_60px_rgba(13,148,136,0.25)] lg:block">
          <Image
            src="/infra-packs.jpg"
            alt="Pharmaceutical tablets and capsules in blister packs"
            fill
            priority
            sizes="46vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d9488]/25 via-transparent to-transparent" />
        </div>
        <div className="pointer-events-none absolute right-[42%] top-[18%] hidden h-24 w-24 rounded-full border-[10px] border-[#99f6e4]/70 lg:block" />

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-14">
          <div className="max-w-2xl lg:max-w-[50%]">
            <Eyebrow>Specialized Divisions</Eyebrow>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-[2.6rem] xl:text-[3.25rem] font-extrabold text-[#0b192c] tracking-tight leading-[1.08]">
              Specialized{" "}
              <span className="text-[#0d9488]">Pharmaceutical Divisions</span>
            </h1>
            <p className="mt-5 text-slate-600 text-base leading-relaxed max-w-xl">
              Incredible Medicare features targeted business divisions, each built with deep therapeutic focus, dedicated promotional inputs, and clinical efficacy to empower franchise associates and prescribing clinicians.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => handleEnquireDivision("Multi-Division Franchise Partnership")}
                className={PRIMARY_BTN}
              >
                Request Multi-Division Portfolio
                <ArrowRight className="w-4 h-4" />
              </button>
              <a href="#divisions" className={OUTLINE_BTN}>
                Explore Divisions
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 sm:flex sm:flex-wrap sm:items-center sm:gap-y-4">
              {[
                { icon: Layers, a: "5", b: "Focused Divisions" },
                { icon: Boxes, a: "650+", b: "Formulations" },
                { icon: MapPinned, a: "District-Wise", b: "Monopoly Rights" },
              ].map((f, i) => (
                <div
                  key={f.a}
                  className={`flex items-center gap-2.5 whitespace-nowrap ${i > 0 ? "sm:border-l sm:border-[#99f6e4] sm:pl-5" : ""}`}
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

        <div className="hidden lg:block absolute inset-0 pointer-events-none">
          {[
            { icon: Pill, a: "250+ Formulations", b: "General Medicine", pos: "right-[5%] top-[12%]" },
            { icon: HeartPulse, a: "85+ Formulations", b: "Cardio & Diabetes", pos: "left-[52%] top-[52%]" },
            { icon: Brain, a: "75+ Formulations", b: "Neuro-Psychiatry", pos: "right-[3%] bottom-[11%]" },
          ].map((c) => (
            <div
              key={c.a}
              className={`absolute ${c.pos} w-[250px] xl:w-[280px] flex items-center gap-4 rounded-[4px] border border-white bg-white/85 backdrop-blur px-5 py-4 shadow-[0_12px_40px_rgba(13,148,136,0.18)]`}
            >
              <c.icon className="w-9 h-9 shrink-0 text-[#0d9488]" strokeWidth={1.5} />
              <div className="leading-snug">
                <div className="text-sm font-bold text-[#0b192c]">{c.a}</div>
                <div className="text-xs text-slate-500 mt-0.5">{c.b}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Divisions Showcase */}
      <section
        id="divisions"
        className="relative overflow-hidden bg-gradient-to-b from-[#f0fdfa] via-[#f0fdfa] to-[#f0fdfa] py-16 lg:py-20 scroll-mt-24"
      >
        <div className="pointer-events-none absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-[#ccfbf1]/60 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 -left-40 h-[420px] w-[420px] rounded-full bg-[#ccfbf1]/50 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-14">
            <Eyebrow center>Focused Market Verticals</Eyebrow>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0b192c] tracking-tight">
              Five Divisions, One{" "}
              <span className="text-[#0d9488]">Trusted Partner</span>
            </h2>
            <div className="accent-bar mx-auto mt-4"></div>
          </div>

          <div className="space-y-6">
            {DIVISIONS.map((div, index) => {
              const t = THEMES[index % THEMES.length];
              const Icon = t.icon;
              const flip = index % 2 === 1;
              return (
                <div key={div.id} data-no-reveal className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Info */}
                  <Reveal
                    direction={flip ? "right" : "left"}
                    className={`relative overflow-hidden lg:col-span-8 rounded-[4px] border border-white bg-gradient-to-br ${t.card} p-7 sm:p-9 shadow-[0_10px_40px_rgba(13,148,136,0.10)] ${flip ? "lg:order-2" : ""}`}
                  >
                    <Icon
                      className={`animate-float-slow pointer-events-none absolute -bottom-8 -right-8 h-56 w-56 ${t.deco}`}
                      strokeWidth={1}
                    />
                    <span className="absolute right-7 top-5 text-5xl font-extrabold text-[#0d9488]/10">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="relative">
                      <div className="flex flex-wrap items-center gap-3">
                        <Icon className={`w-10 h-10 ${t.tone}`} strokeWidth={1.5} />
                        <span className={`rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-wider ${t.pill}`}>
                          {div.category}
                        </span>
                        <span className="text-xs font-semibold text-slate-500">
                          <CountUp value={div.productCount} />
                        </span>
                      </div>

                      <h3 className="mt-5 text-2xl sm:text-3xl font-extrabold text-[#0b192c] tracking-tight">
                        {div.name}
                      </h3>
                      <div className="mt-1.5 text-sm font-semibold text-[#0d9488]">
                        {div.tagline}
                      </div>
                      <div className="mt-3 h-[3px] w-8 rounded-full bg-[#0d9488]" />

                      <p className="mt-4 text-[15px] text-slate-600 leading-relaxed max-w-2xl">
                        {div.description}
                      </p>

                      <div className="mt-6 border-t border-slate-200/70 pt-5">
                        <div className="text-xs font-bold text-[#0b192c] uppercase tracking-[0.12em] mb-3">
                          Key Therapeutic Focus Areas
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                          {div.highlights.map((item) => (
                            <div key={item} className="flex items-center gap-2.5 text-sm text-slate-700">
                              <CheckCircle2 className={`w-[18px] h-[18px] shrink-0 ${t.check}`} strokeWidth={1.8} />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Reveal>

                  {/* Actions */}
                  <Reveal
                    direction={flip ? "left" : "right"}
                    delay={0.12}
                    className={`lg:col-span-4 relative overflow-hidden rounded-[4px] bg-gradient-to-br from-[#042f2e] via-[#0b192c] to-[#115e59] text-white p-7 sm:p-8 shadow-[0_20px_50px_rgba(11,25,44,0.3)] flex flex-col ${flip ? "lg:order-1" : ""}`}
                  >
                    <Handshake className="pointer-events-none absolute -bottom-8 -right-8 h-48 w-48 text-white/5" strokeWidth={1} />
                    <div className="relative flex flex-col h-full">
                      <span className="text-teal-400 text-xs font-bold uppercase tracking-[0.14em]">
                        Franchise &amp; Product Inquiry
                      </span>
                      <h4 className="mt-3 text-xl font-bold leading-snug">
                        Partner with the <span className="text-teal-400">{div.category}</span> division
                      </h4>
                      <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                        Monopoly marketing rights and promotional material kits currently available for this division.
                      </p>
                      <div className="mt-auto pt-6 space-y-3">
                        <button
                          type="button"
                          onClick={() => handleEnquireDivision(`${div.name} (Franchise Monopoly)`)}
                          className="flex w-full items-center justify-center gap-3 rounded-[4px] bg-[#0d9488] hover:bg-[#14b8a6] px-6 py-3.5 text-sm font-semibold text-white transition cursor-pointer"
                        >
                          Apply for Division Franchise
                          <ArrowRight className="w-4 h-4" />
                        </button>
                        <Link
                          href="/products"
                          className="flex w-full items-center justify-center gap-3 rounded-[4px] border border-white/25 hover:bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition"
                        >
                          View Division Products
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Operational Synergy */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f0fdfa] to-[#f0fdfa] py-16 lg:py-20">
        <div className="pointer-events-none absolute -top-24 left-1/3 h-72 w-[500px] rounded-full bg-[#ccfbf1]/50 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6">
              <Eyebrow>Operational Synergy</Eyebrow>
              <h2 className="mt-4 text-3xl sm:text-4xl xl:text-5xl font-extrabold text-[#0b192c] tracking-tight leading-[1.1]">
                Why Multi-Division Strategy{" "}
                <span className="block text-[#0d9488]">Accelerates Your ROI</span>
              </h2>
              <p className="mt-5 text-slate-600 text-[15px] leading-relaxed max-w-xl">
                By segmenting specialized therapies into focused divisions, Incredible Medicare allows distributors to establish deep doctor-prescriber relationships with distinct promotional material, visual aids, and tailored clinical monographs.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => handleEnquireDivision("Multi-Division Franchise Partnership")}
                  className={PRIMARY_BTN}
                >
                  Request Multi-Division Portfolio
                  <ArrowRight className="w-4 h-4" />
                </button>
                <Link href="/contact" className={OUTLINE_BTN}>
                  Contact Commercial Desk
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: Stethoscope, a: "Deep Doctor Relationships", b: "Distinct promotional material for every prescriber segment." },
                { icon: FileText, a: "Tailored Clinical Monographs", b: "Division-specific literature and visual aids." },
                { icon: Users, a: "Focused Franchise Teams", b: "Build specialist field teams around a single therapy." },
                { icon: ShieldCheck, a: "One Quality Standard", b: "Every division backed by WHO-GMP & ISO 9001:2015." },
              ].map((r) => (
                <div key={r.a} className={`${GLASS} p-5`}>
                  <r.icon className="w-8 h-8 text-[#0d9488]" strokeWidth={1.5} />
                  <h4 className="mt-3 text-sm font-bold text-[#0b192c]">{r.a}</h4>
                  <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">{r.b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0b192c] via-black to-black py-16 lg:py-20">
        <div className="pointer-events-none absolute -left-32 top-4 hidden h-[420px] w-[420px] overflow-hidden rounded-full border-[14px] border-white/10 opacity-30 lg:block xl:-left-20">
          <Image src="/infra-micro.jpg" alt="" fill sizes="420px" className="object-cover" style={{ objectPosition: "50% 40%" }} />
        </div>
        <div className="pointer-events-none absolute -right-32 top-10 hidden h-[420px] w-[420px] overflow-hidden rounded-full border-[14px] border-white/10 opacity-30 lg:block xl:-right-20">
          <Image src="/infra-lab.jpg" alt="" fill sizes="420px" className="object-cover" style={{ objectPosition: "40% 50%" }} />
        </div>
        <div className="pointer-events-none absolute -bottom-24 right-1/4 h-64 w-96 rounded-full bg-amber-400/10 blur-3xl" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <Eyebrow center dark>Partner for a Healthier Tomorrow</Eyebrow>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.1]">
            Build Your Franchise Across{" "}
            <span className="block text-teal-400">Every Therapeutic Division</span>
          </h2>
          <p className="mt-5 text-slate-300 text-sm sm:text-base leading-relaxed">
            Talk to our commercial desk about territory availability, division-wise portfolios, and promotional support for your district.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => handleEnquireDivision("Multi-Division Franchise Partnership")}
              className={PRIMARY_BTN}
            >
              <Handshake className="w-5 h-5" />
              Request Multi-Division Portfolio
              <ArrowRight className="w-4 h-4" />
            </button>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-[4px] border border-[#0d9488] bg-white hover:bg-slate-50 px-7 py-3.5 text-sm font-semibold text-[#0d9488] transition cursor-pointer"
            >
              <MessageSquareText className="w-5 h-5" />
              Contact Commercial Desk
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 mt-12">
          <div className="grid grid-cols-2 gap-y-6 lg:grid-cols-4 lg:gap-y-0">
            {[
              { icon: Layers, a: "5", b: "Specialized Divisions", blue: true },
              { icon: Boxes, a: "650+", b: "Approved Formulations" },
              { icon: Users, a: "850+", b: "Franchise Associates", blue: true },
              { icon: MapPinned, a: "28+", b: "States Covered" },
            ].map((f, i) => (
              <div
                key={f.b}
                className={`flex items-center justify-center gap-3 px-3 ${i > 0 ? "lg:border-l lg:border-white/10" : ""}`}
              >
                <f.icon className="w-9 h-9 shrink-0 text-teal-400" strokeWidth={1.4} />
                <div className="leading-tight">
                  <div className={`text-xl font-extrabold ${f.blue ? "text-teal-400" : "text-white"}`}>{f.a}</div>
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
        initialProduct={selectedDivision}
      />
    </div>
  );
}
