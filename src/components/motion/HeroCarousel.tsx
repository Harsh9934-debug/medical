"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const SLIDES = [
  "/hero-cleanroom.jpg",
  "/hero-packing.jpg",
  "/hero-worker.jpg",
  "/hero-pills.jpg",
];

export default function HeroCarousel({ interval = 5000 }: { interval?: number }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((i) => (i + 1) % SLIDES.length), interval);
    return () => clearInterval(id);
  }, [paused, interval]);

  return (
    <>
      <div className="pointer-events-none absolute inset-0 -z-20" aria-hidden="true">
        {SLIDES.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt=""
            fill
            priority={i === 0}
            sizes="100vw"
            className={`select-none object-cover object-center transition-opacity duration-1000 ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
      {/* light wash keeps dark copy readable while photo stays visible */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white/70 via-white/45 to-white/90" />

      <div
        className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Show slide ${i + 1}`}
            aria-current={i === active}
            onClick={() => setActive(i)}
            className={`h-2 rounded-full transition-all ${
              i === active ? "w-6 bg-[#0D9488]" : "w-2 bg-slate-400/70 hover:bg-slate-500"
            }`}
          />
        ))}
      </div>
    </>
  );
}
