// Small multi-line ASCII art flowers, built from plain keyboard characters
// (not unicode dingbats) so they read as literal typed art, like a
// terminal drawing, rather than a single decorative glyph.
const FLOWER_PATTERNS = [
  `  .-.\n (*.*)\n  \`-'\n   |\n   |`,
  ` \\   /\n  \\ /\n --*--\n  / \\\n /   \\`,
  `  .   .\n   \\ /\n    *\n   / \\\n  '   '`,
  ` o   o\n  \\ /\n   X\n  / \\\n o   o`,
  `  _,-.\n ( * )\n  \`-,'\n   |\n  / \\`,
  `  * *\n * . *\n  * *\n   |\n   |`,
  `.-''-.\n(  @  )\n \`-,,-'\n    \\\n     \\`,
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

export function generateAsciiFlowers(count: number): AsciiFlower[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    pattern: FLOWER_PATTERNS[Math.floor(Math.random() * FLOWER_PATTERNS.length)],
    leftPct: Math.random() * 100,
    topPct: Math.random() * 100,
    fontSize: 10 + Math.random() * 65,
    rotation: Math.random() * 30 - 15,
    opacity: 0.18 + Math.random() * 0.27,
  }));
}
