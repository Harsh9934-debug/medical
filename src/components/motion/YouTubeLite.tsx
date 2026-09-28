"use client";

import * as React from "react";
import Image from "next/image";
import { Play } from "lucide-react";

/**
 * Click-to-play YouTube embed. Shows the video thumbnail and a play button
 * until clicked, so the page never pays for an iframe it doesn't need yet.
 */
export function YouTubeLite({
  id,
  title,
  className = "",
}: {
  id: string;
  title: string;
  className?: string;
}) {
  const [playing, setPlaying] = React.useState(false);

  if (playing) {
    return (
      <div className={`relative overflow-hidden rounded-[4px] ${className}`}>
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Play video: ${title}`}
      className={`group relative block w-full overflow-hidden rounded-[4px] cursor-pointer ${className}`}
    >
      <Image
        src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`}
        alt={title}
        fill
        sizes="(min-width:1024px) 50vw, 100vw"
        className="object-cover transition duration-500 group-hover:scale-105"
        unoptimized
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#04142f]/70 via-[#04142f]/10 to-transparent transition group-hover:from-[#04142f]/80" />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 text-[#0b4a99] shadow-[0_10px_30px_rgba(10,31,68,0.45)] transition-transform duration-300 group-hover:scale-110 sm:h-20 sm:w-20">
          <Play className="h-7 w-7 translate-x-0.5 fill-current sm:h-8 sm:w-8" />
        </span>
      </span>
      <span className="absolute bottom-4 left-4 right-4 text-left text-sm font-semibold text-white drop-shadow-sm sm:text-base">
        {title}
      </span>
    </button>
  );
}
