import Link from "next/link";
import type { Metadata } from "next";
import { freeSkills, proSkills } from "./data";

export const metadata: Metadata = {
  title: "SMF Skills | 27 Free + Pro OpenClaw Skills",
  description:
    "27 productivity skills for OpenClaw: 13 free forever + 14 Pro with subscription. File organizers, PDF tools, webcam capture, lead capture, invoicing, booking, and more.",
  alternates: { canonical: "https://smfworks.com/skills" },
};

export default function SkillsPage() {
  return (
    <>
      {/* HEADER */}
      <section className="bg-[#001F3F] text-[#E2E8F0] py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[300px] bg-[#007BFF] opacity-[0.05] blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <p className="text-[#00D4FF] text-sm font-semibold uppercase tracking-widest mb-3">OpenClaw Skills</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">27 Skills for Productivity</h1>
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto leading-relaxed mb-6">
            A curated collection of skills and applications for OpenClaw — from everyday utilities to business automation tools.
            Free skills forever. Pro skills and applications for serious automation.
          </p>
          <div className="mb-6">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-[#00D4FF] hover:text-[#00B8DB] text-sm font-medium transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Request a Skill or Application
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="inline-flex items-center gap-2 bg-[#00D4FF]/10 text-[#00D4FF] px-4 py-2 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-[#00D4FF] rounded-full"></span>
              13 Free Forever
            </span>
            <span className="inline-flex items-center gap-2 bg-[#007BFF]/10 text-[#007BFF] px-4 py-2 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-[#007BFF] rounded-full"></span>
              14 Pro ($19.99/mo)
            </span>
          </div>
        </div>
      </section>

      {/* QUICK START */}
      <section className="bg-[#0A1628] py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#E2E8F0] mb-6 text-center">Quick Start</h2>
          <div className="bg-[#131B2E] border border-[#1e2a45] rounded-xl p-6 font-mono text-sm overflow-x-auto">
            <p className="text-[#64748B] mb-2"># Install SMF CLI (one-time setup)</p>
            <p className="text-[#00D4FF] mb-4">curl -fsSL https://raw.githubusercontent.com/smfworks/smfworks-skills/main/install.sh | bash</p>

            <p className="text-[#64748B] mb-2"># Install any skill (via OpenClaw TUI or CLI)</p>
            <p className="text-[#00D4FF] mb-2">smfw install file-organizer</p>
            <p className="text-[#00D4FF] mb-4">smfw install lead-capture</p>

            <p className="text-[#64748B] mb-2"># Run it</p>
            <p className="text-[#00D4FF]">smfw run file-organizer organize-date ~/Downloads</p>
          </div>

          <div className="mt-4 p-4 bg-[#00D4FF]/10 border border-[#00D4FF]/20 rounded-lg">
            <p className="text-[#00D4FF] text-sm">
              <strong>💡 Tip:</strong> After installing the SMF CLI, launch the OpenClaw TUI and use the skill manager to browse and install skills interactively.
            </p>
          </div>
          
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href="https://github.com/smfworks/smfworks-skills"
              className="inline-flex items-center gap-2 bg-[#007BFF] hover:bg-[#0066CC] text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              View on GitHub
            </Link>
            <Link
              href="https://smf.works/subscribe"
              className="inline-flex items-center gap-2 bg-[#00D4FF] hover:bg-[#00B8DB] text-[#001F3F] px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Subscribe to Pro
            </Link>
          </div>
        </div>
      </section>

      {/* FREE SKILLS */}
      <section className="bg-[#0A1628] py-16 px-6 border-t border-[#1e2a45]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <span className="inline-flex items-center justify-center w-10 h-10 bg-[#00D4FF] text-[#001F3F] rounded-full font-bold">13</span>
            <h2 className="text-3xl font-bold text-[#E2E8F0]">Free Skills</h2>
            <span className="text-[#94A3B8] text-sm ml-auto">No subscription. No auth. Just works.</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {freeSkills.map((skill) => (
              <div key={skill.slug} className="bg-[#131B2E] border border-[#1e2a45] rounded-xl p-6 hover:border-[#00D4FF]/50 transition-colors flex flex-col">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-[#00D4FF] font-mono text-sm">#{skill.num.toString().padStart(2, '0')}</span>
                  <code className="text-[#64748B] text-xs">{skill.slug}</code>
                </div>
                <h3 className="text-lg font-semibold text-[#E2E8F0] mb-2">{skill.name}</h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed flex-grow">{skill.shortDesc}</p>
                <div className="mt-4 pt-4 border-t border-[#1e2a45]">
                  <Link 
                    href={`/skills/${skill.slug}`}
                    className="inline-flex items-center text-[#00D4FF] text-sm font-medium hover:underline"
                  >
                    See more
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRO SKILLS */}
      <section className="bg-[#0A1628] py-16 px-6 border-t border-[#1e2a45]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <span className="inline-flex items-center justify-center w-10 h-10 bg-[#007BFF] text-white rounded-full font-bold">14</span>
            <h2 className="text-3xl font-bold text-[#E2E8F0]">Pro Skills</h2>
          </div>
          
          <div className="bg-[#007BFF]/10 border border-[#007BFF]/30 rounded-xl p-6 mb-10">
            <p className="text-[#E2E8F0] leading-relaxed">
              Premium skills and applications for business automation. Requires SMF Works subscription ($19.99/mo, unlocks all Premium skills and applications for the duration of your active subscription). This is a growing collection — new skills and applications added weekly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {proSkills.map((skill) => (
              <div key={skill.slug} className="bg-[#131B2E] border border-[#1e2a45] rounded-xl p-6 hover:border-[#007BFF]/50 transition-colors flex flex-col">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-[#007BFF] font-mono text-sm">#{skill.num}</span>
                  <code className="text-[#64748B] text-xs">{skill.slug}</code>
                </div>
                <h3 className="text-lg font-semibold text-[#E2E8F0] mb-2">{skill.name}</h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed flex-grow">{skill.shortDesc}</p>
                <div className="mt-4 pt-4 border-t border-[#1e2a45]">
                  <Link 
                    href={`/skills/${skill.slug}`}
                    className="inline-flex items-center text-[#007BFF] text-sm font-medium hover:underline"
                  >
                    See more
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-[#94A3B8] hover:text-[#00D4FF] text-sm font-medium transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Request a Skill or Application
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#001F3F] py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#E2E8F0] mb-4">Ready to Get Started?</h2>
          <p className="text-[#94A3B8] mb-8">Install the SMF CLI and start using skills in minutes.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="https://github.com/smfworks/smfworks-skills"
              className="inline-flex items-center gap-2 bg-[#007BFF] hover:bg-[#0066CC] text-white px-8 py-4 rounded-lg font-medium transition-colors"
            >
              Get Started Free
            </Link>
            <Link
              href="https://smf.works/subscribe"
              className="inline-flex items-center gap-2 bg-[#00D4FF] hover:bg-[#00B8DB] text-[#001F3F] px-8 py-4 rounded-lg font-medium transition-colors"
            >
              Subscribe to Pro — $19.99/mo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
