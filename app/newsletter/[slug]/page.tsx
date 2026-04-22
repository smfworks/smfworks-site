import Link from "next/link";
import { notFound } from "next/navigation";
import { getIssueBySlug, getAllIssues } from "@/content/lib/newsletter-loader";
import NewsletterForm from "@/components/NewsletterForm";

export function generateStaticParams() {
  return getAllIssues().map((issue) => ({ slug: issue.slug }));
}

export default async function NewsletterIssuePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const issue = getIssueBySlug(slug);

  if (!issue) {
    notFound();
  }

  const allIssues = getAllIssues();
  const currentIndex = allIssues.findIndex((i) => i.slug === issue.slug);
  const prevIssue = allIssues[currentIndex + 1] || null;
  const nextIssue = allIssues[currentIndex - 1] || null;

  return (
    <>
      {/* HEADER */}
      <section className="bg-[#001F3F] text-[#E2E8F0] py-16 px-6 relative overflow-hidden">
        <div className="absolute top-[-50px] left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#00D4FF] opacity-[0.05] blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <Link
            href="/newsletter"
            className="text-[#00D4FF] text-sm hover:underline mb-4 inline-block"
          >
            ← Back to Newsletter Archive
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs text-[#94A3B8]/60">
              Issue #{issue.issueNumber} · {issue.date}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            {issue.subject}
          </h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16 px-6 bg-[#0A0F1F]">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#94A3B8] leading-relaxed mb-10 text-lg">
            {issue.intro}
          </p>

          <div className="space-y-8">
            {issue.stories.map((story, index) => (
              <article
                key={index}
                className="bg-[#131B2E]/60 backdrop-blur-sm rounded-xl border border-[#1e2a45] p-6 md:p-8"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold text-[#00D4FF] bg-[#00D4FF]/10 px-2 py-1 rounded">
                    {story.category}
                  </span>
                  <span className="text-xs text-[#94A3B8]/60">
                    Story {index + 1} of {issue.stories.length}
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

          {/* NAV between issues */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-[#1e2a45]">
            {prevIssue ? (
              <Link
                href={`/newsletter/${prevIssue.slug}`}
                className="text-[#94A3B8] hover:text-[#00D4FF] transition-colors text-sm"
              >
                ← Issue #{prevIssue.issueNumber}
              </Link>
            ) : (
              <span />
            )}
            {nextIssue ? (
              <Link
                href={`/newsletter/${nextIssue.slug}`}
                className="text-[#94A3B8] hover:text-[#00D4FF] transition-colors text-sm"
              >
                Issue #{nextIssue.issueNumber} →
              </Link>
            ) : (
              <span />
            )}
          </div>

          {/* SUBSCRIBE CTA */}
          <div className="mt-12 bg-[#131B2E]/60 backdrop-blur-sm rounded-xl border border-[#1e2a45] p-8 text-center">
            <h3 className="text-xl font-bold text-[#E2E8F0] mb-3">
              Never miss an issue
            </h3>
            <p className="text-[#94A3B8] text-sm mb-6 max-w-lg mx-auto">
              Get SMF AI Weekly delivered to your inbox every week. Free. No spam.
            </p>
            <div className="max-w-md mx-auto">
              <NewsletterForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
