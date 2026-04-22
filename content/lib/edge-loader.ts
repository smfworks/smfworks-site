import fs from "fs";
import path from "path";

export interface EdgePost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  categories: string[];
  image?: string;
  readTime: number;
}

const CONTENT_DIR = path.join(process.cwd(), "content", "the-edge");

interface Frontmatter {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  categories: string[];
  image?: string;
  readTime: number;
}

function parseFrontmatter(raw: string): Frontmatter {
  const lines = raw.split("\n");
  const result: Record<string, any> = {};

  for (const line of lines) {
    const trimmed = line.trimEnd();
    if (trimmed.startsWith("---") || trimmed === "") continue;

    const colonIndex = trimmed.indexOf(":");
    if (colonIndex === -1) continue;

    const key = trimmed.slice(0, colonIndex).trim();
    let value = trimmed.slice(colonIndex + 1).trim();

    // Strip surrounding quotes
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    if (key === "categories") {
      // Parse ["a", "b"]
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

  return result as Frontmatter;
}

function loadPost(slug: string): EdgePost | undefined {
  const filePath = path.join(CONTENT_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return undefined;

  const raw = fs.readFileSync(filePath, "utf-8");
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return undefined;

  const fm = parseFrontmatter(match[1]);
  const content = match[2].trimStart();

  return {
    slug: fm.slug,
    title: fm.title,
    excerpt: fm.excerpt,
    content,
    date: fm.date,
    categories: fm.categories || [],
    image: fm.image,
    readTime: fm.readTime,
  };
}

export function getAllEdgePosts(): EdgePost[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  const files = fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));

  const posts = files
    .map((slug) => loadPost(slug))
    .filter((p): p is EdgePost => p !== undefined)
    .sort((a, b) => {
      // Sort by date descending
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

  return posts;
}

export function getEdgePostBySlug(slug: string): EdgePost | undefined {
  return loadPost(slug);
}

export function getAllEdgeCategories(): string[] {
  const posts = getAllEdgePosts();
  const cats = new Set<string>();
  for (const post of posts) {
    for (const cat of post.categories) {
      cats.add(cat);
    }
  }
  return Array.from(cats).sort();
}
