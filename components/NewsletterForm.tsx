"use client";
import { useState } from "react";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyqtbFkdJH-XyI-w7x2_tk2OIHeGuvz08XZ2orxvJtjXD2NWih9lImD8Vz0D0kx2Ou0/exec";

export default function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const email = (e.currentTarget.elements.namedItem("email") as HTMLInputElement).value;

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Newsletter Signup",
          email,
          interest: "SMF AI Weekly Newsletter",
          message: "Newsletter signup from homepage.",
          request_call: "No",
          business: "",
        }),
      });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="text-[#C87941] font-semibold text-lg">
        ✅ You&apos;re in! First issue coming soon.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <input
        type="email"
        name="email"
        placeholder="Your email address"
        required
        className="flex-1 px-4 py-3 rounded border border-gray-300 bg-white text-[#1E1E1E] focus:outline-none focus:ring-2 focus:ring-[#C87941]"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-[#C87941] text-white px-6 py-3 rounded font-semibold hover:bg-[#b56b35] transition-colors whitespace-nowrap disabled:opacity-60"
      >
        {status === "sending" ? "Subscribing..." : "Subscribe Free"}
      </button>
    </form>
  );
}
