import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | The SMF Works Project',
  description: 'The SMF Works Project privacy policy and data practices',
}

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          Privacy Policy
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Last updated: March 20, 2026
        </p>
      </div>

      <div className="prose prose-lg prose-blue mx-auto">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
          <p className="text-gray-700">
            The SMF Works Project ("we," "us," or "our") is committed to protecting your privacy. 
            This Privacy Policy explains how we collect, use, and safeguard your information 
            when you use our website, services, and applications.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
          <p className="text-gray-700 mb-4">We may collect the following types of information:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li><strong>Personal Information:</strong> Name, email address, company name, and contact details when you subscribe to our newsletter or contact us.</li>
            <li><strong>Usage Data:</strong> Information about how you interact with our website, including pages visited, time spent, and features used.</li>
            <li><strong>Social Media Data:</strong> When you connect social media accounts through our SMF Social platform, we store OAuth tokens and account information necessary for posting on your behalf.</li>
            <li><strong>Cookies:</strong> We use cookies to enhance your browsing experience and analyze website traffic.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
          <p className="text-gray-700 mb-4">We use the information we collect to:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Provide and maintain our services</li>
            <li>Send newsletters and updates you've subscribed to</li>
            <li>Respond to your inquiries and provide customer support</li>
            <li>Post content to your connected social media accounts (only when explicitly authorized)</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Storage and Security</h2>
          <p className="text-gray-700">
            We implement appropriate technical and organizational measures to protect your personal data. 
            OAuth tokens and sensitive information are encrypted. However, no method of transmission over 
            the internet or electronic storage is 100% secure.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Services</h2>
          <p className="text-gray-700">
            Our services integrate with third-party social media platforms (Pinterest, LinkedIn, X, etc.). 
            When you connect these accounts, you are also subject to their respective privacy policies. 
            We recommend reviewing the privacy policies of these platforms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
          <p className="text-gray-700 mb-4">You have the right to:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Withdraw consent for data processing</li>
            <li>Disconnect social media accounts at any time</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-700">
            If you have questions about this Privacy Policy or our data practices, please contact us:
          </p>
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-700"><strong>Email:</strong> privacy@smfworks.com</p>
            <p className="text-gray-700"><strong>Website:</strong> https://smfworks.com</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Policy</h2>
          <p className="text-gray-700">
            We may update this Privacy Policy from time to time. We will notify you of any changes by 
            posting the new Privacy Policy on this page and updating the "Last updated" date.
          </p>
        </section>

      </div>
    </div>
  )
}
