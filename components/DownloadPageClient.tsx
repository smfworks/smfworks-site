"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { BookFormat } from "@/lib/books";

interface DownloadLink {
  format: BookFormat;
  url: string;
  expiresAt: number;
}

interface DownloadPageClientProps {
  slug: string;
  title: string;
  availableFormats: BookFormat[];
}

export default function DownloadPageClient({
  slug,
  title,
}: DownloadPageClientProps) {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");

  const [links, setLinks] = useState<DownloadLink[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!sessionId) {
      setLoading(false);
      setError("No purchase session found. If you just completed checkout, please check your email or contact us.");
      return;
    }

    const currentSessionId = sessionId;

    async function fetchLinks() {
      try {
        const res = await fetch(
          `/api/download/${slug}?session_id=${encodeURIComponent(currentSessionId)}`
        );
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error || "Could not verify purchase.");
        }

        setLinks(data.links || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Could not load downloads.");
      } finally {
        setLoading(false);
      }
    }

    fetchLinks();
  }, [slug, sessionId]);

  return (
    <div className="max-w-2xl mx-auto text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-[#E2E8F0] mb-4">Thank you for your purchase!</h1>
      <p className="text-lg text-[#8ea6bf] mb-8">
        Your copy of <span className="text-[#E2E8F0] font-semibold">{title}</span> is ready below.
      </p>

      {loading && (
        <div className="py-8">
          <svg className="animate-spin mx-auto h-8 w-8 text-[#ff7a2f]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <p className="text-[#8ea6bf] mt-4">Verifying purchase…</p>
        </div>
      )}

      {error && !loading && (
        <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6 mb-8">
          <p className="text-red-200">{error}</p>
          <Link
            href={`/books/${slug}`}
            className="inline-block mt-4 text-[#ff7a2f] hover:underline"
          >
            Return to book page →
          </Link>
        </div>
      )}

      {!loading && !error && links.length > 0 && (
        <div className="space-y-4">
          {links.map((link) => (
            <a
              key={link.format}
              href={link.url}
              className="block bg-[#ff7a2f] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#ff9a56] transition-all shadow-lg shadow-[#ff7a2f]/25"
              download
            >
              Download {link.format.toUpperCase()}
            </a>
          ))}
          <p className="text-xs text-[#8ea6bf] mt-6">
            Links expire shortly for security. If your download fails, refresh the page or check your email.
          </p>
        </div>
      )}

      {!loading && !error && links.length === 0 && (
        <p className="text-[#8ea6bf]">No downloads are available for this purchase.</p>
      )}

      <div className="mt-12 text-sm text-[#8ea6bf]">
        Need help?{" "}
        <a href="mailto:michael@smfworks.com" className="text-[#ff7a2f] hover:underline">
          Contact support
        </a>
      </div>
    </div>
  );
}
