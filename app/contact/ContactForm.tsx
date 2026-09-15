"use client";

import { useState } from "react";

const PACKAGES = [
  { value: "", label: "General note" },
  { value: "starter", label: "Starter — $2,000" },
  { value: "standard", label: "Standard — $3,500" },
  { value: "keepalive", label: "Keep-alive — $300/mo" },
];

export default function ContactForm({ initialPackage = "" }: { initialPackage?: string }) {
  const starting = PACKAGES.some((p) => p.value === initialPackage) ? initialPackage : "";
  const [form, setForm] = useState({
    name: "",
    email: "",
    package: starting,
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
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
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          business: form.package
            ? PACKAGES.find((p) => p.value === form.package)?.label
            : "",
          package: form.package,
          message: form.message,
        }),
      });
      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", package: "", message: "" });
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="surface-card p-10 text-center">
        <h3 className="text-xl font-display font-bold mb-2 text-forge-ember">
          Message received
        </h3>
        <p className="text-text-muted text-sm leading-relaxed">
          Thanks. Michael responds personally within 48 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1.5 text-text-secondary" htmlFor="name">
            Name <span className="text-forge-ember">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            disabled={status === "loading"}
            className="w-full px-4 py-3 rounded-lg border border-forge-border bg-forge-navy text-text-primary placeholder-text-dim/50 focus:outline-none focus:border-forge-ember transition-colors disabled:opacity-50 text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1.5 text-text-secondary" htmlFor="email">
            Email <span className="text-forge-ember">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            disabled={status === "loading"}
            className="w-full px-4 py-3 rounded-lg border border-forge-border bg-forge-navy text-text-primary placeholder-text-dim/50 focus:outline-none focus:border-forge-ember transition-colors disabled:opacity-50 text-sm"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1.5 text-text-secondary" htmlFor="package">
          Interest
        </label>
        <select
          id="package"
          name="package"
          value={form.package}
          onChange={handleChange}
          disabled={status === "loading"}
          className="w-full px-4 py-3 rounded-lg border border-forge-border bg-forge-navy text-text-primary focus:outline-none focus:border-forge-ember transition-colors disabled:opacity-50 text-sm"
        >
          {PACKAGES.map((p) => (
            <option key={p.value || "none"} value={p.value}>
              {p.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1.5 text-text-secondary" htmlFor="message">
          Message <span className="text-forge-ember">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={form.message}
          onChange={handleChange}
          disabled={status === "loading"}
          placeholder="Workflows you want, OS you run, and anything that must not be in scope."
          className="w-full px-4 py-3 rounded-lg border border-forge-border bg-forge-navy text-text-primary placeholder-text-dim/50 focus:outline-none focus:border-forge-ember transition-colors disabled:opacity-50 text-sm resize-none"
        />
      </div>

      {status === "error" && <p className="text-red-400 text-sm">{errorMsg}</p>}

      <button type="submit" disabled={status === "loading"} className="btn-primary w-full disabled:opacity-50">
        {status === "loading" ? "Sending…" : "Send"}
      </button>
    </form>
  );
}
