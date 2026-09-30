"use client";

import { AmbientVideo } from "@/components/motion/AmbientVideo";
import React, { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  Package,
  Layers,
  CheckCircle2,
  X,
  ArrowRight,
  Box,
  Landmark,
  FileText,
  ShieldCheck,
  Boxes,
  Handshake,
  MessageSquareText,
  Tablets,
  Pill,
  Syringe,
  FlaskConical,
  Droplet,
  Pipette,
  ChevronLeft,
  ChevronRight,
  MapPinned,
  SlidersHorizontal,
  Phone,
  Truck,
  BadgeCheck,
} from "lucide-react";
import { PRODUCTS, PRODUCT_CATEGORIES, PRODUCT_FORMS, Product } from "@/data/products";
import { COMPANY_INFO } from "@/data/company";
import EnquiryModal from "@/components/EnquiryModal";

/**
 * Palette for this page only (the reference mockup's own scheme): teal as the
 * primary interactive color, navy for dark panels/badges, blue as a secondary
 * highlight, slate for supporting text. The rest of the site keeps its usual
 * brand blue — this page is intentionally its own "catalogue" identity.
 */
const PRIMARY_BTN =
  "inline-flex items-center justify-center gap-3 rounded-[4px] bg-[#0D9488] hover:bg-[#0f766e] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(13,148,136,0.3)] transition cursor-pointer";
const OUTLINE_BTN =
  "inline-flex items-center justify-center gap-3 rounded-[4px] border border-[#0D9488] bg-white hover:bg-slate-50 px-7 py-3.5 text-sm font-semibold text-[#0D9488] transition cursor-pointer";
const GLASS =
  "rounded-[4px] border border-white bg-white/85 backdrop-blur shadow-[0_10px_40px_rgba(11,25,44,0.08)]";

const PAGE_SIZE = 9;

const FORM_ICONS: Record<string, React.ElementType> = {
  Tablets: Tablets,
  Capsules: Pill,
  "Softgel Capsules": Pill,
  Injections: Syringe,
  "Syrup & Suspensions": FlaskConical,
  "Dry Syrup": FlaskConical,
  "Ointment & Cream": Droplet,
  "Sachet & Powder": Package,
  "Drops & Nanoshot": Pipette,
};

const PANEL_TINTS = [
  { bg: "from-teal-50 to-teal-100/60", icon: "text-teal-600" },
  { bg: "from-teal-50 to-teal-100/60", icon: "text-teal-600" },
  { bg: "from-slate-50 to-slate-100/70", icon: "text-slate-500" },
  { bg: "from-cyan-50 to-cyan-100/60", icon: "text-cyan-600" },
];

// Bucket the free-text packingType field into a handful of real packaging
// styles derived from the actual data, so the filter reflects what's really
// in the catalogue instead of an invented taxonomy.
function packagingBucket(packingType: string): string {
  const t = packingType.toLowerCase();
  if (t.includes("alu-alu")) return "Alu-Alu";
  if (t.includes("blister")) return "Blister Pack";
  if (t.includes("bottle")) return "Bottle";
  if (t.includes("tube")) return "Tube";
  if (t.includes("vial")) return "Vial";
  if (t.includes("sachet")) return "Sachet";
  if (t.includes("soap") || t.includes("bar")) return "Bar / Soap";
  return "Other";
}
const PACKAGING_BUCKETS = Array.from(
  new Set(PRODUCTS.map((p) => packagingBucket(p.packingType))),
).sort();

const SORTS = [
  { value: "featured", label: "Featured First" },
  { value: "az", label: "Alphabetical (A–Z)" },
  { value: "category", label: "By Therapeutic Area" },
] as const;
type SortValue = (typeof SORTS)[number]["value"];

function Eyebrow({
  children,
  center,
  dark,
}: {
  children: React.ReactNode;
  center?: boolean;
  dark?: boolean;
}) {
  const lineClass = dark ? "bg-amber-400/40" : "bg-[#0D9488]";
  const textClass = dark ? "text-amber-400" : "text-[#0D9488]";
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

/**
 * Checklist filter group with a live count per option (multi-select). Shows
 * every option at full height — no inner scrollbar — so the sidebar never
 * clips content.
 */
function CheckGroup({
  title,
  icon: Icon,
  items,
  counts,
  selected,
  onToggle,
}: {
  title: string;
  icon: React.ElementType;
  items: string[];
  counts: Record<string, number>;
  selected: Set<string>;
  onToggle: (v: string) => void;
}) {
  return (
    <div>
      <h4 className="mb-2.5 flex items-center gap-2 text-sm font-bold text-[#0B192C]">
        <Icon className="h-4 w-4 text-[#0D9488]" strokeWidth={1.8} />
        {title}
      </h4>
      <div className="space-y-1">
        {items.map((item) => {
          const active = selected.has(item);
          return (
            <label
              key={item}
              className={`flex cursor-pointer items-center justify-between gap-2 rounded-[4px] px-2 py-1.5 text-[13px] transition ${
                active ? "bg-teal-50 font-semibold text-[#0B192C]" : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              <span className="flex min-w-0 items-center gap-2">
                <input
                  type="checkbox"
                  checked={active}
                  onChange={() => onToggle(item)}
                  className="h-4 w-4 shrink-0 accent-[#0D9488]"
                />
                <span className="truncate">{item}</span>
              </span>
              <span className="shrink-0 text-xs tabular-nums text-slate-400">
                {counts[item] ?? 0}
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );
}

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<Set<string>>(new Set());
  const [selectedForms, setSelectedForms] = useState<Set<string>>(new Set());
  const [selectedPackaging, setSelectedPackaging] = useState<Set<string>>(new Set());
  const [sortBy, setSortBy] = useState<SortValue>("featured");
  const [page, setPage] = useState(1);
  const [district, setDistrict] = useState("");

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProductForQuote, setSelectedProductForQuote] = useState("");
  const [activeProductDetail, setActiveProductDetail] = useState<Product | null>(null);

  const toggle = (set: Set<string>, setSet: (s: Set<string>) => void, value: string) => {
    const next = new Set(set);
    if (next.has(value)) next.delete(value);
    else next.add(value);
    setSet(next);
    setPage(1);
  };

  const categoryCounts = useMemo(() => {
    const c: Record<string, number> = {};
    PRODUCT_CATEGORIES.filter((c2) => c2 !== "All Categories").forEach((cat) => {
      c[cat] = PRODUCTS.filter((p) => p.category === cat).length;
    });
    return c;
  }, []);

  const formCounts = useMemo(() => {
    const c: Record<string, number> = {};
    PRODUCT_FORMS.filter((f) => f !== "All Forms").forEach((form) => {
      c[form] = PRODUCTS.filter((p) => p.form === form).length;
    });
    return c;
  }, []);

  const packagingCounts = useMemo(() => {
    const c: Record<string, number> = {};
    PACKAGING_BUCKETS.forEach((b) => {
      c[b] = PRODUCTS.filter((p) => packagingBucket(p.packingType) === b).length;
    });
    return c;
  }, []);

  const filteredProducts = useMemo(() => {
    const q = searchQuery.toLowerCase();
    const base = PRODUCTS.filter((item) => {
      const matchesSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.genericName.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.indications.some((ind) => ind.toLowerCase().includes(q));
      const matchesCategory =
        selectedCategories.size === 0 || selectedCategories.has(item.category);
      const matchesForm = selectedForms.size === 0 || selectedForms.has(item.form);
      const matchesPackaging =
        selectedPackaging.size === 0 || selectedPackaging.has(packagingBucket(item.packingType));
      return matchesSearch && matchesCategory && matchesForm && matchesPackaging;
    });

    const sorted = [...base];
    if (sortBy === "az") {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "category") {
      sorted.sort((a, b) => a.category.localeCompare(b.category) || a.name.localeCompare(b.name));
    } else {
      sorted.sort((a, b) => Number(b.featured) - Number(a.featured));
    }
    return sorted;
  }, [searchQuery, selectedCategories, selectedForms, selectedPackaging, sortBy]);

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const pageItems = filteredProducts.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  const isFiltered =
    searchQuery !== "" ||
    selectedCategories.size > 0 ||
    selectedForms.size > 0 ||
    selectedPackaging.size > 0;

  const activeChips = useMemo(() => {
    const chips: { label: string; onRemove: () => void }[] = [];
    if (searchQuery) chips.push({ label: `“${searchQuery}”`, onRemove: () => setSearchQuery("") });
    selectedCategories.forEach((c) =>
      chips.push({ label: c, onRemove: () => toggle(selectedCategories, setSelectedCategories, c) }),
    );
    selectedForms.forEach((f) =>
      chips.push({ label: f, onRemove: () => toggle(selectedForms, setSelectedForms, f) }),
    );
    selectedPackaging.forEach((p) =>
      chips.push({ label: p, onRemove: () => toggle(selectedPackaging, setSelectedPackaging, p) }),
    );
    return chips;
  }, [searchQuery, selectedCategories, selectedForms, selectedPackaging]);

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
    setSelectedCategories(new Set());
    setSelectedForms(new Set());
    setSelectedPackaging(new Set());
    setPage(1);
  };

  const handleCheckDistrict = () => {
    handleEnquire(
      district.trim()
        ? `PCD Franchise Monopoly Check — ${district.trim()}`
        : "PCD Franchise Monopoly Check",
    );
  };

  return (
    <div className="w-full bg-white text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f4faf9] via-[#eef7f6] to-[#e6f3f1]">
        <div className="pointer-events-none absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full bg-teal-200/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-[380px] w-[380px] rounded-full bg-teal-200/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#0D9488] shadow-sm">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  WHO-GMP Certified Facility
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#0284C7] shadow-sm">
                  ISO 9001:2015
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#0B192C] shadow-sm">
                  DCGI Cleared Formulations
                </span>
              </div>

              <h1 className="mt-4 text-4xl font-extrabold leading-[1.08] tracking-tight text-[#0B192C] sm:text-5xl lg:text-[2.6rem] xl:text-[3.1rem]">
                Pharmaceutical Product{" "}
                <span className="text-[#0D9488]">Directory &amp; Catalogue</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-[#475569]">
                Explore {PRODUCTS.length}+ DCGI-approved formulations manufactured at our
                WHO-GMP certified facility — with packaging specs, dosage details and
                instant enquiry for PCD franchise distributors and institutional buyers.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-y-4">
                {[
                  { icon: Boxes, a: `${PRODUCTS.length}+`, b: "Active Formulations" },
                  { icon: BadgeCheck, a: "DCGI", b: "Approved Range" },
                  { icon: Truck, a: "24–48h", b: "Pan-India Dispatch" },
                ].map((f, i) => (
                  <div
                    key={f.a}
                    className={`flex items-center gap-2.5 whitespace-nowrap pr-5 ${i > 0 ? "border-l border-teal-900/10 pl-5" : ""}`}
                  >
                    <f.icon className="h-6 w-6 shrink-0 text-[#0D9488]" strokeWidth={1.6} />
                    <div className="leading-tight">
                      <div className="text-[13px] font-bold text-[#0B192C]">{f.a}</div>
                      <div className="text-xs text-[#475569]">{f.b}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Catalogue request box */}
            <div className="shrink-0 lg:w-[340px]">
              <button
                type="button"
                onClick={() => handleEnquire("Complete Product Catalog & Price List")}
                className="group flex w-full items-center justify-between gap-3 bg-[#0B192C] px-5 py-4 text-left text-white shadow-[0_14px_36px_rgba(11,25,44,0.28)] transition hover:bg-[#0b192c] cursor-pointer"
              >
                <span className="flex items-center gap-3">
                  <FileText className="h-6 w-6 shrink-0 text-teal-300 transition-transform group-hover:-translate-y-0.5" />
                  <span>
                    <span className="block text-sm font-bold">Request Master Catalog</span>
                    <span className="block text-xs text-slate-300">
                      Packaging specs, MOQ &amp; net rates
                    </span>
                  </span>
                </span>
                <ArrowRight className="h-4 w-4 shrink-0 text-teal-300" />
              </button>
              <div className="mt-2 flex items-center justify-between bg-white px-4 py-2.5 text-xs text-[#475569] shadow-sm">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#0D9488]" />
                  Continuously updated
                </span>
                <span className="font-bold text-[#0D9488]">{PRODUCTS.length} SKUs</span>
              </div>
            </div>
          </div>
        </div>

        {/* Category quick-filter ribbon */}
        <div className="relative border-t border-teal-900/10 bg-white/70 px-4 py-3 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-2">
            <span className="mr-1 shrink-0 text-[11px] font-bold uppercase tracking-wider text-[#475569]">
              Key Categories:
            </span>
            <a
              href="#catalogue"
              onClick={() => setSelectedCategories(new Set())}
              className={`shrink-0 px-3 py-1.5 text-[13px] font-medium transition ${
                selectedCategories.size === 0
                  ? "bg-[#0D9488] text-white"
                  : "bg-white text-[#0B192C] hover:bg-teal-50"
              }`}
            >
              All ({PRODUCTS.length})
            </a>
            {PRODUCT_CATEGORIES.filter((c) => c !== "All Categories" && categoryCounts[c] > 0)
              .slice(0, 5)
              .map((cat) => (
                <a
                  key={cat}
                  href="#catalogue"
                  onClick={() => {
                    setSelectedCategories(new Set([cat]));
                    setPage(1);
                  }}
                  className={`shrink-0 px-3 py-1.5 text-[13px] font-medium transition ${
                    selectedCategories.has(cat)
                      ? "bg-[#0D9488] text-white"
                      : "bg-white text-[#0B192C] hover:bg-teal-50"
                  }`}
                >
                  {cat} ({categoryCounts[cat]})
                </a>
              ))}
          </div>
        </div>
      </section>

      {/* Catalogue */}
      <section
        id="catalogue"
        className="relative overflow-hidden bg-gradient-to-b from-[#f7faf9] via-[#f4f8f7] to-[#eef4f3] py-14 lg:py-16 scroll-mt-24"
      >
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-4">
            {/* Sidebar — pinned in place on desktop while only the results
               column scrolls. Sized to its (compact) content, not forced to a
               fixed height, so it never grows its own scrollbar. */}
            <aside className={`${GLASS} space-y-2.5 p-4 lg:sticky lg:top-20 lg:col-span-1`}>
                <div>
                  <label className="mb-1.5 flex items-center gap-2 text-[13px] font-bold text-[#0B192C]">
                    <Search className="h-4 w-4 text-[#0D9488]" strokeWidth={1.8} />
                    Molecule / Brand Search
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => {
                        setSearchQuery(e.target.value);
                        setPage(1);
                      }}
                      placeholder="e.g. Amoxicillin, Metformin..."
                      aria-label="Search products"
                      className="w-full rounded-[4px] border border-slate-200 bg-slate-50 px-3 py-2 text-[13px] text-slate-800 outline-none transition focus:border-[#0D9488] focus:bg-white focus:ring-2 focus:ring-[#0D9488]/15"
                    />
                    {searchQuery && (
                      <button
                        type="button"
                        onClick={() => setSearchQuery("")}
                        aria-label="Clear search"
                        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-[4px] p-1 text-slate-400 hover:text-slate-700 cursor-pointer"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                </div>

                {isFiltered && (
                  <div className="border-t border-slate-100 pt-2.5">
                    <div className="mb-1.5 flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#475569]">
                        Active Criteria
                      </span>
                      <button
                        type="button"
                        onClick={handleResetFilters}
                        className="text-[10px] font-bold text-[#0D9488] hover:underline cursor-pointer"
                      >
                        Clear All
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {activeChips.map((chip) => (
                        <span
                          key={chip.label}
                          className="inline-flex items-center gap-1 bg-teal-50 px-2 py-1 text-[11px] font-medium text-[#0B192C]"
                        >
                          {chip.label}
                          <button
                            type="button"
                            onClick={chip.onRemove}
                            aria-label={`Remove ${chip.label}`}
                            className="cursor-pointer text-[#0D9488] hover:text-[#0B192C]"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="border-t border-slate-100 pt-2.5">
                  <CheckGroup
                    title="Therapeutic Divisions"
                    icon={Layers}
                    items={PRODUCT_CATEGORIES.filter((c) => c !== "All Categories" && categoryCounts[c] > 0)}
                    counts={categoryCounts}
                    selected={selectedCategories}
                    onToggle={(v) => toggle(selectedCategories, setSelectedCategories, v)}
                  />
                </div>

                <div className="border-t border-slate-100 pt-2.5">
                  <CheckGroup
                    title="Dosage Presentation"
                    icon={Package}
                    items={PRODUCT_FORMS.filter((f) => f !== "All Forms" && formCounts[f] > 0)}
                    counts={formCounts}
                    selected={selectedForms}
                    onToggle={(v) => toggle(selectedForms, setSelectedForms, v)}
                  />
                </div>

                <div className="border-t border-slate-100 pt-2.5">
                  <h4 className="mb-1.5 flex items-center gap-2 text-[13px] font-bold text-[#0B192C]">
                    <SlidersHorizontal className="h-4 w-4 text-[#0D9488]" strokeWidth={1.8} />
                    Packaging Technology
                  </h4>
                  <div className="grid grid-cols-2 gap-1.5">
                    {PACKAGING_BUCKETS.map((b) => {
                      const active = selectedPackaging.has(b);
                      return (
                        <button
                          key={b}
                          type="button"
                          onClick={() => toggle(selectedPackaging, setSelectedPackaging, b)}
                          className={`px-2 py-1.5 text-left text-[11px] font-medium transition cursor-pointer ${
                            active
                              ? "bg-[#0D9488] text-white"
                              : "bg-slate-50 text-[#475569] hover:bg-teal-50"
                          }`}
                        >
                          {b} <span className="opacity-70">({packagingCounts[b]})</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-1.5 border-t border-slate-100 pt-2.5">
                  <div className="flex items-center gap-1.5 text-[13px] font-bold text-[#0B192C]">
                    <MapPinned className="h-4 w-4 text-[#0D9488]" strokeWidth={1.8} />
                    Check District Monopoly
                  </div>
                  <div className="flex gap-1.5">
                    <input
                      type="text"
                      value={district}
                      onChange={(e) => setDistrict(e.target.value)}
                      placeholder="Enter district / city"
                      className="min-w-0 flex-1 rounded-[4px] border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-xs text-slate-800 outline-none focus:border-[#0D9488] focus:bg-white"
                    />
                    <button
                      type="button"
                      onClick={handleCheckDistrict}
                      className="shrink-0 rounded-[4px] bg-[#0D9488] px-3 py-1.5 text-xs font-bold text-white transition hover:bg-[#0f766e] cursor-pointer"
                    >
                      Check
                    </button>
                  </div>
                </div>
            </aside>

            {/* Grid */}
            <div className="lg:col-span-3">
              {/* Controls bar */}
              <div className="mb-6 flex flex-wrap items-center justify-between gap-3 bg-white px-4 py-3 shadow-sm">
                <div className="text-[13px] font-medium text-[#475569]">
                  Showing{" "}
                  <span className="font-bold text-[#0B192C]">
                    {filteredProducts.length === 0 ? 0 : (currentPage - 1) * PAGE_SIZE + 1}–
                    {Math.min(currentPage * PAGE_SIZE, filteredProducts.length)}
                  </span>{" "}
                  of <span className="font-bold text-[#0B192C]">{filteredProducts.length}</span>{" "}
                  formulations
                </div>
                <div className="flex items-center gap-2 text-[13px]">
                  <span className="text-[#475569]">Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => {
                      setSortBy(e.target.value as SortValue);
                      setPage(1);
                    }}
                    className="cursor-pointer bg-slate-50 px-2.5 py-1.5 font-semibold text-[#0B192C] outline-none"
                  >
                    {SORTS.map((s) => (
                      <option key={s.value} value={s.value}>
                        {s.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {filteredProducts.length === 0 ? (
                <div className={`${GLASS} space-y-4 p-12 text-center`}>
                  <Search className="mx-auto h-12 w-12 text-[#0D9488]/40" strokeWidth={1.4} />
                  <h3 className="text-lg font-bold text-[#0B192C]">No matching products found</h3>
                  <p className="mx-auto max-w-md text-sm text-[#475569]">
                    Try adjusting your search criteria or reset filters to explore all available formulations.
                  </p>
                  <button type="button" onClick={handleResetFilters} className={PRIMARY_BTN}>
                    View All Products
                  </button>
                </div>
              ) : (
                <>
                  <div data-no-reveal className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {pageItems.map((product, i) => {
                      const VisualIcon = FORM_ICONS[product.form] ?? Boxes;
                      const tint = PANEL_TINTS[i % PANEL_TINTS.length];
                      return (
                        <motion.div
                          key={product.id}
                          initial={{ opacity: 0, y: 24, scale: 0.98 }}
                          whileInView={{ opacity: 1, y: 0, scale: 1 }}
                          viewport={{ once: true, margin: "-40px" }}
                          transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
                          className={`${GLASS} group flex flex-col justify-between overflow-hidden`}
                        >
                          {/* Visual panel */}
                          <div
                            className={`relative flex h-36 items-center justify-center overflow-hidden bg-gradient-to-br ${tint.bg}`}
                          >
                            <VisualIcon
                              className={`h-16 w-16 ${tint.icon} transition-transform duration-300 group-hover:scale-110`}
                              strokeWidth={1.2}
                            />
                            <div className="absolute right-2.5 top-2.5 flex flex-col items-end gap-1">
                              {product.featured && (
                                <span className="bg-[#0D9488] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                                  Featured
                                </span>
                              )}
                              <span className="bg-[#0B192C] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                                DCGI Approved
                              </span>
                            </div>
                          </div>

                          <div className="flex flex-1 flex-col p-5">
                            <div className="flex items-center justify-between gap-2">
                              <span className="text-[11px] font-bold uppercase tracking-wider text-[#0D9488]">
                                {product.category}
                              </span>
                            </div>
                            <h3 className="mt-1 text-lg font-extrabold uppercase tracking-tight text-[#0B192C] transition-colors group-hover:text-[#0D9488]">
                              {product.name}
                            </h3>
                            <p className="mt-1 line-clamp-2 min-h-[2.25rem] text-[13px] font-semibold leading-5 text-[#0284C7]">
                              {product.genericName}
                            </p>

                            {/* Spec rows */}
                            <div className="mt-3 space-y-1.5 bg-slate-50 p-2.5 text-[12px]">
                              <div className="flex items-center justify-between gap-2">
                                <span className="text-[#475569]">Packaging:</span>
                                <span className="truncate font-semibold text-[#0B192C]">
                                  {product.packaging}
                                </span>
                              </div>
                              <div className="flex items-center justify-between gap-2">
                                <span className="text-[#475569]">Pack Type:</span>
                                <span className="truncate font-semibold text-[#0B192C]">
                                  {product.packingType}
                                </span>
                              </div>
                              <div className="flex items-center justify-between gap-2">
                                <span className="text-[#475569]">Division:</span>
                                <span className="truncate font-semibold text-[#0B192C]">
                                  {product.division.replace("Incredible ", "")}
                                </span>
                              </div>
                            </div>

                            <div className="mt-auto grid grid-cols-2 gap-2 pt-4">
                              <button
                                type="button"
                                onClick={() => setActiveProductDetail(product)}
                                className="inline-flex items-center justify-center gap-1.5 bg-slate-100 py-2.5 text-[13px] font-semibold text-[#0B192C] transition hover:bg-slate-200 cursor-pointer"
                              >
                                <FileText className="h-4 w-4 text-[#0284C7]" />
                                Details
                              </button>
                              <button
                                type="button"
                                onClick={() => handleEnquire(product.name)}
                                className="inline-flex items-center justify-center gap-1.5 bg-[#0D9488] py-2.5 text-[13px] font-semibold text-white shadow-[0_6px_18px_rgba(13,148,136,0.3)] transition hover:bg-[#0f766e] cursor-pointer"
                              >
                                Enquire
                                <ArrowRight className="h-3.5 w-3.5" />
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="mt-8 flex flex-col items-center justify-between gap-4 bg-white px-4 py-3 shadow-sm sm:flex-row">
                      <div className="text-[13px] text-[#475569]">
                        Page <span className="font-semibold text-[#0B192C]">{currentPage}</span> of{" "}
                        <span className="font-semibold text-[#0B192C]">{totalPages}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          disabled={currentPage === 1}
                          onClick={() => setPage((p) => Math.max(1, p - 1))}
                          className="flex items-center gap-1 bg-slate-100 px-3 py-1.5 text-[13px] font-medium text-[#0B192C] transition hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-40"
                        >
                          <ChevronLeft className="h-3.5 w-3.5" />
                          Previous
                        </button>
                        {Array.from({ length: totalPages }, (_, i) => i + 1)
                          .filter(
                            (n) => n === 1 || n === totalPages || Math.abs(n - currentPage) <= 1,
                          )
                          .map((n, idx, arr) => (
                            <React.Fragment key={n}>
                              {idx > 0 && arr[idx - 1] !== n - 1 && (
                                <span className="px-1 text-slate-400">…</span>
                              )}
                              <button
                                type="button"
                                onClick={() => setPage(n)}
                                className={`px-3 py-1.5 text-[13px] font-semibold transition cursor-pointer ${
                                  n === currentPage
                                    ? "bg-[#0D9488] text-white"
                                    : "bg-slate-100 text-[#0B192C] hover:bg-slate-200"
                                }`}
                              >
                                {n}
                              </button>
                            </React.Fragment>
                          ))}
                        <button
                          type="button"
                          disabled={currentPage === totalPages}
                          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                          className="flex items-center gap-1 bg-slate-100 px-3 py-1.5 text-[13px] font-medium text-[#0B192C] transition hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-40"
                        >
                          Next
                          <ChevronRight className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Custom / institutional manufacturing banner */}
      <section className="relative overflow-hidden bg-[#e6f3f1] py-12">
        <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 sm:px-6 md:flex-row md:justify-between lg:px-8">
          <div className="max-w-2xl text-center md:text-left">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#0D9488]">
              Contract Manufacturing &amp; Private Labeling
            </span>
            <h2 className="mt-2 text-2xl font-extrabold leading-tight text-[#0B192C] sm:text-3xl">
              Need a custom dosage combination or institutional tender packing?
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-[#475569]">
              Our formulation team develops stability-tested custom batches with DCGI approvals and
              private-label packaging designed to your specification.
            </p>
          </div>
          <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row">
            <button
              type="button"
              onClick={() => handleEnquire("Custom Formulation Inquiry")}
              className="bg-[#0B192C] px-6 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-[#0b192c] cursor-pointer"
            >
              Custom Formulation Inquiry
            </button>
            <a
              href={`tel:+${COMPANY_INFO.whatsapp}`}
              className="flex items-center justify-center gap-2 bg-white px-6 py-3.5 text-center text-sm font-semibold text-[#0D9488] transition hover:bg-teal-50"
            >
              <Phone className="h-4 w-4" />
              Call Formulation Lab
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0b192c] via-black to-black py-16 lg:py-20">
        <AmbientVideo src="/hero-2.mp4" className="opacity-35" />
        <div className="pointer-events-none absolute -left-32 top-4 hidden h-[420px] w-[420px] overflow-hidden rounded-full border-[14px] border-white/10 opacity-30 lg:block xl:-left-20">
          <Image src="/infra-packs.jpg" alt="" fill sizes="420px" className="object-cover" />
        </div>
        <div className="pointer-events-none absolute -right-32 top-10 hidden h-[420px] w-[420px] overflow-hidden rounded-full border-[14px] border-white/10 opacity-30 lg:block xl:-right-20">
          <Image src="/infra-lab.jpg" alt="" fill sizes="420px" className="object-cover" style={{ objectPosition: "40% 50%" }} />
        </div>
        <div className="pointer-events-none absolute -bottom-24 right-1/4 h-64 w-96 rounded-full bg-amber-400/10 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-4 text-center">
          <Eyebrow center dark>Partner with Incredible Medicare</Eyebrow>
          <h2 className="mt-4 text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl">
            Can&apos;t Find What You{" "}
            <span className="block text-teal-400">Are Looking For?</span>
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-slate-300 sm:text-base">
            Our portfolio spans {PRODUCTS.length}+ approved formulations. Tell us your requirement and our team will share availability, net rates, and custom manufacturing options.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            <button type="button" onClick={() => handleEnquire("Custom Product Requirement")} className="inline-flex items-center justify-center gap-3 rounded-[4px] bg-[#0d9488] hover:bg-[#0f766e] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(13,148,136,0.35)] transition cursor-pointer">
              <Handshake className="h-5 w-5" />
              Request a Product
              <ArrowRight className="h-4 w-4" />
            </button>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-[4px] border border-[#0d9488] bg-white hover:bg-slate-50 px-7 py-3.5 text-sm font-semibold text-[#0d9488] transition cursor-pointer"
            >
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
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-[#0B192C]/60 p-4 backdrop-blur-sm"
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
            <div className="relative overflow-hidden bg-[#0B192C] p-7 text-white md:col-span-2 md:flex md:flex-col">
              <Image
                src="/infra-packs.jpg"
                alt=""
                fill
                sizes="300px"
                className="object-cover opacity-15 mix-blend-luminosity"
              />
              <div className="relative">
                <span className="rounded-full border border-teal-400/30 bg-teal-500/20 px-3 py-1 text-[11px] font-semibold text-teal-300">
                  {activeProductDetail.form}
                </span>
                <h3 className="mt-4 text-2xl font-extrabold uppercase leading-tight">
                  {activeProductDetail.name}
                </h3>
                <p className="mt-2 text-xs text-teal-300">{activeProductDetail.category}</p>
              </div>

              <div className="relative mt-6 space-y-3 md:mt-auto">
                {[
                  { icon: Box, label: "Packaging", value: activeProductDetail.packaging },
                  { icon: Package, label: "Packing Type", value: activeProductDetail.packingType },
                  { icon: Landmark, label: "Division", value: activeProductDetail.division },
                ].map((m) => (
                  <div key={m.label} className="flex items-center gap-3 rounded-[4px] border border-white/10 bg-white/5 px-4 py-3">
                    <m.icon className="h-6 w-6 shrink-0 text-teal-300" strokeWidth={1.5} />
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
                <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#0D9488]">
                  Generic Composition
                </span>
                <p className="mt-1.5 text-base font-bold leading-snug text-[#0B192C]">
                  {activeProductDetail.genericName}
                </p>
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#0D9488]">
                  Therapeutic Overview
                </span>
                <p className="mt-1.5 text-sm leading-relaxed text-[#475569]">
                  {activeProductDetail.description}
                </p>
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#0D9488]">
                  Approved Indications
                </span>
                <ul className="mt-2 grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2">
                  {activeProductDetail.indications.map((ind) => (
                    <li key={ind} className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-[#0D9488]" strokeWidth={1.8} />
                      {ind}
                    </li>
                  ))}
                </ul>
              </div>

              {activeProductDetail.dosage && (
                <div className="rounded-[4px] border border-teal-100 bg-teal-50 px-4 py-3">
                  <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#0B192C]">
                    Dosage
                  </span>
                  <p className="mt-0.5 text-sm font-semibold text-[#0B192C]">
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
