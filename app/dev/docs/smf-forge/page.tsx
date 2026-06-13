import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "smf-forge CLI | SMF Works Dev",
  description:
    "Complete documentation for smf-forge — lightweight multi-agent orchestration CLI. Install, configure agents, define pipelines, and run them.",
  alternates: { canonical: "https://smfworks.com/dev/docs/smf-forge" },
};

export default function SmfForgeDocs() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold mb-2">smf-forge CLI</h1>
      <p className="text-[#94A3B8] text-lg mb-8">
        Lightweight multi-agent orchestration — define, compose, and run AI
        agent pipelines from the terminal.
      </p>

      {/* Install */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 border-b border-[#1e2a45] pb-2">
          Installation
        </h2>
        <div className="bg-[#131B2E] border border-[#1e2a45] rounded-xl p-5 font-mono text-sm">
          <div className="text-[#94A3B8] mb-1"># From PyPI (when published)</div>
          <div className="text-[#00D4FF] mb-4">pip install smf-forge</div>
          <div className="text-[#94A3B8] mb-1"># From source</div>
          <div className="text-[#00D4FF]">git clone https://github.com/smfworks/smf-multi-agent-orchestration-CLI.git</div>
          <div className="text-[#00D4FF]">cd smf-multi-agent-orchestration-CLI</div>
          <div className="text-[#00D4FF]">pip install -e &quot;.[dev]&quot;</div>
        </div>
      </section>

      {/* Quickstart */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 border-b border-[#1e2a45] pb-2">
          Quickstart
        </h2>
        <div className="bg-[#131B2E] border border-[#1e2a45] rounded-xl p-5 font-mono text-sm space-y-4">
          <div>
            <div className="text-[#94A3B8] mb-1"># 1. Initialize a project</div>
            <div className="text-[#00D4FF]">smf-forge init --name my-project</div>
          </div>
          <div>
            <div className="text-[#94A3B8] mb-1"># 2. Edit forge.yaml to define agents and pipelines</div>
            <div className="text-[#00D4FF]">vim forge.yaml</div>
          </div>
          <div>
            <div className="text-[#94A3B8] mb-1"># 3. Validate your config</div>
            <div className="text-[#00D4FF]">smf-forge validate</div>
          </div>
          <div>
            <div className="text-[#94A3B8] mb-1"># 4. Run a pipeline</div>
            <div className="text-[#00D4FF]">smf-forge run my-pipeline --prompt &quot;Hello agents&quot;</div>
          </div>
        </div>
      </section>

      {/* CLI Reference */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 border-b border-[#1e2a45] pb-2">
          CLI Reference
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold text-[#00D4FF] mb-2">
              smf-forge init
            </h3>
            <p className="text-[#94A3B8] text-sm mb-2">
              Initialize a new project with a forge.yaml template.
            </p>
            <div className="bg-[#131B2E] border border-[#1e2a45] rounded-lg p-4 font-mono text-xs">
              <div className="text-[#E2E8F0]">smf-forge init --name my-project [--directory .]</div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-[#00D4FF] mb-2">
              smf-forge run
            </h3>
            <p className="text-[#94A3B8] text-sm mb-2">
              Execute a named pipeline.
            </p>
            <div className="bg-[#131B2E] border border-[#1e2a45] rounded-lg p-4 font-mono text-xs">
              <div className="text-[#E2E8F0]">smf-forge run PIPELINE [options]</div>
              <div className="text-[#94A3B8] mt-2">--prompt TEXT          Input prompt for the pipeline</div>
              <div className="text-[#94A3B8]">--config PATH          Path to forge.yaml</div>
              <div className="text-[#94A3B8]">--fail-fast/--continue-on-error  Stop on first failure (default: fail-fast)</div>
              <div className="text-[#94A3B8]">-v, --verbose         Show step outputs</div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-[#00D4FF] mb-2">
              smf-forge agents
            </h3>
            <p className="text-[#94A3B8] text-sm mb-2">
              List configured agents and their types.
            </p>
            <div className="bg-[#131B2E] border border-[#1e2a45] rounded-lg p-4 font-mono text-xs">
              <div className="text-[#E2E8F0]">smf-forge agents [--config PATH]</div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-[#00D4FF] mb-2">
              smf-forge pipelines
            </h3>
            <p className="text-[#94A3B8] text-sm mb-2">
              List configured pipelines and their step dependencies.
            </p>
            <div className="bg-[#131B2E] border border-[#1e2a45] rounded-lg p-4 font-mono text-xs">
              <div className="text-[#E2E8F0]">smf-forge pipelines [--config PATH]</div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-[#00D4FF] mb-2">
              smf-forge validate
            </h3>
            <p className="text-[#94A3B8] text-sm mb-2">
              Validate forge.yaml without running anything. Checks agent types,
              pipeline DAGs, dependency cycles, and duplicate step names.
            </p>
            <div className="bg-[#131B2E] border border-[#1e2a45] rounded-lg p-4 font-mono text-xs">
              <div className="text-[#E2E8F0]">smf-forge validate [--config PATH]</div>
            </div>
          </div>
        </div>
      </section>

      {/* Agent Types */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 border-b border-[#1e2a45] pb-2">
          Built-in Agent Types
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#1e2a45]">
                <th className="text-left py-2 pr-4 text-[#94A3B8]">Type</th>
                <th className="text-left py-2 pr-4 text-[#94A3B8]">Description</th>
                <th className="text-left py-2 text-[#94A3B8]">Key Config</th>
              </tr>
            </thead>
            <tbody className="text-[#E2E8F0]">
              <tr className="border-b border-[#1e2a45]/50">
                <td className="py-3 pr-4 font-mono text-[#00D4FF]">echo</td>
                <td className="py-3 pr-4 text-[#94A3B8]">Returns the input prompt. Useful for testing pipelines.</td>
                <td className="py-3 text-[#94A3B8]">—</td>
              </tr>
              <tr className="border-b border-[#1e2a45]/50">
                <td className="py-3 pr-4 font-mono text-[#00D4FF]">http</td>
                <td className="py-3 pr-4 text-[#94A3B8]">Calls an OpenAI-compatible chat completions endpoint.</td>
                <td className="py-3 text-[#94A3B8]">model, base_url, api_key</td>
              </tr>
              <tr className="border-b border-[#1e2a45]/50">
                <td className="py-3 pr-4 font-mono text-[#00D4FF]">shell</td>
                <td className="py-3 pr-4 text-[#94A3B8]">Runs a shell command and returns stdout/stderr.</td>
                <td className="py-3 text-[#94A3B8]">options.command</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-mono text-[#00D4FF]">transform</td>
                <td className="py-3 pr-4 text-[#94A3B8]">Applies a Jinja2 template to context data.</td>
                <td className="py-3 text-[#94A3B8]">options.template</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Config Reference */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 border-b border-[#1e2a45] pb-2">
          Configuration Reference
        </h2>

        <h3 className="text-lg font-bold text-[#00D4FF] mb-3">
          forge.yaml Structure
        </h3>
        <div className="bg-[#131B2E] border border-[#1e2a45] rounded-xl p-5 font-mono text-xs mb-6 overflow-x-auto">
          <pre className="text-[#E2E8F0]">{`project: my-project
version: "0.1.0"

agents:
  researcher:
    type: http
    model: gpt-4
    base_url: \${OPENAI_BASE_URL:https://api.openai.com/v1}
    api_key: \${OPENAI_API_KEY}
    system_prompt: "You are a research assistant."
    temperature: 0.3
    max_tokens: 4096

  summarizer:
    type: http
    model: gpt-4
    base_url: \${OPENAI_BASE_URL:https://api.openai.com/v1}
    api_key: \${OPENAI_API_KEY}
    system_prompt: "Summarize the following text concisely."

pipelines:
  research-summarize:
    name: research-summarize
    steps:
      - name: research
        agent: researcher
        prompt: "{{ prompt }}"

      - name: summarize
        agent: summarizer
        prompt: "Summarize this research:\\n{{ research.response }}"
        depends_on:
          - research`}</pre>
        </div>

        <h3 className="text-lg font-bold text-[#00D4FF] mb-3">
          Environment Variables
        </h3>
        <p className="text-[#94A3B8] text-sm mb-3">
          Use <code className="bg-[#0A1628] px-1.5 py-0.5 rounded text-[#00D4FF] text-xs font-mono">{"${VAR}"}</code> to
          resolve from environment (raises error if not set), or{" "}
          <code className="bg-[#0A1628] px-1.5 py-0.5 rounded text-[#00D4FF] text-xs font-mono">{"${VAR:default}"}</code> to
          provide a fallback value.
        </p>
        <div className="bg-[#131B2E] border border-[#1e2a45] rounded-xl p-5 font-mono text-xs overflow-x-auto">
          <pre className="text-[#E2E8F0]">{`api_key: \${OPENAI_API_KEY}               # Required — raises if not set
base_url: \${OPENAI_BASE_URL:https://api.openai.com/v1}  # Optional — defaults`}</pre>
        </div>
      </section>

      {/* Pipeline Execution */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 border-b border-[#1e2a45] pb-2">
          Pipeline Execution Model
        </h2>
        <p className="text-[#94A3B8] text-sm mb-4">
          Pipelines execute as DAGs. Steps with no dependencies run in parallel.
          Step outputs are available as template variables in downstream steps
          via Jinja2 rendering.
        </p>
        <div className="bg-[#131B2E] border border-[#1e2a45] rounded-xl p-5 font-mono text-xs overflow-x-auto">
          <pre className="text-[#E2E8F0]">{`# Parallel execution:
#   research ──┐
#              ├──→ summarize
#   validate ──┘

steps:
  - name: research
    agent: researcher
    prompt: "{{ prompt }}"
  - name: validate
    agent: echo
    prompt: "{{ prompt }}"
  - name: summarize
    agent: summarizer
    prompt: "Research: {{ research.response }}\\nValidation: {{ validate.echo }}"
    depends_on:
      - research
      - validate`}</pre>
        </div>

        <h3 className="text-lg font-bold text-[#00D4FF] mt-6 mb-3">
          Error Handling
        </h3>
        <div className="space-y-3 text-sm text-[#94A3B8]">
          <p>
            <strong className="text-[#E2E8F0]">Fail-fast</strong> (default): When a step
            fails, all remaining steps are marked SKIPPED and the pipeline exits
            with code 1.
          </p>
          <p>
            <strong className="text-[#E2E8F0]">Continue-on-error</strong>: All steps
            attempt to run regardless of prior failures. Use{" "}
            <code className="bg-[#0A1628] px-1.5 py-0.5 rounded text-[#00D4FF] text-xs font-mono">
              --continue-on-error
            </code>{" "}
            flag.
          </p>
        </div>
      </section>

      {/* Next */}
      <section className="bg-[#131B2E] border border-[#1e2a45] rounded-xl p-6">
        <h2 className="text-lg font-bold mb-2">Next Steps</h2>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/dev/docs/agent-dev"
            className="text-[#00D4FF] hover:text-[#33E5FF] text-sm transition-colors"
          >
            Agent Development Guide →
          </Link>
          <Link
            href="/dev/docs/api-reference"
            className="text-[#00D4FF] hover:text-[#33E5FF] text-sm transition-colors"
          >
            API Reference →
          </Link>
          <Link
            href="https://github.com/smfworks/smf-multi-agent-orchestration-CLI"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00D4FF] hover:text-[#33E5FF] text-sm transition-colors"
          >
            Source Code →
          </Link>
        </div>
      </section>
    </div>
  );
}