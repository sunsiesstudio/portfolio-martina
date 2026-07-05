"use client";

import { useEffect, useState } from "react";
import { generateAsciiFlowers, type AsciiFlower } from "@/lib/asciiFlowers";

export function AsciiFlowers({
  count = 90,
  className,
}: {
  count?: number;
  className?: string;
}) {
  const [flowers, setFlowers] = useState<AsciiFlower[]>([]);

  useEffect(() => {
    setFlowers(generateAsciiFlowers(count));
  }, [count]);

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ""}`} aria-hidden="true">
      {flowers.map((f) => (
        <span
          key={f.id}
          className="absolute select-none text-white"
          style={{
            left: `${f.leftPct}%`,
            top: `${f.topPct}%`,
            fontSize: `${f.size}px`,
            opacity: f.opacity,
            transform: `rotate(${f.rotation}deg)`,
          }}
        >
          {f.glyph}
        </span>
      ))}
    </div>
  );
}
