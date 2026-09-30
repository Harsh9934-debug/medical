import Image from "next/image";

/**
 * Faint photo background for a section, fixed to the viewport so the section's
 * content scrolls over it. clip-path confines the fixed image to the section.
 * Parent must be `relative isolate`.
 */
export function SectionBg({ src, position = "center" }: { src: string; position?: string }) {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 -z-20 [clip-path:inset(0)]" aria-hidden="true">
        <Image
          src={src}
          alt=""
          fill
          sizes="100vw"
          className="fixed! inset-0 h-screen w-full select-none object-cover"
          style={{ objectPosition: position }}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white/70 via-white/55 to-[#f0fdfa]/70" />
    </>
  );
}
