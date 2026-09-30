"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Full-bleed background that plays a list of clips one after another,
 * cross-fading between them and looping the whole list.
 * Parent must be `relative` with a set height.
 */
export function HeroVideo({ sources, poster }: { sources: string[]; poster?: string }) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    refs.current.forEach((v, i) => {
      if (!v) return;
      if (i === active) {
        v.currentTime = 0;
        v.play().catch(() => {});
      } else {
        v.pause();
      }
    });
  }, [active]);

  const next = () => setActive((i) => (i + 1) % sources.length);

  return (
    <div className="pointer-events-none absolute inset-0 select-none" aria-hidden="true">
      {sources.map((src, i) => (
        <video
          key={src}
          ref={(el) => {
            refs.current[i] = el;
          }}
          muted
          playsInline
          autoPlay={i === 0}
          preload={i === active || i === (active + 1) % sources.length ? "auto" : "metadata"}
          poster={i === 0 ? poster : undefined}
          onEnded={i === active ? next : undefined}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src={src} type="video/mp4" />
        </video>
      ))}
    </div>
  );
}
