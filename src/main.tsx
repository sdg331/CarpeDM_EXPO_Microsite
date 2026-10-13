import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/tokens.css';
import './styles/globals.css';
import './styles/typography.css';
import App, { type PageKind } from './App';
import './sections/WorkplacePractice.css';
import './styles/showroom.css';
import './styles/mobile.css';

const root = document.getElementById('root');
if (!root) throw new Error('Missing application root');

const pages: PageKind[] = ['home', 'service', 'four-fit', 'system', 'use-cases', 'team'];
const page = pages.find(candidate => candidate === root.dataset.page) ?? 'home';
createRoot(root).render(<StrictMode><App page={page} /></StrictMode>);
