import Image from "next/image";

export function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 overflow-hidden">
          <div className="hero-kb-wrap relative left-1/2 top-1/2 h-[118%] w-[118%] -translate-x-1/2 -translate-y-1/2">
            <Image
              src="/images/porch-hero-cinematic.jpeg"
              alt="Porch Light Studios hero background"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        </div>
        {/* Warm readable wash — keeps amber/umber in the plate */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,8,6,0.72) 0%, rgba(14,11,8,0.55) 38%, rgba(12,9,7,0.78) 100%)",
          }}
        />
        {/* Vignette */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            boxShadow: "inset 0 0 120px 40px rgba(0,0,0,0.45)",
            background:
              "radial-gradient(ellipse 75% 65% at 50% 42%, transparent 0%, rgba(0,0,0,0.35) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-20 text-center md:py-24">
        <h1 className="font-display text-[clamp(2.75rem,6vw,4.5rem)] font-medium leading-[1.08] tracking-[0.02em] text-[var(--warm-white)] drop-shadow-[0_2px_24px_rgba(0,0,0,0.35)]">
          Porch Light Studios
        </h1>
        <p className="mx-auto mt-8 max-w-xl text-[0.95rem] font-light leading-[1.75] tracking-[0.04em] text-[#d9cfc3] md:text-[1.05rem]">
          An independent studio creating short films, music videos and cinematic
          projects.
        </p>
        <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-8">
          <a
            href="#projects"
            className="inline-flex min-w-[11rem] items-center justify-center border border-[var(--accent-dim)] bg-[rgba(18,15,12,0.65)] px-7 py-3 text-[0.8rem] font-normal uppercase tracking-[0.22em] text-[var(--warm-white)] backdrop-blur-[2px] transition-[border-color,background-color,color] duration-500 hover:border-[var(--accent)] hover:bg-[var(--accent-soft)] hover:text-[var(--foreground)]"
          >
            Explore Projects
          </a>
          <a
            href="#store"
            className="inline-flex min-w-[11rem] items-center justify-center border border-transparent px-7 py-3 text-[0.8rem] font-normal uppercase tracking-[0.22em] text-[#c9bfb2] underline decoration-[var(--accent-dim)] decoration-1 underline-offset-[0.35rem] transition-[color,decoration-color] duration-500 hover:text-[var(--warm-white)] hover:decoration-[var(--accent)]"
          >
            Visit Store
          </a>
        </div>
      </div>
    </section>
  );
}
