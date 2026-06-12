import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "API Keys | SMF Works Dev",
  description: "Manage your SMF Works API keys for agent orchestration and platform access.",
  alternates: { canonical: "https://smfworks.com/dev/api-keys" },
};

export default function ApiKeysPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-2">API Keys</h1>
      <p className="text-[#94A3B8] text-lg mb-8">
        Manage API keys for SMF Works services. Keys are used to authenticate
        requests to the agent orchestration API and other platform services.
      </p>

      {/* Current State */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Your API Keys</h2>
        <div className="bg-[#131B2E] border border-[#1e2a45] rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-2 rounded-full bg-[#10B981]" />
            <span className="text-sm text-[#94A3B8]">Active Keys</span>
            <span className="bg-[#0A1628] px-2 py-0.5 rounded text-xs text-[#94A3B8] font-mono">
              0
            </span>
          </div>
          <p className="text-[#94A3B8] text-sm">
            No API keys yet. Sign in to generate your first key.
          </p>
        </div>
      </section>

      {/* How to Get Keys */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Getting API Keys</h2>
        <div className="space-y-4">
          <div className="bg-[#131B2E] border border-[#1e2a45] rounded-xl p-5">
            <h3 className="text-lg font-bold mb-2">1. Create an Account</h3>
            <p className="text-[#94A3B8] text-sm">
              Sign up at{" "}
              <Link
                href="/dashboard"
                className="text-[#00D4FF] hover:text-[#33E5FF] transition-colors"
              >
                smfworks.com/dashboard
              </Link>
              . Your account gives you access to the developer console, API key
              management, and usage analytics.
            </p>
          </div>

          <div className="bg-[#131B2E] border border-[#1e2a45] rounded-xl p-5">
            <h3 className="text-lg font-bold mb-2">2. Generate a Key</h3>
            <p className="text-[#94A3B8] text-sm">
              Navigate to the API Keys section in your dashboard. Click
              &quot;Generate New Key&quot; — you&apos;ll receive a key prefixed
              with <code className="bg-[#0A1628] px-1.5 py-0.5 rounded text-[#00D4FF] text-xs font-mono">smf_</code>.
              Store it securely — it won&apos;t be shown again.
            </p>
          </div>

          <div className="bg-[#131B2E] border border-[#1e2a45] rounded-xl p-5">
            <h3 className="text-lg font-bold mb-2">3. Use Your Key</h3>
            <p className="text-[#94A3B8] text-sm mb-3">
              Pass your API key in requests via the Authorization header:
            </p>
            <div className="bg-[#0A1628] rounded-lg p-4 font-mono text-xs">
              <div className="text-[#00D4FF]">
                curl -H &quot;Authorization: Bearer smf_your_key_here&quot; \
              </div>
              <div className="text-[#00D4FF]">
                &nbsp;&nbsp;https://api.smfworks.com/v1/pipelines
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Security</h2>
        <div className="bg-[#131B2E] border border-[#1e2a45] rounded-xl p-6 space-y-4 text-sm text-[#94A3B8]">
          <div className="flex items-start gap-3">
            <span className="text-[#10B981] mt-0.5">✓</span>
            <p>
              <strong className="text-[#E2E8F0]">Never share your API key</strong> —
              treat it like a password. If compromised, revoke it immediately
              from the dashboard.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-[#10B981] mt-0.5">✓</span>
            <p>
              <strong className="text-[#E2E8F0]">Use environment variables</strong> —
              store keys in <code className="bg-[#0A1628] px-1.5 py-0.5 rounded text-[#00D4FF] text-xs font-mono">.env</code> files
              or secret managers, never in source code.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-[#10B981] mt-0.5">✓</span>
            <p>
              <strong className="text-[#E2E8F0]">Rotate keys regularly</strong> —
              generate new keys and revoke old ones on a regular cadence.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-[#10B981] mt-0.5">✓</span>
            <p>
              <strong className="text-[#E2E8F0]">Scoped keys</strong> —
              API keys are scoped to your account and the services you have
              access to.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#131B2E] border border-[#00D4FF]/20 rounded-xl p-6 text-center">
        <h2 className="text-lg font-bold mb-3">Ready to get started?</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/dashboard"
            className="bg-[#00D4FF] text-[#0A0F1F] px-6 py-3 rounded-lg font-semibold hover:bg-[#33E5FF] transition-colors"
          >
            Go to Dashboard
          </Link>
          <Link
            href="/dev/docs"
            className="border border-[#1e2a45] text-[#E2E8F0] px-6 py-3 rounded-lg font-semibold hover:border-[#00D4FF] hover:text-[#00D4FF] transition-colors"
          >
            Read the Docs
          </Link>
        </div>
      </section>
    </div>
  );
}