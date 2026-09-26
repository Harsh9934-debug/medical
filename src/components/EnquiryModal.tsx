"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  X,
  Send,
  CheckCircle2,
  ShieldCheck,
  Mail,
  Phone,
  MapPin,
  Clock,
  BadgePercent,
  FileText,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: string;
}

const INPUT =
  "w-full rounded-[4px] border border-[#dbe5f5] bg-[#f8fbff] px-3.5 py-2.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#0b5bd3] focus:bg-white focus:ring-2 focus:ring-[#0b5bd3]/20";
const LABEL = "mb-1.5 block text-xs font-semibold text-[#0a1f44]";

const BENEFITS = [
  { icon: Clock, a: "Response in 2 business hours", b: "Direct reply from our commercial desk." },
  { icon: BadgePercent, a: "Net rates & monopoly terms", b: "Territory-wise rights and batch MOQ details." },
  { icon: FileText, a: "Complete catalog pricing", b: "Product list, packaging and samples." },
];

export default function EnquiryModal({
  isOpen,
  onClose,
  initialProduct = "",
}: EnquiryModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    state: "",
    enquiryType: "PCD Pharma Franchise",
    message: initialProduct ? `Inquiring about ${initialProduct}` : "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Keep the message in sync when the preset product changes (adjusting state
  // during render avoids an extra effect-driven re-render).
  const [presetProduct, setPresetProduct] = useState(initialProduct);
  if (presetProduct !== initialProduct) {
    setPresetProduct(initialProduct);
    if (initialProduct) {
      setFormData((prev) => ({
        ...prev,
        message: `Inquiring about ${initialProduct}`,
      }));
    }
  }

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-[#0a1f44]/60 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Request a quotation"
        onClick={(e) => e.stopPropagation()}
        className="relative grid w-full max-w-4xl grid-cols-1 overflow-hidden rounded-[4px] bg-white shadow-2xl animate-in fade-in zoom-in-95 duration-200 lg:grid-cols-5"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-10 rounded-[4px] bg-[#eef3fb] p-2 text-slate-500 transition hover:bg-[#e3ecfa] hover:text-slate-800 cursor-pointer lg:bg-white/10 lg:text-slate-300 lg:hover:bg-white/20 lg:hover:text-white lg:left-3 lg:right-auto"
          aria-label="Close dialog"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Left info panel */}
        <div className="relative hidden overflow-hidden bg-gradient-to-br from-[#04142f] via-[#08234b] to-[#0a2d5e] p-8 text-white lg:col-span-2 lg:flex lg:flex-col">
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-sky-400/10 blur-2xl" />
          <div className="relative mt-8 flex items-center gap-3">
            <Image src="/logo.png" alt="Incredible Medicare" width={44} height={44} className="object-contain" />
            <div className="leading-tight">
              <div className="text-lg font-extrabold">
                Incredible <span className="text-sky-400">Medicare</span>
              </div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-300">
                Pharma Formulations &amp; Healthcare
              </div>
            </div>
          </div>

          <div className="relative mt-8">
            <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-sky-400">
              <ShieldCheck className="h-4 w-4" />
              Official Quotation &amp; Franchise Desk
            </span>
            <h3 className="mt-3 text-2xl font-extrabold leading-snug">
              Get Your <span className="text-sky-400">Quotation</span> Today
            </h3>
          </div>

          <ul className="relative mt-6 space-y-4">
            {BENEFITS.map((b) => (
              <li key={b.a} className="flex items-start gap-3">
                <b.icon className="mt-0.5 h-6 w-6 shrink-0 text-sky-300" strokeWidth={1.5} />
                <div className="leading-snug">
                  <div className="text-sm font-bold">{b.a}</div>
                  <div className="text-xs text-slate-300">{b.b}</div>
                </div>
              </li>
            ))}
          </ul>

          <div className="relative mt-auto space-y-3 border-t border-white/10 pt-5 text-xs text-slate-200">
            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0 text-sky-300" />
              {COMPANY_INFO.phone}
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0 text-sky-300" />
              {COMPANY_INFO.email}
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sky-300" />
              {COMPANY_INFO.address}
            </div>
          </div>
        </div>

        {/* Right: form */}
        <div className="p-6 pt-14 sm:p-8 lg:col-span-3 lg:pt-8">
          {submitted ? (
            <div className="flex h-full min-h-[380px] flex-col items-center justify-center space-y-4 text-center">
              <CheckCircle2 className="h-16 w-16 text-emerald-500" strokeWidth={1.5} />
              <h4 className="text-2xl font-extrabold text-[#0a1f44]">
                Inquiry Received Successfully!
              </h4>
              <p className="mx-auto max-w-md text-sm leading-relaxed text-slate-600">
                Thank you for reaching out to <strong className="text-[#0a1f44]">Incredible Medicare</strong>.
                Our commercial director will connect with you at{" "}
                <span className="font-semibold text-[#0a1f44]">
                  {formData.phone || formData.email}
                </span>{" "}
                with complete catalog pricing, monopoly terms, and batch MOQ details.
              </p>
              <div className="rounded-[4px] border border-[#cfe0f7] bg-[#eaf1fd] px-4 py-2.5 text-xs text-[#0a2d5e]">
                A confirmation has been logged for: {COMPANY_INFO.email}
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <h3 className="text-xl font-extrabold text-[#0a1f44]">
                  Request a <span className="text-[#0b5bd3]">Quotation</span>
                </h3>
                <p className="mt-1 text-xs text-slate-500">
                  Fill in your details and our team will respond within 2 business hours.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className={LABEL}>Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Dr. Rajesh Sharma"
                    className={INPUT}
                  />
                </div>
                <div>
                  <label className={LABEL}>Contact Number / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className={INPUT}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className={LABEL}>Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className={INPUT}
                  />
                </div>
                <div>
                  <label className={LABEL}>Nature of Inquiry</label>
                  <select
                    value={formData.enquiryType}
                    onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                    className={INPUT}
                  >
                    <option value="PCD Pharma Franchise">PCD Pharma Franchise</option>
                    <option value="Third-Party Manufacturing">Third-Party Contract Manufacturing</option>
                    <option value="Product Price List">Product Price List &amp; Samples</option>
                    <option value="Global Exports">Global Export &amp; Institutional Supply</option>
                    <option value="Other Business Inquiry">General Business Inquiry</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className={LABEL}>City / District *</label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="e.g. Chandigarh / Jaipur / Patna"
                    className={INPUT}
                  />
                </div>
                <div>
                  <label className={LABEL}>State *</label>
                  <input
                    type="text"
                    required
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    placeholder="e.g. Punjab / Haryana / UP"
                    className={INPUT}
                  />
                </div>
              </div>

              <div>
                <label className={LABEL}>Interested Formulations / Additional Requirements</label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Mention product names, dosage forms, or target territory..."
                  className={`${INPUT} resize-none`}
                ></textarea>
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-[4px] bg-[#0b5bd3] py-3.5 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(11,91,211,0.35)] transition hover:bg-[#0a4db3] cursor-pointer"
              >
                <Send className="h-4 w-4" />
                Submit Inquiry for Immediate Quotation
              </button>

              <div className="flex flex-col gap-1 border-t border-slate-100 pt-3 text-[11px] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-emerald-600" />
                  <span>100% Confidential &amp; Verified</span>
                </div>
                <div>Monopoly rights based on first-come validation</div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
