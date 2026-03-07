import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Tool Selection",
  description: "Cut through the AI hype with expert tool evaluation, demos, cost-benefit analysis, and pilot testing. Starting at $2,000 per engagement or $200/hr.",
};

export default function AIToolSelectionPage() {
  return (
    <>
      {/* HEADER */}
      <section className="bg-[#001F3F] text-[#E2E8F0] py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[300px] bg-[#007BFF] opacity-[0.05] blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="text-[#00D4FF] text-sm font-semibold uppercase tracking-widest mb-3">
            <Link href="/services" className="hover:underline">Services</Link> / AI Tool Selection
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">AI Tool Selection</h1>
          <p className="text-[#94A3B8] text-lg max-w-2xl leading-relaxed">
            There are thousands of AI tools. Most aren&apos;t right for your business.
            We cut through the hype and find the ones that actually deliver — without
            overwhelming your team or your budget.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-20 px-6 bg-[#0A0F1F]">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#94A3B8] text-lg leading-relaxed mb-6">
            We cut through the hype to recommend AI tools that truly fit your business needs,
            evaluating options based on functionality, ease of use, cost, and integration
            potential. Our process includes demos, cost-benefit analysis, and pilot testing
            to ensure the selected tools deliver real value without overwhelming your team.
          </p>
          <p className="text-[#94A3B8] text-lg leading-relaxed">
            With 30 years of enterprise technology experience and 3+ years specifically in
            enterprise AI deployment, we&apos;ve seen what works — and what burns budget without
            results. You get that expertise applied directly to your business.
          </p>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-20 px-6 bg-[#131B2E]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-[#E2E8F0] text-center">What&apos;s Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🔍", title: "Needs Assessment", desc: "We start by understanding your operations, pain points, team capabilities, and goals — so recommendations are grounded in your reality, not the latest trend." },
              { icon: "📊", title: "Tool Evaluation", desc: "Rigorous side-by-side evaluation of relevant AI tools across functionality, ease of use, cost, and fit — narrowed down to the options that actually make sense for you." },
              { icon: "🎬", title: "Live Demos", desc: "We walk you through the shortlisted tools in your context — not vendor sales demos. You see exactly how they&apos;d work for your business before committing." },
              { icon: "💰", title: "Cost-Benefit Analysis", desc: "Hard numbers: projected time savings, efficiency gains, and cost impact set against implementation and licensing costs. You know the ROI before you spend." },
              { icon: "🧪", title: "Pilot Testing", desc: "We run small-scale pilots of shortlisted tools in your actual environment to validate performance before full deployment." },
              { icon: "🔗", title: "Integration Assessment", desc: "Every tool evaluated for how well it connects with your existing systems — CRM, accounting, scheduling, and communication platforms." },
              { icon: "👥", title: "Team Fit Analysis", desc: "The best tool is useless if your team won&apos;t use it. We assess adoption risk and ensure recommendations match your team&apos;s technical comfort level." },
              { icon: "📋", title: "Final Recommendation Report", desc: "A clear, actionable report with our top recommendations, implementation roadmap, and reasoning — yours to keep and act on at your own pace." },
              { icon: "🛡️", title: "Vendor-Neutral Advice", desc: "We have no affiliate relationships or vendor incentives. Our only interest is finding what&apos;s right for your business." },
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

      {/* PRICING */}
      <section className="py-20 px-6 bg-[#0A0F1F]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-[#E2E8F0]">Pricing</h2>
          <p className="text-[#94A3B8] mb-12 max-w-2xl mx-auto">
            Available as a full engagement or on an hourly basis for targeted
            evaluation and advice.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {[
              {
                label: "Full Engagement",
                price: "$2,000",
                note: "Starting price",
                features: [
                  "Needs assessment & discovery",
                  "Full tool evaluation & comparison",
                  "Live demos in your context",
                  "Cost-benefit analysis",
                  "Pilot testing support",
                  "Final recommendation report",
                  "Implementation roadmap included",
                ],
                highlight: true,
              },
              {
                label: "Hourly",
                price: "$200",
                period: "/hour",
                note: "Targeted advice",
                features: [
                  "Specific tool evaluation",
                  "Second-opinion consultations",
                  "Vendor comparison sessions",
                  "Integration feasibility review",
                  "No minimum commitment",
                ],
                highlight: false,
              },
            ].map((tier) => (
              <div
                key={tier.label}
                className={`rounded-xl p-8 border ${
                  tier.highlight
                    ? "bg-[#131B2E] border-[#00D4FF]/40 shadow-lg shadow-[#00D4FF]/10"
                    : "bg-[#131B2E] border-[#1e2a45]"
                }`}
              >
                {tier.highlight && (
                  <p className="text-[#00D4FF] text-xs font-bold uppercase tracking-widest mb-3">Recommended</p>
                )}
                <h3 className="text-xl font-bold text-[#E2E8F0] mb-1">{tier.label}</h3>
                <p className="text-[#94A3B8] text-sm mb-4">{tier.note}</p>
                <p className="text-4xl font-bold text-[#00D4FF] mb-1">
                  {tier.price}<span className="text-lg font-normal text-[#94A3B8]">{tier.period ?? ""}</span>
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
            All pricing negotiable based on scope, number of tools evaluated, and business requirements.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#001F3F] to-[#131B2E] text-white py-16 px-6 text-center border-t border-[#1e2a45]">
        <h2 className="text-3xl font-bold mb-4 text-[#E2E8F0]">Stop guessing. Start with the right tools.</h2>
        <p className="text-[#94A3B8] mb-8 max-w-xl mx-auto">
          Let&apos;s talk about what you&apos;re trying to accomplish and find the AI tools
          that will actually move the needle for your business.
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
