"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Award,
  TrendingUp,
  FileCheck,
  CheckCircle2,
  ArrowRight,
  Package,
  Layers,
  Sparkles,
  Building2,
  PhoneCall,
  Clock,
  Compass,
  FileText,
  Search,
  Check,
  ChevronRight
} from "lucide-react";
import {
  COMPANY_INFO,
  ANNUAL_CAPACITIES,
  DIVISIONS,
  TESTIMONIALS,
  BLOG_POSTS
} from "@/data/company";
import { PRODUCTS, Product } from "@/data/products";
import EnquiryModal from "@/components/EnquiryModal";

export default function HomePage() {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Antibiotics & Antimicrobials",
    "Pain Management & Orthopaedics",
    "Gastroenterology & Antacids",
    "Nutraceuticals & Haematinic",
    "Dermatology & Skin Care"
  ];

  const filteredProducts =
    activeCategory === "All"
      ? PRODUCTS.filter((p) => p.featured).slice(0, 6)
      : PRODUCTS.filter((p) => p.category === activeCategory).slice(0, 6);

  const openQuoteForProduct = (prodName: string) => {
    setSelectedProduct(prodName);
    setEnquiryModalOpen(true);
  };

  return (
    <div className="w-full bg-white text-slate-900">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-sky-50/30 to-white py-16 sm:py-24 border-b border-slate-200">
        <div className="hero-pattern absolute inset-0 opacity-40 pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100/80 border border-sky-200 text-sky-900 text-xs font-bold tracking-wide">
                <ShieldCheck className="w-4 h-4 text-sky-700" />
                <span>WHO-GMP &amp; ISO 9001:2015 CERTIFIED PHARMACEUTICAL ENTERPRISE</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
                Delivering Excellence in{" "}
                <span className="text-sky-700">Pharmaceutical</span>{" "}
                Manufacturing &amp; PCD Franchise.
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
                <strong>Incredible Medicare</strong> delivers high-standard, bioequivalent medicines across India. Backed by state-of-the-art cleanrooms, 650+ approved DCGI formulations, and nationwide franchise monopoly rights.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-sky-700 hover:bg-sky-800 text-white font-bold text-sm rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                  <Package className="w-4 h-4" />
                  <span>Browse 650+ Products</span>
                </Link>

                <button
                  type="button"
                  onClick={() => {
                    setSelectedProduct("");
                    setEnquiryModalOpen(true);
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-800 hover:text-sky-800 font-bold text-sm rounded-xl border border-slate-300 shadow-xs hover:border-sky-300 transition-all cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-sky-700" />
                  <span>Request Franchise Terms</span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-4 sm:gap-6 text-slate-700">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    15+
                  </div>
                  <div className="text-xs text-slate-500 font-medium">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    650+
                  </div>
                  <div className="text-xs text-slate-500 font-medium">Approved Products</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    850+
                  </div>
                  <div className="text-xs text-slate-500 font-medium">Franchise Partners</div>
                </div>
              </div>
            </div>

            {/* Right Card / Visual Showcase */}
            <div className="lg:col-span-5">
              <div className="relative bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200">
                {/* Decorative highlight */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-sky-100 rounded-bl-full -z-10 opacity-50"></div>

                <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center p-2 shadow-xs">
                      <Image
                        src="/logo.png"
                        alt="Incredible Medicare Logo"
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h2 className="font-bold text-slate-900 text-base">Incredible Medicare</h2>
                      <p className="text-xs text-slate-500">Corporate Headquarters</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold rounded-md">
                    Verified Plant
                  </span>
                </div>

                <div className="py-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                        Head Office Location
                      </h3>
                      <p className="text-xs text-slate-600 mt-0.5">
                        {COMPANY_INFO.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center shrink-0 mt-0.5">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                        Quality Certifications
                      </h3>
                      <p className="text-xs text-slate-600 mt-0.5">
                        WHO-GMP, ISO 9001:2015, GLP &amp; cGMP Compliant Facility
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Compass className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                        Commercial Channels
                      </h3>
                      <p className="text-xs text-slate-600 mt-0.5">
                        PCD Pharma Franchise, Third-Party Contract Manufacturing, Global Exports
                      </p>
                    </div>
                  </div>
                </div>

                {/* Instant Quote Callout */}
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-slate-900">
                        Need Instant Price List?
                      </div>
                      <div className="text-[11px] text-slate-500">
                        Available on email: {COMPANY_INFO.email}
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedProduct("Full Product Price List");
                        setEnquiryModalOpen(true);
                      }}
                      className="px-3.5 py-1.5 bg-sky-700 hover:bg-sky-800 text-white text-xs font-semibold rounded-lg transition"
                    >
                      Get PDF
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ACCREDITATIONS & QUALITY STANDARDS BANNER */}
      <section className="bg-slate-900 text-white py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-sky-400 text-xs font-bold tracking-widest uppercase">
              Regulatory Standards &amp; Certifications
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
              Engineered Under Stringent Regulatory Benchmarks
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {COMPANY_INFO.accreditations.map((item) => (
              <div
                key={item.title}
                className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/80 text-center hover:border-sky-500 transition-colors"
              >
                <div className="w-10 h-10 bg-sky-950 text-sky-400 rounded-lg flex items-center justify-center mx-auto mb-2 border border-sky-800/40">
                  <Award className="w-5 h-5" />
                </div>
                <div className="font-bold text-white text-sm">{item.title}</div>
                <div className="text-[11px] text-slate-400 mt-1 leading-tight">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ABOUT INCREDIBLE MEDICARE SNAPSHOT */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Box */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-700 text-white flex items-center justify-center font-bold">
                    HQ
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">
                      Corporate Headquarters
                    </h3>
                    <p className="text-xs text-slate-500">
                      Unicity Business Park, Dhakoli, Zirakpur, Punjab 160104
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-2xl border border-slate-200/80 text-xs text-slate-600 leading-relaxed">
                  Strategically located in the Chandigarh Tricity industrial corridor, our corporate headquarters coordinates pan-India distribution, partner logistics, regulatory documentation, and strategic expansions.
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 text-white flex items-center justify-center font-bold">
                    PLANT
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">
                      Manufacturing Unit
                    </h3>
                    <p className="text-xs text-slate-500">
                      SIDCO Industrial Complex, Ghatti, Kathua, J&amp;K 184143
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-2xl border border-slate-200/80 text-xs text-slate-600 leading-relaxed">
                  Operates under WHO-GMP compliance, equipped with high-speed automated blister packing, liquid bottle lines, Class 10,000 cleanrooms, and dedicated QA/QC analytical suites.
                </div>
              </div>
            </div>

            {/* Content Box */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-sky-700 text-xs font-bold uppercase tracking-wider">
                  About Incredible Medicare
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  From Punjab to Nationwide Markets — Expanding with Clinical Integrity.
                </h2>
                <div className="accent-bar"></div>
              </div>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  <strong>Incredible Medicare</strong> is a distinguished Indian pharmaceutical enterprise specializing in the development, manufacture, and distribution of high-grade ethical formulations across multiple therapeutic segments.
                </p>
                <p>
                  Built on a foundation of precision, regulatory compliance, and uncompromising quality benchmarks, we serve hospitals, clinics, medical institutions, and retail chemists through our dedicated network of PCD franchise associates and wholesale partners.
                </p>
                <p>
                  Our extensive portfolio covers tablets, capsules, sterile injectables, oral syrups, topical ointments, and advanced nutraceuticals formulated to satisfy current DCGI guidelines and international pharmacopeial standards.
                </p>
              </div>

              {/* Core Feature Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "100% WHO-GMP & ISO 9001:2015 Compliance",
                  "Monopoly-Backed PCD Pharma Franchise Rights",
                  "Over 650+ DCGI Approved Formulations",
                  "Complete Promotional Support & Visual Aids",
                  "Turnkey Third-Party Contract Manufacturing",
                  "Prompt Dispatch & Real-Time Consignment Tracking"
                ].map((feat) => (
                  <div key={feat} className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-sky-700 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold rounded-xl transition"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm font-semibold rounded-xl transition"
                >
                  <span>Contact Headquarters</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ANNUAL MANUFACTURING CAPACITY */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-sky-700 text-xs font-bold uppercase tracking-wider">
              High-Volume Infrastructure
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Annual Manufacturing Capacity
            </h2>
            <div className="accent-bar mx-auto"></div>
            <p className="text-sm sm:text-base text-slate-600">
              Built for scale, consistency, and prompt batch delivery to support both domestic distribution and third-party corporate partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {ANNUAL_CAPACITIES.map((cap) => (
              <div
                key={cap.form}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-all text-center flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-semibold bg-sky-50 text-sky-800 border border-sky-100 mb-4">
                    {cap.badge}
                  </span>
                  <h3 className="font-bold text-slate-900 text-lg mb-1">{cap.form}</h3>
                  <div className="text-2xl sm:text-3xl font-extrabold text-sky-800 my-2">
                    {cap.metric}
                  </div>
                  <p className="text-xs text-slate-500 font-medium">{cap.subtext}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] text-slate-400 font-medium">
                  Automated High-Speed Lines
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FEATURED PRODUCT SHOWCASE */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-sky-700 text-xs font-bold uppercase tracking-wider">
                Comprehensive Formulations
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
                Featured Pharmaceutical Products
              </h2>
              <div className="accent-bar mt-2"></div>
              <p className="text-sm text-slate-600 mt-2 max-w-xl">
                High-efficacy medicines produced in accordance with IP/BP/USP standards, offering dependable clinical relief and doctor trust.
              </p>
            </div>

            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-sky-700 hover:text-sky-900 transition"
            >
              <span>View All 650+ Formulations</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition cursor-pointer ${
                  activeCategory === cat
                    ? "bg-sky-700 text-white shadow-xs"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-bold text-sky-800 bg-sky-50 px-2.5 py-1 rounded-md border border-sky-100">
                      {product.form}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-500">
                      {product.packingType}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                    {product.name}
                  </h3>

                  <div className="text-xs font-medium text-slate-600 mt-1 line-clamp-2">
                    {product.genericName}
                  </div>

                  <p className="text-xs text-slate-500 mt-3 leading-relaxed line-clamp-3">
                    {product.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100 space-y-1 text-xs">
                    <div className="flex items-center justify-between text-slate-600">
                      <span className="text-slate-400">Packaging:</span>
                      <span className="font-semibold">{product.packaging}</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-600">
                      <span className="text-slate-400">Division:</span>
                      <span className="font-semibold text-slate-700 truncate max-w-[180px]">
                        {product.division}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-3 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => openQuoteForProduct(product.name)}
                    className="flex-1 py-2 bg-sky-700 hover:bg-sky-800 text-white text-xs font-semibold rounded-lg transition cursor-pointer"
                  >
                    Enquire Now
                  </button>
                  <Link
                    href={`/products`}
                    className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg transition"
                  >
                    Details
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm rounded-xl transition shadow-xs"
            >
              <span>Explore Entire Product Directory</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. BUSINESS SOLUTIONS: PCD FRANCHISE & THIRD PARTY */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-sky-700 text-xs font-bold uppercase tracking-wider">
              Strategic Partnerships
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Comprehensive Pharmaceutical Solutions
            </h2>
            <div className="accent-bar mx-auto"></div>
            <p className="text-sm sm:text-base text-slate-600">
              Whether you are an aspiring pharma entrepreneur looking for an exclusive PCD franchise or an established brand requiring reliable contract manufacturing, Incredible Medicare delivers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Box 1: PCD Pharma Franchise */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center font-bold">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  PCD Pharma Franchise Business
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Join our nationwide franchise network with genuine monopoly rights, attractive net rates, high profit margins, and zero internal competition in your designated territory.
                </p>
                <div className="space-y-2 pt-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Exclusive district-wise monopoly marketing agreements</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Free promotional inputs: Visual aids, LBLs, catch covers, MR bags</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Fast pan-India dispatch with stock availability assurance</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Continuous new DCGI approved formulation launches</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedProduct("PCD Franchise Monopoly Application");
                    setEnquiryModalOpen(true);
                  }}
                  className="px-5 py-2.5 bg-sky-700 hover:bg-sky-800 text-white text-xs font-bold rounded-lg transition"
                >
                  Apply for Franchise
                </button>
                <Link
                  href="/our-services"
                  className="text-xs font-bold text-slate-700 hover:text-sky-700 flex items-center gap-1"
                >
                  <span>Learn terms</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Box 2: Third Party Manufacturing */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Third-Party Contract Manufacturing
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Leverage our WHO-GMP certified production units for turnkey manufacturing of your private label medicines with strict quality control and predictable timelines.
                </p>
                <div className="space-y-2 pt-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Cost-effective contract production without capex investment</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Custom packaging: Alu-Alu, Blister, Amber Glass, Lyophilized Vials</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Comprehensive regulatory documentation &amp; analytical release</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Flexible batch sizes with guaranteed delivery schedules</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedProduct("Third Party Manufacturing Contract");
                    setEnquiryModalOpen(true);
                  }}
                  className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-lg transition"
                >
                  Request Manufacturing Quote
                </button>
                <Link
                  href="/infrastructure"
                  className="text-xs font-bold text-slate-700 hover:text-sky-700 flex items-center gap-1"
                >
                  <span>View plant specs</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SPECIALIZED DIVISIONS */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-sky-700 text-xs font-bold uppercase tracking-wider">
              Focused Market Verticals
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Specialized Business Divisions
            </h2>
            <div className="accent-bar mx-auto"></div>
            <p className="text-sm sm:text-base text-slate-600">
              Each division at Incredible Medicare operates with dedicated formulation expertise, tailored promotional inputs, and specialized clinical focus.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DIVISIONS.map((div) => (
              <div
                key={div.id}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-sky-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold text-sky-800 uppercase tracking-wider">
                      {div.category}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      {div.productCount}
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-1">{div.name}</h3>
                  <div className="text-xs font-semibold text-sky-700 mb-2">
                    {div.tagline}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {div.description}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-slate-200/80">
                    {div.highlights.map((h) => (
                      <div key={h} className="text-xs text-slate-700 flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-sky-600"></div>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3">
                  <Link
                    href="/divisions"
                    className="w-full flex items-center justify-center gap-1.5 py-2 bg-white hover:bg-sky-50 text-sky-800 border border-slate-200 text-xs font-bold rounded-lg transition"
                  >
                    <span>Explore Division Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS & TRUST */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-sky-700 text-xs font-bold uppercase tracking-wider">
              Client Relationships
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Trusted by Doctors &amp; Distributors Nationwide
            </h2>
            <div className="accent-bar mx-auto"></div>
            <p className="text-sm sm:text-base text-slate-600">
              Delivering verifiable quality, ethical supply assurance, and long-term collaborative value across the healthcare ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-500 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <span key={i} className="text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                    &ldquo;{t.content}&rdquo;
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100">
                  <div className="font-bold text-slate-900 text-sm">{t.name}</div>
                  <div className="text-xs text-sky-700 font-medium">{t.designation}</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">{t.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. LATEST BLOG POSTS & PHARMA INSIGHTS */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-sky-700 text-xs font-bold uppercase tracking-wider">
                Industry Knowledge
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
                Latest Insights &amp; Market Updates
              </h2>
              <div className="accent-bar mt-2"></div>
            </div>

            <Link
              href="/blogs"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-sky-700 hover:text-sky-900 transition"
            >
              <span>View All Articles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post) => (
              <div
                key={post.slug}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] text-slate-500 mb-3">
                    <span className="font-semibold text-sky-700 bg-sky-50 px-2 py-0.5 rounded-md border border-sky-100">
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2 hover:text-sky-700 transition">
                    <Link href="/blogs">{post.title}</Link>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs">
                  <span className="text-slate-400">{post.date}</span>
                  <Link
                    href="/blogs"
                    className="font-bold text-sky-700 hover:text-sky-900 flex items-center gap-1"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CALL TO ACTION: READY TO PARTNER */}
      <section className="py-16 bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-sky-400 text-xs font-bold uppercase tracking-widest">
            Unleash Business Growth
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Ready to Partner With Incredible Medicare?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Contact our business development team today to inquire about available district monopoly rights for PCD franchise or discuss third-party contract manufacturing schedules.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              type="button"
              onClick={() => {
                setSelectedProduct("");
                setEnquiryModalOpen(true);
              }}
              className="px-8 py-3.5 bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm rounded-xl shadow-lg transition-all cursor-pointer"
            >
              Get Instant Price List &amp; Terms
            </button>
            <a
              href={`tel:${COMPANY_INFO.whatsapp}`}
              className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-sm rounded-xl border border-white/20 transition-all flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-sky-400" />
              <span>Call: {COMPANY_INFO.phone}</span>
            </a>
          </div>

          <div className="text-xs text-slate-400 pt-4">
            Official Email:{" "}
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="text-white underline hover:text-sky-300"
            >
              {COMPANY_INFO.email}
            </a>{" "}
            | Head Office: Unicity Business Park, Dhakoli, Zirakpur, Punjab 160104
          </div>
        </div>
      </section>

      {/* Global Quote Modal */}
      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
        initialProduct={selectedProduct}
      />
    </div>
  );
}
