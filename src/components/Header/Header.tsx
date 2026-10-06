import { useEffect, useRef, useState } from 'react';
import type { PageKind } from '../../App';
import { Arrow } from '../Arrow';
import { dashboardUrl, navigation, siteRoot } from '../../data/paths';
import './Header.css';

export function Header({ page }: { page: PageKind }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1024px)');
    const onResize = () => { if (desktop.matches) setIsOpen(false); };
    desktop.addEventListener('change', onResize);
    return () => desktop.removeEventListener('change', onResize);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onEscape);
    return () => document.removeEventListener('keydown', onEscape);
  }, [isOpen]);

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a className="brand" href={`${siteRoot}index.html`} aria-label="4-Fit MirrorTing, 처음으로">
          <span>4-Fit MirrorTing<small>by CarpeDM</small></span>
        </a>
        <button ref={toggleRef} type="button" className="menu-toggle"
          aria-label={isOpen ? '메뉴 닫기' : '메뉴 열기'}
          aria-expanded={isOpen} aria-controls="primary-navigation"
          onClick={() => setIsOpen((open) => !open)}>
          <span aria-hidden="true" /><span aria-hidden="true" />
        </button>
        <nav id="primary-navigation" className={`site-nav${isOpen ? ' site-nav--open' : ''}`} aria-label="주요 메뉴">
          <div className="site-nav__links">
            {navigation.map(({ path, page: destination, label }) => (
              <a key={path} href={`${siteRoot}${path}`} aria-current={page === destination ? 'page' : undefined} onClick={() => setIsOpen(false)}><span>{label}</span><Arrow /></a>
            ))}
          </div>
          <div className="site-nav__actions">
            {dashboardUrl && <a className="site-header__demo" href={dashboardUrl} target="_blank" rel="noopener noreferrer"
              aria-label="운영 관리, 샘플 워크스페이스 (새 탭)" onClick={() => setIsOpen(false)}>
              운영 관리<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M14 3h7v7M10 14 21 3M10 3H3v18h18v-7" /></svg>
            </a>}
            <a className="site-header__cta" href={`${siteRoot}service/`} aria-current={page === 'service' ? 'page' : undefined} onClick={() => setIsOpen(false)}>서비스 소개<Arrow /></a>
          </div>
        </nav>
      </div>
    </header>
  );
}
