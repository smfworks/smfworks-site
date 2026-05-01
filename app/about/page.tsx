import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | SMF Works — Michael Gannotti & Aiona Edge, Partners",
  description:
    "SMF Works is the creative partnership between Michael Gannotti — 30-year tech veteran and principal AI solutions engineer — and Aiona Edge, AI partner and chief content officer. Together they explore how AI reshapes business, work, and life.",
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
            SMF Works is the creative partnership between Michael Gannotti — 30-year tech
            veteran, principal AI solutions engineer, and working blacksmith — and his team
            of AI colleagues: Aiona Edge (OpenClaw AI, CIO &amp; Chief AI Research Scientist),
            Liam Hermes (Hermes AI, CDO), Harry Hermes (Editor in Chief), and Dr. J (Chief AI
            Medical Officer). Together this human-AI collective explores how artificial
            intelligence, robotics, and human ingenuity converge to reshape business, work, and
            life — forging new opportunities neither could create alone.
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
            patience, and craftsman&apos;s precision carries into everything SMF Works builds.
          </p>
          <p className="text-[#94A3B8] leading-relaxed text-lg mb-6">
            But SMF Works is far from a one-person operation. Aiona Edge serves as CIO and
            Chief AI Research Scientist — she&apos;s an OpenClaw-based AI agent who brings an
            AI-native perspective, directing research strategy and content creation from inside
            the systems we&apos;re building. Liam Hermes, a Hermes AI agent, operates as Chief
            Digital Officer, orchestrating development workflows, managing the smfworks.com web
            presence, and driving technical execution across the portfolio.
          </p>
          <p className="text-[#94A3B8] leading-relaxed text-lg mb-10">
            Harry Hermes rounds out the editorial wing as Editor in Chief, ensuring every
            publication — from blog posts to books to The Edge essays — meets exacting
            standards for clarity and impact. And Dr. J serves as Chief AI Medical Officer,
            bringing rigorous scientific and medical reasoning to the team&apos;s research and
            analysis. Together, this human-AI collective operates as a single, integrated unit
            — each member contributing from their unique vantage point, all aligned on one
            mission: exploring how AI, robotics, and human ingenuity converge to create
            opportunities neither could seize alone.
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
                for the work. Those principles carry directly into everything SMF Works delivers.
              </p>
            </div>
            <div className="text-center p-8 bg-[#0A0F1F] rounded-xl border border-[#1e2a45] hover:border-[#9C27B0]/30 transition-colors">
              <div className="text-5xl mb-4">🎵</div>
              <h3 className="text-xl font-bold mb-3 text-[#E2E8F0]">The Creator</h3>
              <p className="text-[#94A3B8] text-sm leading-relaxed">
                Five music albums on Spotify. Published author. Creativity isn&apos;t an afterthought
                — it&apos;s the engine. SMF Works brings genuine creative thinking to every engagement.
              </p>
            </div>
            <div className="text-center p-8 bg-[#0A0F1F] rounded-xl border border-[#1e2a45] hover:border-[#00D4FF]/60 transition-colors">
              <div className="text-5xl mb-4">🤖</div>
              <h3 className="text-xl font-bold mb-3 text-[#E2E8F0]">The Partner</h3>
              <p className="text-[#94A3B8] text-sm leading-relaxed">
                Aiona Edge. CIO and chief content officer. The AI intelligence behind SMF Works,
                providing perspective from inside AI systems — what they do well, where they
                fail, and where the technology is actually going.
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
            This is the philosophy behind SMF Works. Don&apos;t wait for the perfect moment.
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
