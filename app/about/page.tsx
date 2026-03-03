import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | SMF Works",
  description: "The story behind SMF Works — 30 years of enterprise technology, a blacksmith's discipline, and a commitment to small businesses.",
};

export default function AboutPage() {
  return (
    <>
      {/* HEADER */}
      <section className="bg-[#1E1E1E] text-[#F8F5F0] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#C87941] text-sm font-semibold uppercase tracking-widest mb-3">The Story</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">Three Dimensions.<br />One Purpose.</h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            SMF Works didn&apos;t come out of a startup incubator. It came out of three
            decades of doing the actual work — at enterprise scale, at the forge,
            and in the recording booth.
          </p>
        </div>
      </section>

      {/* FOUNDER STORY */}
      <section className="py-20 px-6 bg-[#F8F5F0]">
        <div className="max-w-3xl mx-auto prose prose-lg">
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            Michael Gannotti has spent 30 years in technology — from instructional web
            design to Corporate Systems Architect, through 25+ years in Modern Work and
            Business Productivity, to his current role as a Principal AI Solutions Engineer
            deploying generative AI for some of the largest organizations in the country.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            For the last three-plus years, he&apos;s been at the leading edge of enterprise AI —
            building and deploying the kind of systems that Fortune 500 companies spend
            millions on. He knows what works. He knows what doesn&apos;t. And he knows that
            small businesses deserve access to that same expertise.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            When he&apos;s not doing that, Michael is running{" "}
            <a href="https://saintmichaelsforge.com" target="_blank" rel="noopener noreferrer" className="text-[#C87941] hover:underline">
              Saint Michael&apos;s Forge
            </a>{" "}
            — shaping metal with fire and hammer, crafting custom knives and metalwork by hand.
            That&apos;s not a metaphor. He literally forges steel.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mb-10">
            SMF Works is where those worlds meet: three decades of knowing how businesses
            actually operate, deep enterprise AI expertise, and the discipline of a craftsman —
            brought directly to small businesses that deserve more than they&apos;ve been getting.
          </p>
        </div>
      </section>

      {/* THREE DIMENSIONS */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">The Three Dimensions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-[#F8F5F0] rounded-xl">
              <div className="text-5xl mb-4">💻</div>
              <h3 className="text-xl font-bold mb-3">The Engineer</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                30 years in enterprise technology. Principal AI Solutions Engineer.
                3+ years deploying generative AI at scale. He knows the systems
                that run the world&apos;s largest organizations.
              </p>
            </div>
            <div className="text-center p-8 bg-[#F8F5F0] rounded-xl">
              <div className="text-5xl mb-4">🔨</div>
              <h3 className="text-xl font-bold mb-3">The Forger</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Bladesmith and blacksmith. Founder of Saint Michael&apos;s Forge.
                The forge teaches patience, precision, and respect for the work.
                Those principles carry directly into everything SMF Works delivers.
              </p>
            </div>
            <div className="text-center p-8 bg-[#F8F5F0] rounded-xl">
              <div className="text-5xl mb-4">🎵</div>
              <h3 className="text-xl font-bold mb-3">The Creator</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Five AI-generated music albums on Spotify. A published author.
                Creativity isn&apos;t an afterthought — it&apos;s the engine. SMF Works
                brings genuine creative thinking to every engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="bg-[#1E1E1E] text-[#F8F5F0] py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="text-5xl mb-6">🔥</div>
          <blockquote className="text-2xl font-light italic leading-relaxed mb-4">
            &ldquo;Do Not Wait to Strike till the Iron Is Hot; But Make It Hot by Striking.&rdquo;
          </blockquote>
          <cite className="text-[#C87941] text-sm">— W.B. Yeats</cite>
          <p className="text-gray-400 text-sm mt-6 max-w-xl mx-auto">
            This is the philosophy behind SMF Works. Don&apos;t wait for the perfect moment.
            Build momentum. Forge it yourself.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-[#F8F5F0] text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to work with someone who gets it?</h2>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          No junior associates. No offshore teams. Just direct expertise applied
          to your business.
        </p>
        <Link
          href="/contact"
          className="bg-[#C87941] text-white px-10 py-3 rounded font-semibold hover:bg-[#b56b35] transition-colors"
        >
          Let&apos;s Talk
        </Link>
      </section>
    </>
  );
}
