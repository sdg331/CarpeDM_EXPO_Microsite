import english from './data/en.json' with { type: 'json' };

export type Language = 'ko' | 'en';
const preferenceKey = 'mirrorting.language';

export function resolveLanguage(search: string, saved: string | null): Language {
  const requested = new URLSearchParams(search).get('lang');
  return requested === 'ko' || requested === 'en' ? requested : saved === 'en' ? 'en' : 'ko';
}

function readLanguage(): Language {
  if (typeof window === 'undefined') return 'ko';
  let saved: string | null = null;
  try { saved = window.localStorage.getItem(preferenceKey); } catch { /* Storage can be blocked. */ }
  const selected = resolveLanguage(window.location.search, saved);
  try { window.localStorage.setItem(preferenceKey, selected); } catch { /* URL links retain the choice. */ }
  return selected;
}

export const language = readLanguage();

export function t(text: string, selected: Language = language): string {
  return selected === 'en' ? (english as Record<string, string>)[text] ?? text : text;
}

export function localizedHref(href: string, selected: Language = language, base = window.location.href): string {
  const url = new URL(href, base);
  url.searchParams.set('lang', selected);
  return url.href;
}
