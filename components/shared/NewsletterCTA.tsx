import Link from 'next/link';

export default function NewsletterCTA() {
  return (
    <div className="relative overflow-hidden bg-forge-card rounded-xl border border-forge-border p-8">
      <div
        className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-[0.08] blur-[100px] pointer-events-none bg-forge-ember"
        aria-hidden="true"
      />

      <div className="relative">
        <h3 className="text-2xl font-bold text-text-primary mb-2">
          Subscribe to SMF AI Weekly
        </h3>
        <p className="text-text-muted mb-6 max-w-md">
          Weekly experiments, readings, and what we&apos;re learning —
          delivered every week.
        </p>
        <Link href="/newsletter" className="btn-primary">
          Subscribe
        </Link>
      </div>
    </div>
  );
}
