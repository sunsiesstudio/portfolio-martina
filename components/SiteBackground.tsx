// The same blue-green pastel gradient everywhere, instead of a
// per-section or time-of-day variation.
export function SiteBackground({ className }: { className?: string }) {
  return (
    <div
      className={className}
      style={{
        background:
          "radial-gradient(ellipse 65% 60% at 30% 15%, #a9cdd6 0%, transparent 60%), radial-gradient(ellipse 55% 50% at 75% 55%, #c3dcc0 0%, transparent 60%), linear-gradient(160deg, #a3c6d0 0%, #c8ddd2 55%, #e9eee6 100%)",
      }}
    />
  );
}
