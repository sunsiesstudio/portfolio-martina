"use client";

import { useId, type CSSProperties } from "react";

export function Grain({
  className,
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  const id = `grain-filter-${useId().replace(/:/g, "")}`;
  return (
    <svg className={className} style={style} aria-hidden="true">
      <filter id={id}>
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.85"
          numOctaves="2"
          stitchTiles="stitch"
        />
        <feColorMatrix type="matrix" values="0 0 0 0 0, 0 0 0 0 0, 0 0 0 0 0, 0 0 0 0.5 0" />
      </filter>
      <rect width="100%" height="100%" filter={`url(#${id})`} />
    </svg>
  );
}
