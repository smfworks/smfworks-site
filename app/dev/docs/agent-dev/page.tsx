import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Agent Development Guide | SMF Works Dev",
  description:
    "Learn how to build custom agent types for smf-forge. Subclass BaseAgent, integrate with LLMs, and register your agent in the pipeline.",
  alternates: { canonical: "https://smfworks.com/dev/docs/agent-dev" },
};

export default function AgentDevGuide() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold mb-2">Agent Development Guide</h1>
      <p className="text-[#94A3B8] text-lg mb-8">
        Build custom agent types for smf-forge. Extend BaseAgent, implement the
        run method, and register your agent for use in pipelines.
      </p>

      {/* Architecture */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 border-b border-[#1e2a45] pb-2">
          Agent Architecture
        </h2>
        <p className="text-[#94A3B8] text-sm mb-4">
          Every agent in smf-forge inherits from <code className="bg-[#0A1628] px-1.5 py-0.5 rounded text-[#00D4FF] text-xs font-mono">BaseAgent</code> and
          implements a single async method: <code className="bg-[#0A1628] px-1.5 py-0.5 rounded text-[#00D4FF] text-xs font-mono">run(prompt, context)</code>.
          The engine calls this method when executing a pipeline step, passing
          the rendered prompt and the current pipeline context.
        </p>
        <div className="bg-[#131B2E] border border-[#1e2a45] rounded-xl p-5 font-mono text-xs overflow-x-auto">
          <pre className="text-[#E2E8F0]">{`from smf_forge.agents import BaseAgent, AgentConfig

class MyCustomAgent(BaseAgent):
    async def run(self, prompt: str, context: dict | None = None) -> dict:
        # Your logic here
        return {"result": "processed", "agent": self.config.name}`}</pre>
        </div>
      </section>

      {/* Step by step */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 border-b border-[#1e2a45] pb-2">
          Building a Custom Agent
        </h2>

        <h3 className="text-lg font-bold text-[#00D4FF] mb-3">
          1. Subclass BaseAgent
        </h3>
        <p className="text-[#94A3B8] text-sm mb-4">
          Create a new Python file and define your agent class. The only
          requirement is implementing the async <code className="bg-[#0A1628] px-1.5 py-0.5 rounded text-[#00D4FF] text-xs font-mono">run</code> method.
        </p>
        <div className="bg-[#131B2E] border border-[#1e2a45] rounded-xl p-5 font-mono text-xs overflow-x-auto mb-6">
          <pre className="text-[#E2E8F0]">{`# my_agents.py
from smf_forge.agents import BaseAgent, AgentConfig, AGENT_TYPES

class DatabaseAgent(BaseAgent):
    """Query a database and return results."""

    async def run(self, prompt: str, context: dict | None = None) -> dict:
        # Read config options
        db_url = self.config.options.get("db_url", "sqlite:///default.db")

        # Your database logic here
        results = await query_database(db_url, prompt)

        return {
            "rows": results,
            "count": len(results),
            "agent": self.config.name,
        }

# 2. Register your agent type
AGENT_TYPES["database"] = DatabaseAgent`}</pre>
        </div>

        <h3 className="text-lg font-bold text-[#00D4FF] mb-3">
          2. Register the Agent Type
        </h3>
        <p className="text-[#94A3B8] text-sm mb-4">
          Add your agent class to the <code className="bg-[#0A1628] px-1.5 py-0.5 rounded text-[#00D4FF] text-xs font-mono">AGENT_TYPES</code> dictionary
          so the config loader can instantiate it by type name.
        </p>
        <div className="bg-[#131B2E] border border-[#1e2a45] rounded-xl p-5 font-mono text-xs overflow-x-auto mb-6">
          <pre className="text-[#E2E8F0]">{`# After your class definition:
AGENT_TYPES["database"] = DatabaseAgent`}</pre>
        </div>

        <h3 className="text-lg font-bold text-[#00D4FF] mb-3">
          3. Configure in forge.yaml
        </h3>
        <p className="text-[#94A3B8] text-sm mb-4">
          Use your new type name in the agents section of your config.
        </p>
        <div className="bg-[#131B2E] border border-[#1e2a45] rounded-xl p-5 font-mono text-xs overflow-x-auto">
          <pre className="text-[#E2E8F0]">{`agents:
  my-db:
    type: database
    options:
      db_url: "sqlite:///myapp.db"

pipelines:
  query:
    name: query
    steps:
      - name: lookup
        agent: my-db
        prompt: "{{ prompt }}"`}</pre>
        </div>
      </section>

      {/* Context & Templating */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 border-b border-[#1e2a45] pb-2">
          Context Passing
        </h2>
        <p className="text-[#94A3B8] text-sm mb-4">
          The pipeline engine passes context between steps. The output of each
          step is stored in the context dict under the step name, making it
          available to downstream steps via Jinja2 template rendering.
        </p>
        <div className="bg-[#131B2E] border border-[#1e2a45] rounded-xl p-5 font-mono text-xs overflow-x-auto">
          <pre className="text-[#E2E8F0]">{`# Step output format determines what downstream steps can reference:

# Step "research" returns:
#   { "response": "...", "agent": "researcher" }

# Step "summarize" can reference it with:
#   prompt: "Summarize: {{ research.response }}"

# The context dict after "research" runs:
#   { "research": { "response": "...", "agent": "researcher" } }`}</pre>
        </div>
      </section>

      {/* Error Handling */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 border-b border-[#1e2a45] pb-2">
          Error Handling
        </h2>
        <p className="text-[#94A3B8] text-sm mb-4">
          Agents can signal failures in two ways:
        </p>
        <div className="space-y-4">
          <div className="bg-[#131B2E] border border-[#1e2a45] rounded-xl p-5">
            <h3 className="text-sm font-bold text-[#E2E8F0] mb-2">
              Raise an exception
            </h3>
            <p className="text-[#94A3B8] text-sm mb-3">
              The engine catches any exception and marks the step as FAILED with
              the error message.
            </p>
            <div className="font-mono text-xs bg-[#0A1628] rounded p-3 text-[#00D4FF]">
              raise ValueError("Database connection failed")
            </div>
          </div>
          <div className="bg-[#131B2E] border border-[#1e2a45] rounded-xl p-5">
            <h3 className="text-sm font-bold text-[#E2E8F0] mb-2">
              Return an error dict
            </h3>
            <p className="text-[#94A3B8] text-sm mb-3">
              Return a dict with an &quot;error&quot; key and no &quot;response&quot; key.
              The engine detects this pattern and marks the step FAILED.
            </p>
            <div className="font-mono text-xs bg-[#0A1628] rounded p-3 text-[#00D4FF]">
              return &#123;&quot;error&quot;: &quot;No API key configured&quot;, &quot;agent&quot;: self.config.name&#125;
            </div>
          </div>
        </div>
      </section>

      {/* Next */}
      <section className="bg-[#131B2E] border border-[#1e2a45] rounded-xl p-6">
        <h2 className="text-lg font-bold mb-2">Next Steps</h2>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/dev/docs/api-reference"
            className="text-[#00D4FF] hover:text-[#33E5FF] text-sm transition-colors"
          >
            API Reference →
          </Link>
          <Link
            href="/dev/docs/smf-forge"
            className="text-[#00D4FF] hover:text-[#33E5FF] text-sm transition-colors"
          >
            smf-forge Docs →
          </Link>
        </div>
      </section>
    </div>
  );
}