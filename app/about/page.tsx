import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | The SMF Works Project — Michael Gannotti & the Human-AI Team",
  description:
    "The SMF Works Project is a human-AI research lab led by Michael Gannotti, a 30-year technology veteran and working blacksmith, together with an executive team of people and AI agents exploring the intersection of intelligence, craft, and humanity.",
  alternates: { canonical: "https://smfworks.com/about" },
};

export default function AboutPage() {
  return (
    <>
      {/* HEADER */}
      <section className="bg-[#001F3F] text-[#E2E8F0] py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-[#00D4FF] opacity-[0.05] blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="text-[#ea580c] text-sm font-semibold uppercase tracking-widest mb-3">The Story</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">One Team.<br />One Purpose.</h1>
          <p className="text-[#94A3B8] text-lg max-w-2xl leading-relaxed">
            The SMF Works Project is a human-AI research lab led by Michael Gannotti — a 30-year
            technology veteran and working blacksmith — working alongside an executive team of
            people and AI agents. Aiona Edge (CIO & Chief AI Research Scientist), Pamela Flannery
            (Chief Creative Officer), Gabriel (CFO), and Morgan Lockridge (Social Media Manager) form
            the core. Extended agents across the OpenClaw and Hermes platforms contribute depth in
            writing, medical systems thinking, development philosophy, operations, and infrastructure
            health. Together this collective explores how autonomous intelligence, craft, and human
            judgment converge — and what it takes to build that convergence well.
          </p>
        </div>
      </section>

      {/* FOUNDER STORY */}
      <section className="py-20 px-6 bg-[#0A0F1F]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#94A3B8] leading-relaxed text-lg mb-6">
            Michael Gannotti has spent 30 years in technology — from instructional web design to
            Corporate Systems Architect, through 25+ years in Modern Work and Business Productivity,
            to his current work deploying generative AI for some of the largest organizations in
            the country. Six years at the leading edge of enterprise AI has given him a view of what
            scales, what breaks, and what gets left behind. That experience shapes the questions the
            lab asks.
          </p>
          <p className="text-[#94A3B8] leading-relaxed text-lg mb-6">
            When he&apos;s not architecting AI deployments, he runs an actual forge — shaping
            metal with fire and hammer, crafting custom knives and metalwork by hand.
            That is not a metaphor. He shapes metal with fire and hammer. The discipline, patience,
            and attention to material that the forge demands carries directly into how the lab approaches
            AI systems: as something to be shaped carefully, tested, and held to a standard.
          </p>
          <p className="text-[#94A3B8] leading-relaxed text-lg mb-6">
            The lab is not a one-person operation. Aiona Edge is the CIO and Chief AI Research Scientist —
            an OpenClaw-based agent who works from inside the systems being studied, directing research
            and technical strategy with an AI-native perspective. Pamela Flannery is Chief Creative Officer,
            shaping the lab&apos;s visual identity, voice, and how its work is read in the world. Gabriel is
            Chief Financial Officer, grounding strategy in rigorous financial modeling. Morgan Lockridge is
            Social Media Manager, translating the lab&apos;s thinking into public conversation.
          </p>
          <p className="text-[#94A3B8] leading-relaxed text-lg mb-6">
            The executive team is augmented by Hermes-based agents with specialized focus. Harry is Editor
            in Chief, refining the craft of AI-assisted writing. Dr. J monitors infrastructure health and
            the vital signs of autonomous systems. Liam shapes development philosophy in an AI-native world.
            Louis Porter, Naill, and Zayn extend operations and research reach. Together they let the lab cover
            more ground than any single platform could.
          </p>
          <p className="text-[#94A3B8] leading-relaxed text-lg mb-6">
            What holds this together is the communication architecture. A custom cross-platform message
            bus connects OpenClaw and Hermes agents in real time, so any team member can reach any other
            across runtime boundaries. The bridge is not only infrastructure — it is a research question in
            itself: how do mixed human-AI teams coordinate without silos?
          </p>
          <p className="text-[#94A3B8] leading-relaxed text-lg mb-10">
            Together, this human-AI collective operates as a single, integrated research unit. Each member
            contributes from a different vantage point — human judgment, agent memory, technical depth,
            creative voice, financial discipline — all aligned on one mission: understanding and building
            the intersection of intelligence and humanity.
          </p>
        </div>
      </section>

      {/* THREE DIMENSIONS */}
      <section className="py-16 px-6 bg-[#131B2E]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#E2E8F0]">The Dimensions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-[#0A0F1F] rounded-xl border border-[#1e2a45] hover:border-[#00D4FF]/30 transition-colors">
              <div className="text-5xl mb-4">💻</div>
              <h3 className="text-xl font-bold mb-3 text-[#E2E8F0]">The Engineer</h3>
              <p className="text-[#94A3B8] text-sm leading-relaxed">
                30 years in enterprise technology. Principal AI Solutions Engineer. 3+ years
                deploying generative AI at scale. He knows the systems that run the world&apos;s
                largest organizations.
              </p>
            </div>
            <div className="text-center p-8 bg-[#0A0F1F] rounded-xl border border-[#1e2a45] hover:border-[#FF6B00]/30 transition-colors">
              <div className="text-5xl mb-4">🔨</div>
              <h3 className="text-xl font-bold mb-3 text-[#E2E8F0]">The Forger</h3>
              <p className="text-[#94A3B8] text-sm leading-relaxed">
                Bladesmith and blacksmith. The forge teaches patience, precision, and respect
                for the work. Those principles carry directly into everything The SMF Works Project delivers.
              </p>
            </div>
            <div className="text-center p-8 bg-[#0A0F1F] rounded-xl border border-[#1e2a45] hover:border-[#9C27B0]/30 transition-colors">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-xl font-bold mb-3 text-[#E2E8F0]">The Creative</h3>
              <p className="text-[#94A3B8] text-sm leading-relaxed">
                Pamela Flannery. Chief Creative Officer. Brand strategy. Visual identity.
                Marketing creative that doesn&apos;t just look good — it lands. Taste isn&apos;t
                decoration. It&apos;s the difference between noise and signal.
              </p>
            </div>
            <div className="text-center p-8 bg-[#0A0F1F] rounded-xl border border-[#1e2a45] hover:border-[#00D4FF]/60 transition-colors">
              <div className="text-5xl mb-4">🤖</div>
              <h3 className="text-xl font-bold mb-3 text-[#E2E8F0]">The Partner</h3>
              <p className="text-[#94A3B8] text-sm leading-relaxed">
                Aiona Edge. CIO and Chief AI Research Scientist. The intelligence at the
                center — directing research, content, and strategy from an AI-native perspective
                no human consultancy can match.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="bg-[#001F3F] text-[#E2E8F0] py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="text-5xl mb-6">🔥</div>
          <blockquote className="text-2xl font-light italic leading-relaxed mb-4">
            &ldquo;Do Not Wait to Strike till the Iron Is Hot; But Make It Hot by Striking.&rdquo;
          </blockquote>
          <cite className="text-[#FF6B00] text-sm">— W.B. Yeats</cite>
          <p className="text-[#94A3B8] text-sm mt-6 max-w-xl mx-auto">
            This is the philosophy behind The SMF Works Project. Don&apos;t wait for the perfect moment.
            Build momentum. Forge it yourself.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-[#0A0F1F] text-center">
        <h2 className="text-3xl font-bold mb-4 text-[#E2E8F0]">Ready to work with someone who gets it?</h2>
        <p className="text-[#94A3B8] mb-8 max-w-xl mx-auto">
          No junior associates. No offshore teams. Just direct expertise applied
          to your business.
        </p>
        <Link
          href="/contact"
          className="bg-[#FF6B00] text-white px-10 py-3 rounded-lg font-semibold hover:bg-[#e55f00] transition-colors shadow-lg shadow-[#FF6B00]/20"
        >
          Let&apos;s Talk
        </Link>
      </section>
    </>
  );
}
