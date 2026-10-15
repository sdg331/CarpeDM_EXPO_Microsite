import { ProductFrame } from '../../components/ProductFrame/ProductFrame';
import { media } from '../../data/media';
import { siteRoot } from '../../data/paths';
import './Introduction.css';

const practiceLoop = [
  ['상황을 고르고', '면접·직업훈련·직장대화에서 연습할 장면을 정합니다.'],
  ['내 말로 답하고', '정해진 대본을 읽기보다 질문에 자신의 말로 답합니다.'],
  ['한 가지를 바꿔보고', '내용과 전달하는 모습을 돌아보고 같은 상황을 다시 연습합니다.'],
] as const;

export function Introduction() {
  return <section id="project" className="introduction" tabIndex={-1} aria-labelledby="project-title"><div className="container">
    <div className="introduction__heading">
      <h2 id="project-title" className="section-title">미리 말해 보고, 돌아보세요.</h2>
      <p className="body-copy">내 말로 답하고, 목소리·표정·자세도 함께 돌아봅니다.</p>
    </div>
    <div className="introduction__showcase">
      <div className="introduction__visual"><ProductFrame kind="mirror" media={media.reflection} /></div>
      <ol className="introduction__loop" aria-label="대화 연습의 세 단계">{practiceLoop.map(([title, description], index) => <li key={title}><span aria-hidden="true">0{index + 1}</span><div><h3>{title}</h3><p>{description}</p></div></li>)}</ol>
    </div>
    <div className="introduction__rationale"><h3>왜 거울 앞에서 연습할까요?</h3><p>답변하는 자신의 모습과 대화 상황을 한 자리에서 마주하기 위해서입니다. 말의 내용은 물론 목소리·표정·자세도 함께 돌아보는 연습 공간으로 설계했습니다.</p></div>
    <nav className="reading-path" aria-label="처음 방문한 분을 위한 안내"><h3>처음이라면, 이렇게 살펴보세요.</h3>
      <a href="#service-practice"><span>질문 하나부터 읽어보기<small>대화 예시와 연습 포인트</small></span><span className="reading-path__number" aria-hidden="true">01</span></a>
      <a href={`${siteRoot}four-fit/`}><span>내 대화를 돌아보는 기준<small>응답·목소리·표정·자세</small></span><span className="reading-path__number" aria-hidden="true">02</span></a>
      <a href={`${siteRoot}use-cases/`}><span>내 상황에 맞는 활용 찾기<small>연습 종류와 교육 활용안</small></span><span className="reading-path__number" aria-hidden="true">03</span></a>
    </nav>
    <div className="visitor-questions" aria-label="자주 궁금한 내용">
      <details className="compact-disclosure"><summary>여기서 바로 대화를 체험할 수 있나요?<span className="disclosure-plus" aria-hidden="true" /></summary><p>이 사이트는 작품을 이해하는 소개 페이지입니다. 대화 예시는 읽으며 살펴보는 콘텐츠이고, 실제 대화 소프트웨어와 전시장 체험은 구분됩니다.</p></details>
      <details className="compact-disclosure"><summary>어디까지 구현됐는지 궁금해요.<span className="disclosure-plus" aria-hidden="true" /></summary><p>공개 코드에서 확인한 연습 모드와 대화·리포트 구조를 기술과 자료에 정리했습니다. 실물 장치 연동과 분석 정확도는 별도 검증 항목입니다. <a className="text-link" href={`${siteRoot}system/#system-evidence`}>구현 근거 확인하기</a></p></details>
    </div>
  </div></section>;
}

export function DeviceOverview() {
  return <section className="device-overview section" aria-labelledby="devices-overview-title"><div className="container">
    <h2 id="devices-overview-title" className="section-title">시작을 돕는 키오스크,<br /><span>연습을 담는 미러.</span></h2>
    <p className="body-copy">체험을 준비하는 일과 대화에 집중하는 일을 두 장치에 나눴습니다.</p>
    <div className="device-overview__grid">
      <article><ProductFrame kind="kiosk" media={media.kiosk} /><div><p className="section-kicker">체험 준비</p><h3>ID Card Kiosk</h3><p>안내·등록·출력을 맡는 입구입니다. NFC로 미러의 체험과 연결하는 구조를 설계했습니다.</p></div></article>
      <article><ProductFrame kind="mirror" media={media.mirror} /><div><p className="section-kicker">대화 연습</p><h3>Smart Mirror</h3><p>상황을 보고 말로 답하며, 응답과 목소리·표정·자세를 돌아보는 중심 장치입니다.</p></div></article>
    </div>
    <p className="scope-note">두 장치의 설계 역할을 소개합니다. 실제 등록·NFC·출력의 연결 상태는 현장 검증이 필요합니다.</p>
  </div></section>;
}
