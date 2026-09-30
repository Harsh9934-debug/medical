"use client";

import { useEffect, useRef } from "react";

/**
 * Muted looping background clip that only plays while on screen.
 * Parent must be `relative`; pass `className` to tune opacity / z-index.
 */
export function AmbientVideo({
  src,
  poster,
  className = "",
}: {
  src: string;
  poster?: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.play().catch(() => {});
        else el.pause();
      },
      { threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      muted
      loop
      playsInline
      preload="metadata"
      poster={poster}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full select-none object-cover ${className}`}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
