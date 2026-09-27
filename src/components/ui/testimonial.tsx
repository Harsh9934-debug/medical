"use client";

import { CountUp } from "@/components/motion/CountUp";
import { useRef } from "react";
import { Star } from "lucide-react";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { COMPANY_INFO, TESTIMONIALS } from "@/data/company";

const revealVariants = {
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.4,
      duration: 0.5,
    },
  }),
  hidden: {
    filter: "blur(10px)",
    y: -20,
    opacity: 0,
  },
};

const GRID_BG =
  "absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#ffffff59_1px,transparent_1px),linear-gradient(to_bottom,#ffffff59_1px,transparent_1px)] bg-[size:50px_56px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]";

const initials = (name: string) =>
  name
    .replace(/^Dr\.?\s+/i, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

interface Testimonial {
  name: string;
  designation: string;
  location: string;
  content: string;
  rating: number;
}

function TestimonialBody({ t, big }: { t: Testimonial; big?: boolean }) {
  return (
    <article className="mt-auto">
      <div className="flex gap-0.5 text-amber-400 mb-3">
        {[...Array(t.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-current" />
        ))}
      </div>
      <p className={big ? "text-[15px] leading-relaxed" : "text-sm leading-relaxed"}>
        &ldquo;{t.content}&rdquo;
      </p>
      <div className="flex justify-between items-end gap-3 pt-5">
        <div className="min-w-0">
          <h2 className="font-semibold lg:text-lg text-base">{t.name}</h2>
          <p className="text-sm text-white/80">{t.designation}</p>
          <p className="text-xs text-white/60">{t.location}</p>
        </div>
        <div className="lg:w-16 lg:h-16 w-12 h-12 shrink-0 rounded-[4px] bg-white/15 border border-white/20 flex items-center justify-center text-lg font-bold">
          {initials(t.name)}
        </div>
      </div>
    </article>
  );
}

function StatBody({ value, label }: { value: string; label: string }) {
  return (
    <article className="mt-auto">
      <div className="text-4xl lg:text-5xl font-extrabold tracking-tight"><CountUp value={value} /></div>
      <p className="text-sm text-white/80 mt-2">{label}</p>
    </article>
  );
}

const CARD = "flex flex-col justify-between relative overflow-hidden rounded-[4px] border border-gray-200 p-5 text-white";

export default function ClientFeedback() {
  const testimonialRef = useRef<HTMLDivElement>(null);
  const [t1, t2, t3] = TESTIMONIALS;
  const { stats } = COMPANY_INFO;

  return (
    <main className="w-full">
      <section
        className="relative h-full max-w-7xl mx-auto rounded-[4px] py-14"
        ref={testimonialRef}
      >
        <article className="max-w-screen-md mx-auto text-center space-y-2 px-4">
          <TimelineContent
            as="span"
            className="block text-[#0b5bd3] text-xs font-bold uppercase tracking-[0.22em]"
            animationNum={0}
            customVariants={revealVariants}
            timelineRef={testimonialRef}
          >
            Client Relationships
          </TimelineContent>
          <TimelineContent
            as="h2"
            className="xl:text-4xl text-3xl font-extrabold text-[#0a1f44] tracking-tight"
            animationNum={0}
            customVariants={revealVariants}
            timelineRef={testimonialRef}
          >
            Trusted by Doctors &amp; Distributors Nationwide
          </TimelineContent>
          <TimelineContent
            as="p"
            className="mx-auto text-slate-500"
            animationNum={1}
            customVariants={revealVariants}
            timelineRef={testimonialRef}
          >
            Delivering verifiable quality, ethical supply assurance, and
            long-term collaborative value across the healthcare ecosystem.
          </TimelineContent>
        </article>

        <div className="lg:grid lg:grid-cols-3 gap-2 flex flex-col w-full lg:py-10 pt-10 pb-4 lg:px-10 px-4">
          {/* Column 1 */}
          <div className="md:flex lg:flex-col lg:space-y-2 h-full lg:gap-0 gap-2">
            <TimelineContent
              animationNum={0}
              customVariants={revealVariants}
              timelineRef={testimonialRef}
              className={`${CARD} lg:flex-[7] flex-[6] bg-[#0a1f44]`}
            >
              <div className={GRID_BG}></div>
              <TestimonialBody t={t1} big />
            </TimelineContent>
            <TimelineContent
              animationNum={1}
              customVariants={revealVariants}
              timelineRef={testimonialRef}
              className={`${CARD} lg:flex-[3] flex-[4] lg:h-fit lg:shrink-0 bg-[#0b5bd3]`}
            >
              <StatBody value={stats.approvedFormulations} label="DCGI approved formulations" />
            </TimelineContent>
          </div>

          {/* Column 2 */}
          <div className="lg:h-full md:flex lg:flex-col h-fit lg:space-y-2 lg:gap-0 gap-2">
            <TimelineContent
              animationNum={2}
              customVariants={revealVariants}
              timelineRef={testimonialRef}
              className={`${CARD} bg-[#0f2c59]`}
            >
              <TestimonialBody t={t2} />
            </TimelineContent>
            <TimelineContent
              animationNum={3}
              customVariants={revealVariants}
              timelineRef={testimonialRef}
              className={`${CARD} bg-[#0f2c59]`}
            >
              <StatBody value={stats.distributionPartners} label="Distribution & franchise partners" />
            </TimelineContent>
            <TimelineContent
              animationNum={4}
              customVariants={revealVariants}
              timelineRef={testimonialRef}
              className={`${CARD} bg-[#0f2c59]`}
            >
              <StatBody value={stats.statesCovered} label="States & UTs served across India" />
            </TimelineContent>
          </div>

          {/* Column 3 */}
          <div className="h-full md:flex lg:flex-col lg:space-y-2 lg:gap-0 gap-2">
            <TimelineContent
              animationNum={5}
              customVariants={revealVariants}
              timelineRef={testimonialRef}
              className={`${CARD} lg:flex-[3] flex-[4] bg-[#0b5bd3]`}
            >
              <StatBody value="WHO-GMP" label="& ISO 9001:2015 certified manufacturing" />
            </TimelineContent>
            <TimelineContent
              animationNum={6}
              customVariants={revealVariants}
              timelineRef={testimonialRef}
              className={`${CARD} lg:flex-[7] flex-[6] bg-[#0a1f44]`}
            >
              <div className={GRID_BG}></div>
              <TestimonialBody t={t3} big />
            </TimelineContent>
          </div>
        </div>

        <div className="absolute border-b-2 border-[#e6e6e6] bottom-4 h-16 z-[2] md:w-full w-[90%] md:left-0 left-[5%] pointer-events-none">
          <div className="max-w-7xl mx-auto w-full h-full relative before:absolute before:-left-2 before:-bottom-2 before:w-4 before:h-4 before:bg-white before:shadow-sm before:border before:border-gray-300 after:absolute after:-right-2 after:-bottom-2 after:w-4 after:h-4 after:bg-white after:shadow-sm after:border after:border-gray-300"></div>
        </div>
      </section>
    </main>
  );
}
