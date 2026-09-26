"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  Package,
  Layers,
  CheckCircle2,
  RotateCcw,
  X,
  ArrowRight,
  Box,
  Landmark,
  FileText,
  ShieldCheck,
  Boxes,
  Handshake,
  MessageSquareText,
} from "lucide-react";
import { PRODUCTS, PRODUCT_CATEGORIES, PRODUCT_FORMS, Product } from "@/data/products";
import EnquiryModal from "@/components/EnquiryModal";

const PRIMARY_BTN =
  "inline-flex items-center justify-center gap-3 rounded-[4px] bg-[#0b5bd3] hover:bg-[#0a4db3] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(11,91,211,0.35)] transition cursor-pointer";
const OUTLINE_BTN =
  "inline-flex items-center justify-center gap-3 rounded-[4px] border border-[#0b5bd3] bg-white/70 hover:bg-white px-7 py-3.5 text-sm font-semibold text-[#0b5bd3] transition cursor-pointer";
const GLASS =
  "rounded-[4px] border border-white bg-white/85 backdrop-blur shadow-[0_10px_40px_rgba(30,80,160,0.10)]";

const TINTS = [
  "bg-sky-200/60",
  "bg-emerald-200/50",
  "bg-violet-200/50",
  "bg-orange-200/50",
  "bg-blue-200/60",
  "bg-rose-200/50",
];

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

function FilterList({
  title,
  icon: Icon,
  items,
  value,
  allLabel,
  onChange,
  maxH,
}: {
  title: string;
  icon: React.ElementType;
  items: string[];
  value: string;
  allLabel: string;
  onChange: (v: string) => void;
  maxH: string;
}) {
  return (
    <div className={`${GLASS} p-5`}>
      <div className="flex items-center justify-between border-b border-slate-200/70 pb-3">
        <h3 className="flex items-center gap-2.5 text-sm font-bold text-[#0a1f44]">
          <Icon className="h-5 w-5 text-[#0b5bd3]" strokeWidth={1.6} />
          {title}
        </h3>
        {value !== allLabel && (
          <button
            type="button"
            onClick={() => onChange(allLabel)}
            className="text-[11px] font-semibold text-[#0b5bd3] hover:underline cursor-pointer"
          >
            Clear
          </button>
        )}
      </div>
      <div className={`mt-3 space-y-1 overflow-y-auto pr-1 ${maxH}`}>
        {items.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => onChange(item)}
            className={`flex w-full items-center justify-between rounded-[4px] border px-3 py-2.5 text-left text-[13px] transition cursor-pointer ${
              value === item
                ? "border-[#cfe0f7] bg-[#eaf1fd] font-bold text-[#0b4a99]"
                : "border-transparent font-medium text-slate-600 hover:bg-[#f1f6fd] hover:text-[#0a1f44]"
            }`}
          >
            <span>{item}</span>
            {value === item && <CheckCircle2 className="h-4 w-4 shrink-0 text-[#0b5bd3]" />}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedForm, setSelectedForm] = useState("All Forms");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProductForQuote, setSelectedProductForQuote] = useState("");
  const [activeProductDetail, setActiveProductDetail] = useState<Product | null>(null);

  const filteredProducts = useMemo(() => {
    const q = searchQuery.toLowerCase();
    return PRODUCTS.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(q) ||
        item.genericName.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.indications.some((ind) => ind.toLowerCase().includes(q));
      const matchesCategory =
        selectedCategory === "All Categories" || item.category === selectedCategory;
      const matchesForm = selectedForm === "All Forms" || item.form === selectedForm;
      return matchesSearch && matchesCategory && matchesForm;
    });
  }, [searchQuery, selectedCategory, selectedForm]);

  const isFiltered =
    searchQuery !== "" || selectedCategory !== "All Categories" || selectedForm !== "All Forms";

  useEffect(() => {
    if (!activeProductDetail) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveProductDetail(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeProductDetail]);

  const handleEnquire = (prodName: string) => {
    setSelectedProductForQuote(prodName);
    setModalOpen(true);
  };

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All Categories");
    setSelectedForm("All Forms");
  };

  return (
    <div className="w-full bg-white text-slate-900">
      {/* Hero */}
      <section className="relative flex items-center overflow-hidden bg-gradient-to-br from-[#f7faff] via-[#eef4fc] to-[#e3edfb] lg:min-h-[max(520px,36vw)]">
        <div className="pointer-events-none absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full bg-[#dbe8fb]/60 blur-3xl" />

        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[42%] overflow-hidden rounded-bl-[9rem] shadow-[0_20px_60px_rgba(30,80,160,0.25)] lg:block">
          <Image
            src="/infra-vial.jpg"
            alt="Pipette over a pharmaceutical vial"
            fill
            priority
            sizes="42vw"
            className="object-cover"
            style={{ objectPosition: "30% 50%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b5bd3]/25 via-transparent to-transparent" />
        </div>
        <div className="pointer-events-none absolute right-[38%] top-[18%] hidden h-24 w-24 rounded-full border-[10px] border-[#cfe0f7]/70 lg:block" />

        <div className="relative mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
          <div className="max-w-2xl lg:max-w-[54%]">
            <Eyebrow>Product Portfolio</Eyebrow>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.08] tracking-tight text-[#0a1f44] sm:text-5xl lg:text-[2.6rem] xl:text-[3.25rem]">
              Complete{" "}
              <span className="text-[#0b5bd3]">Pharmaceutical Formulations</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600">
              Explore Incredible Medicare&apos;s comprehensive DCGI-approved formulation range. Designed to deliver superior clinical outcomes with strict WHO-GMP quality assurance.
            </p>

            <div className={`${GLASS} mt-7 flex items-center gap-3 p-2 pl-4`}>
              <Search className="h-5 w-5 shrink-0 text-[#0b5bd3]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by brand name, active salt, or indication..."
                aria-label="Search products"
                className="min-w-0 flex-1 bg-transparent py-2 text-sm text-slate-800 outline-none placeholder:text-slate-400"
              />
              {searchQuery ? (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  aria-label="Clear search"
                  className="rounded-[4px] p-2 text-slate-400 transition hover:text-slate-700 cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>
              ) : null}
              <a
                href="#catalogue"
                className="hidden shrink-0 rounded-[4px] bg-[#0b5bd3] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0a4db3] sm:block"
              >
                Search
              </a>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-y-4">
              {[
                { icon: Boxes, a: "650+", b: "Formulations" },
                { icon: ShieldCheck, a: "DCGI", b: "Approved Range" },
                { icon: Package, a: "WHO-GMP", b: "Quality Assured" },
              ].map((f, i) => (
                <div
                  key={f.a}
                  className={`flex items-center gap-2.5 whitespace-nowrap pr-5 ${i > 0 ? "border-l border-[#cfe0f7] pl-5" : ""}`}
                >
                  <f.icon className="h-7 w-7 shrink-0 text-[#0b5bd3]" strokeWidth={1.5} />
                  <div className="leading-tight">
                    <div className="text-[13px] font-bold text-[#0a1f44]">{f.a}</div>
                    <div className="text-xs text-slate-500">{f.b}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 hidden lg:block">
          <div className="absolute right-[5%] top-[14%] flex w-[260px] items-center gap-4 rounded-[4px] border border-white bg-white/85 px-5 py-4 shadow-[0_12px_40px_rgba(30,80,160,0.18)] backdrop-blur">
            <Boxes className="h-9 w-9 shrink-0 text-[#0b5bd3]" strokeWidth={1.5} />
            <div className="leading-snug">
              <div className="text-sm font-bold text-[#0a1f44]">{PRODUCTS.length} Products Listed</div>
              <div className="mt-0.5 text-xs text-slate-500">Browse by form or therapy area</div>
            </div>
          </div>
          <div className="absolute bottom-[12%] right-[3%] flex w-[260px] items-center gap-4 rounded-[4px] border border-white bg-white/85 px-5 py-4 shadow-[0_12px_40px_rgba(30,80,160,0.18)] backdrop-blur">
            <FileText className="h-9 w-9 shrink-0 text-[#0b5bd3]" strokeWidth={1.5} />
            <div className="leading-snug">
              <div className="text-sm font-bold text-[#0a1f44]">Price List on Request</div>
              <div className="mt-0.5 text-xs text-slate-500">Net rates & batch orders</div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalogue */}
      <section
        id="catalogue"
        className="relative overflow-hidden bg-gradient-to-b from-[#f7faff] via-[#f1f6fd] to-[#eaf1fb] py-14 lg:py-16 scroll-mt-24"
      >
        <div className="pointer-events-none absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-[#dbe8fb]/60 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 -left-40 h-[420px] w-[420px] rounded-full bg-[#dbe8fb]/50 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div className="text-sm font-semibold text-slate-600">
              Showing <span className="font-extrabold text-[#0b5bd3]">{filteredProducts.length}</span> of{" "}
              {PRODUCTS.length} Formulations
            </div>
            {isFiltered && (
              <button
                type="button"
                onClick={handleResetFilters}
                className="inline-flex items-center gap-2 rounded-[4px] border border-[#cfe0f7] bg-white/80 px-4 py-2 text-xs font-semibold text-[#0b4a99] transition hover:bg-white cursor-pointer"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                Reset Filters
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-4">
            {/* Sidebar */}
            <aside className="space-y-6 lg:col-span-1">
              <FilterList
                title="Dosage Form"
                icon={Package}
                items={PRODUCT_FORMS}
                value={selectedForm}
                allLabel="All Forms"
                onChange={setSelectedForm}
                maxH="max-h-72"
              />
              <FilterList
                title="Therapeutic Area"
                icon={Layers}
                items={PRODUCT_CATEGORIES}
                value={selectedCategory}
                allLabel="All Categories"
                onChange={setSelectedCategory}
                maxH="max-h-80"
              />

              <div className="relative overflow-hidden rounded-[4px] bg-gradient-to-br from-[#04142f] via-[#08234b] to-[#0a2d5e] p-6 text-white shadow-[0_20px_50px_rgba(10,26,51,0.3)]">
                <FileText className="pointer-events-none absolute -bottom-6 -right-6 h-32 w-32 text-white/5" strokeWidth={1} />
                <div className="relative">
                  <h4 className="text-lg font-bold leading-snug">Need Full Product Price List?</h4>
                  <p className="mt-2 text-xs leading-relaxed text-slate-300">
                    Download complete PDF catalog with net rates, packaging types, and minimum batch orders.
                  </p>
                  <button
                    type="button"
                    onClick={() => handleEnquire("Complete PDF Price List")}
                    className="mt-5 flex w-full items-center justify-center gap-3 rounded-[4px] bg-[#0b5bd3] py-3 text-sm font-semibold text-white transition hover:bg-[#1a6de0] cursor-pointer"
                  >
                    Request Product List
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </aside>

            {/* Grid */}
            <div className="lg:col-span-3">
              {filteredProducts.length === 0 ? (
                <div className={`${GLASS} space-y-4 p-12 text-center`}>
                  <Search className="mx-auto h-12 w-12 text-[#0b5bd3]/40" strokeWidth={1.4} />
                  <h3 className="text-lg font-bold text-[#0a1f44]">No matching products found</h3>
                  <p className="mx-auto max-w-md text-sm text-slate-500">
                    Try adjusting your search criteria or reset filters to explore all available formulations.
                  </p>
                  <button type="button" onClick={handleResetFilters} className={PRIMARY_BTN}>
                    View All Products
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {filteredProducts.map((product, i) => (
                    <div
                      key={product.id}
                      className={`${GLASS} group relative flex flex-col justify-between overflow-hidden p-6`}
                    >
                      <div
                        className={`pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full blur-2xl ${TINTS[i % TINTS.length]}`}
                      />
                      <div className="relative flex flex-1 flex-col">
                        <div className="mb-4 flex items-center justify-between gap-2">
                          <span className="rounded-[4px] bg-[#eaf1fd] px-3 py-1.5 text-xs font-semibold text-[#0b5bd3]">
                            {product.form}
                          </span>
                          <span className="text-xs font-medium text-slate-500">{product.packingType}</span>
                        </div>

                        <h3 className="text-xl font-extrabold uppercase tracking-tight text-[#0a1f44] transition-colors group-hover:text-[#0b5bd3]">
                          {product.name}
                        </h3>
                        <div className="mt-2 line-clamp-2 min-h-[2.5rem] text-sm font-semibold leading-5 text-[#0b5bd3]">
                          {product.genericName}
                        </div>
                        <p className="mt-3 line-clamp-3 min-h-[3.75rem] text-[13px] leading-relaxed text-slate-500">
                          {product.description}
                        </p>

                        <div className="mb-5 mt-4 flex flex-wrap content-start gap-1.5">
                          {product.indications.slice(0, 3).map((ind) => (
                            <span
                              key={ind}
                              className="rounded-full bg-white px-2.5 py-1 text-[11px] font-medium text-slate-600 ring-1 ring-slate-200"
                            >
                              {ind}
                            </span>
                          ))}
                        </div>

                        <div className="mt-auto grid grid-cols-2 gap-3 border-t border-slate-200/70 pt-4">
                          <div className="flex items-center gap-2.5 border-r border-slate-200/70 pr-3">
                            <Box className="h-6 w-6 shrink-0 text-[#0b5bd3]" strokeWidth={1.5} />
                            <div className="min-w-0">
                              <div className="text-[11px] text-slate-400">Packaging</div>
                              <div className="text-[13px] font-semibold leading-tight text-[#0a1f44]">
                                {product.packaging}
                              </div>
                            </div>
                          </div>
                          <div className="flex min-w-0 items-center gap-2.5">
                            <Landmark className="h-6 w-6 shrink-0 text-[#0b5bd3]" strokeWidth={1.5} />
                            <div className="min-w-0">
                              <div className="text-[11px] text-slate-400">Division</div>
                              <div className="line-clamp-2 text-[13px] font-semibold leading-tight text-[#0a1f44]">
                                {product.division}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="relative mt-6 grid grid-cols-2 gap-3">
                        <button
                          type="button"
                          onClick={() => handleEnquire(product.name)}
                          className="inline-flex items-center justify-center gap-2 rounded-[4px] bg-[#0b5bd3] py-3 text-sm font-semibold text-white shadow-[0_6px_18px_rgba(11,91,211,0.3)] transition hover:bg-[#0a4db3] cursor-pointer"
                        >
                          Enquire / Quote
                          <ArrowRight className="h-4 w-4" />
                        </button>
                        <button
                          type="button"
                          onClick={() => setActiveProductDetail(product)}
                          className="inline-flex items-center justify-center gap-2 rounded-[4px] bg-[#eef3fb] py-3 text-sm font-semibold text-[#0a1f44] transition hover:bg-[#e3ecfa] cursor-pointer"
                        >
                          <FileText className="h-4 w-4 text-[#0b5bd3]" />
                          Details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#eaf1fb] via-[#f1f6fd] to-[#f7faff] py-16 lg:py-20">
        <div className="pointer-events-none absolute -left-32 top-4 hidden h-[420px] w-[420px] overflow-hidden rounded-full border-[14px] border-[#cfe0f7]/70 lg:block xl:-left-20">
          <Image src="/infra-packs.jpg" alt="" fill sizes="420px" className="object-cover" />
        </div>
        <div className="pointer-events-none absolute -right-32 top-10 hidden h-[420px] w-[420px] overflow-hidden rounded-full border-[14px] border-[#cfe0f7]/70 lg:block xl:-right-20">
          <Image src="/infra-lab.jpg" alt="" fill sizes="420px" className="object-cover" style={{ objectPosition: "40% 50%" }} />
        </div>
        <div className="relative mx-auto max-w-3xl px-4 text-center">
          <Eyebrow center>Partner with Incredible Medicare</Eyebrow>
          <h2 className="mt-4 text-3xl font-extrabold leading-[1.1] tracking-tight text-[#0a1f44] sm:text-4xl lg:text-5xl">
            Can&apos;t Find What You{" "}
            <span className="block text-[#0b5bd3]">Are Looking For?</span>
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-slate-600 sm:text-base">
            Our portfolio spans 650+ approved formulations. Tell us your requirement and our team will share availability, net rates, and custom manufacturing options.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            <button type="button" onClick={() => handleEnquire("Custom Product Requirement")} className={PRIMARY_BTN}>
              <Handshake className="h-5 w-5" />
              Request a Product
              <ArrowRight className="h-4 w-4" />
            </button>
            <Link href="/contact" className={OUTLINE_BTN}>
              <MessageSquareText className="h-5 w-5" />
              Contact Us Directly
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      {activeProductDetail && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-[#0a1f44]/60 p-4 backdrop-blur-sm"
          onClick={() => setActiveProductDetail(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={activeProductDetail.name}
            className="relative grid w-full max-w-3xl grid-cols-1 overflow-hidden rounded-[4px] bg-white shadow-2xl animate-in fade-in zoom-in-95 duration-200 md:grid-cols-5"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveProductDetail(null)}
              aria-label="Close"
              className="absolute right-3 top-3 z-10 rounded-[4px] bg-white/80 p-2 text-slate-500 transition hover:bg-white hover:text-slate-800 cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Left summary panel */}
            <div className="relative overflow-hidden bg-gradient-to-br from-[#04142f] via-[#08234b] to-[#0a2d5e] p-7 text-white md:col-span-2 md:flex md:flex-col">
              <Image
                src="/infra-packs.jpg"
                alt=""
                fill
                sizes="300px"
                className="object-cover opacity-15 mix-blend-luminosity"
              />
              <div className="relative">
                <span className="rounded-full border border-sky-400/30 bg-sky-500/20 px-3 py-1 text-[11px] font-semibold text-sky-300">
                  {activeProductDetail.form}
                </span>
                <h3 className="mt-4 text-2xl font-extrabold uppercase leading-tight">
                  {activeProductDetail.name}
                </h3>
                <p className="mt-2 text-xs text-sky-300">{activeProductDetail.category}</p>
              </div>

              <div className="relative mt-6 space-y-3 md:mt-auto">
                {[
                  { icon: Box, label: "Packaging", value: activeProductDetail.packaging },
                  { icon: Package, label: "Packing Type", value: activeProductDetail.packingType },
                  { icon: Landmark, label: "Division", value: activeProductDetail.division },
                ].map((m) => (
                  <div key={m.label} className="flex items-center gap-3 rounded-[4px] border border-white/10 bg-white/5 px-4 py-3">
                    <m.icon className="h-6 w-6 shrink-0 text-sky-300" strokeWidth={1.5} />
                    <div className="min-w-0 leading-tight">
                      <div className="text-[11px] text-slate-300">{m.label}</div>
                      <div className="mt-0.5 text-sm font-bold">{m.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right details */}
            <div className="space-y-5 p-7 md:col-span-3 md:pt-12">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#0b5bd3]">
                  Generic Composition
                </span>
                <p className="mt-1.5 text-base font-bold leading-snug text-[#0a1f44]">
                  {activeProductDetail.genericName}
                </p>
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#0b5bd3]">
                  Therapeutic Overview
                </span>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                  {activeProductDetail.description}
                </p>
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#0b5bd3]">
                  Approved Indications
                </span>
                <ul className="mt-2 grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2">
                  {activeProductDetail.indications.map((ind) => (
                    <li key={ind} className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-[#0b5bd3]" strokeWidth={1.8} />
                      {ind}
                    </li>
                  ))}
                </ul>
              </div>

              {activeProductDetail.dosage && (
                <div className="rounded-[4px] border border-[#cfe0f7] bg-[#eaf1fd] px-4 py-3">
                  <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#0a2d5e]">
                    Dosage
                  </span>
                  <p className="mt-0.5 text-sm font-semibold text-[#0a1f44]">
                    {activeProductDetail.dosage}
                  </p>
                </div>
              )}

              <div className="flex flex-col gap-3 border-t border-slate-100 pt-5 sm:flex-row">
                <button
                  type="button"
                  onClick={() => {
                    const prod = activeProductDetail.name;
                    setActiveProductDetail(null);
                    handleEnquire(prod);
                  }}
                  className={`${PRIMARY_BTN} flex-1`}
                >
                  Request Quotation
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setActiveProductDetail(null)}
                  className={`${OUTLINE_BTN} sm:px-6`}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialProduct={selectedProductForQuote}
      />
    </div>
  );
}
