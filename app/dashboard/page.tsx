import { Metadata } from "next";
import Link from "next/link";
import SubscribeButton from "@/components/SubscribeButton";

export const metadata: Metadata = {
  title: "Dashboard | SMF Works Subscription",
  description: "Access your SMF Works subscription, download your API token, and manage your Pro skills.",
  alternates: { canonical: "https://smf.works/dashboard" },
};

export default function DashboardPage() {
  return (
    <section className="bg-[#001F3F] text-[#E2E8F0] py-20 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#00D4FF] text-sm font-semibold uppercase tracking-widest mb-3">Subscriber Dashboard</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">Your SMF Works Subscription</h1>
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
            Manage your subscription, get your API token, and access all Pro skills.
          </p>
        </div>

        {/* Pricing Section */}
        <div className="bg-[#131B2E] border border-[#1e2a45] rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-[#E2E8F0] mb-6 text-center">Pro Subscription</h2>
          
          <div className="text-center mb-8">
            <p className="text-5xl font-bold text-[#00D4FF] mb-2">$19.99</p>
            <p className="text-[#94A3B8]">per month, price locked forever</p>
          </div>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3 text-[#94A3B8]">
              <svg className="w-5 h-5 text-[#00D4FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Access all 10 Pro skills</span>
            </div>
            
            <div className="flex items-center gap-3 text-[#94A3B8]">
              <svg className="w-5 h-5 text-[#00D4FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Lead capture, invoicing, booking, and more</span>
            </div>
            
            <div className="flex items-center gap-3 text-[#94A3B8]">
              <svg className="w-5 h-5 text-[#00D4FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Price locked at signup rate forever</span>
            </div>
            
            <div className="flex items-center gap-3 text-[#94A3B8]">
              <svg className="w-5 h-5 text-[#00D4FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Cancel anytime</span>
            </div>
          </div>
          
          <SubscribeButton />
        </div>

        {/* Token Section */}
        <div className="bg-[#131B2E] border border-[#1e2a45] rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-[#E2E8F0] mb-6">Your API Token</h2>
          
          <div className="bg-[#0A1628] rounded-lg p-6 mb-6">
            <p className="text-[#94A3B8] mb-4">
              After subscribing, your API token will appear here. Use it with the SMF CLI:
            </p>
            
            <div className="bg-[#131B2E] rounded-lg p-4 font-mono text-sm text-[#00D4FF] overflow-x-auto">
              smf login
              # Paste your token when prompted
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-[#94A3B8]">
              <svg className="w-5 h-5 text-[#00D4FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Token stored securely at ~/.smf/token</span>
            </div>
            
            <div className="flex items-center gap-3 text-[#94A3B8]">
              <svg className="w-5 h-5 text-[#00D4FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Works offline for up to 24 hours</span>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-[#E2E8F0] mb-6">Common Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-[#131B2E] border border-[#1e2a45] rounded-xl p-6">
              <h3 className="text-lg font-semibold text-[#E2E8F0] mb-2">How do I use my token?</h3>
              <p className="text-[#94A3B8]">
                Install the SMF CLI, run smf login, and paste your token when prompted. 
                Your token is stored securely at ~/.smf/token.
              </p>
            </div>
            
            <div className="bg-[#131B2E] border border-[#1e2a45] rounded-xl p-6">
              <h3 className="text-lg font-semibold text-[#E2E8F0] mb-2">What if I cancel?</h3>
              <p className="text-[#94A3B8]">
                Your token will be revoked and Pro skills will stop working. 
                Free skills continue to work forever.
              </p>
            </div>
            
            <div className="bg-[#131B2E] border border-[#1e2a45] rounded-xl p-6">
              <h3 className="text-lg font-semibold text-[#E2E8F0] mb-2">Can I use skills offline?</h3>
              <p className="text-[#94A3B8]">
                Yes! Once authenticated, tokens are cached locally. Pro skills validate 
                against the cached token and work without internet for up to 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
