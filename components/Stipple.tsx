"use client";

import { useId } from "react";

export function Stipple({
  className,
  color = "var(--color-ink)",
}: {
  className?: string;
  color?: string;
}) {
  const id = `stipple-pattern-${useId().replace(/:/g, "")}`;
  return (
    <svg className={className} aria-hidden="true">
      <defs>
        <pattern id={id} width="16" height="16" patternUnits="userSpaceOnUse">
          {/* plus mark */}
          <line x1="8" y1="4" x2="8" y2="10" stroke={color} strokeWidth="1.4" />
          <line x1="5" y1="7" x2="11" y2="7" stroke={color} strokeWidth="1.4" />
          {/* x mark, offset */}
          <line x1="0" y1="12" x2="3" y2="15" stroke={color} strokeWidth="1.2" />
          <line x1="0" y1="15" x2="3" y2="12" stroke={color} strokeWidth="1.2" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}
