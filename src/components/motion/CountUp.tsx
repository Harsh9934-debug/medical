"use client";

import * as React from "react";
import { animate, useInView } from "motion/react";

const PATTERN = /^(\D*)(\d[\d,]*(?:\.\d+)?)([\s\S]*)$/;

/**
 * Counts a figure like "650+", "70 Million+" or "7.0 Crore Units / Year" up
 * from zero when it scrolls into view. Server render shows the final value so
 * nothing is lost without JS.
 */
export function CountUp({
  value,
  className,
  duration = 1.8,
}: {
  value: string;
  className?: string;
  duration?: number;
}) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const match = PATTERN.exec(value);
  const [display, setDisplay] = React.useState(value);

  React.useEffect(() => {
    if (!inView || !match) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const [, prefix, num, suffix] = match;
    const target = parseFloat(num.replace(/,/g, ""));
    const decimals = num.includes(".") ? num.split(".")[1].length : 0;
    const controls = animate(0, target, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) =>
        setDisplay(`${prefix}${v.toFixed(decimals)}${suffix}`),
      onComplete: () => setDisplay(value),
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
