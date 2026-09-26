"use client";

import React, { useState } from "react";
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
  Sparkles,
  PhoneCall,
  Check
} from "lucide-react";
import { COMPANY_INFO, DIVISIONS } from "@/data/company";
import EnquiryModal from "@/components/EnquiryModal";

export default function AboutPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="w-full bg-white text-slate-900">
      {/* Page Header Banner */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-14 sm:py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <nav className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            <Link href="/" className="hover:text-sky-700">Home</Link>
            <span>/</span>
            <span className="text-sky-800">About Us</span>
          </nav>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Driving Pharmaceutical Excellence &amp; Ethical Healthcare
          </h1>
          <div className="accent-bar mx-auto"></div>
          <p className="max-w-3xl mx-auto text-slate-600 text-sm sm:text-base leading-relaxed">
            Incredible Medicare is an ISO 9001:2015 &amp; WHO-GMP accredited pharmaceutical company based in Zirakpur, Punjab. Founded on principles of therapeutic bioequivalence, scientific rigor, and partner trust.
          </p>
        </div>
      </section>

      {/* Corporate Profile Details */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-sky-700 text-xs font-bold uppercase tracking-wider">
                  Corporate Overview
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Pioneering High-Quality Formulations for Pan-India &amp; Global Healthcare
                </h2>
                <div className="accent-bar"></div>
              </div>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  At <strong>Incredible Medicare</strong>, we believe that access to high-potency, safe, and cost-effective pharmaceutical formulations is fundamental to advancing human health. Our corporate journey has evolved from a targeted regional distributor to a full-spectrum formulation enterprise commanding over 650+ DCGI-approved formulations.
                </p>
                <p>
                  Headquartered at <strong>Unicity Business Park, Dhakoli, Zirakpur (Punjab)</strong>, our executive leadership oversees a multidisciplinary supply chain, rigorous quality audits, pan-India franchise enablement, and international export dossiers.
                </p>
                <p>
                  Our primary manufacturing facility operates at the <strong>SIDCO Industrial Complex, Ghatti, Kathua (J&amp;K)</strong>, in strict compliance with current Good Manufacturing Practices (cGMP), ISO 9001:2015, and WHO-GMP specifications.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-center">
                  <div className="text-xl sm:text-2xl font-extrabold text-sky-800">650+</div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">Approved Products</div>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-center">
                  <div className="text-xl sm:text-2xl font-extrabold text-sky-800">850+</div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">Franchise Associates</div>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-center">
                  <div className="text-xl sm:text-2xl font-extrabold text-sky-800">120M+</div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">Annual Units</div>
                </div>
              </div>
            </div>

            {/* Right Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white p-2 shadow-xs border border-slate-200 flex items-center justify-center">
                    <Image
                      src="/logo.png"
                      alt="Incredible Medicare Logo"
                      width={44}
                      height={44}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Incredible Medicare</h3>
                    <p className="text-xs text-slate-500">Quality Assured Healthcare</p>
                  </div>
                </div>

                <div className="space-y-3 text-xs text-slate-700">
                  <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1">
                    <div className="font-bold text-slate-900 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>WHO-GMP &amp; ISO 9001:2015</span>
                    </div>
                    <p className="text-slate-500 leading-relaxed">
                      Every batch is validated with analytical certificates, dissolution testing, and assay documentation.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1">
                    <div className="font-bold text-slate-900 flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-sky-700" />
                      <span>Dual Strategic Locations</span>
                    </div>
                    <p className="text-slate-500 leading-relaxed">
                      Commercial HQ in Zirakpur (Punjab) + High-capacity Manufacturing Complex in Kathua (J&amp;K).
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1">
                    <div className="font-bold text-slate-900 flex items-center gap-2">
                      <Users className="w-4 h-4 text-sky-700" />
                      <span>Partner-Centric Growth</span>
                    </div>
                    <p className="text-slate-500 leading-relaxed">
                      Monopoly marketing rights, transparent billing, and dedicated relationship managers for all associates.
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="w-full py-3 bg-sky-700 hover:bg-sky-800 text-white font-semibold text-xs rounded-xl shadow-xs transition"
                >
                  Download Corporate Profile &amp; Product List
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, and Values */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-sky-700 text-xs font-bold uppercase tracking-wider">
              Strategic Foundation
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Mission, Vision &amp; Core Philosophy
            </h2>
            <div className="accent-bar mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center font-bold">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Our Mission</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                To formulate, manufacture, and distribute globally compliant, cost-effective, and therapeutically superior medicines through structured quality systems, ethical commercial practices, and robust nationwide logistics.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Our Vision</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                To emerge as one of India&apos;s most reputable and scientifically dependable pharmaceutical corporations, recognized across domestic and emerging international markets for unyielding formulation integrity.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Our Values</h3>
              <ul className="text-xs sm:text-sm text-slate-600 space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Quality First:</strong> Zero compromise on testing.</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Integrity:</strong> Honest batch pricing &amp; monopoly.</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Innovation:</strong> Contemporary drug delivery systems.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Policy & Analytical Assurance */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-sky-700 text-xs font-bold uppercase tracking-wider">
                  Quality Infrastructure
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Comprehensive Analytical &amp; Quality Control Systems
                </h2>
                <div className="accent-bar"></div>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Quality at Incredible Medicare is not merely an inspection step—it is integrated into every phase of our manufacturing cycle. From active pharmaceutical ingredient (API) vendor qualification to in-process compression checks and finished batch stability analysis.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  "Raw Material & API Assay Verification via High Performance Liquid Chromatography (HPLC)",
                  "Controlled Cleanroom Environments with HEPA Air Handling Units (AHU) Class 10,000 & 100,000",
                  "Automated Blister & Alu-Alu Leak Detection with Microprocessor Controls",
                  "Dedicated Microbiological Testing Lab for Sterility & Bacterial Endotoxin Testing (BET)",
                  "Accelerated & Real-time Stability Chamber Studies as per ICH Guidelines",
                  "Full Batch Traceability with Unique Serialized QR Codes and Tamper-evident Holograms"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-sky-700 shrink-0 mt-1" />
                    <span className="text-xs sm:text-sm font-medium text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 space-y-6">
              <div className="space-y-2">
                <span className="text-sky-400 text-xs font-bold uppercase tracking-widest">
                  Leadership Philosophy
                </span>
                <h3 className="text-2xl font-bold text-white">
                  &ldquo;A Patient-First Commitment Behind Every Dose&rdquo;
                </h3>
              </div>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                When a doctor prescribes an Incredible Medicare medicine, they place their clinical trust in our science. We honor that trust through unyielding consistency, absolute bio-equivalence, and honest commercial partnerships with every distributor across the nation.
              </p>

              <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <div className="font-bold text-white text-sm">Commercial Directorate</div>
                  <div className="text-xs text-sky-400">Incredible Medicare</div>
                </div>
                <div className="text-xs text-slate-400">Zirakpur, Punjab</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Explore Opportunities with Incredible Medicare
          </h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto">
            Discover our complete product directory or connect with our corporate team at Unicity Business Park, Zirakpur.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/products"
              className="px-6 py-3 bg-sky-700 hover:bg-sky-800 text-white text-xs font-bold rounded-xl transition"
            >
              View Products (650+)
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 text-xs font-bold rounded-xl transition"
            >
              Contact Us Directly
            </Link>
          </div>
        </div>
      </section>

      <EnquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
