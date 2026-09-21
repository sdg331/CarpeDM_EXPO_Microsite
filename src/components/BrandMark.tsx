export function BrandMark({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
      <path d="M12 4H4v22h8M18 4h8v22h-8M15 1v28" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
