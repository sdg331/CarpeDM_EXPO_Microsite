import type { ReactNode } from 'react';

interface SectionHeadingProps {
  id: string;
  label: string;
  number?: string;
  children: ReactNode;
  description?: string;
  korean?: boolean;
  headingLang?: string;
}

export function SectionHeading({ id, label, number, children, description, korean = false, headingLang }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <p className="eyebrow">
        {number && <span className="section-heading__number" aria-hidden="true">{number} /</span>}
        {label}
      </p>
      <h2 id={id} lang={headingLang} className={`section-title${korean ? ' section-title--ko' : ''}`}>{children}</h2>
      {description && <p className="body-copy section-heading__description">{description}</p>}
    </div>
  );
}
