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
          <p className="hero__name">말하기에도, 연습이 필요하니까.</p>
          <h1 id="hero-title" className="display-title">직장 대화,<br />미리 연습하는 거울.</h1>
          <p className="hero__body">{copy.hero.body}</p>
          <div className="hero__actions">
            <a className="hero__primary" href="#home-uses">{copy.hero.primaryCta}<Arrow direction="down" /></a>
          </div>
        </div>
        <div className="hero__visual">
          <ProductFrame kind="mirror" variant="hero" media={media.hero} />
        </div>
      </div>
      <div className="container hero__footnote">
        <div className="hero__fit"><span>4-Fit 피드백 설계</span><strong>응답 · 목소리 · 표정 · 자세</strong></div>
      </div>
    </section>
  );
}
