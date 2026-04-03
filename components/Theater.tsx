"use client";

import { useEffect, useRef, useState } from "react";

export function Theater() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [cinemaActive, setCinemaActive] = useState(false);

  useEffect(() => {
    if (!cinemaActive) return;
    const v = videoRef.current;
    if (!v) return;
    v.play().catch(() => {});
  }, [cinemaActive]);

  return (
    <section className="border-t border-[var(--border)] px-6 py-20 md:px-12 md:py-28 lg:px-20 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display mb-4 text-[clamp(1.75rem,3.5vw,2.5rem)] font-medium tracking-[0.04em] text-[var(--foreground)]">
          Porch Light Theater
        </h2>
        <p className="mb-12 max-w-2xl text-[0.95rem] font-light leading-[1.85] tracking-[0.03em] text-[var(--muted)] md:mb-14">
          A full-frame screening of{" "}
          <span className="text-[#c9bfb2]">Island Time</span>—turn the lights down,
          press play, and let it run.
        </p>
        <div className="relative">
          <div
            className="relative aspect-video overflow-hidden rounded-sm bg-[#050403] ring-1 ring-[var(--border)]"
            style={{
              boxShadow:
                "inset 0 0 80px rgba(0,0,0,0.5), 0 24px 80px rgba(0,0,0,0.35)",
            }}
          >
            <video
              ref={videoRef}
              className="h-full w-full object-cover"
              src="/videos/porch-island-time.mp4"
              playsInline
              preload="metadata"
              controls={cinemaActive}
            />
            {!cinemaActive && (
              <button
                type="button"
                className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[#0a0908]/55 text-center transition-[background-color] duration-500 hover:bg-[#0a0908]/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-dim)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--background)]"
                onClick={() => setCinemaActive(true)}
                aria-label="Play featured film: Island Time"
              >
                <span className="font-display text-xl font-normal tracking-[0.08em] text-[var(--warm-white)] md:text-2xl">
                  Island Time
                </span>
                <span className="rounded-sm border border-[var(--accent-dim)]/60 bg-[#0a0908]/50 px-8 py-3 text-[0.7rem] font-normal uppercase tracking-[0.28em] text-[#d9cfc3] backdrop-blur-sm transition-[border-color,color] duration-500 hover:border-[var(--accent)] hover:text-[var(--warm-white)]">
                  Play feature
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
