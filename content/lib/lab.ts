/** Livemode Stripe Payment Link — voluntary support, not a product SKU. */
export const SUPPORT_THE_LAB_URL =
  "https://donate.stripe.com/14A6oGbHv3hHekY2ODew801";

export interface Surface {
  name: string;
  oneLiner: string;
  href: string;
  status: string;
  external?: boolean;
}

export interface Accomplishment {
  title: string;
  date?: string;
  oneLiner: string;
  href: string;
  source: string;
}

export interface AmazonBook {
  title: string;
  oneLiner: string;
  href: string;
}

/** Public brand surfaces for the homepage grid. Live links only. */
export const SURFACES: Surface[] = [
  {
    name: "Clearinghouse",
    oneLiner:
      "Practitioner research: agents, models, benchmarks, and field notes. Research stays here — not on this umbrella site.",
    href: "https://www.smfclearinghouse.com/",
    status: "Live",
    external: true,
  },
  {
    name: "WisdomForge",
    oneLiner:
      "Parent-operated academy for the age of AI. Booklets, audio, and lessons — the parent is the teacher, not a kids chatbot.",
    href: "https://smfwisdomforge.com",
    status: "Live",
    external: true,
  },
  {
    name: "Hermes",
    oneLiner:
      "Open agent runtime work: Hermes-on-Omarchy, skills, plugins, and install guides we actually run.",
    href: "https://github.com/smfworks/hermes-omarchy",
    status: "Open",
    external: true,
  },
  {
    name: "Praxis",
    oneLiner:
      "A governed autonomous colleague — charter, scope of practice, and human review for consequential acts.",
    href: "https://github.com/smfworks/smf-praxis",
    status: "Experiment",
    external: true,
  },
  {
    name: "SMF AI Weekly",
    oneLiner:
      "One letter a week: what we built, what broke, and what changed our minds. Public archive on this site.",
    href: "/newsletter",
    status: "Weekly",
  },
  {
    name: "Books",
    oneLiner:
      "Direct-from-author titles on agents, enterprise AI, and Hermes — plus a Stripe storefront for future drops.",
    href: "/books",
    status: "Published",
  },
];

/**
 * Recent shipped work with public links. Dates taken from repo activity
 * and on-site lab notes — no invented metrics or ROI.
 */
export const ACCOMPLISHMENTS: Accomplishment[] = [
  {
    title: "Hermes on Omarchy",
    date: "2026",
    oneLiner:
      "Reusable Hermes ↔ Omarchy boot: Ollama user unit and desktop autostart so the agent comes up with the machine.",
    href: "https://github.com/smfworks/hermes-omarchy",
    source: "GitHub",
  },
  {
    title: "LAR — local agent resilience",
    date: "Aug 2026",
    oneLiner:
      "Open reference for resilient Linux agents. Hardening wave closed with what actually landed on main — importable, tested, honest.",
    href: "https://github.com/smfworks/lar-agent-resilience",
    source: "GitHub",
  },
  {
    title: "Hermes AI team / org map",
    date: "2026",
    oneLiner:
      "Phase-by-phase guide to a Hermes team: SOUL, memory, vault, skills, kanban, chief of staff, and desktop group chats.",
    href: "https://github.com/smfworks/hermes-ai-team",
    source: "GitHub",
  },
  {
    title: "Flybrain visual demos",
    date: "2026",
    oneLiner:
      "Visual demos for the digital Drosophila connectome — public preview builds before publish.",
    href: "https://github.com/smfworks/flybrain-visual-demos",
    source: "GitHub",
  },
  {
    title: "WisdomForge booklets",
    date: "2026",
    oneLiner:
      "Stoic curriculum live for four age bands — Epictetus, Marcus Aurelius, Seneca, Zeno. Free PDFs, parent-operated.",
    href: "https://smfwisdomforge.com",
    source: "WisdomForge",
  },
  {
    title: "Clearinghouse + weekly + X",
    date: "Sep 2026",
    oneLiner:
      "Research published at the Clearinghouse; SMF AI Weekly through Issue #24; field notes on X @MichaelGannotti.",
    href: "https://www.smfclearinghouse.com/",
    source: "Public",
  },
];

export const AMAZON_BOOKS: AmazonBook[] = [
  {
    title: "The Age of Orchestration",
    oneLiner: "How AI agents are reshaping organizations.",
    href: "https://www.amazon.com/dp/B0F565Y7B3",
  },
  {
    title: "Enterprise AI Transformation",
    oneLiner: "Enterprise AI as an organizational problem, not a tooling problem.",
    href: "https://www.amazon.com/dp/B0GX73NN5F",
  },
  {
    title: "Hermes AI for Beginners",
    oneLiner: "Self-hosted agents that act — files, terminal, browser, memory.",
    href: "https://www.amazon.com/dp/B0GXQQ7ZCK",
  },
];

export interface WorkItem {
  name: string;
  tagline: string;
  description: string;
  href: string;
  status: string;
  group: "surfaces" | "tools" | "books";
}

/** Catalog for /work — public links only, no coming-soon placeholders. */
export const WORK_ITEMS: WorkItem[] = [
  {
    name: "AI Clearinghouse",
    tagline: "Research site",
    description:
      "Independent practitioner research: agents, models, evals, and field notes. Canonical research lives here, not on smfworks.com.",
    href: "https://www.smfclearinghouse.com/",
    status: "Live",
    group: "surfaces",
  },
  {
    name: "WisdomForge",
    tagline: "Parent-operated academy",
    description:
      "Philosophy and classical learning for four age bands. Booklets and audio — the parent teaches; there is no hosted kids chatbot.",
    href: "https://smfwisdomforge.com",
    status: "Live",
    group: "surfaces",
  },
  {
    name: "Praxis",
    tagline: "Governed autonomy",
    description:
      "Experimental colleague with a charter and human review for consequential acts. Early, public, honest about rough edges.",
    href: "https://github.com/smfworks/smf-praxis",
    status: "Experiment",
    group: "surfaces",
  },
  {
    name: "SMF AI Weekly",
    tagline: "Lab notebook",
    description:
      "Weekly public letter from the lab. Archive on this site; research long-form stays on the Clearinghouse.",
    href: "/newsletter",
    status: "Weekly",
    group: "surfaces",
  },
  {
    name: "Hermes on Omarchy",
    tagline: "Agent boot integration",
    description:
      "Ollama user unit plus Hermes desktop autostart — the primary stack we install for Agent Setup.",
    href: "https://github.com/smfworks/hermes-omarchy",
    status: "Open",
    group: "tools",
  },
  {
    name: "LAR",
    tagline: "Local agent resilience",
    description:
      "Production-oriented open reference for resilient agent design on Linux, including the August 2026 hardening pass.",
    href: "https://github.com/smfworks/lar-agent-resilience",
    status: "Open",
    group: "tools",
  },
  {
    name: "Hermes AI team",
    tagline: "Org map & install guide",
    description:
      "Build a Hermes team: SOUL, memory, vault, skills, nightly research, kanban, chief of staff, desktop bots.",
    href: "https://github.com/smfworks/hermes-ai-team",
    status: "Open",
    group: "tools",
  },
  {
    name: "Flybrain visual demos",
    tagline: "Connectome previews",
    description:
      "Visual demos for the digital Drosophila connectome. Preview builds before publish.",
    href: "https://github.com/smfworks/flybrain-visual-demos",
    status: "Open",
    group: "tools",
  },
  {
    name: "M365 access broker",
    tagline: "Graph action gate",
    description:
      "Local control plane that gates every Microsoft Graph action an agent takes — auth, scopes, allowlists, approval, audit.",
    href: "https://github.com/smfworks/m365-access-broker",
    status: "Open",
    group: "tools",
  },
  {
    name: "Mnemosyne",
    tagline: "Local memory plugin",
    description:
      "Offline SQLite memory for OpenClaw/Hermes-class agents. Zero network, zero API keys, FTS5 search.",
    href: "https://github.com/smfworks/mnemosyne-openclaw",
    status: "Open",
    group: "tools",
  },
  {
    name: "SMF Swarm 2.0",
    tagline: "Governed multi-persona analysis",
    description:
      "Open-source, governance-first multi-persona predictive analysis. Commercial verticals stay private.",
    href: "https://github.com/smfworks/smf-swarm-2.0",
    status: "Open",
    group: "tools",
  },
  {
    name: "SMF Forgewright",
    tagline: "Browser workflow workbench",
    description:
      "Package reproducible browser workflows with a local tuning loop any assistant can run, score, and deploy.",
    href: "https://github.com/smfworks/smf-forgewright",
    status: "Open",
    group: "tools",
  },
  {
    name: "Hermes Hub",
    tagline: "Web chat for Hermes",
    description:
      "Multi-profile web chat UI with retry, session persistence, cancellation, and health monitoring.",
    href: "https://github.com/smfworks/smf-hermes-chat-hub",
    status: "Open",
    group: "tools",
  },
  {
    name: "SkillTrain",
    tagline: "Skill optimizer",
    description:
      "Treat SKILL.md files as trainable parameters: rollout, score, reflect, edit, validate, deploy.",
    href: "https://github.com/smfworks/smf-SkillTrain",
    status: "Open",
    group: "tools",
  },
  {
    name: "SMF Bench",
    tagline: "Model benchmarks",
    description:
      "Standardized benchmark testing for models we actually run — numbers with the messy setup included.",
    href: "https://github.com/smfworks/smf-bench",
    status: "Open",
    group: "tools",
  },
  {
    name: "The Age of Orchestration",
    tagline: "Book",
    description: "How AI agents are reshaping organizations — for operators, not procurement decks.",
    href: "https://www.amazon.com/dp/B0F565Y7B3",
    status: "Published",
    group: "books",
  },
  {
    name: "Enterprise AI Transformation",
    tagline: "Book",
    description:
      "Why most enterprises run AI pilots and few capture value — index, 90-day playbook, governance.",
    href: "https://www.amazon.com/dp/B0GX73NN5F",
    status: "Published",
    group: "books",
  },
  {
    name: "Hermes AI for Beginners",
    tagline: "Book",
    description:
      "Open-source agents that persist and act: files, terminal, browser, scheduled work, local memory.",
    href: "https://www.amazon.com/dp/B0GXQQ7ZCK",
    status: "Published",
    group: "books",
  },
];

export const PROOF_ITEMS = [
  {
    label: "Clearinghouse",
    detail: "Live research",
    href: "https://www.smfclearinghouse.com/",
    external: true,
  },
  {
    label: "WisdomForge",
    detail: "Live academy",
    href: "https://smfwisdomforge.com",
    external: true,
  },
  {
    label: "SMF AI Weekly",
    detail: "Issue #24",
    href: "/newsletter",
    external: false,
  },
  {
    label: "Open tools",
    detail: "github.com/smfworks",
    href: "https://github.com/smfworks",
    external: true,
  },
  {
    label: "X",
    detail: "@MichaelGannotti",
    href: "https://x.com/MichaelGannotti",
    external: true,
  },
] as const;
