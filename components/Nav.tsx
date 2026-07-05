const LINKS = [
  { href: "#work", label: "Field Notes" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <div className="sticky top-0 z-30 border-b border-ink/10 bg-paper/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-script text-2xl text-ink">
          Martina Solés
        </a>
        <nav className="flex items-center gap-6">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hidden text-sm font-semibold uppercase tracking-wide text-ink/60 transition-colors hover:text-ink sm:inline"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:martinasoles@gmail.com"
            className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-paper transition-colors hover:bg-sage"
          >
            Let&apos;s talk
          </a>
        </nav>
      </div>
    </div>
  );
}
