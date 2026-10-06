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
          <p className="body-copy">스마트 미러를 만나기 전, 체험의 입구를 먼저 만납니다. 화면 안내와 등록·NFC를 첫 접점으로 구상하고, 다음 장치로 이어지는 시작을 설계합니다.</p>
          <a className="text-link" href="#experience">체험 흐름 알아보기<Arrow /></a>
        </Reveal>
        <Reveal className="kiosk-section__visual"><span className="product-stage-label" aria-hidden="true">01 / 체험의 입구</span><ProductFrame kind="kiosk" media={media.kiosk} /></Reveal>
        <Reveal className="kiosk-section__details">
          <dl className="kiosk-section__features">
            <div><dt>화면과 카메라</dt><dd>체험 안내와 등록을 위한 입력 구성입니다.</dd></div>
            <div><dt>NFC</dt><dd>미러 체험으로 이어지는 연결의 접점으로 구상합니다.</dd></div>
            <div><dt>감열 프린터</dt><dd>체험의 물리적 출력물을 위한 구성입니다.</dd></div>
          </dl>
          <div className="kiosk-section__detail"><span>출력물과 NFC는 서로 다른 구성입니다.</span><p>{copy.kiosk.scope}</p></div>
        </Reveal>
      </div>
    </section>
  );
}
