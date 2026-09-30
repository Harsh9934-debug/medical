"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "motion/react";

/**
 * Scroll parallax: shifts its children vertically from +speed to -speed px as
 * the element crosses the viewport, so layers with different speeds drift
 * against each other. Positive speed lags behind the scroll, negative leads it.
 */
export function Parallax({
  speed = 40,
  className,
  children,
}: {
  speed?: number;
  className?: string;
  children: React.ReactNode;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [speed, -speed]);
  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
