import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Concierge OpenClaw Installation & Configuration | SMF Works",
  description:
    "Full-service OpenClaw installation and custom configuration. We install Linux, OpenClaw, configure LLMs, and set up custom skills. Includes lifetime access to all SMF Pro skills.",
  alternates: { canonical: "https://smfworks.com/services/concierge-openclaw-installation" },
};

export default function ConciergeOpenclawInstallationPage() {
  return (
    <>
      {/* HEADER */}
      <section className="bg-[#001F3F] text-[#E2E8F0] py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[300px] bg-[#00D4FF] opacity-[0.05] blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/services#workflow" className="text-[#00D4FF] hover:text-[#00B8DB] text-sm font-medium">
              ← Back to AI Workflow Consulting
            </Link>
          </div>
          
          <div className="inline-flex items-center gap-2 bg-[#00D4FF]/10 text-[#00D4FF] px-4 py-2 rounded-full text-sm font-medium mb-6">
            Premium Concierge Service
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Concierge OpenClaw Installation & Configuration
          </h1>
          
          <p className="text-[#94A3B8] text-xl leading-relaxed mb-8">
            Full-service OpenClaw installation and custom configuration. 
            We handle everything from Linux setup to LLM selection to custom skill deployment — 
            so you can focus on using AI, not configuring it.
          </p>
          
          <div className="flex flex-wrap gap-4 items-center">
            <span className="text-3xl font-bold text-[#00D4FF]">$5,000</span>
            <span className="text-[#94A3B8]">One-time investment • Lifetime Pro skills included</span>
          </div>
        </div>
      </section>

      {/* WHAT IS OPENCLAW */}
      <section className="py-16 px-6 bg-[#0A1628]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-[#E2E8F0]">What is OpenClaw?</h2>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-[#94A3B8] text-lg leading-relaxed mb-6">
              <strong className="text-[#E2E8F0]">OpenClaw</strong> is the cutting-edge platform for small business and personal AI automation. 
              Unlike cloud-only AI services that lock your data on someone else&apos;s servers, 
              OpenClaw runs on <strong className="text-[#E2E8F0]">your</strong> infrastructure — giving you complete control, 
              privacy, and flexibility.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
              <div className="bg-[#131B2E] rounded-lg p-6 border border-[#1e2a45]">
                <h3 className="text-xl font-semibold mb-4 text-[#00D4FF]">Why OpenClaw is Different</h3>
                <ul className="space-y-3 text-[#94A3B8]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#00D4FF] mt-1">✓</span>
                    <span><strong className="text-[#E2E8F0]">Local-First:</strong> Your data stays on your machines, not in the cloud</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00D4FF] mt-1">✓</span>
                    <span><strong className="text-[#E2E8F0]">Model Choice:</strong> Use OpenAI, local LLMs, or cloud APIs — your call</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00D4FF] mt-1">✓</span>
                    <span><strong className="text-[#E2E8F0]">Skills System:</strong> Modular automations that actually work</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00D4FF] mt-1">✓</span>
                    <span><strong className="text-[#E2E8F0]">No Vendor Lock-in:</strong> Switch providers anytime</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-[#131B2E] rounded-lg p-6 border border-[#1e2a45]">
                <h3 className="text-xl font-semibold mb-4 text-[#00D4FF]">Perfect For</h3>
                <ul className="space-y-3 text-[#94A3B8]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#00D4FF] mt-1">→</span>
                    <span>Small businesses with sensitive data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00D4FF] mt-1">→</span>
                    <span>Professionals who value privacy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00D4FF] mt-1">→</span>
                    <span>Teams needing custom automation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00D4FF] mt-1">→</span>
                    <span>Anyone tired of SaaS subscription creep</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-16 px-6 bg-[#131B2E]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-[#E2E8F0]">What&apos;s Included</h2>
          
          <div className="space-y-6">
            {/* Phase 1 */}
            <div className="bg-[#0A1628] rounded-xl p-6 border border-[#1e2a45]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#00D4FF]/10 flex items-center justify-center text-[#00D4FF] font-bold">1</div>
                <h3 className="text-xl font-semibold text-[#E2E8F0]">Linux Installation & Setup</h3>
              </div>
              <ul className="space-y-2 text-[#94A3B8] ml-13">
                <li>• Fresh Linux installation (Ubuntu LTS recommended)</li>
                <li>• Security hardening and firewall configuration</li>
                <li>• SSH key authentication setup</li>
                <li>• System updates and dependency installation</li>
              </ul>
            </div>

            {/* Phase 2 */}
            <div className="bg-[#0A1628] rounded-xl p-6 border border-[#1e2a45]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#00D4FF]/10 flex items-center justify-center text-[#00D4FF] font-bold">2</div>
                <h3 className="text-xl font-semibold text-[#E2E8F0]">OpenClaw Installation</h3>
              </div>
              <ul className="space-y-2 text-[#94A3B8] ml-13">
                <li>• Latest OpenClaw Gateway installation</li>
                <li>• Node.js runtime configuration</li>
                <li>• Environment and dependency setup</li>
                <li>• Service configuration for auto-start</li>
              </ul>
            </div>

            {/* Phase 3 */}
            <div className="bg-[#0A1628] rounded-xl p-6 border border-[#1e2a45]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#00D4FF]/10 flex items-center justify-center text-[#00D4FF] font-bold">3</div>
                <h3 className="text-xl font-semibold text-[#E2E8F0]">LLM Selection & Configuration</h3>
              </div>
              <ul className="space-y-2 text-[#94A3B8] ml-13">
                <li>• Consultation on LLM options (OpenAI, local, cloud)</li>
                <li>• API key configuration</li>
                <li>• Model routing for different tasks</li>
                <li>• Fallback and redundancy setup</li>
              </ul>
            </div>

            {/* Phase 4 */}
            <div className="bg-[#0A1628] rounded-xl p-6 border border-[#1e2a45]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#00D4FF]/10 flex items-center justify-center text-[#00D4FF] font-bold">4</div>
                <h3 className="text-xl font-semibold text-[#E2E8F0]">Skills & Applications Setup</h3>
              </div>
              <ul className="space-y-2 text-[#94A3B8] ml-13">
                <li>• Install and configure relevant SMF Skills</li>
                <li>• Custom skill development (if needed)</li>
                <li>• Workflow automation setup</li>
                <li>• Integration with your existing tools</li>
              </ul>
            </div>

            {/* Phase 5 */}
            <div className="bg-[#00D4FF]/10 rounded-xl p-6 border border-[#00D4FF]/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#00D4FF] flex items-center justify-center text-[#001F3F] font-bold">★</div>
                <h3 className="text-xl font-semibold text-[#E2E8F0]">Lifetime Pro Skills Access</h3>
              </div>
              <p className="text-[#94A3B8] mb-4">
                All concierge clients receive lifetime access to the complete SMF Skills library:
              </p>
              <ul className="space-y-2 text-[#94A3B8]">
                <li>• <strong className="text-[#E2E8F0]">All Free Skills:</strong> File Organizer, PDF Toolkit, QR Generator, and 8+ more</li>
                <li>• <strong className="text-[#E2E8F0]">All Pro Skills:</strong> Lead Capture, Coffee Briefing, Meeting Prep, and 10+ more</li>
                <li>• <strong className="text-[#E2E8F0]">Future Updates:</strong> New skills as they&apos;re released</li>
                <li>• <strong className="text-[#E2E8F0]">No Subscription:</strong> One-time fee, lifetime access</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-16 px-6 bg-[#0A1628]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-[#E2E8F0]">Timeline</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#131B2E] rounded-lg p-6 border border-[#1e2a45]">
              <div className="text-3xl font-bold text-[#00D4FF] mb-2">Day 1</div>
              <p className="text-[#94A3B8]">Linux installation, security hardening, initial OpenClaw setup</p>
            </div>
            
            <div className="bg-[#131B2E] rounded-lg p-6 border border-[#1e2a45]">
              <div className="text-3xl font-bold text-[#00D4FF] mb-2">Days 2-3</div>
              <p className="text-[#94A3B8]">LLM configuration, skill installation, workflow setup</p>
            </div>
            
            <div className="bg-[#131B2E] rounded-lg p-6 border border-[#1e2a45]">
              <div className="text-3xl font-bold text-[#00D4FF] mb-2">Day 4</div>
              <p className="text-[#94A3B8]">Testing, training, handoff, documentation</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-16 px-6 bg-[#131B2E]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-[#E2E8F0]">Investment</h2>
          
          
          <div className="bg-[#0A1628] rounded-2xl p-10 border border-[#00D4FF]/30 max-w-2xl mx-auto">
            <div className="text-5xl font-bold text-[#00D4FF] mb-4">$5,000</div>
            <p className="text-[#94A3B8] mb-8">One-time investment • No recurring fees • Lifetime Pro access</p>
            
            <ul className="text-left space-y-3 text-[#94A3B8] mb-8 max-w-md mx-auto">
              <li className="flex items-center gap-2">
                <span className="text-[#00D4FF]">✓</span> Complete Linux + OpenClaw setup
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#00D4FF]">✓</span> Custom LLM configuration
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#00D4FF]">✓</span> Skills & workflow setup
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#00D4FF]">✓</span> Lifetime Pro skills ($240+/year value)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#00D4FF]">✓</span> Training & documentation
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#00D4FF]">✓</span> 30-day support included
              </li>
            </ul>
            
            <Link 
              href="/contact?service=concierge-openclaw"
              className="bg-[#00D4FF] text-[#001F3F] px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#00B8DB] transition-colors inline-block"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-[#0A1628]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-[#E2E8F0]">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-[#131B2E] rounded-lg p-6 border border-[#1e2a45]">
              <h3 className="font-semibold text-[#E2E8F0] mb-2">Do I need my own server?</h3>
              <p className="text-[#94A3B8]">Yes. You&apos;ll need a dedicated machine (physical or cloud VPS) running Linux. We recommend a 4GB RAM minimum for smooth operation. We can help you select appropriate hardware if needed.</p>
            </div>
            
            <div className="bg-[#131B2E] rounded-lg p-6 border border-[#1e2a45]">
              <h3 className="font-semibold text-[#E2E8F0] mb-2">What about LLM API costs?</h3>
              <p className="text-[#94A3B8]">API costs are separate from our service fee. Typical usage runs $20-100/month depending on volume and models chosen. We can configure local LLMs to reduce or eliminate API costs.</p>
            </div>
            
            <div className="bg-[#131B2E] rounded-lg p-6 border border-[#1e2a45]">
              <h3 className="font-semibold text-[#E2E8F0] mb-2">Can you customize skills for my business?</h3>
              <p className="text-[#94A3B8]">Yes. Custom skill development is available as an add-on service. We&apos;ll scope your needs during the consultation phase.</p>
            </div>
            
            <div className="bg-[#131B2E] rounded-lg p-6 border border-[#1e2a45]">
              <h3 className="font-semibold text-[#E2E8F0] mb-2">What happens after the 30-day support period?</h3>
              <p className="text-[#94A3B8]">Ongoing support is available through our standard consulting services. You keep lifetime access to all Pro skills regardless.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-[#001F3F] to-[#131B2E] text-center">
        <h2 className="text-3xl font-bold mb-4 text-[#E2E8F0]">Ready to own your AI?</h2>
        <p className="text-[#94A3B8] mb-8 max-w-xl mx-auto">
          Get a fully configured OpenClaw system with lifetime Pro skills. 
          No subscriptions. No lock-in. Just your AI, your way.
        </p>
        
        <Link
          href="/contact?service=concierge-openclaw"
          className="bg-[#00D4FF] text-[#001F3F] px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#00B8DB] transition-colors inline-block"
        >
          Schedule Consultation
        </Link>
      </section>
    </>
  );
}
