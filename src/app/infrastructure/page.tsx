"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Building2,
  Cpu,
  Layers,
  ThermometerSnowflake,
  Activity,
  CheckCircle2,
  FileCheck,
  ArrowRight
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import EnquiryModal from "@/components/EnquiryModal";

export default function InfrastructurePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="w-full bg-white text-slate-900">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-14 sm:py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <nav className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            <Link href="/" className="hover:text-sky-700">Home</Link>
            <span>/</span>
            <span className="text-sky-800">Infrastructure</span>
          </nav>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Advanced Manufacturing &amp; Quality Infrastructure
          </h1>
          <div className="accent-bar mx-auto"></div>
          <p className="max-w-3xl mx-auto text-slate-600 text-sm sm:text-base leading-relaxed">
            Our state-of-the-art pharmaceutical complex operates under WHO-GMP compliance, equipped with computerized HVAC environmental controls, automated high-speed packaging, and dedicated analytical laboratories.
          </p>
        </div>
      </section>

      {/* Overview Grid */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-sky-700 text-xs font-bold uppercase tracking-wider">
                  Plant Architecture
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Zero Cross-Contamination Cleanroom Design
                </h2>
                <div className="accent-bar"></div>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                The Incredible Medicare manufacturing facility is engineered in strict conformity with current Good Manufacturing Practices (cGMP) and WHO guidelines. Production areas feature progressive airlocks, dedicated supply/exhaust air filtration, and epoxy flooring to guarantee sterile integrity.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  "Class 10,000 (ISO 7) and Class 100,000 Cleanroom Production Blocks",
                  "Dedicated Air Handling Units (AHUs) with Terminal 0.3-micron HEPA Filters",
                  "Unidirectional Personnel and Material Flow to Prevent Any Cross-Contamination",
                  "Purified Water System with Continuous Loop Recirculation (USP Standard)",
                  "Automatic Rotary Tablet Compression Presses with Real-time Weight Monitoring",
                  "Automated Blister & Alu-Alu Packaging Lines with Optical Vision Checkers"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-sky-700 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-800 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Plant Snapshot Card */}
            <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-sky-600 text-white flex items-center justify-center font-bold">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">Incredible Medicare Plant</h3>
                  <p className="text-xs text-sky-400">SIDCO Industrial Estate, Kathua, J&amp;K</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2 border-t border-slate-800 text-xs">
                <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700">
                  <div className="text-sky-400 font-bold text-base">70 Million+</div>
                  <div className="text-slate-300 mt-0.5">Annual Tablet Capacity</div>
                </div>
                <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700">
                  <div className="text-sky-400 font-bold text-base">25 Million+</div>
                  <div className="text-slate-300 mt-0.5">Annual Capsule Capacity</div>
                </div>
                <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700">
                  <div className="text-sky-400 font-bold text-base">15 Million+</div>
                  <div className="text-slate-300 mt-0.5">Annual Liquid Syrup Bottles</div>
                </div>
                <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700">
                  <div className="text-sky-400 font-bold text-base">10 Million+</div>
                  <div className="text-slate-300 mt-0.5">Annual Ointment Tubes</div>
                </div>
              </div>

              <div className="p-4 bg-slate-800/60 rounded-xl border border-slate-700 text-xs text-slate-300 leading-relaxed">
                Audited and validated under ISO 9001:2015 and WHO-GMP standards for both domestic commercial supply and contract manufacturing execution.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Production Sections & Machinery */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-sky-700 text-xs font-bold uppercase tracking-wider">
              Specialized Departments
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Dedicated Production &amp; Analytical Suites
            </h2>
            <div className="accent-bar mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center font-bold">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Solid Orals (Tablets &amp; Capsules)</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Equipped with automatic rapid mixer granulators (RMG), fluid bed dryers (FBD), multi-station rotary tableting presses, and automated capsule filling with weight verification.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold">
                <Activity className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Liquid Orals &amp; Suspensions</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Integrated manufacturing vessels with automated rotary bottle air washing, volumetric liquid filling, nitrogen purging, induction cap sealing, and automated labeling lines.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                <ThermometerSnowflake className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Smart Warehousing &amp; Cold Chain</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Dedicated temperature-controlled storage (2°C – 8°C for biologics &amp; injectables and 15°C – 25°C for standard formulations) with computerized barcode inventory dispatch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Control Laboratory */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 space-y-8">
            <div className="max-w-3xl space-y-3">
              <span className="text-sky-400 text-xs font-bold uppercase tracking-widest">
                GLP Compliant QC Lab
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Analytical Instrumentation &amp; Microbiological Validation
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Our in-house Quality Control department ensures that every single raw material and finished medicine meets strict IP, BP, and USP pharmacopeial monographs prior to commercial release.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "HPLC Chromatographs", desc: "Dual-wavelength high-performance liquid chromatography for purity assay and dissolution testing." },
                { title: "UV-Vis Spectrophotometers", desc: "Computerized spectrophotometric absorption quantification for active formulation components." },
                { title: "Microbiology Clean Area", desc: "Class 100 laminar airflow cabinets for sterility testing, microbial limit testing, and bioburden assays." },
                { title: "Stability Chambers", desc: "Calibrated walk-in stability chambers testing real-time and accelerated shelf life under Zone IVb climatic conditions." }
              ].map((item) => (
                <div key={item.title} className="p-4 bg-slate-800/80 rounded-xl border border-slate-700/80 space-y-1">
                  <h4 className="font-bold text-sky-300 text-sm">{item.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="px-6 py-3 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs rounded-xl shadow-xs transition"
              >
                Inquire for Plant Audit &amp; Contract Manufacturing
              </button>
              <Link
                href="/contact"
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-xs rounded-xl transition"
              >
                Visit Headquarters at Zirakpur
              </Link>
            </div>
          </div>
        </div>
      </section>

      <EnquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
