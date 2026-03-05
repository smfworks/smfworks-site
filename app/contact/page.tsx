"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", business: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", business: "", message: "" });
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again.");
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

      {/* CONTACT */}
      <section className="py-20 px-6 bg-[#F8F5F0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* FORM */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>

            {status === "success" ? (
              <div className="bg-[#1E1E1E] text-[#F8F5F0] rounded-xl p-10 text-center">
                <div className="text-5xl mb-4">🔨</div>
                <h3 className="text-xl font-bold mb-2 text-[#C87941]">Message received!</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Thanks for reaching out. Michael responds personally within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-1.5" htmlFor="name">
                      Name <span className="text-[#C87941]">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      disabled={status === "loading"}
                      placeholder="Jane Smith"
                      className="w-full px-4 py-3 rounded border border-gray-300 bg-white focus:outline-none focus:border-[#C87941] transition-colors disabled:opacity-50 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1.5" htmlFor="email">
                      Email <span className="text-[#C87941]">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      disabled={status === "loading"}
                      placeholder="jane@example.com"
                      className="w-full px-4 py-3 rounded border border-gray-300 bg-white focus:outline-none focus:border-[#C87941] transition-colors disabled:opacity-50 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-1.5" htmlFor="business">
                    Business Name <span className="text-gray-400 font-normal">(optional)</span>
                  </label>
                  <input
                    id="business"
                    name="business"
                    type="text"
                    value={form.business}
                    onChange={handleChange}
                    disabled={status === "loading"}
                    placeholder="Smith Plumbing & Heating"
                    className="w-full px-4 py-3 rounded border border-gray-300 bg-white focus:outline-none focus:border-[#C87941] transition-colors disabled:opacity-50 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-1.5" htmlFor="message">
                    Message <span className="text-[#C87941]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    disabled={status === "loading"}
                    placeholder="Tell me about your business, what challenges you're facing, and what you're hoping AI can help with."
                    className="w-full px-4 py-3 rounded border border-gray-300 bg-white focus:outline-none focus:border-[#C87941] transition-colors disabled:opacity-50 text-sm resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-600 text-sm">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-[#C87941] text-white py-4 rounded font-semibold text-base hover:bg-[#b56b35] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "Sending…" : "Send Message →"}
                </button>

                <p className="text-xs text-gray-400 text-center">
                  Or email directly:{" "}
                  <a href="mailto:michael@smfworks.com" className="text-[#C87941] hover:underline">
                    michael@smfworks.com
                  </a>
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
                    <a href="mailto:michael@smfworks.com" className="text-[#C87941] hover:underline">
                      michael@smfworks.com
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
