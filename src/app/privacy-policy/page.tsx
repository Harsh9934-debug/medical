import React from "react";
import Link from "next/link";
import { ShieldCheck, ChevronRight, Mail, MapPin, Phone, Lock, FileText } from "lucide-react";
import { COMPANY } from "@/data/company";

export const metadata = {
  title: "Privacy Policy | Incredible Medicare",
  description: "Privacy policy and client data protection practices for Incredible Medicare.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-xs text-slate-500 flex items-center gap-2">
          <Link href="/" className="hover:text-blue-700 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-800 font-medium">Privacy Policy</span>
        </div>
      </div>

      {/* Header */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Lock className="w-3.5 h-3.5" />
            Corporate Governance & Data Protection
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-2">
            Privacy Policy
          </h1>
          <p className="text-slate-300 text-sm">
            Last Updated: March 2026 · Incredible Medicare Corporate Compliance
          </p>
        </div>
      </section>

      {/* Main Legal Content */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-xs space-y-8 text-sm text-slate-700 leading-relaxed">
          
          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-blue-700" />
              1. Overview & Commitment
            </h2>
            <p>
              Incredible Medicare (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to maintaining the confidentiality, integrity, and security of personal and corporate information entrusted to us by our business associates, PCD franchise partners, healthcare professionals, and third-party contract manufacturing clients.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-3">2. Information We Collect</h2>
            <p className="mb-2">
              We collect information that you voluntarily submit when requesting product price lists, applying for district PCD monopoly rights, submitting contract manufacturing RFQs (Requests for Quotation), or contacting our sales and support teams:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li><strong className="text-slate-800">Contact Details:</strong> Full Name, Corporate Email Address ({COMPANY.email}), Telephone/Mobile Number, and Mailing Address.</li>
              <li><strong className="text-slate-800">Business Qualifications:</strong> Drug License (DL) Number, GSTIN identification, territorial preferences, and existing distribution infrastructure.</li>
              <li><strong className="text-slate-800">Formulation & Batch Inquiries:</strong> Desired dosage forms, molecule specifications, batch quantities, and packaging preferences.</li>
              <li><strong className="text-slate-800">Technical Log Data:</strong> Non-personally identifiable diagnostic data such as IP address, browser type, and page access timestamps to safeguard website integrity.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-3">3. How We Use Your Information</h2>
            <p className="mb-2">All data collected is used strictly for legitimate commercial and regulatory objectives:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>Processing product catalogs, wholesale price inquiries, and quotation drafts.</li>
              <li>Evaluating and awarding exclusive PCD Pharma Franchise territory agreements.</li>
              <li>Executing contract manufacturing agreements and batch production schedules.</li>
              <li>Transmitting regulatory dossiers, Certificates of Analysis (COA), and dispatch tracking notifications.</li>
              <li>Complying with statutory drug regulatory mandates and tax obligations.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-3">4. Non-Disclosure & Data Confidentiality</h2>
            <p>
              Incredible Medicare strictly adheres to commercial non-disclosure practices. We do not sell, lease, barter, or trade our franchise associates&rsquo; or contract clients&rsquo; commercial data, proprietary packaging designs, or customer lists to any third-party marketing entities. Information is disclosed solely to authorized employees, logistics partners, and statutory authorities where mandated by law.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-3">5. Data Storage and Security</h2>
            <p>
              We implement industry-standard administrative, electronic, and physical security measures to safeguard all digital records against unauthorized access, alteration, or disclosure. All inquiry form communications are transmitted via encrypted Secure Sockets Layer (SSL) protocols.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-3">6. Contacting the Compliance Officer</h2>
            <p className="mb-3">
              If you have any questions or concerns regarding this Privacy Policy or wish to review or update your commercial records, please contact our administrative desk:
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2 text-xs text-slate-700">
              <p className="font-bold text-slate-900">{COMPANY.legalName}</p>
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-700" />
                {COMPANY.address}
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-700" />
                <a href={`mailto:${COMPANY.email}`} className="text-blue-700 hover:underline">{COMPANY.email}</a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-700" />
                <a href={`tel:${COMPANY.phone}`} className="text-blue-700 hover:underline">{COMPANY.phone}</a>
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
