export type Service = {
  title: string;
  description: string;
  note?: { text: string; href: string };
};

export const SERVICES: Service[] = [
  {
    title: "Signal Scanning",
    description:
      "Tracking developments across AI, wearables, advanced interaction, and biotechnology to identify what will impact your category in the next 1-3 years.",
    note: {
      text: "View live project: signal-map-proxy",
      href: "https://signal-map-proxy-l25k.vercel.app/",
    },
  },
  {
    title: "Cultural Tension Mapping",
    description:
      "Analyzing how people actually interact with emerging tech. I decode the friction points (from aesthetic resistance to digital fatigue) to map out how a brand should engage.",
  },
  {
    title: "Positioning Territories",
    description:
      "Translating abstract signals into actionable brand concepts. I build the experience frameworks and narratives that allow brands to confidently step into new spaces.",
  },
  {
    title: "Innovation Audits",
    description:
      "A practical diagnostic of your current emerging tech initiatives, aligning your digital roadmap with real cultural shifts and behavioral data.",
  },
];

export type TrajectoryItem = {
  label: string;
  description: string;
};

export const TRAJECTORY: TrajectoryItem[] = [
  {
    label: "Aesthetic Foundation",
    description:
      "A degree in Graphic Design & Visual Communication (BAU) focused on how culture communicates and signals through visual language.",
  },
  {
    label: "Interaction Forensics",
    description:
      "A Master's in Advanced Interaction (IAAC) exploring how humans connect with hardware, wearables, and spatial environments.",
  },
  {
    label: "Systems & Material Culture",
    description:
      "Over six years as a Senior Product Designer inside corporate tech infrastructures, combined with hands-on experimentation in 3D manufacturing, digital identity, and independent brand launches.",
  },
];

export type Practice = {
  id: string;
  eyebrow: string;
  title: string;
  role: string;
  paragraph: string;
  impact: string;
  featured?: boolean;
};

export const FEATURED_PRACTICE: Practice[] = [
  {
    id: "sunsies",
    eyebrow: "Independent Venture · Sunsies Studio",
    title: "Material Culture & Dopamine Design",
    role: "Founder & Creative Director",
    paragraph:
      "Launched last year as a physical-digital experiment, Sunsies Studio explores the intersection of 3D printing and material trend forecasting. The brand takes classic, vintage-inspired home decor profiles and reinterprets them through highly colorful, eclectic \"dopamine design\" aesthetics.",
    impact:
      "A live playground for testing on-demand digital manufacturing, modern color theory, and next-gen commerce systems.",
  },
  {
    id: "guestline",
    eyebrow: "Research-Led Product Strategy · Guestline",
    title: "Systems Design & Behavioral Friction",
    role: "Lead Strategy & Product Research",
    paragraph:
      "An end-to-end strategic audit of the physical and digital guest journey. Unifying physical kiosks, web portals, and booking engines into a single connected ecosystem by analyzing micro-interactions and spatial friction.",
    impact:
      "Reduced check-in times by 35% and accelerated digital self-service adoption from 30% to 50% across 3,500+ properties.",
  },
  {
    id: "emotional-privacy",
    eyebrow: "IAAC Master in Advanced Interaction",
    title: "The End of Emotional Privacy",
    role: "Researcher, Experience Designer & Programmer",
    paragraph:
      "A wearable technology prototype that reads biometrics and broadcasts internal states as visual emotion. An exploration into the future of biological data, questioning privacy boundaries as biometrics become external.",
    impact:
      "Exhibited at Barcelona's DHUB design museum; covered by Spanish national television and press.",
  },
  {
    id: "beincrypto",
    eyebrow: "Audience Research & Rebrand · BeInCrypto",
    title: "Decoding Digital Subcultures",
    role: "Design Strategy Lead",
    paragraph:
      "Mapping the behavioral archetypes of user interactions in Web3 through workshops and a 30-person usability study, translating specialized digital subcultures into an accessible global platform identity.",
    impact: "Restructured the digital identity system across 12 languages.",
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
    id: "bmw",
    title: "BMW Retail Lab 2.0",
    role: "CX Designer @ rpc",
    note:
      "Co-designed a live prototyping showroom testing 8 future-facing connected touchpoints bridging the home-to-dealership journey.",
  },
  {
    id: "augmented-identity",
    title: "Augmented Identity",
    role: "Self-Initiated AR Filters",
    note:
      "Prototyping micro-interactions and digital self-expression using Spark AR, including custom lipstick try-ons and community tools.",
  },
  {
    id: "quanos",
    title: "Quanos",
    role: "Brand Architect @ rpc",
    note:
      "Brand strategy and structural identity system for the merger of TID and Docware under the Schema Group.",
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
  { id: "sunsies", title: "Sunsies Studio", type: "text" },
  { id: "guestline", title: "Guestline", type: "image" },
  { id: "emotional-privacy", title: "The End of Emotional Privacy", type: "image" },
  { id: "beincrypto", title: "BeInCrypto", type: "image" },
  { id: "bmw", title: "BMW Retail Lab", type: "image" },
  { id: "augmented-identity", title: "Augmented Identity", type: "text" },
  { id: "quanos", title: "Quanos", type: "text" },
];
