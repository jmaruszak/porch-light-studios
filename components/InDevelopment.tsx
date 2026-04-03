const upcoming = [
  { title: "Mass Effect Fan Film", tag: "Trailer" },
  { title: "XPRIZE Entry", tag: "Experimental" },
  {
    title: "Chrome Syndicate — Mount Fuji Music Video",
    tag: "Music video",
  },
];

export function InDevelopment() {
  return (
    <section className="border-t border-[var(--border)] px-6 py-20 md:px-12 md:py-28 lg:px-20 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display mb-4 text-[clamp(1.75rem,3.5vw,2.5rem)] font-medium tracking-[0.04em] text-[var(--foreground)]">
          In Development
        </h2>
        <p className="mb-14 max-w-xl text-[0.95rem] font-light leading-[1.85] tracking-[0.03em] text-[var(--muted)] md:mb-16">
          Titles still gathering light in the edit—fragments of worlds not yet ready
          for the screen.
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
          {upcoming.map(({ title, tag }) => (
            <div
              key={title}
              className="rounded-sm bg-[var(--surface)] px-6 py-8 ring-1 ring-[var(--border)] transition-[background-color,ring-color] duration-500 ease-out hover:bg-[var(--surface-2)] hover:ring-[rgba(196,160,53,0.2)] md:px-7 md:py-9"
            >
              <span className="text-[0.65rem] font-normal uppercase tracking-[0.24em] text-[var(--accent-dim)]">
                {tag}
              </span>
              <h3 className="font-display mt-4 text-lg font-medium leading-snug tracking-[0.04em] text-[var(--warm-white)] md:text-xl">
                {title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
