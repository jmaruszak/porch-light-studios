import Link from "next/link";

const placeholderProducts = [
  { name: "Studio Apparel", price: "Coming Soon" },
  { name: "Posters & Prints", price: "Coming Soon" },
  { name: "Limited Runs", price: "Coming Soon" },
];

export function StorePreview() {
  return (
    <section
      id="store"
      className="border-t border-[var(--border)] px-6 py-20 md:px-12 md:py-28 lg:px-20 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display mb-4 text-[clamp(1.75rem,3.5vw,2.5rem)] font-medium tracking-[0.04em] text-[var(--foreground)]">
          Store
        </h2>
        <p className="mb-14 max-w-xl text-[0.95rem] font-light leading-[1.8] tracking-[0.03em] text-[var(--muted)] md:mb-16">
          Apparel, prints, and limited-run pieces will arrive as the world of Porch Light expands.
        </p>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-12">
          {placeholderProducts.map(({ name, price }) => (
            <div
              key={name}
              className="group block overflow-hidden rounded-sm bg-[var(--card-bg)] ring-1 ring-[var(--border)] transition-[filter,ring-color] duration-500 ease-out hover:brightness-[1.03] hover:ring-[rgba(196,160,53,0.18)]"
            >
              <div className="relative flex aspect-square items-center justify-center bg-gradient-to-b from-[#141210] to-[#0a0908]">
                <span className="text-[0.7rem] font-light uppercase tracking-[0.28em] text-[var(--muted)] transition-colors duration-500 group-hover:text-[#b8a99a]">
                  Coming Soon
                </span>
              </div>

              <div className="border-t border-[var(--border)] px-5 py-6">
                <h3 className="font-display text-[1.05rem] font-medium tracking-[0.05em] text-[var(--warm-white)] transition-colors duration-500 group-hover:text-[#f5efe6]">
                  {name}
                </h3>
                <p className="mt-2 text-[0.85rem] font-light text-[var(--muted)]">
                  {price}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <span className="inline-flex items-center text-[0.8rem] font-light uppercase tracking-[0.2em] text-[var(--muted)]">
            Store Coming Soon
          </span>
        </div>
      </div>
    </section>
  );
}
