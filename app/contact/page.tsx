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

      {/* CONTACT FORM + INFO */}
      <section className="py-20 px-6 bg-[#F8F5F0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* FORM */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
            <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm" style={{position:"relative", width:"100%", height:0, paddingBottom:"125%"}}>
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSesttQn_vRl9Q25-uz6kzy66E6X9vMPGisOzi62-ycNF-h15g/viewform?embedded=true"
                style={{position:"absolute", top:0, left:0, width:"100%", height:"100%", border:0}}
                title="SMF Works Contact Form"
              >
                Loading…
              </iframe>
            </div>
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
                    <a href="mailto:hello@smfworks.com" className="text-[#C87941] hover:underline">
                      hello@smfworks.com
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
                <li className="flex items-start gap-2">
                  <span className="text-[#C87941] mt-0.5">✓</span>
                  Personal response within 24 hours
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C87941] mt-0.5">✓</span>
                  No sales pressure — just a real conversation
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C87941] mt-0.5">✓</span>
                  Honest assessment of where AI can help you
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C87941] mt-0.5">✓</span>
                  Clear pricing — no surprises
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-3">Also, subscribe to SMF AI Weekly</h3>
              <p className="text-gray-600 text-sm mb-4">
                Get free weekly AI insights for small businesses — practical, jargon-free,
                and actually useful.
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
