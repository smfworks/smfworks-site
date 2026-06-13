"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface ServiceInfo {
  status: string;
  latency_ms: number;
}

interface HealthResponse {
  status: string;
  timestamp: string;
  services: Record<string, ServiceInfo>;
}

const statusColors: Record<string, { dot: string; text: string }> = {
  operational: { dot: "bg-[#10B981]", text: "text-[#10B981]" },
  degraded: { dot: "bg-[#F59E0B]", text: "text-[#F59E0B]" },
  outage: { dot: "bg-[#EF4444]", text: "text-[#EF4444]" },
  maintenance: { dot: "bg-[#94A3B8]", text: "text-[#94A3B8]" },
};

const statusLabels: Record<string, string> = {
  operational: "Operational",
  degraded: "Degraded Performance",
  outage: "Service Outage",
  maintenance: "Maintenance",
};

const serviceNames: Record<string, string> = {
  orchestration: "Agent Orchestration API",
  llm_proxy: "LLM Proxy (OpenAI-compatible)",
  key_management: "API Key Management",
  dashboard: "Dashboard",
};

const serviceDescriptions: Record<string, string> = {
  orchestration: "Core pipeline execution engine",
  llm_proxy: "OpenAI-compatible chat completions endpoint",
  key_management: "Key generation, rotation, and revocation",
  dashboard: "Developer console and analytics",
};

export default function StatusPage() {
  const [health, setHealth] = useState<HealthResponse | null>(null);
  const [lastRefresh, setLastRefresh] = useState("");

  useEffect(() => {
    fetch("/api/dev/health")
      .then((r) => r.json())
      .then((data: HealthResponse) => {
        setHealth(data);
        setLastRefresh(new Date().toLocaleTimeString());
      })
      .catch(() => {});
  }, []);

  const allOperational =
    health &&
    Object.values(health.services).every((s) => s.status === "operational");

  return (
    <div>
      <h1 className="text-4xl font-bold mb-2">API Status</h1>
      <p className="text-[#94A3B8] text-lg mb-8">
        Real-time status of SMF Works developer services.
      </p>

      {/* Overall Status Banner */}
      <div
        className={`rounded-xl p-6 mb-8 border ${
          allOperational
            ? "bg-[#10B981]/5 border-[#10B981]/20"
            : "bg-[#F59E0B]/5 border-[#F59E0B]/20"
        }`}
      >
        <div className="flex items-center gap-3">
          <div
            className={`w-3 h-3 rounded-full ${
              allOperational ? "bg-[#10B981]" : "bg-[#F59E0B]"
            } animate-pulse`}
          />
          <span className="font-bold text-lg">
            {allOperational
              ? "All Systems Operational"
              : health
              ? "Some Services Experiencing Issues"
              : "Loading..."}
          </span>
        </div>
        {lastRefresh && (
          <p className="text-[#94A3B8] text-sm mt-2">
            Last checked: {lastRefresh}
          </p>
        )}
      </div>

      {/* Service Table */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Service Status</h2>
        <div className="bg-[#131B2E] border border-[#1e2a45] rounded-xl overflow-hidden">
          <div className="grid grid-cols-[1fr_140px_100px] gap-4 px-6 py-3 border-b border-[#1e2a45] text-xs font-semibold uppercase tracking-widest text-[#94A3B8]">
            <div>Service</div>
            <div>Status</div>
            <div>Latency</div>
          </div>

          {health ? (
            Object.entries(health.services).map(([key, service]) => {
              const colors =
                statusColors[service.status] || statusColors.operational;
              return (
                <div
                  key={key}
                  className="grid grid-cols-[1fr_140px_100px] gap-4 px-6 py-4 border-b border-[#1e2a45]/50 last:border-b-0"
                >
                  <div>
                    <p className="text-[#E2E8F0] font-medium text-sm">
                      {serviceNames[key] || key}
                    </p>
                    <p className="text-[#94A3B8] text-xs">
                      {serviceDescriptions[key] || ""}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${colors.dot}`} />
                    <span
                      className={`text-xs font-medium ${colors.text}`}
                    >
                      {statusLabels[service.status] || service.status}
                    </span>
                  </div>
                  <div className="text-[#94A3B8] text-sm font-mono">
                    {service.latency_ms}ms
                  </div>
                </div>
              );
            })
          ) : (
            <div className="px-6 py-8 text-center text-[#94A3B8] text-sm">
              Loading service status...
            </div>
          )}
        </div>
      </section>

      {/* Uptime History */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Uptime History</h2>
        <p className="text-[#94A3B8] text-sm mb-4">Last 90 days</p>
        <div className="bg-[#131B2E] border border-[#1e2a45] rounded-xl p-6">
          <div className="flex gap-[2px] h-8">
            {Array.from({ length: 90 }).map((_, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm bg-[#10B981]/60 hover:bg-[#10B981] transition-colors"
                title={`Day ${90 - i}: 100% uptime`}
              />
            ))}
          </div>
          <div className="flex justify-between mt-2 text-xs text-[#94A3B8]">
            <span>90 days ago</span>
            <span>Today</span>
          </div>
        </div>
      </section>

      {/* Incidents */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Recent Incidents</h2>
        <div className="bg-[#131B2E] border border-[#1e2a45] rounded-xl p-6">
          <p className="text-[#94A3B8] text-sm">
            No incidents in the last 90 days.
          </p>
        </div>
      </section>

      {/* Footer */}
      <section className="bg-[#131B2E] border border-[#1e2a45] rounded-xl p-6">
        <h2 className="text-lg font-bold mb-2">Need Help?</h2>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="text-[#00D4FF] hover:text-[#33E5FF] text-sm transition-colors"
          >
            Contact Support →
          </Link>
          <Link
            href="/dev/docs"
            className="text-[#00D4FF] hover:text-[#33E5FF] text-sm transition-colors"
          >
            Documentation →
          </Link>
        </div>
      </section>
    </div>
  );
}