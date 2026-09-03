import Link from 'next/link';

export default function NewsletterCTA() {
  return (
    <div className="relative overflow-hidden bg-[#101014] rounded-xl border border-[rgba(142,166,191,0.15)] p-8">
      {/* Ember accent glow */}
      <div
        className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-[0.08] blur-[100px] pointer-events-none bg-[#ff7a2f]"
        aria-hidden="true"
      />

      <div className="relative">
        <h3 className="text-2xl font-bold text-[#E2E8F0] mb-2">
          Subscribe to SMF AI Weekly
        </h3>
        <p className="text-[#8ea6bf] mb-6 max-w-md">
          Weekly experiments, readings, and what we&apos;re learning —
          delivered every week.
        </p>
        <Link
          href="/newsletter"
          className="inline-block bg-[#ff7a2f] text-white px-4 py-2 rounded-lg hover:bg-[#c2410c] transition-colors font-medium"
        >
          Subscribe
        </Link>
      </div>
    </div>
  );
}