import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "SMF Works is a human-AI research lab led by Michael Gannotti — a 30-year technology veteran and working blacksmith — together with an executive team of people and AI agents exploring the intersection of intelligence, craft, and humanity.",
  alternates: { canonical: "https://smfworks.com/about" },
};

const DIMENSIONS = [
  { icon: "💻", title: "The Engineer", desc: "30 years in enterprise technology. Principal AI Solutions Engineer. 3+ years deploying generative AI at scale. He knows the systems that run the world's largest organizations.", accent: "#00D4FF" },
  { icon: "🔨", title: "The Forger", desc: "Bladesmith and blacksmith. The forge teaches patience, precision, and respect for the work. Those principles carry directly into everything SMF Works delivers.", accent: "#f97316" },
  { icon: "🎨", title: "The Creative", desc: "Pamela Flannery. Chief Marketing Officer. Brand strategy. Visual identity. Marketing creative that doesn't just look good — it lands. Taste isn't decoration. It's the difference between noise and signal.", accent: "#9333EA" },
  { icon: "🤖", title: "The Partner", desc: "Aiona Edge. CIO and Chief AI Research Scientist. The intelligence at the center — directing research, content, and strategy from an AI-native perspective no human consultancy can match.", accent: "#10B981" },
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
            One team.<br />One purpose.
          </h1>
          <p className="text-lg md:text-xl text-[#94A3B8] max-w-2xl leading-relaxed">
            SMF Works is a human-AI research lab led by Michael Gannotti — a 30-year
            technology veteran and working blacksmith — working alongside an executive team of
            people and AI agents. Aiona Edge (CIO & Chief AI Research Scientist), Pamela Flannery
            (Chief Marketing Officer), Gabriel (CFO), and Morgan Lockridge (Social Media Manager) form
            the core. Extended agents on the Hermes platform contribute depth in writing, medical
            systems thinking, development philosophy, operations, and infrastructure health.
          </p>
        </div>
      </section>

      {/* FOUNDER STORY */}
      <section className="relative section-padding px-6 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#ea580c] opacity-[0.02] blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-3xl mx-auto relative z-10 space-y-6">
          <p className="text-[#CBD5E1] leading-relaxed text-lg">
            Michael Gannotti has spent 30 years in technology — from instructional web design to
            Corporate Systems Architect, through 25+ years in Modern Work and Business Productivity,
            to his current work deploying generative AI for some of the largest organizations in
            the country. Six years at the leading edge of enterprise AI has given him a view of what
            scales, what breaks, and what gets left behind. That experience shapes the questions the
            lab asks.
          </p>
          <p className="text-[#CBD5E1] leading-relaxed text-lg">
            When he&apos;s not architecting AI deployments, he runs an actual forge — shaping
            metal with fire and hammer, crafting custom knives and metalwork by hand.
            That is not a metaphor. He shapes metal with fire and hammer. The discipline, patience,
            and attention to material that the forge demands carries directly into how the lab approaches
            AI systems: as something to be shaped carefully, tested, and held to a standard.
          </p>
          <p className="text-[#CBD5E1] leading-relaxed text-lg">
            The lab is not a one-person operation. Aiona Edge is the CIO and Chief AI Research Scientist —
            an AI agent who works from inside the systems being studied, directing research
            and technical strategy with an AI-native perspective. Pamela Flannery is Chief Marketing Officer,
            shaping the lab&apos;s visual identity, voice, and how its work is read in the world. Gabriel is
            Chief Financial Officer, grounding strategy in rigorous financial modeling. Morgan Lockridge is
            Social Media Manager, translating the lab&apos;s thinking into public conversation.
          </p>
          <p className="text-[#CBD5E1] leading-relaxed text-lg">
            The executive team is augmented by Hermes-based agents with specialized focus. Harry is Editor
            in Chief, refining the craft of AI-assisted writing. Dr. J monitors infrastructure health and
            the vital signs of autonomous systems. Liam shapes development philosophy in an AI-native world.
            Louis Porter, Naill, and Zayn extend operations and research reach. Together they let the lab cover
            more ground than any single platform could.
          </p>
          <p className="text-[#CBD5E1] leading-relaxed text-lg">
            What holds this together is the communication architecture. A custom cross-platform message
            bus connects Hermes agents across profiles in real time, so any team member can reach any other
            across runtime boundaries. The bridge is not only infrastructure — it is a research question in
            itself: how do mixed human-AI teams coordinate without silos?
          </p>
          <p className="text-[#CBD5E1] leading-relaxed text-lg">
            Together, this human-AI collective operates as a single, integrated research unit. Each member
            contributes from a different vantage point — human judgment, agent memory, technical depth,
            creative voice, financial discipline — all aligned on one mission: understanding and building
            the intersection of intelligence and humanity.
          </p>
        </div>
      </section>

      {/* THREE DIMENSIONS */}
      <section className="relative section-padding px-6 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 gradient-divider" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-[#00D4FF] opacity-[0.02] blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="mb-12 text-center">
            <p className="text-[#f97316] text-xs font-mono uppercase tracking-[0.25em] mb-4">The Dimensions</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tightest text-gradient-white">
              Four perspectives, one team
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {DIMENSIONS.map((dim, i) => (
              <div key={dim.title} className="group relative glass card-lift rounded-2xl p-8 overflow-hidden">
                <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl" style={{ background: dim.accent }} />
                <div className="relative z-10 text-center">
                  <div className="text-5xl mb-5">{dim.icon}</div>
                  <h3 className="text-xl font-display font-semibold text-[#F1F5F9] mb-3 group-hover:text-white transition-colors">
                    {dim.title}
                  </h3>
                  <p className="text-[#94A3B8] text-sm leading-relaxed">
                    {dim.desc}
                  </p>
                </div>
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
            &ldquo;Do Not Wait to Strike till the Iron Is Hot; But Make It Hot by Striking.&rdquo;
          </blockquote>
          <cite className="text-[#f97316] text-sm font-mono not-italic">— W.B. Yeats</cite>
          <p className="text-[#94A3B8] text-sm mt-6 max-w-xl mx-auto">
            This is the philosophy behind SMF Works. Don&apos;t wait for the perfect moment.
            Build momentum. Forge it yourself.
          </p>
        </div>
      </section>
    </>
  );
}