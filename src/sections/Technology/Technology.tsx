import { Reveal } from '../../components/Reveal/Reveal';
import { SectionHeading } from '../../components/SectionHeading/SectionHeading';
import { technologies } from '../../data/technologies';
import './Technology.css';

export function Technology() {
  return (
    <section id="technology" className="section section--light technology-section" tabIndex={-1} aria-labelledby="technology-heading">
      <div className="container">
        <Reveal>
          <SectionHeading
            id="technology-heading"
            label="TECHNOLOGY"
            korean
            description="각 기술은 그 자체를 보여주기 위한 것이 아니라 사용자가 자연스럽게 시스템과 상호작용하도록 만드는 역할을 합니다."
          >
            상호작용을 완성하는<br />핵심 기술.
          </SectionHeading>
        </Reveal>
        <ul className="technology-list">
          {technologies.map((technology, index) => (
            <li key={technology.name}>
              <Reveal className="technology-row">
                <span className="eyebrow technology-row__number" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="technology-row__identity">
                  <h3 lang="en">{technology.name}</h3>
                  <p>{technology.role}</p>
                </div>
                <p className="technology-row__description">{technology.description}</p>
              </Reveal>
            </li>
          ))}
        </ul>
        <p className="scope-note technology-scope-note">
          프로젝트에서 다루는 기술과 설계 역할을 소개합니다.
        </p>
      </div>
    </section>
  );
}
