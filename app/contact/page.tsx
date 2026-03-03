import Link from "next/link";

export default function ContactPage() {
  return (
    <>
      {/* HEADER */}
      <section className="bg-[#1E1E1E] text-[#F8F5F0] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#C87941] text-sm font-semibold uppercase tracking-widest mb-3">
            Let&apos;s Talk
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">Get in Touch</h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            No pitch decks. No sales funnels. Just a real conversation about your
            business and where AI can actually help.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-20 px-6 bg-[#F8F5F0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* CTA */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Click below to send an email directly. Tell me about your business,
              what challenges you&apos;re facing, and what you&apos;re hoping AI can help with.
              I respond personally within 24 hours.
            </p>
            <a
              href="mailto:mikesmoltbot@gmail.com?subject=SMF Works Inquiry"
              className="inline-block bg-[#C87941] text-white px-10 py-4 rounded font-semibold text-lg hover:bg-[#b56b35] transition-colors"
            >
              📧 Email Us Now
            </a>
            <p className="text-xs text-gray-400 mt-4">
              Opens your email client — or write directly to{" "}
              <a href="mailto:mikesmoltbot@gmail.com" className="text-[#C87941] hover:underline">
                mikesmoltbot@gmail.com
              </a>
            </p>
          </div>

          {/* INFO */}
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-bold mb-6">Other Ways to Reach Us</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">📧</span>
                  <div>
                    <div className="font-semibold">Email</div>
                    <a href="mailto:mikesmoltbot@gmail.com" className="text-[#C87941] hover:underline">
                      mikesmoltbot@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">📍</span>
                  <div>
                    <div className="font-semibold">Location</div>
                    <div className="text-gray-600">Pittsboro, NC — serving businesses nationwide</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#1E1E1E] text-[#F8F5F0] rounded-xl p-8">
              <h3 className="font-bold text-lg mb-3">What to expect</h3>
              <ul className="space-y-3 text-sm text-gray-300">
                {[
                  "Personal response within 24 hours",
                  "No sales pressure — just a real conversation",
                  "Honest assessment of where AI can help you",
                  "Clear pricing — no surprises",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-[#C87941] mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-3">Also, subscribe to SMF AI Weekly</h3>
              <p className="text-gray-600 text-sm mb-4">
                Free weekly AI insights for small businesses — practical, jargon-free, actually useful.
              </p>
              <Link href="/#newsletter" className="text-[#C87941] font-semibold hover:underline text-sm">
                Subscribe free →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
