import Button from "@/components/shared/Button";
import { SUPPORT_THE_LAB_URL } from "@/content/lib/lab";

export default function SupportCta() {
  return (
    <section
      className="relative px-6 py-16 bg-forge-navy"
      aria-labelledby="support-the-lab-heading"
    >
      <div className="max-w-xl mx-auto text-center surface-card p-8 md:p-10">
        <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-text-dim mb-3">
          Voluntary
        </p>
        <h2
          id="support-the-lab-heading"
          className="text-2xl font-display font-bold text-text-primary mb-3"
        >
          Support the lab
        </h2>
        <p className="text-sm text-text-muted leading-relaxed mb-6">
          Pay-what-you-want support for SMF Works — not a product purchase.
        </p>
        <Button href={SUPPORT_THE_LAB_URL} variant="secondary">
          Support the lab
        </Button>
      </div>
    </section>
  );
}
