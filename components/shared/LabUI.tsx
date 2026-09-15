import Link from "next/link";

export function SurfaceCard({
  children,
  className = "",
  href,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
}) {
  const classes = `surface-card card-lift p-6 md:p-7 ${className}`.trim();
  if (!href) {
    return <div className={classes}>{children}</div>;
  }
  if (href.startsWith("http")) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${classes} block group`}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={`${classes} block group`}>
      {children}
    </Link>
  );
}

export function Eyebrow({
  children,
  tone = "ember",
}: {
  children: React.ReactNode;
  tone?: "ember" | "cyan";
}) {
  const color = tone === "cyan" ? "text-data-cyan" : "text-forge-ember";
  const dot = tone === "cyan" ? "bg-data-cyan" : "bg-forge-ember";
  return (
    <div className="inline-flex items-center gap-2 mb-5">
      <span className={`w-1.5 h-1.5 rounded-full ${dot}`} />
      <p className={`${color} text-xs font-mono uppercase tracking-[0.22em] font-medium`}>
        {children}
      </p>
    </div>
  );
}

export function SectionIntro({
  eyebrow,
  title,
  body,
  tone = "ember",
  align = "center",
}: {
  eyebrow: string;
  title: string;
  body?: string;
  tone?: "ember" | "cyan";
  align?: "center" | "left";
}) {
  return (
    <div className={`mb-12 ${align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}`}>
      <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-text-primary mb-4">
        {title}
      </h2>
      {body ? <p className="text-text-muted leading-relaxed text-lg">{body}</p> : null}
    </div>
  );
}

export function Hairline() {
  return <hr className="hairline-rule max-w-6xl mx-auto" />;
}
