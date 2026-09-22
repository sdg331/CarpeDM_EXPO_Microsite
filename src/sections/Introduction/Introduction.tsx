import { Reveal } from '../../components/Reveal/Reveal';
import './Introduction.css';

export function Introduction() {
  return (
    <section id="project" className="introduction" tabIndex={-1} aria-labelledby="project-title">
      <Reveal className="container introduction__content">
        <p className="section-kicker">익숙한 일상에서 출발한 아이디어</p>
        <h2 id="project-title">나를 비추는 거울에서,<br /><span>나와 소통하는 거울로.</span></h2>
        <p className="body-copy">거울에 화면을, 공간에 센서를, 경험에 목소리를 더합니다.<br className="desktop-break" /> 4-Fit MirrorTing은 두 개의 디바이스로 사람과 기술이 만나는 방식을 탐구합니다.</p>
      </Reveal>
    </section>
  );
}
