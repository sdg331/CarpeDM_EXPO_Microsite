import { Arrow } from '../components/Arrow';
import { workplaceMoments } from '../data/experience';
import { siteRoot } from '../data/paths';
import './UseCases.css';

const uses = [
  { label: '핵심', title: '직장 대화 연습', description: '첫 출근, 보고, 질문과 피드백처럼 일상적인 직장 대화를 미리 경험하는 방향입니다.' },
  { label: '확장 구상', title: '면접 시뮬레이션', description: '질문과 답변을 연습하는 방식으로 확장할 수 있습니다.' },
  { label: '확장 구상', title: '직무 교육', description: '직무별 대화 상황을 연습하는 방향을 검토합니다.' },
] as const;

const audiences = [
  { title: '직장생활을 준비하는 사람', description: '첫 보고나 질문처럼 아직 낯선 대화를 구체적인 상황으로 마주해 봅니다.' },
  { title: '새로운 역할을 맡은 구성원', description: '판단의 근거를 설명하고, 실수나 의견 차이를 전달하는 말을 연습해 봅니다.' },
  { title: '교육과 체험을 설계하는 사람', description: '대화 상황과 돌아볼 관점을 함께 제시하는 교육 경험으로 검토할 수 있습니다.' },
] as const;

export function UseCases({ detailed = false }: { detailed?: boolean }) {
  if (detailed) return (
    <section id="use-cases" className="use-detail" tabIndex={-1} aria-labelledby="uses-title">
      <div className="container use-detail__intro">
        <div>
          <p className="section-kicker">핵심 활용 · 직장 대화 연습</p>
          <h2 id="uses-title" className="section-title">막연한 연습보다,<br /><span>마주할 상황을 구체적으로.</span></h2>
        </div>
        <p className="body-copy">좋은 말을 외우는 데서 멈추지 않고, 질문을 듣고 내 생각을 전달하는 장면을 연습하는 방향입니다. 대화의 내용과 전달하는 태도를 함께 돌아보는 경험을 설계합니다.</p>
      </div>

      <div id="use-scenarios" className="container use-scenarios" tabIndex={-1} aria-labelledby="use-scenarios-title">
        <div className="use-detail__section-head"><h3 id="use-scenarios-title">이런 대화를 연습합니다.</h3><p>직접 작성한 설명용 대화 · 실제 AI 응답·분석 결과가 아닙니다.</p></div>
        <div className="use-scenarios__grid">
          {workplaceMoments.map((moment, index) => (
            <article key={moment.title} className="use-scenario">
              <div className="use-scenario__meta"><span aria-hidden="true">0{index + 1}</span><h4>{moment.title}</h4></div>
              <p className="use-scenario__context">{moment.description}</p>
              <blockquote>{moment.question}</blockquote>
              <div className="use-scenario__focus"><span>돌아볼 포인트</span><p>{moment.focus}</p></div>
              <details>
                <summary>답변 예시 보기<span className="disclosure-plus" aria-hidden="true" /></summary>
                <p className="use-scenario__answer">{moment.answer}</p>
              </details>
            </article>
          ))}
        </div>
        <div className="section-end"><p className="scope-note">상황과 답변은 체험을 설명하는 예시입니다. 개별 역할극의 실제 구현과 분석 연동은 확인 중입니다.</p><a className="text-link" href={`${siteRoot}service/#practice`}>서비스에서 대화 예시 선택하기<Arrow /></a></div>
      </div>

      <div className="use-audiences">
        <div className="container use-audiences__layout">
          <div><p className="section-kicker">누구의 연습이 될까요</p><h3>각자의 상황에서,<br />필요한 대화부터.</h3><a className="text-link" href={`${siteRoot}four-fit/`}>대화를 돌아보는 네 관점<Arrow /></a></div>
          <dl>{audiences.map(audience => <div key={audience.title}><dt>{audience.title}</dt><dd>{audience.description}</dd></div>)}</dl>
        </div>
      </div>

      <div id="use-expansion" className="container use-expansion" tabIndex={-1} aria-labelledby="use-expansion-title">
        <div className="use-detail__section-head"><h3 id="use-expansion-title">다음으로 넓혀볼 방향.</h3><p>현재 제공되는 서비스가 아닌 확장 구상입니다.</p></div>
        <div className="use-expansion__grid">
          {uses.slice(1).map(use => <article key={use.title}><span>{use.label}</span><h4>{use.title}</h4><p>{use.description}</p></article>)}
        </div>
        <p className="scope-note">지금의 출발점은 직장 대화입니다. 면접과 직무별 교육은 상황 콘텐츠, 운영 방식과 검증 범위를 정한 뒤 확장을 검토합니다.</p>
      </div>
    </section>
  );

  return (
    <section id="use-cases" className="story-section story-section--uses" tabIndex={-1} aria-labelledby="uses-title">
      <div className="container">
        <p className="section-kicker"><span className="chapter-number" aria-hidden="true">07</span>활용의 방향</p>
        <h2 id="uses-title" className="section-title">지금은 직장 대화에,<br /><span>다음은 더 다양한 상황에.</span></h2>
        <div className="use-list">
          {uses.map(use => (
            <article key={use.title} className="use-list__item">
              <span>{use.label}</span>
              <h3>{use.title}</h3>
              <p>{use.description}</p>
            </article>
          ))}
        </div>
        <a className="text-link" href={`${siteRoot}service/#practice`}>직장 대화 예시 살펴보기<Arrow /></a>
      </div>
    </section>
  );
}
