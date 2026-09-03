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
    'bg-[#101014] rounded-xl border border-[rgba(142,166,191,0.15)] p-6',
    accent ? 'border-t-2' : '',
    hover ? 'hover:shadow-lg hover:border-[#ff7a2f] transition-all' : '',
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