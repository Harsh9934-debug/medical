import React from "react";
import Link from "next/link";
import { FileText, ChevronRight, Mail, MapPin, Phone, CheckCircle2 } from "lucide-react";
import { COMPANY } from "@/data/company";

export const metadata = {
  title: "Terms & Conditions | Incredible Medicare",
  description: "Commercial and contractual terms governing PCD franchise and contract manufacturing with Incredible Medicare.",
};

export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-xs text-slate-500 flex items-center gap-2">
          <Link href="/" className="hover:text-blue-700 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-800 font-medium">Terms & Conditions</span>
        </div>
      </div>

      {/* Header */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <FileText className="w-3.5 h-3.5" />
            Commercial & Legal Framework
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-2">
            Terms & Conditions of Business
          </h1>
          <p className="text-slate-300 text-sm">
            Effective Date: March 2026 · Incredible Medicare Commercial Division
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-xs space-y-8 text-sm text-slate-700 leading-relaxed">
          
          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-blue-700" />
              1. General Commercial Applicability
            </h2>
            <p>
              These Terms &amp; Conditions govern all transactions, price quotations, orders, PCD pharma franchise relationships, and third-party contract manufacturing agreements entered into with <strong>{COMPANY.legalName}</strong> (&ldquo;Company&rdquo;). By placing a purchase order or signing a commercial agreement with us, the purchaser/franchise associate confirms acceptance of these terms.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-3">2. Statutory Drug License & GST Prerequisites</h2>
            <p>
              Under the Drugs &amp; Cosmetics Act (India), supply of pharmaceutical preparations can only be made to parties possessing valid wholesale or retail Drug Licenses (Form 20B/21B) and an active Goods and Services Tax Identification Number (GSTIN). Valid self-attested copies of both documents must be submitted prior to initial billing and commercial dispatch.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-3">3. PCD Pharma Franchise Monopoly Policy</h2>
            <p className="mb-2">
              For authorized franchise associates granted territorial exclusivity:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>Monopoly rights are conferred specifically for the agreed revenue district or territory delineated in the Franchise Agreement.</li>
              <li>Associates agree not to supply or promote Incredible Medicare products outside their assigned territory.</li>
              <li>The associate agrees to meet mutually established quarterly minimum target criteria to retain territorial exclusivity.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-3">4. Pricing, Taxes & Payment Terms</h2>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li><strong className="text-slate-800">Price Structure:</strong> Invoices are raised at agreed Net Trade Rates. Maximum Retail Price (MRP) and formulation taxes are applied in compliance with current National Pharmaceutical Pricing Authority (NPPA) and GST guidelines.</li>
              <li><strong className="text-slate-800">Payment:</strong> Standard terms for PCD franchise dispatch require advance RTGS/NEFT/Cheque clearance before dispatch. For contract manufacturing batches, payments follow agreed milestone schedules (e.g. 50% advance with purchase order, balance against dispatch documents).</li>
              <li><strong className="text-slate-800">Price Revisions:</strong> Due to volatility in active pharmaceutical ingredients (APIs) and packaging commodities, prices are subject to written notification of adjustments.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-3">5. Logistics, Freight & Transit Risk</h2>
            <p>
              Unless explicitly specified otherwise in writing, all commercial consignments are dispatched on an ex-factory / ex-warehouse basis from our central distribution hubs in Zirakpur (Punjab) or Kathua (J&amp;K). Freight charges are to be borne by the consignee. Consignments are packed with certified tamper-evident corrugated shippers; transit insurance can be arranged on the buyer&rsquo;s request.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-3">6. Quality Assurance & Inspection Policy</h2>
            <p>
              Every batch dispatched is accompanied by a certified Certificate of Analysis (COA) confirming adherence to Indian Pharmacopoeia (IP), British Pharmacopoeia (BP), or United States Pharmacopeia (USP) specifications. Any physical discrepancy or transit damage must be notified in writing within 48 hours of shipment receipt.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-3">7. Jurisdiction</h2>
            <p>
              Any disputes, claims, or contractual matters arising between the parties shall be subject exclusively to the legal jurisdiction of the competent courts in SAS Nagar (Mohali) / Chandigarh / Punjab, India.
            </p>
          </div>

          <div className="pt-4 border-t border-slate-200">
            <h3 className="text-base font-bold text-slate-900 mb-2">Corporate Office Enquiries</h3>
            <p className="text-xs text-slate-600 mb-2">
              For any contractual or commercial clarification, please reach out directly:
            </p>
            <div className="text-xs text-slate-700 space-y-1">
              <p><strong>{COMPANY.legalName}</strong></p>
              <p>{COMPANY.address}</p>
              <p>Email: <a href={`mailto:${COMPANY.email}`} className="text-blue-700 underline">{COMPANY.email}</a></p>
              <p>Phone: <a href={`tel:${COMPANY.phone}`} className="text-blue-700 underline">{COMPANY.phone}</a></p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
