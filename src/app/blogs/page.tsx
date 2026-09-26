"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  Tag, 
  ArrowRight, 
  Search, 
  CheckCircle2, 
  Share2, 
  FileText,
  ShieldCheck,
  TrendingUp,
  Sparkles,
  ChevronRight,
  X
} from "lucide-react";
import { COMPANY } from "@/data/company";

interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  tags: string[];
  content: string[];
  keyTakeaways: string[];
}

const ARTICLES: Article[] = [
  {
    id: "1",
    slug: "guide-to-pcd-pharma-franchise-in-india",
    title: "Comprehensive Guide to Starting a Profitable PCD Pharma Franchise in India",
    excerpt: "Understand market selection, DCGI approvals, district monopoly rights, and inventory strategies to maximize your ROI in the booming Indian pharmaceutical sector.",
    category: "PCD Franchise",
    date: "March 2026",
    readTime: "5 min read",
    author: "Strategy & Franchise Division",
    authorRole: "Incredible Medicare Business Team",
    tags: ["PCD Franchise", "Monopoly Rights", "Pharma Business", "Regulatory Compliance"],
    keyTakeaways: [
      "Securing exclusive district monopoly agreements prevents territory cannibalization.",
      "DCGI approved DCGI/FSSAI molecules provide medical legitimacy with prescribers.",
      "Complete visual aids, MR bags, samples, and LBLs expedite initial doctor conversions.",
      "Maintaining an optimal 30-day inventory cycle protects working capital while eliminating stock-outs."
    ],
    content: [
      "The Indian pharmaceutical industry ranks among the fastest-growing healthcare sectors globally. For entrepreneurs, medical representatives, and pharmaceutical distributors, partnering with a WHO-GMP certified organization like Incredible Medicare presents a lucrative pathway to business ownership.",
      "When evaluating a PCD Pharma Franchise opportunity, the first criterion is always regulatory assurance. Partnering with a company that delivers 100% DCGI-approved formulations manufactured in cGMP-compliant facilities ensures you never face prescriber hesitancy or regulatory penalties.",
      "District monopoly rights are the lifeblood of sustainable franchise profitability. Incredible Medicare provides legally sound, strictly respected territorial monopoly agreements. This ensures that every rupee you invest in medical marketing and doctor relationship building accrues exclusively to your business without cross-territory dumping.",
      "Promotional support is the second critical pillar. A successful launch requires comprehensive visual aids, glossary folders, catch covers, product glossaries, order books, and physician sample kits. Incredible Medicare equips our franchise partners with premier, scientifically verified marketing collaterals from day one.",
      "Finally, operational speed matters. With ready inventory across our 400+ DCGI approved formulations, orders received are dispatched within 24 to 48 hours, ensuring consistent supply chains for your retail chemist network."
    ]
  },
  {
    id: "2",
    slug: "why-who-gmp-certification-matters-in-third-party-manufacturing",
    title: "Why WHO-GMP Certification Is the Golden Standard in Third-Party Contract Manufacturing",
    excerpt: "Discover the critical regulatory, quality control, sterility, and analytical release benchmarks that separate premier contract manufacturers from conventional units.",
    category: "Contract Manufacturing",
    date: "February 2026",
    readTime: "6 min read",
    author: "Quality Assurance Directorate",
    authorRole: "Incredible Medicare Technical Board",
    tags: ["WHO-GMP", "cGMP", "Third-Party Manufacturing", "Analytical Testing", "GLP"],
    keyTakeaways: [
      "WHO-GMP mandates automated HVAC air-handling systems with Class 10,000 / 100,000 cleanroom standards.",
      "Independent QA/QC analytical release with validated HPLC, FTIR, and dissolution profiling.",
      "Strict raw material (API) vendor qualification guarantees batch-to-batch chemical uniformity.",
      "Complete regulatory documentation including COA, stability protocols, and batch production records."
    ],
    content: [
      "In pharmaceutical contract manufacturing, your brand reputation is inextricably bound to your manufacturing partner's cleanroom discipline and analytical rigor. A single dissolution failure or microbial excursion can destroy years of prescriber trust.",
      "WHO-GMP (World Health Organization - Good Manufacturing Practices) certification is far more than a formal certificate on the wall. It governs every cubic foot of air in our facility, every gram of API received, and every automated packaging line in operation.",
      "At Incredible Medicare, our state-of-the-art facilities in Zirakpur (Punjab) and our high-capacity unit in Kathua (J&K) incorporate terminal HEPA filtration, dedicated AHUs (Air Handling Units) for individual dosage corridors, and Class 100 laminar airflow workstations in critical filling zones.",
      "Our Quality Control laboratories leverage computer-validated High-Performance Liquid Chromatography (HPLC), Ultraviolet Spectrophotometry, and computerized dissolution testers. Every batch undergoes accelerated and real-time stability monitoring under ICH climatic zone IV guidelines.",
      "When pharma brand owners partner with Incredible Medicare for third-party contract manufacturing, they receive complete peace of mind, expedited turnaround times, and world-class packaging options including Alu-Alu, Blister, Amber Glass, and Lyophilized Vials."
    ]
  },
  {
    id: "3",
    slug: "advancements-in-nanoshot-and-high-absorption-formulations",
    title: "Nanotechnology & Next-Gen Oral Formulations: The Future of High-Bioavailability Therapeutics",
    excerpt: "Exploring how liquid nanoshots, micellar technology, and lipid-based softgel delivery systems dramatically elevate bioavailability and clinical efficacy in preventive care.",
    category: "R&D & Science",
    date: "January 2026",
    readTime: "7 min read",
    author: "Formulation R&D Team",
    authorRole: "Incredible Medicare Innovation Lab",
    tags: ["Nanotechnology", "Bioavailability", "Liquid Nanoshot", "Softgel", "Formulation Science"],
    keyTakeaways: [
      "Nano-emulsification reduces active particle sizes below 100 nm, bypassing hepatic first-pass degradation.",
      "Liquid Cholecalciferol Nanoshots achieve 5x faster plasma concentration peaks compared to conventional tablets.",
      "Lipid-based softgel carriers protect moisture-sensitive APIs and fat-soluble vitamins.",
      "Higher patient compliance through ready-to-drink unit-dose vials with pleasant flavors."
    ],
    content: [
      "Traditional solid dosage forms often suffer from erratic oral absorption, especially for poorly water-soluble APIs (BCS Class II and IV molecules). In modern preventive medicine, enhancing clinical bioavailability is the paramount objective.",
      "Incredible Medicare has pioneered advanced liquid nanoshot delivery technology, such as in our flagship INCRICOM-D3 60K Nanoshots. By encapsulating fat-soluble Cholecalciferol within sub-micron micellar droplets, absorption begins almost immediately across the oral and upper gastrointestinal mucosa.",
      "This eliminates the dependence on dietary dietary fat intake for optimal absorption, a common cause of treatment failure in hypovitaminosis D patients on conventional dry tablets.",
      "Furthermore, our soft gelatin encapsulation line utilizes inert nitrogen-purged processing to protect oxidation-prone compounds such as Coenzyme Q10, Omega-3 fatty acids, and Methylcobalamin.",
      "As consumer and clinical preferences lean toward faster onset and pleasant sensory experience, franchise partners carrying our advanced nanoshot and softgel portfolios enjoy distinct commercial advantages."
    ]
  },
  {
    id: "4",
    slug: "streamlining-export-dossiers-for-international-pharma-markets",
    title: "Navigating Pharmaceutical Export Dossiers: CTD/eCTD & ACTD Regulatory Compliance",
    excerpt: "A tactical breakdown of regulatory dossiers, Certificate of Pharmaceutical Product (COPP), and Free Sale Certificates required to enter CIS, African, and LATAM markets.",
    category: "Global Exports",
    date: "December 2025",
    readTime: "5 min read",
    author: "International Regulatory Affairs",
    authorRole: "Incredible Medicare Global Trade",
    tags: ["Export Dossiers", "CTD Format", "ACTD", "COPP", "Global Pharma"],
    keyTakeaways: [
      "CTD Module 1 to 5 documentation is required by semi-regulated and regulated national ministries of health.",
      "Real-time Zone IVb stability data (30°C / 75% RH) is mandatory for hot and humid importing regions.",
      "Incredible Medicare provides full regulatory dossier assistance from initial registration to commercial clearance.",
      "Multilingual foil printing and climate-specific packaging ensure seamless customs and market entry."
    ],
    content: [
      "Expanding pharmaceutical operations beyond domestic borders requires mastery over regional regulatory frameworks. National drug control authorities in Central Asia (CIS), Southeast Asia (ASEAN), Africa, and Latin America mandate rigorous evidence of safety, quality, and therapeutic equivalence.",
      "At Incredible Medicare, our International Regulatory Affairs cell prepares standardized Common Technical Documents (CTD), electronic CTDs (eCTD), and ASEAN Common Technical Dossiers (ACTD).",
      "We provide our global distribution partners with verified Certificates of Pharmaceutical Product (COPP) issued under WHO guidelines, Certificates of Analysis (COA) for three consecutive commercial validation batches, and accelerated stability data.",
      "Packaging is engineered specifically for target climatic zones. For Zone IVb markets where humidity exceeds 75%, our tropical blister and tri-laminated Alu-Alu barrier foils preserve active drug potency over the complete 36-month shelf life."
    ]
  },
  {
    id: "5",
    slug: "rising-demand-in-pediatric-and-gynecology-formulations",
    title: "Therapeutic Growth Trends: Surging Opportunities in Pediatric & Gynecological Formulations",
    excerpt: "Analyzing epidemiological shifts, taste-masking advancements in pediatric syrups, and comprehensive prenatal-to-postnatal therapeutic matrices.",
    category: "Market Insights",
    date: "November 2025",
    readTime: "4 min read",
    author: "Commercial Marketing Cell",
    authorRole: "Incredible Medicare Medical Affairs",
    tags: ["Pediatrics", "Gynecology", "Market Trends", "Syrups", "Prenatal Care"],
    keyTakeaways: [
      "Pediatric formulations require superior taste-masking and calibrated dosing droppers.",
      "Gynecological care demands integrated hematinic, progesterone, and calcium/folic matrices.",
      "Incredible Medicare's specialized divisions provide dedicated visual aids tailored to specialist clinics."
    ],
    content: [
      "Pediatric and gynecological therapeutic segments represent two of the most consistent and high-frequency prescribing specialties in outpatient clinics across urban and semi-urban India.",
      "In pediatrics, patient compliance hinges on palatability. Incredible Medicare leverages microencapsulation and food-grade flavor masking in formulations like Cefpodoxime Proxetil dry syrups and Montelukast-Levocetirizine suspensions, transforming medicine administration from a struggle into an easy routine.",
      "In women's health, our specialized division provides evidence-backed therapies spanning sustained-release Natural Micronized Progesterone (SUSTAPREG-200), liposomal iron with Folic Acid (FEROCRIB-XT), and Isoflavone matrices for peri-menopausal wellness.",
      "For franchise partners, establishing strong relationships with pediatricians and gynecologists yields consistent, recurring monthly prescription volume with low seasonal vulnerability."
    ]
  }
];

const CATEGORIES = ["All", "PCD Franchise", "Contract Manufacturing", "R&D & Science", "Global Exports", "Market Insights"];

export default function BlogsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const filteredArticles = ARTICLES.filter((article) => {
    const matchesCategory = activeCategory === "All" || article.category === activeCategory;
    const matchesSearch = 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Top Breadcrumb */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-xs text-slate-500 flex items-center gap-2">
          <Link href="/" className="hover:text-blue-700 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-800 font-medium">Pharma Insights & Knowledge Hub</span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <BookOpen className="w-3.5 h-3.5" />
              Incredible Medicare Knowledge Hub
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
              Pharmaceutical Insights, Trends & Franchise Guides
            </h1>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed">
              In-depth analyses, regulatory guidelines, manufacturing standards, and commercial strategies curated by our formulation scientists and pharmaceutical business executives.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter Bar */}
      <section className="bg-white border-b border-slate-200 sticky top-16 md:top-20 z-20 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                    activeCategory === cat
                      ? "bg-blue-700 text-white shadow-xs"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search articles or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all text-slate-800"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredArticles.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800 mb-1">No articles found</h3>
            <p className="text-sm text-slate-500 mb-4">Try adjusting your search criteria or selecting a different category.</p>
            <button
              onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}
              className="px-4 py-2 bg-blue-700 text-white rounded-lg text-xs font-semibold hover:bg-blue-800 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <article 
                key={article.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col group cursor-pointer"
                onClick={() => setSelectedArticle(article)}
              >
                {/* Card Header Color Bar */}
                <div className="h-2 bg-gradient-to-r from-blue-700 via-sky-600 to-cyan-500" />
                
                <div className="p-6 flex-1 flex flex-col">
                  {/* Category & Read Time */}
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                    <span className="inline-flex items-center gap-1 font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                      <Tag className="w-3 h-3" />
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors line-clamp-2 mb-3">
                    {article.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4 flex-1">
                    {article.excerpt}
                  </p>

                  {/* Key Highlights Pill */}
                  <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 mb-4">
                    <p className="text-[11px] font-semibold text-slate-700 flex items-center gap-1.5 mb-1.5">
                      <Sparkles className="w-3 h-3 text-blue-600" />
                      Key Core Highlight:
                    </p>
                    <p className="text-[11px] text-slate-600 line-clamp-2">
                      {article.keyTakeaways[0]}
                    </p>
                  </div>

                  {/* Author & Read More */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <div>
                      <p className="font-semibold text-slate-800">{article.author}</p>
                      <p className="text-[10px] text-slate-400">{article.date}</p>
                    </div>
                    <span className="inline-flex items-center gap-1 font-bold text-blue-700 group-hover:translate-x-1 transition-transform">
                      Read Article
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="p-6 bg-slate-900 text-white flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 text-xs text-blue-300 mb-2">
                  <span className="bg-blue-600/30 px-2.5 py-0.5 rounded-full border border-blue-400/30">
                    {selectedArticle.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {selectedArticle.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {selectedArticle.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white leading-snug">
                  {selectedArticle.title}
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  By {selectedArticle.author} · {selectedArticle.authorRole}
                </p>
              </div>
              <button 
                onClick={() => setSelectedArticle(null)}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-700 leading-relaxed">
              {/* Key Takeaways Card */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <h4 className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-700" />
                  Key Takeaways for Partners
                </h4>
                <ul className="space-y-1.5 text-xs text-blue-950">
                  {selectedArticle.keyTakeaways.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-blue-700 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Full Paragraphs */}
              {selectedArticle.content.map((paragraph, idx) => (
                <p key={idx} className="text-slate-700 text-sm leading-relaxed">
                  {paragraph}
                </p>
              ))}

              {/* Tags */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2">
                {selectedArticle.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full font-medium">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Footer CTA */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs text-slate-600">
                Interested in partner opportunities related to this topic?
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto text-center px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg text-xs font-bold transition-colors"
                >
                  Contact Our Medical Team
                </Link>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="w-full sm:w-auto px-4 py-2 bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 rounded-lg text-xs font-semibold transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Newsletter & Collaboration Banner */}
      <section className="bg-white border-t border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 rounded-2xl p-8 md:p-12 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
                Partner with Incredible Medicare
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mt-2 mb-3">
                Ready to Expand Your Pharmaceutical Business?
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Connect with our franchise and third-party contract manufacturing advisors today for certified drug lists, price structures, and exclusive regional monopoly allocations.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <Link
                href="/products"
                className="px-6 py-3 bg-white text-slate-900 hover:bg-slate-100 rounded-xl font-bold text-xs text-center transition-all shadow-md"
              >
                Browse 400+ Products
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-xs text-center transition-all shadow-md"
              >
                Apply for PCD Franchise
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
