import { Arrow } from '../../components/Arrow';
import { ProductFrame } from '../../components/ProductFrame/ProductFrame';
import { Reveal } from '../../components/Reveal/Reveal';
import { copy } from '../../data/content';
import { media } from '../../data/media';
import '../../styles/products.css';

export function IdKiosk() {
  return (
    <section id="kiosk" className="kiosk-section" tabIndex={-1} aria-labelledby="kiosk-title">
      <div className="container kiosk-section__grid">
        <Reveal className="kiosk-section__content">
          <p className="section-kicker">ID Card Kiosk</p>
          <h2 id="kiosk-title" className="section-title">작은 시작.<br /><span>이어지는 경험.</span></h2>
          <p className="body-copy">스마트 미러를 만나기 전, 키오스크에서 시작합니다. 화면과 카메라, NFC와 프린터를 하나의 장치에 담아 체험의 첫 접점을 설계합니다.</p>
          <a className="text-link" href="#experience">체험 흐름 알아보기<Arrow /></a>
          <div className="kiosk-section__detail"><span>화면 · 카메라 · NFC · 감열 프린터</span><p>{copy.kiosk.scope}</p></div>
        </Reveal>
        <Reveal className="kiosk-section__visual"><ProductFrame kind="kiosk" media={media.kiosk} /></Reveal>
      </div>
    </section>
  );
}
