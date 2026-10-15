import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { language, t } from './i18n';
import './styles/tokens.css';
import './styles/globals.css';
import './styles/typography.css';
import App, { type PageKind } from './App';
import './sections/WorkplacePractice.css';
import './styles/showroom.css';
import './styles/mobile.css';
import './styles/silver.css';

const root = document.getElementById('root');
if (!root) throw new Error('Missing application root');

document.documentElement.lang = language;
document.title = t(document.title);
document.querySelectorAll<HTMLMetaElement>('meta[name="description"], meta[property="og:title"], meta[property="og:description"]')
  .forEach(meta => { meta.content = t(meta.content); });
document.querySelector<HTMLMetaElement>('meta[property="og:locale"]')?.setAttribute('content', language === 'en' ? 'en_US' : 'ko_KR');

const pages: PageKind[] = ['home', 'service', 'four-fit', 'system', 'use-cases', 'team'];
const page = pages.find(candidate => candidate === root.dataset.page) ?? 'home';
createRoot(root).render(<StrictMode><App page={page} /></StrictMode>);
