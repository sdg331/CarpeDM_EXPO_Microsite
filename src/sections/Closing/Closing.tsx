import { Arrow } from '../../components/Arrow';
import { Reveal } from '../../components/Reveal/Reveal';
import './Closing.css';

export function Closing() {
  return (
    <section id="closing" className="closing-section" aria-labelledby="closing-heading">
      <Reveal className="container closing-content">
        <p className="section-kicker">동양미래대학교 EXPO</p>
        <h2 id="closing-heading">거울 앞, 그다음.<span lang="en">CarpeDM.</span></h2>
        <a className="text-link" href="#top">처음부터 다시 보기<Arrow direction="up" /></a>
      </Reveal>
    </section>
  );
}
