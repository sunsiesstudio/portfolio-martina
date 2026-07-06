export type AmbientPalette = {
  name: string;
  gradient: string;
  grainOpacity: number;
};

// Ordered by hour of day: dawn, morning, afternoon, evening, night.
// Soft pastel color washes on a light beige base, echoing a blurred
// bokeh photograph rather than a saturated sunset gradient. Kept light
// throughout so dark ink text always stays legible.
export const AMBIENT_PALETTES: { untilHour: number; palette: AmbientPalette }[] = [
  {
    untilHour: 8,
    palette: {
      name: "dawn",
      gradient:
        "radial-gradient(ellipse 55% 60% at 30% 10%, #bdd9d2 0%, transparent 55%), radial-gradient(ellipse 50% 50% at 72% 55%, #d3e2b8 0%, transparent 55%), radial-gradient(ellipse 38% 38% at 58% 82%, #aecbe3 0%, transparent 60%), linear-gradient(160deg, #f0ecdf 0%, #f8f4ea 100%)",
      grainOpacity: 0.12,
    },
  },
  {
    untilHour: 12,
    palette: {
      name: "morning",
      gradient:
        "radial-gradient(ellipse 50% 55% at 20% 15%, #e6dd9a 0%, transparent 55%), radial-gradient(ellipse 50% 50% at 70% 65%, #c6dcb3 0%, transparent 55%), radial-gradient(ellipse 35% 35% at 55% 85%, #b7cfe0 0%, transparent 60%), linear-gradient(165deg, #f1ecdc 0%, #f8f4ea 100%)",
      grainOpacity: 0.13,
    },
  },
  {
    untilHour: 17,
    palette: {
      name: "afternoon",
      gradient:
        "radial-gradient(ellipse 50% 60% at 38% 18%, #d3dfa3 0%, transparent 55%), radial-gradient(ellipse 45% 50% at 68% 55%, #f0c7cf 0%, transparent 55%), radial-gradient(ellipse 35% 35% at 55% 78%, #a9cbe0 0%, transparent 60%), linear-gradient(160deg, #f2ecdd 0%, #f8f4ea 100%)",
      grainOpacity: 0.14,
    },
  },
  {
    untilHour: 21,
    palette: {
      name: "evening",
      gradient:
        "radial-gradient(ellipse 50% 55% at 28% 22%, #e8b9ca 0%, transparent 55%), radial-gradient(ellipse 45% 45% at 72% 60%, #b6cbe0 0%, transparent 55%), radial-gradient(ellipse 32% 32% at 50% 85%, #cfd9a8 0%, transparent 60%), linear-gradient(165deg, #efe4e1 0%, #f7f1e8 100%)",
      grainOpacity: 0.15,
    },
  },
  {
    untilHour: 24,
    palette: {
      name: "night",
      gradient:
        "radial-gradient(ellipse 50% 55% at 30% 20%, #9bb6d8 0%, transparent 55%), radial-gradient(ellipse 45% 45% at 70% 65%, #b8a6c9 0%, transparent 55%), radial-gradient(ellipse 32% 32% at 50% 85%, #9fc0b0 0%, transparent 60%), linear-gradient(165deg, #e3dde9 0%, #f4f0ea 100%)",
      grainOpacity: 0.15,
    },
  },
];

export function getAmbientPalette(hour: number): AmbientPalette {
  // Hours before dawn (midnight-5am) belong to the same "night" palette as late evening.
  if (hour < 5) return AMBIENT_PALETTES[AMBIENT_PALETTES.length - 1].palette;
  const match = AMBIENT_PALETTES.find((entry) => hour < entry.untilHour);
  return (match ?? AMBIENT_PALETTES[AMBIENT_PALETTES.length - 1]).palette;
}
