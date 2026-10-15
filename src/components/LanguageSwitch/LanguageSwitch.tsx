import { language, localizedHref } from '../../i18n';
import './LanguageSwitch.css';

export function LanguageSwitch() {
  return <nav className="language-switch" aria-label="Language / 언어">
    <a href={localizedHref(window.location.href, 'ko')} lang="ko" hrefLang="ko" aria-current={language === 'ko' ? 'true' : undefined}>한국어</a>
    <a href={localizedHref(window.location.href, 'en')} lang="en" hrefLang="en" aria-current={language === 'en' ? 'true' : undefined}>English</a>
  </nav>;
}
