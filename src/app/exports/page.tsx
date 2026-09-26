"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Globe,
  ShieldCheck,
  FileText,
  Award,
  CheckCircle2,
  Package,
  Building2,
  ArrowRight,
  Plane,
  FileCheck
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import EnquiryModal from "@/components/EnquiryModal";

export default function ExportsPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="w-full bg-white text-slate-900">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-14 sm:py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <nav className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            <Link href="/" className="hover:text-sky-700">Home</Link>
            <span>/</span>
            <span className="text-sky-800">Global Exports</span>
          </nav>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            International Pharmaceutical Exports &amp; Global Trade
          </h1>
          <div className="accent-bar mx-auto"></div>
          <p className="max-w-3xl mx-auto text-slate-600 text-sm sm:text-base leading-relaxed">
            Incredible Medicare delivers globally compliant finished formulations, eCTD/ACTD technical dossiers, and customized private-label packaging to international distributors, health ministries, and institutional buyers worldwide.
          </p>
        </div>
      </section>

      {/* Global Capability Highlights */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-sky-700 text-xs font-bold uppercase tracking-wider">
                  International Trade
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Seamless Regulatory Clearances for Overseas Markets
                </h2>
                <div className="accent-bar"></div>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                As a WHO-GMP certified manufacturer, Incredible Medicare possesses the regulatory expertise and manufacturing capacity to fulfill demanding international registration requirements. We provide complete dossier support, stability documentation under Zone IVb conditions, and prompt export shipments.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  {
                    title: "CTD & ACTD Dossiers",
                    desc: "Ready documentation modules (Module 1 to 5) formatted to expedite overseas drug regulatory authority approvals."
                  },
                  {
                    title: "COPP & Free Sale Certificates",
                    desc: "Official WHO-format Certificates of Pharmaceutical Product validated by Indian state and central drug authorities."
                  },
                  {
                    title: "Multilingual Packaging",
                    desc: "Tailored cartons and blister foils printed in English, French, Spanish, Russian, and Arabic as per local health guidelines."
                  },
                  {
                    title: "Zone IVb Stability Validation",
                    desc: "Accelerated and real-time stability data generated specifically for hot and humid tropical export regions."
                  }
                ].map((item) => (
                  <div key={item.title} className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                    <h3 className="font-bold text-slate-900 text-sm">{item.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="px-6 py-3 bg-sky-700 hover:bg-sky-800 text-white font-bold text-xs rounded-xl shadow-xs transition cursor-pointer"
                >
                  Request Export Product Dossier &amp; Price List
                </button>
              </div>
            </div>

            {/* Right Card: Global Target Markets */}
            <div className="lg:col-span-5 bg-slate-900 text-white rounded-3xl p-8 sm:p-10 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-sky-600 text-white flex items-center justify-center font-bold">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">Target Export Regions</h3>
                  <p className="text-xs text-sky-400">Institutional &amp; Commercial Channels</p>
                </div>
              </div>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700 space-y-1">
                  <div className="font-bold text-white">CIS &amp; Central Asia</div>
                  <p className="text-slate-400">Kazakhstan, Uzbekistan, Kyrgyzstan, Tajikistan, Georgia</p>
                </div>

                <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700 space-y-1">
                  <div className="font-bold text-white">Southeast Asia (ASEAN)</div>
                  <p className="text-slate-400">Vietnam, Philippines, Myanmar, Cambodia, Sri Lanka</p>
                </div>

                <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700 space-y-1">
                  <div className="font-bold text-white">Africa (West &amp; East)</div>
                  <p className="text-slate-400">Nigeria, Kenya, Tanzania, Ghana, Uganda, Ethiopia</p>
                </div>

                <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700 space-y-1">
                  <div className="font-bold text-white">Latin America &amp; Middle East</div>
                  <p className="text-slate-400">Select emerging healthcare and institutional tender markets</p>
                </div>
              </div>

              <div className="p-4 bg-slate-800/60 rounded-xl border border-slate-700 text-xs text-slate-300 leading-relaxed">
                Direct export inquiries supervised by our international trade division at Unicity Business Park, Zirakpur.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Export Services Steps */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-sky-700 text-xs font-bold uppercase tracking-wider">
              Step-by-Step Workflow
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Export Process with Incredible Medicare
            </h2>
            <div className="accent-bar mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Product & Market Selection",
                desc: "Choose therapeutic formulations and confirm country-specific regulatory criteria."
              },
              {
                step: "02",
                title: "Dossier & Sample Dispatch",
                desc: "We provide eCTD/ACTD technical dossiers, COPP, Free Sale Certificates, and registration samples."
              },
              {
                step: "03",
                title: "Approval & Commercial Batching",
                desc: "Upon health ministry registration, production commences under strict WHO-GMP oversight."
              },
              {
                step: "04",
                title: "Inspection & Global Freight",
                desc: "Quality inspection (SGS/Bureau Veritas if required) and secure container shipment via sea or air."
              }
            ].map((st) => (
              <div
                key={st.step}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3"
              >
                <div className="text-2xl font-extrabold text-sky-700">{st.step}</div>
                <h3 className="font-bold text-slate-900 text-base">{st.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{st.desc}</p>
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
