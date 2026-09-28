import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  CheckCircle2,
  UserRound,
  MessageSquareText,
  Handshake,
  Boxes,
  ShieldCheck,
  FileText,
} from "lucide-react";
import {
  ARTICLES,
  getArticleBySlug,
  getArticleImage,
} from "@/data/blogs";
import { getTheme } from "@/components/blog/theme";

const PRIMARY_BTN =
  "inline-flex items-center justify-center gap-3 rounded-[4px] bg-[#0d9488] hover:bg-[#0f766e] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(13,148,136,0.35)] transition";
const OUTLINE_BTN =
  "inline-flex items-center justify-center gap-3 rounded-[4px] border border-[#0d9488] bg-white/70 hover:bg-white px-7 py-3.5 text-sm font-semibold text-[#0d9488] transition";
const GLASS =
  "rounded-[4px] border border-white bg-white/85 backdrop-blur shadow-[0_10px_40px_rgba(13,148,136,0.10)]";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Article not found | Incredible Medicare" };
  return {
    title: `${article.title} | Incredible Medicare`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const t = getTheme(article.category);
  const Icon = t.icon;
  const related = ARTICLES.filter((a) => a.slug !== article.slug)
    .sort(
      (a, b) =>
        Number(b.category === article.category) -
        Number(a.category === article.category)
    )
    .slice(0, 3);

  const [lead, ...body] = article.content;

  return (
    <div className="w-full bg-white text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f0fdfa] via-[#f0fdfa] to-[#ccfbf1] py-12 lg:py-16">
        <div className="pointer-events-none absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full bg-[#ccfbf1]/70 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-7">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0f766e] transition hover:text-[#0d9488]"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Knowledge Hub
            </Link>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold ${t.pill}`}>
                <Icon className="h-3.5 w-3.5" />
                {article.category}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-slate-500">
                <Calendar className="h-4 w-4 text-[#0d9488]" />
                {article.date}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-slate-500">
                <Clock className="h-4 w-4 text-[#0d9488]" />
                {article.readTime}
              </span>
            </div>

            <h1 className="mt-5 text-3xl font-extrabold leading-[1.12] tracking-tight text-[#0b192c] sm:text-4xl lg:text-[2.6rem]">
              {article.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600">
              {article.excerpt}
            </p>

            <div className="mt-6 flex items-center gap-3">
              <UserRound className="h-9 w-9 shrink-0 text-[#0d9488]" strokeWidth={1.4} />
              <div className="leading-tight">
                <div className="text-sm font-bold text-[#0b192c]">{article.author}</div>
                <div className="text-xs text-slate-500">{article.authorRole}</div>
              </div>
            </div>
          </div>

          <div className="relative h-[260px] overflow-hidden rounded-[4px] rounded-tr-[6rem] shadow-[0_20px_60px_rgba(13,148,136,0.25)] sm:h-[340px] lg:col-span-5">
            <Image
              src={getArticleImage(article.category)}
              alt=""
              fill
              priority
              sizes="(min-width:1024px) 40vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0d9488]/20 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f0fdfa] to-[#f0fdfa] py-14 lg:py-16">
        <div className="pointer-events-none absolute -top-24 -right-32 h-[380px] w-[380px] rounded-full bg-[#ccfbf1]/60 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <article className="lg:col-span-8">
            <div className={`${GLASS} p-7 sm:p-10`}>
              <p className="text-lg font-medium leading-relaxed text-[#0b192c]">{lead}</p>

              <div className="my-8 rounded-[4px] border border-[#99f6e4] bg-[#f0fdfa] p-6">
                <h2 className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#115e59]">
                  <CheckCircle2 className="h-5 w-5 text-[#0d9488]" />
                  Key Takeaways for Partners
                </h2>
                <ul className="space-y-2.5">
                  {article.keyTakeaways.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-[#115e59]">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0d9488]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-5 text-[15px] leading-[1.8] text-slate-600">
                {body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-2 border-t border-slate-200/70 pt-6">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[#f0fdfa] px-3 py-1 text-xs font-medium text-[#0f766e]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6 lg:col-span-4">
            <div className="rounded-[4px] bg-gradient-to-br from-[#042f2e] via-[#0b192c] to-[#115e59] p-7 text-white shadow-[0_20px_50px_rgba(11,25,44,0.35)] lg:sticky lg:top-28">
              <Handshake className="h-10 w-10 text-teal-300" strokeWidth={1.5} />
              <h3 className="mt-4 text-xl font-bold leading-snug">
                Interested in partner opportunities related to this topic?
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                Talk to our franchise and contract manufacturing advisors for certified drug lists, price structures and territory availability.
              </p>
              <div className="mt-6 space-y-3">
                <Link
                  href="/contact"
                  className="flex w-full items-center justify-center gap-3 rounded-[4px] bg-[#0d9488] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#14b8a6]"
                >
                  <MessageSquareText className="h-4 w-4" />
                  Contact Our Medical Team
                </Link>
                <Link
                  href="/products"
                  className="flex w-full items-center justify-center gap-3 rounded-[4px] border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  <Boxes className="h-4 w-4" />
                  Browse Products
                </Link>
              </div>
              <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5 text-xs text-slate-300">
                <ShieldCheck className="h-5 w-5 shrink-0 text-teal-300" />
                WHO-GMP &amp; ISO 9001:2015 certified manufacturing.
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Related */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f0fdfa] via-[#f0fdfa] to-[#f0fdfa] py-16 lg:py-20">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <div className="flex items-center justify-center gap-4">
              <span className="h-px w-10 bg-[#0d9488]" />
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#0d9488]">
                Keep Reading
              </span>
              <span className="h-px w-10 bg-[#0d9488]" />
            </div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0b192c] sm:text-4xl">
              Related <span className="text-[#0d9488]">Articles</span>
            </h2>
            <div className="accent-bar mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {related.map((a) => {
              const rt = getTheme(a.category);
              const RIcon = rt.icon;
              return (
                <Link
                  key={a.slug}
                  href={`/blogs/${a.slug}`}
                  className={`${GLASS} group flex flex-col overflow-hidden`}
                >
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={getArticleImage(a.category)}
                      alt=""
                      fill
                      sizes="(min-width:1024px) 33vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <span className={`absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold ${rt.pill}`}>
                      <RIcon className="h-3.5 w-3.5" />
                      {a.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="line-clamp-3 text-base font-bold leading-snug text-[#0b192c] transition group-hover:text-[#0d9488]">
                      {a.title}
                    </h3>
                    <div className="mt-auto flex items-center justify-between pt-5 text-xs text-slate-400">
                      <span>
                        {a.date} · {a.readTime}
                      </span>
                      <span className="inline-flex items-center gap-1.5 font-semibold text-[#0f766e]">
                        Read
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/blogs" className={OUTLINE_BTN}>
              <FileText className="h-4 w-4" />
              All Articles
            </Link>
            <Link href="/contact" className={PRIMARY_BTN}>
              Apply for PCD Franchise
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
