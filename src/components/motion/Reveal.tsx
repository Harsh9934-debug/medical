"use client";

import * as React from "react";
import { motion, type Variants } from "motion/react";
import { cn } from "@/lib/utils";

type Direction = "up" | "down" | "left" | "right" | "none";

const OFFSET = 28;

function offsetFor(direction: Direction) {
  switch (direction) {
    case "up":
      return { y: OFFSET };
    case "down":
      return { y: -OFFSET };
    case "left":
      return { x: OFFSET };
    case "right":
      return { x: -OFFSET };
    default:
      return {};
  }
}

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: Direction;
  delay?: number;
  duration?: number;
  /** Also fade in from a slight blur / scale for hero-like elements */
  scale?: boolean;
  as?: "div" | "section" | "span" | "li" | "p" | "h1" | "h2" | "h3";
}

/** Fade + slide into place the first time the element scrolls into view. */
export function Reveal({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 0.7,
  scale = false,
  as = "div",
}: RevealProps) {
  const Comp = motion[as] as typeof motion.div;
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, ...offsetFor(direction), ...(scale ? { scale: 0.94 } : {}) }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Comp>
  );
}

const staggerParent = (gap: number, delayChildren: number): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: gap, delayChildren } },
});

const staggerChild: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

/** Container that staggers its <StaggerItem> children in on scroll. */
export function Stagger({
  children,
  className,
  gap = 0.09,
  delay = 0,
  immediate = false,
}: {
  children: React.ReactNode;
  className?: string;
  gap?: number;
  delay?: number;
  /** Animate on mount instead of waiting for scroll (hero content). */
  immediate?: boolean;
}) {
  const viewProps = immediate
    ? { animate: "show" }
    : { whileInView: "show", viewport: { once: true, margin: "-60px" } };
  return (
    <motion.div
      className={className}
      variants={staggerParent(gap, delay)}
      initial="hidden"
      {...viewProps}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "li" | "p" | "h1" | "h2" | "span";
}) {
  const Comp = motion[as] as typeof motion.div;
  return (
    <Comp className={cn(className)} variants={staggerChild}>
      {children}
    </Comp>
  );
}
