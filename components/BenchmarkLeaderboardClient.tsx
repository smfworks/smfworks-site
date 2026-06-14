"use client";

import { useState } from "react";

interface Benchmark {
  task: string;
  agent: string;
  agentHref: string;
  score: number;
  unit: string;
  notes: string;
}

interface Props {
  benchmarks: Benchmark[];
}

const categories = ["All", "SWE-bench", "UI Regression", "Prompt-to-App", "Doc Writing", "Local Inference"];

export default function BenchmarkLeaderboardClient({ benchmarks }: Props) {
  const [category, setCategory] = useState("All");
  const filtered = category === "All" ? benchmarks : benchmarks.filter((b) => b.task.includes(category));

  return (
    <div className="min-h-screen bg-forge-navy px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-extrabold text-text-primary md:text-5xl">Community Benchmark Leaderboard</h1>
        <p className="mt-4 text-lg text-muted">Comparative test results from SMF Works and the community.</p>

        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`rounded-full px-3 py-1 text-sm ${category === c ? "bg-data-cyan text-forge-navy" : "border border-forge-border text-muted hover:border-data-cyan"}`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-8 space-y-4">
          {filtered
            .sort((a, b) => b.score - a.score)
            .map((b, idx) => (
              <div key={`${b.task}-${b.agent}`} className="flex items-center gap-4 rounded-xl border border-forge-border bg-forge-card p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-forge-navy-deep text-sm font-bold text-data-cyan">
                  #{idx + 1}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-text-primary">
                      <a href={b.agentHref} className="hover:text-data-cyan">{b.agent}</a>
                    </span>
                    <span className="text-sm text-muted">{b.task}</span>
                  </div>
                  <div className="mt-1 flex items-center gap-2">
                    <div className="h-2 flex-1 rounded-full bg-forge-navy-deep">
                      <div
                        className="h-2 rounded-full bg-data-cyan"
                        style={{ width: `${Math.min(100, b.score)}%` }}
                      />
                    </div>
                    <span className="text-sm font-bold text-data-cyan">{b.score} {b.unit}</span>
                  </div>
                  <p className="mt-1 text-xs text-muted">{b.notes}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
