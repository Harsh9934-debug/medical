import * as React from "react";

const BLUE = "#0d9488";
const NAVY = "#0b192c";

function Tablet() {
  return (
    <svg viewBox="0 0 44 28" className="h-7 w-11" aria-hidden>
      <rect x="2" y="4" width="40" height="20" rx="10" fill="#fff" stroke={BLUE} strokeWidth="2" />
      <line x1="22" y1="6" x2="22" y2="22" stroke={BLUE} strokeWidth="1.5" />
    </svg>
  );
}
function Capsule() {
  return (
    <svg viewBox="0 0 52 24" className="h-6 w-[52px]" aria-hidden>
      <rect x="2" y="2" width="48" height="20" rx="10" fill="#fff" stroke={NAVY} strokeWidth="2" />
      <path d="M26 2h14a10 10 0 010 20H26z" fill={BLUE} />
      <rect x="2" y="2" width="48" height="20" rx="10" fill="none" stroke={NAVY} strokeWidth="2" />
    </svg>
  );
}
function Vial() {
  return (
    <svg viewBox="0 0 24 44" className="h-11 w-6" aria-hidden>
      <rect x="6" y="1" width="12" height="7" rx="2" fill={BLUE} />
      <path d="M7 8h10v4l2 3v24a3 3 0 01-3 3H8a3 3 0 01-3-3V15l2-3z" fill="#f0fdfa" stroke={NAVY} strokeWidth="2" strokeLinejoin="round" />
      <rect x="7" y="24" width="10" height="9" fill="#99f6e4" />
    </svg>
  );
}
function Bottle() {
  return (
    <svg viewBox="0 0 28 48" className="h-12 w-7" aria-hidden>
      <rect x="9" y="1" width="10" height="7" rx="1.5" fill={NAVY} />
      <path d="M10 8h8v4c4 2 6 4 6 8v22a4 4 0 01-4 4H8a4 4 0 01-4-4V20c0-4 2-6 6-8z" fill="#fff" stroke={BLUE} strokeWidth="2" strokeLinejoin="round" />
      <rect x="7" y="26" width="14" height="10" rx="1" fill="#ccfbf1" />
    </svg>
  );
}

const ITEMS = [Tablet, Vial, Capsule, Bottle, Tablet, Capsule, Vial, Bottle];

/**
 * Decorative production line: products ride a belt under a QC scanner gate.
 * Pure CSS animation, so it works as a server component.
 */
export function Conveyor({ className = "" }: { className?: string }) {
  const track = (
    <div className="flex shrink-0 items-end gap-20 pr-20">
      {ITEMS.map((Item, i) => (
        <div key={i} className="flex h-14 items-end">
          <Item />
        </div>
      ))}
    </div>
  );
  return (
    <div
      aria-hidden
      className={`relative overflow-hidden pt-9 ${className}`}
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      {/* products */}
      <div className="animate-marquee flex w-max">
        {track}
        {track}
      </div>

      {/* belt */}
      <div className="relative -mt-0.5 h-3 rounded-full bg-[#0b192c]">
        <div className="animate-belt absolute inset-x-0 top-1/2 h-1 -translate-y-1/2 opacity-70 [background-image:repeating-linear-gradient(90deg,#14b8a6_0_10px,transparent_10px_24px)]" />
      </div>

      {/* QC scanner gate */}
      <div className="pointer-events-none absolute inset-y-0 left-1/2 w-0 -translate-x-1/2">
        <div className="absolute top-6 bottom-2 -left-px w-[2px] bg-gradient-to-b from-transparent via-[#22d3ee] to-transparent shadow-[0_0_18px_6px_rgba(34,211,238,0.45)] animate-scan-pulse" />
        <div className="absolute left-0 top-0 -translate-x-1/2 whitespace-nowrap rounded-[4px] bg-[#0b192c] px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-[#22d3ee]">
          QC Scan · Pass
        </div>
      </div>
    </div>
  );
}
