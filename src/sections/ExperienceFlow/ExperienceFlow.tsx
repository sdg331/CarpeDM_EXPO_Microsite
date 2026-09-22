import { GlassIcon } from '../../components/GlassIcon/GlassIcon';
import { Reveal } from '../../components/Reveal/Reveal';
import { copy } from '../../data/content';
import { experienceScenes, experienceSteps } from '../../data/experience';
import './ExperienceFlow.css';

export function ExperienceFlow() {
  return (
    <section id="experience" className="experience" tabIndex={-1} aria-labelledby="experience-title">
      <div className="container">
        <Reveal className="experience__heading">
          <p className="section-kicker">설계한 체험 흐름</p>
          <h2 id="experience-title" className="section-title">시작은 간단하게.<br /><span>경험은 자연스럽게.</span></h2>
          <p className="body-copy">키오스크에서 시작해, 스마트 미러 앞에 서기까지.</p>
        </Reveal>
        <ol className="experience__scenes">
          {experienceScenes.map((scene, index) => (
            <li key={scene.title}>
              <Reveal>
                <GlassIcon kind={scene.icon} />
                <p className="experience__number">0{index + 1}</p>
                <h3>{scene.title}</h3>
                <p className="body-copy">{scene.description}</p>
              </Reveal>
            </li>
          ))}
        </ol>
        <p className="scope-note experience__scope">{copy.experience.scope}</p>
        <details className="experience__details">
          <summary>6단계 체험 설계 자세히 보기<span className="disclosure-plus" aria-hidden="true" /></summary>
          <ol className="experience__steps">{experienceSteps.map(step => <li key={step.number}><span>{step.number}</span><div><h3>{step.title}</h3><p>{step.description}</p></div></li>)}</ol>
        </details>
      </div>
    </section>
  );
}
