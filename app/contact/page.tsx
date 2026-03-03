import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | SMF Works",
  description: "Get in touch with SMF Works. Request a call or send a message to discuss AI content and workflow solutions for your small business.",
};

export default function ContactPage() {
  return (
    <>
      {/* HEADER */}
      <section className="bg-[#1E1E1E] text-[#F8F5F0] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#C87941] text-sm font-semibold uppercase tracking-widest mb-3">Let&apos;s Talk</p>
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
            <form
              action="https://formspree.io/f/REPLACE_WITH_YOUR_ID"
              method="POST"
              className="space-y-5"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#C87941]"
                  placeholder="Jane Smith"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#C87941]"
                  placeholder="jane@yourbusiness.com"
                />
              </div>

              <div>
                <label htmlFor="business" className="block text-sm font-medium text-gray-700 mb-1">
                  Business Name
                </label>
                <input
                  type="text"
                  id="business"
                  name="business"
                  className="w-full px-4 py-3 rounded border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#C87941]"
                  placeholder="Your Business"
                />
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">
                  I&apos;m interested in...
                </label>
                <select
                  id="interest"
                  name="interest"
                  className="w-full px-4 py-3 rounded border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#C87941]"
                >
                  <option value="">Select a service</option>
                  <option value="content">AI Content Production</option>
                  <option value="workflow">AI Workflow Consulting</option>
                  <option value="both">Both — I need to learn more</option>
                  <option value="newsletter">Just the SMF AI Weekly newsletter</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Tell me about your business *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#C87941] resize-none"
                  placeholder="What do you do, what challenges are you facing, what are you hoping AI can help with?"
                />
              </div>

              <div>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="request_call"
                    value="yes"
                    className="w-4 h-4 accent-[#C87941]"
                  />
                  <span className="text-sm text-gray-700">I&apos;d like to request a call</span>
                </label>
              </div>

              <input type="hidden" name="_subject" value="New Contact from SMF Works" />

              <button
                type="submit"
                className="w-full bg-[#C87941] text-white py-3 rounded font-semibold hover:bg-[#b56b35] transition-colors"
              >
                Send Message
              </button>

              <p className="text-xs text-gray-400 text-center">
                I respond to every message personally, usually within 24 hours.
              </p>
            </form>
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
              <a
                href="/#newsletter"
                className="text-[#C87941] font-semibold hover:underline text-sm"
              >
                Subscribe free →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
