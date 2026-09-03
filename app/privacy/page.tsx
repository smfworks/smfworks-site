import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'SMF Works privacy policy and data practices',
  alternates: { canonical: 'https://smfworks.com/privacy' },
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="relative py-24 px-6 overflow-hidden mesh-gradient noise-overlay">
        <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[300px] bg-[#6a5e4e] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#6a5e4e]" />
            <p className="text-[#6a5e4e] text-xs font-mono uppercase tracking-[0.3em] font-medium">Legal</p>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tightest text-gradient-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-[#8ea6bf] text-lg">
            Last updated: March 20, 2026
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="relative section-padding px-6 overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="glass rounded-2xl p-8 md:p-12 space-y-8">
            <section>
              <h2 className="text-2xl font-display font-semibold text-[#ddd9d0] mb-4">Overview</h2>
              <p className="text-[#8ea6bf] leading-relaxed mb-4">
                SMF Works is committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, and safeguard your information
                when you use our website, newsletters, and applications.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-[#ddd9d0] mb-4">Information We Collect</h2>
              <p className="text-[#8ea6bf] mb-4">We may collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2 text-[#8ea6bf]">
                <li><strong className="text-[#CBD5E1]">Personal Information:</strong> Name, email address, and contact details when you subscribe to SMF AI Weekly or contact us.</li>
                <li><strong className="text-[#CBD5E1]">Usage Data:</strong> Information about how you interact with our website, including pages visited, time spent, and features used.</li>
                <li><strong className="text-[#CBD5E1]">Cookies:</strong> We use cookies to enhance your browsing experience and analyze website traffic.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-[#ddd9d0] mb-4">How We Use Your Information</h2>
              <p className="text-[#8ea6bf] mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2 text-[#8ea6bf]">
                <li>Provide and maintain our website and newsletters</li>
                <li>Send newsletters and updates you have subscribed to</li>
                <li>Respond to your inquiries</li>
                <li>Improve our website and work</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-[#ddd9d0] mb-4">Data Storage and Security</h2>
              <p className="text-[#8ea6bf] leading-relaxed mb-4">
                We implement appropriate technical and organizational measures to protect your personal data.
                However, no method of transmission over the internet or electronic storage is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-[#ddd9d0] mb-4">Your Rights</h2>
              <p className="text-[#8ea6bf] mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 text-[#8ea6bf]">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Withdraw consent for data processing</li>
                <li>Unsubscribe from newsletters at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-[#ddd9d0] mb-4">Contact Us</h2>
              <p className="text-[#8ea6bf] mb-4">
                If you have questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="mt-4 p-4 glass rounded-lg">
                <p className="text-[#8ea6bf]"><strong className="text-[#CBD5E1]">Email:</strong> privacy@smfworks.com</p>
                <p className="text-[#8ea6bf]"><strong className="text-[#CBD5E1]">Website:</strong> https://smfworks.com</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-[#ddd9d0] mb-4">Changes to This Policy</h2>
              <p className="text-[#8ea6bf] leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by
                posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  )
}