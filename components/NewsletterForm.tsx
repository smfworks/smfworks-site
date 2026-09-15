"use client";

import { useState } from "react";

export default function NewsletterForm({ compact = false }: { compact?: boolean }) {
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
      <div className={compact ? "text-left" : "text-center"}>
        <p className="text-data-cyan font-semibold mb-1">You&apos;re subscribed</p>
        <p className="text-text-muted text-sm">{message}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex flex-col ${compact ? "gap-2" : "sm:flex-row gap-3 max-w-md mx-auto"}`}
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        required
        disabled={status === "loading"}
        className="flex-1 px-4 py-3 rounded-lg bg-forge-navy border border-forge-border text-text-primary placeholder-text-dim/50 focus:outline-none focus:border-data-cyan transition-colors disabled:opacity-50 text-sm"
      />
      <button
        type="submit"
        disabled={status === "loading" || !email}
        className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
      >
        {status === "loading" ? "Subscribing…" : compact ? "Subscribe" : "Subscribe"}
      </button>
      {status === "error" && (
        <p className="text-red-400 text-sm mt-1">{message}</p>
      )}
    </form>
  );
}
