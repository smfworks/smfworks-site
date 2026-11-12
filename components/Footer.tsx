import Link from "next/link";

const linkClass = "text-text-primary hover:text-forge-ember transition-colors";

export default function Footer() {
  return (
    <footer className="border-t border-forge-border bg-forge-navy-deep">
      <div className="max-w-3xl mx-auto px-6 py-10">
        <p className="text-sm text-text-muted leading-relaxed">
          <Link href="/" className={linkClass}>
            SMF Works
          </Link>
          {" · Human–AI research lab · "}
          <a
            href="https://github.com/smfworks"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            GitHub
          </a>
          {" · "}
          <a
            href="https://www.smfclearinghouse.com/blog"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Clearinghouse
          </a>
          {" · "}
          <a
            href="https://smfwisdomforge.com"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            smfwisdomforge.com
          </a>
          {" · "}
          <a href="mailto:michael@smfworks.com" className={linkClass}>
            michael@smfworks.com
          </a>
        </p>
        <p className="mt-3 text-sm italic text-text-dim leading-relaxed">
          All research claims on our sites trace to published sources.
        </p>
      </div>
    </footer>
  );
}
