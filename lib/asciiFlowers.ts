// Small multi-line ASCII art flowers, built from plain keyboard characters
// (not unicode dingbats) so they read as literal typed art, like a
// terminal drawing. Each is petals radiating from a center, plus a stem.
const FLOWER_PATTERNS = [
  ` \\|/\n--@--\n /|\\\n  |\n  |`,
  ` \\ /\n-(o)-\n / \\\n  |\n  |`,
  `.  .\n \\/\n-(*)-\n /\\\n'  '\n  |`,
  `+ + +\n+(@)+\n+ + +\n   |\n   |`,
  `\\   /\n \\ /\n *-*-*\n / \\\n/   \\\n  |`,
  ` * *\n*(o)*\n * *\n  |\n  |`,
  `x   x\n \\ /\n--@--\n / \\\nx   x\n  |`,
];

export type AsciiFlower = {
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

export function generateAsciiFlowers(count: number, avoid?: AvoidZone): AsciiFlower[] {
  return Array.from({ length: count }, (_, i) => {
    const { leftPct, topPct } = samplePosition(avoid);
    return {
      id: i,
      pattern: FLOWER_PATTERNS[Math.floor(Math.random() * FLOWER_PATTERNS.length)],
      leftPct,
      topPct,
      fontSize: 8 + Math.random() * Math.random() * 190,
      rotation: Math.random() * 30 - 15,
      opacity: 0.18 + Math.random() * 0.27,
    };
  });
}
