import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Media Content",
  description: "Full social media content generation and management across up to 5 platforms. Strategy, creation, scheduling, and engagement monitoring starting at $500.",
};

export default function SocialMediaContentPage() {
  return (
    <>
      {/* HEADER */}
      <section className="bg-[#001F3F] text-[#E2E8F0] py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[300px] bg-[#007BFF] opacity-[0.05] blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="text-[#00D4FF] text-sm font-semibold uppercase tracking-widest mb-3">
            <Link href="/services" className="hover:underline">Services</Link> / Social Media Content
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">Social Media Content</h1>
          <p className="text-[#94A3B8] text-lg max-w-2xl leading-relaxed">
            Consistent, platform-native content across up to 5 accounts — strategy, creation,
            scheduling, and monitoring all handled. Starting at $500.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-20 px-6 bg-[#0A0F1F]">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#94A3B8] text-lg leading-relaxed mb-6">
            We provide full social media content generation and management across up to 5 platform
            accounts — LinkedIn, TikTok, Facebook, Instagram, YouTube, X, and more — delivering
            consistent, platform-native content calendars that keep your brand active and engaging.
          </p>
          <p className="text-[#94A3B8] text-lg leading-relaxed">
            AI tools help generate ideas, optimize posting times, and analyze performance, while
            we craft tailored posts — including writeups, articles, images, videos, and more —
            to resonate with your specific audience. From strategy through execution, we handle
            it so you don&apos;t have to.
          </p>
        </div>
      </section>

      {/* PLATFORMS */}
      <section className="py-16 px-6 bg-[#131B2E]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8 text-[#E2E8F0]">Platforms We Cover</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {["LinkedIn", "Instagram", "TikTok", "Facebook", "X (Twitter)", "YouTube", "Pinterest", "And more"].map((p) => (
              <span key={p} className="bg-[#0A0F1F] border border-[#1e2a45] text-[#94A3B8] px-5 py-2 rounded-full text-sm font-medium">
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-20 px-6 bg-[#0A0F1F]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-[#E2E8F0] text-center">What&apos;s Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🗺️", title: "Strategy Development", desc: "We start with your goals, your audience, and your brand — then build a platform strategy designed to grow the right way." },
              { icon: "✍️", title: "Content Creation", desc: "Posts, articles, captions, and long-form writeups — all tailored to each platform's format and your brand voice." },
              { icon: "🖼️", title: "Images & Graphics", desc: "Custom visuals created and optimized for each platform to stop the scroll and drive engagement." },
              { icon: "🎬", title: "Video Content", desc: "Short-form video scripts, reels, and clips built for TikTok, Instagram, YouTube, and beyond." },
              { icon: "📅", title: "Scheduling", desc: "AI-optimized posting times for maximum reach. We schedule everything so your feed stays consistent without manual effort." },
              { icon: "📊", title: "Performance Analysis", desc: "What&apos;s working, what&apos;s not, and what to do about it. Regular performance reviews keep your strategy sharp." },
              { icon: "👁️", title: "Engagement Monitoring", desc: "Basic monitoring of comments and interactions — keeping your brand responsive and your audience engaged." },
              { icon: "📈", title: "Audience Growth", desc: "Every piece of content is built to grow your following, increase interactions, and drive traffic back to your site or store." },
              { icon: "🤖", title: "AI-Optimized", desc: "AI tools surface trending topics, optimize timing, and continuously improve content performance based on real data." },
            ].map((item) => (
              <div key={item.title} className="bg-[#131B2E] rounded-lg p-6 border border-[#1e2a45] hover:border-[#00D4FF]/30 transition-colors">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-semibold mb-2 text-[#E2E8F0]">{item.title}</h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-20 px-6 bg-[#131B2E]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-[#E2E8F0] text-center">Pricing</h2>
          <p className="text-[#94A3B8] text-center mb-12 max-w-2xl mx-auto">
            Flexible options to fit your needs and budget. All pricing negotiable based on
            platforms, volume, and scope.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                label: "Starter Package",
                price: "$500",
                period: "",
                note: "Starting price",
                features: [
                  "Up to 2 platforms",
                  "Content calendar",
                  "Posts, images & captions",
                  "Scheduling included",
                  "Basic performance reporting",
                ],
                highlight: false,
              },
              {
                label: "Full Management",
                price: "Custom",
                period: "",
                note: "Up to 5 platforms",
                features: [
                  "Up to 5 platform accounts",
                  "Strategy development",
                  "Posts, articles, images & video",
                  "AI-optimized scheduling",
                  "Engagement monitoring",
                  "Monthly performance review",
                ],
                highlight: true,
              },
              {
                label: "Hourly Services",
                price: "$50",
                period: "/hour",
                note: "Starting rate",
                features: [
                  "Flexible, on-demand support",
                  "One-off content creation",
                  "Campaign bursts",
                  "Audit & strategy sessions",
                  "No long-term commitment",
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
            All pricing negotiable based on platforms, content volume, and requirements.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#001F3F] to-[#131B2E] text-white py-16 px-6 text-center border-t border-[#1e2a45]">
        <h2 className="text-3xl font-bold mb-4 text-[#E2E8F0]">Ready to show up consistently on social?</h2>
        <p className="text-[#94A3B8] mb-8 max-w-xl mx-auto">
          Let&apos;s talk about your platforms, your audience, and a content strategy that
          keeps your brand active without consuming your time.
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
