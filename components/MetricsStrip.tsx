const metrics = [
  { value: "4K+", label: "Followers" },
  { value: "5M+", label: "Views Across Platforms" },
   { value: "3", label: "Flagship Projects In Development" },
   { value: "AI-Driven", label: "Studio" },
];

export function MetricsStrip() {
  return (
    <section className="border-y border-[var(--border)] py-12 md:py-16">
      <div className="px-6 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-12 gap-x-10 md:grid-cols-4 md:gap-x-6">
          {metrics.map(({ value, label }, i) => (
            <div
              key={label}
              className={`text-center md:text-left ${
                i > 0 ? "md:border-l md:border-[var(--border)] md:pl-8" : ""
              }`}
            >
              <div className="font-display text-2xl font-normal tracking-[0.06em] text-[var(--warm-white)] md:text-3xl">
                {value}
              </div>
              <div className="mt-2 text-[0.8rem] font-light tracking-[0.08em] text-[var(--muted)]">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
