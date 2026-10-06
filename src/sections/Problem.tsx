import { Arrow } from '../components/Arrow';
import { siteRoot } from '../data/paths';

const moments = ['첫 출근', '업무 보고', '상사 질문', '실수 설명', '피드백 대응'];

export function Problem() {
  return (
    <section id="problem" className="story-section story-section--problem" tabIndex={-1} aria-labelledby="problem-title">
      <div className="container story-section__split">
        <div>
          <p className="section-kicker"><span className="chapter-number" aria-hidden="true">01</span>처음이라는 문제</p>
          <h2 id="problem-title" className="section-title">처음 겪는 직장 대화에도<br /><span>연습할 기회가 필요합니다.</span></h2>
        </div>
        <div className="story-section__body">
          <p className="body-copy">첫 출근부터 업무 보고, 예상치 못한 질문과 피드백까지. 실제 직장에서는 처음 겪는 순간이 이어집니다.</p>
          <p className="body-copy">4-Fit MirrorTing은 이런 상황을 역할극으로 미리 경험하고, 자신의 응답을 돌아볼 수 있는 체험을 지향합니다.</p>
          <a className="text-link" href={`${siteRoot}service/#practice`}>어떤 대화를 연습하나요<Arrow /></a>
        </div>
        <ul className="moment-list" aria-label="연습할 직장생활의 순간">
          {moments.map((moment, index) => <li key={moment}><span aria-hidden="true">0{index + 1}</span>{moment}</li>)}
        </ul>
      </div>
    </section>
  );
}
