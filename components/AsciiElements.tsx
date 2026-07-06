"use client";

import { useEffect, useState } from "react";
import { generateAsciiElements, type AsciiElement, type AvoidZone } from "@/lib/asciiElements";

export function AsciiElements({
  count = 10,
  avoid,
  className,
}: {
  count?: number;
  avoid?: AvoidZone;
  className?: string;
}) {
  const [elements, setElements] = useState<AsciiElement[]>([]);

  useEffect(() => {
    setElements(generateAsciiElements(count, avoid));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ""}`} aria-hidden="true">
      {elements.map((el) => (
        <pre
          key={el.id}
          className="absolute select-none whitespace-pre font-mono leading-none text-ink"
          style={{
            left: `${el.leftPct}%`,
            top: `${el.topPct}%`,
            fontSize: `${el.fontSize}px`,
            opacity: el.opacity,
            transform: `rotate(${el.rotation}deg)`,
          }}
        >
          {el.pattern}
        </pre>
      ))}
    </div>
  );
}
