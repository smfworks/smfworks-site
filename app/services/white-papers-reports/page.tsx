import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "White Papers & Reports",
  description: "Data-driven white papers, industry reports, and competitive analysis that establish your authority and generate leads. Starting at $1,500 per document.",
};

export default function WhitePapersReportsPage() {
  return (
    <>
      {/* HEADER */}
      <section className="bg-[#001F3F] text-[#E2E8F0] py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[300px] bg-[#007BFF] opacity-[0.05] blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="text-[#00D4FF] text-sm font-semibold uppercase tracking-widest mb-3">
            <Link href="/services" className="hover:underline">Services</Link> / White Papers & Reports
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">White Papers & Reports</h1>
          <p className="text-[#94A3B8] text-lg max-w-2xl leading-relaxed">
            Data-driven, publication-ready documents that establish your authority,
            showcase your expertise, and generate qualified leads. Starting at $1,500.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-20 px-6 bg-[#0A0F1F]">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#94A3B8] text-lg leading-relaxed mb-6">
            Establish your authority with data-driven white papers and reports that delve into
            industry trends, solutions, and insights — including in-depth competitive analysis
            with key competitors highlighted, gap analysis provided, and actionable
            recommendations included.
          </p>
          <p className="text-[#94A3B8] text-lg leading-relaxed">
            SMF Works uses AI for research and data analysis to produce comprehensive,
            well-sourced documents that position your business as a thought leader.
            Our white papers are publication-ready for your website and professional platforms
            like LinkedIn — and optimized for lead generation through gated downloads.
          </p>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-20 px-6 bg-[#131B2E]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-[#E2E8F0] text-center">What&apos;s Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🔬", title: "AI-Powered Research", desc: "Deep research and data analysis using AI tools to surface credible, well-sourced insights that hold up to scrutiny." },
              { icon: "🏆", title: "Competitive Analysis", desc: "Key competitors identified, gap analysis provided, and clear actionable recommendations delivered — giving you a strategic edge." },
              { icon: "📋", title: "Topic & Outline Development", desc: "We identify the right topic for your audience and goals, then build a structured outline before a single word is written." },
              { icon: "✍️", title: "Writing & Editing", desc: "Comprehensive, engaging long-form content written to your voice and reviewed for accuracy, clarity, and impact." },
              { icon: "🎨", title: "Design & Layout", desc: "Visually appealing, professionally designed documents — not just a wall of text. Ready to publish as-is." },
              { icon: "🔒", title: "Gated Download Optimization", desc: "Structured for lead generation — formatted and positioned to maximize conversions when offered as gated content." },
              { icon: "💼", title: "LinkedIn-Ready", desc: "Formatted for publication on LinkedIn Articles and professional platforms to maximize reach and credibility." },
              { icon: "🌐", title: "Website Integration", desc: "Ready to publish directly on your site as a resource, case study, or cornerstone content piece." },
              { icon: "📡", title: "Distribution Strategy", desc: "Recommendations on where and how to distribute your white paper for maximum visibility and lead capture." },
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

      {/* DOCUMENT TYPES */}
      <section className="py-20 px-6 bg-[#0A0F1F]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-[#E2E8F0] text-center">Document Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "📄",
                title: "White Papers",
                desc: "In-depth explorations of industry challenges, trends, and solutions. Establishes thought leadership and earns trust with sophisticated buyers.",
              },
              {
                icon: "📊",
                title: "Industry Reports",
                desc: "Data-rich analysis of market conditions, emerging trends, and strategic opportunities. Ideal for gated lead generation and PR.",
              },
              {
                icon: "🔍",
                title: "Competitive Analysis Reports",
                desc: "Detailed breakdown of your competitive landscape — who&apos;s winning, where the gaps are, and exactly how to position against them.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-[#131B2E] rounded-xl p-8 border border-[#1e2a45] hover:border-[#00D4FF]/30 transition-colors text-center">
                <div className="text-4xl mb-4" aria-hidden="true">{item.icon}</div>
                <h3 className="text-lg font-bold text-[#E2E8F0] mb-3">{item.title}</h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-20 px-6 bg-[#131B2E]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-[#E2E8F0]">Pricing</h2>
          <p className="text-[#94A3B8] mb-12 max-w-2xl mx-auto">
            White papers, reports, and competitive analysis reports are priced per document.
            Scope and complexity determine final pricing — reach out for a custom quote.
          </p>
          <div className="bg-[#0A0F1F] rounded-xl p-10 border border-[#00D4FF]/30 shadow-lg shadow-[#00D4FF]/10 mb-8">
            <p className="text-[#00D4FF] text-xs font-bold uppercase tracking-widest mb-3">Per Document</p>
            <p className="text-6xl font-bold text-[#00D4FF] mb-2">$1,500</p>
            <p className="text-[#94A3B8] mb-8">Starting price</p>
            <ul className="space-y-3 text-left max-w-sm mx-auto mb-10">
              {[
                "Topic selection & outlining",
                "AI-powered research & analysis",
                "Full writing & editing",
                "Professional design & layout",
                "Competitive analysis (when applicable)",
                "Gated download optimization",
                "Distribution strategy included",
                "LinkedIn & website ready",
              ].map((f) => (
                <li key={f} className="text-sm text-[#94A3B8] flex items-start gap-2">
                  <span className="text-[#00D4FF] mt-0.5">✓</span> {f}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="bg-[#FF6B00] text-white px-10 py-3 rounded-lg font-semibold hover:bg-[#e55f00] transition-colors shadow-lg shadow-[#FF6B00]/20 inline-block"
            >
              Get a Quote
            </Link>
          </div>
          <p className="text-[#94A3B8] text-sm">
            Pricing varies based on document length, research depth, and complexity.
            Multi-document packages available.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#001F3F] to-[#131B2E] text-white py-16 px-6 text-center border-t border-[#1e2a45]">
        <h2 className="text-3xl font-bold mb-4 text-[#E2E8F0]">Ready to become the authority in your space?</h2>
        <p className="text-[#94A3B8] mb-8 max-w-xl mx-auto">
          Let&apos;s talk about your industry, your audience, and the document that will set you apart
          from every competitor in the room.
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
