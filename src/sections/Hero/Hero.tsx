import { Arrow } from '../../components/Arrow';
import { ProductFrame } from '../../components/ProductFrame/ProductFrame';
import { copy } from '../../data/content';
import { media } from '../../data/media';
import './Hero.css';

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container">
        <div className="hero__grid">
          <div className="hero__content">
            <p className="eyebrow hero__eyebrow"><span aria-hidden="true" />{copy.hero.label}</p>
            <h1 id="hero-title" className="display-title">
              <span>거울이 인터페이스가 되는 순간.</span>
            </h1>
            <p className="body-copy hero__body">{copy.hero.body}</p>
            <div className="hero__actions">
              <a className="hero__primary" href="#experience">{copy.hero.primaryCta}<Arrow /></a>
              <a className="text-link" href="#system">{copy.hero.secondaryCta}<Arrow /></a>
            </div>
          </div>
          <div className="hero__visual">
            <ProductFrame kind="mirror" variant="hero" media={media.hero} />
          </div>
        </div>
        <dl className="hero__summary" aria-label="CarpeDM 구성 요약">
          <div><dt>Smart Mirror</dt><dd>메인 인터랙션 디바이스</dd></div>
          <div><dt>ID Card Kiosk</dt><dd>경험이 시작되는 접점</dd></div>
          <div><dt>Connected Experience</dt><dd>두 장치를 잇는 체험 설계</dd></div>
        </dl>
      </div>
    </section>
  );
}
