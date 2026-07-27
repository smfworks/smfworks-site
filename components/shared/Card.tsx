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
    'bg-[#131B2E] rounded-xl border border-[#1e2a45] p-6',
    accent ? 'border-t-2' : '',
    hover ? 'hover:shadow-lg hover:border-[#ea580c] transition-all' : '',
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