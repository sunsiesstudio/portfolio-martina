export default function Footer() {
  return (
    <footer className="border-t border-ink/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-xs text-ink/40 sm:flex-row">
        <p>© {new Date().getFullYear()} Martina Solés Caldés</p>
        <p>Barcelona, ES</p>
      </div>
    </footer>
  );
}
