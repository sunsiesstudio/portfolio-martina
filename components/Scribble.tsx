export function Scribble({
  className,
  color = "var(--color-ink)",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 220 180"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <circle cx="70" cy="60" r="52" stroke={color} strokeWidth="2.5" />
      <circle cx="120" cy="45" r="34" stroke={color} strokeWidth="2.5" />
      <circle cx="150" cy="90" r="46" stroke={color} strokeWidth="2.5" />
      <circle cx="95" cy="110" r="40" stroke={color} strokeWidth="2.5" />
      <circle cx="45" cy="105" r="30" stroke={color} strokeWidth="2.5" />
    </svg>
  );
}
