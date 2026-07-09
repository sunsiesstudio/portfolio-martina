"use client";

import { useEffect, useState } from "react";
import { COLLAGE_ITEMS } from "@/lib/work";

type CardLayout = {
  id: string;
  width: number;
  height: number;
  rotation: number;
  translateY: number;
};

const IMAGE_SIZES: Array<[number, number]> = [
  [150, 190],
  [190, 150],
  [160, 160],
  [130, 170],
];

const TEXT_SIZES: Array<[number, number]> = [
  [170, 130],
  [190, 110],
];

function generateLayouts(): CardLayout[] {
  let imageIdx = 0;
  let textIdx = 0;
  return COLLAGE_ITEMS.map((item) => {
    const [width, height] =
      item.type === "image"
        ? IMAGE_SIZES[imageIdx++ % IMAGE_SIZES.length]
        : TEXT_SIZES[textIdx++ % TEXT_SIZES.length];
    return {
      id: item.id,
      width,
      height,
      rotation: Math.random() * 16 - 8,
      translateY: Math.random() * 24 - 12,
    };
  });
}

// A clickable moodboard of the projects covered below: image-style cards
// for visual work, text/title cards for concept-driven ones. Each links
// down to its full write-up. Swap the icon block for real photos later.
export function ProjectCollage({ className }: { className?: string }) {
  const [layouts, setLayouts] = useState<CardLayout[]>([]);

  useEffect(() => {
    setLayouts(generateLayouts());
  }, []);

  return (
    <div className={`flex flex-wrap items-center justify-center gap-3 py-6 ${className ?? ""}`}>
      {COLLAGE_ITEMS.map((item, i) => {
        const layout = layouts[i];
        const style = layout
          ? {
              width: `${layout.width}px`,
              height: `${layout.height}px`,
              transform: `rotate(${layout.rotation}deg) translateY(${layout.translateY}px)`,
            }
          : { width: "160px", height: "160px" };

        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="group flex flex-none items-center justify-center rounded-xl border border-ink/10 bg-ink/5 p-3 text-center shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg"
            style={style}
          >
            {item.type === "image" ? (
              <div className="flex flex-col items-center gap-2">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-ink/25">
                  <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="8.5" cy="8.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M21 15l-5-5-9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="font-serif text-sm font-bold italic text-ink/70 group-hover:text-ink">
                  {item.title}
                </span>
              </div>
            ) : (
              <span className="font-serif text-lg font-bold italic leading-tight text-ink/80 group-hover:text-ink">
                {item.title}
              </span>
            )}
          </a>
        );
      })}
    </div>
  );
}
