import fs from "fs";
import path from "path";

export interface TerminalPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  categories: string[];
  image?: string;
  readTime: number;
}

const CONTENT_DIR = path.join(process.cwd(), "content", "the-terminal");

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

export function getAllTerminalPosts(): TerminalPost[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  const files = fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".md"));

  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf-8");
      const frontmatterMatch = raw.match(/^---\n([\s\S]*?)\n---/);
      const content = raw.replace(/^---\n[\s\S]*?\n---/, "").trim();

      const fm = frontmatterMatch
        ? parseFrontmatter(frontmatterMatch[1])
        : {};

      const slug = file.replace(/\.md$/, "");

      return {
        slug,
        title: (fm.title as string) || slug,
        excerpt: (fm.excerpt as string) || content.slice(0, 200) + "...",
        content,
        date: (fm.date as string) || "",
        categories: (fm.categories as string[]) || ["General"],
        image: (fm.image as string) || undefined,
        readTime: (fm.readTime as number) || Math.ceil(content.split(" ").length / 200),
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getTerminalPostBySlug(slug: string): TerminalPost | null {
  const posts = getAllTerminalPosts();
  return posts.find((p) => p.slug === slug) || null;
}

export function getAllTerminalCategories(): string[] {
  const posts = getAllTerminalPosts();
  const all = posts.flatMap((p) => p.categories);
  return [...new Set(all)].sort();
}
