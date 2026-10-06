"use client";

import { AmbientVideo } from "@/components/motion/AmbientVideo";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Building2,
  Layers,
  ThermometerSnowflake,
  Activity,
  ArrowRight,
  ChevronRight,
  Wind,
  Droplets,
  Route,
  Cog,
  ScanEye,
  Microscope,
  FlaskConical,
  Gauge,
  Factory,
  Boxes,
  Truck,
  MapPin,
  MessageSquareText,
  FileCheck,
  Package,
  Cpu,
  Lightbulb,
  Handshake,
} from "lucide-react";
import EnquiryModal from "@/components/EnquiryModal";
import { Conveyor } from "@/components/motion/Conveyor";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

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

export default function InfrastructurePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="w-full bg-white text-slate-900">
      {/* Hero */}
      <section className="relative flex items-center overflow-hidden bg-gradient-to-br from-[#f0fdfa] via-[#f0fdfa] to-[#ccfbf1] lg:min-h-[max(600px,42vw)]">
        <div className="pointer-events-none absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full bg-[#ccfbf1]/60 blur-3xl" />

        {/* Photo panel */}
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[46%] overflow-hidden rounded-bl-[9rem] shadow-[0_20px_60px_rgba(13,148,136,0.25)] lg:block">
          <Image
            src="/infra-qc.jpg"
            alt="Quality control analyst pipetting samples"
            fill
            priority
            sizes="46vw"
            className="object-cover"
            style={{ objectPosition: "60% 50%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d9488]/25 via-transparent to-transparent" />
        </div>
        <div className="pointer-events-none absolute right-[42%] top-[18%] hidden h-24 w-24 rounded-full border-[10px] border-[#99f6e4]/70 lg:block" />

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-14">
          <div className="max-w-2xl lg:max-w-[50%]">
            <Eyebrow>Infrastructure</Eyebrow>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-[2.6rem] xl:text-[3.25rem] font-extrabold text-[#0b192c] tracking-tight leading-[1.08]">
              Advanced Manufacturing &amp;{" "}
              <span className="text-[#0d9488]">Quality Infrastructure</span>
            </h1>
            <p className="mt-5 text-slate-600 text-base leading-relaxed max-w-xl">
              Our state-of-the-art pharmaceutical complex operates under WHO-GMP compliance, equipped with computerized HVAC environmental controls, automated high-speed packaging, and dedicated analytical laboratories.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <button type="button" onClick={() => setModalOpen(true)} className={PRIMARY_BTN}>
                Inquire for Plant Audit
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link href="/contact" className={OUTLINE_BTN}>
                Visit Headquarters
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 sm:flex sm:flex-wrap sm:items-center sm:gap-y-4">
              {[
                { icon: ShieldCheck, a: "WHO-GMP", b: "Compliant Plant" },
                { icon: Wind, a: "Class 10,000", b: "ISO 7 Cleanrooms" },
                { icon: FileCheck, a: "ISO 9001", b: "Certified" },
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

        {/* Floating cards */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none">
          {[
            { icon: Gauge, a: "70 Million+", b: "Annual Tablet Capacity", pos: "right-[5%] top-[12%]" },
            { icon: Wind, a: "HEPA Filtered Air", b: "0.3-micron terminal filters", pos: "left-[52%] top-[52%]" },
            { icon: Microscope, a: "GLP Compliant QC Lab", b: "IP, BP & USP verified", pos: "right-[3%] bottom-[11%]" },
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

      {/* Plant Architecture */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f0fdfa] to-[#f0fdfa] py-16 lg:py-20">
        <div className="pointer-events-none absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-[#ccfbf1]/60 blur-3xl" />
        <div className="pointer-events-none absolute top-1/3 -left-40 h-[420px] w-[420px] rounded-full bg-[#ccfbf1]/50 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-7">
              <Eyebrow>Plant Architecture</Eyebrow>
              <h2 className="mt-4 text-3xl sm:text-4xl xl:text-5xl font-extrabold text-[#0b192c] tracking-tight leading-[1.1]">
                Zero Cross-Contamination{" "}
                <span className="block text-[#0d9488]">Cleanroom Design</span>
              </h2>
              <p className="mt-5 text-slate-600 text-[15px] leading-relaxed max-w-2xl">
                The Incredible Medicare manufacturing facility is engineered in strict conformity with current Good Manufacturing Practices (cGMP) and WHO guidelines. Production areas feature progressive airlocks, dedicated supply/exhaust air filtration, and epoxy flooring to guarantee sterile integrity.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  { icon: Wind, a: "Class 10,000 (ISO 7) and Class 100,000 Cleanrooms", b: "Dedicated cleanroom production blocks." },
                  { icon: Layers, a: "Dedicated Air Handling Units (AHUs)", b: "With terminal 0.3-micron HEPA filters." },
                  { icon: Route, a: "Unidirectional Personnel & Material Flow", b: "Prevents any cross-contamination." },
                  { icon: Droplets, a: "Purified Water System", b: "Continuous loop recirculation (USP standard)." },
                  { icon: Cog, a: "Automatic Rotary Tablet Compression Presses", b: "With real-time weight monitoring." },
                  { icon: ScanEye, a: "Automated Blister & Alu-Alu Packaging Lines", b: "With optical vision checkers." },
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
            </div>

            {/* Right: photo + navy plant card */}
            <div className="lg:col-span-5 relative">
              <div className="relative">
                <div className="relative h-[280px] sm:h-[340px] overflow-hidden rounded-[4px] shadow-[0_16px_50px_rgba(13,148,136,0.18)]">
                  <Image
                    src="/infra-lab.jpg"
                    alt="Analytical laboratory with instruments"
                    fill
                    sizes="(min-width:1024px) 40vw, 100vw"
                    className="object-cover"
                    style={{ objectPosition: "35% 50%" }}
                  />
                </div>
                <div className="absolute top-6 -right-2 lg:-right-6 flex items-center gap-4 rounded-[4px] border border-white bg-white/90 backdrop-blur px-5 py-4 shadow-[0_12px_40px_rgba(13,148,136,0.18)]">
                  <ShieldCheck className="w-9 h-9 shrink-0 text-[#0d9488]" strokeWidth={1.5} />
                  <div className="leading-snug">
                    <div className="text-sm font-bold text-[#0b192c]">cGMP & WHO Guidelines</div>
                    <div className="text-xs text-slate-500">Engineered for sterile integrity.</div>
                  </div>
                </div>
              </div>

              <div className="relative -mt-10 lg:-mr-4 rounded-[4px] bg-[#0b192c] text-white p-7 sm:p-8 shadow-[0_20px_50px_rgba(11,25,44,0.4)]">
                <div className="flex items-center gap-3">
                  <Building2 className="w-9 h-9 text-teal-300" strokeWidth={1.5} />
                  <div>
                    <h3 className="font-bold text-white text-lg leading-tight">Incredible Medicare Plant</h3>
                    <p className="text-xs text-teal-400 mt-0.5">SIDCO Industrial Estate, Kathua, J&amp;K</p>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  {[
                    ["70 Million+", "Annual Tablet Capacity"],
                    ["25 Million+", "Annual Capsule Capacity"],
                    ["15 Million+", "Annual Liquid Syrup Bottles"],
                    ["10 Million+", "Annual Ointment Tubes"],
                  ].map(([v, l]) => (
                    <div key={l} className="rounded-[4px] border border-white/10 bg-white/5 p-3">
                      <div className="text-lg font-extrabold text-teal-400">{v}</div>
                      <div className="mt-0.5 text-xs text-slate-300">{l}</div>
                    </div>
                  ))}
                </div>

                <p className="mt-5 pt-4 border-t border-white/10 text-xs leading-relaxed text-slate-300">
                  Audited and validated under ISO 9001:2015 and WHO-GMP standards for both domestic commercial supply and contract manufacturing execution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Production & Analytical Suites */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f0fdfa] via-[#f0fdfa] to-[#f0fdfa] py-16 lg:py-20">
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-[#ccfbf1]/60 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-14">
            <Eyebrow center>Specialized Departments</Eyebrow>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0b192c] tracking-tight">
              Equipment, Laboratory &amp;{" "}
              <span className="text-[#0d9488]">Quality Facilities</span>
            </h2>
            <div className="accent-bar mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                n: "01",
                icon: Cog,
                title: "Equipment & Machinery",
                desc: "Our manufacturing facilities are supported by modern machinery for tablet, capsule, ointment, and packaging operations, enabling efficient and high-volume pharmaceutical production.",
                pill: "Tablet · Capsule · Ointment",
                img: "/infra-packs.png",
                pos: "50% 50%",
              },
              {
                n: "02",
                icon: FlaskConical,
                title: "Laboratory & Quality Facilities",
                desc: "Our dedicated laboratories support quality control, quality assurance, analytical testing, and formulation development across key pharmaceutical processes.",
                pill: "QC · QA · Analytical",
                img: "/infra-vial.jpg",
                pos: "30% 55%",
              },
              {
                n: "03",
                icon: Gauge,
                title: "QC Equipment",
                desc: "Our QC facilities include advanced instruments such as HPLC, GC, FTIR, UV Spectrophotometer, Dissolution, Disintegration, Friability, Hardness, Karl Fischer, pH, and other analytical testing systems.",
                pill: "HPLC · GC · FTIR · UV",
                img: "/infra-lab.jpg",
                pos: "85% 45%",
              },
            ].map((c) => (
              <div key={c.title} className={`${GLASS} relative overflow-hidden p-7 flex flex-col`}>
                <span className="absolute right-6 top-5 text-5xl font-extrabold text-[#0d9488]/10">{c.n}</span>
                <c.icon className="w-10 h-10 text-[#0d9488]" strokeWidth={1.5} />
                <h3 className="mt-5 text-2xl font-extrabold text-[#0b192c] leading-tight">{c.title}</h3>
                <div className="mt-2 h-[3px] w-8 rounded-full bg-[#0d9488]" />
                <p className="mt-4 text-sm text-slate-600 leading-relaxed lg:max-w-[66%]">{c.desc}</p>
                <span className="relative z-10 mt-auto pt-6 self-start">
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#99f6e4] bg-white/80 px-4 py-2 text-xs font-semibold text-[#0f766e]">
                    {c.pill}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </span>
                <div className="pointer-events-none absolute bottom-0 right-0 hidden h-[200px] w-[200px] overflow-hidden rounded-tl-full lg:block">
                  <Image
                    src={c.img}
                    alt=""
                    fill
                    sizes="200px"
                    className="object-cover"
                    style={{ objectPosition: c.pos }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Control Laboratory */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f0fdfa] to-[#f0fdfa] py-16 lg:py-20">
        <div className="pointer-events-none absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-[#ccfbf1]/60 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Photo */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-[340px] sm:h-[460px] overflow-hidden rounded-[4px] rounded-tr-[6rem] shadow-[0_16px_50px_rgba(13,148,136,0.18)]">
                <Image
                  src="/infra-micro.jpg"
                  alt="Microbiologist working at a microscope"
                  fill
                  sizes="(min-width:1024px) 40vw, 100vw"
                  className="object-cover"
                  style={{ objectPosition: "50% 40%" }}
                />
              </div>
              <div className="absolute bottom-6 -right-2 lg:-right-8 flex items-center gap-4 rounded-[4px] border border-white bg-white/90 backdrop-blur px-5 py-4 shadow-[0_12px_40px_rgba(13,148,136,0.18)]">
                <Microscope className="w-9 h-9 shrink-0 text-[#0d9488]" strokeWidth={1.5} />
                <div className="leading-snug">
                  <div className="text-sm font-bold text-[#0b192c]">GLP Compliant QC Lab</div>
                  <div className="text-xs text-slate-500">IP, BP &amp; USP monographs.</div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-7">
              <Eyebrow>GLP Compliant QC Lab</Eyebrow>
              <h2 className="mt-4 text-3xl sm:text-4xl xl:text-5xl font-extrabold text-[#0b192c] tracking-tight leading-[1.1]">
                Analytical Instrumentation &amp;{" "}
                <span className="block text-[#0d9488]">Microbiological Validation</span>
              </h2>
              <p className="mt-5 text-slate-600 text-[15px] leading-relaxed max-w-2xl">
                Our in-house Quality Control department ensures that every single raw material and finished medicine meets strict IP, BP, and USP pharmacopeial monographs prior to commercial release.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: FlaskConical, title: "HPLC Chromatographs", desc: "Dual-wavelength high-performance liquid chromatography for purity assay and dissolution testing." },
                  { icon: Gauge, title: "UV-Vis Spectrophotometers", desc: "Computerized spectrophotometric absorption quantification for active formulation components." },
                  { icon: Microscope, title: "Microbiology Clean Area", desc: "Class 100 laminar airflow cabinets for sterility testing, microbial limit testing, and bioburden assays." },
                  { icon: ThermometerSnowflake, title: "Stability Chambers", desc: "Calibrated walk-in stability chambers testing real-time and accelerated shelf life under Zone IVb climatic conditions." },
                ].map((item) => (
                  <div key={item.title} className={`${GLASS} p-5`}>
                    <item.icon className="w-8 h-8 text-[#0d9488]" strokeWidth={1.5} />
                    <h4 className="mt-3 font-bold text-[#0b192c] text-sm">{item.title}</h4>
                    <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button type="button" onClick={() => setModalOpen(true)} className={PRIMARY_BTN}>
                  Inquire for Plant Audit &amp; Contract Manufacturing
                  <ArrowRight className="w-4 h-4" />
                </button>
                <Link href="/contact" className={OUTLINE_BTN}>
                  <MapPin className="w-4 h-4" />
                  Visit Headquarters at Zirakpur
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Development */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f0fdfa] to-[#f0fdfa] py-16 lg:py-20">
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-[#ccfbf1]/60 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-3xl mx-auto mb-12 lg:mb-14">
            <Eyebrow center>Innovation</Eyebrow>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0b192c] tracking-tight">
              Research &amp;{" "}
              <span className="text-[#0d9488]">Development</span>
            </h2>
            <div className="accent-bar mx-auto mt-4"></div>
            <p className="mt-5 text-slate-600 text-sm sm:text-base leading-relaxed">
              Our R&amp;D team focuses on innovative and unique formulations, combining scientific expertise, modern technology, and quality-driven development to meet evolving healthcare needs.
            </p>
          </Reveal>

          <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
            {[
              { icon: Cpu, title: "Advanced Technology", desc: "Our state-of-the-art facilities are equipped with advanced analytical and manufacturing technologies, including HPLC, FTIR, GC, UV Spectrophotometer, and Dissolution Testers." },
              { icon: Lightbulb, title: "Innovation & Formulation Development", desc: "We focus on new combinations, improved formulations, and efficient manufacturing solutions with emphasis on quality, efficacy, consistency, and cost-effectiveness." },
              { icon: Handshake, title: "Strategic Partnerships", desc: "We collaborate with research institutions, technical experts, and industry partners to support innovation, technology advancement, and continuous product development." },
              { icon: ShieldCheck, title: "Quality Commitment", desc: "Quality is at the core of our operations. Stringent quality controls, advanced laboratories, and experienced technical teams ensure consistent quality, regulatory compliance, and product reliability." },
            ].map((c, i) => (
              <StaggerItem key={c.title} className="lg:col-span-6">
                <div className={`${GLASS} group relative h-full overflow-hidden p-7 transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_50px_rgba(13,148,136,0.2)]`}>
                  <span className="absolute right-6 top-4 text-5xl font-extrabold text-[#0d9488]/10">0{i + 1}</span>
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#14b8a6] to-[#0f766e] text-white shadow-[0_8px_22px_rgba(13,148,136,0.35)] transition duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <c.icon className="h-7 w-7" strokeWidth={1.6} />
                  </div>
                  <h3 className="mt-5 text-xl font-extrabold text-[#0b192c] leading-tight">{c.title}</h3>
                  <div className="mt-2 h-[3px] w-8 rounded-full bg-[#0d9488] transition-all duration-300 group-hover:w-16" />
                  <p className="mt-4 text-sm text-slate-600 leading-relaxed">{c.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Production line */}
      <section data-no-reveal className="relative overflow-hidden bg-gradient-to-b from-[#f0fdfa] to-[#f0fdfa] pt-4 pb-14">
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center text-xs font-bold uppercase tracking-[0.18em] text-[#0d9488]">
            Every unit inspected before it leaves the line
          </div>
          <Conveyor />
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0b192c] via-black to-black py-16 lg:py-20">
        <AmbientVideo src="/hero-4.mp4" className="opacity-35" />
        <div className="pointer-events-none absolute -left-32 top-4 hidden h-[420px] w-[420px] overflow-hidden rounded-full border-[14px] border-white/10 opacity-30 lg:block xl:-left-20">
          <Image src="/infra-vial.jpg" alt="" fill sizes="420px" className="object-cover" style={{ objectPosition: "30% 50%" }} />
        </div>
        <div className="pointer-events-none absolute -right-32 top-10 hidden h-[420px] w-[420px] overflow-hidden rounded-full border-[14px] border-white/10 opacity-30 lg:block xl:-right-20">
          <Image src="/infra-packs.png" alt="" fill sizes="420px" className="object-cover" />
        </div>
        <div className="pointer-events-none absolute -bottom-24 left-1/4 h-64 w-96 rounded-full bg-amber-400/10 blur-3xl" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <Eyebrow center dark>Partner for a Healthier Tomorrow</Eyebrow>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.1]">
            See Our Plant{" "}
            <span className="block text-teal-400">Before You Partner With Us</span>
          </h2>
          <p className="mt-5 text-slate-300 text-sm sm:text-base leading-relaxed">
            Schedule a plant audit at our WHO-GMP facility in Kathua or meet our team at the Corporate HQ in Zirakpur to discuss contract manufacturing requirements.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            <button type="button" onClick={() => setModalOpen(true)} className={PRIMARY_BTN}>
              <Factory className="w-5 h-5" />
              Schedule Plant Audit
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
              { icon: Boxes, a: "120M+", b: "Annual Units", blue: true },
              { icon: ShieldCheck, a: "WHO-GMP", b: "& ISO 9001:2015" },
              { icon: Package, a: "Automated", b: "Packaging Lines", blue: true },
              { icon: Truck, a: "24–48h", b: "Pan-India Dispatch" },
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

      <EnquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
