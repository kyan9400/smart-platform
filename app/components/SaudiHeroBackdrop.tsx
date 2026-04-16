import Image from "next/image";

/**
 * Hero atmosphere: Riyadh skyline, Saudi national emblem (Wikimedia / Wikipedia), green wash, texture.
 *
 * Emblem file: same as Arabic Wikipedia article «شعار السعودية» —
 * https://commons.wikimedia.org/wiki/File:Emblem_of_Saudi_Arabia.svg
 * served locally as /Emblem_of_Saudi_Arabia.svg
 */
export default function SaudiHeroBackdrop({ denseDots }: { denseDots?: boolean }) {
  return (
    <>
      {/* Soft photographic depth (Riyadh skyline — Unsplash) */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.22] sm:opacity-[0.28]"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1656050961988-cf0fda6e5633?auto=format&fit=crop&w=2000&q=75)",
        }}
        aria-hidden
      />

      {/* National emblem of Saudi Arabia (official SVG from Wikimedia Commons) */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        aria-hidden
      >
        <div className="relative h-[min(75vh,460px)] w-[min(92vw,540px)] opacity-[0.18] sm:h-[min(78vh,520px)] sm:opacity-[0.24]">
          <Image
            src="/Emblem_of_Saudi_Arabia.svg"
            alt=""
            width={610}
            height={662}
            unoptimized
            className="h-full w-full object-contain object-center drop-shadow-[0_0_48px_rgba(0,0,0,0.28)]"
            sizes="(max-width: 768px) 92vw, 540px"
            priority={false}
          />
        </div>
      </div>

      {/* Saudi green wash — slightly translucent so the emblem reads through */}
      <div className="absolute inset-0 bg-gradient-to-br from-saudi-700/80 via-saudi-900/84 to-saudi-950/92" />

      {/* Dot grid */}
      <div
        className={`absolute inset-0 opacity-[0.14] ${denseDots ? "sm:opacity-[0.18]" : ""}`}
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: denseDots ? "22px 22px" : "28px 28px",
        }}
        aria-hidden
      />

      {/* Warm gold rim light */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-amber-400/5 via-transparent to-transparent"
        aria-hidden
      />
    </>
  );
}
