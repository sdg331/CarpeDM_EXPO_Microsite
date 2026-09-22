import { Arrow } from '../../components/Arrow';
import { ProductFrame } from '../../components/ProductFrame/ProductFrame';
import { copy } from '../../data/content';
import { media } from '../../data/media';
import './Hero.css';

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="hero__name">CarpeDM</p>
          <h1 id="hero-title" className="display-title">거울 너머,<br /><span>새로운 나를 만나다.</span></h1>
          <p className="hero__body">{copy.hero.body}</p>
          <div className="hero__actions">
            <a className="hero__primary" href="#mirror">{copy.hero.primaryCta}<Arrow /></a>
            <a className="text-link" href="#experience">{copy.hero.secondaryCta}<Arrow /></a>
          </div>
        </div>
        <div className="hero__visual">
          <ProductFrame kind="mirror" variant="hero" media={media.hero} />
        </div>
      </div>
      <div className="container hero__footnote"><p>Smart Mirror <span>+ ID Card Kiosk</span></p><a href="#project">프로젝트 알아보기 <Arrow direction="down" /></a></div>
    </section>
  );
}
