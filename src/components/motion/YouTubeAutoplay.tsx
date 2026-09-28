"use client";

/**
 * Always-on YouTube embed: muted, autoplaying and looping forever from the
 * moment it scrolls onto the page. Muted is required for browsers to allow
 * autoplay; a visible unmute control still lets the viewer turn sound on.
 */
export function YouTubeAutoplay({
  id,
  title,
  className = "",
}: {
  id: string;
  title: string;
  className?: string;
}) {
  const src = `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=1&modestbranding=1&playsinline=1&rel=0`;
  return (
    <div className={`relative overflow-hidden rounded-[4px] ${className}`}>
      <iframe
        className="absolute inset-0 h-full w-full"
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
