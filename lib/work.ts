export type Service = {
  title: string;
  description: string;
  note?: { text: string; href: string };
};

export const SERVICES: Service[] = [
  {
    title: "Signal Scanning",
    description:
      "What's happening in AI, wearables, biotech and beyond that could hit your category (fashion, beauty, food, mobility, whatever it is) in the next 1-3 years.",
    note: {
      text: "A live version of this: signal-map-proxy",
      href: "https://signal-map-proxy-l25k.vercel.app/",
    },
  },
  {
    title: "Cultural Tension Mapping",
    description:
      "How people actually feel about that technology: fear, desire, resistance, and what that means for how (or whether) a brand should speak about it.",
  },
  {
    title: "Positioning Territories",
    description:
      "Actionable concepts a brand can build into product, communication or innovation, the way I built \"Sovereign Body\" or \"Felt Knowledge.\"",
  },
  {
    title: "Innovation Audit",
    description:
      "An honest look at what a brand is doing with emerging tech right now, and whether it connects to something real or is just noise.",
  },
];

export type Practice = {
  id: string;
  eyebrow: string;
  title: string;
  role: string;
  paragraph: string;
  stats?: string[];
  featured?: boolean;
};

export const FEATURED_PRACTICE: Practice[] = [
  {
    id: "speculative",
    eyebrow: "Final Degree Project · Speculative Design",
    title: "Phobos, a Mars-tourism agency that doesn't exist",
    role: "Idea, Art Direction & Programming",
    paragraph:
      "A satirical travel agency to Mars, built to critique the obsession with online fame. Tourists compete for visibility points, and only the most-watched get their trip paid for. Built as fiction, but the question behind it was real research: what happens when a culture's need for approval has nowhere left to go but space.",
    stats: ["Full concept, story, interactive logo (Processing) and coded website"],
  },
  {
    id: "emotional-privacy",
    eyebrow: "IAAC Master in Advanced Interaction",
    title: "The End of Emotional Privacy",
    role: "Researcher, Designer & Programmer",
    paragraph:
      "A wearable that reads body heat and broadcasts it as emotion, asking what happens once feelings become a data source corporations can act on. Exhibited for a month at Barcelona's DHUB design museum, covered by Spanish national TV and press.",
    stats: ["Exhibited at DHUB Barcelona", "Covered by national TV & press"],
  },
  {
    id: "guestline",
    eyebrow: "Research-Led Strategy · Guestline",
    title: "What guest-journey research turned into",
    role: "Strategy & Product Research · Feb 2023 – Jan 2025",
    paragraph:
      "I started by auditing the full guest journey (interviews, heatmaps, usability testing), which surfaced a simple truth: guests were being asked to do the same thing twice. That research became the strategy behind a redesign of Guestline's kiosk, portal and booking engine, now running as one connected system across thousands of hotels.",
    stats: [
      "Check-in time −35% (7 → 4.5 min)",
      "Self-service adoption 30% → 50%",
      "Live across 3,500+ hotels",
    ],
  },
];

export type PracticeItem = {
  id: string;
  title: string;
  role: string;
  note: string;
};

export const MORE_PRACTICE: PracticeItem[] = [
  {
    id: "beincrypto",
    title: "BeInCrypto",
    role: "Design Lead, 2021–2022",
    note:
      "Researched the audience first (workshops, personas, a 30-person usability study) before rebranding the platform around \"the crypto explorer,\" live across 12 languages.",
  },
  {
    id: "bmw",
    title: "BMW Retail Lab 2.0",
    role: "CX Designer @ rpc",
    note:
      "Helped design a live prototyping showroom testing 8 connected touchpoints (AR, VR, interactive walls) between home and dealership.",
  },
  {
    id: "quanos",
    title: "Quanos",
    role: "Brand Designer @ rpc",
    note:
      "Brand identity for the merger of TID and Docware under the Schema Group: logo, colour system, typography.",
  },
  {
    id: "ar-filters",
    title: "AR filters",
    role: "Self-initiated",
    note:
      "Rouje (lipstick try-on), Sighh Studio (floral filters), and a UX-community feedback filter, built solo with Spark AR.",
  },
  {
    id: "sunsies",
    title: "Sunsies Studio",
    role: "Brand Design",
    note:
      "Brand identity for the 3D-printed jewellery studio, plus the \"Take a Seat\" campaign. Case studies coming soon.",
  },
];

export type CollageItem = {
  id: string;
  title: string;
  type: "image" | "text";
};

// One entry per project across FEATURED_PRACTICE and MORE_PRACTICE, used to
// build the clickable moodboard at the top of Field Notes. Each links down
// to that project's full write-up via its id.
export const COLLAGE_ITEMS: CollageItem[] = [
  { id: "speculative", title: "Phobos", type: "text" },
  { id: "emotional-privacy", title: "The End of Emotional Privacy", type: "image" },
  { id: "guestline", title: "Guestline", type: "image" },
  { id: "beincrypto", title: "BeInCrypto", type: "image" },
  { id: "bmw", title: "BMW Retail Lab", type: "image" },
  { id: "quanos", title: "Quanos", type: "text" },
  { id: "ar-filters", title: "AR filters", type: "image" },
  { id: "sunsies", title: "Sunsies Studio", type: "text" },
];
