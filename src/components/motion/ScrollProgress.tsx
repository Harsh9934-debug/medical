"use client";

import { motion, useScroll, useSpring } from "motion/react";

/** Thin blue bar at the very top that fills as the page is scrolled. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    restDelta: 0.001,
  });
  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-[#0b4a99] via-[#3b8ff0] to-[#22d3ee]"
    />
  );
}
