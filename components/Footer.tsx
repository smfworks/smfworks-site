import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#001F3F] text-[#E2E8F0] py-12 border-t border-[#1e2a45]">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="text-xl font-bold mb-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#007BFF]">SMF</span>{" "}
            <span className="text-[#FF6B00]">Works</span>
          </div>
          <p className="text-sm text-[#94A3B8] leading-relaxed">
            Forged by 30 years of experience.<br />Forging your future.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-[#00D4FF]">Navigate</h4>
          <ul className="space-y-2 text-sm text-[#94A3B8]">
            <li><Link href="/services" className="hover:text-[#E2E8F0] transition-colors">Services</Link></li>
            <li><Link href="/blog" className="hover:text-[#E2E8F0] transition-colors">Blog</Link></li>
            <li><Link href="/about" className="hover:text-[#E2E8F0] transition-colors">About</Link></li>
            <li><Link href="/contact" className="hover:text-[#E2E8F0] transition-colors">Contact</Link></li>
            <li><Link href="/#newsletter" className="hover:text-[#E2E8F0] transition-colors">SMF AI Weekly</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-[#00D4FF]">Get in Touch</h4>
          <ul className="space-y-2 text-sm text-[#94A3B8]">
            <li><a href="mailto:michael@smfworks.com" className="hover:text-[#E2E8F0] transition-colors">michael@smfworks.com</a></li>
            <li className="text-[#94A3B8]/60">Pittsboro, NC</li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-10 pt-6 border-t border-[#1e2a45] text-center text-xs text-[#94A3B8]/40">
        © {new Date().getFullYear()} SMF Works. All rights reserved.
      </div>
    </footer>
  );
}
