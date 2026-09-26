"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Building2,
  MessageSquare,
  ShieldCheck,
  Calendar
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    subject: "PCD Pharma Franchise Inquiry",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen text-slate-900 pb-20">
      {/* Top Banner */}
      <section className="bg-gradient-to-b from-white to-slate-100/70 py-14 sm:py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <nav className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            <Link href="/" className="hover:text-sky-700">Home</Link>
            <span>/</span>
            <span className="text-sky-800">Contact Us</span>
          </nav>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Connect With Incredible Medicare
          </h1>
          <div className="accent-bar mx-auto"></div>
          <p className="max-w-3xl mx-auto text-slate-600 text-sm sm:text-base leading-relaxed">
            Reach out to our corporate headquarters at Unicity Business Park, Zirakpur, Punjab. Our business development team provides immediate support for PCD franchise, third-party manufacturing, and product inquiries.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Official Contact Cards & Locations */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Corporate Office Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center font-bold">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-900">Corporate Headquarters</h2>
                  <p className="text-xs text-sky-700 font-semibold">Incredible Medicare</p>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-sky-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 mb-0.5">Office Address:</strong>
                    <span>{COMPANY_INFO.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-sky-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 mb-0.5">Official Inquiries:</strong>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-sky-800 font-semibold hover:underline"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-sky-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 mb-0.5">Direct Commercial Phone:</strong>
                    <a
                      href={`tel:${COMPANY_INFO.whatsapp}`}
                      className="text-sky-800 font-semibold hover:underline"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                    <div className="text-slate-500 text-xs mt-0.5">
                      Alt: {COMPANY_INFO.altPhone}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-sky-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 mb-0.5">Working Hours:</strong>
                    <span>{COMPANY_INFO.workingHours}</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
                    "Hello Incredible Medicare, I would like to inquire about PCD franchise monopoly and products."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-xl shadow-xs transition"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat with Business Representative on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Manufacturing Complex Card */}
            <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-800 text-sky-400 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Manufacturing Complex</h3>
                  <p className="text-xs text-sky-400">WHO-GMP &amp; ISO 9001:2015</p>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {COMPANY_INFO.manufacturingUnit}
              </p>
              <div className="text-[11px] text-slate-400 pt-2 border-t border-slate-800">
                Equipped with Class 10,000 cleanrooms and dedicated analytical QA/QC suites.
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact & Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-6">
            <div className="space-y-2">
              <span className="text-sky-700 text-xs font-bold uppercase tracking-wider">
                Send Direct Message
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Request Product Pricing or Franchise Monopoly
              </h2>
              <div className="accent-bar"></div>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Message Sent Successfully!
                </h3>
                <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
                  Thank you for contacting <strong>Incredible Medicare</strong>. Our commercial officer will review your inquiry and reach out within 2 hours.
                </p>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-600">
                  Notification routed to official inbox: {COMPANY_INFO.email}
                </div>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-sky-700 text-white text-xs font-semibold rounded-lg"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Dr. Rajesh Sharma"
                      className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-sky-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Phone Number / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-sky-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-sky-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Inquiry Focus
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-sky-600 bg-white"
                    >
                      <option value="PCD Pharma Franchise Inquiry">PCD Pharma Franchise (Monopoly)</option>
                      <option value="Third-Party Contract Manufacturing">Third-Party Contract Manufacturing</option>
                      <option value="Bulk Formulation Supply">Bulk Institutional Supply</option>
                      <option value="Export & International Trade">Global Export Partnership</option>
                      <option value="Product Samples & Price List">Product Price List Request</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      City / District *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="e.g. Ludhiana, Jaipur, Varanasi"
                      className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-sky-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      State *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      placeholder="e.g. Punjab, Rajasthan, UP"
                      className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-sky-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Requirements &amp; Message
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details on required therapeutic categories, preferred district, or estimated batch volume..."
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-sky-600"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 bg-sky-700 hover:bg-sky-800 text-white font-bold text-sm rounded-xl shadow-xs hover:shadow transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry for Immediate Review</span>
                  </button>
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-slate-100">
                  <div className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Verified Commercial Desk</span>
                  </div>
                  <span>Response time: &lt; 2 business hours</span>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Embedded Location Map Section */}
        <div className="mt-16 bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs">
          <div className="p-6 border-b border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <h3 className="font-bold text-slate-900 text-base">
                Location Map: Corporate Headquarters
              </h3>
              <p className="text-xs text-slate-500">
                Unicity Business Park, Dhakoli, Zirakpur, Punjab 160104
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=Unicity+Business+Park+Dhakoli+Zirakpur+Punjab"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-sky-700 hover:text-sky-900 hover:underline flex items-center gap-1"
            >
              <span>Open in Google Maps</span>
            </a>
          </div>

          <div className="w-full h-80 sm:h-96 bg-slate-100">
            <iframe
              src="https://maps.google.com/maps?q=Unicity%20Business%20Park,%20Dhakoli,%20Zirakpur,%20Punjab%20160104&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Incredible Medicare Location Map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
