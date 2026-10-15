import { t } from '../i18n';
import type { PageKind } from '../App';
import { sitePage } from '../data/paths';

const links = [
  { page: 'home', path: 'index.html', label: t('명함'), icon: 'M3 10 12 3l9 7 M5 9v12h14V9 M9 21v-8h6v8' },
  { page: 'service', path: 'service/', label: t('작품 소개'), icon: 'M7 3h10v16H7Z M12 19v3 M8 22h8 M10 8l4-2' },
  { page: 'use-cases', path: 'use-cases/', label: t('활용'), icon: 'M4 6h16v14H4Z M8 6V3h8v3 M4 12h16 M10 12v3h4v-3' },
  { page: 'system', path: 'system/', label: t('기술'), icon: 'M4 4h6v6H4Z M14 14h6v6h-6Z M14 4h6v6h-6Z M4 14h6v6H4Z' },
] as const;

export function MobileNav({ page }: { page: PageKind }) {
  return <nav className="mobile-dock" aria-label={t('빠른 이동')}>
    {links.map(link => <a key={link.page} href={sitePage(`${link.path}`)} aria-current={page === link.page ? 'page' : undefined}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={link.icon} /></svg><span>{link.label}</span>
    </a>)}
  </nav>;
}
