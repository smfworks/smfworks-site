"use client";
import { useState } from "react";
import Link from "next/link";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyqtbFkdJH-XyI-w7x2_tk2OIHeGuvz08XZ2orxvJtjXD2NWih9lImD8Vz0D0kx2Ou0/exec";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      business: (form.elements.namedItem("business") as HTMLInputElement).value,
      interest: (form.elements.namedItem("interest") as HTMLSelectElement).value,
      request_call: (form.elements.namedItem("request_call") as HTMLInputElement)?.checked ? "Yes" : "No",
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

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

            {status === "success" ? (
              <div className="bg-white border border-green-200 rounded-xl p-8 text-center">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-xl font-bold mb-2">Message Received</h3>
                <p className="text-gray-600 mb-6">
                  Thanks for reaching out. I respond personally within 24 hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-[#C87941] font-semibold hover:underline"
                >
                  Send another message →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
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
                    <option value="AI Content Production">AI Content Production</option>
                    <option value="AI Workflow Consulting">AI Workflow Consulting</option>
                    <option value="Both">Both — I need to learn more</option>
                    <option value="Newsletter Only">Just the SMF AI Weekly newsletter</option>
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
                      className="w-4 h-4 accent-[#C87941]"
                    />
                    <span className="text-sm text-gray-700">I&apos;d like to request a call</span>
                  </label>
                </div>

                {status === "error" && (
                  <p className="text-red-500 text-sm">
                    Something went wrong. Please email us directly at{" "}
                    <a href="mailto:hello@smfworks.com" className="underline">
                      hello@smfworks.com
                    </a>
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-[#C87941] text-white py-3 rounded font-semibold hover:bg-[#b56b35] transition-colors disabled:opacity-60"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>

                <p className="text-xs text-gray-400 text-center">
                  I respond to every message personally, usually within 24 hours.
                </p>
              </form>
            )}
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
