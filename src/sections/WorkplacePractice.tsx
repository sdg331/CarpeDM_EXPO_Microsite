import { useState } from 'react';
import { Arrow } from '../components/Arrow';
import { workplaceMoments } from '../data/experience';
import { siteRoot } from '../data/paths';

export function WorkplacePractice() {
  const [selected, setSelected] = useState(0);
  const moment = workplaceMoments[selected]!;

  return <section id="practice" className="story-section practice-section" tabIndex={-1} aria-labelledby="practice-title"><div className="container">
    <div className="section-editorial"><div><p className="section-kicker"><span className="chapter-number" aria-hidden="true">02</span>직장 대화 연습</p><h2 id="practice-title" className="section-title">이런 순간,<br /><span>어떻게 답할까요?</span></h2></div><p className="body-copy">보고와 질문, 실수 설명과 의견 조율. 상황을 선택하고 어떤 대화를 연습할 수 있는지 살펴보세요.</p></div>
    <div className="practice-layout">
      <div className="practice-options" role="group" aria-label="직장 상황 선택">{workplaceMoments.map((item, index) => <button key={item.title} type="button" aria-pressed={selected === index} aria-controls="practice-example" onClick={() => setSelected(index)}><span>0{index + 1}</span><strong>{item.title}</strong><Arrow /></button>)}</div>
      <div id="practice-example" className="practice-example" aria-live="polite" aria-atomic="true">
        <div className="practice-example__top"><p className="practice-example__label">설명용 대화 · {moment.title}</p><span aria-hidden="true">0{selected + 1} / 04</span></div><h3>{moment.description}</h3>
        <div className="practice-dialogue"><p><span>상대의 질문</span>{moment.question}</p><p><span>답변 예시</span>{moment.answer}</p></div>
        <div className="practice-reflection"><span>연습 포인트</span><p>{moment.focus}</p></div>
      </div>
    </div>
    <div className="section-end"><p className="scope-note">직접 작성한 설명용 대화입니다. 실제 AI 응답·분석 결과가 아니며, 개별 역할극 구현은 확인 중입니다.</p><a className="text-link" href={`${siteRoot}service/#experience`}>전체 체험 순서<Arrow /></a></div>
  </div></section>;
}
