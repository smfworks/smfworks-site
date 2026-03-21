import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import { getSkillBySlug, getAllSkillSlugs, allSkills, type Skill } from "../data";

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

  const tierLabel = skill.tier === "free" ? "Free" : "Pro";
  const title = `${skill.name} | ${tierLabel} OpenClaw Skill | SMF Works`;
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
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium ${
                skill.tier === "free" 
                  ? "bg-[#00D4FF]/10 text-[#00D4FF]" 
                  : "bg-[#007BFF]/10 text-[#007BFF]"
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${
                skill.tier === "free" ? "bg-[#00D4FF]" : "bg-[#007BFF]"
              }`} />
              {skill.tier === "free" ? "Free" : "Subscription"}
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
            <p className="text-[#64748B] mb-2"># Install the skill</p>
            <p className="text-[#00D4FF] mb-4">smf install {skill.slug}</p>
            
            <p className="text-[#64748B] mb-2"># Get help</p>
            <p className="text-[#00D4FF]">smf run {skill.slug} --help</p>
          </div>
          
          {skill.tier === "pro" && (
            <div className="mt-6 bg-[#007BFF]/10 border border-[#007BFF]/30 rounded-xl p-4">
              <p className="text-[#E2E8F0] text-sm">
                <span className="font-semibold text-[#007BFF]">Pro Skill:</span> This skill requires an active SMF Works subscription. 
                <Link href="https://smf.works/subscribe" className="text-[#00D4FF] hover:underline ml-1">
                  Subscribe now →
                </Link>
              </p>
            </div>
          )}
        </div>
      </section>

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
                    {otherSkill.tier === "pro" && (
                      <span className="text-xs bg-[#007BFF]/10 text-[#007BFF] px-2 py-0.5 rounded">
                        Pro
                      </span>
                    )}
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
