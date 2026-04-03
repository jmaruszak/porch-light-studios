const socialLinks = [
  { name: "YouTube", href: "https://youtube.com/@Porchlightlab" },
  { name: "Instagram", href: "https://instagram.com/porchlightms/" },
  { name: "TikTok", href: "https://tiktok.com/@porchlightstudios" },
  { name: "X", href: "https://x.com/porchlightlab" },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] px-6 py-16 md:px-12 md:py-20 lg:px-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-display text-[1.1rem] font-medium tracking-[0.06em] text-[var(--warm-white)]">
            Porch Light Studios
          </p>
          <p className="mt-3 max-w-xs text-[0.85rem] font-light leading-[1.75] tracking-[0.04em] text-[var(--muted)]">
            A new kind of studio for films, music, and episodic content built and produced in Mississippi.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-10 gap-y-4" aria-label="Social links">
          {socialLinks.map(({ name, href }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.8rem] font-light tracking-[0.1em] text-[var(--muted)] transition-colors duration-500 hover:text-[#c9bfb2]"
            >
              {name}
            </a>
          ))}
        </nav>
      </div>
      <div className="mx-auto mt-14 max-w-6xl border-t border-[var(--border)] pt-10">
        <p className="text-[0.7rem] font-light tracking-[0.06em] text-[var(--muted)]">
          © {new Date().getFullYear()} Porch Light Studios. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
