import fs from "fs";
import path from "path";

export interface SignalPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  categories: string[];
  image?: string;
  readTime: number;
}

const CONTENT_DIR = path.join(process.cwd(), "content", "the-signal");

function parseFrontmatter(raw: string): Record<string, string | number | string[]> {
  const lines = raw.split("\n");
  const result: Record<string, string | number | string[]> = {};

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

    if (key === "categories") {
      result[key] = value
        .replace(/^\[/, "")
        .replace(/\]$/, "")
        .split(",")
        .map((s) => s.trim().replace(/^["']/, "").replace(/["']$/, ""))
        .filter(Boolean);
    } else if (key === "readTime") {
      result[key] = parseInt(value, 10) || 0;
    } else {
      result[key] = value;
    }
  }

  return result;
}

function loadPost(slug: string): SignalPost | undefined {
  const filePath = path.join(CONTENT_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return undefined;

  const raw = fs.readFileSync(filePath, "utf-8");
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return undefined;

  const fm = parseFrontmatter(match[1]);
  const content = match[2].trimStart();

  return {
    slug: String(fm.slug || slug),
    title: String(fm.title || ""),
    excerpt: String(fm.excerpt || ""),
    content,
    date: String(fm.date || ""),
    categories: (fm.categories as string[]) || [],
    image: fm.image ? String(fm.image) : undefined,
    readTime: typeof fm.readTime === "number" ? fm.readTime : 0,
  };
}

export function getAllSignalPosts(): SignalPost[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  const files = fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));

  return files
    .map((slug) => loadPost(slug))
    .filter((p): p is SignalPost => p !== undefined)
    .sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
}

export function getSignalPostBySlug(slug: string): SignalPost | undefined {
  return loadPost(slug);
}

export function getAllSignalCategories(): string[] {
  const posts = getAllSignalPosts();
  const cats = new Set<string>();
  for (const post of posts) {
    for (const cat of post.categories) {
      cats.add(cat);
    }
  }
  return Array.from(cats).sort();
}