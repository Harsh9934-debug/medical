"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Award,
  Building2,
  Package,
  ShieldCheck,
  CheckCircle2,
  FileText,
  Clock,
  Truck,
  Sparkles,
  ArrowRight,
  Send,
  Check
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import EnquiryModal from "@/components/EnquiryModal";

export default function ServicesPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const handleOpenModal = (serviceName: string) => {
    setSelectedService(serviceName);
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
            <span className="text-sky-800">Our Services</span>
          </nav>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            PCD Pharma Franchise &amp; Third-Party Contract Manufacturing
          </h1>
          <div className="accent-bar mx-auto"></div>
          <p className="max-w-3xl mx-auto text-slate-600 text-sm sm:text-base leading-relaxed">
            Incredible Medicare delivers comprehensive pharmaceutical solutions: from district-wise monopoly PCD franchises to full-scale WHO-GMP contract manufacturing for emerging and established healthcare brands.
          </p>
        </div>
      </section>

      {/* 1. Third Party Manufacturing Section */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-sky-700 text-xs font-bold uppercase tracking-wider">
                  Contract Manufacturing
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Third-Party Pharmaceutical Manufacturing Services
                </h2>
                <div className="accent-bar"></div>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                We offer reliable, end-to-end third-party manufacturing backed by our WHO-GMP certified production facility. Whether you require solid orals (tablets, capsules), liquid syrups, sterile injectables, or topical formulations, we deliver guaranteed quality, rapid turnaround, and competitive commercial pricing.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  {
                    title: "Cost-Effective Production",
                    desc: "Eliminate manufacturing capex and operational overheads while maintaining strict global compliance."
                  },
                  {
                    title: "Custom Branding & Packaging",
                    desc: "Full private labeling in Alu-Alu, Blister, Amber Glass, and tamper-evident mono cartons."
                  },
                  {
                    title: "Broad Formulation Scope",
                    desc: "Over 650+ approved DCGI formulations spanning all critical therapeutic areas."
                  },
                  {
                    title: "Timely Dispatch & Bulk Scale",
                    desc: "Automated high-capacity lines ensuring on-time batch release and uninterrupted supply chains."
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
                  onClick={() => handleOpenModal("Third-Party Contract Manufacturing")}
                  className="px-6 py-3 bg-sky-700 hover:bg-sky-800 text-white font-bold text-xs rounded-xl shadow-xs transition"
                >
                  Request Third-Party Manufacturing Quotation
                </button>
              </div>
            </div>

            {/* Right Manufacturing Highlights Card */}
            <div className="lg:col-span-5 bg-slate-900 text-white rounded-3xl p-8 sm:p-10 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-sky-600 text-white flex items-center justify-center font-bold">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">Manufacturing Credentials</h3>
                  <p className="text-xs text-sky-400">SIDCO Industrial Complex, Kathua</p>
                </div>
              </div>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>WHO-GMP &amp; ISO 9001:2015 Approved Plant</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Class 10,000 (ISO 7) &amp; Class 100,000 Cleanrooms</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>State-of-the-art HPLC and Spectroscopy Testing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Batch Release Certificates &amp; COA with Every Order</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Comprehensive Legal &amp; DCGI Documentation Assistance</span>
                </div>
              </div>

              <div className="p-4 bg-slate-800/80 rounded-xl border border-slate-700 text-xs text-slate-300">
                Direct manufacturing coordination handled from our Corporate HQ at Unicity Business Park, Zirakpur.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PCD Pharma Franchise Section */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left PCD Highlights Card */}
            <div className="lg:col-span-5 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center font-bold">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Franchise Support Kit</h3>
                  <p className="text-xs text-slate-500">Free Promotional Inputs Included</p>
                </div>
              </div>

              <div className="space-y-2.5 text-xs text-slate-700">
                <div className="p-3 bg-slate-50 rounded-lg flex items-center justify-between">
                  <span className="font-semibold">Comprehensive Visual Aids</span>
                  <span className="text-emerald-700 font-bold">Provided Free</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg flex items-center justify-between">
                  <span className="font-semibold">Doctor Reminder Cards &amp; LBLs</span>
                  <span className="text-emerald-700 font-bold">Provided Free</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg flex items-center justify-between">
                  <span className="font-semibold">MR Executive Bags &amp; Catch Covers</span>
                  <span className="text-emerald-700 font-bold">Provided Free</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg flex items-center justify-between">
                  <span className="font-semibold">Visiting Cards &amp; Prescription Pads</span>
                  <span className="text-emerald-700 font-bold">Provided Free</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg flex items-center justify-between">
                  <span className="font-semibold">Physician Promotional Samples</span>
                  <span className="text-emerald-700 font-bold">Supported</span>
                </div>
              </div>

              <div className="p-3.5 bg-sky-50 text-sky-900 border border-sky-200 rounded-xl text-xs font-medium">
                Monopoly rights granted with formal legal authorization agreement for your district.
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-sky-700 text-xs font-bold uppercase tracking-wider">
                  Franchise Opportunity
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  PCD Pharma Franchise – Grow Your Business with Complete Monopoly
                </h2>
                <div className="accent-bar"></div>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Incredible Medicare invites pharma professionals, medical representatives, distributors, and entrepreneurs to become our exclusive franchise associates. We offer attractive net price rates, wide product availability, zero internal competition, and comprehensive promotional backing.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  "District-Wise Monopoly Rights: Guaranteed exclusivity in your demarcated territory.",
                  "Over 650+ Fast-Moving Formulations: Antibiotics, Pain, Gastro, Derma, Neuro, Cardiac & Nutra.",
                  "High Profit Margins: Competitive commercial pricing allowing superior retail returns.",
                  "Zero Minimum Quota Pressure: Realistic, sustainable growth tailored to your local network.",
                  "Prompt 24-48h Pan-India Dispatch: Fast logistics handling to prevent chemist stockouts."
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 font-medium">{point}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => handleOpenModal("PCD Pharma Franchise Monopoly Rights")}
                  className="px-6 py-3 bg-sky-700 hover:bg-sky-800 text-white font-bold text-xs rounded-xl shadow-xs transition"
                >
                  Apply for Territory Monopoly Rights
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Formulation R&D and Regulatory Dossier Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-sky-700 text-xs font-bold uppercase tracking-wider">
              Technical Excellence
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Formulation R&amp;D &amp; Regulatory Services
            </h2>
            <div className="accent-bar mx-auto"></div>
            <p className="text-sm sm:text-base text-slate-600">
              Supporting your business with end-to-end scientific, analytical, and documentation expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Analytical Quality Assurance</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Method development, assay verification, impurity profiling, and accelerated stability studies in compliance with ICH and pharmacopeial guidelines.
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Regulatory Dossier Preparation</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Full technical dossiers in eCTD and ACTD formats, Certificate of Pharmaceutical Products (COPP), and Free Sale Documentation for international registration.
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                <Package className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Custom Packaging Innovation</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Creative design assistance, multilingual carton adaptation, anti-counterfeiting holographic integration, and tamper-evident sealing solutions.
              </p>
            </div>
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
