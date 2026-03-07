import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Posts & Articles",
  description: "SEO-optimized, brand-aligned blog posts and articles for small businesses. Ready to publish, starting at $50/month.",
};

export default function BlogPostsArticlesPage() {
  return (
    <>
      {/* HEADER */}
      <section className="bg-[#001F3F] text-[#E2E8F0] py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[300px] bg-[#007BFF] opacity-[0.05] blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="text-[#00D4FF] text-sm font-semibold uppercase tracking-widest mb-3">
            <Link href="/services" className="hover:underline">Services</Link> / Blog Posts & Articles
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">Blog Posts & Articles</h1>
          <p className="text-[#94A3B8] text-lg max-w-2xl leading-relaxed">
            SEO-optimized, brand-aligned content that builds your authority, drives traffic,
            and converts readers — ready to publish, starting at $50/month.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-20 px-6 bg-[#0A0F1F]">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#94A3B8] text-lg leading-relaxed mb-6">
            Our blog posts and articles service delivers SEO-optimized, brand-aligned content
            that&apos;s ready to publish and designed to boost your online visibility — whether you
            choose to post it yourself to your site, blog, or newsletters, or let us handle the
            publishing directly to remove the administrative burden and allow you to focus on
            your core business.
          </p>
          <p className="text-[#94A3B8] text-lg leading-relaxed">
            Using AI for research and optimization, we craft informative, engaging pieces that
            address your audience&apos;s pain points, incorporate relevant keywords, and establish
            your business as an industry authority. Every article is tailored to your voice and
            goals — complete with calls-to-action to drive traffic and conversions.
          </p>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-20 px-6 bg-[#131B2E]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-[#E2E8F0] text-center">What&apos;s Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "💡", title: "Topic Ideation", desc: "We research and recommend topics that align with your audience, your goals, and what search engines are rewarding right now." },
              { icon: "✍️", title: "Writing & Editing", desc: "From short-form tips to in-depth guides — every piece written, edited, and polished to your brand voice." },
              { icon: "🔍", title: "SEO Optimization", desc: "Relevant keywords, proper structure, meta descriptions, and internal linking built in from the start." },
              { icon: "🖼️", title: "Image Suggestions", desc: "Recommended visuals to complement each piece and enhance engagement." },
              { icon: "📣", title: "Calls-to-Action", desc: "Every article ends with a purposeful CTA designed to move readers toward your business goals." },
              { icon: "📅", title: "Content Calendar", desc: "We work with you on delivery cadence to maintain a consistent publishing schedule that supports long-term SEO growth." },
              { icon: "🚀", title: "Optional Publishing", desc: "Let us handle posting directly to your site, blog, or newsletter — removing the admin burden entirely." },
              { icon: "📊", title: "Short-Form & Long-Form", desc: "Quick tips, how-to guides, opinion pieces, industry breakdowns — whatever format fits your strategy." },
              { icon: "🎯", title: "Audience-First Writing", desc: "Every piece speaks directly to your customers&apos; pain points and positions you as the answer." },
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
            Flexible pricing based on frequency and service level. All plans negotiable —
            built around what your business actually needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                label: "Starter",
                price: "$50",
                period: "/month",
                note: "Starting price",
                features: [
                  "1–2 articles per month",
                  "SEO-optimized content",
                  "Brand voice matched",
                  "Topic ideation included",
                  "CTA in every piece",
                  "You handle publishing",
                ],
                highlight: false,
              },
              {
                label: "Growth",
                price: "Custom",
                period: "",
                note: "Priced by cadence",
                features: [
                  "Weekly content delivery",
                  "SEO + keyword strategy",
                  "Image suggestions",
                  "Content calendar included",
                  "Editing & revisions",
                  "You handle publishing",
                ],
                highlight: true,
              },
              {
                label: "Full Service",
                price: "Custom",
                period: "",
                note: "Done-for-you",
                features: [
                  "Everything in Growth",
                  "We publish directly to your site",
                  "Newsletter distribution",
                  "Performance tracking",
                  "Monthly content review",
                  "Ongoing optimization",
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
                  <p className="text-[#00D4FF] text-xs font-bold uppercase tracking-widest mb-3">Most Popular</p>
                )}
                <h3 className="text-xl font-bold text-[#E2E8F0] mb-1">{tier.label}</h3>
                <p className="text-[#94A3B8] text-sm mb-4">{tier.note}</p>
                <p className="text-4xl font-bold text-[#00D4FF] mb-1">{tier.price}<span className="text-lg font-normal text-[#94A3B8]">{tier.period}</span></p>
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
            All pricing negotiable based on scope, frequency, and requirements.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#001F3F] to-[#131B2E] text-white py-16 px-6 text-center border-t border-[#1e2a45]">
        <h2 className="text-3xl font-bold mb-4 text-[#E2E8F0]">Ready to start building your authority?</h2>
        <p className="text-[#94A3B8] mb-8 max-w-xl mx-auto">
          Let&apos;s talk about your audience, your goals, and a content strategy that actually moves the needle.
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
