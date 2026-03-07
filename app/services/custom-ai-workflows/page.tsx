import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom AI Workflows",
  description: "Bespoke AI workflows that connect your tools, team, and data. CRM integrations, predictive analytics, and complex automations. From $10,000 with annual maintenance at 20-30% of build cost.",
};

export default function CustomAIWorkflowsPage() {
  return (
    <>
      {/* HEADER */}
      <section className="bg-[#001F3F] text-[#E2E8F0] py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[300px] bg-[#007BFF] opacity-[0.05] blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="text-[#00D4FF] text-sm font-semibold uppercase tracking-widest mb-3">
            <Link href="/services" className="hover:underline">Services</Link> / Custom AI Workflows
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">Custom AI Workflows</h1>
          <p className="text-[#94A3B8] text-lg max-w-2xl leading-relaxed">
            Bespoke AI systems that connect your tools, your team, and your data —
            built for how your business actually operates, not a generic template.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-20 px-6 bg-[#0A0F1F]">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#94A3B8] text-lg leading-relaxed mb-6">
            SMF Works designs and implements tailored AI automations built specifically for
            your business — from integrating CRM with inventory systems to creating predictive
            analytics dashboards that surface the insights you need to make better decisions faster.
          </p>
          <p className="text-[#94A3B8] text-lg leading-relaxed">
            These are not off-the-shelf tools configured to your settings. These are custom-built
            AI workflows designed from the ground up to handle your specific complexity, scale
            with your growth, and operate efficiently without constant manual intervention.
          </p>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-20 px-6 bg-[#131B2E]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-[#E2E8F0] text-center">What&apos;s Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🏗️", title: "Workflow Architecture", desc: "We design the full system architecture before a line of code is written — ensuring every component connects cleanly and scales without friction." },
              { icon: "🔗", title: "Systems Integration", desc: "CRM, ERP, inventory, scheduling, accounting, communication — connected into a single coherent operational flow." },
              { icon: "📊", title: "Predictive Analytics Dashboards", desc: "AI-powered dashboards that surface trends, forecast demand, flag risks, and give you the data to make decisions with confidence." },
              { icon: "🤖", title: "Intelligent Automation", desc: "Workflows that don&apos;t just move data — they make decisions, route tasks, and escalate exceptions based on logic you define." },
              { icon: "📈", title: "Scalable by Design", desc: "Built to grow with you. Whether you&apos;re handling 100 transactions a month or 100,000, the system performs." },
              { icon: "🔒", title: "Security & Compliance", desc: "Enterprise-grade security practices applied to every workflow — data handled responsibly, access controlled properly." },
              { icon: "🧪", title: "Testing & Validation", desc: "Rigorous testing before deployment — edge cases identified, failure modes addressed, performance validated." },
              { icon: "📋", title: "Documentation & Handoff", desc: "Full documentation delivered with every build — so your team understands what was built and how to work with it." },
              { icon: "🔧", title: "Ongoing Maintenance", desc: "AI evolves. Your business evolves. We keep your custom workflows current, optimized, and performing as expected." },
            ].map((item) => (
              <div key={item.title} className="bg-[#0A0F1F] rounded-lg p-6 border border-[#1e2a45] hover:border-[#00D4FF]/30 transition-colors">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-semibold mb-2 text-[#E2E8F0]">{item.title}</h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXAMPLES */}
      <section className="py-20 px-6 bg-[#0A0F1F]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-[#E2E8F0] text-center">What We Build</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "CRM + inventory system integration",
              "Predictive analytics & forecasting dashboards",
              "Automated job costing & estimate generation",
              "Multi-system data pipeline orchestration",
              "AI-powered customer segmentation engines",
              "Real-time operational monitoring systems",
              "Intelligent document processing workflows",
              "Custom reporting & business intelligence layers",
              "AI agent systems for complex decision routing",
              "End-to-end sales & fulfillment automation",
            ].map((item) => (
              <div key={item} className="bg-[#131B2E] rounded-lg px-5 py-4 border border-[#1e2a45] flex items-center gap-3">
                <span className="text-[#00D4FF]">✓</span>
                <span className="text-[#94A3B8] text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-20 px-6 bg-[#131B2E]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-[#E2E8F0]">Pricing</h2>
          <p className="text-[#94A3B8] mb-12 max-w-2xl mx-auto">
            Custom AI workflows are scoped and priced based on complexity, integrations required,
            and scale. Every engagement begins with a discovery phase to scope the work accurately.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {[
              {
                label: "Build Cost",
                price: "$10,000–$150,000",
                note: "Based on complexity & scope",
                features: [
                  "Discovery & requirements gathering",
                  "Full workflow architecture & design",
                  "Custom build & implementation",
                  "Systems integration",
                  "Testing, validation & QA",
                  "Deployment & go-live support",
                  "Documentation & team handoff",
                ],
                highlight: true,
              },
              {
                label: "Annual Maintenance",
                price: "20–30%",
                period: " of build cost/yr",
                note: "Ongoing support & optimization",
                features: [
                  "System monitoring & upkeep",
                  "AI model updates & tuning",
                  "Performance optimization",
                  "Bug fixes & issue resolution",
                  "Minor feature enhancements",
                  "Quarterly business reviews",
                ],
                highlight: false,
              },
            ].map((tier) => (
              <div
                key={tier.label}
                className={`rounded-xl p-8 border ${
                  tier.highlight
                    ? "bg-[#0A0F1F] border-[#00D4FF]/40 shadow-lg shadow-[#00D4FF]/10"
                    : "bg-[#0A0F1F] border-[#1e2a45]"
                }`}
              >
                {tier.highlight && (
                  <p className="text-[#00D4FF] text-xs font-bold uppercase tracking-widest mb-3">Project Cost</p>
                )}
                <h3 className="text-xl font-bold text-[#E2E8F0] mb-1">{tier.label}</h3>
                <p className="text-[#94A3B8] text-sm mb-4">{tier.note}</p>
                <p className="text-3xl font-bold text-[#00D4FF] mb-1">
                  {tier.price}<span className="text-base font-normal text-[#94A3B8]">{tier.period ?? ""}</span>
                </p>
                <div className="mb-6" />
                <ul className="space-y-2 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className="text-sm text-[#94A3B8] flex items-start gap-2">
                      <span className="text-[#00D4FF] mt-0.5">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block text-center px-6 py-3 rounded-lg font-semibold transition-colors ${
                    tier.highlight
                      ? "bg-[#FF6B00] text-white hover:bg-[#e55f00] shadow-lg shadow-[#FF6B00]/20"
                      : "border border-[#00D4FF] text-[#00D4FF] hover:bg-[#00D4FF]/10"
                  }`}
                >
                  Get a Quote
                </Link>
              </div>
            ))}
          </div>
          <p className="text-[#94A3B8] text-sm">
            All engagements begin with a scoping conversation. Final pricing determined after discovery.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#001F3F] to-[#131B2E] text-white py-16 px-6 text-center border-t border-[#1e2a45]">
        <h2 className="text-3xl font-bold mb-4 text-[#E2E8F0]">Ready to build something that actually works at scale?</h2>
        <p className="text-[#94A3B8] mb-8 max-w-xl mx-auto">
          Let&apos;s talk about your operations, your data, and what a custom AI workflow
          could unlock for your business.
        </p>
        <Link
          href="/contact"
          className="bg-[#FF6B00] text-white px-10 py-3 rounded-lg font-semibold hover:bg-[#e55f00] transition-colors shadow-lg shadow-[#FF6B00]/20 inline-block"
        >
          Request a Call
        </Link>
      </section>
    </>
  );
}
