import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ROI Analysis",
  description: "Data-driven ROI analysis for AI investments. Time savings, cost reductions, break-even points, and risk assessments before you commit. From $2,000 per project or $75–$300/hr.",
};

export default function ROIAnalysisPage() {
  return (
    <>
      {/* HEADER */}
      <section className="bg-[#001F3F] text-[#E2E8F0] py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[300px] bg-[#007BFF] opacity-[0.05] blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="text-[#00D4FF] text-sm font-semibold uppercase tracking-widest mb-3">
            <Link href="/services" className="hover:underline">Services</Link> / ROI Analysis
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">ROI Analysis</h1>
          <p className="text-[#94A3B8] text-lg max-w-2xl leading-relaxed">
            We show you the math before you spend a dime. Clear projections, break-even
            points, and risk assessments — so every AI investment is justified with data,
            not gut feeling.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-20 px-6 bg-[#0A0F1F]">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#94A3B8] text-lg leading-relaxed mb-6">
            We conduct thorough ROI analysis to justify AI investments — crunching the numbers
            on potential time savings, cost reductions, and revenue gains before you commit.
            Using data-driven models, we provide clear projections, break-even points, and risk
            assessments to guide your decisions with confidence.
          </p>
          <p className="text-[#94A3B8] text-lg leading-relaxed">
            Whether you&apos;re evaluating a single tool or a full AI transformation initiative,
            you deserve a real financial picture — not a vendor&apos;s optimistic slide deck.
            We give you the honest numbers.
          </p>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-20 px-6 bg-[#131B2E]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-[#E2E8F0] text-center">What&apos;s Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "⏱️", title: "Time Savings Analysis", desc: "Quantified projections of hours recovered per week, per month, per year — mapped to real dollar value based on your labor costs." },
              { icon: "💰", title: "Cost Reduction Modeling", desc: "Where AI reduces operational costs — headcount, errors, rework, licensing, infrastructure — modeled with realistic assumptions." },
              { icon: "📈", title: "Revenue Gain Projections", desc: "How faster operations, better targeting, and improved customer experience translate into measurable revenue upside." },
              { icon: "📊", title: "Data-Driven Models", desc: "Projections built on your actual data — not industry averages or vendor benchmarks. Real inputs, real outputs." },
              { icon: "📉", title: "Break-Even Analysis", desc: "Exactly when your investment pays for itself — with clear milestones and the assumptions behind every number." },
              { icon: "⚠️", title: "Risk Assessment", desc: "What could go wrong, how likely it is, and what it would cost. Full picture, no surprises." },
              { icon: "🔀", title: "Scenario Modeling", desc: "Conservative, base, and optimistic projections — so you understand the range of outcomes before committing." },
              { icon: "📋", title: "Decision-Ready Reports", desc: "Clean, clear deliverables you can present to partners, lenders, or your own team to support the go/no-go decision." },
              { icon: "🛡️", title: "Independent Analysis", desc: "We have no stake in which tools you choose or whether you proceed. Our only job is giving you an accurate financial picture." },
            ].map((item) => (
              <div key={item.title} className="bg-[#0A0F1F] rounded-lg p-6 border border-[#1e2a45] hover:border-[#00D4FF]/30 transition-colors">
                <div className="text-3xl mb-3" aria-hidden="true">{item.icon}</div>
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
            Available as a full project engagement or on an hourly basis.
            Scope and complexity determine final pricing.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {[
              {
                label: "Project Engagement",
                price: "$2,000–$15,000",
                note: "Based on scope & complexity",
                features: [
                  "Full ROI analysis & modeling",
                  "Time savings quantification",
                  "Cost reduction modeling",
                  "Revenue gain projections",
                  "Break-even analysis",
                  "Risk assessment",
                  "Scenario modeling (3 cases)",
                  "Decision-ready deliverable report",
                ],
                highlight: true,
              },
              {
                label: "Hourly",
                price: "$75–$300",
                period: "/hour",
                note: "Based on engagement type",
                features: [
                  "Targeted financial analysis",
                  "Specific projection modeling",
                  "Review of existing analysis",
                  "Decision support sessions",
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
            All pricing negotiable based on scope, data availability, and complexity of analysis required.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#001F3F] to-[#131B2E] text-white py-16 px-6 text-center border-t border-[#1e2a45]">
        <h2 className="text-3xl font-bold mb-4 text-[#E2E8F0]">Know the numbers before you commit.</h2>
        <p className="text-[#94A3B8] mb-8 max-w-xl mx-auto">
          Let&apos;s talk about the AI investment you&apos;re considering and build the financial
          case — or make clear why it doesn&apos;t pencil out.
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
