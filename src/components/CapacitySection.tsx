"use client";

import React, { useState } from "react";
import { animate, motion, useInView } from "motion/react";
import { Pill, Tablets } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

function TubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M30 6l12 12-6 6-12-12z" />
      <path d="M26 14l8 8" />
      <path d="M24 22L12 34c-3 3-8 4-8 4s1-5 4-8l12-12" />
      <path d="M8 40c2 1 5 1 8-1" />
    </svg>
  );
}

function SachetIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M6 8h36v32H6z" />
      <path d="M6 12h36M6 36h36" strokeDasharray="2 3" />
      <circle cx="24" cy="24" r="7" />
      <path d="M21 24a3 3 0 0 0 4 3" />
    </svg>
  );
}

const CAPACITY = [
  { label: "Tablets", value: 21600000, icon: Tablets },
  { label: "Capsules", value: 3850000, icon: Pill },
  { label: "Ointment – Tubes", value: 96000, icon: TubeIcon },
  { label: "Sachets", value: 43500, icon: SachetIcon },
];

/** Counts up to `value` on scroll, formatted in the Indian digit grouping (2,16,00,000). */
function IndianCount({ value }: { value: number }) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [n, setN] = useState(value);

  React.useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const controls = animate(0, value, {
      duration: 2.2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setN(Math.round(v)),
      onComplete: () => setN(value),
    });
    return () => controls.stop();
  }, [inView, value]);

  return <span ref={ref}>{n.toLocaleString("en-IN")}</span>;
}

/** "Our Per Day Capacity" — animated dosage-form output cards. */
export function CapacitySection() {
  return (
    <section className="relative overflow-hidden bg-[#0b192c] py-16 lg:py-24">
      <div className="pointer-events-none absolute -top-32 left-1/4 h-[420px] w-[420px] rounded-full bg-[#0d9488]/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 right-1/4 h-[380px] w-[380px] rounded-full bg-[#14b8a6]/15 blur-3xl" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-teal-400/50" />
            <span className="text-teal-400 text-xs font-bold uppercase tracking-[0.14em]">Production Scale</span>
            <span className="h-px w-10 bg-teal-400/50" />
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Our Per Day <span className="text-teal-400">Capacity</span>
          </h2>
          <div className="accent-bar mx-auto mt-4"></div>
          <p className="mt-5 text-slate-300 text-sm sm:text-base leading-relaxed">
            Our modern manufacturing infrastructure is equipped to support large-scale production across multiple pharmaceutical dosage forms.
          </p>
        </Reveal>

        <Stagger className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
          {CAPACITY.map((c, i) => (
            <StaggerItem key={c.label}>
              <div className="group relative h-full overflow-hidden rounded-[4px] border border-white/10 bg-white/[0.04] p-6 sm:p-8 backdrop-blur transition duration-300 hover:-translate-y-1.5 hover:border-teal-400/50 hover:bg-white/[0.07] hover:shadow-[0_18px_50px_rgba(13,148,136,0.25)]">
                <span className="pointer-events-none absolute right-5 top-3 text-6xl font-extrabold text-white/[0.04]">
                  0{i + 1}
                </span>
                <div className="flex items-center gap-5 sm:gap-6">
                  <motion.div
                    animate={{ y: [0, -7, 0], rotate: [0, 4, 0] }}
                    transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
                    className="relative flex h-20 w-20 sm:h-24 sm:w-24 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#14b8a6] to-[#0f766e] text-white shadow-[0_10px_30px_rgba(13,148,136,0.45)]"
                  >
                    <span className="absolute inset-0 rounded-full border border-teal-300/40 animate-ping [animation-duration:3s]" />
                    <c.icon className="h-10 w-10 sm:h-12 sm:w-12" />
                  </motion.div>
                  <div className="min-w-0">
                    <div className="text-sm sm:text-base font-semibold uppercase tracking-wider text-teal-300">
                      {c.label}
                    </div>
                    <div className="mt-1 text-3xl sm:text-4xl xl:text-5xl font-extrabold tabular-nums text-white">
                      <IndianCount value={c.value} />
                    </div>
                    <div className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                      Units / Day
                    </div>
                  </div>
                </div>
                <div className="mt-6 h-1 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-teal-400 to-teal-200"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, delay: 0.2 + i * 0.12, ease: "easeOut" }}
                  />
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
