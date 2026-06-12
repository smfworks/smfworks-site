import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "API Reference | SMF Works Dev",
  description:
    "Complete API reference for smf-forge agent types, pipeline configuration, and engine internals.",
  alternates: { canonical: "https://smfworks.com/dev/docs/api-reference" },
};

export default function ApiReference() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold mb-2">API Reference</h1>
      <p className="text-[#94A3B8] text-lg mb-8">
        Complete reference for smf-forge agent types, configuration schema, and
        engine internals.
      </p>

      {/* AgentConfig */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 border-b border-[#1e2a45] pb-2">
          AgentConfig
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#1e2a45]">
                <th className="text-left py-2 pr-4 text-[#94A3B8]">Field</th>
                <th className="text-left py-2 pr-4 text-[#94A3B8]">Type</th>
                <th className="text-left py-2 pr-4 text-[#94A3B8]">Default</th>
                <th className="text-left py-2 text-[#94A3B8]">Description</th>
              </tr>
            </thead>
            <tbody className="text-[#E2E8F0]">
              <tr className="border-b border-[#1e2a45]/50">
                <td className="py-3 pr-4 font-mono text-[#00D4FF] text-xs">name</td>
                <td className="py-3 pr-4 text-[#94A3B8] text-xs">str</td>
                <td className="py-3 pr-4 text-[#94A3B8] text-xs">required</td>
                <td className="py-3 text-[#94A3B8] text-xs">Unique agent identifier</td>
              </tr>
              <tr className="border-b border-[#1e2a45]/50">
                <td className="py-3 pr-4 font-mono text-[#00D4FF] text-xs">type</td>
                <td className="py-3 pr-4 text-[#94A3B8] text-xs">str</td>
                <td className="py-3 pr-4 text-[#94A3B8] text-xs">&quot;echo&quot;</td>
                <td className="py-3 text-[#94A3B8] text-xs">Agent type name (echo, http, shell, transform, or custom)</td>
              </tr>
              <tr className="border-b border-[#1e2a45]/50">
                <td className="py-3 pr-4 font-mono text-[#00D4FF] text-xs">model</td>
                <td className="py-3 pr-4 text-[#94A3B8] text-xs">str | None</td>
                <td className="py-3 pr-4 text-[#94A3B8] text-xs">None</td>
                <td className="py-3 text-[#94A3B8] text-xs">LLM model name (for http type)</td>
              </tr>
              <tr className="border-b border-[#1e2a45]/50">
                <td className="py-3 pr-4 font-mono text-[#00D4FF] text-xs">provider</td>
                <td className="py-3 pr-4 text-[#94A3B8] text-xs">str | None</td>
                <td className="py-3 pr-4 text-[#94A3B8] text-xs">None</td>
                <td className="py-3 text-[#94A3B8] text-xs">Provider identifier</td>
              </tr>
              <tr className="border-b border-[#1e2a45]/50">
                <td className="py-3 pr-4 font-mono text-[#00D4FF] text-xs">base_url</td>
                <td className="py-3 pr-4 text-[#94A3B8] text-xs">str | None</td>
                <td className="py-3 pr-4 text-[#94A3B8] text-xs">None</td>
                <td className="py-3 text-[#94A3B8] text-xs">API base URL (for http type)</td>
              </tr>
              <tr className="border-b border-[#1e2a45]/50">
                <td className="py-3 pr-4 font-mono text-[#00D4FF] text-xs">api_key</td>
                <td className="py-3 pr-4 text-[#94A3B8] text-xs">str | None</td>
                <td className="py-3 pr-4 text-[#94A3B8] text-xs">None</td>
                <td className="py-3 text-[#94A3B8] text-xs">API key (supports env var resolution)</td>
              </tr>
              <tr className="border-b border-[#1e2a45]/50">
                <td className="py-3 pr-4 font-mono text-[#00D4FF] text-xs">system_prompt</td>
                <td className="py-3 pr-4 text-[#94A3B8] text-xs">str</td>
                <td className="py-3 pr-4 text-[#94A3B8] text-xs">&quot;&quot;</td>
                <td className="py-3 text-[#94A3B8] text-xs">System prompt for the LLM</td>
              </tr>
              <tr className="border-b border-[#1e2a45]/50">
                <td className="py-3 pr-4 font-mono text-[#00D4FF] text-xs">temperature</td>
                <td className="py-3 pr-4 text-[#94A3B8] text-xs">float</td>
                <td className="py-3 pr-4 text-[#94A3B8] text-xs">0.7</td>
                <td className="py-3 text-[#94A3B8] text-xs">Sampling temperature</td>
              </tr>
              <tr className="border-b border-[#1e2a45]/50">
                <td className="py-3 pr-4 font-mono text-[#00D4FF] text-xs">max_tokens</td>
                <td className="py-3 pr-4 text-[#94A3B8] text-xs">int</td>
                <td className="py-3 pr-4 text-[#94A3B8] text-xs">4096</td>
                <td className="py-3 text-[#94A3B8] text-xs">Maximum response tokens</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-mono text-[#00D4FF] text-xs">options</td>
                <td className="py-3 pr-4 text-[#94A3B8] text-xs">dict</td>
                <td className="py-3 pr-4 text-[#94A3B8] text-xs">{"{}"}</td>
                <td className="py-3 text-[#94A3B8] text-xs">Type-specific configuration options</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Pipeline Step */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 border-b border-[#1e2a45] pb-2">
          Pipeline Step Configuration
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#1e2a45]">
                <th className="text-left py-2 pr-4 text-[#94A3B8]">Field</th>
                <th className="text-left py-2 pr-4 text-[#94A3B8]">Type</th>
                <th className="text-left py-2 pr-4 text-[#94A3B8]">Required</th>
                <th className="text-left py-2 text-[#94A3B8]">Description</th>
              </tr>
            </thead>
            <tbody className="text-[#E2E8F0]">
              <tr className="border-b border-[#1e2a45]/50">
                <td className="py-3 pr-4 font-mono text-[#00D4FF] text-xs">name</td>
                <td className="py-3 pr-4 text-[#94A3B8] text-xs">str</td>
                <td className="py-3 pr-4 text-[#94A3B8] text-xs">Yes</td>
                <td className="py-3 text-[#94A3B8] text-xs">Unique step name (used as context key for downstream steps)</td>
              </tr>
              <tr className="border-b border-[#1e2a45]/50">
                <td className="py-3 pr-4 font-mono text-[#00D4FF] text-xs">agent</td>
                <td className="py-3 pr-4 text-[#94A3B8] text-xs">str</td>
                <td className="py-3 pr-4 text-[#94A3B8] text-xs">Yes</td>
                <td className="py-3 text-[#94A3B8] text-xs">Agent name reference from the agents section</td>
              </tr>
              <tr className="border-b border-[#1e2a45]/50">
                <td className="py-3 pr-4 font-mono text-[#00D4FF] text-xs">prompt</td>
                <td className="py-3 pr-4 text-[#94A3B8] text-xs">str</td>
                <td className="py-3 pr-4 text-[#94A3B8] text-xs">No</td>
                <td className="py-3 text-[#94A3B8] text-xs">Jinja2 template for the prompt. Context variables available.</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-mono text-[#00D4FF] text-xs">depends_on</td>
                <td className="py-3 pr-4 text-[#94A3B8] text-xs">list[str]</td>
                <td className="py-3 pr-4 text-[#94A3B8] text-xs">No</td>
                <td className="py-3 text-[#94A3B8] text-xs">List of step names this step depends on</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Engine API */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 border-b border-[#1e2a45] pb-2">
          PipelineEngine
        </h2>
        <div className="bg-[#131B2E] border border-[#1e2a45] rounded-xl p-5 font-mono text-xs overflow-x-auto">
          <pre className="text-[#E2E8F0]">{`class PipelineEngine:
    def __init__(self, fail_fast: bool = True, verbose: bool = False)

    async def run(
        self,
        pipeline: dict,           # Pipeline config with 'name' and 'steps'
        agent_registry: dict,     # Map of agent_name -> BaseAgent instance
        initial_context: dict | None = None,  # Optional initial context (e.g. {"prompt": "..."})
    ) -> PipelineResult

@dataclass
class PipelineResult:
    pipeline_name: str
    steps: list[StepResult]
    total_duration_ms: float
    success: bool

    @property
    def failed_steps -> list[StepResult]

@dataclass
class StepResult:
    step_name: str
    agent_name: str
    status: StepStatus          # PENDING | RUNNING | SUCCESS | FAILED | SKIPPED
    output: Any
    error: str | None
    duration_ms: float
    metadata: dict`}</pre>
        </div>
      </section>

      {/* Next */}
      <section className="bg-[#131B2E] border border-[#1e2a45] rounded-xl p-6">
        <h2 className="text-lg font-bold mb-2">Related</h2>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/dev/docs/smf-forge"
            className="text-[#00D4FF] hover:text-[#33E5FF] text-sm transition-colors"
          >
            smf-forge Docs →
          </Link>
          <Link
            href="/dev/docs/agent-dev"
            className="text-[#00D4FF] hover:text-[#33E5FF] text-sm transition-colors"
          >
            Agent Dev Guide →
          </Link>
        </div>
      </section>
    </div>
  );
}