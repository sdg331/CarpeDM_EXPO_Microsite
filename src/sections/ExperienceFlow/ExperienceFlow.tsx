import { Reveal } from '../../components/Reveal/Reveal';
import { Arrow } from '../../components/Arrow';
import { copy } from '../../data/content';
import { experienceSteps } from '../../data/experience';
import { siteRoot } from '../../data/paths';
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
          <div className="experience__loop"><span>Practice loop</span><p>피드백을 다음 연습의<br />시작점으로.</p><a className="text-link" href={`${siteRoot}four-fit/`}>4-Fit 관점 살펴보기<Arrow /></a></div>
        </div>
        <ol className="experience__steps" aria-label="설계한 6단계 체험 순서">{experienceSteps.map((step, index) => <li key={step.number}><span className="experience__number" aria-hidden="true">{step.number}</span><div><span className="experience__role">{stepRoles[index]}</span><h3>{step.title}</h3><p>{step.description}</p></div></li>)}</ol>
        {detailed && <div className="experience__guide"><h3>체험 전에 알아두세요.</h3><p>이 페이지는 방문자가 어떤 순서로 참여할지 설명하는 설계안입니다. 실제 등록 항목, NFC 연결, 분석 결과와 결과 화면은 검증 자료가 확보되면 구체적으로 안내합니다.</p></div>}
        <p className="scope-note experience__scope">{copy.experience.scope}</p>
      </div>
    </section>
  );
}
