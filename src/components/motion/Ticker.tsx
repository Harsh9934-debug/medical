import { ShieldCheck } from "lucide-react";

const ITEMS = [
  "WHO-GMP Certified Plant",
  "ISO 9001:2015",
  "650+ DCGI Approved Formulations",
  "GLP Compliant Labs",
  "120M+ Units / Year",
  "28+ States Served",
  "cGMP Verified",
  "Pan-India Dispatch in 24-48h",
];

/** Slim navy strip of credentials scrolling continuously. */
export function Ticker() {
  const row = (
    <div className="flex shrink-0 items-center gap-10 pr-10">
      {ITEMS.map((t) => (
        <span
          key={t}
          className="flex items-center gap-2.5 whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-200 sm:text-xs"
        >
          <ShieldCheck className="h-4 w-4 text-teal-400" strokeWidth={1.8} />
          {t}
        </span>
      ))}
    </div>
  );
  return (
    <div
      data-no-reveal
      className="group relative overflow-hidden bg-[#0b192c] py-3.5"
      aria-label="Credentials"
    >
      <div className="animate-marquee flex w-max group-hover:[animation-play-state:paused]">
        {row}
        {row}
      </div>
    </div>
  );
}
