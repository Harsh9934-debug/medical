"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Layers,
  Sparkles,
  Award,
  CheckCircle2,
  Package,
  Building2,
  ArrowRight,
  Send,
  Check
} from "lucide-react";
import { DIVISIONS, COMPANY_INFO } from "@/data/company";
import EnquiryModal from "@/components/EnquiryModal";

export default function DivisionsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDivision, setSelectedDivision] = useState("");

  const handleEnquireDivision = (divName: string) => {
    setSelectedDivision(divName);
    setModalOpen(true);
  };

  return (
    <div className="w-full bg-white text-slate-900">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-14 sm:py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <nav className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            <Link href="/" className="hover:text-sky-700">Home</Link>
            <span>/</span>
            <span className="text-sky-800">Specialized Divisions</span>
          </nav>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Specialized Pharmaceutical Divisions
          </h1>
          <div className="accent-bar mx-auto"></div>
          <p className="max-w-3xl mx-auto text-slate-600 text-sm sm:text-base leading-relaxed">
            Incredible Medicare features targeted business divisions, each built with deep therapeutic focus, dedicated promotional inputs, and clinical efficacy to empower franchise associates and prescribing clinicians.
          </p>
        </div>
      </section>

      {/* Divisions Showcase */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {DIVISIONS.map((div, index) => (
            <div
              key={div.id}
              className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs hover:shadow-md transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Column: Info */}
              <div className="lg:col-span-8 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs font-extrabold text-sky-800 bg-sky-50 px-3 py-1 rounded-md border border-sky-200 uppercase tracking-wider">
                    {div.category}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    {div.productCount}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {div.name}
                </h2>
                <div className="text-sm font-semibold text-sky-700">
                  {div.tagline}
                </div>

                <p className="text-sm text-slate-600 leading-relaxed max-w-3xl">
                  {div.description}
                </p>

                {/* Key Formulations / Highlights */}
                <div className="pt-2">
                  <div className="text-xs font-bold text-slate-800 uppercase tracking-wide mb-2">
                    Key Therapeutic Focus Areas:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    {div.highlights.map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Actions */}
              <div className="lg:col-span-4 bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4 text-center">
                <div className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                  Franchise &amp; Product Inquiry
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Monopoly marketing rights and promotional material kits currently available for this division.
                </p>
                <div className="space-y-2 pt-2">
                  <button
                    type="button"
                    onClick={() => handleEnquireDivision(`${div.name} (Franchise Monopoly)`)}
                    className="w-full py-2.5 bg-sky-700 hover:bg-sky-800 text-white font-bold text-xs rounded-xl shadow-xs transition"
                  >
                    Apply for Division Franchise
                  </button>
                  <Link
                    href="/products"
                    className="w-full flex items-center justify-center gap-1.5 py-2.5 bg-white hover:bg-slate-100 text-slate-800 font-semibold text-xs rounded-xl border border-slate-300 transition"
                  >
                    <span>View Division Products</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Division Advantage Callout */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-sky-700 text-xs font-bold uppercase tracking-wider">
            Operational Synergy
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Multi-Division Strategy Accelerates Your ROI
          </h2>
          <div className="accent-bar mx-auto"></div>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            By segmenting specialized therapies into focused divisions, Incredible Medicare allows distributors to establish deep doctor-prescriber relationships with distinct promotional material, visual aids, and tailored clinical monographs.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => handleEnquireDivision("Multi-Division Franchise Partnership")}
              className="px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm rounded-xl transition"
            >
              Request Multi-Division Portfolio
            </button>
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm rounded-xl transition"
            >
              Contact Commercial Desk
            </Link>
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
