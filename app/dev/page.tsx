import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Developer Platform | SMF Works",
  description:
    "Build with SMF Works. Open-source tools, APIs, and documentation for AI agent orchestration and multi-agent workflows.",
  alternates: { canonical: "https://smfworks.com/dev" },
};

export default function DevLanding() {
  return (
    <div>
      {/* Hero */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-[#00D4FF]/10 text-[#00D4FF] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full border border-[#00D4FF]/20">
            Developer Platform
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Build with{" "}
          <span className="text-[#00D4FF]">SMF Works</span>
        </h1>
        <p className="text-xl text-[#94A3B8] max-w-2xl mb-8">
          Open-source tools and APIs for AI agent orchestration. Define, compose,
          and run multi-agent pipelines from the terminal. Built by developers who
          actually run production agent systems.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/dev/docs/smf-forge"
            className="bg-[#00D4FF] text-[#0A0F1F] px-6 py-3 rounded-lg font-semibold hover:bg-[#33E5FF] transition-colors shadow-sm shadow-[#00D4FF]/20"
          >
            Get Started with smf-forge
          </Link>
          <Link
            href="/dev/docs"
            className="border border-[#1e2a45] text-[#E2E8F0] px-6 py-3 rounded-lg font-semibold hover:border-[#00D4FF] hover:text-[#00D4FF] transition-colors"
          >
            Read the Docs
          </Link>
        </div>
      </section>

      {/* Quickstart */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Quickstart</h2>
        <div className="bg-[#131B2E] border border-[#1e2a45] rounded-xl p-6 font-mono text-sm">
          <div className="text-[#94A3B8] mb-2"># Install</div>
          <div className="text-[#00D4FF] mb-4">pip install smf-forge</div>
          <div className="text-[#94A3B8] mb-2"># Initialize a project</div>
          <div className="text-[#00D4FF] mb-4">smf-forge init --name my-project</div>
          <div className="text-[#94A3B8] mb-2"># Run a pipeline</div>
          <div className="text-[#00D4FF]">smf-forge run review --prompt &quot;Analyze this code&quot;</div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">What You Can Build</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#131B2E] border border-[#1e2a45] rounded-xl p-6 hover:border-[#00D4FF]/30 transition-colors">
            <div className="text-[#00D4FF] text-2xl mb-3">⚡</div>
            <h3 className="text-lg font-bold mb-2">Agent Pipelines</h3>
            <p className="text-[#94A3B8] text-sm">
              Define multi-step agent workflows in YAML. Steps run in dependency
              order with automatic parallel execution for independent tasks.
              Context passes seamlessly between steps.
            </p>
          </div>
          <div className="bg-[#131B2E] border border-[#1e2a45] rounded-xl p-6 hover:border-[#00D4FF]/30 transition-colors">
            <div className="text-[#00D4FF] text-2xl mb-3">🔌</div>
            <h3 className="text-lg font-bold mb-2">Built-in Agent Types</h3>
            <p className="text-[#94A3B8] text-sm">
              Echo, HTTP (OpenAI-compatible), shell, and transform agents out of
              the box. Subclass BaseAgent to create custom types for any
              integration.
            </p>
          </div>
          <div className="bg-[#131B2E] border border-[#1e2a45] rounded-xl p-6 hover:border-[#00D4FF]/30 transition-colors">
            <div className="text-[#00D4FF] text-2xl mb-3">🛡️</div>
            <h3 className="text-lg font-bold mb-2">Config Validation</h3>
            <p className="text-[#94A3B8] text-sm">
              Catch errors before running. Validate agent configs, pipeline DAGs,
              dependency cycles, and environment variable references with a single
              command.
            </p>
          </div>
          <div className="bg-[#131B2E] border border-[#1e2a45] rounded-xl p-6 hover:border-[#00D4FF]/30 transition-colors">
            <div className="text-[#00D4FF] text-2xl mb-3">🧩</div>
            <h3 className="text-lg font-bold mb-2">Extensible Architecture</h3>
            <p className="text-[#94A3B8] text-sm">
              Plugin custom agent types. Use Jinja2 templates for dynamic prompts.
              Resolve secrets from environment variables. Built for real
              production multi-agent systems.
            </p>
          </div>
        </div>
      </section>

      {/* Open Source Projects */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Open Source Projects</h2>
        <div className="bg-[#131B2E] border border-[#1e2a45] rounded-xl p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-[#00D4FF] mb-1">smf-forge</h3>
              <p className="text-sm text-[#94A3B8] mb-3">
                Lightweight multi-agent orchestration CLI. Define agents and
                pipelines in forge.yaml, then run them with dependency resolution
                and parallel execution.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="text-xs bg-[#0A1628] px-2 py-1 rounded text-[#94A3B8]">Python</span>
                <span className="text-xs bg-[#0A1628] px-2 py-1 rounded text-[#94A3B8]">CLI</span>
                <span className="text-xs bg-[#0A1628] px-2 py-1 rounded text-[#94A3B8]">MIT License</span>
              </div>
            </div>
            <Link
              href="https://github.com/smfworks/smf-multi-agent-orchestration-CLI"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 border border-[#1e2a45] text-[#94A3B8] px-4 py-2 rounded-lg text-sm hover:border-[#00D4FF] hover:text-[#00D4FF] transition-colors"
            >
              GitHub →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#131B2E] border border-[#00D4FF]/20 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-3">Ready to build?</h2>
        <p className="text-[#94A3B8] mb-6 max-w-lg mx-auto">
          Start building multi-agent systems in minutes. Read the docs, install
          the CLI, or explore the source code.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/dev/docs"
            className="bg-[#00D4FF] text-[#0A0F1F] px-6 py-3 rounded-lg font-semibold hover:bg-[#33E5FF] transition-colors"
          >
            Documentation
          </Link>
          <Link
            href="/dev/api-keys"
            className="border border-[#1e2a45] text-[#E2E8F0] px-6 py-3 rounded-lg font-semibold hover:border-[#00D4FF] hover:text-[#00D4FF] transition-colors"
          >
            Get API Keys
          </Link>
        </div>
      </section>
    </div>
  );
}