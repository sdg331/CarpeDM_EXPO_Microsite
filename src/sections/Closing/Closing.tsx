import { Reveal } from '../../components/Reveal/Reveal';
import './Closing.css';
import { SceneFigure } from '../../components/SceneFigure/SceneFigure';

export function Closing({ compact = false }: { compact?: boolean }) {
  return <section id="team" className="closing-section" tabIndex={-1} aria-labelledby="closing-heading">{!compact && <SceneFigure scene="team" className="container closing-scene" />}<Reveal className="container closing-content">
    <div className="closing-identity"><p>4-Fit MirrorTing<span>by CarpeDM</span></p><span className="closing-identity__caption">동양미래대학교 EXPO 프로젝트</span></div>
    <div><p className="section-kicker"><span className="chapter-number" aria-hidden="true">{compact ? '05' : '08'}</span>우리가 만드는 경험</p><h2 id="closing-heading">처음 겪는 직장 대화도<br /><span>미리 연습할 수 있도록.</span></h2>{!compact && <p className="closing-content__body">CarpeDM은 직장생활의 대화를 미리 연습하는 4-Fit MirrorTing을 만들고 있습니다. 키오스크에서 시작해 스마트 미러로 대화하고 네 가지 피드백 관점으로 돌아보는 체험을 구상했습니다.</p>}</div>
  </Reveal></section>;
}
