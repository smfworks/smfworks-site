"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
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
        setForm({ name: "", email: "", message: "" });
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
      {/* HERO */}
      <section className="relative py-32 px-6 overflow-hidden mesh-gradient noise-overlay">
        <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#ff7a2f] opacity-[0.05] blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#ff9a56] animate-pulse" />
            <p className="text-[#ff9a56] text-xs font-mono uppercase tracking-[0.3em] font-medium">
              Reach the Lab
            </p>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tightest text-gradient-white mb-6 leading-[1.05]">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl text-[#8ea6bf] max-w-2xl leading-relaxed">
            Questions, collaboration ideas, or something you want to discuss? Send a note.
            We read everything — this is a research lab, not a services company, but we are
            always curious about people thinking seriously about AI and humanity.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="relative section-padding px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* FORM */}
          <div>
            <h2 className="text-2xl font-display font-bold mb-6 text-[#ddd9d0]">Send a Message</h2>

            {status === "success" ? (
              <div className="glass rounded-2xl p-10 text-center">
                <div className="text-5xl mb-4">🔨</div>
                <h3 className="text-xl font-display font-bold mb-2 text-[#ff9a56]">Message received!</h3>
                <p className="text-[#8ea6bf] text-sm leading-relaxed">
                  Thanks for reaching out. Michael responds personally within 48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-1.5 text-[#CBD5E1]" htmlFor="name">
                      Name <span className="text-[#ff9a56]">*</span>
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
                      className="w-full px-4 py-3 rounded-lg border border-[rgba(142,166,191,0.15)] bg-[#0c1220] text-[#ddd9d0] placeholder-[#6a5e4e]/50 focus:outline-none focus:border-[#ff7a2f] transition-colors disabled:opacity-50 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1.5 text-[#CBD5E1]" htmlFor="email">
                      Email <span className="text-[#ff9a56]">*</span>
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
                      className="w-full px-4 py-3 rounded-lg border border-[rgba(142,166,191,0.15)] bg-[#0c1220] text-[#ddd9d0] placeholder-[#6a5e4e]/50 focus:outline-none focus:border-[#ff7a2f] transition-colors disabled:opacity-50 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-1.5 text-[#CBD5E1]" htmlFor="message">
                    Message <span className="text-[#ff9a56]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    disabled={status === "loading"}
                    placeholder="What's on your mind?"
                    className="w-full px-4 py-3 rounded-lg border border-[rgba(142,166,191,0.15)] bg-[#0c1220] text-[#ddd9d0] placeholder-[#6a5e4e]/50 focus:outline-none focus:border-[#ff7a2f] transition-colors disabled:opacity-50 text-sm resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-400 text-sm">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full text-white py-4 rounded-xl font-semibold text-base transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ background: 'linear-gradient(135deg, #ff7a2f, #ff9a56)', boxShadow: '0 8px 32px -8px rgba(234, 88, 12, 0.4)' }}
                >
                  {status === "loading" ? "Sending…" : "Send Message →"}
                </button>

                <p className="text-xs text-[#6a5e4e] text-center">
                  Or email directly:{" "}
                  <a href="mailto:michael@smfworks.com" className="text-[#ff9a56] hover:underline">
                    michael@smfworks.com
                  </a>
                </p>
              </form>
            )}
          </div>

          {/* INFO */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-display font-bold mb-6 text-[#ddd9d0]">Other Ways to Reach Us</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">📧</span>
                  <div>
                    <div className="font-semibold text-[#ddd9d0]">Email</div>
                    <a href="mailto:michael@smfworks.com" className="text-[#ff9a56] hover:underline">
                      michael@smfworks.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">📍</span>
                  <div>
                    <div className="font-semibold text-[#ddd9d0]">Location</div>
                    <div className="text-[#8ea6bf]">Pittsboro, NC</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <h3 className="font-display font-bold text-lg mb-3 text-[#ddd9d0]">What to expect</h3>
              <ul className="space-y-3 text-sm text-[#8ea6bf]">
                {[
                  "Personal response within 48 hours",
                  "Let's explore together — partner and build together",
                  "Have an idea — let's talk",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-[#ff9a56] mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display font-bold text-lg mb-3 text-[#ddd9d0]">Also, subscribe to SMF AI Weekly</h3>
              <p className="text-[#8ea6bf] text-sm mb-4">
                Free weekly AI insights — practical, jargon-free, actually useful.
              </p>
              <Link href="/#newsletter" className="text-[#ff9a56] font-semibold hover:underline text-sm">
                Subscribe free →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}