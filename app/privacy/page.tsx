import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | The SMF Works Project',
  description: 'The SMF Works Project privacy policy and data practices',
  alternates: { canonical: 'https://smfworks.com/privacy' },
}

export default function PrivacyPage() {
  return (
    <div className="bg-[#0A0F1F] min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#ea580c] text-sm font-semibold uppercase tracking-widest mb-3">
            Legal
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-[#E2E8F0]">
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg text-[#94A3B8]">
            Last updated: March 20, 2026
          </p>
        </div>

        <div className="space-y-8 text-[#94A3B8]">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#E2E8F0] mb-4">Overview</h2>
            <p className="mb-4">
              The SMF Works Project is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, and safeguard your information
              when you use our website, newsletters, and applications.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#E2E8F0] mb-4">Information We Collect</h2>
            <p className="mb-4">We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-[#E2E8F0]">Personal Information:</strong> Name, email address, and contact details when you subscribe to SMF AI Weekly or contact us.</li>
              <li><strong className="text-[#E2E8F0]">Usage Data:</strong> Information about how you interact with our website, including pages visited, time spent, and features used.</li>
              <li><strong className="text-[#E2E8F0]">Cookies:</strong> We use cookies to enhance your browsing experience and analyze website traffic.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#E2E8F0] mb-4">How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide and maintain our website and newsletters</li>
              <li>Send newsletters and updates you have subscribed to</li>
              <li>Respond to your inquiries</li>
              <li>Improve our website and work</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#E2E8F0] mb-4">Data Storage and Security</h2>
            <p className="mb-4">
              We implement appropriate technical and organizational measures to protect your personal data.
              However, no method of transmission over the internet or electronic storage is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#E2E8F0] mb-4">Your Rights</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Withdraw consent for data processing</li>
              <li>Unsubscribe from newsletters at any time</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#E2E8F0] mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="mt-4 p-4 bg-[#131B2E] rounded-lg border border-[#1e2a45]">
              <p><strong className="text-[#E2E8F0]">Email:</strong> privacy@smfworks.com</p>
              <p><strong className="text-[#E2E8F0]">Website:</strong> https://smfworks.com</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#E2E8F0] mb-4">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by
              posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
