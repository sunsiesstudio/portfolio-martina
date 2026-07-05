export function Stipple({
  className,
  color = "var(--color-ink)",
}: {
  className?: string;
  color?: string;
}) {
  const id = "stipple-pattern";
  return (
    <svg className={className} aria-hidden="true">
      <defs>
        <pattern id={id} width="14" height="14" patternUnits="userSpaceOnUse">
          <text x="0" y="10" fontSize="10" fill={color}>
            +
          </text>
          <text x="7" y="4" fontSize="7" fill={color}>
            x
          </text>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}
