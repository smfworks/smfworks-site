import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "WisdomForge — Ancient Wisdom, Forged for Every Age",
  description:
    "Philosophy booklets, audio stories, and video explorers for ages 5 to adult. Free first booklet. 15+ philosophers coming.",
  alternates: { canonical: "https://smfworks.com/wisdomforge" },
};

const products = [
  {
    title: "Wisdom Booklets",
    description: "One philosopher, one story at a time. Chapters, tales, and reflection questions crafted for four age groups. Start free with Epictetus Elementary.",
    icon: "📖",
    color: "#C9A96E",
  },
  {
    title: "Audio Albums",
    description: "Each chapter, voiced. Rotating ElevenLabs voices give every philosopher a distinct presence. Listen on Amazon Music, Apple Music, or catch free clips on YouTube.",
    icon: "🎧",
    color: "#7BA3A8",
  },
  {
    title: "Video Explorers",
    description: "NotebookLM-generated videos that bring each chapter to life. Free on YouTube — shareable, watchable, memorable.",
    icon: "🎬",
    color: "#B87D6A",
  },
  {
    title: "Free Printables",
    description: "Activities, worksheets, and reflection prompts. Download, print, and continue the conversation off-screen.",
    icon: "✏️",
    color: "#8A9A7B",
  },
];

const pipeline = [
  // Philosophers (Stoics)
  { name: "Epictetus", status: "Live", icon: "⚔️" },
  { name: "Marcus Aurelius", status: "In Draft", icon: "🛡️" },
  { name: "Seneca", status: "Queued", icon: "🏛️" },
  { name: "Heraclitus", status: "Planned", icon: "🔥" },
  { name: "Parmenides", status: "Planned", icon: "❄️" },
  { name: "Pythagoras", status: "Planned", icon: "🔺" },
  { name: "Democritus", status: "Planned", icon: "⚛️" },
  { name: "Epicurus", status: "Planned", icon: "🌿" },
  { name: "Zeno", status: "Planned", icon: "🐢" },
  // Theologians
  { name: "Augustine", status: "Planned", icon: "⛪" },
  { name: "Thomas Aquinas", status: "In Progress*", icon: "📜" },
  { name: "Julian of Norwich", status: "Planned", icon: "🕊️" },
  // Scientists
  { name: "Galileo", status: "Planned", icon: "🔭" },
  { name: "Newton", status: "Planned", icon: "🍎" },
  // Great Documents
  { name: "The Constitution", status: "Planned", icon: "📜" },
  { name: "The Declaration", status: "Planned", icon: "✒️" },
];

const ageGroups = [
  { label: "Little Thinkers", ages: "5–10", description: "Stories that plant seeds. Gentle questions, big ideas in small hands." },
  { label: "Young Minds", ages: "11–14", description: "Chapters that challenge without overwhelming. The start of a lifelong conversation." },
  { label: "Emerging Adults", ages: "15–18", description: "Deeper dives, sharper questions. Philosophy as preparation for the world." },
  { label: "Lifelong Learners", ages: "Adult", description: "Full depth, full voice. The philosopher as companion, not lecturer." },
];

export default function WisdomForgePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/wisdomforge-hero.png"
            alt="Ancient forge with philosopher bust"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/60 via-[#0a0a0f]/40 to-[#0a0a0f]" />
        </div>

        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#C9A96E] opacity-[0.08] blur-[150px] rounded-full animate-pulse pointer-events-none" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#7BA3A8] opacity-[0.06] blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C9A96E]/10 border border-[#C9A96E]/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#C9A96E] animate-pulse" />
            <span className="text-[#C9A96E] text-sm font-medium tracking-wide uppercase">Phase 1 — Coming Soon</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#F5F0E8] mb-6 leading-[1.1] tracking-tight">
            Wisdom<span className="text-[#C9A96E]">Forge</span>
          </h1>

          <p className="text-xl md:text-2xl text-[#A89B8C] mb-4 max-w-2xl mx-auto leading-relaxed font-light">
            Philosophy for every age.<br className="hidden md:block" />
            One philosopher. One story at a time.
          </p>

          <p className="text-base md:text-lg text-[#6B6560] mb-12 max-w-xl mx-auto leading-relaxed">
            Booklets, audio, and video — crafted for ages 5 to adult.
            The first philosopher is live and free.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/wisdomforge/epictetus"
              className="group relative px-8 py-4 bg-[#C9A96E] text-[#0a0a0f] font-semibold rounded-lg hover:bg-[#D4B87A] transition-all duration-300 shadow-lg shadow-[#C9A96E]/20 hover:shadow-[#C9A96E]/40"
            >
              <span className="flex items-center gap-2">
                Get the Free Booklets
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
            <Link href="#products" className="px-8 py-4 text-[#A89B8C] font-medium hover:text-[#C9A96E] transition-colors border border-[#2a2a2a] rounded-lg hover:border-[#C9A96E]/30">
              See What's Coming
            </Link>
          </div>

          <div className="mt-20 animate-bounce">
            <svg className="w-6 h-6 mx-auto text-[#C9A96E]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* THE GAP */}
      <section className="py-24 md:py-32 px-6 bg-[#0f0f14] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#7BA3A8] opacity-[0.04] blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#C9A96E] text-sm font-semibold uppercase tracking-[0.2em] mb-4">The Gap</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F0E8] mb-6 leading-tight">
                Big ideas.<span className="text-[#7BA3A8]"> No entry point.</span>
              </h2>
              <div className="space-y-4 text-[#A89B8C] text-lg leading-relaxed">
                <p>Philosophy is treated like a graduate subject. Dense texts. Imposing names. The assumption that you need a degree to think clearly.</p>
                <p>But children ask the deepest questions. Teenagers wrestle with the hardest problems. Adults crave meaning they were never taught to find.</p>
                <p className="text-[#C9A96E]">WisdomForge meets you where you are — with stories, voices, and formats that fit your life, not someone else's syllabus.</p>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: "15+", label: "Philosophers Coming" },
                  { number: "4", label: "Age Groups" },
                  { number: "3", label: "Formats" },
                  { number: "1", label: "Free to Start" },
                ].map((stat, i) => (
                  <div key={i} className="bg-[#1a1a22] border border-[#2a2a35] rounded-xl p-6 hover:border-[#C9A96E]/30 transition-all group">
                    <div className="text-3xl md:text-4xl font-bold text-[#C9A96E] mb-2 group-hover:scale-110 transition-transform origin-left">{stat.number}</div>
                    <div className="text-sm text-[#6B6560]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 PRODUCTS */}
      <section id="products" className="py-24 md:py-32 px-6 bg-[#0a0a0f] relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#C9A96E] text-sm font-semibold uppercase tracking-[0.2em] mb-4">The Product Line</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F0E8] mb-4">
              Four ways to <span className="text-[#7BA3A8]">encounter wisdom.</span>
            </h2>
            <p className="text-[#6B6560] text-lg max-w-2xl mx-auto">
              Read it. Hear it. Watch it. Do it. The same philosopher, shaped for how you live.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {products.map((product, i) => (
              <div key={i} className="group relative bg-[#13131a] border border-[#1e1e28] rounded-xl p-8 hover:border-[#C9A96E]/30 transition-all duration-300">
                <div className="text-4xl mb-4">{product.icon}</div>
                <h3 className="text-xl font-bold text-[#F5F0E8] mb-3 group-hover:text-[#C9A96E] transition-colors">{product.title}</h3>
                <p className="text-[#6B6560] leading-relaxed">{product.description}</p>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#C9A96E]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 AGE GROUPS */}
      <section className="py-24 md:py-32 px-6 bg-[#0f0f14] relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#B87D6A] opacity-[0.04] blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#C9A96E] text-sm font-semibold uppercase tracking-[0.2em] mb-4">Who It's For</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F0E8] mb-4">
              One philosopher. <span className="text-[#B87D6A]">Four entry points.</span>
            </h2>
            <p className="text-[#6B6560] text-lg max-w-2xl mx-auto">
              The same wisdom, shaped for the age that's reading it.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ageGroups.map((group, i) => (
              <div key={i} className="group relative bg-[#13131a] border border-[#1e1e28] rounded-xl p-6 hover:border-[#C9A96E]/30 transition-all duration-300 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#C9A96E]/10 border-2 border-[#C9A96E]/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-[#C9A96E]">{group.ages}</span>
                </div>
                <h3 className="text-xl font-bold text-[#F5F0E8] mb-1">{group.label}</h3>
                <p className="text-sm text-[#6B6560] mb-3">Ages {group.ages}</p>
                <p className="text-[#6B6560] text-sm leading-relaxed">{group.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHER PIPELINE */}
      <section className="py-24 md:py-32 px-6 bg-[#0a0a0f] relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#C9A96E] text-sm font-semibold uppercase tracking-[0.2em] mb-4">The Pipeline</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F0E8] mb-4">
              Who's <span className="text-[#8A9A7B]">coming.</span>
            </h2>
            <p className="text-[#6B6560] text-lg max-w-2xl mx-auto">
              Fifteen philosophers. Four formats each. One story at a time.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {pipeline.map((philosopher, i) => (
              <div
                key={i}
                className={`group relative bg-[#13131a] border rounded-xl p-4 transition-all duration-300 ${
                  philosopher.status === "In Draft" || philosopher.status === "In Progress*"
                    ? "border-[#C9A96E]/40"
                    : philosopher.status === "Queued"
                    ? "border-[#7BA3A8]/30"
                    : "border-[#1e1e28]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{philosopher.icon}</span>
                  <div>
                    <p className="text-[#F5F0E8] font-semibold">{philosopher.name}</p>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      philosopher.status === "In Draft" || philosopher.status === "In Progress*"
                        ? "bg-[#C9A96E]/10 text-[#C9A96E]"
                        : philosopher.status === "Queued"
                        ? "bg-[#7BA3A8]/10 text-[#7BA3A8]"
                        : "bg-[#1e1e28] text-[#6B6560]"
                    }`}>
                      {philosopher.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-[#4a4a4a] text-sm mt-8">*Harry's Desk compendium in progress</p>
        </div>
      </section>

      {/* FREE OFFER CTA */}
      <section className="py-24 md:py-32 px-6 bg-[#0f0f14] relative overflow-hidden">
        <div className="absolute top-[-50%] left-[50%] -translate-x-1/2 w-[800px] h-[800px] bg-[#C9A96E] opacity-[0.06] blur-[200px] rounded-full pointer-events-none" />
        
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C9A96E]/10 border border-[#C9A96E]/20 mb-8">
            <span className="text-[#C9A96E] text-sm font-medium tracking-wide uppercase">Free Lead Magnet</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F0E8] mb-6">Start with Epictetus.</h2>
          <p className="text-xl text-[#A89B8C] mb-4">The first booklet is free. No credit card. No commitment.</p>
          <p className="text-[#6B6560] mb-12 max-w-xl mx-auto">
            The first philosopher is now live. Get the complete Epictetus series for every age.
          </p>

          <Link
            href="/wisdomforge/epictetus"
            className="inline-flex items-center px-8 py-4 bg-[#C9A96E] text-[#0a0a0f] font-semibold rounded-lg hover:bg-[#D4B87A] transition-all shadow-lg shadow-[#C9A96E]/20"
          >
            Go to the Epictetus Page
          </Link>

          <p className="text-[#4a4a4a] text-sm">No spam. Unsubscribe anytime. We respect your attention.</p>
        </div>
      </section>

      {/* FOOTER */}
      <section className="py-12 px-6 bg-[#0a0a0f] border-t border-[#1e1e28]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🏛️</span>
            <div>
              <span className="text-[#F5F0E8] font-bold">WisdomForge</span>
              <span className="text-[#6B6560] text-sm ml-2">by The SMF Works Project</span>
            </div>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <Link href="/projects" className="text-[#6B6560] hover:text-[#C9A96E] transition-colors">All Projects</Link>
            <Link href="/blog" className="text-[#6B6560] hover:text-[#C9A96E] transition-colors">Blog</Link>
            <Link href="/contact" className="text-[#6B6560] hover:text-[#C9A96E] transition-colors">Contact</Link>
          </div>
        </div>
      </section>
    </>
  );
}
