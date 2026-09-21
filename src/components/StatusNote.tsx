interface StatusNoteProps {
  children: string;
  label?: string;
}

export function StatusNote({ children, label = '현재 공개 범위' }: StatusNoteProps) {
  return (
    <div className="status-note" role="note">
      <strong className="status-note__label">{label}</strong>
      <p className="status-note__body">{children}</p>
    </div>
  );
}
