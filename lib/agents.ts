export type AgentModel =
  | "Claude 4 Sonnet"
  | "Claude 3.7 Sonnet"
  | "GPT-4o"
  | "OpenAI Codex"
  | "o3-mini"
  | "DeepSeek V3"
  | "Gemini 2.5 Pro"
  | "GLM-4"
  | "Model-agnostic"
  | "OpenAI-compatible";

export type AgentPricing = "Free" | "Paid" | "Freemium" | "Open Source";

export type AgentRuntime = "Local" | "Cloud" | "Hybrid";

export interface AgentProfile {
  id: string;
  name: string;
  tagline: string;
  description: string;
  website: string;
  repository?: string;
  logo?: string;
  categories: string[];
  pricing: AgentPricing;
  runtime: AgentRuntime;
  openSource: boolean;
  multiPlatform: boolean;
  providerAgnostic: boolean;
  model?: string;
  platforms: string[];
  features: string[];
  releaseYear: number;
  company: string;
}

export const agents: AgentProfile[] = [
  {
    id: "hermes-agent",
    name: "Hermes Agent",
    tagline: "The open-source autonomous agent that improves through skills and memory.",
    description:
      "Hermes Agent by Nous Research is a provider-agnostic autonomous coding and task-execution agent that runs in your terminal, messaging apps, and IDE. It learns from experience by saving reusable skills, persists memory across sessions, supports 20+ LLM providers, and connects to Telegram, Discord, Slack, WhatsApp, and more.",
    website: "https://hermes-agent.nousresearch.com",
    repository: "https://github.com/NousResearch/hermes-agent",
    categories: ["Coding", "General Purpose", "Multi-Platform", "Open Source"],
    pricing: "Open Source",
    runtime: "Hybrid",
    openSource: true,
    multiPlatform: true,
    providerAgnostic: true,
    model: "Model-agnostic",
    platforms: ["CLI", "Telegram", "Discord", "Slack", "Email", "IDE"],
    features: [
      "Self-improving skills system",
      "Persistent cross-session memory",
      "20+ LLM providers",
      "Messaging gateway for 10+ platforms",
      "Cron scheduling and webhooks",
      "MCP server integration",
    ],
    releaseYear: 2025,
    company: "Nous Research",
  },
  {
    id: "claude-code",
    name: "Claude Code",
    tagline: "Anthropic's official coding agent for the terminal.",
    description:
      "Claude Code is Anthropic's agentic coding tool that lives in your terminal. It understands large codebases, runs commands, edits files, and integrates with your existing workflow. Built specifically for software engineering tasks.",
    website: "https://docs.anthropic.com/en/docs/claude-code/overview",
    categories: ["Coding", "Terminal", "Proprietary"],
    pricing: "Paid",
    runtime: "Cloud",
    openSource: false,
    multiPlatform: false,
    providerAgnostic: false,
    model: "Claude 4 Sonnet",
    platforms: ["CLI"],
    features: [
      "Natural language codebase understanding",
      "Terminal command execution",
      "Git integration",
      "IDE extension support",
      "Autonomous task planning",
    ],
    releaseYear: 2025,
    company: "Anthropic",
  },
  {
    id: "openai-codex",
    name: "OpenAI Codex CLI",
    tagline: "OpenAI's agentic coding assistant in your terminal.",
    description:
      "Codex CLI is OpenAI's command-line coding agent. It writes, edits, and debugs code from natural language prompts, with deep integration into the OpenAI model ecosystem.",
    website: "https://github.com/openai/codex",
    categories: ["Coding", "Terminal", "Proprietary"],
    pricing: "Freemium",
    runtime: "Cloud",
    openSource: false,
    multiPlatform: false,
    providerAgnostic: false,
    model: "OpenAI Codex",
    platforms: ["CLI"],
    features: [
      "Agentic code editing",
      "Sandboxed code execution",
      "Natural language debugging",
      "Git-aware operations",
      "Multi-file reasoning",
    ],
    releaseYear: 2025,
    company: "OpenAI",
  },
  {
    id: "github-copilot",
    name: "GitHub Copilot",
    tagline: "The AI pair programmer used by millions of developers.",
    description:
      "GitHub Copilot provides AI-powered code completion, chat, and agentic coding features inside IDEs. Its newer agent mode can perform multi-step coding tasks autonomously.",
    website: "https://github.com/features/copilot",
    categories: ["Coding", "IDE", "Proprietary"],
    pricing: "Freemium",
    runtime: "Cloud",
    openSource: false,
    multiPlatform: false,
    providerAgnostic: false,
    model: "GPT-4o",
    platforms: ["IDE", "CLI"],
    features: [
      "Inline code completion",
      "Copilot Chat",
      "Agent mode for multi-step tasks",
      "IDE integration",
      "GitHub-native workflows",
    ],
    releaseYear: 2021,
    company: "GitHub / Microsoft",
  },
  {
    id: "openhands",
    name: "OpenHands",
    tagline: "Open-source agentic software development powered by the community.",
    description:
      "OpenHands is an open-source platform for building and running autonomous AI agents for software development. It is model-agnostic via LiteLLM and designed for research and practical engineering tasks.",
    website: "https://www.all-hands.dev",
    repository: "https://github.com/All-Hands-AI/OpenHands",
    categories: ["Coding", "Research", "Open Source"],
    pricing: "Open Source",
    runtime: "Hybrid",
    openSource: true,
    multiPlatform: true,
    providerAgnostic: true,
    model: "Model-agnostic",
    platforms: ["Web", "CLI", "API"],
    features: [
      "Model-agnostic via LiteLLM",
      "Sandboxed execution environment",
      "Multi-step planning and debugging",
      "Extensible agent architecture",
      "Active open-source community",
    ],
    releaseYear: 2024,
    company: "All Hands AI",
  },
  {
    id: "openclaw",
    name: "OpenClaw",
    tagline: "Hermes-compatible autonomous agent swarm runtime.",
    description:
      "OpenClaw is a runtime and orchestration layer for running multiple Hermes-compatible agents as a swarm. It focuses on multi-agent coordination, fleet management, and long-running autonomous missions.",
    website: "https://hermes-agent.nousresearch.com",
    categories: ["Multi-Agent", "Orchestration", "Open Source"],
    pricing: "Open Source",
    runtime: "Hybrid",
    openSource: true,
    multiPlatform: true,
    providerAgnostic: true,
    model: "Model-agnostic",
    platforms: ["CLI", "API"],
    features: [
      "Hermes-compatible agent runtime",
      "Multi-agent fleet management",
      "Swarm orchestration",
      "Long-running missions",
      "Plugin-based extensions",
    ],
    releaseYear: 2025,
    company: "OpenClaw Community",
  },
  {
    id: "cursor",
    name: "Cursor",
    tagline: "The AI-first code editor built on VS Code.",
    description:
      "Cursor is a code editor that embeds AI deeply into the development workflow. It offers tab-based predictions, chat, and composer features for writing and editing code across entire projects.",
    website: "https://www.cursor.com",
    categories: ["Coding", "IDE", "Proprietary"],
    pricing: "Freemium",
    runtime: "Cloud",
    openSource: false,
    multiPlatform: false,
    providerAgnostic: false,
    model: "Claude 3.7 Sonnet",
    platforms: ["IDE"],
    features: [
      "AI-native code editor",
      "Composer for multi-file edits",
      "Tab-based code predictions",
      "Context-aware chat",
      "VS Code extension compatibility",
    ],
    releaseYear: 2023,
    company: "Anysphere",
  },
  {
    id: "windsurf",
    name: "Windsurf",
    tagline: "Agentic IDE by Codeium with cascade workflows.",
    description:
      "Windsurf is an AI-native IDE that combines editor intelligence with agentic cascade workflows. It is designed for end-to-end software engineering assistance inside a single environment.",
    website: "https://windsurf.com",
    categories: ["Coding", "IDE", "Proprietary"],
    pricing: "Freemium",
    runtime: "Cloud",
    openSource: false,
    multiPlatform: false,
    providerAgnostic: false,
    model: "Model-agnostic",
    platforms: ["IDE"],
    features: [
      "Cascade agentic workflows",
      "AI-native editor",
      "Multi-file reasoning",
      "Inline predictions",
      "Terminal integration",
    ],
    releaseYear: 2024,
    company: "Codeium",
  },
  {
    id: "aider",
    name: "Aider",
    tagline: "AI pair programming in your terminal with git integration.",
    description:
      "Aider is a command-line AI coding assistant that edits code in your local git repository. It supports multiple models and is known for its deep git integration and multi-file editing capabilities.",
    website: "https://aider.chat",
    repository: "https://github.com/Aider-AI/aider",
    categories: ["Coding", "Terminal", "Open Source"],
    pricing: "Open Source",
    runtime: "Local",
    openSource: true,
    multiPlatform: false,
    providerAgnostic: true,
    model: "Model-agnostic",
    platforms: ["CLI"],
    features: [
      "Git-native editing workflow",
      "Multi-file edits",
      "Supports many LLM providers",
      "Voice coding support",
      "Architect and editor model modes",
    ],
    releaseYear: 2023,
    company: "Aider AI",
  },
  {
    id: "devin",
    name: "Devin",
    tagline: "The first fully autonomous AI software engineer.",
    description:
      "Devin by Cognition Labs is designed to handle entire software engineering projects end-to-end. It plans, writes code, debugs, and deploys in its own sandboxed environment.",
    website: "https://www.cognition.ai",
    categories: ["Coding", "Full-Stack", "Proprietary"],
    pricing: "Paid",
    runtime: "Cloud",
    openSource: false,
    multiPlatform: false,
    providerAgnostic: false,
    model: "o3-mini",
    platforms: ["Web"],
    features: [
      "End-to-end project execution",
      "Sandboxed cloud environment",
      "Autonomous planning and debugging",
      "Code review and PR creation",
      "Long-running tasks",
    ],
    releaseYear: 2024,
    company: "Cognition Labs",
  },
];

export const categories = Array.from(new Set(agents.flatMap((a) => a.categories))).sort();
export const runtimes: AgentRuntime[] = ["Local", "Cloud", "Hybrid"];
export const pricings: AgentPricing[] = ["Free", "Paid", "Freemium", "Open Source"];
export const platforms = Array.from(new Set(agents.flatMap((a) => a.platforms))).sort();
