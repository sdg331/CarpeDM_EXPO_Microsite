import { t } from '../../i18n';
import { Arrow } from '../../components/Arrow';
import { LanguageSwitch } from '../../components/LanguageSwitch/LanguageSwitch';
import { ProductFrame } from '../../components/ProductFrame/ProductFrame';
import { copy } from '../../data/content';
import { media } from '../../data/media';
import { dashboardUrl, sitePage } from '../../data/paths';
import './Hero.css';

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__card">
        <div className="hero__signature">
          <div className="hero__credit"><a href={sitePage('team/')} aria-label={t('제작팀 CarpeDM 알아보기')}>CarpeDM</a><span>{t('동양미래대학교 EXPO')}</span></div>
          <LanguageSwitch />
        </div>
        <div className="hero__grid">
          <div className="hero__content">
            <p className="hero__name">{t('AI 스마트 미러 프로젝트')}</p>
            <h1 id="hero-title" className="display-title">4-Fit<br /><span>MirrorTing</span></h1>
          </div>
          <div className="hero__visual">
            <ProductFrame kind="mirror" variant="hero" media={media.hero} />
          </div>
          <p className="hero__body">{copy.hero.body}</p>
        </div>
        <p className="hero__modes">{t('면접')}<span aria-hidden="true"> · </span>{t('직업훈련')}<span aria-hidden="true"> · </span>{t('직장대화')}</p>
        <nav className="hero__actions" aria-label={t('프로젝트 알아보기')}>
          <a className="hero__primary" href={sitePage(`service/`)}><span>{t('작품 알아보기')}<small>{t('작품과 체험 방식')}</small></span><Arrow /></a>
          <a className="hero__secondary" href={sitePage(`use-cases/`)}><span>{t('활용 장면')}<small>{t('연습과 교육')}</small></span></a>
          <a className="hero__secondary" href={sitePage(`system/`)}><span>{t('기술과 자료')}<small>{t('구조와 구현 근거')}</small></span></a>
        </nav>
        <div className="hero__footnote">
          <p>{t('응답 · 목소리 · 표정 · 자세')}</p>
          {dashboardUrl && <a href={dashboardUrl} target="_blank" rel="noopener noreferrer">{t('샘플 운영 화면')}<span className="sr-only">{t(' (새 탭)')}</span></a>}
        </div>
      </div>
    </section>
  );
}
