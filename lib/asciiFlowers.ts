const GLYPHS = ["✿", "❀", "✾", "❁", "✼"];

export type AsciiFlower = {
  id: number;
  glyph: string;
  leftPct: number;
  topPct: number;
  size: number;
  rotation: number;
  opacity: number;
};

export function generateAsciiFlowers(count: number): AsciiFlower[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    glyph: GLYPHS[Math.floor(Math.random() * GLYPHS.length)],
    leftPct: Math.random() * 100,
    topPct: Math.random() * 100,
    size: 80 + Math.random() * 220,
    rotation: Math.random() * 60 - 30,
    opacity: 0.15 + Math.random() * 0.25,
  }));
}
