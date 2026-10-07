"use client";

import { AmbientVideo } from "@/components/motion/AmbientVideo";
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { CountUp } from "@/components/motion/CountUp";
import { Ticker } from "@/components/motion/Ticker";
import { HeroVideo } from "@/components/motion/HeroVideo";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Award,
  Target,
  Eye,
  CheckCircle2,
  Building2,
  Users,
  FileText,
  ArrowRight,
  ChevronDown,
  Sparkles,
  PhoneCall,
  Check,
  Globe2,
  FlaskConical,
  Handshake,
  Box,
  BarChart3,
  ChevronRight,
  Leaf,
  Gem,
  Scale,
  Lightbulb,
  LayoutGrid,
  Settings,
  Microscope,
  QrCode,
  MapPin,
  Boxes,
  MessageSquareText,
} from "lucide-react";
import { COMPANY_INFO, DIVISIONS } from "@/data/company";
import EnquiryModal from "@/components/EnquiryModal";
import { CapacitySection } from "@/components/CapacitySection";

export default function AboutPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  // Video drifts down slower than the page scrolls, the classic parallax feel.
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);

  return (
    <div className="w-full bg-white text-slate-900">
      {/* Full-screen parallax video hero */}
      <section
        ref={heroRef}
        className="relative isolate h-[100svh] w-full overflow-hidden bg-[#042f2e]"
      >
        <motion.div style={{ y: videoY }} className="absolute inset-x-0 -top-[10%] h-[120%]">
          <HeroVideo
            sources={["/hero-2.mp4", "/hero-4.mp4", "/hero-5.mp4"]}
            poster="/hero-video-poster.jpg"
          />
        </motion.div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#042f2e]/70 via-[#042f2e]/15 to-[#042f2e]/80" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex h-full flex-col items-center justify-center px-4 text-center text-white"
        >
          <span className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.22em] text-teal-300">
            <span className="h-px w-10 bg-teal-300" />
            About Us
            <span className="h-px w-10 bg-teal-300" />
          </span>
          <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Driving Pharmaceutical Excellence &amp;{" "}
            <span className="text-teal-400">Ethical Healthcare</span>
          </h1>
        </motion.div>

        <motion.a
          href="#corporate-overview"
          aria-label="Scroll to content"
          className="absolute inset-x-0 bottom-8 mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5" />
        </motion.a>
      </section>

      {/* Intro content (moved below the video) */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f0fdfa] via-[#f0fdfa] to-[#ccfbf1] py-14 lg:py-16">
        <Image
          src="/bg3.png"
          alt=""
          fill
          sizes="100vw"
          className="pointer-events-none select-none object-cover object-right opacity-[0.06]"
        />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <p className="text-slate-600 text-base leading-relaxed sm:text-lg">
            Incredible Medicare is an ISO 9001:2015 &amp; WHO-GMP accredited
            pharmaceutical company based in Zirakpur, Punjab. Founded on the
            principles of therapeutic bioequivalence, scientific rigor, and
            partner trust.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#corporate-overview"
              className="inline-flex items-center gap-3 rounded-[4px] bg-[#0d9488] hover:bg-[#0f766e] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(13,148,136,0.35)] transition"
            >
              Our Corporate Journey
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/infrastructure"
              className="inline-flex items-center gap-3 rounded-[4px] border border-[#0d9488] bg-white/70 hover:bg-white px-7 py-3.5 text-sm font-semibold text-[#0d9488] transition"
            >
              Our Infrastructure
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="mt-9 grid grid-cols-2 gap-x-6 gap-y-5 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-y-4">
            {[
              { icon: ShieldCheck, a: "WHO-GMP", b: "Accredited" },
              { icon: FileText, a: "ISO 9001:2015", b: "Certified" },
              { icon: Users, a: "650+", b: "Approved Formulations" },
              { icon: Globe2, a: "Pan-India & Global", b: "Distribution Network" },
            ].map((f, i) => (
              <div
                key={f.a}
                className={`flex items-center gap-2.5 whitespace-nowrap ${i > 0 ? "sm:border-l sm:border-[#99f6e4] sm:pl-4" : ""}`}
              >
                <f.icon className="w-7 h-7 shrink-0 text-[#0d9488]" strokeWidth={1.5} />
                <div className="text-left leading-tight">
                  <div className="text-[13px] font-bold text-[#0b192c]">{f.a}</div>
                  <div className="text-xs text-slate-500">{f.b}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-3 rounded-[4px] border border-white bg-white/80 backdrop-blur px-4 py-3 shadow-[0_10px_30px_rgba(13,148,136,0.10)]">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ccfbf1] text-[#0d9488]">
                <FlaskConical className="h-5 w-5" strokeWidth={1.5} />
              </span>
              <div className="text-left leading-snug">
                <div className="text-sm font-bold text-[#0b192c]">High-Quality Formulations</div>
                <div className="text-xs text-slate-500">For a healthier tomorrow</div>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-[4px] border border-white bg-white/80 backdrop-blur px-4 py-3 shadow-[0_10px_30px_rgba(13,148,136,0.10)]">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ccfbf1] text-[#0d9488]">
                <Handshake className="h-5 w-5" strokeWidth={1.5} />
              </span>
              <div className="text-left leading-snug">
                <div className="text-sm font-bold text-[#0b192c]">Trusted by Healthcare Partners</div>
                <div className="text-xs text-slate-500">Across India &amp; Global Markets</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Ticker />

      {/* Corporate Profile Details */}
      <section
        id="corporate-overview"
        className="relative overflow-hidden bg-gradient-to-br from-[#f0fdfa] via-[#f0fdfa] to-[#ccfbf1] py-16 lg:py-20 scroll-mt-24"
      >
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[52%] lg:block [mask-image:linear-gradient(to_right,transparent,black_40%)]">
          <Image
            src="/bg3.png"
            alt=""
            fill
            sizes="52vw"
            className="select-none object-cover object-right"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-[#0d9488]" />
                <span className="text-[#0d9488] text-xs font-bold uppercase tracking-[0.12em]">
                  Corporate Overview
                </span>
              </div>
              <h2 className="mt-4 text-3xl sm:text-4xl xl:text-5xl font-extrabold text-[#0b192c] tracking-tight leading-[1.1]">
                Pioneering High-Quality Formulations for{" "}
                <span className="text-[#0d9488]">Pan-India &amp; Global Healthcare</span>
              </h2>

              <div className="mt-6 space-y-4 text-slate-600 text-[15px] leading-relaxed max-w-2xl">
                <p>
                  At <strong className="text-[#0b192c]">Incredible Medicare</strong>, we believe that access to high-potency, safe, and cost-effective pharmaceutical formulations is fundamental to advancing human health. Our corporate journey has evolved from a targeted regional distributor to a full-spectrum formulation enterprise commanding over 650+ DCGI-approved formulations.
                </p>
                <p>
                  Headquartered at <strong className="text-[#0b192c]">Unicity Business Park, Dhakoli, Zirakpur (Punjab)</strong>, our executive leadership oversees a multidisciplinary supply chain, rigorous quality audits, pan-India franchise enablement, and international export dossiers.
                </p>
                <p>
                  Our primary manufacturing facility operates at the <strong className="text-[#0b192c]">SIDCO Industrial Complex, Ghatti, Kathua (J&amp;K)</strong>, in strict compliance with current Good Manufacturing Practices (cGMP), ISO 9001:2015, and WHO-GMP specifications.
                </p>
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-4">
                <a
                  href="#strategic-foundation"
                  className="inline-flex items-center gap-3 rounded-[4px] bg-[#0d9488] hover:bg-[#0f766e] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(13,148,136,0.35)] transition"
                >
                  Explore Our Journey
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/infrastructure"
                  className="inline-flex items-center gap-3 rounded-[4px] border border-[#0d9488] bg-white/70 hover:bg-white px-7 py-3.5 text-sm font-semibold text-[#0d9488] transition"
                >
                  Our Infrastructure
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Card */}
            <div className="lg:col-span-5">
              <div className="rounded-[4px] border border-white bg-white/85 backdrop-blur p-6 shadow-[0_16px_50px_rgba(13,148,136,0.14)] space-y-4">
                <div className="flex items-center gap-3">
                  <Image
                    src="/logo.png"
                    alt="Incredible Medicare Logo"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                  <div className="leading-tight">
                    <h3 className="font-extrabold text-[#0b192c] text-xl">
                      Incredible <span className="text-[#0d9488]">Medicare</span>
                    </h3>
                    <p className="text-sm text-slate-500">Quality Assured Healthcare</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    {
                      icon: ShieldCheck,
                      title: "WHO-GMP & ISO 9001:2015",
                      desc: "Every batch is validated with analytical certificates, dissolution testing, and assay documentation.",
                    },
                    {
                      icon: Building2,
                      title: "Dual Strategic Locations",
                      desc: "Commercial HQ in Zirakpur (Punjab) + High-capacity Manufacturing Complex in Kathua (J&K).",
                    },
                    {
                      icon: Users,
                      title: "Partner-Centric Growth",
                      desc: "Monopoly marketing rights, transparent billing, and dedicated relationship managers for all associates.",
                    },
                  ].map((f) => (
                    <div
                      key={f.title}
                      className="flex items-start gap-4 rounded-[4px] border border-slate-100 bg-white px-4 py-4"
                    >
                      <f.icon className="mt-1 w-8 h-8 shrink-0 text-[#0d9488]" strokeWidth={1.5} />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <div className="text-sm font-bold text-[#0b192c]">{f.title}</div>
                          <ChevronRight className="w-4 h-4 shrink-0 text-[#0d9488]" />
                        </div>
                        <p className="mt-1 text-xs leading-relaxed text-slate-500">{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="flex w-full items-center justify-center gap-3 rounded-[4px] bg-[#0f766e] hover:bg-[#115e59] py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(15,118,110,0.3)] transition cursor-pointer"
                >
                  <FileText className="w-4 h-4" />
                  Download Corporate Profile &amp; Product List
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Stats bar */}
          <div className="mt-12 grid grid-cols-2 gap-y-6 rounded-[4px] border border-white bg-white/85 backdrop-blur px-4 py-6 shadow-[0_10px_40px_rgba(13,148,136,0.10)] lg:grid-cols-4 lg:gap-y-0">
            {[
              { icon: Box, a: "650+", b: "Approved Products" },
              { icon: Users, a: "850+", b: "Franchise Associates" },
              { icon: BarChart3, a: "120M+", b: "Annual Units" },
              { icon: Globe2, a: "Pan-India & Global", b: "Serving 20+ Countries" },
            ].map((st, i) => (
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
        </div>
      </section>

      {/* Mission, Vision, and Values */}
      <section
        id="strategic-foundation"
        className="relative overflow-hidden bg-gradient-to-b from-[#f0fdfa] via-[#f0fdfa] to-[#f0fdfa] py-16 lg:py-20 scroll-mt-24"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 hidden h-[460px] overflow-hidden lg:block [mask-image:linear-gradient(to_right,black_0,black_28%,transparent_44%,transparent_62%,black_82%)]">
          <Image
            src="/bg3.png"
            alt=""
            fill
            sizes="100vw"
            className="select-none object-cover object-top"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-14">
            <div className="flex items-center justify-center gap-4">
              <span className="hidden sm:block h-px w-14 bg-[#0f766e]/40" />
              <span className="text-[#0d9488] text-xs font-bold uppercase tracking-[0.18em]">
                Strategic Foundation
              </span>
              <span className="hidden sm:block h-px w-14 bg-[#0f766e]/40" />
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0b192c] tracking-tight">
              Mission, Vision &amp;{" "}
              <span className="text-[#0d9488]">Core Philosophy</span>
            </h2>
            <div className="accent-bar mx-auto mt-4"></div>
            <p className="mt-5 text-slate-600 text-sm sm:text-base leading-relaxed">
              Guided by a commitment to quality, integrity, and innovation, we
              strive to create better health outcomes and build a healthier
              tomorrow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Mission */}
            <div className="relative overflow-hidden rounded-[4px] border border-white bg-white/75 backdrop-blur p-7 shadow-[0_10px_40px_rgba(13,148,136,0.10)] flex flex-col">
              <span className="absolute right-6 top-5 text-5xl font-extrabold text-[#0d9488]/10">01</span>
              <Target className="w-10 h-10 text-[#0d9488]" strokeWidth={1.5} />
              <h3 className="mt-5 text-2xl font-extrabold text-[#0b192c]">Our Mission</h3>
              <div className="mt-2 h-[3px] w-8 rounded-full bg-[#0d9488]" />
              <p className="mt-4 text-sm text-slate-600 leading-relaxed lg:max-w-[62%] xl:max-w-[66%]">
                At Incredible Medicare, our mission is to deliver high-quality pharmaceutical formulations through advanced manufacturing, scientific excellence, and uncompromising quality standards. We strive to build trusted healthcare solutions for customers across India and global markets.
              </p>
              <span className="relative z-10 mt-auto pt-6 self-start inline-flex items-center gap-2 text-xs font-semibold text-[#0f766e]">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#99f6e4] bg-white/80 px-4 py-2">
                  Quality Medicines for a Healthier World
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </span>
              <div
                className="pointer-events-none absolute bottom-0 right-0 hidden h-[230px] w-[230px] rounded-tl-full opacity-90 lg:block"
                style={{
                  backgroundImage: "url(/bg3.png)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "912px auto",
                  backgroundPosition: "-575px -115px",
                }}
              />
            </div>

            {/* Vision */}
            <div className="relative overflow-hidden rounded-[4px] border border-white bg-white/75 backdrop-blur p-7 shadow-[0_10px_40px_rgba(13,148,136,0.10)] flex flex-col">
              <span className="absolute right-6 top-5 text-5xl font-extrabold text-[#0d9488]/10">02</span>
              <Eye className="w-10 h-10 text-[#0d9488]" strokeWidth={1.5} />
              <h3 className="mt-5 text-2xl font-extrabold text-[#0b192c]">Our Vision</h3>
              <div className="mt-2 h-[3px] w-8 rounded-full bg-[#0d9488]" />
              <p className="mt-4 text-sm text-slate-600 leading-relaxed lg:max-w-[62%] xl:max-w-[66%]">
                Our vision is to emerge as a trusted and globally recognized contract manufacturing partner, known for innovation, quality, reliability, and excellence in pharmaceutical formulations.
              </p>
              <span className="relative z-10 mt-auto pt-6 self-start inline-flex items-center gap-2 text-xs font-semibold text-[#0f766e]">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#99f6e4] bg-white/80 px-4 py-2">
                  A Trusted Name in Global Healthcare
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </span>
              <div
                className="pointer-events-none absolute bottom-0 right-0 hidden h-[230px] w-[230px] rounded-tl-full opacity-90 lg:block"
                style={{
                  backgroundImage: "url(/bg2.png)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "890px auto",
                  backgroundPosition: "-650px -10px",
                }}
              />
            </div>

            {/* Values */}
            <div className="relative overflow-hidden rounded-[4px] border border-white bg-gradient-to-br from-white/75 to-emerald-50/80 backdrop-blur p-7 shadow-[0_10px_40px_rgba(13,148,136,0.10)] flex flex-col">
              <span className="absolute right-6 top-5 text-5xl font-extrabold text-emerald-600/10">03</span>
              <ShieldCheck className="w-10 h-10 text-emerald-600" strokeWidth={1.5} />
              <h3 className="mt-5 text-2xl font-extrabold text-[#0b192c]">Our Values</h3>
              <div className="mt-2 h-[3px] w-8 rounded-full bg-emerald-500" />
              <Leaf className="pointer-events-none absolute -bottom-6 -right-4 h-48 w-48 text-emerald-300/30" strokeWidth={1} />
              <ul className="relative mt-5 space-y-4">
                {[
                  { icon: Gem, tone: "text-[#0d9488]", a: "Quality First", b: "Zero compromise on testing." },
                  { icon: Scale, tone: "text-emerald-600", a: "Integrity", b: "Honest batch pricing & monopoly." },
                  { icon: Lightbulb, tone: "text-amber-500", a: "Innovation", b: "Contemporary drug delivery systems." },
                ].map((v) => (
                  <li key={v.a} className="flex items-center gap-4">
                    <v.icon className={`w-8 h-8 shrink-0 ${v.tone}`} strokeWidth={1.5} />
                    <div className="leading-snug">
                      <div className="text-sm font-bold text-[#0b192c]">{v.a}</div>
                      <div className="text-sm text-slate-600">{v.b}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CapacitySection />

      {/* Quality Policy & Analytical Assurance */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f0fdfa] to-[#f0fdfa] py-16 lg:py-20">
        <div className="pointer-events-none absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-[#ccfbf1]/60 blur-3xl" />
        <div className="pointer-events-none absolute top-1/3 -left-40 h-[420px] w-[420px] rounded-full bg-[#ccfbf1]/50 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-[#0d9488]" />
                <span className="text-[#0d9488] text-xs font-bold uppercase tracking-[0.12em]">
                  Quality Infrastructure
                </span>
              </div>
              <h2 className="mt-4 text-3xl sm:text-4xl xl:text-5xl font-extrabold text-[#0b192c] tracking-tight leading-[1.1]">
                Comprehensive Analytical &amp;{" "}
                <span className="block text-[#0d9488]">Quality Control Systems</span>
              </h2>
              <p className="mt-5 text-slate-600 text-[15px] leading-relaxed max-w-2xl">
                Quality at Incredible Medicare is not merely an inspection step—it is integrated into every phase of our manufacturing cycle. From active pharmaceutical ingredient (API) vendor qualification to in-process compression checks and finished batch stability analysis.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  { icon: FlaskConical, a: "Raw Material & API Assay Verification", b: "Via High Performance Liquid Chromatography (HPLC)" },
                  { icon: LayoutGrid, a: "Controlled Cleanroom Environments", b: "With HEPA Air Handling Units (AHU) Class 10,000 & 100,000" },
                  { icon: Settings, a: "Automated Blister & Alu-Alu Leak Detection", b: "With Microprocessor Controls" },
                  { icon: Microscope, a: "Dedicated Microbiological Testing Lab", b: "For Sterility & Bacterial Endotoxin Testing (BET)" },
                  { icon: ShieldCheck, a: "Accelerated & Real-time Stability Studies", b: "As per ICH Guidelines" },
                  { icon: QrCode, a: "Full Batch Traceability", b: "With Unique Serialized QR Codes and Tamper-evident Holograms" },
                ].map((r) => (
                  <div
                    key={r.a}
                    className="flex items-center gap-4 rounded-[4px] border border-white bg-white/80 px-5 py-3.5 shadow-[0_6px_24px_rgba(13,148,136,0.07)]"
                  >
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

            {/* Right */}
            <div className="lg:col-span-5 relative">
              <div className="relative">
                <div className="relative h-[280px] sm:h-[340px] overflow-hidden rounded-[4px] shadow-[0_16px_50px_rgba(13,148,136,0.18)]">
                  <Image
                    src="/herobg.png"
                    alt="Quality control laboratory"
                    fill
                    sizes="(min-width:1024px) 40vw, 100vw"
                    className="object-cover origin-right scale-125"
                    style={{ objectPosition: "90% 45%" }}
                  />
                </div>
                <div className="absolute top-6 -right-2 lg:-right-6 flex items-center gap-4 rounded-[4px] border border-white bg-white/90 backdrop-blur px-5 py-4 shadow-[0_12px_40px_rgba(13,148,136,0.18)]">
                  <ShieldCheck className="w-9 h-9 shrink-0 text-[#0d9488]" strokeWidth={1.5} />
                  <div className="leading-snug">
                    <div className="text-sm font-bold text-[#0b192c]">Quality You Can Trust</div>
                    <div className="text-xs text-slate-500">Backed by global standards and scientific rigor.</div>
                  </div>
                </div>
              </div>

              <div className="relative -mt-10 mx-0 lg:-mr-4 rounded-[4px] bg-[#0b192c] text-white p-7 sm:p-8 shadow-[0_20px_50px_rgba(11,25,44,0.4)]">
                <span className="text-teal-400 text-xs font-bold uppercase tracking-[0.14em]">
                  Leadership Philosophy
                </span>
                <h3 className="mt-3 text-2xl sm:text-[1.7rem] font-bold leading-snug">
                  &ldquo;A Patient-First Commitment Behind{" "}
                  <span className="text-teal-400">Every Dose</span>&rdquo;
                </h3>
                <p className="mt-4 text-slate-300 text-sm leading-relaxed">
                  When a doctor prescribes an Incredible Medicare medicine, they place their clinical trust in our science. We honor that trust through unyielding consistency, absolute bio-equivalence, and honest commercial partnerships with every distributor across the nation.
                </p>
                <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <Image src="/logo.png" alt="Incredible Medicare" width={40} height={40} className="object-contain" />
                    <div>
                      <div className="font-bold text-white text-sm">Commercial Directorate</div>
                      <div className="text-xs text-teal-400">Incredible Medicare</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <MapPin className="w-4 h-4 text-teal-400" />
                    Zirakpur, Punjab
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats bar */}
          <div className="mt-10 grid grid-cols-2 gap-y-6 rounded-[4px] border border-white bg-white/85 backdrop-blur px-4 py-6 shadow-[0_10px_40px_rgba(13,148,136,0.10)] lg:grid-cols-4 lg:gap-y-0">
            {[
              { icon: Building2, a: "6+", b: "Analytical Labs" },
              { icon: Users, a: "100+", b: "Quality Experts" },
              { icon: ShieldCheck, a: "100%", b: "cGMP Compliant" },
              { icon: FileText, a: "ICH", b: "Guideline Based Stability Studies" },
            ].map((st, i) => (
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
        </div>
      </section>

      {/* CTA Box */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0b192c] via-black to-black py-16 lg:py-20">
        <AmbientVideo src="/hero-2.mp4" className="opacity-35" />
        {/* Left art */}
        <div
          className="pointer-events-none absolute -left-32 top-4 hidden h-[420px] w-[420px] rounded-full border-[14px] border-white/10 opacity-30 lg:block xl:-left-20"
          style={{
            backgroundImage: "url(/herobg.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "1053px auto",
            backgroundPosition: "-630px -239px",
          }}
        />
        {/* Right art */}
        <div
          className="pointer-events-none absolute -right-32 top-10 hidden h-[420px] w-[420px] rounded-full border-[14px] border-white/10 opacity-30 lg:block xl:-right-20"
          style={{
            backgroundImage: "url(/bg3.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "1666px auto",
            backgroundPosition: "-1050px -126px",
          }}
        />
        <div className="pointer-events-none absolute -bottom-24 left-1/4 h-64 w-96 rounded-full bg-amber-400/10 blur-3xl" />

        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="hidden sm:block h-px w-12 bg-amber-400/40" />
            <span className="text-amber-400 text-xs font-bold uppercase tracking-[0.22em]">
              Partner for a Healthier Tomorrow
            </span>
            <span className="hidden sm:block h-px w-12 bg-amber-400/40" />
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.1]">
            Explore Opportunities with{" "}
            <span className="block text-teal-400">Incredible Medicare</span>
          </h2>
          <p className="mt-5 text-slate-300 text-sm sm:text-base leading-relaxed">
            Discover our complete product directory or connect with our corporate team at Unicity Business Park, Zirakpur for business collaborations, distribution partnerships, and global healthcare solutions.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/products"
              className="inline-flex items-center gap-3 rounded-[4px] bg-[#0d9488] hover:bg-[#0f766e] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(13,148,136,0.35)] transition"
            >
              <Box className="w-5 h-5" />
              View Products (650+)
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-[4px] border border-[#0d9488] bg-white hover:bg-slate-50 px-7 py-3.5 text-sm font-semibold text-[#0d9488] transition"
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
              { icon: Handshake, a: "Global", b: "Business Partnerships", blue: true },
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

      <EnquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
