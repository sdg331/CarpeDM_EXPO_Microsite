import { ProductFrame } from '../../components/ProductFrame/ProductFrame';
import { Reveal } from '../../components/Reveal/Reveal';
import { SectionHeading } from '../../components/SectionHeading/SectionHeading';
import { copy } from '../../data/content';
import { media } from '../../data/media';
import '../../styles/products.css';

export function SmartMirror() {
  return (
    <section id="mirror" className="section product-section" tabIndex={-1} aria-labelledby="mirror-title">
      <div className="container">
        <Reveal>
          <SectionHeading id="mirror-title" label="SMART MIRROR" number="01" korean>
            사용자와 마주하는<br />메인 인터페이스.
          </SectionHeading>
        </Reveal>
        <div className="product-section__grid">
          <Reveal className="product-section__visual"><ProductFrame kind="mirror" media={media.mirror} /></Reveal>
          <Reveal className="product-section__content">
            <p className="product-section__lead">{copy.mirror.body}</p>
            <p className="body-copy product-section__supporting">{copy.mirror.supporting}</p>
            <dl className="product-features">
              {copy.mirror.features.map((feature) => (
                <div key={feature.title}><dt>{feature.title}</dt><dd>{feature.body}</dd></div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
