import { Reveal } from '../../components/Reveal/Reveal';
import { technologies } from '../../data/technologies';
import './Technology.css';

export function Technology() {
  return (
    <section id="technology" className="technology-section" tabIndex={-1} aria-labelledby="technology-heading">
      <div className="container technology-section__grid">
        <Reveal className="technology-section__intro">
          <p className="section-kicker">경험을 뒷받침하는 기술</p>
          <h2 id="technology-heading" className="section-title">보이지 않는 곳까지,<br /><span>하나의 경험을 위해.</span></h2>
          <p className="body-copy">입력에서 응답까지.<br />프로젝트에서 다루는 기술과 설계 역할을 소개합니다.</p>
        </Reveal>
        <div className="technology-list">
          {technologies.map(technology => (
            <details className="technology-item" key={technology.name}>
              <summary><span><strong lang="en">{technology.name}</strong><span>{technology.role}</span></span><span className="disclosure-plus" aria-hidden="true" /></summary>
              <p>{technology.description}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
