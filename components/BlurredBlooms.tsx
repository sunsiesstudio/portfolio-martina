"use client";

import { useEffect, useState } from "react";

type Bloom = {
  id: number;
  leftPct: number;
  topPct: number;
  size: number;
  blur: number;
  opacity: number;
};

function generateBlooms(count: number): Bloom[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    leftPct: Math.random() * 100,
    topPct: Math.random() * 100,
    size: 50 + Math.random() * 180,
    blur: 12 + Math.random() * 26,
    opacity: 0.55 + Math.random() * 0.35,
  }));
}

// Soft, out-of-focus white blobs meant to read as blurred flowers/bokeh,
// the way a shallow-depth-of-field photo turns blossoms into soft circles.
export function BlurredBlooms({
  count = 10,
  className,
}: {
  count?: number;
  className?: string;
}) {
  const [blooms, setBlooms] = useState<Bloom[]>([]);

  useEffect(() => {
    setBlooms(generateBlooms(count));
  }, [count]);

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ""}`} aria-hidden="true">
      {blooms.map((b) => (
        <div
          key={b.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${b.leftPct}%`,
            top: `${b.topPct}%`,
            width: `${b.size}px`,
            height: `${b.size}px`,
            filter: `blur(${b.blur}px)`,
            opacity: b.opacity,
          }}
        />
      ))}
    </div>
  );
}
