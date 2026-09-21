import { Arrow } from '../../components/Arrow';
import { BrandMark } from '../../components/BrandMark';
import { Reveal } from '../../components/Reveal/Reveal';
import { SectionHeading } from '../../components/SectionHeading/SectionHeading';
import './Closing.css';

export function Closing() {
  return (
    <section id="closing" className="section closing-section" aria-labelledby="closing-heading">
      <div className="container">
        <Reveal className="closing-content">
          <BrandMark className="closing-mark" />
          <SectionHeading id="closing-heading" label="CARPEDM" korean>
            거울 너머,<br />
            <span>새로운 상호작용으로.</span>
          </SectionHeading>
          <p className="body-copy closing-description">거울 너머의 상호작용을 탐구합니다.</p>
          <p className="closing-attribution">동양미래대학교 EXPO</p>
          <a className="text-link closing-top-link" href="#top">
            처음으로 <Arrow direction="up" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
