import { Arrow } from '../../components/Arrow';
import { ProductFrame } from '../../components/ProductFrame/ProductFrame';
import { Reveal } from '../../components/Reveal/Reveal';
import { media } from '../../data/media';
import { siteRoot } from '../../data/paths';
import '../../styles/products.css';

export function SmartMirror() {
  return (
    <section id="mirror" className="mirror-section" tabIndex={-1} aria-labelledby="mirror-title">
      <div className="container mirror-section__grid">
        <Reveal className="mirror-section__content">
          <p className="section-kicker">Smart Mirror</p>
          <h2 id="mirror-title" className="section-title">직장 대화를 연습하는<br /><span>스마트 미러.</span></h2>
          <p className="body-copy">상황을 읽고, 자신의 모습을 마주하고, 말로 답합니다. 하나의 미러 앞에서 대화의 내용과 전달하는 태도를 함께 돌아보는 역할극을 설계합니다.</p>
          <a className="text-link" href={`${siteRoot}system/`}>디바이스 구성 살펴보기<Arrow /></a>
        </Reveal>
        <Reveal className="mirror-section__visual"><span className="product-stage-label" aria-hidden="true">02 / 역할극의 무대</span><ProductFrame kind="mirror" media={media.mirror} /></Reveal>
        <Reveal className="mirror-section__details">
          <dl className="mirror-section__features">
            <div><dt>상황을 마주하기</dt><dd>대형 세로 화면과 미러를 역할극의 무대로 구상합니다.</dd></div>
            <div><dt>나를 돌아보기</dt><dd>컬러·깊이 입력으로 표정과 자세를 살피는 방향입니다.</dd></div>
            <div><dt>말로 이어가기</dt><dd>마이크와 스피커로 질문과 응답을 이어가려는 설계입니다.</dd></div>
          </dl>
          <p className="scope-note mirror-section__scope">장치의 의도한 역할을 소개합니다. 실제 인식·분석·음성 연동은 검증이 필요합니다.</p>
        </Reveal>
      </div>
    </section>
  );
}
