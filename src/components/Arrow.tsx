export function Arrow({ direction = 'right' }: { direction?: 'right' | 'up' | 'down' }) {
  const paths = {
    right: 'M3 9h12m-5-5 5 5-5 5',
    up: 'M9 15V3m-5 5 5-5 5 5',
    down: 'M9 3v12m-5-5 5 5 5-5',
  };

  return (
    <svg className="arrow-icon" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d={paths[direction]} stroke="currentColor" strokeWidth="1.25" />
    </svg>
  );
}
