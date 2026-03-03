import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1E1E1E] text-[#F8F5F0] py-12 mt-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="text-xl font-bold mb-2">
            <span className="text-[#C87941]">SMF</span> Works
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Forged by 30 years of experience.<br />Forging your future.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-[#C87941]">Navigate</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            <li><Link href="/#newsletter" className="hover:text-white transition-colors">SMF AI Weekly</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-[#C87941]">Get in Touch</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="mailto:hello@smfworks.com" className="hover:text-white transition-colors">hello@smfworks.com</a></li>
            <li className="text-gray-500">Pittsboro, NC</li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-10 pt-6 border-t border-[#333] text-center text-xs text-gray-600">
        © {new Date().getFullYear()} SMF Works. All rights reserved.
      </div>
    </footer>
  );
}
