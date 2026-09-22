import { useEffect, useRef, useState } from 'react';
import { BrandMark } from '../BrandMark';
import './Header.css';

const navigation = [
  { href: '#project', label: '소개' },
  { href: '#mirror', label: '디바이스' },
  { href: '#experience', label: '체험 흐름' },
  { href: '#system', label: '기술 구성' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 768px)');
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

  const followSection = (href: string) => {
    if (!isOpen) return;
    setIsOpen(false);
    // Focus the actual destination instead of leaving focus in the hidden menu.
    document.getElementById(href.slice(1))?.focus({ preventScroll: true });
  };

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a className="brand" href="#top" aria-label="4-Fit MirrorTing, 처음으로" onClick={() => followSection('#top')}>
          <BrandMark /><span>4-Fit MirrorTing<span className="brand__period">.</span></span>
        </a>
        <button ref={toggleRef} type="button" className="menu-toggle"
          aria-label={isOpen ? '메뉴 닫기' : '메뉴 열기'}
          aria-expanded={isOpen} aria-controls="primary-navigation"
          onClick={() => setIsOpen((open) => !open)}>
          <span aria-hidden="true" /><span aria-hidden="true" />
        </button>
        <nav id="primary-navigation" className={`site-nav${isOpen ? ' site-nav--open' : ''}`} aria-label="주요 메뉴">
          {navigation.map(({ href, label }) => (
            <a key={href} href={href} onClick={() => followSection(href)}>{label}</a>
          ))}
        </nav>
        <span className="site-header__context">동양미래대학교 EXPO</span>
      </div>
    </header>
  );
}
