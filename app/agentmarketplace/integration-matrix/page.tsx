import { Metadata } from "next";
import { getAllAgents } from "@/lib/marketplace/loader";
import { agentExtendedMeta, allEditors, allProviders, allOperatingSystems } from "@/lib/marketplace/agent-meta";
import IntegrationMatrixClient from "@/components/IntegrationMatrixClient";

export const metadata: Metadata = {
  title: "Integration Matrix — Agent Marketplace | SMF Works",
  description: "Compare AI agents by editor/IDE support, model provider support, and operating system support.",
};

export default function IntegrationMatrixPage() {
  const agents = getAllAgents();
  return (
    <IntegrationMatrixClient
      agents={agents}
      meta={agentExtendedMeta}
      editors={allEditors}
      providers={allProviders}
      oss={allOperatingSystems}
    />
  );
}
