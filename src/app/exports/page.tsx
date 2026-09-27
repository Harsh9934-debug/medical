"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Globe2,
  ShieldCheck,
  FileText,
  FileCheck,
  Award,
  Package,
  ArrowRight,
  ChevronRight,
  Plane,
  Ship,
  Languages,
  ThermometerSun,
  ClipboardCheck,
  Container,
  MapPin,
  MessageSquareText,
  Handshake,
  Boxes,
} from "lucide-react";
import EnquiryModal from "@/components/EnquiryModal";
import { ExportRoutes } from "@/components/motion/ExportRoutes";

const PRIMARY_BTN =
  "inline-flex items-center justify-center gap-3 rounded-[4px] bg-[#0b5bd3] hover:bg-[#0a4db3] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(11,91,211,0.35)] transition cursor-pointer";
const OUTLINE_BTN =
  "inline-flex items-center justify-center gap-3 rounded-[4px] border border-[#0b5bd3] bg-white/70 hover:bg-white px-7 py-3.5 text-sm font-semibold text-[#0b5bd3] transition cursor-pointer";
const GLASS =
  "rounded-[4px] border border-white bg-white/80 backdrop-blur shadow-[0_10px_40px_rgba(30,80,160,0.10)]";

function Eyebrow({ children, center }: { children: React.ReactNode; center?: boolean }) {
  return (
    <div className={`flex items-center gap-4 ${center ? "justify-center" : ""}`}>
      <span className="h-px w-10 bg-[#0b5bd3]" />
      <span className="text-[#0b5bd3] text-xs font-bold uppercase tracking-[0.14em]">
        {children}
      </span>
      {center && <span className="h-px w-10 bg-[#0b5bd3]" />}
    </div>
  );
}

export default function ExportsPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="w-full bg-white text-slate-900">
      {/* Hero */}
      <section className="relative flex items-center overflow-hidden bg-gradient-to-br from-[#f7faff] via-[#eef4fc] to-[#e3edfb] lg:min-h-[max(600px,42vw)]">
        <div className="pointer-events-none absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full bg-[#dbe8fb]/60 blur-3xl" />

        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[46%] overflow-hidden rounded-bl-[9rem] shadow-[0_20px_60px_rgba(30,80,160,0.25)] lg:block">
          <Image
            src="/export-wing.jpg"
            alt="Aircraft wing above the clouds"
            fill
            priority
            sizes="46vw"
            className="object-cover"
            style={{ objectPosition: "30% 50%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b5bd3]/25 via-transparent to-transparent" />
        </div>
        <div className="pointer-events-none absolute right-[42%] top-[18%] hidden h-24 w-24 rounded-full border-[10px] border-[#cfe0f7]/70 lg:block" />

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-14">
          <div className="max-w-2xl lg:max-w-[50%]">
            <Eyebrow>Global Exports</Eyebrow>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-[2.6rem] xl:text-[3.25rem] font-extrabold text-[#0a1f44] tracking-tight leading-[1.08]">
              International Pharmaceutical Exports &amp;{" "}
              <span className="text-[#0b5bd3]">Global Trade</span>
            </h1>
            <p className="mt-5 text-slate-600 text-base leading-relaxed max-w-xl">
              Incredible Medicare delivers globally compliant finished formulations, eCTD/ACTD technical dossiers, and customized private-label packaging to international distributors, health ministries, and institutional buyers worldwide.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <button type="button" onClick={() => setModalOpen(true)} className={PRIMARY_BTN}>
                Request Export Dossier
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link href="/contact" className={OUTLINE_BTN}>
                Contact Trade Desk
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 sm:flex sm:flex-wrap sm:items-center sm:gap-y-4">
              {[
                { icon: ShieldCheck, a: "WHO-GMP", b: "Certified Plant" },
                { icon: FileCheck, a: "CTD & ACTD", b: "Dossiers Ready" },
                { icon: ThermometerSun, a: "Zone IVb", b: "Stability Data" },
              ].map((f, i) => (
                <div
                  key={f.a}
                  className={`flex items-center gap-2.5 whitespace-nowrap ${i > 0 ? "sm:border-l sm:border-[#cfe0f7] sm:pl-5" : ""}`}
                >
                  <f.icon className="w-7 h-7 shrink-0 text-[#0b5bd3]" strokeWidth={1.5} />
                  <div className="leading-tight">
                    <div className="text-[13px] font-bold text-[#0a1f44]">{f.a}</div>
                    <div className="text-xs text-slate-500">{f.b}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="hidden lg:block absolute inset-0 pointer-events-none">
          {[
            { icon: FileText, a: "CTD & ACTD Dossiers", b: "Module 1 to 5 ready", pos: "right-[5%] top-[12%]" },
            { icon: Award, a: "COPP & Free Sale", b: "WHO-format certificates", pos: "left-[52%] top-[52%]" },
            { icon: Ship, a: "Sea & Air Freight", b: "Secure global shipments", pos: "right-[3%] bottom-[11%]" },
          ].map((c) => (
            <div
              key={c.a}
              className={`absolute ${c.pos} w-[250px] xl:w-[280px] flex items-center gap-4 rounded-[4px] border border-white bg-white/85 backdrop-blur px-5 py-4 shadow-[0_12px_40px_rgba(30,80,160,0.18)]`}
            >
              <c.icon className="w-9 h-9 shrink-0 text-[#0b5bd3]" strokeWidth={1.5} />
              <div className="leading-snug">
                <div className="text-sm font-bold text-[#0a1f44]">{c.a}</div>
                <div className="text-xs text-slate-500 mt-0.5">{c.b}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Global Capability Highlights */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f7faff] to-[#eef4fc] py-16 lg:py-20">
        <div className="pointer-events-none absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-[#dbe8fb]/60 blur-3xl" />
        <div className="pointer-events-none absolute top-1/3 -left-40 h-[420px] w-[420px] rounded-full bg-[#dbe8fb]/50 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-7">
              <Eyebrow>International Trade</Eyebrow>
              <h2 className="mt-4 text-3xl sm:text-4xl xl:text-5xl font-extrabold text-[#0a1f44] tracking-tight leading-[1.1]">
                Seamless Regulatory{" "}
                <span className="block text-[#0b5bd3]">Clearances for Overseas Markets</span>
              </h2>
              <p className="mt-5 text-slate-600 text-[15px] leading-relaxed max-w-2xl">
                As a WHO-GMP certified manufacturer, Incredible Medicare possesses the regulatory expertise and manufacturing capacity to fulfill demanding international registration requirements. We provide complete dossier support, stability documentation under Zone IVb conditions, and prompt export shipments.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  { icon: FileText, a: "CTD & ACTD Dossiers", b: "Ready documentation modules (Module 1 to 5) formatted to expedite overseas drug regulatory authority approvals." },
                  { icon: Award, a: "COPP & Free Sale Certificates", b: "Official WHO-format Certificates of Pharmaceutical Product validated by Indian state and central drug authorities." },
                  { icon: Languages, a: "Multilingual Packaging", b: "Tailored cartons and blister foils printed in English, French, Spanish, Russian, and Arabic as per local health guidelines." },
                  { icon: ThermometerSun, a: "Zone IVb Stability Validation", b: "Accelerated and real-time stability data generated specifically for hot and humid tropical export regions." },
                ].map((r) => (
                  <div key={r.a} className={`${GLASS} flex items-center gap-4 px-5 py-3.5`}>
                    <r.icon className="w-7 h-7 shrink-0 text-[#0b5bd3]" strokeWidth={1.5} />
                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-bold text-[#0a1f44]">{r.a}</div>
                      <div className="text-xs text-slate-500 mt-0.5">{r.b}</div>
                    </div>
                    <ChevronRight className="w-4 h-4 shrink-0 text-[#0b5bd3]" />
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <button type="button" onClick={() => setModalOpen(true)} className={PRIMARY_BTN}>
                  Request Export Product Dossier &amp; Price List
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right: photo + navy regions card */}
            <div className="lg:col-span-5 relative">
              <div className="relative">
                <div className="relative h-[260px] sm:h-[320px] overflow-hidden rounded-[4px] shadow-[0_16px_50px_rgba(30,80,160,0.18)]">
                  <Image
                    src="/export-port.jpg"
                    alt="Container port with cranes and shipping containers"
                    fill
                    sizes="(min-width:1024px) 40vw, 100vw"
                    className="object-cover"
                    style={{ objectPosition: "60% 50%" }}
                  />
                </div>
                <div className="absolute top-6 -right-2 lg:-right-6 flex items-center gap-4 rounded-[4px] border border-white bg-white/90 backdrop-blur px-5 py-4 shadow-[0_12px_40px_rgba(30,80,160,0.18)]">
                  <Container className="w-9 h-9 shrink-0 text-[#0b5bd3]" strokeWidth={1.5} />
                  <div className="leading-snug">
                    <div className="text-sm font-bold text-[#0a1f44]">Global Freight</div>
                    <div className="text-xs text-slate-500">Sea & air container shipments.</div>
                  </div>
                </div>
              </div>

              <div className="relative -mt-10 lg:-mr-4 rounded-[4px] bg-[#0a1a33] text-white p-7 sm:p-8 shadow-[0_20px_50px_rgba(10,26,51,0.4)]">
                <div className="flex items-center gap-3">
                  <Globe2 className="w-9 h-9 text-sky-300" strokeWidth={1.5} />
                  <div>
                    <h3 className="font-bold text-white text-lg leading-tight">Target Export Regions</h3>
                    <p className="text-xs text-sky-400 mt-0.5">Institutional &amp; Commercial Channels</p>
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  {[
                    ["CIS & Central Asia", "Kazakhstan, Uzbekistan, Kyrgyzstan, Tajikistan, Georgia"],
                    ["Southeast Asia (ASEAN)", "Vietnam, Philippines, Myanmar, Cambodia, Sri Lanka"],
                    ["Africa (West & East)", "Nigeria, Kenya, Tanzania, Ghana, Uganda, Ethiopia"],
                    ["Latin America & Middle East", "Select emerging healthcare and institutional tender markets"],
                  ].map(([t, d]) => (
                    <div key={t} className="rounded-[4px] border border-white/10 bg-white/5 px-4 py-3">
                      <div className="text-sm font-bold text-white">{t}</div>
                      <p className="mt-0.5 text-xs text-slate-400 leading-relaxed">{d}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 pt-4 border-t border-white/10 flex items-start gap-3 text-xs leading-relaxed text-slate-300">
                  <MapPin className="w-4 h-4 shrink-0 text-sky-400 mt-0.5" />
                  Direct export inquiries supervised by our international trade division at Unicity Business Park, Zirakpur.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Export Process */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#eef4fc] via-[#f1f6fd] to-[#eaf1fb] py-16 lg:py-20">
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-[#dbe8fb]/60 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-14">
            <Eyebrow center>Step-by-Step Workflow</Eyebrow>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a1f44] tracking-tight">
              Export Process with{" "}
              <span className="text-[#0b5bd3]">Incredible Medicare</span>
            </h2>
            <div className="accent-bar mx-auto mt-4"></div>
          </div>

          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="pointer-events-none absolute left-[12%] right-[12%] top-[52px] hidden h-px bg-gradient-to-r from-transparent via-[#0b5bd3]/40 to-transparent lg:block" />
            {[
              { n: "01", icon: Boxes, title: "Product & Market Selection", desc: "Choose therapeutic formulations and confirm country-specific regulatory criteria." },
              { n: "02", icon: FileCheck, title: "Dossier & Sample Dispatch", desc: "We provide eCTD/ACTD technical dossiers, COPP, Free Sale Certificates, and registration samples." },
              { n: "03", icon: ClipboardCheck, title: "Approval & Commercial Batching", desc: "Upon health ministry registration, production commences under strict WHO-GMP oversight." },
              { n: "04", icon: Plane, title: "Inspection & Global Freight", desc: "Quality inspection (SGS/Bureau Veritas if required) and secure container shipment via sea or air." },
            ].map((st) => (
              <div key={st.n} className={`${GLASS} relative overflow-hidden p-7`}>
                <span className="absolute right-6 top-5 text-5xl font-extrabold text-[#0b5bd3]/10">{st.n}</span>
                <st.icon className="relative w-10 h-10 text-[#0b5bd3]" strokeWidth={1.5} />
                <h3 className="mt-5 text-xl font-extrabold text-[#0a1f44] leading-tight">{st.title}</h3>
                <div className="mt-2 h-[3px] w-8 rounded-full bg-[#0b5bd3]" />
                <p className="mt-4 text-sm text-slate-600 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Export Lanes */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#eaf1fb] to-[#f1f6fd] py-16 lg:py-20">
        <div className="pointer-events-none absolute -top-32 -right-32 h-[400px] w-[400px] rounded-full bg-[#dbe8fb]/60 blur-3xl" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <Eyebrow center>Global Reach</Eyebrow>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a1f44] tracking-tight">
              Shipping Lanes to{" "}
              <span className="text-[#0b5bd3]">Emerging Markets</span>
            </h2>
            <div className="accent-bar mx-auto mt-4"></div>
          </div>
          <ExportRoutes />
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#eaf1fb] via-[#f1f6fd] to-[#f7faff] py-16 lg:py-20">
        <div className="pointer-events-none absolute -left-32 top-4 hidden h-[420px] w-[420px] overflow-hidden rounded-full border-[14px] border-[#cfe0f7]/70 lg:block xl:-left-20">
          <Image src="/export-ship.jpg" alt="" fill sizes="420px" className="object-cover" style={{ objectPosition: "60% 50%" }} />
        </div>
        <div className="pointer-events-none absolute -right-32 top-10 hidden h-[420px] w-[420px] overflow-hidden rounded-full border-[14px] border-[#cfe0f7]/70 lg:block xl:-right-20">
          <Image src="/export-handshake.jpg" alt="" fill sizes="420px" className="object-cover" style={{ objectPosition: "50% 50%" }} />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <Eyebrow center>Partner for a Healthier Tomorrow</Eyebrow>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a1f44] tracking-tight leading-[1.1]">
            Ready to Take Your Formulations{" "}
            <span className="block text-[#0b5bd3]">to Global Markets?</span>
          </h2>
          <p className="mt-5 text-slate-600 text-sm sm:text-base leading-relaxed">
            Share your target country and product list, and our international trade division will respond with dossier availability, pricing, and shipping timelines.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            <button type="button" onClick={() => setModalOpen(true)} className={PRIMARY_BTN}>
              <Handshake className="w-5 h-5" />
              Start Export Enquiry
              <ArrowRight className="w-4 h-4" />
            </button>
            <Link href="/contact" className={OUTLINE_BTN}>
              <MessageSquareText className="w-5 h-5" />
              Contact Trade Desk
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 mt-12">
          <div className="grid grid-cols-2 gap-y-6 lg:grid-cols-4 lg:gap-y-0">
            {[
              { icon: ShieldCheck, a: "WHO-GMP", b: "& ISO 9001:2015", blue: true },
              { icon: Languages, a: "5 Languages", b: "Packaging Support" },
              { icon: Package, a: "Private Label", b: "Export Packaging", blue: true },
              { icon: Globe2, a: "Sea & Air", b: "Global Freight" },
            ].map((f, i) => (
              <div
                key={f.a}
                className={`flex items-center justify-center gap-3 px-3 ${i > 0 ? "lg:border-l lg:border-[#cfe0f7]" : ""}`}
              >
                <f.icon className="w-9 h-9 shrink-0 text-[#0b5bd3]" strokeWidth={1.4} />
                <div className="leading-tight">
                  <div className={`text-base font-bold ${f.blue ? "text-[#0b5bd3]" : "text-[#0a1f44]"}`}>{f.a}</div>
                  <div className="mt-0.5 text-xs text-slate-500">{f.b}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialProduct="Global Export Partnership & Dossier Request"
      />
    </div>
  );
}
