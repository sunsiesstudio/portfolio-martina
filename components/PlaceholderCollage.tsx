"use client";

import { useEffect, useState } from "react";

type Card = {
  id: number;
  width: number;
  height: number;
  rotation: number;
  translateY: number;
};

const SIZE_PRESETS: Array<[number, number]> = [
  [150, 190], // portrait
  [190, 150], // landscape
  [160, 160], // square
  [130, 170],
  [200, 140],
];

function generateCards(count: number): Card[] {
  return Array.from({ length: count }, (_, i) => {
    const [width, height] = SIZE_PRESETS[i % SIZE_PRESETS.length];
    return {
      id: i,
      width,
      height,
      rotation: Math.random() * 16 - 8,
      translateY: Math.random() * 24 - 12,
    };
  });
}

// Placeholder image cards for a Pinterest-style moodboard collage.
// Swap the icon block for real <img> tags once photos are ready.
export function PlaceholderCollage({
  count = 17,
  className,
}: {
  count?: number;
  className?: string;
}) {
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    setCards(generateCards(count));
  }, [count]);

  return (
    <div className={`flex flex-wrap items-center justify-center gap-3 py-6 ${className ?? ""}`}>
      {cards.map((card) => (
        <div
          key={card.id}
          className="flex flex-none items-center justify-center rounded-xl border border-ink/10 bg-ink/5 shadow-md"
          style={{
            width: `${card.width}px`,
            height: `${card.height}px`,
            transform: `rotate(${card.rotation}deg) translateY(${card.translateY}px)`,
          }}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            className="text-ink/25"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="8.5" cy="8.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
            <path d="M21 15l-5-5-9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      ))}
    </div>
  );
}
