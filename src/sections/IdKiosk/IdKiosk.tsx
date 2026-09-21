import { ProductFrame } from '../../components/ProductFrame/ProductFrame';
import { Reveal } from '../../components/Reveal/Reveal';
import { SectionHeading } from '../../components/SectionHeading/SectionHeading';
import { copy } from '../../data/content';
import { media } from '../../data/media';
import '../../styles/products.css';

export function IdKiosk() {
  return (
    <section id="kiosk" className="section product-section product-section--kiosk" aria-labelledby="kiosk-title">
      <div className="container">
        <Reveal>
          <SectionHeading id="kiosk-title" label="ID CARD KIOSK" number="02" korean>
            경험을 시작하는<br />첫 번째 접점.
          </SectionHeading>
        </Reveal>
        <div className="product-section__grid">
          <Reveal className="product-section__visual"><ProductFrame kind="kiosk" media={media.kiosk} /></Reveal>
          <Reveal className="product-section__content">
            <p className="product-section__lead">{copy.kiosk.paragraphs[0]}</p>
            <p className="body-copy product-section__supporting">{copy.kiosk.paragraphs[1]}</p>
            <dl className="product-features">
              {copy.kiosk.features.map((feature) => (
                <div key={feature.title}><dt>{feature.title}</dt><dd>{feature.body}</dd></div>
              ))}
            </dl>
            <p className="scope-note product-section__scope">{copy.kiosk.scope}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
