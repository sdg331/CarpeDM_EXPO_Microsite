import { Reveal } from '../../components/Reveal/Reveal';
import { copy } from '../../data/content';
import { experienceSteps } from '../../data/experience';
import './ExperienceFlow.css';

const stepRoles = ['체험의 입구', '역할극의 무대', '분석 설계', '네 가지 관점', '돌아보기', '다시 연습'] as const;

export function ExperienceFlow({ detailed = false }: { detailed?: boolean }) {
  return (
    <section id="experience" className="experience" tabIndex={-1} aria-labelledby="experience-title">
      <div className="container">
        <div className="experience__intro">
          <Reveal className="experience__heading">
            <p className="section-kicker"><span className="chapter-number" aria-hidden="true">06</span>설계한 체험 흐름</p>
            <h2 id="experience-title" className="section-title">등록에서 역할극,<br /><span>피드백과 재도전까지.</span></h2>
            <p className="body-copy">키오스크에서 시작해 스마트 미러 앞의 역할극, 결과 확인으로 이어지는 6단계 설계입니다.</p>
          </Reveal>
          <div className="experience__loop"><span>다시 연습하는 이유</span><p>한 번에 모두 고치기보다,<br />다음에 바꿀 한 가지만.</p></div>
        </div>
        <ol className="experience__steps" aria-label="설계한 6단계 체험 순서">{experienceSteps.map((step, index) => <li key={step.number}><span className="experience__number" aria-hidden="true">{step.number}</span><div><span className="experience__role">{stepRoles[index]}</span><h3>{step.title}</h3><p>{step.description}</p></div></li>)}</ol>
        {detailed && <div className="experience__guide"><h3>처음이라면, 이 점부터 생각해 보세요.</h3><p>질문에 자신의 말로 답하고, 어디서 말이 막혔는지 돌아봅니다. 내용과 전달 방식 중 다음에 바꿀 한 가지를 골라 같은 상황을 다시 말해 보는 것이 연습의 중심입니다.</p></div>}
        <p className="scope-note experience__scope">{copy.experience.scope}</p>
      </div>
    </section>
  );
}
