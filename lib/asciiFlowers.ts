// Deterministic PRNG so server and client render the same scattered
// layout (avoids hydration mismatches from Math.random()).
function mulberry32(seed: number) {
  let a = seed;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

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

export function generateAsciiFlowers(count: number, seed = 7): AsciiFlower[] {
  const rand = mulberry32(seed);
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    glyph: GLYPHS[Math.floor(rand() * GLYPHS.length)],
    leftPct: rand() * 100,
    topPct: rand() * 100,
    size: 10 + rand() * 16,
    rotation: rand() * 60 - 30,
    opacity: 0.2 + rand() * 0.3,
  }));
}
