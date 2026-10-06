import { useEffect, useRef, useState } from 'react';
import type { PageKind } from '../../App';
import { Arrow } from '../Arrow';
import { navigation, siteRoot } from '../../data/paths';
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
          <span className="menu-toggle__label" aria-hidden="true">{isOpen ? '닫기' : '메뉴'}</span>
          <span className="menu-toggle__lines" aria-hidden="true"><i /><i /></span>
        </button>
        <nav id="primary-navigation" className={`site-nav${isOpen ? ' site-nav--open' : ''}`} aria-label="주요 메뉴">
          <p className="site-nav__label" aria-hidden="true">프로젝트 살펴보기</p>
          <div className="site-nav__links">
            {navigation.map(({ path, page: destination, label }) => (
              <a key={path} href={`${siteRoot}${path}`} aria-current={page === destination ? 'page' : undefined} onClick={() => setIsOpen(false)}><span>{label}{page === destination && <small className="site-nav__current" aria-hidden="true">현재 페이지</small>}</span><Arrow /></a>
            ))}
          </div>
          <div className="site-nav__actions">
            <a className="site-header__cta" href={`${siteRoot}service/`} aria-current={page === 'service' ? 'page' : undefined} onClick={() => setIsOpen(false)}>서비스 소개<Arrow /></a>
          </div>
        </nav>
      </div>
    </header>
  );
}
