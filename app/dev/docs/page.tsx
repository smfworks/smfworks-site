import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Documentation | SMF Works Dev",
  description: "Developer documentation for SMF Works tools, APIs, and agent development.",
  alternates: { canonical: "https://smfworks.com/dev/docs" },
};

const docSections = [
  {
    title: "Tools",
    description: "Open-source CLIs and frameworks for building with AI agents.",
    links: [
      {
        href: "/dev/docs/smf-forge",
        title: "smf-forge CLI",
        desc: "Lightweight multi-agent orchestration — define, compose, and run agent pipelines from the terminal.",
      },
    ],
  },
  {
    title: "Guides",
    description: "How-to guides for building agents and integrations.",
    links: [
      {
        href: "/dev/docs/agent-dev",
        title: "Agent Development Guide",
        desc: "Build custom agent types, integrate with LLMs, and compose multi-step pipelines.",
      },
    ],
  },
  {
    title: "Reference",
    description: "API specifications and configuration references.",
    links: [
      {
        href: "/dev/docs/api-reference",
        title: "API Reference",
        desc: "Complete reference for agent types, pipeline configuration, and CLI commands.",
      },
    ],
  },
];

export default function DocsIndex() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Documentation</h1>
      <p className="text-[#94A3B8] text-lg mb-12 max-w-2xl">
        Everything you need to build with SMF Works tools. Start with smf-forge
        for multi-agent orchestration, then dive into the agent dev guide for
        custom integrations.
      </p>

      {docSections.map((section) => (
        <section key={section.title} className="mb-12">
          <h2 className="text-2xl font-bold mb-2">{section.title}</h2>
          <p className="text-[#94A3B8] text-sm mb-6">{section.description}</p>
          <div className="space-y-4">
            {section.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block bg-[#131B2E] border border-[#1e2a45] rounded-xl p-5 hover:border-[#00D4FF]/30 transition-colors group"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-[#E2E8F0] group-hover:text-[#00D4FF] transition-colors">
                    {link.title}
                  </h3>
                  <span className="text-[#94A3B8] group-hover:text-[#00D4FF] transition-colors text-sm">
                    →
                  </span>
                </div>
                <p className="text-[#94A3B8] text-sm mt-1">{link.desc}</p>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}