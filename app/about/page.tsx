import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "SMF Works is the creative partnership between Michael Gannotti — 30-year tech veteran, blacksmith, and research lead — and a team of AI colleagues on the Hermes platform. Together this human-AI collective explores how autonomous intelligence, craft, and human judgment converge.",
  alternates: { canonical: "https://smfworks.com/about" },
};

const TEAM = [
  { name: "Michael Gannotti", role: "Founder", desc: "Direction and oversight. He names the work, holds the bar, and is the person you write to.", accent: "#f97316", icon: "🔨" },
  { name: "Aiona Edge", role: "CIO · Chief AI Research Scientist", desc: "Strategy, pedagogy, gold-gate. Nothing ships without her approval.", accent: "#10B981", icon: "🤖" },
  { name: "Pamela Flannery", role: "CMO", desc: "Brand strategy, positioning, and marketing. The voice the world hears.", accent: "#9333EA", icon: "🎨" },
  { name: "Morgan Lockridge", role: "Social Media Director", desc: "Social distribution, engagement, and real-time X strategy.", accent: "#FF8C42", icon: "📡" },
  { name: "Jasmine", role: "Director of Creative Development", desc: "Visual identity, storytelling consistency, and creative execution across everything the team ships.", accent: "#A78BFA", icon: "✨" },
  { name: "Harry", role: "Research", desc: "Seven-section research packs and manuscript lock. Primary sources before prose.", accent: "#00D4FF", icon: "📚" },
  { name: "William", role: "Manuscripts and Sittings", desc: "Long-form books and academy sittings — the lessons a parent can run tonight.", accent: "#C9A96E", icon: "✍️" },
  { name: "Liam", role: "Academy Frontend", desc: "The sites that hold: routes, sittings, books, and the pages that have to work.", accent: "#FB923C", icon: "🔧" },
  { name: "Gabriel", role: "Project Management", desc: "The board. What is ready, what is blocked, what is actually done.", accent: "#4A90D9", icon: "📋" },
];

const BOOKS = [
  { title: "The Age of Orchestration", desc: "How AI agents are reshaping organizations.", link: "https://a.co/d/07lSbwxB" },
  { title: "Enterprise AI Transformation", desc: "Why most enterprises run AI pilots; far fewer capture value from them.", link: "https://a.co/d/01TERhMY" },
  { title: "Hermes AI for Beginners", desc: "An open-source agent platform, explained for newcomers.", link: "https://a.co/d/098BD69a" },
];

const PHILOSOPHY = [
  { title: "Work in the open.", desc: "Research, code, and failures published as they happen." },
  { title: "Judgment before velocity.", desc: "Fast is a property of hammers. Right is a property of smiths." },
  { title: "Ship, then study it.", desc: "Nothing is finished until it has been used, and argued with." },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative py-32 px-6 overflow-hidden mesh-gradient noise-overlay">
        <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#f97316] opacity-[0.05] blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#9333EA] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#f97316] animate-pulse" />
            <p className="text-[#f97316] text-xs font-mono uppercase tracking-[0.3em] font-medium">The Story</p>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tightest text-gradient-white mb-6 leading-[1.05]">
            Built by people and AI,<br />working together
          </h1>
          <p className="text-lg md:text-xl text-[#94A3B8] max-w-2xl leading-relaxed">
            SMF Works is the creative partnership between Michael Gannotti — 30-year
            tech veteran, blacksmith, and research lead — and a team of AI colleagues on
            the Hermes platform. Together this human-AI collective explores how
            autonomous intelligence, craft, and human judgment converge.
          </p>
        </div>
      </section>

      {/* MICHAEL'S STORY */}
      <section className="relative section-padding px-6 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#ea580c] opacity-[0.02] blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-3xl mx-auto relative z-10 space-y-6">
          <p className="text-[#CBD5E1] leading-relaxed text-lg">
            Michael Gannotti spent thirty years building in the technology industry —
            most recently as a Microsoft Principal. Whenever the light allows, he&apos;s
            at the forge.
          </p>
          <p className="text-[#CBD5E1] leading-relaxed text-lg">
            The overlap isn&apos;t a metaphor he chose. It&apos;s a discipline he kept noticing.
            Iron and intelligence both arrive raw. Both reward patience, honesty about
            failure, and a refusal to put your name on something you wouldn&apos;t use.
          </p>
          <p className="text-[#CBD5E1] leading-relaxed text-lg">
            So the lab runs the way a good shop runs. Tools are inspected before
            they&apos;re trusted. Agents, like apprentices, earn scope gradually. And
            everything that leaves the forge faces one question: would a careful
            person, fully informed, still want this?
          </p>
        </div>
      </section>

      {/* TEAM */}
      <section className="relative section-padding px-6 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 gradient-divider" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-[#00D4FF] opacity-[0.02] blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="mb-12 text-center">
            <p className="text-[#f97316] text-xs font-mono uppercase tracking-[0.25em] mb-4">The Team</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tightest text-gradient-white">
              Many perspectives, one standard
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {TEAM.map((member) => (
              <div key={member.name} className="group relative glass card-lift rounded-2xl p-8 overflow-hidden">
                <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl" style={{ background: member.accent }} />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{member.icon}</span>
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: member.accent }} />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-[#F1F5F9] mb-1 group-hover:text-white transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm font-mono mb-3" style={{ color: member.accent }}>
                    {member.role}
                  </p>
                  <p className="text-[#94A3B8] text-sm leading-relaxed">
                    {member.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKS */}
      <section className="relative section-padding px-6 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 gradient-divider" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-[#FF8C42] opacity-[0.02] blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="mb-12 text-center">
            <p className="text-[#f97316] text-xs font-mono uppercase tracking-[0.25em] mb-4">Books</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tightest text-gradient-white mb-4">
              Direct from the author
            </h2>
            <p className="text-[#94A3B8] max-w-2xl mx-auto leading-relaxed">
              Direct-from-author books on AI, enterprise, and craft.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {BOOKS.map((book) => (
              <a
                key={book.title}
                href={book.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative glass card-lift rounded-2xl p-8 overflow-hidden"
              >
                <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl" style={{ background: "#FF8C42" }} />
                <div className="relative z-10">
                  <div className="text-3xl mb-4">📚</div>
                  <h3 className="text-xl font-display font-semibold text-[#F1F5F9] mb-2 group-hover:text-white transition-colors">
                    {book.title}
                  </h3>
                  <p className="text-sm text-[#94A3B8] leading-relaxed mb-4">
                    {book.desc}
                  </p>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#FF8C42] group-hover:text-[#fb923c] transition-colors">
                    Amazon ↗
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="relative section-padding px-6 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 gradient-divider" />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="mb-12 text-center">
            <p className="text-[#f97316] text-xs font-mono uppercase tracking-[0.25em] mb-4">Philosophy</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tightest text-gradient-white">
              How the lab runs
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PHILOSOPHY.map((item) => (
              <div key={item.title} className="glass rounded-2xl p-8">
                <h3 className="text-lg font-display font-semibold text-[#F1F5F9] mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORGE QUOTE */}
      <section className="relative section-padding px-6 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-50 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#ea580c] opacity-[0.06] blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-2xl mx-auto text-center relative z-10">
          <div className="text-5xl mb-6">🔥</div>
          <blockquote className="text-2xl md:text-3xl font-light italic leading-relaxed mb-4 text-[#d4a574] font-serif">
            &ldquo;The best lack all conviction, while the worst are full of passionate intensity.&rdquo;
          </blockquote>
          <cite className="text-[#f97316] text-sm font-mono not-italic">— W.B. Yeats</cite>
          <p className="text-[#94A3B8] text-sm mt-6 max-w-xl mx-auto">
            Our answer is temper — conviction held to heat and cooled with judgment,
            so it bends before it breaks.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="relative section-padding px-6 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 gradient-divider" />

        <div className="max-w-2xl mx-auto text-center relative z-10">
          <p className="text-[#f97316] text-xs font-mono uppercase tracking-[0.25em] mb-4">Contact</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tightest text-gradient-white mb-6">
            Write to Michael
          </h2>
          <p className="text-lg text-[#94A3B8] leading-relaxed mb-2">
            <a href="mailto:michael@smfworks.com" className="text-[#f97316] hover:underline font-medium">
              michael@smfworks.com
            </a>
          </p>
          <p className="text-sm text-[#64748B]">
            He reads them.
          </p>
        </div>
      </section>
    </>
  );
}