import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Staff Enablement | SMF Works",
  description: "AI training programs for small business teams. Virtual or in-person workshops, customized resources, and ongoing support. Programs from $500, per-employee from $300.",
};

export default function StaffEnablementPage() {
  return (
    <>
      {/* HEADER */}
      <section className="bg-[#001F3F] text-[#E2E8F0] py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[300px] bg-[#007BFF] opacity-[0.05] blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="text-[#00D4FF] text-sm font-semibold uppercase tracking-widest mb-3">
            <Link href="/services" className="hover:underline">Services</Link> / Staff Enablement
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">Staff Enablement</h1>
          <p className="text-[#94A3B8] text-lg max-w-2xl leading-relaxed">
            The best AI tools are worthless if your team doesn&apos;t use them. We train
            your people to work with AI confidently — in the formats that fit your business,
            without disrupting your operations.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-20 px-6 bg-[#0A0F1F]">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#94A3B8] text-lg leading-relaxed mb-6">
            SMF Works trains your team to effectively use AI tools and integrate them into
            daily workflows without disruption. Training is available in virtual or in-person
            formats — designed around your team&apos;s schedule, technical level, and the specific
            tools you&apos;re deploying.
          </p>
          <p className="text-[#94A3B8] text-lg leading-relaxed">
            Our programs include hands-on workshops, customized resources, and ongoing support
            to build the confidence and skills your staff needs — ensuring they work smarter
            and adapt to new technologies without friction or resistance.
          </p>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-20 px-6 bg-[#131B2E]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-[#E2E8F0] text-center">What&apos;s Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🖥️", title: "Virtual Training", desc: "Live online sessions that work around your team&apos;s schedule — no travel required, no productivity lost." },
              { icon: "🏢", title: "In-Person Workshops", desc: "On-site training that puts your team in the room together — hands-on, immersive, and built for your environment." },
              { icon: "🛠️", title: "Hands-On Practice", desc: "We don&apos;t just explain — we practice. Your team leaves every session having used the tools, not just heard about them." },
              { icon: "📚", title: "Customized Resources", desc: "Training materials, quick-reference guides, and playbooks tailored to your tools, your workflows, and your team." },
              { icon: "🎯", title: "Role-Based Training", desc: "Different roles need different skills. We tailor content to how each function in your business actually uses AI." },
              { icon: "💬", title: "Ongoing Support", desc: "Training doesn&apos;t end when the workshop does. We provide follow-up support as your team encounters real-world challenges." },
              { icon: "📈", title: "Adoption Tracking", desc: "We monitor adoption progress and adjust the program to address gaps — ensuring your investment translates to actual usage." },
              { icon: "🔄", title: "Workflow Integration", desc: "Training built around your specific workflows — so staff learn AI in the context of what they actually do every day." },
              { icon: "🏗️", title: "Scalable Programs", desc: "From a single department to company-wide rollouts — programs designed to scale to the size and structure of your organization." },
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
            Priced based on program type, length, team size, and delivery format.
            All pricing negotiable based on your requirements.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              {
                label: "Per Program",
                price: "$500–$15,000",
                note: "Based on type & length",
                features: [
                  "Single team or department",
                  "Virtual or in-person",
                  "Customized curriculum",
                  "Hands-on workshop format",
                  "Supporting resources included",
                  "Follow-up support",
                ],
                highlight: false,
              },
              {
                label: "Per Employee",
                price: "$300–$3,000",
                note: "Per-seat pricing",
                features: [
                  "Individual seat pricing",
                  "Role-based curriculum",
                  "Self-paced or instructor-led",
                  "Personalized resources",
                  "Progress tracking",
                  "Certification on completion",
                ],
                highlight: true,
              },
              {
                label: "Company-Wide",
                price: "$2,500–$250,000",
                note: "Full organization rollout",
                features: [
                  "All departments & roles covered",
                  "Phased rollout planning",
                  "Multi-format delivery",
                  "Manager enablement included",
                  "Adoption monitoring",
                  "Ongoing optimization support",
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
                  <p className="text-[#00D4FF] text-xs font-bold uppercase tracking-widest mb-3">Most Flexible</p>
                )}
                <h3 className="text-xl font-bold text-[#E2E8F0] mb-1">{tier.label}</h3>
                <p className="text-[#94A3B8] text-sm mb-4">{tier.note}</p>
                <p className="text-2xl font-bold text-[#00D4FF] mb-1">{tier.price}</p>
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
            All pricing negotiable based on team size, program scope, and delivery format.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#001F3F] to-[#131B2E] text-white py-16 px-6 text-center border-t border-[#1e2a45]">
        <h2 className="text-3xl font-bold mb-4 text-[#E2E8F0]">Ready to get your team AI-ready?</h2>
        <p className="text-[#94A3B8] mb-8 max-w-xl mx-auto">
          Let&apos;s talk about your team, your tools, and the training program that gets
          everyone working smarter — without the disruption.
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
