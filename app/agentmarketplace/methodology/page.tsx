import { Metadata } from "next";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "Clearinghouse Methodology | SMF Works",
  description: "How SMF Works maps, counts, and verifies entries in the AI Clearinghouse.",
};

export default function MethodologyPage() {
  const filePath = path.join(process.cwd(), "content/agentmarketplace/methodology.md");
  const raw = fs.readFileSync(filePath, "utf-8");
  const content = raw.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, "").trim();

  return (
    <div className="min-h-screen bg-forge-navy px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <article className="prose prose-invert max-w-none">
          <div
            className="prose-headings:text-text-primary prose-p:text-muted prose-a:text-data-cyan prose-strong:text-text-primary prose-code:text-data-cyan prose-pre:bg-forge-card prose-pre:border prose-pre:border-forge-border prose-table:border prose-table:border-forge-border prose-th:border prose-th:border-forge-border prose-th:bg-forge-card prose-td:border prose-td:border-forge-border prose-td:text-muted"
            dangerouslySetInnerHTML={{ __html: markdownToHtml(content) }}
          />
        </article>
      </div>
    </div>
  );
}

function markdownToHtml(md: string): string {
  return md
    .replace(/^### (.*$)/gim, "<h3 class=\"text-xl font-semibold mt-8 mb-3\">$1</h3>")
    .replace(/^## (.*$)/gim, "<h2 class=\"text-2xl font-semibold mt-10 mb-4\">$1</h2>")
    .replace(/^# (.*$)/gim, "<h1 class=\"text-4xl font-bold mb-6\">$1</h1>")
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(/`([^`]+)`/g, "<code class=\"bg-forge-card px-1 py-0.5 rounded text-sm\">$1</code>")
    .replace(/```([\s\S]*?)```/g, "<pre class=\"bg-forge-card border border-forge-border rounded-lg p-4 overflow-x-auto\"><code class=\"text-sm\">$1</code></pre>")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "<a href=\"$2\" class=\"text-data-cyan hover:underline\">$1</a>")
    .replace(/^\|(.+)\|$/gim, (match) => {
      const cells = match.split("|").slice(1, -1).map((c) => c.trim());
      return `<tr>${cells.map((c) => `<td class="px-4 py-2 text-muted">${c}</td>`).join("")}</tr>`;
    })
    .replace(/^(\d+\.|-)\s+(.*$)/gim, "<li class=\"ml-6 mb-1\">$2</li>")
    .replace(/\n/g, "<br/>");
}
