import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ongoing Optimization",
  description: "Continuous monitoring, optimization, and AI advance briefings for your workflows. Monthly plans from $500, retainers from $2,000, hourly from $250.",
};

export default function OngoingOptimizationPage() {
  return (
    <>
      {/* HEADER */}
      <section className="bg-[#001F3F] text-[#E2E8F0] py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[300px] bg-[#007BFF] opacity-[0.05] blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="text-[#00D4FF] text-sm font-semibold uppercase tracking-widest mb-3">
            <Link href="/services" className="hover:underline">Services</Link> / Ongoing Optimization
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">Ongoing Optimization</h1>
          <p className="text-[#94A3B8] text-lg max-w-2xl leading-relaxed">
            AI moves fast. Your systems should keep up. We provide continuous monitoring,
            optimization, and strategic briefings — so your AI investment stays current,
            competitive, and performing at peak ROI.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-20 px-6 bg-[#0A0F1F]">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#94A3B8] text-lg leading-relaxed mb-6">
            AI evolves rapidly, and so should your systems. SMF Works offers continuous
            monitoring and optimization of your AI workflows — including ongoing consultation,
            updates, briefings, and analysis of AI advances, their applicability, and
            opportunities for your business to exploit them.
          </p>
          <p className="text-[#94A3B8] text-lg leading-relaxed">
            We update tools, refine automations, and adapt your systems to new business needs —
            ensuring your AI infrastructure maintains peak performance and continues to deliver
            measurable ROI as the technology and your business evolve.
          </p>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-20 px-6 bg-[#131B2E]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-[#E2E8F0] text-center">What&apos;s Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "📡", title: "Continuous Monitoring", desc: "Your AI workflows watched around the clock — performance tracked, anomalies flagged, and issues addressed before they impact your business." },
              { icon: "🔬", title: "AI Advance Briefings", desc: "Regular briefings on relevant AI developments — what&apos;s new, what applies to your business, and what opportunities are worth moving on." },
              { icon: "⚙️", title: "Tool Updates & Upgrades", desc: "AI tools release updates constantly. We evaluate, test, and implement relevant upgrades — keeping your stack current without disrupting operations." },
              { icon: "🔧", title: "Automation Refinement", desc: "Workflows tuned and improved over time as your business grows, processes change, and better approaches become available." },
              { icon: "📈", title: "Performance Optimization", desc: "Regular review of workflow performance data — identifying bottlenecks, inefficiencies, and opportunities to improve output and reduce cost." },
              { icon: "🧭", title: "Ongoing Consultation", desc: "A standing relationship with an expert who knows your systems and your business — available when you need strategic guidance or a second opinion." },
              { icon: "🔄", title: "Business Adaptation", desc: "As your business evolves, your AI systems evolve with it. New services, new markets, new needs — your workflows adapt without starting over." },
              { icon: "🛡️", title: "Risk Management", desc: "Proactive identification of vulnerabilities, compliance considerations, and risks introduced by new AI developments — before they become problems." },
              { icon: "📊", title: "ROI Reporting", desc: "Regular reporting on the value your AI systems are delivering — quantified, clear, and tied to your business objectives." },
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
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-[#E2E8F0] text-center">Pricing</h2>
          <p className="text-[#94A3B8] text-center mb-12 max-w-2xl mx-auto">
            Flexible options based on the scope of your AI environment and level of engagement needed.
            All pricing negotiable.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              {
                label: "Monthly Plan",
                price: "$500–$8,000",
                period: "/month",
                note: "Based on scope",
                features: [
                  "Continuous workflow monitoring",
                  "Performance optimization",
                  "Tool updates & maintenance",
                  "Monthly ROI reporting",
                  "Issue resolution & support",
                  "Scales with your environment",
                ],
                highlight: false,
              },
              {
                label: "Retainer",
                price: "$2,000–$10,000",
                period: "/month",
                note: "Strategic partnership",
                features: [
                  "Everything in Monthly Plan",
                  "Ongoing consultation access",
                  "AI advance briefings",
                  "Opportunity analysis",
                  "Proactive recommendations",
                  "Priority response & support",
                ],
                highlight: true,
              },
              {
                label: "Hourly",
                price: "$250",
                period: "/hour",
                note: "Starting rate",
                features: [
                  "Targeted optimization work",
                  "Specific system reviews",
                  "Consultation sessions",
                  "AI briefing sessions",
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
                  <p className="text-[#00D4FF] text-xs font-bold uppercase tracking-widest mb-3">Best Value</p>
                )}
                <h3 className="text-xl font-bold text-[#E2E8F0] mb-1">{tier.label}</h3>
                <p className="text-[#94A3B8] text-sm mb-4">{tier.note}</p>
                <p className="text-3xl font-bold text-[#00D4FF] mb-1">
                  {tier.price}<span className="text-base font-normal text-[#94A3B8]">{tier.period}</span>
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
          <p className="text-center text-[#94A3B8] text-sm">
            All pricing negotiable based on the size of your AI environment, complexity, and engagement level.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#001F3F] to-[#131B2E] text-white py-16 px-6 text-center border-t border-[#1e2a45]">
        <h2 className="text-3xl font-bold mb-4 text-[#E2E8F0]">Keep your AI ahead of the curve.</h2>
        <p className="text-[#94A3B8] mb-8 max-w-xl mx-auto">
          Let&apos;s talk about your current AI environment and what a standing optimization
          partnership would look like for your business.
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
