import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Process Automation",
  description: "AI-powered process automation for trades and service businesses. Identify, map, and automate repetitive tasks to save hours and scale without adding staff. From $4,000 or $175/hr.",
};

export default function ProcessAutomationPage() {
  return (
    <>
      {/* HEADER */}
      <section className="bg-[#001F3F] text-[#E2E8F0] py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[300px] bg-[#007BFF] opacity-[0.05] blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="text-[#00D4FF] text-sm font-semibold uppercase tracking-widest mb-3">
            <Link href="/services" className="hover:underline">Services</Link> / Process Automation
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">Process Automation</h1>
          <p className="text-[#94A3B8] text-lg max-w-2xl leading-relaxed">
            Stop doing manually what a machine can do better. We identify, map, and automate
            the repetitive tasks eating your hours — so you can scale without adding headcount.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-20 px-6 bg-[#0A0F1F]">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#94A3B8] text-lg leading-relaxed mb-6">
            SMF Works identifies and automates repetitive tasks in your operations, freeing up
            hours for more valuable work. Using AI tools, we map your workflows, select the
            appropriate automation software, and implement solutions — from automated invoicing
            to inventory tracking and beyond.
          </p>
          <p className="text-[#94A3B8] text-lg leading-relaxed">
            This service is ideal for trades and service-based businesses looking to reduce errors,
            improve efficiency, and scale operations without the cost of additional staff. We build
            automations that run quietly in the background while you focus on what you do best.
          </p>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-20 px-6 bg-[#131B2E]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-[#E2E8F0] text-center">What&apos;s Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🗺️", title: "Workflow Mapping", desc: "We document your current processes end-to-end — identifying exactly where time is being lost and where automation delivers the highest ROI." },
              { icon: "🤖", title: "AI-Powered Automation", desc: "The right AI tools selected and configured for your specific workflows — not generic software demos, actual working solutions." },
              { icon: "🔧", title: "Custom Implementation", desc: "From automated invoicing to inventory tracking, scheduling, follow-ups, and reporting — built and deployed for your business." },
              { icon: "⚙️", title: "Software Selection", desc: "We cut through the noise and identify which automation platforms actually fit your needs, budget, and existing tools." },
              { icon: "📉", title: "Error Reduction", desc: "Manual processes introduce human error. Automation eliminates it — improving accuracy in billing, scheduling, communications, and data entry." },
              { icon: "📈", title: "Scalability Without Headcount", desc: "Handle more volume, more customers, and more complexity without hiring. Automation is the leverage that lets small businesses punch above their weight." },
              { icon: "🔗", title: "Systems Integration", desc: "Connect your CRM, accounting software, scheduling tools, and communication platforms so they work together seamlessly." },
              { icon: "🏗️", title: "Trades & Service Business Expertise", desc: "We understand the specific workflows of plumbers, HVAC techs, contractors, and service firms — and know exactly where automation makes the most difference." },
              { icon: "📊", title: "ROI-First Approach", desc: "We show you the math before you spend a dime — projected time savings, error reduction, and revenue impact tied to every automation we recommend." },
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

      {/* USE CASES */}
      <section className="py-20 px-6 bg-[#0A0F1F]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-[#E2E8F0] text-center">What We Automate</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Invoicing & billing",
              "Appointment scheduling & reminders",
              "Customer follow-up sequences",
              "Inventory tracking & alerts",
              "Job estimate generation",
              "Review request campaigns",
              "Payroll data collection",
              "Lead capture & CRM entry",
              "Reporting & dashboard updates",
              "Inter-system data syncing",
            ].map((item) => (
              <div key={item} className="bg-[#131B2E] rounded-lg px-5 py-4 border border-[#1e2a45] flex items-center gap-3">
                <span className="text-[#00D4FF]">✓</span>
                <span className="text-[#94A3B8] text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-20 px-6 bg-[#131B2E]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-[#E2E8F0]">Pricing</h2>
          <p className="text-[#94A3B8] mb-12 max-w-2xl mx-auto">
            Priced based on scope and complexity. Available as a full project engagement
            or on an hourly basis for targeted work.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {[
              {
                label: "Project-Based",
                price: "$4,000–$40,000",
                note: "Based on scope",
                features: [
                  "Full workflow mapping & discovery",
                  "Automation design & build",
                  "Software selection & configuration",
                  "Systems integration",
                  "Testing & deployment",
                  "Handoff documentation & training",
                ],
                highlight: true,
              },
              {
                label: "Hourly",
                price: "$175",
                period: "/hour",
                note: "Targeted engagements",
                features: [
                  "Specific automation builds",
                  "Workflow audits",
                  "Tool configuration",
                  "Troubleshooting & optimization",
                  "Consulting & strategy sessions",
                  "No minimum commitment",
                ],
                highlight: false,
              },
            ].map((tier) => (
              <div
                key={tier.label}
                className={`rounded-xl p-8 border ${
                  tier.highlight
                    ? "bg-[#0A0F1F] border-[#00D4FF]/40 shadow-lg shadow-[#00D4FF]/10"
                    : "bg-[#0A0F1F] border-[#1e2a45]"
                }`}
              >
                {tier.highlight && (
                  <p className="text-[#00D4FF] text-xs font-bold uppercase tracking-widest mb-3">Most Common</p>
                )}
                <h3 className="text-xl font-bold text-[#E2E8F0] mb-1">{tier.label}</h3>
                <p className="text-[#94A3B8] text-sm mb-4">{tier.note}</p>
                <p className="text-3xl font-bold text-[#00D4FF] mb-1">
                  {tier.price}<span className="text-lg font-normal text-[#94A3B8]">{tier.period ?? ""}</span>
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
            All pricing negotiable based on scope, complexity, and business requirements.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#001F3F] to-[#131B2E] text-white py-16 px-6 text-center border-t border-[#1e2a45]">
        <h2 className="text-3xl font-bold mb-4 text-[#E2E8F0]">Ready to get hours back in your day?</h2>
        <p className="text-[#94A3B8] mb-8 max-w-xl mx-auto">
          Let&apos;s walk through your operations and find the repetitive work that should
          already be running on autopilot.
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
