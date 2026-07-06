// Small multi-line ASCII art shapes, built from plain keyboard characters,
// scattered as a decorative texture over a section.
const SHAPE_PATTERNS = [
  ` \\|/\n--@--\n /|\\\n  |\n  |`,
  ` \\ /\n-(o)-\n / \\\n  |\n  |`,
  `+ + +\n+(@)+\n+ + +\n   |\n   |`,
  `  *\n * *\n*   *\n * *\n  *`,
  `  /\\\n /  \\\n<    >\n \\  /\n  \\/`,
  ` .--.\n |  |\n '--'`,
  `  .-.\n ( . )\n  '-'`,
  `  |\n--+--\n  |`,
  `_/\\_/\\_`,
  `* . *\n. * .\n* . *`,
];

export type AsciiElement = {
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
  return { leftPct: Math.random() < 0.5 ? Math.random() * 8 : 92 + Math.random() * 8, topPct: Math.random() * 100 };
}

export function generateAsciiElements(count: number, avoid?: AvoidZone): AsciiElement[] {
  return Array.from({ length: count }, (_, i) => {
    const { leftPct, topPct } = samplePosition(avoid);
    return {
      id: i,
      pattern: SHAPE_PATTERNS[Math.floor(Math.random() * SHAPE_PATTERNS.length)],
      leftPct,
      topPct,
      fontSize: 40 + Math.random() * 160,
      rotation: Math.random() * 40 - 20,
      opacity: 0.12 + Math.random() * 0.16,
    };
  });
}
