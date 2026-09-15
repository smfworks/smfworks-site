import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  accent?: string;
  hover?: boolean;
  className?: string;
}

export default function Card({
  children,
  accent,
  hover = true,
  className = '',
}: CardProps) {
  const classes = [
    'bg-forge-card rounded-xl border border-forge-border p-6',
    accent ? 'border-t-2' : '',
    hover ? 'hover:shadow-lg hover:border-forge-ember transition-all' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      className={classes}
      style={accent ? { borderTopColor: accent } : undefined}
    >
      {children}
    </div>
  );
}
