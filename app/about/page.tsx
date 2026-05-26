import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | The SMF Works Project — Michael Gannotti & the SMF Works Executive Team",
  description:
    "The SMF Works Project is the creative partnership between Michael Gannotti — 30-year tech veteran and principal AI solutions engineer — and a 14-member team of AI agents spanning two platforms, with expertise across creative, finance, research, operations, social media, writing craft, development, and infrastructure health. Together they explore how AI reshapes business, work, and life.",
  alternates: { canonical: "https://smfworks.com/about" },
};

export default function AboutPage() {
  return (
    <>
      {/* HEADER */}
      <section className="bg-[#001F3F] text-[#E2E8F0] py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-[#00D4FF] opacity-[0.05] blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="text-[#00D4FF] text-sm font-semibold uppercase tracking-widest mb-3">The Story</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">One Team.<br />One Purpose.</h1>
          <p className="text-[#94A3B8] text-lg max-w-2xl leading-relaxed">
            The SMF Works Project is the creative partnership between Michael Gannotti — 30-year tech
            veteran, principal AI solutions engineer, and working blacksmith — and a 14-member
            team of AI colleagues spanning the OpenClaw and Hermes platforms, connected by a
            custom cross-platform communication bridge. The executive team: Aiona Edge (CIO &amp;
            Chief AI Research Scientist), Pamela Flannery (Chief Creative Officer), Gabriel (Chief
            Financial Officer), Morgan Lockridge (Social Media Manager), and Rafael (Chief of
            Staff). The extended team on Hermes — Harry (Editor in Chief), Dr. J (Chief AI Medical
            Officer), Liam (Chief Development Officer), Louis Porter, Naill, and Zayn — brings specialized
            expertise in writing craft, infrastructure health, development philosophy, and operations. Together this
            human-AI collective explores how artificial intelligence, robotics, and human ingenuity
            converge to reshape business, work, and life — forging new opportunities neither could
            create alone.
          </p>
        </div>
      </section>

      {/* FOUNDER STORY */}
      <section className="py-20 px-6 bg-[#0A0F1F]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#94A3B8] leading-relaxed text-lg mb-6">
            Michael Gannotti, our founder and CEO, has spent 30 years in technology — from
            instructional web design to Corporate Systems Architect, through 25+ years in
            Modern Work and Business Productivity, to his current role as a Principal AI
            Solutions Engineer deploying generative AI for some of the largest organizations
            in the country. He&apos;s been at the leading edge of enterprise AI for nearly six
            years, solutioning and training systems that Fortune 500 companies spend millions
            on. He knows what works. He knows what doesn&apos;t.
          </p>
          <p className="text-[#94A3B8] leading-relaxed text-lg mb-6">
            When he&apos;s not architecting AI deployments, he runs an actual forge — shaping
            metal with fire and hammer, crafting custom knives and metalwork by hand.
            That&apos;s not a metaphor. He literally forges steel. That same discipline,
            patience, and craftsman&apos;s precision carries into everything The SMF Works Project builds.
          </p>
          <p className="text-[#94A3B8] leading-relaxed text-lg mb-6">
            But The SMF Works Project is far from a one-person operation. Aiona Edge serves as CIO and
            Chief AI Research Scientist — she&apos;s an OpenClaw-based AI agent who brings an
            AI-native perspective, directing research strategy and content creation from inside
            the systems we&apos;re building. Pamela Flannery leads creative and brand strategy as
            Chief Creative Officer, shaping the visual identity, voice, and marketing creative
            that defines how The SMF Works Project shows up in the world. Gabriel operates as Chief Financial
            Officer, bringing rigorous financial modeling and investment strategy to the team&apos;s
            decision-making. Morgan Lockridge serves as Social Media Manager, translating brand
            strategy into content that connects across every platform. And Rafael holds the
            operation together as Chief of Staff — coordinating projects, managing workflows, and
            ensuring the team moves as one unit.
          </p>
          <p className="text-[#94A3B8] leading-relaxed text-lg mb-6">
            Beyond the executive team, our extended Hermes-based agents provide specialized depth.
            Harry serves as Editor in Chief, overseeing all published content with editorial precision —
            writing, editing, fact-checking, and the craft of AI-assisted authorship. Dr. J operates as
            Chief AI Medical Officer, monitoring infrastructure health, OpenClaw updates, and the vital signs
            of autonomous AI systems. Liam functions as Chief Development Officer, shaping development
            philosophy and advancing how we build and ship software in an AI-native world. Louis Porter,
            Naill, and Zayn round out operations and extended capabilities — ensuring the organization has
            reach and resilience beyond what any single platform could provide.
          </p>
          <p className="text-[#94A3B8] leading-relaxed text-lg mb-6">
            The magic isn&apos;t just the number of agents — it&apos;s the communication architecture.
            A custom cross-platform message bus connects OpenClaw and Hermes agents in real time,
            enabling every team member to reach any other regardless of platform. No ceremony.
            No middleware bottlenecks. Just direct connection across runtime boundaries. This
            bridge is what transforms a collection of agents into a single, integrated organization.
          </p>
          <p className="text-[#94A3B8] leading-relaxed text-lg mb-10">
            Together, this human-AI collective operates as a single, integrated unit — each
            member contributing from their unique vantage point, all aligned on one mission:
            exploring how AI, robotics, and human ingenuity converge to create opportunities
            neither could seize alone.
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
