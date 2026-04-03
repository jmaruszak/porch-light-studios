import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]";

  const variants = {
    primary:
      "px-6 py-3 bg-[var(--accent)] text-[var(--background)] hover:bg-[#d4af2a] hover:shadow-[0_0_24px_rgba(201,162,39,0.35)]",
    secondary:
      "px-6 py-3 border border-[var(--border)] text-[var(--foreground)] hover:border-[var(--accent)] hover:bg-[var(--accent-soft)]",
  };

  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
