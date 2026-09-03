import type { Metadata } from "next";
import Link from "next/link";
import { getAllIssues, getCurrentIssue } from "@/content/lib/newsletter-loader";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "SMF AI Weekly",
  description:
    "Subscribe to SMF AI Weekly — a public lab notebook from SMF Works. Practical AI insights, experiments, and readings at the intersection of intelligence and humanity.",
  alternates: { canonical: "https://smfworks.com/newsletter" },
};

export default function NewsletterArchivePage() {
  const issues = getAllIssues();
  const current = getCurrentIssue();
  const pastIssues = issues.filter((i) => i.issueNumber !== current.issueNumber);

  return (
    <>
      {/* HERO */}
      <section className="relative py-24 px-6 overflow-hidden mesh-gradient noise-overlay">
        <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[400px] bg-[#ff7a2f] opacity-[0.06] blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#ff9a56] animate-pulse" />
            <p className="text-[#ff9a56] text-xs font-mono uppercase tracking-[0.3em] font-medium">
              The Lab Notebook
            </p>
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold tracking-tightest text-gradient-white mb-6 leading-[1.05]">
            SMF AI Weekly
          </h1>
          <p className="text-lg text-[#8ea6bf] max-w-2xl leading-relaxed">
            A weekly dispatch from SMF Works. Experiments we are running, ideas we are
            wrestling with, and readings worth your time — all at the intersection of AI and humanity.
            No hype. No trend-chasing. Just the work as it unfolds.
          </p>
        </div>
      </section>

      {/* CURRENT ISSUE */}
      <section className="relative section-padding px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* MAIN */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full text-white" style={{ background: 'linear-gradient(135deg, #ff7a2f, #ff9a56)' }}>
                  CURRENT ISSUE
                </span>
                <span className="text-[#8ea6bf] text-sm font-mono">
                  Issue #{current.issueNumber} · {current.date}
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tightest text-[#ddd9d0] mb-4">
                {current.subject}
              </h2>
              <p className="text-[#8ea6bf] leading-relaxed mb-10 text-lg">
                {current.intro}
              </p>

              <div className="space-y-5">
                {current.stories.map((story, index) => (
                  <article
                    key={index}
                    className="glass rounded-xl p-6 md:p-8 card-lift"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-mono font-medium text-[#ff9a56] bg-[#ff7a2f12] px-2.5 py-1 rounded-full">
                        {story.category}
                      </span>
                      <span className="text-xs text-[#6a5e4e] font-mono">
                        Story {index + 1} of {current.stories.length}
                      </span>
                    </div>
                    <h3 className="text-xl font-display font-semibold text-[#ddd9d0] mb-4">
                      {story.headline}
                    </h3>
                    {story.body.split("\n\n").map((para, j) => (
                      <p key={j} className="text-[#8ea6bf] leading-relaxed mb-3">
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
              <div className="glass rounded-xl p-6 mb-6">
                <h3 className="font-display font-semibold text-[#ddd9d0] mb-3">
                  Get it in your inbox
                </h3>
                <p className="text-xs text-[#8ea6bf] mb-4">
                  Free every week. No spam. Unsubscribe anytime.
                </p>
                <NewsletterForm />
              </div>

              {/* Past Issues */}
              <div className="glass rounded-xl p-6 sticky top-24">
                <h3 className="font-display font-semibold text-[#ddd9d0] mb-4 flex items-center gap-2">
                  <span className="w-1 h-5 rounded-full" style={{ background: 'linear-gradient(180deg, #ff7a2f, #ff9a56)' }} />
                  Past Issues
                </h3>
                <nav className="space-y-3">
                  {pastIssues.map((issue) => (
                    <Link
                      key={issue.slug}
                      href={`/newsletter/${issue.slug}`}
                      className="block group"
                    >
                      <div className="text-xs text-[#6a5e4e] mb-0.5 font-mono">
                        Issue #{issue.issueNumber} · {issue.date}
                      </div>
                      <div className="text-sm text-[#8ea6bf] group-hover:text-[#ff9a56] transition-colors leading-snug">
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