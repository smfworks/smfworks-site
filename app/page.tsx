import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#1E1E1E] text-[#F8F5F0] py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#C87941] text-sm font-semibold uppercase tracking-widest mb-4">
            AI Solutions for Small Business
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Forged by 30 years of experience.<br />
            <span className="text-[#C87941]">Forging your future.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed">
            SMF Works delivers AI-powered content and workflow solutions to small businesses
            that have been priced out of the game. Serious expertise. Genuine craftsmanship.
            No corporate fluff.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-[#C87941] text-white px-8 py-3 rounded font-semibold text-center hover:bg-[#b56b35] transition-colors"
            >
              Request a Call
            </Link>
            <Link
              href="/services"
              className="border border-[#C87941] text-[#C87941] px-8 py-3 rounded font-semibold text-center hover:bg-[#C87941] hover:text-white transition-colors"
            >
              See Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* CREDIBILITY BAR */}
      <section className="bg-[#F8F5F0] border-b border-gray-200 py-8 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-[#C87941]">30+</div>
            <div className="text-sm text-gray-600 mt-1">Years in Enterprise Technology</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#C87941]">3+</div>
            <div className="text-sm text-gray-600 mt-1">Years in Enterprise AI & GenAI</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#C87941]">SMB</div>
            <div className="text-sm text-gray-600 mt-1">Focused. Priced Right. Done Right.</div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="py-20 px-6 bg-[#F8F5F0]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            What We Do
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-14">
            Two service lines. Both built to give small businesses the same AI advantage
            that enterprise companies have been hoarding.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">✍️</div>
              <h3 className="text-xl font-bold mb-3">AI Content Production</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Blog posts, email sequences, social media, white papers, thought leadership,
                and ghostwriting — all AI-powered, all precisely crafted to your brand voice.
              </p>
              <Link href="/services#content" className="text-[#C87941] font-semibold hover:underline">
                Learn more →
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-xl font-bold mb-3">AI Workflow Consulting</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Implementing AI automation for your business operations — whether you&apos;re a
                trades business or a white-collar firm, we build practical systems that save
                you time and money.
              </p>
              <Link href="/services#workflow" className="text-[#C87941] font-semibold hover:underline">
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER CALLOUT */}
      <section className="bg-[#1E1E1E] text-[#F8F5F0] py-20 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-1">
            <p className="text-[#C87941] text-sm font-semibold uppercase tracking-widest mb-3">
              The Founder
            </p>
            <h2 className="text-3xl font-bold mb-5">
              The Engineer. The Forger. The Creator.
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Michael Gannotti has spent 30 years in technology — deploying enterprise AI
              for some of the largest organizations in the country. When he&apos;s not doing that,
              he&apos;s running Saint Michael&apos;s Forge, shaping metal with fire and hammer.
              SMF Works is where those worlds meet: deep expertise and the discipline of a
              craftsman, brought directly to small businesses.
            </p>
            <Link href="/about" className="text-[#C87941] font-semibold hover:underline">
              Read the full story →
            </Link>
          </div>
          <div className="flex-shrink-0 bg-[#2a2a2a] rounded-xl p-8 text-center border border-[#333]">
            <div className="text-6xl mb-4">🔥</div>
            <blockquote className="text-gray-300 italic text-sm leading-relaxed max-w-xs">
              &ldquo;Do Not Wait to Strike till the Iron Is Hot; But Make It Hot by Striking.&rdquo;
            </blockquote>
            <cite className="text-[#C87941] text-xs mt-3 block">— W.B. Yeats</cite>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section id="newsletter" className="py-20 px-6 bg-[#F8F5F0]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#C87941] text-sm font-semibold uppercase tracking-widest mb-3">
            Free Weekly Newsletter
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">SMF AI Weekly</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Every week, practical AI insights for small business owners — no hype,
            no jargon, just what you can actually use. Written by an enterprise AI engineer
            who forges metal on weekends.
          </p>
          <form
            action="https://formspree.io/f/REPLACE_WITH_YOUR_ID"
            method="POST"
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              name="email"
              placeholder="Your email address"
              required
              className="flex-1 px-4 py-3 rounded border border-gray-300 bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-[#C87941]"
            />
            <input type="hidden" name="_subject" value="SMF AI Weekly Signup" />
            <button
              type="submit"
              className="bg-[#C87941] text-white px-6 py-3 rounded font-semibold hover:bg-[#b56b35] transition-colors whitespace-nowrap"
            >
              Subscribe Free
            </button>
          </form>
          <p className="text-xs text-gray-400 mt-3">No spam. Unsubscribe anytime.</p>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="bg-[#3D5A80] text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to put AI to work?</h2>
        <p className="text-blue-200 mb-8 max-w-xl mx-auto">
          Let&apos;s talk about your business and where AI can actually move the needle.
        </p>
        <Link
          href="/contact"
          className="bg-[#C87941] text-white px-10 py-3 rounded font-semibold hover:bg-[#b56b35] transition-colors"
        >
          Get in Touch
        </Link>
      </section>
    </>
  );
}
