import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Martina Solés, Cultural Intelligence Researcher & Concept Strategist",
  description:
    "I study what's shifting in culture and technology, then help brands act on it before it's obvious. Research and strategy, backed by a decade of shipped work.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
