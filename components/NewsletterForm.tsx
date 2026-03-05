"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage(data.message || "You're in! First issue hits your inbox Monday morning.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center">
        <div className="text-4xl mb-3">🎉</div>
        <p className="text-[#00D4FF] font-semibold text-lg mb-1">You&apos;re subscribed!</p>
        <p className="text-[#94A3B8] text-sm">{message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        required
        disabled={status === "loading"}
        className="flex-1 px-4 py-3 rounded-lg bg-[#131B2E] border border-[#1e2a45] text-[#E2E8F0] placeholder-[#94A3B8]/50 focus:outline-none focus:border-[#00D4FF] transition-colors disabled:opacity-50"
      />
      <button
        type="submit"
        disabled={status === "loading" || !email}
        className="bg-[#FF6B00] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e55f00] transition-colors shadow-sm shadow-[#FF6B00]/20 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
      >
        {status === "loading" ? "Subscribing…" : "Subscribe Free"}
      </button>
      {status === "error" && (
        <p className="text-red-400 text-sm mt-1 sm:col-span-2">{message}</p>
      )}
    </form>
  );
}
