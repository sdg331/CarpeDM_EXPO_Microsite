import { t } from '../i18n';
import { useState } from 'react';
import { workplaceMoments } from '../data/experience';

export function WorkplacePractice() {
  const [selected, setSelected] = useState(0);
  const moment = workplaceMoments[selected]!;

  return <section id="practice" className="story-section practice-section" tabIndex={-1} aria-labelledby="practice-title"><div className="container">
    <div className="practice-section__heading"><h2 id="practice-title">{t('어떤 대화를 연습할까요?')}</h2></div>
    <div className="practice-layout">
      <div className="practice-options"><label htmlFor="practice-context">{t('연습할 상황')}</label><select id="practice-context" value={selected} onChange={event => setSelected(Number(event.target.value))}>{workplaceMoments.map((item, index) => <option key={item.title} value={index}>{item.title}</option>)}</select></div>
      <div id="practice-example" className="practice-example" aria-live="polite" aria-atomic="true">
        <div className="practice-example__top"><p className="practice-example__label">{t('설명용 대화 · ')}{moment.title}</p><span aria-hidden="true">0{selected + 1} / 04</span></div><h3>{moment.description}</h3>
        <div className="practice-dialogue"><p><span>{t('상대의 질문')}</span>{moment.question}</p><p><span>{t('답변 예시')}</span>{moment.answer}</p></div>
        <div className="practice-reflection"><span>{t('연습 포인트')}</span><p>{moment.focus}</p></div>
      </div>
    </div>
    <details className="compact-disclosure practice-explanation"><summary>{t('이 답변은 어떻게 구성했나요?')}<span className="disclosure-plus" aria-hidden="true" /></summary><ol className="practice-structure">{moment.structure.map((part, index) => <li key={part}><span aria-hidden="true">0{index + 1}</span><p>{part}</p></li>)}</ol><p>{t('예시 문장을 그대로 외우기보다, 이 순서에 자신의 상황을 넣어 말해 보세요.')}</p></details>
    <div className="section-end"><p className="scope-note">{t('직접 작성한 설명용 대화입니다. 실제 AI 응답·분석 결과가 아니며 개별 역할극 구현은 확인 중입니다.')}</p></div>
  </div></section>;
}
