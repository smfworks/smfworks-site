import type { Metadata } from "next";
import Link from "next/link";
import { getAllIssues, getCurrentIssue } from "@/content/lib/newsletter-loader";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "SMF AI Weekly",
  description: "Subscribe to SMF AI Weekly — a free newsletter delivering practical AI news and small business strategies every Monday, straight from an enterprise AI engineer.",
  alternates: { canonical: "https://smfworks.com/newsletter" },
};

export default function NewsletterArchivePage() {
  const issues = getAllIssues();
  const current = getCurrentIssue();
  const pastIssues = issues.filter((i) => i.issueNumber !== current.issueNumber);

  return (
    <>
      {/* HEADER */}
      <section className="bg-[#001F3F] text-[#E2E8F0] py-16 px-6 relative overflow-hidden">
        <div className="absolute top-[-50px] left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#00D4FF] opacity-[0.05] blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <p className="text-[#00D4FF] text-sm font-semibold uppercase tracking-[0.2em] mb-3">
            Weekly AI Insights
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">SMF AI Weekly</h1>
          <p className="text-[#94A3B8] text-lg max-w-2xl leading-relaxed">
            Every week, practical AI insights for small business owners — no hype,
            no jargon, just what you can actually use.
          </p>
        </div>
      </section>

      {/* CURRENT ISSUE */}
      <section className="py-16 px-6 bg-[#0A0F1F]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-10">

            {/* MAIN — Current Newsletter */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-[#FF6B00] text-white text-xs font-bold px-3 py-1 rounded">
                  CURRENT ISSUE
                </span>
                <span className="text-[#94A3B8] text-sm">
                  Issue #{current.issueNumber} · {current.date}
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-[#E2E8F0] mb-4">
                {current.subject}
              </h2>
              <p className="text-[#94A3B8] leading-relaxed mb-10">
                {current.intro}
              </p>

              <div className="space-y-8">
                {current.stories.map((story, index) => (
                  <article
                    key={index}
                    className="bg-[#131B2E]/60 backdrop-blur-sm rounded-xl border border-[#1e2a45] p-6 md:p-8"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-semibold text-[#00D4FF] bg-[#00D4FF]/10 px-2 py-1 rounded">
                        {story.category}
                      </span>
                      <span className="text-xs text-[#94A3B8]/60">
                        Story {index + 1} of {current.stories.length}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-[#E2E8F0] mb-4">
                      {story.headline}
                    </h3>
                    {story.body.split("\n\n").map((para, j) => (
                      <p key={j} className="text-[#94A3B8] leading-relaxed mb-3">
                        {para}
                      </p>
                    ))}
                  </article>
                ))}
              </div>
            </div>

            {/* SIDEBAR */}
            <aside className="lg:w-72 flex-shrink-0">
              {/* Subscribe */}
              <div className="bg-[#131B2E]/60 backdrop-blur-sm rounded-xl border border-[#1e2a45] p-6 mb-6">
                <h3 className="font-bold text-[#E2E8F0] mb-3">
                  Get it in your inbox
                </h3>
                <p className="text-xs text-[#94A3B8] mb-4">
                  Free every week. No spam. Unsubscribe anytime.
                </p>
                <NewsletterForm />
              </div>

              {/* Past Issues */}
              <div className="bg-[#131B2E]/60 backdrop-blur-sm rounded-xl border border-[#1e2a45] p-6 sticky top-24">
                <h3 className="font-bold text-[#E2E8F0] mb-4 flex items-center gap-2">
                  <span className="w-1 h-5 bg-[#FF6B00] rounded-full"></span>
                  Past Issues
                </h3>
                <nav className="space-y-3">
                  {pastIssues.map((issue) => (
                    <Link
                      key={issue.slug}
                      href={`/newsletter/${issue.slug}`}
                      className="block group"
                    >
                      <div className="text-xs text-[#94A3B8]/60 mb-0.5">
                        Issue #{issue.issueNumber} · {issue.date}
                      </div>
                      <div className="text-sm text-[#94A3B8] group-hover:text-[#00D4FF] transition-colors leading-snug">
                        {issue.subject}
                      </div>
                    </Link>
                  ))}
                </nav>
              </div>
            </aside>

          </div>
        </div>
      </section>
    </>
  );
}
