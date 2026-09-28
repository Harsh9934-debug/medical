"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  MessageSquare,
  ShieldCheck,
  Factory,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/Reveal";
import ContactWithGlobe, {
  type ContactLink,
} from "@/components/ui/contact-with-globe";

const MAPS_QUERY = "Unicity Business Park Dhakoli Zirakpur Punjab";

const CONTACT_LINKS: ContactLink[] = [
  {
    icon: Mail,
    label: COMPANY_INFO.email,
    href: `mailto:${COMPANY_INFO.email}`,
  },
  {
    icon: Phone,
    label: COMPANY_INFO.phone,
    href: `tel:+${COMPANY_INFO.whatsapp}`,
  },
  {
    icon: MapPin,
    label: COMPANY_INFO.address,
    href: `https://maps.google.com/?q=${encodeURIComponent(MAPS_QUERY)}`,
    external: true,
  },
  {
    icon: Clock,
    label: COMPANY_INFO.workingHours,
  },
];

const inputClass =
  "w-full rounded-[4px] border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-800 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-teal-500 focus:bg-white focus:ring-2 focus:ring-teal-500/15";
const labelClass =
  "mb-1.5 block text-xs font-semibold uppercase tracking-widest text-slate-400";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    subject: "PCD Pharma Franchise Inquiry",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const set =
    (key: keyof typeof formData) =>
      (
        e: React.ChangeEvent<
          HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >,
      ) =>
        setFormData({ ...formData, [key]: e.target.value });

  return (
    <div className="w-full bg-slate-50 pb-20 text-slate-900">
      <ContactWithGlobe
        subtitle="Contact Us"
        title="Connect With Incredible Medicare"
        description="Reach out to our corporate headquarters at Unicity Business Park, Zirakpur, Punjab. Our business development team provides immediate support for PCD franchise, third-party manufacturing, and product inquiries."
        contactHeading="Corporate Headquarters"
        contactDescription="Reach us through any channel below. Our commercial desk replies within 2 business hours."
        links={CONTACT_LINKS}
        extra={
          <a
            href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
              "Hello Incredible Medicare, I would like to inquire about PCD franchise monopoly and products.",
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine flex w-full items-center justify-center gap-2 rounded-[4px] bg-emerald-600 py-3 text-xs font-semibold text-white shadow-xs transition hover:bg-emerald-700"
          >
            <MessageSquare className="h-4 w-4" />
            <span>Chat with Business Representative on WhatsApp</span>
          </a>
        }
        formTitle="Request Product Pricing or Franchise Monopoly"
        formDescription="Fill out the form and our commercial officer will get back to you promptly."
      >
        {submitted ? (
          <div className="space-y-4 py-10 text-center">
            <div className="mx-auto flex h-16 w-16 animate-in zoom-in-50 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 duration-500">
              <CheckCircle2 className="h-10 w-10" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">
              Message Sent Successfully!
            </h3>
            <p className="mx-auto max-w-md text-sm leading-relaxed text-slate-600">
              Thank you for contacting <strong>Incredible Medicare</strong>. Our
              commercial officer will review your inquiry and reach out within 2
              hours.
            </p>
            <div className="rounded-[4px] border border-slate-200 bg-slate-50 p-3 text-xs text-slate-600">
              Notification routed to official inbox: {COMPANY_INFO.email}
            </div>
            <Button type="button" onClick={() => setSubmitted(false)}>
              Send Another Inquiry
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="animate-in fade-in slide-in-from-bottom-3 fill-mode-backwards duration-500 grid grid-cols-1 gap-4 sm:grid-cols-2" style={{ animationDelay: "0ms" }}>
              <div>
                <label htmlFor="c-name" className={labelClass}>
                  Full Name *
                </label>
                <input
                  id="c-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={set("name")}
                  placeholder="e.g. Dr. Rajesh Sharma"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="c-phone" className={labelClass}>
                  Phone / WhatsApp *
                </label>
                <input
                  id="c-phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={set("phone")}
                  placeholder="+91 90414 13777"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="animate-in fade-in slide-in-from-bottom-3 fill-mode-backwards duration-500 grid grid-cols-1 gap-4 sm:grid-cols-2" style={{ animationDelay: "120ms" }}>
              <div>
                <label htmlFor="c-email" className={labelClass}>
                  Email Address *
                </label>
                <input
                  id="c-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={set("email")}
                  placeholder="name@example.com"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="c-subject" className={labelClass}>
                  Inquiry Focus
                </label>
                <select
                  id="c-subject"
                  value={formData.subject}
                  onChange={set("subject")}
                  className={inputClass}
                >
                  <option value="PCD Pharma Franchise Inquiry">
                    PCD Pharma Franchise (Monopoly)
                  </option>
                  <option value="Third-Party Contract Manufacturing">
                    Third-Party Contract Manufacturing
                  </option>
                  <option value="Bulk Formulation Supply">
                    Bulk Institutional Supply
                  </option>
                  <option value="Export & International Trade">
                    Global Export Partnership
                  </option>
                  <option value="Product Samples & Price List">
                    Product Price List Request
                  </option>
                </select>
              </div>
            </div>

            <div className="animate-in fade-in slide-in-from-bottom-3 fill-mode-backwards duration-500 grid grid-cols-1 gap-4 sm:grid-cols-2" style={{ animationDelay: "240ms" }}>
              <div>
                <label htmlFor="c-city" className={labelClass}>
                  City / District *
                </label>
                <input
                  id="c-city"
                  type="text"
                  required
                  value={formData.city}
                  onChange={set("city")}
                  placeholder="e.g. Ludhiana, Jaipur, Varanasi"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="c-state" className={labelClass}>
                  State *
                </label>
                <input
                  id="c-state"
                  type="text"
                  required
                  value={formData.state}
                  onChange={set("state")}
                  placeholder="e.g. Punjab, Rajasthan, UP"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="animate-in fade-in slide-in-from-bottom-3 fill-mode-backwards duration-500" style={{ animationDelay: "360ms" }}>
              <label htmlFor="c-message" className={labelClass}>
                Your Requirements &amp; Message
              </label>
              <textarea
                id="c-message"
                rows={4}
                value={formData.message}
                onChange={set("message")}
                placeholder="Provide details on required therapeutic categories, preferred district, or estimated batch volume..."
                className={`${inputClass} resize-none`}
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="btn-shine h-12 w-full rounded-[4px] text-sm font-bold"
            >
              <Send className="h-4 w-4" />
              Submit Inquiry for Immediate Review
            </Button>

            <div className="flex items-center justify-between border-t border-slate-100 pt-3 text-[11px] text-slate-500">
              <div className="flex items-center gap-1">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                <span>Verified Commercial Desk</span>
              </div>
              <span>Response time: &lt; 2 business hours</span>
            </div>
          </form>
        )}
      </ContactWithGlobe>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-8">
          {/* Manufacturing Complex */}
          <Reveal className="flex flex-col gap-4 rounded-[4px] bg-slate-900 p-6 text-white sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[4px] bg-slate-800 text-teal-400">
                <Factory className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-base font-bold">Manufacturing Complex</h3>
                <p className="text-xs text-teal-400">
                  WHO-GMP &amp; ISO 9001:2015
                </p>
                <p className="mt-2 max-w-xl text-xs leading-relaxed text-slate-300">
                  {COMPANY_INFO.manufacturingUnit}
                </p>
              </div>
            </div>
            <p className="max-w-xs border-t border-slate-800 pt-3 text-[11px] text-slate-400 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0">
              Equipped with Class 10,000 cleanrooms and dedicated analytical
              QA/QC suites.
            </p>
          </Reveal>

          {/* Location Map */}
          <Reveal delay={0.1} className="overflow-hidden rounded-[4px] border border-slate-200 bg-white shadow-xs">
            <div className="flex flex-col items-start justify-between gap-3 border-b border-slate-200 p-6 sm:flex-row sm:items-center">
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  Location Map: Corporate Headquarters
                </h3>
                <p className="text-xs text-slate-500">{COMPANY_INFO.address}</p>
              </div>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(MAPS_QUERY)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs font-bold text-teal-700 hover:text-teal-900 hover:underline"
              >
                Open in Google Maps
              </a>
            </div>

            <div className="h-80 w-full bg-slate-100 sm:h-96">
              <iframe
                src="https://maps.google.com/maps?q=Unicity%20Business%20Park,%20Dhakoli,%20Zirakpur,%20Punjab%20160104&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Incredible Medicare Location Map"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
