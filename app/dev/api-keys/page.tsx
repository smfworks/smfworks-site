"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface ApiKeyDisplay {
  id: string;
  user_sub: string;
  name: string;
  key_prefix: string;
  created_at: string;
  last_used: string | null;
  revoked: boolean;
}

export default function ApiKeysPage() {
  const [keys, setKeys] = useState<ApiKeyDisplay[]>([]);
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [newKeyName, setNewKeyName] = useState("");
  const [createdKey, setCreatedKey] = useState<string | null>(null);
  const [error, setError] = useState("");

  // Check auth state
  useEffect(() => {
    fetch("/api/dev/me")
      .then((r) => r.json())
      .then((data) => {
        setAuthenticated(data.authenticated === true);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  // Fetch keys when authenticated
  useEffect(() => {
    if (!authenticated) return;
    fetch("/api/dev/keys")
      .then((r) => r.json())
      .then((data) => {
        if (data.keys) setKeys(data.keys);
      })
      .catch(() => {});
  }, [authenticated]);

  async function login(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    const res = await fetch("/api/dev/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    if (res.ok) {
      setAuthenticated(true);
      setEmail("");
    } else {
      setError("Login failed");
    }
  }

  async function createKey() {
    setError("");
    setCreatedKey(null);
    const res = await fetch("/api/dev/keys", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newKeyName || "Default" }),
    });
    if (res.ok) {
      const data = await res.json();
      setCreatedKey(data.key);
      setNewKeyName("");
      // Refresh key list
      const listRes = await fetch("/api/dev/keys");
      const listData = await listRes.json();
      if (listData.keys) setKeys(listData.keys);
    } else {
      setError("Failed to create key");
    }
  }

  async function revokeKey(id: string) {
    setError("");
    const res = await fetch("/api/dev/keys", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    if (res.ok) {
      setKeys((prev) => prev.filter((k) => k.id !== id));
    }
  }

  if (loading) {
    return (
      <div>
        <h1 className="text-4xl font-bold mb-2">API Keys</h1>
        <p className="text-[#94A3B8]">Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-4xl font-bold mb-2">API Keys</h1>
      <p className="text-[#94A3B8] text-lg mb-8">
        Manage API keys for SMF Works developer services.
      </p>

      {!authenticated ? (
        /* Login form */
        <section className="mb-12">
          <div className="bg-[#131B2E] border border-[#1e2a45] rounded-xl p-6 max-w-md">
            <h2 className="text-xl font-bold mb-4">Sign In</h2>
            <p className="text-[#94A3B8] text-sm mb-4">
              Sign in to manage your API keys. In production, this will use
              OAuth (GitHub, Google).
            </p>
            <form onSubmit={login}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full bg-[#0A1628] border border-[#1e2a45] rounded-lg px-4 py-3 text-sm text-[#E2E8F0] mb-4 focus:outline-none focus:border-[#00D4FF]"
                required
              />
              <button
                type="submit"
                className="w-full bg-[#00D4FF] text-[#0A0F1F] px-6 py-3 rounded-lg font-semibold hover:bg-[#33E5FF] transition-colors"
              >
                Sign In
              </button>
              {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
            </form>
          </div>
        </section>
      ) : (
        <>
          {/* Create Key */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Create API Key</h2>
            <div className="flex gap-3 mb-4">
              <input
                type="text"
                value={newKeyName}
                onChange={(e) => setNewKeyName(e.target.value)}
                placeholder="Key name (optional)"
                className="flex-1 bg-[#131B2E] border border-[#1e2a45] rounded-lg px-4 py-3 text-sm text-[#E2E8F0] focus:outline-none focus:border-[#00D4FF]"
              />
              <button
                onClick={createKey}
                className="bg-[#00D4FF] text-[#0A0F1F] px-6 py-3 rounded-lg font-semibold hover:bg-[#33E5FF] transition-colors shrink-0"
              >
                Generate Key
              </button>
            </div>

            {createdKey && (
              <div className="bg-[#10B981]/5 border border-[#10B981]/20 rounded-xl p-5 mb-4">
                <p className="text-[#10B981] font-semibold mb-2">
                  Key created! Copy it now — it won&apos;t be shown again.
                </p>
                <div className="bg-[#0A1628] rounded-lg p-4 font-mono text-sm text-[#00D4FF] break-all">
                  {createdKey}
                </div>
              </div>
            )}
            {error && <p className="text-red-400 text-sm">{error}</p>}
          </section>

          {/* Key List */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Your Keys</h2>
            {keys.length === 0 ? (
              <div className="bg-[#131B2E] border border-[#1e2a45] rounded-xl p-6">
                <p className="text-[#94A3B8] text-sm">
                  No API keys yet. Create one above to get started.
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {keys.map((key) => (
                  <div
                    key={key.id}
                    className="bg-[#131B2E] border border-[#1e2a45] rounded-xl p-5 flex items-center justify-between"
                  >
                    <div>
                      <p className="text-[#E2E8F0] font-medium">
                        {key.name}
                      </p>
                      <p className="text-[#94A3B8] text-xs font-mono mt-1">
                        {key.key_prefix} · Created{" "}
                        {new Date(key.created_at).toLocaleDateString()}
                        {key.last_used &&
                          ` · Last used ${new Date(key.last_used).toLocaleDateString()}`}
                      </p>
                    </div>
                    <button
                      onClick={() => revokeKey(key.id)}
                      className="text-red-400 border border-red-400/20 px-3 py-1.5 rounded-lg text-sm hover:bg-red-400/10 transition-colors"
                    >
                      Revoke
                    </button>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* Security */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Security</h2>
            <div className="bg-[#131B2E] border border-[#1e2a45] rounded-xl p-6 space-y-4 text-sm text-[#94A3B8]">
              <div className="flex items-start gap-3">
                <span className="text-[#10B981] mt-0.5">✓</span>
                <p>
                  <strong className="text-[#E2E8F0]">Never share your API key</strong> —
                  treat it like a password.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#10B981] mt-0.5">✓</span>
                <p>
                  <strong className="text-[#E2E8F0]">Use environment variables</strong> —
                  store keys in .env files or secret managers, never in source code.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#10B981] mt-0.5">✓</span>
                <p>
                  <strong className="text-[#E2E8F0]">Rotate keys regularly</strong> —
                  generate new keys and revoke old ones on a regular cadence.
                </p>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Docs link */}
      <section className="bg-[#131B2E] border border-[#1e2a45] rounded-xl p-6">
        <h2 className="text-lg font-bold mb-2">Need Help?</h2>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/dev/docs"
            className="text-[#00D4FF] hover:text-[#33E5FF] text-sm transition-colors"
          >
            Documentation →
          </Link>
          <Link
            href="/dev/docs/api-reference"
            className="text-[#00D4FF] hover:text-[#33E5FF] text-sm transition-colors"
          >
            API Reference →
          </Link>
        </div>
      </section>
    </div>
  );
}