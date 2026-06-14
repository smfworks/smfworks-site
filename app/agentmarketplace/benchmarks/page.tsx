import { Metadata } from "next";
import BenchmarkLeaderboardClient from "@/components/BenchmarkLeaderboardClient";

export const metadata: Metadata = {
  title: "Benchmark Leaderboard — Agent Marketplace | SMF Works",
  description: "Community benchmark leaderboard comparing AI agents on coding, UI, and app-building tasks.",
};

const benchmarks = [
  { task: "SWE-bench Lite", agent: "Claude Code", agentHref: "/agentmarketplace/claude-code", score: 64, unit: "%", notes: "Resolved 64% of verified tasks in SMF Works test run." },
  { task: "SWE-bench Lite", agent: "OpenAI Codex", agentHref: "/agentmarketplace/openai-codex", score: 58, unit: "%", notes: "Strong pass rate on Python repository edits." },
  { task: "SWE-bench Lite", agent: "Cursor", agentHref: "/agentmarketplace/cursor", score: 52, unit: "%", notes: "Good in-editor iteration; some test-environment setup gaps." },
  { task: "UI Regression", agent: "Bolt.new", agentHref: "/agentmarketplace/bolt", score: 78, unit: "%", notes: "Found and patched responsive layout bug in one shot." },
  { task: "UI Regression", agent: "Lovable", agentHref: "/agentmarketplace/lovable", score: 71, unit: "%", notes: "Strong visual fix; minor prop-drilling regression." },
  { task: "UI Regression", agent: "v0", agentHref: "/agentmarketplace/v0", score: 68, unit: "%", notes: "Clean component output; required manual wiring." },
  { task: "Prompt-to-App", agent: "Bolt.new", agentHref: "/agentmarketplace/bolt", score: 82, unit: "%", notes: "Functional auth + database scaffold in under 10 prompts." },
  { task: "Prompt-to-App", agent: "Replit Agent", agentHref: "/agentmarketplace/replit-agent", score: 74, unit: "%", notes: "Working app with deploy; schema needed refinement." },
  { task: "Prompt-to-App", agent: "Lovable", agentHref: "/agentmarketplace/lovable", score: 70, unit: "%", notes: "Great UI; backend logic was shallow." },
];

export default function BenchmarkLeaderboardPage() {
  return <BenchmarkLeaderboardClient benchmarks={benchmarks} />;
}
