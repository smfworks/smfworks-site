import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getSkillBySlug, getAllSkillSlugs, allSkills, type Skill } from "../data";
import { fetchSkillDoc } from "@/lib/skillDocs";

export function generateStaticParams() {
  return getAllSkillSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const skill = getSkillBySlug(slug);

  if (!skill) {
    return {};
  }

  const tierLabel = "Free";
  const title = `${skill.name} | Free OpenClaw Skill | SMF Works`;
  const description = skill.fullDesc.slice(0, 160) + (skill.fullDesc.length > 160 ? "..." : "");

  return {
    title,
    description,
    keywords: [
      skill.name,
      "OpenClaw",
      "skill",
      "automation",
      "productivity",
      "SMF Works",
      tierLabel.toLowerCase(),
    ],
    openGraph: {
      title: `${skill.name} - ${tierLabel} Skill for OpenClaw`,
      description,
      url: `https://smfworks.com/skills/${skill.slug}`,
      type: "article",
      images: [{ url: "https://smfworks.com/og-image.jpg", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${skill.name} - ${tierLabel} Skill for OpenClaw`,
      description,
      images: ["https://smfworks.com/og-image.jpg"],
    },
    alternates: { canonical: `https://smfworks.com/skills/${skill.slug}` },
  };
}

export default async function SkillDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const skill = getSkillBySlug(slug);

  if (!skill) {
    notFound();
  }

  const [setupDoc, howtoDoc] = await Promise.all([
    fetchSkillDoc(slug, "SETUP.md"),
    fetchSkillDoc(slug, "HOWTO.md"),
  ]);

  // Generate SoftwareApplication schema
  const skillSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: skill.name,
    description: skill.fullDesc,
    applicationCategory: "Productivity",
    operatingSystem: "Cross-platform",
    offers: {
      "@type": "Offer",
      price: skill.tier === "free" ? "0" : "19.99",
      priceCurrency: "USD",
      priceValidUntil: "2026-12-31",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "1",
    },
    publisher: {
      "@type": "Organization",
      name: "SMF Works",
      url: "https://smfworks.com",
    },
    url: `https://smfworks.com/skills/${skill.slug}`,
  };

  return (
    <>
      {/* Skill Schema Markup */}
      <Script
        id="skill-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(skillSchema) }}
      />

      {/* HEADER */}
      <section className="bg-[#001F3F] text-[#E2E8F0] py-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[300px] bg-[#007BFF] opacity-[0.05] blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <Link
            href="/skills"
            className="text-[#00D4FF] text-sm hover:underline mb-4 inline-block"
          >
            ← Back to all skills
          </Link>

          <div className="flex flex-wrap items-center gap-4 mb-4">
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium bg-[#00D4FF]/10 text-[#00D4FF]"
            >
              <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
              Free
            </span>
            <code className="text-[#64748B] text-sm">{skill.slug}</code>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">{skill.name}</h1>
          <p className="text-[#94A3B8] text-lg max-w-2xl leading-relaxed">
            {skill.fullDesc}
          </p>
        </div>
      </section>

      {/* FEATURES & USE CASES */}
      <section className="bg-[#0A1628] py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Features */}
            <div className="bg-[#131B2E] border border-[#1e2a45] rounded-xl p-6">
              <h2 className="text-xl font-bold text-[#E2E8F0] mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-[#00D4FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Key Features
              </h2>
              <ul className="space-y-3">
                {skill.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-[#94A3B8]">
                    <span className="text-[#00D4FF] mt-0.5">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Use Cases */}
            <div className="bg-[#131B2E] border border-[#1e2a45] rounded-xl p-6">
              <h2 className="text-xl font-bold text-[#E2E8F0] mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-[#007BFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Common Use Cases
              </h2>
              <ul className="space-y-3">
                {skill.useCases.map((useCase, index) => (
                  <li key={index} className="flex items-start gap-3 text-[#94A3B8]">
                    <span className="text-[#007BFF] mt-0.5">→</span>
                    <span>{useCase}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="bg-[#131B2E] py-16 px-6 border-t border-[#1e2a45]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[#001F3F] to-[#131B2E] border border-[#1e2a45] rounded-xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#FF6B00]/10 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-[#FF6B00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-[#E2E8F0]">Custom Workflow Integration</h2>
            </div>
            <p className="text-[#94A3B8] leading-relaxed mb-6">
              This skill can be customized for your specific workflow as part of an SMF Works services engagement.
              Whether you need custom automation rules, integrations with your existing tools, or specialized
              configurations for your team, we can tailor this skill to fit your exact requirements.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-[#FF6B00] hover:bg-[#e55f00] text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Explore Services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* INSTALLATION */}
      <section className="bg-[#0A1628] py-16 px-6 border-t border-[#1e2a45]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#E2E8F0] mb-6">Installation</h2>
          <div className="bg-[#131B2E] border border-[#1e2a45] rounded-xl p-6 font-mono text-sm overflow-x-auto">
            <p className="text-[#64748B] mb-2"># Install the skill (via TUI or CLI)</p>
            <p className="text-[#00D4FF] mb-4">smfw install {skill.slug}</p>

            <p className="text-[#64748B] mb-2"># Get help</p>
            <p className="text-[#00D4FF]">smfw run {skill.slug} --help</p>
          </div>

          <div className="mt-4 p-4 bg-[#00D4FF]/10 border border-[#00D4FF]/20 rounded-lg">
            <p className="text-[#00D4FF] text-sm">
              <strong>💡 Tip:</strong> Install via the OpenClaw TUI skill manager for an interactive experience, or use the CLI command above.
            </p>
          </div>


        </div>
      </section>

      {/* SETUP GUIDE */}
      {setupDoc && (
        <section className="bg-[#131B2E] py-16 px-6 border-t border-[#1e2a45]">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-[#00D4FF]/10 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-[#00D4FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-[#E2E8F0]">Setup Guide</h2>
            </div>
            <div className="[&_h2]:text-[#E2E8F0] [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-8 [&_h2]:mb-4 [&_h3]:text-[#E2E8F0] [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-3 [&_p]:text-[#94A3B8] [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:space-y-2 [&_ul]:mb-4 [&_ul]:pl-4 [&_ol]:space-y-2 [&_ol]:mb-4 [&_ol]:pl-4 [&_li]:text-[#94A3B8] [&_code]:text-[#00D4FF] [&_code]:bg-[#0A1628] [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm [&_code]:font-mono [&_pre]:bg-[#0A1628] [&_pre]:border [&_pre]:border-[#1e2a45] [&_pre]:rounded-xl [&_pre]:p-4 [&_pre]:overflow-x-auto [&_pre]:mb-4 [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_table]:w-full [&_table]:border-collapse [&_table]:mb-4 [&_th]:text-[#E2E8F0] [&_th]:bg-[#0A1628] [&_th]:border [&_th]:border-[#1e2a45] [&_th]:p-3 [&_th]:text-left [&_td]:text-[#94A3B8] [&_td]:border [&_td]:border-[#1e2a45] [&_td]:p-3 [&_blockquote]:border-l-4 [&_blockquote]:border-[#00D4FF] [&_blockquote]:pl-4 [&_blockquote]:text-[#94A3B8] [&_blockquote]:italic [&_blockquote]:my-4 [&_strong]:text-[#E2E8F0] [&_strong]:font-semibold [&_a]:text-[#00D4FF] [&_a]:underline [&_hr]:border-[#1e2a45] [&_hr]:my-8">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{setupDoc}</ReactMarkdown>
            </div>
          </div>
        </section>
      )}

      {/* HOW-TO GUIDE */}
      {howtoDoc && (
        <section className="bg-[#0A1628] py-16 px-6 border-t border-[#1e2a45]">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-[#007BFF]/10 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-[#007BFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-[#E2E8F0]">How-To Guide</h2>
            </div>
            <div className="[&_h2]:text-[#E2E8F0] [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-8 [&_h2]:mb-4 [&_h3]:text-[#E2E8F0] [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-3 [&_p]:text-[#94A3B8] [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:space-y-2 [&_ul]:mb-4 [&_ul]:pl-4 [&_ol]:space-y-2 [&_ol]:mb-4 [&_ol]:pl-4 [&_li]:text-[#94A3B8] [&_code]:text-[#00D4FF] [&_code]:bg-[#131B2E] [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm [&_code]:font-mono [&_pre]:bg-[#131B2E] [&_pre]:border [&_pre]:border-[#1e2a45] [&_pre]:rounded-xl [&_pre]:p-4 [&_pre]:overflow-x-auto [&_pre]:mb-4 [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_table]:w-full [&_table]:border-collapse [&_table]:mb-4 [&_th]:text-[#E2E8F0] [&_th]:bg-[#131B2E] [&_th]:border [&_th]:border-[#1e2a45] [&_th]:p-3 [&_th]:text-left [&_td]:text-[#94A3B8] [&_td]:border [&_td]:border-[#1e2a45] [&_td]:p-3 [&_blockquote]:border-l-4 [&_blockquote]:border-[#007BFF] [&_blockquote]:pl-4 [&_blockquote]:text-[#94A3B8] [&_blockquote]:italic [&_blockquote]:my-4 [&_strong]:text-[#E2E8F0] [&_strong]:font-semibold [&_a]:text-[#00D4FF] [&_a]:underline [&_hr]:border-[#1e2a45] [&_hr]:my-8">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{howtoDoc}</ReactMarkdown>
            </div>
          </div>
        </section>
      )}

      {/* OTHER SKILLS */}
      <section className="bg-[#131B2E] py-16 px-6 border-t border-[#1e2a45]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#E2E8F0] mb-6">More Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {allSkills
              .filter((s) => s.slug !== skill.slug)
              .slice(0, 4)
              .map((otherSkill) => (
                <Link
                  key={otherSkill.slug}
                  href={`/skills/${otherSkill.slug}`}
                  className="bg-[#0A1628] border border-[#1e2a45] rounded-xl p-4 hover:border-[#00D4FF]/30 transition-colors group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[#E2E8F0] font-medium group-hover:text-[#00D4FF] transition-colors">
                      {otherSkill.name}
                    </span>
                  </div>
                  <p className="text-[#94A3B8] text-sm truncate">{otherSkill.shortDesc}</p>
                </Link>
              ))}
          </div>
          <div className="mt-6 text-center">
            <Link href="/skills" className="text-[#00D4FF] hover:underline">
              View all skills →
            </Link>
          </div>
        </div>
      </section>

      {/* BACK LINK */}
      <section className="bg-[#001F3F] py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Link
            href="/skills"
            className="inline-flex items-center gap-2 text-[#00D4FF] hover:underline"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to all skills
          </Link>
        </div>
      </section>
    </>
  );
}
