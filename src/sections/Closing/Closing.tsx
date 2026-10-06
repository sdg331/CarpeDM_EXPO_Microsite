import { Arrow } from '../../components/Arrow';
import { Reveal } from '../../components/Reveal/Reveal';
import { siteRoot } from '../../data/paths';
import './Closing.css';

export function Closing() {
  return <section id="team" className="closing-section" tabIndex={-1} aria-labelledby="closing-heading"><Reveal className="container closing-content">
    <div className="closing-identity"><p>4-Fit MirrorTing<span>by CarpeDM</span></p><span className="closing-identity__caption">동양미래대학교 EXPO 프로젝트</span></div>
    <div><p className="section-kicker"><span className="chapter-number" aria-hidden="true">08</span>우리가 만드는 경험</p><h2 id="closing-heading">처음 겪는 순간에,<br /><span>연습할 기회를 더합니다.</span></h2><p className="closing-content__body">CarpeDM은 직장생활의 대화를 미리 경험하는 4-Fit MirrorTing을 소개합니다. 키오스크와 스마트 미러, 네 가지 피드백 관점을 하나의 체험으로 연결하는 프로젝트입니다.</p><div className="closing-links"><a className="closing-primary" href={`${siteRoot}service/`}>체험 설계 살펴보기<Arrow /></a><a className="text-link" href={`${siteRoot}system/`}>시스템 살펴보기<Arrow /></a></div></div>
  </Reveal></section>;
}
