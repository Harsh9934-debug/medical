"use client";

import { useEffect, useRef } from "react";

function sendCommand(win: Window | null | undefined, func: string) {
  win?.postMessage(JSON.stringify({ event: "command", func, args: [] }), "*");
}

/**
 * Full-bleed, ambient YouTube background: muted, autoplaying and looping,
 * cropped to always fill its container edge-to-edge (like object-fit: cover),
 * using the oversized-iframe technique (sized from the container via cq units, so it covers any box) since <iframe> has no object-fit.
 *
 * `controls=0` only hides the scrubber — YouTube still shows its own paused
 * "play / skip" affordance whenever autoplay is blocked by the browser (Brave
 * blocks it by default, and some browsers require a real gesture). So on top
 * of the mute+autoplay params, this drives playback itself via the player's
 * postMessage API and retries on the visitor's first interaction anywhere on
 * the page, and stays clickable so a viewer can start it directly if their
 * browser still refuses.
 */
export function YouTubeCoverBackground({
  id,
  title,
  className = "",
  start = 0,
}: {
  id: string;
  title: string;
  className?: string;
  /** Second to start (and loop back to) */
  start?: number;
}) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const kick = () => {
      const win = iframeRef.current?.contentWindow;
      sendCommand(win, "mute");
      sendCommand(win, "playVideo");
    };
    const t = window.setTimeout(kick, 600);
    const events: (keyof WindowEventMap)[] = [
      "pointerdown",
      "keydown",
      "touchstart",
      "wheel",
      "scroll",
    ];
    events.forEach((e) => window.addEventListener(e, kick, { once: true, passive: true }));
    return () => {
      window.clearTimeout(t);
      events.forEach((e) => window.removeEventListener(e, kick));
    };
  }, []);

  const src = `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&modestbranding=1&playsinline=1&rel=0&disablekb=1&iv_load_policy=3&fs=0&enablejsapi=1${start ? `&start=${start}` : ""}`;

  return (
    <div
      aria-hidden
      onClick={() => sendCommand(iframeRef.current?.contentWindow, "playVideo")}
      className={`absolute inset-0 overflow-hidden bg-cover bg-center ${className}`}
      // Poster shows while the player loads, or if the browser blocks it.
      style={{ backgroundImage: `url(https://i.ytimg.com/vi/${id}/maxresdefault.jpg)`, containerType: "size" }}
    >
      <iframe
        ref={iframeRef}
        src={src}
        title={title}
        onLoad={() => {
          sendCommand(iframeRef.current?.contentWindow, "mute");
          sendCommand(iframeRef.current?.contentWindow, "playVideo");
        }}
        style={{ width: "max(100cqw, 177.78cqh)", height: "max(100cqh, 56.25cqw)" }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
    </div>
  );
}
