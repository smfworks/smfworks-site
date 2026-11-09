import path from "path";

/**
 * Resolve a slug to a file path inside `dir`, refusing anything that could
 * escape it. Defense against path traversal via URL slugs
 * (hernes-security scan_2396002a8603794567266b8b, CWE-22).
 *
 * Returns the safe absolute path, or null when the slug is malformed or
 * would resolve outside `dir`.
 */
export function safeSlugPath(dir: string, slug: string, extension = ".md"): string | null {
  if (typeof slug !== "string") return null;
  const trimmed = slug.trim();
  if (trimmed.length === 0 || trimmed.length > 200) return null;
  // Slugs are URL segments; reject anything with separators, dots-only
  // segments, or encoded traversal regardless of upstream decoding.
  if (/[/\\]|\.\.|^\.+$|%2e%2e/i.test(trimmed)) return null;
  const resolvedBase = path.resolve(dir);
  const resolved = path.resolve(resolvedBase, `${trimmed}${extension}`);
  // Containment check: the resolved path must stay inside the base dir.
  if (resolved !== resolvedBase && !resolved.startsWith(resolvedBase + path.sep)) {
    return null;
  }
  return resolved;
}
