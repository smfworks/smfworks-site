import Link from "next/link";

export const metadata = {
  title: "Pay Invoice",
  description: "Securely pay your SMF Works invoice via Stripe.",
};

export default function PayPage() {
  return (
    <>
      {/* HEADER */}
      <section className="bg-[#001F3F] text-[#E2E8F0] py-16 px-6 relative overflow-hidden">
        <div className="absolute top-[-50px] left-1/2 -translate-x-1/2 w-[400px] h-[300px] bg-[#00D4FF] opacity-[0.05] blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <p className="text-[#00D4FF] text-sm font-semibold uppercase tracking-[0.2em] mb-3">
            Secure Payment
          </p>
          <h1 className="text-4xl font-bold mb-4">Pay Your Invoice</h1>
          <p className="text-[#94A3B8] text-lg max-w-xl mx-auto leading-relaxed">
            Your payment link was included in your invoice email. Use it to securely
            complete your payment via Stripe.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20 px-6 bg-[#0A0F1F]">
        <div className="max-w-3xl mx-auto">

          {/* Main card */}
          <div className="bg-[#131B2E]/60 backdrop-blur-sm rounded-xl border border-[#1e2a45] p-8 md:p-10 text-center mb-10">
            <div className="text-5xl mb-5">🔒</div>
            <h2 className="text-2xl font-bold text-[#E2E8F0] mb-3">
              Payment Link in Your Invoice
            </h2>
            <p className="text-[#94A3B8] leading-relaxed mb-6 max-w-lg mx-auto">
              Your secure payment link was sent directly to your email with your invoice.
              Click the link in that email to complete your payment safely via Stripe.
            </p>
            <p className="text-sm text-[#94A3B8]/60">
              Don&apos;t have your invoice?{" "}
              <Link href="/contact" className="text-[#00D4FF] hover:underline">
                Contact us
              </Link>{" "}
              and we&apos;ll resend it.
            </p>
          </div>

          {/* How it works */}
          <h3 className="text-lg font-bold text-[#E2E8F0] mb-6 text-center">How payment works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: "📧",
                title: "1. Check your email",
                desc: "Your invoice includes a secure Stripe payment link.",
              },
              {
                icon: "💳",
                title: "2. Click & pay",
                desc: "All major credit and debit cards accepted. Payments processed by Stripe.",
              },
              {
                icon: "✅",
                title: "3. Confirmation",
                desc: "You'll receive an instant receipt and we get started on your project.",
              },
            ].map((step) => (
              <div
                key={step.title}
                className="bg-[#131B2E]/60 rounded-xl border border-[#1e2a45] p-6 text-center"
              >
                <div className="text-3xl mb-3">{step.icon}</div>
                <h4 className="font-semibold text-[#E2E8F0] mb-2">{step.title}</h4>
                <p className="text-sm text-[#94A3B8] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Trust signals */}
          <div className="bg-[#131B2E]/60 rounded-xl border border-[#1e2a45] p-6">
            <h3 className="font-semibold text-[#E2E8F0] mb-4 text-center">Secure & trusted</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {[
                { icon: "🔐", label: "256-bit SSL encryption" },
                { icon: "🏦", label: "Powered by Stripe" },
                { icon: "💳", label: "All major cards accepted" },
                { icon: "🛡️", label: "PCI DSS compliant" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center gap-1.5">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-xs text-[#94A3B8]">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Questions */}
          <p className="text-center text-[#94A3B8] text-sm mt-8">
            Questions about your invoice?{" "}
            <a href="mailto:michael@smfworks.com" className="text-[#00D4FF] hover:underline">
              michael@smfworks.com
            </a>
            {" "}or{" "}
            <Link href="/contact" className="text-[#00D4FF] hover:underline">
              contact us here
            </Link>
            .
          </p>

        </div>
      </section>
    </>
  );
}
