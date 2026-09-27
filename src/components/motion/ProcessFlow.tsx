"use client";

import * as React from "react";
import {
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from "motion/react";
import {
  Boxes,
  FlaskConical,
  Tablets,
  PillBottle,
  Microscope,
  Truck,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export type Step = { icon: LucideIcon; title: string; desc: string };

const HOME_STEPS: Step[] = [
  {
    icon: Boxes,
    title: "Raw Material Sourcing",
    desc: "Vendor-qualified APIs and excipients quarantined and sampled on arrival.",
  },
  {
    icon: FlaskConical,
    title: "Formulation & Blending",
    desc: "Dispensing, granulation and blending in controlled cleanroom suites.",
  },
  {
    icon: Tablets,
    title: "Compression & Encapsulation",
    desc: "High-speed rotary presses and capsule fillers with in-process checks.",
  },
  {
    icon: PillBottle,
    title: "Coating, Filling & Sealing",
    desc: "Film coating, liquid filling and induction sealing under HEPA air.",
  },
  {
    icon: Microscope,
    title: "QC & Stability Testing",
    desc: "HPLC, dissolution and microbial release testing before every batch ships.",
  },
  {
    icon: Truck,
    title: "Packing & Dispatch",
    desc: "Serialised packing, batch traceability and pan-India dispatch in 24-48h.",
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

const COLS: Record<number, string> = {
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
  5: "lg:grid-cols-5",
  6: "lg:grid-cols-6",
};

/** Six-stage manufacturing journey used on the home page. */
export function ProcessFlow() {
  return <StepFlow steps={HOME_STEPS} />;
}

/** Numbered steps joined by a line that draws itself in, with a travelling dot. */
export function StepFlow({
  steps = HOME_STEPS,
  eyebrow = "Batch-to-Shelf Process",
  icon: EyebrowIcon = Workflow,
  title = "How Every Batch Is",
  highlight = "Made & Released",
  intro = "Six controlled stages, each with documented checks, so what leaves our WHO-GMP plant matches the label every time.",
  tone = "from-[#eef4fc] via-[#f6f9fe] to-white",
}: {
  steps?: Step[];
  eyebrow?: string;
  icon?: LucideIcon;
  title?: string;
  highlight?: string;
  intro?: string;
  tone?: string;
}) {
  const STEPS = steps;
  const edge = `calc((100% - ${(STEPS.length - 1) * 1.25}rem) / ${STEPS.length * 2})`;
  const [active, setActive] = React.useState(0);

  // One clock drives both the travelling dot and the highlighted step, so the
  // number lights up exactly as the dot reaches it.
  const progress = useMotionValue(0);
  const dotLeft = useTransform(progress, (v) => `${v * 100}%`);
  useMotionValueEvent(progress, "change", (v) =>
    setActive(Math.round(v * (STEPS.length - 1))),
  );
  React.useEffect(() => {
    const controls = animate(progress, [0, 1], {
      duration: 9,
      ease: "linear",
      repeat: Infinity,
      repeatDelay: 1,
    });
    return () => controls.stop();
  }, [progress]);

  return (
    <section
      data-no-reveal
      className={`relative overflow-hidden border-b border-slate-200 bg-gradient-to-b ${tone} py-16 lg:py-20`}
    >
      <div className="pointer-events-none absolute -left-32 top-10 h-[380px] w-[380px] rounded-full bg-[#dbe8fb]/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[380px] w-[380px] rounded-full bg-[#cfe0f7]/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto mb-14 max-w-4xl text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <span className="inline-flex items-center gap-2.5 rounded-full border border-[#e3ecfa] bg-white px-5 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#0b5bd3] shadow-[0_4px_16px_rgba(30,80,160,0.10)] sm:text-xs">
            <EyebrowIcon className="h-4 w-4" strokeWidth={2} />
            {eyebrow}
          </span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-[#0a1f44] sm:text-4xl lg:text-5xl">
            {title} <span className="text-[#0b5bd3]">{highlight}</span>
          </h2>
          <div className="accent-bar mx-auto mt-4" />
          <p className="mt-5 text-sm leading-relaxed text-slate-600 sm:text-base">
            {intro}
          </p>
        </motion.div>

        <div className={`relative grid gap-8 lg:gap-5 ${COLS[STEPS.length] ?? "lg:grid-cols-6"}`}>
          {/* Desktop connector */}
          <div className="pointer-events-none absolute top-[22px] hidden h-[2px] rounded-full bg-[#dbe6f6] lg:block" style={{ left: edge, right: edge }}>
            <motion.div
              className="h-full origin-left rounded-full bg-gradient-to-r from-[#0b4a99] to-[#3b8ff0]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
            />
            {/* Travelling batch */}
            <motion.span
              className="absolute -top-[5px] h-3 w-3 -translate-x-1/2 rounded-full bg-[#22d3ee] shadow-[0_0_14px_3px_rgba(34,211,238,0.7)]"
              style={{ left: dotLeft }}
            />
          </div>
          {/* Mobile connector */}
          <div className="pointer-events-none absolute bottom-6 left-[21px] top-6 w-[2px] rounded-full bg-[#dbe6f6] lg:hidden">
            <motion.div
              className="h-full origin-top rounded-full bg-gradient-to-b from-[#0b4a99] to-[#3b8ff0]"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
            />
          </div>

          {STEPS.map((s, i) => {
            const Icon = s.icon;
            const isActive = active === i;
            return (
              <motion.div
                key={s.title}
                className="relative flex gap-4 lg:flex-col lg:items-center lg:text-center"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.18, ease: EASE }}
              >
                <div className="relative flex h-11 w-11 shrink-0 items-center justify-center">
                  {isActive && (
                    <span className="absolute inset-0 animate-ping rounded-full bg-[#0b5bd3]/30" />
                  )}
                  <span
                    className={`relative flex h-11 w-11 items-center justify-center rounded-full border-2 text-xs font-extrabold transition-colors duration-500 ${
                      isActive
                        ? "border-[#0b4a99] bg-[#0b4a99] text-white"
                        : "border-[#b9d0f2] bg-white text-[#0b4a99]"
                    }`}
                  >
                    0{i + 1}
                  </span>
                </div>

                <div className="min-w-0 flex-1 rounded-[4px] border border-white bg-white/85 p-5 shadow-[0_10px_36px_rgba(30,80,160,0.10)] backdrop-blur lg:w-full lg:flex-1">
                  <Icon
                    className={`h-8 w-8 text-[#0b5bd3] transition-transform duration-500 lg:mx-auto ${
                      isActive ? "scale-110" : ""
                    }`}
                    strokeWidth={1.5}
                  />
                  <h3 className="mt-3 text-[15px] font-bold leading-snug text-[#0a1f44]">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-slate-600">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
