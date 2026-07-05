"use client";

import { useEffect, useState } from "react";
import { generateAsciiShapes, type AsciiShape, type AvoidZone } from "@/lib/asciiShapes";

export function AsciiShapes({
  count = 35,
  avoid,
  className,
}: {
  count?: number;
  avoid?: AvoidZone;
  className?: string;
}) {
  const [shapes, setShapes] = useState<AsciiShape[]>([]);

  useEffect(() => {
    setShapes(generateAsciiShapes(count, avoid));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ""}`} aria-hidden="true">
      {shapes.map((s) => (
        <pre
          key={s.id}
          className="absolute select-none whitespace-pre font-mono leading-none text-white"
          style={{
            left: `${s.leftPct}%`,
            top: `${s.topPct}%`,
            fontSize: `${s.fontSize}px`,
            opacity: s.opacity,
            transform: `rotate(${s.rotation}deg)`,
          }}
        >
          {s.pattern}
        </pre>
      ))}
    </div>
  );
}
