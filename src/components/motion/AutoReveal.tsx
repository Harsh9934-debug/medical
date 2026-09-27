"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Site-wide scroll reveals. After each route render this tags headings and
 * grid cards below the fold with `.rv`, then lifts them into place as they
 * enter the viewport (siblings in a grid are staggered). The classes are
 * removed once the transition ends so component hover styles keep working.
 * Elements already on screen are left alone, so there is no flash.
 */
export default function AutoReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const vh = window.innerHeight;
    const picked = new Set<HTMLElement>();
    const delays = new Map<HTMLElement, number>();

    const sections = document.querySelectorAll<HTMLElement>(
      "main section:not([data-no-reveal])",
    );
    sections.forEach((section) => {
      const heads = section.querySelectorAll<HTMLElement>(
        "h2, h2 + p, h2 + div.accent-bar",
      );
      heads.forEach((el, i) => {
        picked.add(el);
        delays.set(el, Math.min(i, 3) * 0.08);
      });
      section
        .querySelectorAll<HTMLElement>(".grid")
        .forEach((grid) => {
          if (grid.closest("[data-no-reveal]")) return;
          Array.from(grid.children).forEach((child, i) => {
            if (!(child instanceof HTMLElement)) return;
            if (getComputedStyle(child).position === "absolute") return;
            picked.add(child);
            delays.set(child, Math.min(i, 8) * 0.07);
          });
        });
    });

    // Containers much taller than the screen can never hit the visibility
    // threshold; let their children animate individually instead.
    picked.forEach((el) => {
      if (el.getBoundingClientRect().height > vh * 1.1) picked.delete(el);
    });

    // Drop anything nested inside another animated element.
    const targets = Array.from(picked).filter((el) => {
      let p = el.parentElement;
      while (p) {
        if (picked.has(p)) return false;
        p = p.parentElement;
      }
      return el.getBoundingClientRect().top > vh * 0.92;
    });

    const timers: number[] = [];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          io.unobserve(el);
          el.classList.add("rv-in");
          const total = ((delays.get(el) ?? 0) + 0.8) * 1000;
          timers.push(
            window.setTimeout(() => {
              el.classList.remove("rv", "rv-in");
              el.style.removeProperty("--rv-delay");
            }, total),
          );
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    targets.forEach((el) => {
      el.style.setProperty("--rv-delay", `${delays.get(el) ?? 0}s`);
      el.classList.add("rv");
      io.observe(el);
    });

    return () => {
      io.disconnect();
      timers.forEach((t) => window.clearTimeout(t));
      targets.forEach((el) => {
        el.classList.remove("rv", "rv-in");
        el.style.removeProperty("--rv-delay");
      });
    };
  }, [pathname]);

  return null;
}
