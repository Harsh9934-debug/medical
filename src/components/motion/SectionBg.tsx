import Image from "next/image";

/** Faint photo background for a section. Parent must be `relative isolate`. */
export function SectionBg({ src, position = "center" }: { src: string; position?: string }) {
  return (
    <>
      <Image
        src={src}
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none -z-20 select-none object-cover"
        style={{ objectPosition: position }}
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white/90 via-white/80 to-[#f0fdfa]/90" />
    </>
  );
}
