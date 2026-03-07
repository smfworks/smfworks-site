import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Copy",
  description: "Converting website copy for landing pages, service pages, and about sections. SEO-optimized, brand-aligned, and built to drive bookings and inquiries. Starting at $150 per page.",
};

export default function WebsiteCopyPage() {
  return (
    <>
      {/* HEADER */}
      <section className="bg-[#001F3F] text-[#E2E8F0] py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[300px] bg-[#007BFF] opacity-[0.05] blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="text-[#00D4FF] text-sm font-semibold uppercase tracking-widest mb-3">
            <Link href="/services" className="hover:underline">Services</Link> / Website Copy
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">Website Copy</h1>
          <p className="text-[#94A3B8] text-lg max-w-2xl leading-relaxed">
            Copy that clearly communicates your value, matches your brand voice, and turns
            visitors into bookings and inquiries. Starting at $150 per page.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-20 px-6 bg-[#0A0F1F]">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#94A3B8] text-lg leading-relaxed mb-6">
            We craft converting website copy for landing pages, service pages, and about sections
            that clearly communicate your value proposition. AI-powered tools help optimize for
            SEO and user intent, while our writers ensure the language matches your brand voice,
            incorporates persuasive elements, and guides visitors toward the actions that matter —
            bookings, inquiries, and conversions.
          </p>
          <p className="text-[#94A3B8] text-lg leading-relaxed">
            Every engagement includes revisions and A/B testing recommendations to maximize
            impact over time — because great copy isn&apos;t set-and-forget, it&apos;s refined.
          </p>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-20 px-6 bg-[#131B2E]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-[#E2E8F0] text-center">What&apos;s Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🎯", title: "Value Proposition Clarity", desc: "We distill what makes you different and say it in a way that immediately resonates with your ideal customer." },
              { icon: "🔍", title: "SEO Optimization", desc: "AI-powered keyword research and optimization built into every page — so you rank for the terms that bring in the right traffic." },
              { icon: "🧠", title: "User Intent Alignment", desc: "Copy crafted around what your visitors are actually thinking and looking for — not what you assume they want to hear." },
              { icon: "🗣️", title: "Brand Voice Matching", desc: "Your tone, your personality, your words. We learn how you communicate and write every page to sound exactly like you." },
              { icon: "💬", title: "Persuasive Copywriting", desc: "Proven frameworks — benefits over features, social proof, urgency, and clear CTAs — woven naturally into every page." },
              { icon: "📋", title: "Page Types Covered", desc: "Landing pages, service pages, about pages, homepages, FAQs, pricing pages — wherever words need to work harder." },
              { icon: "🔄", title: "Revisions Included", desc: "We don&apos;t walk away after the first draft. Revisions are part of the process until the copy is right." },
              { icon: "🧪", title: "A/B Testing Recommendations", desc: "Specific headline, CTA, and structure variations recommended for testing — so you can keep improving performance after launch." },
              { icon: "📈", title: "Conversion-Focused", desc: "Every word earns its place. We write to move visitors toward one clear action — and remove everything that gets in the way." },
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
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-[#E2E8F0]">Pricing</h2>
          <p className="text-[#94A3B8] mb-12 max-w-2xl mx-auto">
            Priced per page with multi-page packages available. Every page includes
            revisions and A/B testing recommendations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {[
              {
                label: "Single Page",
                price: "$150",
                note: "Starting price per page",
                features: [
                  "Landing, service, or about page",
                  "SEO-optimized copy",
                  "Brand voice matched",
                  "Persuasive CTAs included",
                  "Revisions included",
                  "A/B testing recommendations",
                ],
                highlight: false,
              },
              {
                label: "Multi-Page Package",
                price: "Custom",
                note: "Priced by scope",
                features: [
                  "Full site copy (3+ pages)",
                  "Consistent voice across all pages",
                  "Homepage, services, about & more",
                  "SEO strategy across all pages",
                  "Revisions on all pages",
                  "A/B testing recommendations",
                ],
                highlight: true,
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
                <p className="text-4xl font-bold text-[#00D4FF] mb-6">{tier.price}</p>
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
            All pricing negotiable based on page complexity, length, and requirements.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#001F3F] to-[#131B2E] text-white py-16 px-6 text-center border-t border-[#1e2a45]">
        <h2 className="text-3xl font-bold mb-4 text-[#E2E8F0]">Ready to make every word count?</h2>
        <p className="text-[#94A3B8] mb-8 max-w-xl mx-auto">
          Let&apos;s talk about your site, your audience, and the copy that turns visitors
          into customers.
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
