"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  BookOpen,
  Calendar,
  Clock,
  ArrowRight,
  Search,
  Handshake,
  MessageSquareText,
  Boxes,
  ShieldCheck,
  FileText,
  Sparkles,
} from "lucide-react";
import { ARTICLES, CATEGORIES, getArticleImage, type Article } from "@/data/blogs";
import { getTheme } from "@/components/blog/theme";

const PRIMARY_BTN =
  "inline-flex items-center justify-center gap-3 rounded-[4px] bg-[#0b5bd3] hover:bg-[#0a4db3] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(11,91,211,0.35)] transition cursor-pointer";
const OUTLINE_BTN =
  "inline-flex items-center justify-center gap-3 rounded-[4px] border border-[#0b5bd3] bg-white/70 hover:bg-white px-7 py-3.5 text-sm font-semibold text-[#0b5bd3] transition cursor-pointer";
const GLASS =
  "rounded-[4px] border border-white bg-white/85 backdrop-blur shadow-[0_10px_40px_rgba(30,80,160,0.10)]";

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

function ArticleCard({ article }: { article: Article }) {
  const t = getTheme(article.category);
  const Icon = t.icon;
  return (
    <Link
      href={`/blogs/${article.slug}`}
      className={`${GLASS} group flex flex-col overflow-hidden`}
    >
      <div className="relative h-44 overflow-hidden">
        <Image
          src={getArticleImage(article.category)}
          alt=""
          fill
          sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f44]/40 via-transparent to-transparent" />
        <span className={`absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold ${t.pill}`}>
          <Icon className="h-3.5 w-3.5" />
          {article.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center gap-4 text-xs text-slate-400">
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5 text-[#0b5bd3]" />
            {article.date}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-[#0b5bd3]" />
            {article.readTime}
          </span>
        </div>
        <h3 className="line-clamp-3 text-lg font-bold leading-snug text-[#0a1f44] transition group-hover:text-[#0b5bd3]">
          {article.title}
        </h3>
        <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-slate-500">
          {article.excerpt}
        </p>
        <div className="mt-5 flex items-center justify-between border-t border-slate-200/70 pt-4 text-xs">
          <span className="font-semibold text-[#0a1f44]">{article.author}</span>
          <span className="inline-flex items-center gap-1.5 font-semibold text-[#0b4a99] group-hover:text-[#0b5bd3]">
            Read Article
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function BlogsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const q = searchQuery.trim().toLowerCase();
  const isFiltering = activeCategory !== "All" || q !== "";

  const filtered = ARTICLES.filter((a) => {
    const matchesCategory = activeCategory === "All" || a.category === activeCategory;
    const matchesSearch =
      q === "" ||
      a.title.toLowerCase().includes(q) ||
      a.excerpt.toLowerCase().includes(q) ||
      a.tags.some((t) => t.toLowerCase().includes(q));
    return matchesCategory && matchesSearch;
  });

  const featured = ARTICLES[0];
  const latest = ARTICLES.slice(1, 4);
  const rest = isFiltering ? filtered : ARTICLES.slice(1);
  const FeatTheme = getTheme(featured.category);
  const FeatIcon = FeatTheme.icon;

  return (
    <div className="w-full bg-white text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f7faff] via-[#eef4fc] to-[#e3edfb] py-14 lg:py-20">
        <div className="pointer-events-none absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full bg-[#dbe8fb]/70 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-[420px] w-[420px] rounded-full bg-[#cfe0f7]/70 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <Eyebrow center>Incredible Medicare Knowledge Hub</Eyebrow>
          <h1 className="mt-4 text-4xl font-extrabold leading-[1.08] tracking-tight text-[#0a1f44] sm:text-5xl lg:text-6xl">
            Pharmaceutical Insights,{" "}
            <span className="block text-[#0b5bd3]">Trends &amp; Franchise Guides</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600">
            In-depth analyses, regulatory guidelines, manufacturing standards, and commercial strategies curated by our formulation scientists and pharmaceutical business executives.
          </p>

          <div className={`${GLASS} mx-auto mt-8 flex max-w-2xl items-center gap-3 p-2 pl-4`}>
            <Search className="h-5 w-5 shrink-0 text-[#0b5bd3]" />
            <input
              type="text"
              placeholder="Search articles, topics or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search articles"
              className="min-w-0 flex-1 bg-transparent py-2 text-sm text-slate-800 outline-none placeholder:text-slate-400"
            />
            <a
              href="#articles"
              className="hidden shrink-0 rounded-[4px] bg-[#0b5bd3] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0a4db3] sm:block"
            >
              Search
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap rounded-[4px] border px-4 py-2 text-[13px] font-medium transition cursor-pointer ${
                  activeCategory === cat
                    ? "border-[#0b5bd3] bg-[#0b5bd3] text-white shadow-[0_6px_18px_rgba(11,91,211,0.3)]"
                    : "border-[#dbe5f5] bg-white/80 text-[#0a1f44] hover:border-[#0b5bd3]/40 hover:bg-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured + Latest (default view only) */}
      {!isFiltering && (
        <section className="relative overflow-hidden bg-gradient-to-b from-[#eef4fc] to-[#f7faff] py-14 lg:py-16">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
              {/* Featured */}
              <Link
                href={`/blogs/${featured.slug}`}
                className="group relative flex min-h-[420px] flex-col justify-end overflow-hidden rounded-[4px] shadow-[0_16px_50px_rgba(30,80,160,0.22)] lg:col-span-7"
              >
                <Image
                  src="/blog-microscopes.jpg"
                  alt=""
                  fill
                  priority
                  sizes="(min-width:1024px) 58vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#04142f] via-[#04142f]/60 to-transparent" />
                <div className="relative p-7 text-white sm:p-9">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-[#0b5bd3] px-3 py-1.5 text-xs font-semibold">Featured</span>
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold backdrop-blur">
                      <FeatIcon className="h-3.5 w-3.5" />
                      {featured.category}
                    </span>
                  </div>
                  <h2 className="mt-4 text-2xl font-extrabold leading-snug tracking-tight sm:text-3xl">
                    {featured.title}
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-200 sm:text-base">
                    {featured.excerpt}
                  </p>
                  <div className="mt-5 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-200">
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="h-4 w-4 text-sky-300" />
                        {featured.date}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="h-4 w-4 text-sky-300" />
                        {featured.readTime}
                      </span>
                      <span className="font-semibold text-white">{featured.author}</span>
                    </div>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-white">
                      Read Article
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>

              {/* Latest list */}
              <div className={`${GLASS} p-6 lg:col-span-5`}>
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-lg font-extrabold text-[#0a1f44]">Latest Articles</h2>
                  <Sparkles className="h-5 w-5 text-[#0b5bd3]" />
                </div>
                <div className="divide-y divide-slate-200/70">
                  {latest.map((a, i) => {
                    const t = getTheme(a.category);
                    return (
                      <Link
                        key={a.slug}
                        href={`/blogs/${a.slug}`}
                        className="group flex items-center gap-4 py-4 first:pt-0 last:pb-0"
                      >
                        <span className="relative h-20 w-20 shrink-0 overflow-hidden rounded-[4px]">
                          <Image src={getArticleImage(a.category)} alt="" fill sizes="80px" className="object-cover" />
                        </span>
                        <div className="min-w-0 flex-1">
                          <span className={`inline-block rounded-full px-2.5 py-1 text-[11px] font-semibold ${t.pill}`}>
                            {a.category}
                          </span>
                          <h3 className="mt-1.5 line-clamp-2 text-sm font-bold leading-snug text-[#0a1f44] transition group-hover:text-[#0b5bd3]">
                            {a.title}
                          </h3>
                          <p className="mt-1 text-xs text-slate-400">
                            {String(i + 1).padStart(2, "0")} · {a.date} · {a.readTime}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* All Articles */}
      <section
        id="articles"
        className="relative overflow-hidden bg-gradient-to-b from-[#f7faff] via-[#f1f6fd] to-[#eaf1fb] py-16 lg:py-20 scroll-mt-24"
      >
        <div className="pointer-events-none absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-[#dbe8fb]/60 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <Eyebrow center>{isFiltering ? "Search Results" : "More to Read"}</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0a1f44] sm:text-4xl lg:text-5xl">
              {isFiltering ? (
                <>
                  {filtered.length} {filtered.length === 1 ? "Article" : "Articles"}{" "}
                  <span className="text-[#0b5bd3]">Found</span>
                </>
              ) : (
                <>
                  Latest Insights &amp;{" "}
                  <span className="text-[#0b5bd3]">Market Updates</span>
                </>
              )}
            </h2>
            <div className="accent-bar mx-auto mt-4"></div>
          </div>

          {rest.length === 0 ? (
            <div className={`${GLASS} py-16 text-center`}>
              <BookOpen className="mx-auto mb-3 h-12 w-12 text-[#0b5bd3]/40" strokeWidth={1.4} />
              <h3 className="mb-1 text-lg font-bold text-[#0a1f44]">No articles found</h3>
              <p className="mb-5 text-sm text-slate-500">
                Try adjusting your search criteria or selecting a different category.
              </p>
              <button
                type="button"
                onClick={() => {
                  setActiveCategory("All");
                  setSearchQuery("");
                }}
                className={PRIMARY_BTN}
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#eaf1fb] via-[#f1f6fd] to-[#f7faff] py-16 lg:py-20">
        <div className="pointer-events-none absolute -left-32 top-4 hidden h-[420px] w-[420px] overflow-hidden rounded-full border-[14px] border-[#cfe0f7]/70 lg:block xl:-left-20">
          <Image src="/blog-notes.jpg" alt="" fill sizes="420px" className="object-cover" />
        </div>
        <div className="pointer-events-none absolute -right-32 top-10 hidden h-[420px] w-[420px] overflow-hidden rounded-full border-[14px] border-[#cfe0f7]/70 lg:block xl:-right-20">
          <Image src="/blog-lab.jpg" alt="" fill sizes="420px" className="object-cover" />
        </div>
        <div className="relative mx-auto max-w-3xl px-4 text-center">
          <Eyebrow center>Partner with Incredible Medicare</Eyebrow>
          <h2 className="mt-4 text-3xl font-extrabold leading-[1.1] tracking-tight text-[#0a1f44] sm:text-4xl lg:text-5xl">
            Ready to Expand Your{" "}
            <span className="block text-[#0b5bd3]">Pharmaceutical Business?</span>
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-slate-600 sm:text-base">
            Connect with our franchise and third-party contract manufacturing advisors today for certified drug lists, price structures, and exclusive regional monopoly allocations.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            <Link href="/products" className={PRIMARY_BTN}>
              <Boxes className="h-5 w-5" />
              Browse 650+ Products
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/contact" className={OUTLINE_BTN}>
              <MessageSquareText className="h-5 w-5" />
              Apply for PCD Franchise
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="relative mx-auto mt-12 max-w-5xl px-4">
          <div className="grid grid-cols-2 gap-y-6 lg:grid-cols-4 lg:gap-y-0">
            {[
              { icon: Boxes, a: "650+", b: "Approved Products", blue: true },
              { icon: Handshake, a: "Monopoly", b: "Franchise Rights" },
              { icon: FileText, a: "Price Lists", b: "& Certified Drug Lists", blue: true },
              { icon: ShieldCheck, a: "WHO-GMP", b: "& ISO 9001:2015" },
            ].map((f, i) => (
              <div
                key={f.a}
                className={`flex items-center justify-center gap-3 px-3 ${i > 0 ? "lg:border-l lg:border-[#cfe0f7]" : ""}`}
              >
                <f.icon className="h-9 w-9 shrink-0 text-[#0b5bd3]" strokeWidth={1.4} />
                <div className="leading-tight">
                  <div className={`text-base font-bold ${f.blue ? "text-[#0b5bd3]" : "text-[#0a1f44]"}`}>{f.a}</div>
                  <div className="mt-0.5 text-xs text-slate-500">{f.b}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
