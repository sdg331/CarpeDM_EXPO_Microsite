import { Arrow } from '../components/Arrow';
import { siteRoot } from '../data/paths';
import { DoorTransition } from './DoorTransition/DoorTransition';

export function Problem() {
  return (
    <section id="problem" className="story-section story-section--problem" tabIndex={-1} aria-labelledby="problem-title">
      <div className="container story-section__split">
        <div>
          <p className="section-kicker"><span className="chapter-number" aria-hidden="true">01</span>첫 직장 대화</p>
          <h2 id="problem-title" className="section-title">보고는 처음인데<br /><span>잘 말하고 싶으니까.</span></h2>
        </div>
        <div className="story-section__body">
          <p className="body-copy">첫 보고를 하거나 갑작스러운 질문을 받으면 무슨 말을 해야 할지 막막할 때가 있습니다. 실수를 설명할 때도 그렇습니다. 이 작품은 그런 대화를 역할극으로 연습하는 데서 출발했습니다.</p>
          <a className="text-link" href={`${siteRoot}service/#practice`}>어떤 대화를 연습하나요<Arrow /></a>
        </div>
        <DoorTransition />
      </div>
    </section>
  );
}
