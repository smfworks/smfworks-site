const RAW_BASE = "https://raw.githubusercontent.com/smfworks/smfworks-skills/main/skills";

export async function fetchSkillDoc(slug: string, file: "SETUP.md" | "HOWTO.md" | "README.md"): Promise<string | null> {
  try {
    const url = `${RAW_BASE}/${slug}/${file}`;
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) return null;
    return await res.text();
  } catch {
    return null;
  }
}
