import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | SMF Works",
  description: "AI content production and AI workflow consulting for small businesses. Practical, precise, and priced for SMBs.",
};

export default function ServicesPage() {
  return (
    <>
      {/* HEADER */}
      <section className="bg-[#1E1E1E] text-[#F8F5F0] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#C87941] text-sm font-semibold uppercase tracking-widest mb-3">What We Offer</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">Services Built for Small Business</h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            No enterprise pricing. No generic outputs. Just precise, practical AI work —
            delivered by someone who&apos;s actually done it at scale.
          </p>
        </div>
      </section>

      {/* SERVICE 1: CONTENT */}
      <section id="content" className="py-20 px-6 bg-[#F8F5F0]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-5xl mb-5">✍️</div>
              <h2 className="text-3xl font-bold mb-4">AI Content Production</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Your business has a story worth telling. We use AI to tell it — consistently,
                professionally, and at a fraction of what a traditional agency would charge.
                Every piece is shaped to your voice, your audience, and your goals.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Whether you need a steady drumbeat of blog content to drive SEO,
                email sequences that actually convert, or thought leadership pieces that
                establish you as the authority in your market — we&apos;ve got you covered.
              </p>
              <Link href="/contact" className="bg-[#C87941] text-white px-8 py-3 rounded font-semibold hover:bg-[#b56b35] transition-colors inline-block">
                Get a Quote
              </Link>
            </div>
            <div className="space-y-4">
              {[
                { title: "Blog Posts & Articles", desc: "SEO-optimized, brand-voice-matched, ready to publish." },
                { title: "Email Sequences", desc: "Welcome series, nurture campaigns, promotional blasts." },
                { title: "Social Media Content", desc: "Consistent, platform-native content calendars." },
                { title: "White Papers & Reports", desc: "Establish authority with data-driven long-form content." },
                { title: "Thought Leadership", desc: "LinkedIn ghostwriting, op-eds, founder stories." },
                { title: "Website Copy", desc: "Landing pages, service pages, about pages that convert." },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-lg p-5 border border-gray-100 shadow-sm">
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="bg-[#C87941] h-1 w-full" />

      {/* SERVICE 2: WORKFLOW */}
      <section id="workflow" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 space-y-4">
              {[
                { title: "Process Automation", desc: "Identify and automate repetitive tasks that eat your hours." },
                { title: "AI Tool Selection", desc: "Cut through the noise — we find what actually fits your needs." },
                { title: "Custom AI Workflows", desc: "Build flows that connect your tools, your team, your data." },
                { title: "Staff Enablement", desc: "Train your people to work with AI, not around it." },
                { title: "ROI Analysis", desc: "We show you the math before you spend a dime." },
                { title: "Ongoing Optimization", desc: "AI moves fast. We keep your systems current." },
              ].map((item) => (
                <div key={item.title} className="bg-[#F8F5F0] rounded-lg p-5 border border-gray-100 shadow-sm">
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="order-1 md:order-2">
              <div className="text-5xl mb-5">⚙️</div>
              <h2 className="text-3xl font-bold mb-4">AI Workflow Consulting</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Most small businesses are leaving serious time and money on the table
                because they don&apos;t know which AI tools are worth using — or how to make
                them actually work together.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                We map your operations, find the friction points, and build AI workflows
                that run quietly in the background while you focus on what you do best.
                Trades businesses, service firms, retail — we&apos;ve seen it all.
              </p>
              <Link href="/contact" className="bg-[#C87941] text-white px-8 py-3 rounded font-semibold hover:bg-[#b56b35] transition-colors inline-block">
                Start a Conversation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#3D5A80] text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Not sure which service fits?</h2>
        <p className="text-blue-200 mb-8 max-w-xl mx-auto">
          Let&apos;s talk for 20 minutes. No pitch, no pressure — just a real conversation
          about where AI can help your business.
        </p>
        <Link
          href="/contact"
          className="bg-[#C87941] text-white px-10 py-3 rounded font-semibold hover:bg-[#b56b35] transition-colors"
        >
          Request a Call
        </Link>
      </section>
    </>
  );
}
