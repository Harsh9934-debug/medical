"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Search,
  Filter,
  Package,
  Layers,
  CheckCircle2,
  FileText,
  RotateCcw,
  Sparkles,
  Info,
  X,
  ArrowRight
} from "lucide-react";
import { PRODUCTS, PRODUCT_CATEGORIES, PRODUCT_FORMS, Product } from "@/data/products";
import EnquiryModal from "@/components/EnquiryModal";

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedForm, setSelectedForm] = useState("All Forms");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProductForQuote, setSelectedProductForQuote] = useState("");
  const [activeProductDetail, setActiveProductDetail] = useState<Product | null>(null);

  // Filter logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.genericName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.indications.some((ind) =>
          ind.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesCategory =
        selectedCategory === "All Categories" || item.category === selectedCategory;

      const matchesForm =
        selectedForm === "All Forms" || item.form === selectedForm;

      return matchesSearch && matchesCategory && matchesForm;
    });
  }, [searchQuery, selectedCategory, selectedForm]);

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
    <div className="w-full bg-slate-50 min-h-screen text-slate-900 pb-20">
      {/* Top Banner */}
      <section className="bg-gradient-to-b from-white to-slate-100/70 py-12 sm:py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <nav className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            <Link href="/" className="hover:text-sky-700">Home</Link>
            <span>/</span>
            <span className="text-sky-800">Product Portfolio</span>
          </nav>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Complete Pharmaceutical Formulations
          </h1>
          <div className="accent-bar mx-auto"></div>
          <p className="max-w-3xl mx-auto text-slate-600 text-sm sm:text-base leading-relaxed">
            Explore Incredible Medicare&apos;s comprehensive DCGI-approved formulation range. Designed to deliver superior clinical outcomes with strict WHO-GMP quality assurance.
          </p>
        </div>
      </section>

      {/* Main Container with Search & Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Search Bar & Stats Header */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-xs mb-8">
          <div className="flex flex-col md:flex-row items-center gap-4 justify-between">
            {/* Search Input */}
            <div className="relative w-full md:max-w-xl">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by brand name, active salt, or therapeutic indication..."
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 text-sm border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-sky-600 focus:bg-white transition"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Quick Action Buttons */}
            <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
              <div className="text-xs font-semibold text-slate-600">
                Showing <span className="font-bold text-sky-800">{filteredProducts.length}</span> of {PRODUCTS.length} Formulations
              </div>
              {(searchQuery || selectedCategory !== "All Categories" || selectedForm !== "All Forms") && (
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg transition"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset Filters</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Layout: Sidebar Filters + Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1 space-y-6">
            {/* Filter by Dosage Form */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <Package className="w-4 h-4 text-sky-700" />
                  <span>Dosage Form</span>
                </h3>
                {selectedForm !== "All Forms" && (
                  <button
                    type="button"
                    onClick={() => setSelectedForm("All Forms")}
                    className="text-[11px] text-sky-700 font-semibold hover:underline"
                  >
                    Clear
                  </button>
                )}
              </div>

              <div className="space-y-1 max-h-72 overflow-y-auto pr-1">
                {PRODUCT_FORMS.map((form) => (
                  <button
                    key={form}
                    type="button"
                    onClick={() => setSelectedForm(form)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition flex items-center justify-between cursor-pointer ${
                      selectedForm === form
                        ? "bg-sky-50 text-sky-800 font-bold border border-sky-200"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    <span>{form}</span>
                    {selectedForm === form && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-700" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Filter by Therapeutic Category */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <Layers className="w-4 h-4 text-sky-700" />
                  <span>Therapeutic Area</span>
                </h3>
                {selectedCategory !== "All Categories" && (
                  <button
                    type="button"
                    onClick={() => setSelectedCategory("All Categories")}
                    className="text-[11px] text-sky-700 font-semibold hover:underline"
                  >
                    Clear
                  </button>
                )}
              </div>

              <div className="space-y-1 max-h-80 overflow-y-auto pr-1">
                {PRODUCT_CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition flex items-center justify-between cursor-pointer ${
                      selectedCategory === cat
                        ? "bg-sky-50 text-sky-800 font-bold border border-sky-200"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    <span>{cat}</span>
                    {selectedCategory === cat && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-700" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Price list request callout */}
            <div className="bg-gradient-to-br from-slate-900 to-sky-950 p-5 rounded-2xl text-white space-y-3">
              <h4 className="font-bold text-sm">Need Full Product Price List?</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Download complete PDF catalog with net rates, packaging types, and minimum batch orders.
              </p>
              <button
                type="button"
                onClick={() => handleEnquire("Complete PDF Price List")}
                className="w-full py-2 bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold rounded-lg transition"
              >
                Request Product List
              </button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 shadow-xs space-y-4">
                <div className="w-12 h-12 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto">
                  <Search className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">No matching products found</h3>
                <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
                  Try adjusting your search criteria or reset filters to explore all available formulations.
                </p>
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="px-4 py-2 bg-sky-700 hover:bg-sky-800 text-white text-xs font-bold rounded-lg transition"
                >
                  View All Products
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-md hover:border-sky-300 transition-all flex flex-col justify-between group"
                  >
                    <div>
                      {/* Top Badges */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-[11px] font-bold text-sky-800 bg-sky-50 px-2.5 py-1 rounded-md border border-sky-100">
                          {product.form}
                        </span>
                        <span className="text-[11px] font-semibold text-slate-500 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200">
                          {product.packingType}
                        </span>
                      </div>

                      {/* Brand Name */}
                      <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-sky-700 transition-colors">
                        {product.name}
                      </h3>

                      {/* Generic Name */}
                      <div className="text-xs font-semibold text-sky-900 mt-1 line-clamp-2">
                        {product.genericName}
                      </div>

                      {/* Description */}
                      <p className="text-xs text-slate-500 mt-3 leading-relaxed line-clamp-3">
                        {product.description}
                      </p>

                      {/* Indications Pills */}
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {product.indications.slice(0, 3).map((ind) => (
                          <span
                            key={ind}
                            className="text-[10px] font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md"
                          >
                            {ind}
                          </span>
                        ))}
                      </div>

                      {/* Meta Info */}
                      <div className="mt-5 pt-3 border-t border-slate-100 space-y-1.5 text-xs">
                        <div className="flex items-center justify-between text-slate-600">
                          <span className="text-slate-400">Packaging:</span>
                          <span className="font-semibold text-slate-800">{product.packaging}</span>
                        </div>
                        <div className="flex items-center justify-between text-slate-600">
                          <span className="text-slate-400">Division:</span>
                          <span className="font-semibold text-slate-700 truncate max-w-[200px]">
                            {product.division}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Card Actions */}
                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => handleEnquire(product.name)}
                        className="flex-1 py-2.5 bg-sky-700 hover:bg-sky-800 text-white text-xs font-bold rounded-lg transition shadow-xs cursor-pointer"
                      >
                        Enquire / Quote
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveProductDetail(product)}
                        className="p-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition"
                        title="View Detailed Composition"
                      >
                        <Info className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Product Detail Modal */}
      {activeProductDetail && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="relative bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-slate-100 overflow-hidden animate-in fade-in zoom-in-95 duration-200 p-6 space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[11px] font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded-md border border-sky-100">
                  {activeProductDetail.form}
                </span>
                <h3 className="text-xl font-extrabold text-slate-900 mt-2">
                  {activeProductDetail.name}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveProductDetail(null)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs">
              <span className="font-bold text-slate-700">Generic Composition:</span>
              <p className="text-slate-900 font-semibold mt-0.5">{activeProductDetail.genericName}</p>
            </div>

            <div className="text-xs text-slate-600 leading-relaxed">
              <span className="font-bold text-slate-800 block mb-1">Therapeutic Overview:</span>
              {activeProductDetail.description}
            </div>

            <div className="text-xs space-y-1">
              <span className="font-bold text-slate-800 block mb-1">Approved Indications:</span>
              <div className="flex flex-wrap gap-1.5">
                {activeProductDetail.indications.map((ind) => (
                  <span
                    key={ind}
                    className="bg-sky-50 text-sky-800 border border-sky-200 px-2 py-0.5 rounded-md text-[11px]"
                  >
                    {ind}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2 text-xs border-t border-slate-100">
              <div>
                <span className="text-slate-400">Packaging:</span>
                <div className="font-bold text-slate-800">{activeProductDetail.packaging}</div>
              </div>
              <div>
                <span className="text-slate-400">Packing Type:</span>
                <div className="font-bold text-slate-800">{activeProductDetail.packingType}</div>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  const prod = activeProductDetail.name;
                  setActiveProductDetail(null);
                  handleEnquire(prod);
                }}
                className="w-full py-2.5 bg-sky-700 hover:bg-sky-800 text-white font-bold text-xs rounded-xl shadow-xs transition"
              >
                Request Quotation for {activeProductDetail.name}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Global Quote Modal */}
      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialProduct={selectedProductForQuote}
      />
    </div>
  );
}
