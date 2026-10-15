import { Arrow } from '../../components/Arrow';
import { ProductFrame } from '../../components/ProductFrame/ProductFrame';
import { copy } from '../../data/content';
import { media } from '../../data/media';
import { dashboardUrl, siteRoot } from '../../data/paths';
import './Hero.css';

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__card">
        <div className="hero__signature">
          <a href={`${siteRoot}team/`} aria-label="제작팀 CarpeDM 알아보기">CarpeDM</a>
          <span>동양미래대학교 EXPO</span>
        </div>
        <div className="hero__grid">
          <div className="hero__content">
            <p className="hero__name">AI 스마트 미러 프로젝트</p>
            <h1 id="hero-title" className="display-title">4-Fit<br /><span>MirrorTing</span></h1>
            <p className="hero__body">{copy.hero.body}</p>
          </div>
          <div className="hero__visual">
            <ProductFrame kind="mirror" variant="hero" media={media.hero} />
          </div>
        </div>
        <p className="hero__modes">면접<span aria-hidden="true"> · </span>직업훈련<span aria-hidden="true"> · </span>직장대화</p>
        <nav className="hero__actions" aria-label="프로젝트 알아보기">
          <a className="hero__primary" href={`${siteRoot}service/`}><span>작품 알아보기<small>작품과 체험 방식</small></span><Arrow /></a>
          <a className="hero__secondary" href={`${siteRoot}use-cases/`}><span>활용 장면<small>연습과 교육</small></span></a>
          <a className="hero__secondary" href={`${siteRoot}system/`}><span>기술과 자료<small>구조와 구현 근거</small></span></a>
        </nav>
        <div className="hero__footnote">
          <p>응답 · 목소리 · 표정 · 자세</p>
          {dashboardUrl && <a href={dashboardUrl} target="_blank" rel="noopener noreferrer">샘플 운영 화면<span className="sr-only"> (새 탭)</span></a>}
        </div>
      </div>
    </section>
  );
}
