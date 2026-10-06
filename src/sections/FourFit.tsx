import { useRef, useState, type KeyboardEvent } from 'react';
import { Arrow } from '../components/Arrow';
import { workplaceMoments } from '../data/experience';
import { siteRoot } from '../data/paths';
import './FourFit.css';

const fitDimensions = [
  { english: 'Response', korean: '응답', description: '상황에 맞는 답변과 내용', question: '상대가 궁금해하는 내용을 먼저 전달했나요?', detail: '질문의 의도를 이해하고, 현재 상황과 필요한 내용을 구분해 답하는 관점입니다.', example: '업무 보고라면 진행 상황, 막힌 부분, 다음 조치가 답변에 담겼는지 돌아봅니다.', drawing: 'M56 42h112a14 14 0 0 1 14 14v66a14 14 0 0 1-14 14h-64l-28 22v-22H56a14 14 0 0 1-14-14V56a14 14 0 0 1 14-14ZM72 72h80M72 94h56M100 174h60l24 18v-18h10a14 14 0 0 0 14-14v-60' },
  { english: 'Voice', korean: '목소리', description: '말의 속도·크기·명료도', question: '상대가 듣고 이해하기 편한 말하기였나요?', detail: '무슨 말을 했는지와 함께, 얼마나 분명하게 전달했는지 돌아보는 관점입니다.', example: '너무 빠르게 말하지 않았는지, 문장 끝까지 또렷하게 전달했는지 생각해 봅니다.', drawing: 'M36 104v16M56 88v48M76 64v96M96 82v60M116 40v144M136 72v80M156 58v108M176 82v60M196 96v32M216 104v16' },
  { english: 'Expression', korean: '표정', description: '시선·표정', question: '듣는 태도와 말하는 표정은 어땠나요?', detail: '답변하는 동안의 시선과 표정을 함께 돌아보는 관점입니다.', example: '질문을 듣는 동안 상대를 바라보았는지, 대화에 맞는 표정을 유지했는지 생각해 봅니다.', drawing: 'M126 34c-38 0-60 24-60 64v22c0 42 26 72 60 72s60-30 60-72V98c0-40-22-64-60-64ZM89 98c6-6 16-6 22 0M141 98c6-6 16-6 22 0M99 106v6M153 106v6M125 106v26h10M103 152c14 12 32 12 46 0' },
  { english: 'Posture', korean: '자세', description: '자세', question: '대화에 집중하는 자세였나요?', detail: '대화 중 몸의 자세를 돌아보는 관점입니다.', example: '몸을 과하게 움츠리거나 기울이지 않았는지, 편안하고 안정적인 자세였는지 생각해 봅니다.', drawing: 'M126 34a23 23 0 1 0 0 46 23 23 0 0 0 0-46ZM63 174v-40c0-22 18-38 40-38h46c22 0 40 16 40 38v40M89 136v56M163 136v56M126 100v92M56 204h140' },
] as const;

const reflectionPoints = {
  Response: { points: [['진행 상황', '무엇을 마쳤고, 무엇을 진행 중인지 구분합니다.'], ['확인할 내용', '모르는 부분은 숨기지 않고 확인할 대상으로 남깁니다.'], ['다음 행동', '다음에 할 일과 다시 전달할 내용을 덧붙입니다.']], retry: '진행 상황 → 확인할 내용 → 다음 행동의 순서로, 답변을 다시 구성해 보세요.' },
  Voice: { points: [['말의 속도', '상대가 따라올 수 있도록 문장 사이에 여유를 둡니다.'], ['목소리의 크기', '대화하는 거리와 공간에 맞는 편안한 크기를 생각합니다.'], ['명료한 전달', '핵심 단어와 문장 끝이 분명하게 들리는지 돌아봅니다.']], retry: '내용을 바꾸기 전에, 한 문장씩 여유 있게 말하며 중요한 부분을 분명하게 전달해 보세요.' },
  Expression: { points: [['듣는 순간', '질문을 끝까지 듣고 답변을 준비할 여유를 가집니다.'], ['시선의 방향', '자신에게 편안한 방식으로 상대에게 주의를 기울입니다.'], ['표정의 맥락', '내용과 표정이 어울렸는지 자신의 모습을 돌아봅니다.']], retry: '억지로 표정을 만들기보다, 질문을 듣는 순간과 답변하는 순간의 자신의 모습을 살펴보세요.' },
  Posture: { points: [['편안한 중심', '자신의 몸에 편안하고 안정적인 자세를 찾습니다.'], ['몸의 방향', '대화에 주의를 기울이는 자세인지 돌아봅니다.'], ['불필요한 긴장', '어깨나 몸에 힘이 들어갔다면 편하게 풀어 봅니다.']], retry: '하나의 정답 자세를 따라 하기보다, 대화를 이어가기 편한 자신만의 자세를 찾아보세요.' },
} as const;

export function FourFit({ detailed = false }: { detailed?: boolean }) {
  const [selected, setSelected] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const next = event.key === 'ArrowRight' ? (index + 1) % fitDimensions.length
      : event.key === 'ArrowLeft' ? (index + fitDimensions.length - 1) % fitDimensions.length
      : event.key === 'Home' ? 0 : event.key === 'End' ? fitDimensions.length - 1 : undefined;
    if (next === undefined) return;
    event.preventDefault();
    setSelected(next);
    tabs.current[next]?.focus();
  }

  return (
    <section id="four-fit" className={`story-section story-section--fit${detailed ? ' four-fit--detailed' : ''}`} tabIndex={-1} aria-labelledby="fit-title">
      <div className="container">
        <div className="section-editorial">
          <div><p className="section-kicker"><span className="chapter-number" aria-hidden="true">04</span>4-Fit · 네 가지 관점</p><h2 id="fit-title" className="section-title">말의 내용부터,<br /><span>전달하는 태도까지.</span></h2></div>
          <p className="body-copy">응답·목소리·표정·자세를 함께 돌아보는 피드백 설계입니다. 항목을 선택해 각 관점을 살펴보세요.</p>
        </div>
        <div className="fit-tabs" role="tablist" aria-label="4-Fit 관점 선택">
          {fitDimensions.map((item, index) => <button key={item.english} ref={element => { tabs.current[index] = element; }} id={`fit-tab-${index}`} type="button" role="tab" aria-selected={selected === index} aria-controls={`fit-panel-${index}`} tabIndex={selected === index ? 0 : -1} onClick={() => setSelected(index)} onKeyDown={event => onKeyDown(event, index)}><span lang="en"><small aria-hidden="true">0{index + 1}</small>{item.english}</span><strong>{item.korean}</strong></button>)}
        </div>
        {fitDimensions.map((item, index) => <div key={item.english} id={`fit-panel-${index}`} role="tabpanel" aria-labelledby={`fit-tab-${index}`} hidden={selected !== index} tabIndex={0} className="fit-panel">
          <div className="fit-panel__identity">
            <div className="fit-panel__meta" aria-hidden="true"><span>0{index + 1} / 04</span><span>4-Fit</span></div>
            <svg className="fit-illustration" viewBox="0 0 252 224" fill="none" aria-hidden="true" focusable="false"><path d={item.drawing} stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            <div className="fit-panel__name"><span lang="en">{item.english}</span><strong>{item.korean}</strong><small>{item.description}</small></div>
          </div>
          <div className="fit-panel__copy"><p className="section-kicker">돌아볼 질문</p><h3>{item.question}</h3><p>{item.detail}</p><div className="fit-panel__example"><span>연습할 때 생각해 볼 점</span><p>{item.example}</p></div></div>
          {detailed && <div className="fit-observation">
            <div className="fit-observation__heading"><p className="section-kicker">업무 보고에서 살펴본다면</p><p>같은 대화도 관점에 따라<br />돌아볼 지점이 달라집니다.</p></div>
            <dl>{reflectionPoints[item.english].points.map(([title, description]) => <div key={title}><dt>{title}</dt><dd>{description}</dd></div>)}</dl>
            <p className="fit-observation__retry"><span>다음 연습에서는</span>{reflectionPoints[item.english].retry}</p>
          </div>}
        </div>)}
        <div className="section-end"><p className="scope-note">설명용 관점과 예시입니다. 실제 분석 방식·평가 기준·구현 범위는 확인 중입니다.</p><a className="text-link" href={`${siteRoot}system/`}>분석을 위한 시스템 설계<Arrow /></a></div>
      </div>
      {detailed && <div id="fit-practice" className="fit-retry" tabIndex={-1} aria-labelledby="fit-practice-title">
        <div className="container">
          <div className="fit-retry__heading"><div><p className="section-kicker">피드백에서 다음 연습으로</p><h2 id="fit-practice-title" className="section-title">답을 외우기보다,<br /><span>대화를 더 분명하게.</span></h2></div><p className="body-copy">무엇을 말할지 정리하고, 어떻게 전달할지 돌아봅니다. 바꾸고 싶은 한 가지를 골라 같은 장면을 다시 연습하는 방향입니다.</p></div>
          <div className="fit-retry__scene"><span>설명용 대화 · {workplaceMoments[0].title}</span><p>“{workplaceMoments[0].question}”</p></div>
          <div className="fit-retry__comparison">
            <article><p className="fit-retry__label"><span aria-hidden="true">01</span>짧게 말한 답변 예시</p><blockquote>“아직 하고 있습니다.<br />조금 더 걸릴 것 같습니다.”</blockquote><p>진행 중이라는 사실은 전했지만, 어떤 일을 마쳤고 무엇이 남았는지는 설명하지 않은 예시입니다.</p></article>
            <article><p className="fit-retry__label"><span aria-hidden="true">02</span>내용을 더한 답변 예시</p><blockquote>“{workplaceMoments[0].answer}”</blockquote><p>{workplaceMoments[0].focus}</p></article>
          </div>
          <p className="scope-note fit-retry__scope">이해를 돕기 위해 작성한 대화 예시입니다. 실제 사용자 답변·AI 분석 결과·개선 효과를 나타내지 않습니다.</p>
          <ol id="fit-retry" className="fit-retry__steps" tabIndex={-1} aria-label="다음 연습으로 이어지는 세 단계">
            <li><span aria-hidden="true">01</span><div><h3>내용을 정리하고</h3><p>현재 상황과 다음 행동을 짧은 문장으로 나누어 봅니다.</p></div></li>
            <li><span aria-hidden="true">02</span><div><h3>전달을 돌아보고</h3><p>목소리·표정·자세 중 다음에 바꾸고 싶은 한 가지를 고릅니다.</p></div></li>
            <li><span aria-hidden="true">03</span><div><h3>같은 상황에 재도전</h3><p>정리한 내용과 연습할 지점을 가지고 다시 말해 봅니다.</p></div></li>
          </ol>
          <a className="text-link" href={`${siteRoot}service/#practice`}>다른 직장 대화 살펴보기<Arrow /></a>
        </div>
      </div>}
    </section>
  );
}
