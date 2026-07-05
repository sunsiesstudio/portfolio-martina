"use client";

import { useEffect, useState } from "react";
import { AMBIENT_PALETTES, getAmbientPalette, type AmbientPalette } from "@/lib/ambient";
import { Grain } from "./Grain";

const DEFAULT_PALETTE: AmbientPalette = AMBIENT_PALETTES[2].palette; // afternoon, safe for SSR

export function AmbientBackground({ className }: { className?: string }) {
  const [palette, setPalette] = useState<AmbientPalette>(DEFAULT_PALETTE);

  useEffect(() => {
    setPalette(getAmbientPalette(new Date().getHours()));
  }, []);

  return (
    <div
      className={className}
      style={{ background: palette.gradient, transition: "background 700ms ease" }}
      data-ambient={palette.name}
    >
      <Grain
        className="pointer-events-none absolute inset-0 mix-blend-overlay"
        style={{ opacity: palette.grainOpacity }}
      />
    </div>
  );
}
