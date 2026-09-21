import { Reveal } from '../../components/Reveal/Reveal';
import { SectionHeading } from '../../components/SectionHeading/SectionHeading';
import { StatusNote } from '../../components/StatusNote';
import { copy } from '../../data/content';
import { experienceSteps } from '../../data/experience';
import './ExperienceFlow.css';

export function ExperienceFlow() {
  return (
    <section id="experience" className="section section--light experience" tabIndex={-1} aria-labelledby="experience-title">
      <div className="container">
        <Reveal>
          <SectionHeading id="experience-title" label="THE EXPERIENCE" korean description={copy.experience.introduction}>
            두 개의 디바이스,<br />하나로 이어지는 경험.
          </SectionHeading>
        </Reveal>
        <Reveal>
          <StatusNote>{copy.experience.scope}</StatusNote>
          <ol className="experience__steps">
            {experienceSteps.map((step) => (
              <li key={step.number} className="experience__step">
                <span className="experience__number" aria-hidden="true">{step.number}</span>
                <div className="experience__step-copy"><h3>{step.title}</h3><p>{step.description}</p></div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
