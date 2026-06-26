import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dashboard | The SMF Works Project",
  description:
    "Manage your SMF AI Weekly subscription and newsletter preferences for The SMF Works Project.",
  alternates: { canonical: "https://smfworks.com/dashboard" },
};

export default function DashboardPage() {
  return (
    <section className="bg-[#001F3F] text-[#E2E8F0] py-20 px-6 min-h-screen">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-[#ea580c] text-sm font-semibold uppercase tracking-widest mb-3">
          Subscription Management
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-5">
          Your SMF AI Weekly Account
        </h1>
        <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto mb-10">
          This is where subscription management for SMF AI Weekly will live. For now, you can
          subscribe, update your preferences, or reach out directly.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/newsletter"
            className="inline-block bg-[#ea580c] text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-[#f97316] transition-colors shadow-lg shadow-[#ea580c]/25"
          >
            Subscribe to SMF AI Weekly
          </Link>
          <Link
            href="/contact"
            className="inline-block border border-[#E2E8F0]/10 text-[#E2E8F0] px-8 py-3.5 rounded-lg font-semibold hover:border-[#ea580c]/30 hover:bg-[#ea580c]/5 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
