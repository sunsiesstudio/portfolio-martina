export type AmbientPalette = {
  name: string;
  gradient: string;
  grainOpacity: number;
};

// Ordered by hour of day: dawn, morning, afternoon, evening, night.
// Kept within a lightness range where dark ink text stays legible throughout.
export const AMBIENT_PALETTES: { untilHour: number; palette: AmbientPalette }[] = [
  {
    untilHour: 8,
    palette: {
      name: "dawn",
      gradient:
        "radial-gradient(ellipse 60% 50% at 30% 20%, #eef2ea 0%, transparent 60%), radial-gradient(ellipse 55% 45% at 75% 60%, #c9dedd 0%, transparent 60%), linear-gradient(160deg, #cfe0dc 0%, #e8eee0 50%, #f4efe4 100%)",
      grainOpacity: 0.14,
    },
  },
  {
    untilHour: 12,
    palette: {
      name: "morning",
      gradient:
        "radial-gradient(ellipse 55% 50% at 15% 15%, #e8d98a 0%, transparent 55%), radial-gradient(ellipse 60% 55% at 70% 70%, #cdd3d6 0%, transparent 60%), linear-gradient(170deg, #e3d9ad 0%, #e9e6d6 50%, #f4efe4 100%)",
      grainOpacity: 0.16,
    },
  },
  {
    untilHour: 17,
    palette: {
      name: "afternoon",
      gradient:
        "radial-gradient(ellipse 60% 55% at 25% 20%, #d8cd9e 0%, transparent 60%), radial-gradient(ellipse 65% 55% at 85% 15%, #b9c19a 0%, transparent 60%), linear-gradient(165deg, #c7bd8f 0%, #ded2a8 45%, #f4efe4 100%)",
      grainOpacity: 0.18,
    },
  },
  {
    untilHour: 21,
    palette: {
      name: "evening",
      gradient:
        "radial-gradient(ellipse 55% 50% at 20% 25%, #d9a9ad 0%, transparent 55%), radial-gradient(ellipse 55% 50% at 75% 65%, #93a68d 0%, transparent 55%), linear-gradient(160deg, #b39a90 0%, #d0bd9c 50%, #f0e6d2 100%)",
      grainOpacity: 0.2,
    },
  },
  {
    untilHour: 24,
    palette: {
      name: "night",
      gradient:
        "radial-gradient(ellipse 55% 50% at 25% 20%, #7c8657 0%, transparent 55%), radial-gradient(ellipse 50% 45% at 75% 70%, #939a68 0%, transparent 55%), linear-gradient(165deg, #6d7a4d 0%, #9a9a6c 55%, #d8d0a8 100%)",
      grainOpacity: 0.22,
    },
  },
];

export function getAmbientPalette(hour: number): AmbientPalette {
  // Hours before dawn (midnight-5am) belong to the same "night" palette as late evening.
  if (hour < 5) return AMBIENT_PALETTES[AMBIENT_PALETTES.length - 1].palette;
  const match = AMBIENT_PALETTES.find((entry) => hour < entry.untilHour);
  return (match ?? AMBIENT_PALETTES[AMBIENT_PALETTES.length - 1]).palette;
}
