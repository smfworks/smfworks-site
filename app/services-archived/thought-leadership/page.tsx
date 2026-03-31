import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thought Leadership",
  description: "LinkedIn ghostwriting, op-eds, founder stories, and full book ghostwriting and publication. Pieces from $150, monthly plans from $100/month, books from $3,500.",
};

export default function ThoughtLeadershipPage() {
  return (
    <>
      {/* HEADER */}
      <section className="bg-[#001F3F] text-[#E2E8F0] py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[300px] bg-[#007BFF] opacity-[0.05] blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="text-[#00D4FF] text-sm font-semibold uppercase tracking-widest mb-3">
            <Link href="/services" className="hover:underline">Services</Link> / Thought Leadership
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">Thought Leadership</h1>
          <p className="text-[#94A3B8] text-lg max-w-2xl leading-relaxed">
            LinkedIn ghostwriting, op-eds, founder stories, and full book ghostwriting —
            built to amplify your expertise, grow your network, and establish you as
            the authority in your space.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-20 px-6 bg-[#0A0F1F]">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#94A3B8] text-lg leading-relaxed mb-6">
            Our thought leadership service includes LinkedIn ghostwriting, op-eds, and founder
            stories that amplify your expertise and personal brand — with ghostwriting extending
            to complete book writing and publication to Amazon in Kindle and Paperback formats.
            Becoming a published author elevates your industry status, providing enhanced
            exposure and credibility through broader reach and perceived authority.
          </p>
          <p className="text-[#94A3B8] text-lg leading-relaxed">
            AI assists in content generation and optimization, while we ensure every piece
            is authentic and strategically aligned to your voice and goals. We develop a
            content plan to position you or your team as industry experts — crafting pieces
            that spark discussions, build networks, and attract opportunities like partnerships
            and media coverage.
          </p>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-20 px-6 bg-[#131B2E]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-[#E2E8F0] text-center">What&apos;s Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "💼", title: "LinkedIn Ghostwriting", desc: "Posts, articles, and long-form content written in your voice — building your professional brand without you spending hours at the keyboard." },
              { icon: "📰", title: "Op-Eds", desc: "Opinion pieces crafted to make your perspective heard in industry publications, newsletters, and platforms where your audience lives." },
              { icon: "🧬", title: "Founder Stories", desc: "Your origin story, told compellingly. The narrative that makes prospects trust you before they ever speak to you." },
              { icon: "📖", title: "Book Ghostwriting", desc: "Full book writing from outline to final manuscript — your expertise, your voice, your book. No co-author credit taken." },
              { icon: "📦", title: "Amazon Publication", desc: "We handle the full publication process to Amazon in both Kindle and Paperback formats. You become a published author." },
              { icon: "🎯", title: "Content Strategy", desc: "A thoughtful plan that sequences your thought leadership for maximum impact — building your reputation over time, not just one-off pieces." },
              { icon: "🤖", title: "AI-Assisted, Human-Verified", desc: "AI accelerates research and drafting; our editorial process ensures everything reads authentically and aligns with your real expertise." },
              { icon: "🤝", title: "Network & Partnership Opportunities", desc: "Content crafted to open doors — speaking invitations, media coverage, partnership inquiries, and inbound interest." },
              { icon: "🏅", title: "Authority Positioning", desc: "Every piece is designed to reinforce one message: you are the expert your audience should trust and hire." },
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
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-[#E2E8F0] text-center">Pricing</h2>
          <p className="text-[#94A3B8] text-center mb-12 max-w-2xl mx-auto">
            From a single piece to a full book — flexible options at every level of commitment.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                label: "Per Piece",
                price: "$150",
                period: "",
                note: "Starting price",
                features: [
                  "LinkedIn post or article",
                  "Op-ed or founder story",
                  "Written in your voice",
                  "SEO & platform optimized",
                  "One round of revisions",
                  "Ready to publish",
                ],
                highlight: false,
              },
              {
                label: "Monthly Plan",
                price: "$100",
                period: "/month",
                note: "Starting price",
                features: [
                  "Consistent publishing cadence",
                  "Content strategy included",
                  "Multiple pieces per month",
                  "Editorial calendar",
                  "Performance guidance",
                  "Builds long-term authority",
                ],
                highlight: true,
              },
              {
                label: "Book Ghostwriting",
                price: "$3,500",
                period: "",
                note: "Starting price",
                features: [
                  "Full manuscript writing",
                  "Outline & chapter planning",
                  "Written entirely in your voice",
                  "Full Amazon publication",
                  "Kindle & Paperback formats",
                  "You retain 100% authorship",
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
                <p className="text-4xl font-bold text-[#00D4FF] mb-1">
                  {tier.price}<span className="text-lg font-normal text-[#94A3B8]">{tier.period}</span>
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
          <p className="text-center text-[#94A3B8] text-sm mt-8">
            All pricing negotiable based on scope, length, and requirements.
          </p>
        </div>
      </section>

      {/* AUTHOR CALLOUT */}
      <section className="py-16 px-6 bg-[#131B2E] border-t border-[#1e2a45]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-4xl mb-5">📖</p>
          <h2 className="text-2xl font-bold text-[#E2E8F0] mb-4">Become a Published Author</h2>
          <p className="text-[#94A3B8] leading-relaxed max-w-2xl mx-auto">
            There is no faster way to establish unassailable authority in your industry than a
            published book with your name on the cover. We handle everything — writing, editing,
            cover design guidance, and full Amazon publication in Kindle and Paperback — so you
            can walk into any room as a published author.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#001F3F] to-[#131B2E] text-white py-16 px-6 text-center border-t border-[#1e2a45]">
        <h2 className="text-3xl font-bold mb-4 text-[#E2E8F0]">Ready to build your authority?</h2>
        <p className="text-[#94A3B8] mb-8 max-w-xl mx-auto">
          Let&apos;s talk about your expertise, your audience, and the content strategy that gets
          you recognized as the expert you already are.
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
