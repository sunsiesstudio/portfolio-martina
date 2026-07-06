// Small multi-line ASCII art shapes, built from plain keyboard characters
// (not unicode dingbats) so they read as literal typed art, like a
// terminal drawing, scattered across the ambient background sections.
const SHAPE_PATTERNS = [
  // flower: petals radiating from a center, plus a stem
  ` \\|/\n--@--\n /|\\\n  |\n  |`,
  ` \\ /\n-(o)-\n / \\\n  |\n  |`,
  `+ + +\n+(@)+\n+ + +\n   |\n   |`,
  // star burst
  `  *\n * *\n*   *\n * *\n  *`,
  ` \\ | /\n  \\|/\n--- ---\n  /|\\\n / | \\`,
  // diamond / crystal
  `  /\\\n /  \\\n<    >\n \\  /\n  \\/`,
  // box / grid
  ` .--.\n |  |\n '--'`,
  // spiral-ish scribble
  `  .-.\n ( . )\n  '-'`,
  // cross / compass
  `  |\n--+--\n  |`,
  // wave
  `_/\\_/\\_`,
  // asterisk cluster
  `* . *\n. * .\n* . *`,
  // arrow burst
  ` ^\n/|\\\n |`,
];

export type AsciiShape = {
  id: number;
  pattern: string;
  leftPct: number;
  topPct: number;
  fontSize: number;
  rotation: number;
  opacity: number;
};

export type AvoidZone = {
  leftRange: [number, number];
  topRange: [number, number];
};

function samplePosition(avoid?: AvoidZone) {
  for (let attempt = 0; attempt < 25; attempt++) {
    const leftPct = Math.random() * 100;
    const topPct = Math.random() * 100;
    if (!avoid) return { leftPct, topPct };
    const inAvoidX = leftPct >= avoid.leftRange[0] && leftPct <= avoid.leftRange[1];
    const inAvoidY = topPct >= avoid.topRange[0] && topPct <= avoid.topRange[1];
    if (!(inAvoidX && inAvoidY)) return { leftPct, topPct };
  }
  // fallback: push into a side margin so it never overlaps the avoid zone
  return { leftPct: Math.random() < 0.5 ? Math.random() * 8 : 92 + Math.random() * 8, topPct: Math.random() * 100 };
}

export function generateAsciiShapes(count: number, avoid?: AvoidZone): AsciiShape[] {
  return Array.from({ length: count }, (_, i) => {
    const { leftPct, topPct } = samplePosition(avoid);
    return {
      id: i,
      pattern: SHAPE_PATTERNS[Math.floor(Math.random() * SHAPE_PATTERNS.length)],
      leftPct,
      topPct,
      fontSize: 9 + Math.random() * Math.random() * 55,
      rotation: Math.random() * 40 - 20,
      opacity: 0.14 + Math.random() * 0.2,
    };
  });
}
