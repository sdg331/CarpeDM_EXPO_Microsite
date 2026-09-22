import { Arrow } from '../../components/Arrow';
import { ProductFrame } from '../../components/ProductFrame/ProductFrame';
import { Reveal } from '../../components/Reveal/Reveal';
import { media } from '../../data/media';
import '../../styles/products.css';

export function SmartMirror() {
  return (
    <section id="mirror" className="mirror-section" tabIndex={-1} aria-labelledby="mirror-title">
      <div className="container mirror-section__grid">
        <Reveal className="mirror-section__content">
          <p className="section-kicker">Smart Mirror</p>
          <h2 id="mirror-title" className="section-title">가장 익숙한 모습의<br /><span>새로운 인터페이스.</span></h2>
          <p className="body-copy">거울 앞의 움직임, 건네는 말 한마디.<br />공간 센싱과 음성 입력을 화면의 응답으로 연결하는 스마트 미러를 설계합니다.</p>
          <a className="text-link" href="#system">디바이스 구성 살펴보기<Arrow /></a>
          <dl className="mirror-section__features">
            <div><dt>Display</dt><dd>대형 세로형 미러</dd></div>
            <div><dt>Sensing</dt><dd>공간과 움직임</dd></div>
            <div><dt>Voice</dt><dd>음성 입력과 응답</dd></div>
          </dl>
        </Reveal>
        <Reveal className="mirror-section__visual"><ProductFrame kind="mirror" media={media.mirror} /></Reveal>
      </div>
    </section>
  );
}
