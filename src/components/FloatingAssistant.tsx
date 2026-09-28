"use client";

import React, { useState } from "react";
import { MessageSquare, Phone, FileText, X, ChevronUp } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import EnquiryModal from "./EnquiryModal";

export default function FloatingAssistant() {
  const [openModal, setOpenModal] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
    "Hello Incredible Medicare, I would like to inquire about PCD Pharma Franchise and Third Party Manufacturing options."
  )}`;

  return (
    <>
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
        {/* Expanded options */}
        {isExpanded && (
          <div className="flex flex-col items-end gap-2 mb-1 animate-in fade-in slide-in-from-bottom-3 duration-200">
            {/* Quick Quote Button */}
            <button
              type="button"
              onClick={() => {
                setIsExpanded(false);
                setOpenModal(true);
              }}
              className="flex items-center gap-2 bg-white text-slate-800 hover:text-teal-700 px-4 py-2.5 rounded-full shadow-lg border border-slate-200 text-xs font-bold transition hover:shadow-xl group"
            >
              <FileText className="w-4 h-4 text-teal-600 group-hover:scale-110 transition" />
              <span>Instant Quotation Form</span>
            </button>

            {/* Direct Call Button */}
            <a
              href={`tel:${COMPANY_INFO.whatsapp}`}
              className="flex items-center gap-2 bg-white text-slate-800 hover:text-emerald-700 px-4 py-2.5 rounded-full shadow-lg border border-slate-200 text-xs font-bold transition hover:shadow-xl group"
            >
              <Phone className="w-4 h-4 text-emerald-600 group-hover:scale-110 transition" />
              <span>Direct Commercial Line</span>
            </a>

            {/* WhatsApp Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-emerald-600 text-white px-4 py-2.5 rounded-full shadow-lg text-xs font-bold transition hover:bg-emerald-700 hover:shadow-xl"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        )}

        {/* Main Floating Trigger Button */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 bg-teal-700 hover:bg-teal-800 text-white px-4 py-3 rounded-full shadow-xl transition-all hover:scale-105 cursor-pointer ring-4 ring-teal-700/20"
            aria-label="Contact assistance options"
          >
            {isExpanded ? (
              <>
                <X className="w-5 h-5" />
                <span className="text-xs font-bold">Close</span>
              </>
            ) : (
              <>
                <MessageSquare className="w-5 h-5 text-teal-200" />
                <span className="text-xs font-bold">Quick Enquiry</span>
              </>
            )}
          </button>
        </div>
      </div>

      <EnquiryModal isOpen={openModal} onClose={() => setOpenModal(false)} />
    </>
  );
}
