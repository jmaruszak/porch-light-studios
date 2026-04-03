import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-12 lg:px-20">
        <Link
          href="/"
          className="font-display text-[1.05rem] font-medium tracking-[0.08em] text-[var(--warm-white)] transition-colors duration-500 hover:text-[var(--accent-dim)]"
        >
          Porch Light Studios
        </Link>
        <nav className="flex items-center gap-8" aria-label="Main">
          <Link
            href="#projects"
            className="text-[0.8rem] font-light tracking-[0.12em] text-[var(--muted)] transition-colors duration-500 hover:text-[#d9cfc3]"
          >
            Projects
          </Link>
          <Link
            href="#store"
            className="text-[0.8rem] font-light tracking-[0.12em] text-[var(--muted)] transition-colors duration-500 hover:text-[#d9cfc3]"
          >
            Store
          </Link>
        </nav>
      </div>
    </header>
  );
}
