import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  variant?: 'base' | 'elevated' | 'hero';
  className?: string;
}

const variantStyles: Record<NonNullable<SectionProps['variant']>, string> = {
  base: 'bg-forge-navy',
  elevated: 'bg-forge-surface-elevated',
  hero: 'bg-forge-navy-deep',
};

export default function Section({
  children,
  variant = 'base',
  className = '',
}: SectionProps) {
  return (
    <section
      className={`${variantStyles[variant]} py-16 px-6 ${className}`.trim()}
    >
      {children}
    </section>
  );
}
