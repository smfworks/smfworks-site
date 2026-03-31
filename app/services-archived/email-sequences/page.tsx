import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Email Sequences",
  description: "AI-powered email sequences, nurture campaigns, and full-service email marketing for small businesses. Sequence creation from $500, management from $50/month.",
};

export default function EmailSequencesPage() {
  return (
    <>
      {/* HEADER */}
      <section className="bg-[#001F3F] text-[#E2E8F0] py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[300px] bg-[#007BFF] opacity-[0.05] blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="text-[#00D4FF] text-sm font-semibold uppercase tracking-widest mb-3">
            <Link href="/services" className="hover:underline">Services</Link> / Email Sequences
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">Email Sequences</h1>
          <p className="text-[#94A3B8] text-lg max-w-2xl leading-relaxed">
            AI-powered welcome series, nurture campaigns, and promotional blasts — built to
            convert, compliant by design, and as hands-off as you want them to be.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-20 px-6 bg-[#0A0F1F]">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#94A3B8] text-lg leading-relaxed mb-6">
            SMF Works creates effective email sequences — including welcome series, nurture
            campaigns, and promotional blasts — all powered by AI for personalization and
            optimization. We can build this automation to integrate seamlessly into your existing
            email system, or set up a new system from scratch.
          </p>
          <p className="text-[#94A3B8] text-lg leading-relaxed">
            If you prefer to offload it completely, we can host, manage, and run the entire
            system along with content creation end to end — including targeted account prospecting
            as part of the service. From initial strategy to copywriting and delivery, our sequences
            are built to build relationships, drive sales, and retain customers.
          </p>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-20 px-6 bg-[#131B2E]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-[#E2E8F0] text-center">What&apos;s Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "👋", title: "Welcome Series", desc: "Make the right first impression. Automated onboarding sequences that turn new subscribers into loyal customers." },
              { icon: "🌱", title: "Nurture Campaigns", desc: "Keep prospects warm with targeted content that moves them down the funnel at the right pace." },
              { icon: "📣", title: "Promotional Blasts", desc: "High-impact one-time sends for product launches, seasonal offers, and time-sensitive campaigns." },
              { icon: "🎯", title: "Segmentation", desc: "The right message to the right person. We build audience segments that improve relevance and response rates." },
              { icon: "🧪", title: "A/B Testing", desc: "Subject lines, copy, send times — we test what matters and optimize based on real data." },
              { icon: "⚡", title: "Automation Triggers", desc: "Behavior-based triggers that send the right email at exactly the right moment — no manual effort required." },
              { icon: "🔍", title: "Account Prospecting", desc: "Need to build your list? We can integrate targeted outbound prospecting directly into your email pipeline." },
              { icon: "🔗", title: "CRM Integration", desc: "Connects with your existing CRM for seamless delivery, tracking, and contact management." },
              { icon: "✅", title: "CAN-SPAM Compliance", desc: "Every sequence built to meet legal requirements — compliant by design, not as an afterthought." },
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
            Flexible options from one-time builds to fully managed end-to-end service.
            All prices negotiable based on your requirements.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                label: "Sequence Build",
                price: "$500",
                period: "",
                note: "One-time, starting price",
                features: [
                  "Welcome, nurture, or promo series",
                  "Copywriting & design",
                  "Automation trigger setup",
                  "Integration into your existing system",
                  "CAN-SPAM compliant",
                ],
                highlight: false,
              },
              {
                label: "Management",
                price: "$50",
                period: "/month",
                note: "Starting price",
                features: [
                  "Ongoing sequence management",
                  "Performance monitoring",
                  "A/B testing",
                  "List hygiene & segmentation",
                  "Monthly reporting",
                ],
                highlight: false,
              },
              {
                label: "Full-Service Hosted",
                price: "$750",
                period: "",
                note: "Starting price",
                features: [
                  "We host & run the system",
                  "End-to-end content creation",
                  "Targeted account prospecting",
                  "List building & management",
                  "CRM integration",
                  "Compliance built in",
                ],
                highlight: true,
              },
              {
                label: "Single Campaign",
                price: "$250",
                period: "",
                note: "Per campaign",
                features: [
                  "One-off promotional blast",
                  "Copywriting & design",
                  "Segmentation & targeting",
                  "Send & delivery management",
                  "Performance report",
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
            All pricing negotiable based on scope, volume, and requirements.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#001F3F] to-[#131B2E] text-white py-16 px-6 text-center border-t border-[#1e2a45]">
        <h2 className="text-3xl font-bold mb-4 text-[#E2E8F0]">Ready to put your email marketing on autopilot?</h2>
        <p className="text-[#94A3B8] mb-8 max-w-xl mx-auto">
          Let&apos;s talk about your current setup, your goals, and how we can build a system
          that works while you focus on running your business.
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
