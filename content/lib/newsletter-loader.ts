import fs from "fs";
import path from "path";

export interface NewsletterStory {
  headline: string;
  body: string;
  category: string;
}

export interface NewsletterIssue {
  slug: string;
  issueNumber: number;
  date: string;
  subject: string;
  intro: string;
  stories: NewsletterStory[];
}

const CONTENT_DIR = path.join(process.cwd(), "content", "newsletter");

function parseFrontmatter(raw: string): Record<string, string | number> {
  const lines = raw.split("\n");
  const result: Record<string, string | number> = {};

  for (const line of lines) {
    const trimmed = line.trimEnd();
    if (trimmed.startsWith("---") || trimmed === "") continue;

    const colonIndex = trimmed.indexOf(":");
    if (colonIndex === -1) continue;

    const key = trimmed.slice(0, colonIndex).trim();
    let value = trimmed.slice(colonIndex + 1).trim();

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    if (key === "issueNumber") {
      result[key] = parseInt(value, 10) || 0;
    } else {
      result[key] = value;
    }
  }

  return result;
}

function extractStories(body: string): NewsletterStory[] {
  const stories: NewsletterStory[] = [];
  // Split body by --- delimiters
  const chunks = body.split(/\n---\n/);

  for (const chunk of chunks) {
    const trimmed = chunk.trim();
    if (!trimmed) continue;

    // Parse: {category: "..."}\n{"headline"}\n\nbody...
    const catMatch = trimmed.match(/^\{category:\s*"([^"]+)"\}\s*\n/);
    const headlineMatch = trimmed.match(
      /^\{category:\s*"[^"]+"\}\s*\n\{"(.+?)"\}\s*\n*/
    );

    if (!catMatch || !headlineMatch) continue;

    const category = catMatch[1];
    const headline = headlineMatch[1];
    const bodyStart = trimmed.indexOf(headlineMatch[0]) + headlineMatch[0].length;
    const storyBody = trimmed.slice(bodyStart).trim();

    stories.push({ headline, body: storyBody, category });
  }

  return stories;
}

function loadIssue(slug: string): NewsletterIssue | undefined {
  const filePath = path.join(CONTENT_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return undefined;

  const raw = fs.readFileSync(filePath, "utf-8");
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return undefined;

  const fm = parseFrontmatter(match[1]);
  const body = match[2].trimStart();
  const stories = extractStories(body);

  return {
    slug: String(fm.slug || slug),
    issueNumber: typeof fm.issueNumber === "number" ? fm.issueNumber : parseInt(String(fm.issueNumber), 10) || 0,
    date: String(fm.date || ""),
    subject: String(fm.subject || ""),
    intro: String(fm.intro || ""),
    stories,
  };
}

export function getAllIssues(): NewsletterIssue[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  const files = fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));

  return files
    .map((slug) => loadIssue(slug))
    .filter((i): i is NewsletterIssue => i !== undefined)
    .sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
}

export function getIssueBySlug(slug: string): NewsletterIssue | undefined {
  return loadIssue(slug);
}

export function getCurrentIssue(): NewsletterIssue {
  const issues = getAllIssues();
  return issues[0]; // Most recent
}
