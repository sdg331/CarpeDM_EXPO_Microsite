import { Reveal } from '../../components/Reveal/Reveal';
import { ProductFrame } from '../../components/ProductFrame/ProductFrame';
import { Arrow } from '../../components/Arrow';
import { media } from '../../data/media';
import { siteRoot } from '../../data/paths';
import './Introduction.css';

export function Introduction() {
  return (
    <section id="project" className="introduction" tabIndex={-1} aria-labelledby="project-title">
      <Reveal className="container introduction__content">
        <div className="introduction__copy">
          <p className="section-kicker"><span className="chapter-number" aria-hidden="true">03</span>왜 스마트 미러인가</p>
          <h2 id="project-title" className="section-title">대화하는 나를,<br /><span>함께 마주하는 연습.</span></h2>
          <p className="body-copy">거울은 대답하는 나의 모습까지 함께 마주하는 공간입니다. 화면 속 상황과 자신의 모습을 한 자리에서 보고, 말과 태도를 함께 돌아보는 연습을 지향합니다.</p>
          <dl className="introduction__points">
            <div><dt>상황을 마주하고</dt><dd>직장 대화를 역할극으로 경험하는 방향</dd></div>
            <div><dt>나를 돌아보고</dt><dd>응답과 목소리, 표정과 자세를 함께 살피는 관점</dd></div>
          </dl>
          <a className="text-link" href={`${siteRoot}four-fit/`}>네 가지 피드백 관점<Arrow /></a>
        </div>
        <div className="introduction__visual"><ProductFrame kind="mirror" media={media.reflection} /></div>
      </Reveal>
    </section>
  );
}
