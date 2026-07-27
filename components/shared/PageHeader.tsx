interface PageHeaderProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  accentColor: string;
}

export default function PageHeader({
  eyebrow,
  title,
  subtitle,
  accentColor,
}: PageHeaderProps) {
  return (
    <section className="relative max-w-4xl mx-auto py-16 px-6">
      {/* Accent blur glow at top-right */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-[0.06] blur-[120px] pointer-events-none"
        style={{ backgroundColor: accentColor }}
        aria-hidden="true"
      />

      <div className="relative">
        <p
          className="text-sm font-medium uppercase tracking-wider mb-4"
          style={{ color: accentColor }}
        >
          {eyebrow}
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-[#E2E8F0] mb-4">
          {title}
        </h1>
        <p className="text-lg text-[#94A3B8] max-w-2xl">{subtitle}</p>
      </div>
    </section>
  );
}