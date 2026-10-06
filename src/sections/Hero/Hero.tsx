import { Arrow } from '../../components/Arrow';
import { ProductFrame } from '../../components/ProductFrame/ProductFrame';
import { copy } from '../../data/content';
import { media } from '../../data/media';
import { siteRoot } from '../../data/paths';
import './Hero.css';

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="hero__name">4-Fit MirrorTing <span>by CarpeDM</span></p>
          <h1 id="hero-title" className="display-title"><span className="hero__lead">실전에서 처음 겪지 않도록,</span><span className="hero__promise">직장생활의 순간을<br />미리 경험하게 합니다.</span></h1>
          <p className="hero__body">{copy.hero.body}</p>
          <div className="hero__actions">
            <span className="hero__video-wrap"><button className="hero__video-pending" type="button" disabled aria-describedby="hero-video-status"><span aria-hidden="true">▷</span> 영상 보기</button><small id="hero-video-status">영상 제작 중</small></span>
            <a className="hero__primary" href={`${siteRoot}service/`}>{copy.hero.primaryCta}<Arrow /></a>
          </div>
        </div>
        <div className="hero__visual">
          <ProductFrame kind="mirror" variant="hero" media={media.hero} />
        </div>
      </div>
      <div className="container hero__footnote">
        <p>Smart Mirror <span>+ ID Card Kiosk</span></p>
        <a href="#problem">이야기 살펴보기<Arrow direction="down" /></a>
      </div>
    </section>
  );
}
