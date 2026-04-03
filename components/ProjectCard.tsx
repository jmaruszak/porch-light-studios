"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type ProjectCardProps = {
  title: string;
  description: string;
  comingSoon?: boolean;
  videoSrc?: string;
};

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const fn = () => setReduced(mq.matches);
    mq.addEventListener("change", fn);
    return () => mq.removeEventListener("change", fn);
  }, []);
  return reduced;
}

function useCanHoverPlay() {
  const [can, setCan] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setCan(mq.matches);
    const fn = () => setCan(mq.matches);
    mq.addEventListener("change", fn);
    return () => mq.removeEventListener("change", fn);
  }, []);
  return can;
}

export function ProjectCard({
  title,
  description,
  comingSoon = false,
  videoSrc,
}: ProjectCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const canHoverPlay = useCanHoverPlay();
  const [playingFromTap, setPlayingFromTap] = useState(false);
  const [mediaPlaying, setMediaPlaying] = useState(false);

  const hoverPreviewEnabled = canHoverPlay && !reducedMotion;

  const pauseAndReset = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    try {
      v.currentTime = 0;
    } catch {
      /* ignore */
    }
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (!hoverPreviewEnabled || !videoRef.current || playingFromTap) return;
    videoRef.current.play().catch(() => {});
  }, [hoverPreviewEnabled, playingFromTap]);

  const handleMouseLeave = useCallback(() => {
    if (!hoverPreviewEnabled || playingFromTap) return;
    pauseAndReset();
  }, [hoverPreviewEnabled, playingFromTap, pauseAndReset]);

  const handleActivate = useCallback(() => {
    if (playingFromTap) {
      setPlayingFromTap(false);
      pauseAndReset();
      return;
    }
    setPlayingFromTap(true);
  }, [playingFromTap, pauseAndReset]);

  useEffect(() => {
    if (!playingFromTap) return;
    const v = videoRef.current;
    if (!v) return;
    v.play().catch(() => setPlayingFromTap(false));
    const onEnded = () => {
      setPlayingFromTap(false);
      pauseAndReset();
    };
    v.addEventListener("ended", onEnded);
    return () => v.removeEventListener("ended", onEnded);
  }, [playingFromTap, pauseAndReset]);

  if (comingSoon) {
    return (
      <article className="group poster-hover overflow-hidden rounded-sm bg-[var(--card-bg)] shadow-none ring-1 ring-[var(--border)]">
        <div className="relative aspect-[3/4] overflow-hidden bg-[#0a0908]">
          <div
            className="absolute inset-0 origin-center transition-[transform,filter] duration-[1.1s] ease-out group-hover:scale-[1.03] group-hover:brightness-[1.07]"
            aria-hidden
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#1c1814] via-[#0f0d0b] to-[#12100e]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_100%,rgba(196,160,53,0.12),transparent_58%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,236,200,0.06),transparent_42%)]" />
            <div
              className="absolute inset-0 opacity-[0.12] mix-blend-soft-light"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)",
              }}
            />
          </div>
          <p className="absolute left-5 top-5 z-10 text-[0.65rem] font-normal uppercase tracking-[0.28em] text-[var(--accent-dim)]">
            Coming Soon
          </p>
        </div>
        <div className="border-t border-[var(--border)] bg-[var(--surface)] px-6 py-7 md:px-7 md:py-8">
          <h3 className="font-display text-xl font-medium tracking-[0.06em] text-[var(--warm-white)] md:text-[1.35rem]">
            {title}
          </h3>
          <p className="mt-3 text-[0.9rem] font-light leading-[1.75] tracking-[0.04em] text-[var(--muted)]">
            {description}
          </p>
        </div>
      </article>
    );
  }

  if (!videoSrc) {
    return (
      <article className="group poster-hover overflow-hidden rounded-sm bg-[var(--card-bg)] ring-1 ring-[var(--border)]">
        <div className="relative aspect-[3/4] overflow-hidden bg-[var(--background-soft)]" />
        <div className="px-6 py-7 md:px-7 md:py-8">
          <h3 className="font-display text-xl font-medium text-[var(--foreground)]">
            {title}
          </h3>
          <p className="mt-3 text-sm font-light leading-relaxed text-[var(--muted)]">
            {description}
          </p>
        </div>
      </article>
    );
  }

  return (
    <article className="overflow-hidden rounded-sm bg-[var(--card-bg)] ring-1 ring-[var(--border)]">
      <div
        className="group relative aspect-[3/4] cursor-pointer overflow-hidden bg-[#0a0908] outline-none transition-[filter] duration-700 ease-out hover:brightness-[1.04] focus-visible:ring-2 focus-visible:ring-[var(--accent-dim)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleActivate}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleActivate();
          }
        }}
        role="button"
        tabIndex={0}
        aria-label={`${playingFromTap ? "Pause" : "Play"} preview: ${title}`}
      >
        <video
          ref={videoRef}
          src={videoSrc}
          className="h-full w-full object-cover transition-[transform] duration-[1.1s] ease-out group-hover:scale-[1.02]"
          muted={!playingFromTap}
          playsInline
          loop={!playingFromTap}
          preload="metadata"
          controls={playingFromTap}
          onPlay={() => setMediaPlaying(true)}
          onPause={() => setMediaPlaying(false)}
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0908]/90 via-transparent to-[#0a0908]/25"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_30%,transparent_0%,rgba(0,0,0,0.2)_100%)]"
          aria-hidden
        />
        {!playingFromTap && !mediaPlaying && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <span className="rounded-full border border-[var(--accent-dim)]/50 bg-[#0a0908]/45 px-4 py-2 text-[0.65rem] font-normal uppercase tracking-[0.28em] text-[#d9cfc3] backdrop-blur-[2px] transition-opacity duration-500 group-hover:opacity-90">
              {hoverPreviewEnabled ? "Hover / tap" : "Tap to play"}
            </span>
          </div>
        )}
      </div>
      <div className="border-t border-[var(--border)] bg-[var(--surface)] px-6 py-7 md:px-7 md:py-8">
        <h3 className="font-display text-xl font-medium leading-snug tracking-[0.05em] text-[var(--warm-white)] md:text-[1.35rem]">
          {title}
        </h3>
        <p className="mt-4 text-[0.9rem] font-light leading-[1.8] tracking-[0.04em] text-[var(--muted)]">
          {description}
        </p>
      </div>
    </article>
  );
}
