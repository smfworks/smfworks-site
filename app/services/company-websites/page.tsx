import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Company Websites",
  description: "Professional, AI-driven company websites for small businesses. SEO-optimized, responsive, and built to convert. New sites from $750, redesigns from $500.",
};

export default function CompanyWebsitesPage() {
  return (
    <>
      {/* HEADER */}
      <section className="bg-[#001F3F] text-[#E2E8F0] py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[300px] bg-[#007BFF] opacity-[0.05] blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="text-[#00D4FF] text-sm font-semibold uppercase tracking-widest mb-3">
            <Link href="/services" className="hover:underline">Services</Link> / Company Websites
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">Company Websites</h1>
          <p className="text-[#94A3B8] text-lg max-w-2xl leading-relaxed">
            A professional web presence built around your brand, your audience, and your goals —
            at a price that actually works for small business.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-20 px-6 bg-[#0A0F1F]">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#94A3B8] text-lg leading-relaxed mb-6">
            SMF Works specializes in creating professional company websites that effectively showcase
            your small business&apos;s brand with clarity, credibility, and a focus on user experience.
            Leveraging AI-driven tools, we design responsive, SEO-optimized sites that integrate
            seamlessly with your operations — including custom features like contact forms, service
            showcases, and e-commerce elements if needed.
          </p>
          <p className="text-[#94A3B8] text-lg leading-relaxed">
            Our process involves working in close partnership with you to customize the site to your
            exact needs, understanding your business goals, audience, and unique voice to build a
            digital presence that drives leads and conversions.
          </p>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-20 px-6 bg-[#131B2E]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-[#E2E8F0] text-center">What&apos;s Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "📱", title: "Responsive Design", desc: "Looks great on every device — phone, tablet, and desktop." },
              { icon: "🔍", title: "SEO Optimization", desc: "Built from the ground up to rank. Keywords, meta tags, site speed, and structure all dialed in." },
              { icon: "📋", title: "Contact Forms", desc: "Custom forms that route inquiries directly to you — no missed leads." },
              { icon: "🛠️", title: "Service Showcases", desc: "Clear, compelling presentation of what you do and why you&apos;re the right choice." },
              { icon: "🛒", title: "E-Commerce (Optional)", desc: "Need to sell online? We can integrate a full e-commerce solution." },
              { icon: "📊", title: "Built-In Analytics", desc: "Track visitor behavior and refine performance over time with data you can actually use." },
              { icon: "📝", title: "Blog & Newsletter Add-Ons", desc: "Expand your site with SEO-driving content and direct subscriber outreach." },
              { icon: "📈", title: "Vertical Content Publishing", desc: "Industry-specific fresh content to keep your site ranking and relevant." },
              { icon: "🤝", title: "Done With You", desc: "We work closely with you at every step — your voice, your goals, your site." },
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
            We keep costs accessible for SMBs. All prices are negotiable based on your requirements —
            no two businesses are the same.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                label: "New Site Build",
                price: "$750",
                note: "Starting price",
                features: [
                  "Up to 5 pages",
                  "Responsive design",
                  "SEO optimized",
                  "Contact form",
                  "Analytics integration",
                  "1 round of revisions",
                ],
                highlight: false,
              },
              {
                label: "Site Redesign",
                price: "$500",
                note: "Starting price",
                features: [
                  "Refresh of existing site",
                  "Updated branding & copy",
                  "Mobile optimization",
                  "SEO audit & fixes",
                  "Performance improvements",
                  "1 round of revisions",
                ],
                highlight: true,
              },
              {
                label: "Site Expansion",
                price: "Custom",
                note: "Priced per project",
                features: [
                  "Blog setup & content",
                  "Newsletter integration",
                  "E-commerce add-on",
                  "Industry content publishing",
                  "New service pages",
                  "Ongoing content retainer",
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
          <p className="text-center text-[#94A3B8] text-sm mt-8">
            All prices negotiable based on scope and requirements. Let&apos;s talk about what you actually need.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#001F3F] to-[#131B2E] text-white py-16 px-6 text-center border-t border-[#1e2a45]">
        <h2 className="text-3xl font-bold mb-4 text-[#E2E8F0]">Ready to build your digital presence?</h2>
        <p className="text-[#94A3B8] mb-8 max-w-xl mx-auto">
          Let&apos;s start with a 20-minute conversation about your business, your goals, and what a great
          website can do for you.
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
