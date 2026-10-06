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
          <p className="body-copy">어떤 입력을 받고, 어떤 경험으로 이어갈지.<br />기술별 구성과 설계 역할, 확인할 범위를 함께 소개합니다.</p>
        </Reveal>
        <div className="technology-list">
          {technologies.map(technology => (
            <details className="technology-item" key={technology.name}>
              <summary><span><strong lang="en">{technology.name}</strong><span>{technology.role}</span></span><span className="disclosure-plus" aria-hidden="true" /></summary>
              <dl className="technology-item__details">
                <div><dt>입력 · 구성</dt><dd>{technology.input}</dd></div>
                <div><dt>설계 역할</dt><dd>{technology.description}</dd></div>
                <div><dt>확인 범위</dt><dd>{technology.boundary}</dd></div>
              </dl>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
