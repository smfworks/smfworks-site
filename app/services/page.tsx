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
      <section className="bg-[#001F3F] text-[#E2E8F0] py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[300px] bg-[#007BFF] opacity-[0.05] blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="text-[#00D4FF] text-sm font-semibold uppercase tracking-widest mb-3">What We Offer</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">Services Built for Small Business</h1>
          <p className="text-[#94A3B8] text-lg max-w-2xl leading-relaxed">
            No enterprise pricing. No generic outputs. Just precise, practical AI work —
            delivered by someone who&apos;s actually done it at scale.
          </p>
        </div>
      </section>

      {/* SERVICE 1: CONTENT */}
      <section id="content" className="py-20 px-6 bg-[#0A0F1F]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-14 h-14 rounded-lg bg-[#00D4FF]/10 flex items-center justify-center mb-5">
                <span className="text-3xl">✍️</span>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-[#E2E8F0]">Marketing & SEO Content Production</h2>
              <p className="text-[#94A3B8] leading-relaxed mb-6">
                Your business has a story worth telling. We use the latest in technology to tell it — consistently,
                professionally, and at a fraction of what a traditional agency would charge.
                Every piece is shaped to your voice, your audience, and your goals.
              </p>
              <p className="text-[#94A3B8] leading-relaxed mb-8">
                Whether you need a steady drumbeat of blog content to drive SEO,
                email sequences that actually convert, or thought leadership pieces that
                establish you as the authority in your market — we&apos;ve got you covered.
              </p>
              <Link href="/contact" className="bg-[#FF6B00] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#e55f00] transition-colors inline-block shadow-lg shadow-[#FF6B00]/20">
                Get a Quote
              </Link>
            </div>
            <div className="space-y-4">
              {[
                { title: "Company Websites", desc: "Professional websites that convey your brand with clarity and credibility.", href: "/services/company-websites" },
                { title: "Blog Posts & Articles", desc: "SEO-optimized, brand-voice-matched, ready to publish.", href: "/services/blog-posts-articles" },
                { title: "Email Sequences", desc: "Welcome series, nurture campaigns, promotional blasts.", href: "/services/email-sequences" },
                { title: "Social Media Content", desc: "Consistent, platform-native content calendars.", href: "/services/social-media-content" },
                { title: "White Papers & Reports", desc: "Establish authority with data-driven long-form content.", href: "/services/white-papers-reports" },
                { title: "Thought Leadership", desc: "LinkedIn ghostwriting, op-eds, founder stories.", href: "/services/thought-leadership" },
                { title: "Website Copy", desc: "Landing pages, service pages, about pages that convert.", href: "/services/website-copy" },
              ].map((item) => (
                item.href ? (
                  <Link key={item.title} href={item.href} className="bg-[#131B2E] rounded-lg p-5 border border-[#1e2a45] hover:border-[#00D4FF]/30 transition-colors block group">
                    <h3 className="font-semibold mb-1 text-[#E2E8F0] group-hover:text-[#00D4FF] transition-colors">{item.title} <span className="text-[#00D4FF] text-xs">→</span></h3>
                    <p className="text-sm text-[#94A3B8]">{item.desc}</p>
                  </Link>
                ) : (
                  <div key={item.title} className="bg-[#131B2E] rounded-lg p-5 border border-[#1e2a45] hover:border-[#00D4FF]/30 transition-colors">
                    <h3 className="font-semibold mb-1 text-[#E2E8F0]">{item.title}</h3>
                    <p className="text-sm text-[#94A3B8]">{item.desc}</p>
                  </div>
                )
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="bg-gradient-to-r from-[#00D4FF] to-[#FF6B00] h-px w-full opacity-30" />

      {/* SERVICE 2: WORKFLOW */}
      <section id="workflow" className="py-20 px-6 bg-[#131B2E]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 space-y-4">
              {[
                { title: "Process Automation", desc: "Identify and automate repetitive tasks that eat your hours.", href: "/services/process-automation" },
                { title: "AI Tool Selection", desc: "Cut through the noise — we find what actually fits your needs.", href: "/services/ai-tool-selection" },
                { title: "Custom AI Workflows", desc: "Build flows that connect your tools, your team, your data.", href: "/services/custom-ai-workflows" },
                { title: "Staff Enablement", desc: "Train your people to work with AI, not around it." },
                { title: "ROI Analysis", desc: "We show you the math before you spend a dime." },
                { title: "Ongoing Optimization", desc: "AI moves fast. We keep your systems current." },
              ].map((item) => (
                item.href ? (
                  <Link key={item.title} href={item.href} className="bg-[#0A0F1F] rounded-lg p-5 border border-[#1e2a45] hover:border-[#FF6B00]/30 transition-colors block group">
                    <h3 className="font-semibold mb-1 text-[#E2E8F0] group-hover:text-[#FF6B00] transition-colors">{item.title} <span className="text-[#FF6B00] text-xs">→</span></h3>
                    <p className="text-sm text-[#94A3B8]">{item.desc}</p>
                  </Link>
                ) : (
                  <div key={item.title} className="bg-[#0A0F1F] rounded-lg p-5 border border-[#1e2a45] hover:border-[#FF6B00]/30 transition-colors">
                    <h3 className="font-semibold mb-1 text-[#E2E8F0]">{item.title}</h3>
                    <p className="text-sm text-[#94A3B8]">{item.desc}</p>
                  </div>
                )
              ))}
            </div>
            <div className="order-1 md:order-2">
              <div className="w-14 h-14 rounded-lg bg-[#FF6B00]/10 flex items-center justify-center mb-5">
                <span className="text-3xl">⚙️</span>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-[#E2E8F0]">AI Workflow Consulting</h2>
              <p className="text-[#94A3B8] leading-relaxed mb-6">
                Most small businesses are leaving serious time and money on the table
                because they don&apos;t know which AI tools are worth using — or how to make
                them actually work together.
              </p>
              <p className="text-[#94A3B8] leading-relaxed mb-8">
                We map your operations, find the friction points, and build AI workflows
                that run quietly in the background while you focus on what you do best.
                Trades businesses, service firms, retail — we&apos;ve seen it all.
              </p>
              <Link href="/contact" className="bg-[#FF6B00] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#e55f00] transition-colors inline-block shadow-lg shadow-[#FF6B00]/20">
                Start a Conversation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#001F3F] to-[#131B2E] text-white py-16 px-6 text-center border-t border-[#1e2a45]">
        <h2 className="text-3xl font-bold mb-4 text-[#E2E8F0]">Not sure which service fits?</h2>
        <p className="text-[#94A3B8] mb-8 max-w-xl mx-auto">
          Let&apos;s talk for 20 minutes. No pitch, no pressure — just a real conversation
          about where AI can help your business.
        </p>
        <Link
          href="/contact"
          className="bg-[#FF6B00] text-white px-10 py-3 rounded-lg font-semibold hover:bg-[#e55f00] transition-colors shadow-lg shadow-[#FF6B00]/20"
        >
          Request a Call
        </Link>
      </section>
    </>
  );
}
