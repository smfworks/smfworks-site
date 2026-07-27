import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  variant?: 'base' | 'elevated' | 'hero';
  className?: string;
}

const variantStyles: Record<NonNullable<SectionProps['variant']>, string> = {
  base: 'bg-[#0A0F1F]',
  elevated: 'bg-[#1a2438]',
  hero: 'bg-[#001F3F]',
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