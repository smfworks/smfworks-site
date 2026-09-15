export type ServiceSku = "starter" | "standard" | "keepalive";

export interface ServicePackage {
  sku: ServiceSku;
  name: string;
  price: string;
  priceNote?: string;
  tagline: string;
  featured?: boolean;
  includes: string[];
  doesNotInclude: string[];
  timeline: string;
}

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    sku: "starter",
    name: "Starter",
    price: "$2,000",
    tagline:
      "Runtime working and one or two real jobs — without a long engagement.",
    includes: [
      "One runtime installed (Hermes on Omarchy or OpenClaw)",
      "Hardening minimums (dedicated agent user, secrets hygiene, kill switch)",
      "1–2 workflows tailored to your business",
      "Light handoff + short runbook",
      "Smoke tests passed with you on the call",
    ],
    doesNotInclude: [
      "Dogfood day with three live workflows",
      "30-day async support window (optional add-on: 14 days email bugfix, if agreed at kickoff)",
      "Channels beyond local desktop UI (one chat bridge only if already simple)",
    ],
    timeline: "Typical timeline: 2 days after kickoff access",
  },
  {
    sku: "standard",
    name: "Standard",
    price: "$3,500",
    tagline: "The main package. Install, tailor, dogfood, support.",
    featured: true,
    includes: [
      "One runtime installed (Hermes on Omarchy or OpenClaw)",
      "Hardening minimums + backup note on your media",
      "3 workflows tailored (trigger, steps, tools, refuse list)",
      "Up to 2 channels from the v1 menu (e.g. desktop + one chat bridge)",
      "One dogfood session — you run each workflow live; we fix obvious breaks",
      "One-page runbook",
      "30 days async support for what we installed (small skill tweaks OK; no new projects)",
    ],
    doesNotInclude: [
      "New projects or extra workflows beyond the three in scope",
      "OS rebuilds, hardware, or whole-staff training",
    ],
    timeline:
      "Typical timeline: 4 days after kickoff access (Day 0 kickoff → Day 4 handoff)",
  },
  {
    sku: "keepalive",
    name: "Keep-alive",
    price: "$300/mo",
    priceNote: "Optional after a Starter or Standard handoff.",
    tagline: "Keeps the install healthy. Not a new-project retainer.",
    includes: [
      "One scheduled checkup (uptime, autostart/gateway, secrets spot-check)",
      "Small skill/prompt tweaks for the workflows we already built",
      "Email/chat response on breakage of the installed stack",
    ],
    doesNotInclude: [
      "New workflows or new integrations",
      "OS rebuilds, hardware, or training your whole staff",
      "Unsupervised send/spend/post work",
    ],
    timeline:
      "Billed monthly. Cancel anytime before the next billing date. Requires an active Standard (or completed Starter upgraded with a support rider).",
  },
];

export const SERVICE_FIT = {
  good: [
    "Inbox triage drafts",
    "Appointment or quote follow-ups",
    "Internal research briefs",
    "Ops checklists",
    "Channel alerts",
  ],
  notV1: [
    "Medical advice",
    "Legal advice",
    'HIPAA / "compliance certified" products',
    "A custom software build",
  ],
};

export const SERVICE_NEEDS = [
  "Kickoff (Starter ~30 min · Standard 30–45 min)",
  "Dedicated agent OS account or supervised remote session — not your personal password dump",
  'Clear "done" for the workflows in scope',
  "Payment before install day starts",
];

export const SERVICE_BOUNDARIES = [
  "Decision support and automation assist — not professional advice",
  "You approve sends, payments, deletes, and anything that leaves your systems",
  "We do not keep standing admin after handoff unless you are on Keep-alive and explicitly agree",
  "Tool burn for cloud agents during a paid setup is included unless we agree otherwise in writing before kickoff",
];
