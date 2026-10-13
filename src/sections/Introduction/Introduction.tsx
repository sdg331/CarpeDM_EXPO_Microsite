import { Reveal } from '../../components/Reveal/Reveal';
import { ProductFrame } from '../../components/ProductFrame/ProductFrame';
import { media } from '../../data/media';
import './Introduction.css';

export function Introduction() {
  return (
    <section id="project" className="introduction" tabIndex={-1} aria-labelledby="project-title">
      <Reveal className="container introduction__content">
        <div className="introduction__copy">
          <p className="section-kicker"><span className="chapter-number" aria-hidden="true">03</span>왜 스마트 미러인가</p>
          <h2 id="project-title" className="section-title">말할 때의 내 모습을<br /><span>보며 연습합니다.</span></h2>
          <p className="body-copy">답변 내용만으로는 말할 때의 내 모습을 알기 어렵습니다. 미러 앞에서는 대화 상황과 자신의 모습을 같이 볼 수 있습니다. 그래서 말의 내용뿐 아니라 시선과 자세도 연습의 기준으로 삼았습니다.</p>
          <dl className="introduction__points">
            <div><dt>상황을 마주하고</dt><dd>보고와 질문에 말로 답하는 역할극</dd></div>
            <div><dt>나를 돌아보고</dt><dd>답변 내용과 목소리, 표정과 자세를 돌아보기</dd></div>
          </dl>

        </div>
        <div className="introduction__visual"><ProductFrame kind="mirror" media={media.reflection} /></div>
      </Reveal>
    </section>
  );
}
