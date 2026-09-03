interface AmbientBackgroundProps {
  color?: string;
  position?: 'top-right' | 'bottom-left' | 'both';
}

export default function AmbientBackground({
  color = '#ff7a2f',
  position = 'top-right',
}: AmbientBackgroundProps) {
  const showTopRight = position === 'top-right' || position === 'both';
  const showBottomLeft = position === 'bottom-left' || position === 'both';

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {showTopRight && (
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.06] blur-[120px]"
          style={{ backgroundColor: color }}
        />
      )}
      {showBottomLeft && (
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-[0.06] blur-[120px]"
          style={{ backgroundColor: color }}
        />
      )}
    </div>
  );
}