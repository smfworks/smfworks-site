"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Button from "@/components/shared/Button";
import { Eyebrow } from "@/components/shared/LabUI";

const PACKAGES = [
  { value: "", label: "General note" },
  { value: "starter", label: "Starter — $2,000" },
  { value: "standard", label: "Standard — $3,500" },
  { value: "keepalive", label: "Keep-alive — $300/mo" },
];

function ContactForm() {
  const searchParams = useSearchParams();
  const [form, setForm] = useState({
    name: "",
    email: "",
    package: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const pkg = searchParams.get("package") || "";
    if (PACKAGES.some((p) => p.value === pkg)) {
      setForm((prev) => ({ ...prev, package: pkg }));
    }
  }, [searchParams]);

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

  return (
    <>
      <section className="relative pt-36 pb-12 px-6 overflow-hidden mesh-gradient">
        <div className="max-w-4xl mx-auto">
          <Eyebrow>Contact</Eyebrow>
          <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight text-text-primary mb-5">
            Intake &amp; notes
          </h1>
          <p className="text-lg text-text-muted max-w-2xl leading-relaxed">
            Agent Setup starts with a short intake. General questions about the
            lab are welcome too. Michael reads them.
          </p>
        </div>
      </section>

      <section className="relative px-6 pb-24 bg-forge-navy">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            {status === "success" ? (
              <div className="surface-card p-10 text-center">
                <h3 className="text-xl font-display font-bold mb-2 text-forge-ember">
                  Message received
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  Thanks. Michael responds personally within 48 hours.
                </p>
              </div>
            ) : (
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
            )}
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-display font-bold mb-4 text-text-primary">Direct</h2>
              <p className="text-sm text-text-muted mb-2">
                <a href="mailto:michael@smfworks.com" className="text-forge-ember hover:underline">
                  michael@smfworks.com
                </a>
              </p>
              <p className="text-sm text-text-muted">
                <a
                  href="https://x.com/MichaelGannotti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-forge-ember"
                >
                  X @MichaelGannotti ↗
                </a>
              </p>
              <p className="text-sm text-text-dim mt-3">Pittsboro, NC</p>
            </div>

            <div className="surface-card p-7">
              <h3 className="font-display font-bold text-lg mb-3 text-text-primary">What to expect</h3>
              <ul className="space-y-3 text-sm text-text-muted">
                <li>Personal response within 48 hours</li>
                <li>Agent Setup: short intake, then invoice, then install day</li>
                <li>
                  Packages and boundaries are listed on{" "}
                  <Link href="/services" className="text-forge-ember hover:underline">
                    /services
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-display font-bold text-lg mb-2 text-text-primary">SMF AI Weekly</h3>
              <p className="text-text-muted text-sm mb-3">
                The public lab notebook. No sales sequence.
              </p>
              <Button href="/newsletter" variant="secondary">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="pt-36 px-6 text-text-muted">Loading…</div>}>
      <ContactForm />
    </Suspense>
  );
}
