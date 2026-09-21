import { Reveal } from '../../components/Reveal/Reveal';
import { copy } from '../../data/content';
import './Introduction.css';

export function Introduction() {
  return (
    <section id="project" className="section section--light introduction" tabIndex={-1} aria-labelledby="project-title">
      <Reveal className="container introduction__grid">
        <p className="eyebrow">THE PROJECT</p>
        <div>
          <h2 id="project-title" className="section-title section-title--ko">사람과 시스템이<br />마주하는 새로운 방식.</h2>
          <div className="introduction__copy">
            {copy.introduction.paragraphs.map((paragraph) => <p key={paragraph} className="body-copy">{paragraph}</p>)}
          </div>
          <p className="introduction__statement">{copy.introduction.statement}</p>
        </div>
      </Reveal>
    </section>
  );
}
