"use client";

import * as React from "react";
import { motion, useInView, type Variants } from "motion/react";
import { cn } from "@/lib/utils";

type MotionTag = "div" | "h1" | "h2" | "h3" | "p" | "span" | "section" | "article";

interface TimelineContentProps {
  as?: MotionTag;
  animationNum: number;
  timelineRef: React.RefObject<HTMLElement | null>;
  customVariants?: Variants;
  className?: string;
  once?: boolean;
  children?: React.ReactNode;
}

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

export function TimelineContent({
  as = "div",
  animationNum,
  timelineRef,
  customVariants = defaultVariants,
  className,
  once = true,
  children,
}: TimelineContentProps) {
  const inView = useInView(timelineRef, { once, margin: "-80px 0px" });
  const MotionComponent = motion[as] as typeof motion.div;

  return (
    <MotionComponent
      custom={animationNum}
      variants={customVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={cn(className)}
    >
      {children}
    </MotionComponent>
  );
}
