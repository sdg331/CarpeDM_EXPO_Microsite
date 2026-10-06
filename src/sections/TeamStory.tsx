import { Arrow } from '../components/Arrow';
import { ProductFrame } from '../components/ProductFrame/ProductFrame';
import { media } from '../data/media';
import { siteRoot } from '../data/paths';
import './TeamStory.css';

const approach = [
  { title: '상황에서 시작합니다.', description: '기술을 나열하기보다 업무 보고, 질문, 실수 설명과 의견 조율처럼 실제로 마주할 대화 장면을 먼저 정합니다.', link: 'service/#practice', label: '설계한 대화 살펴보기' },
  { title: '내용과 태도를 함께 봅니다.', description: 'Response, Voice, Expression, Posture. 무엇을 말하는지와 어떻게 전달하는지를 네 가지 관점으로 돌아보는 경험을 구상합니다.', link: 'four-fit/', label: '4-Fit의 네 관점' },
  { title: '장치마다 역할을 부여합니다.', description: '키오스크는 체험의 입구, 스마트 미러는 대화의 무대입니다. 서로 다른 두 장치의 역할을 하나의 흐름으로 연결하도록 설계합니다.', link: 'system/#system', label: '시스템의 연결 방향' },
] as const;

const evidence = [
  { label: 'DEMO UI', title: '실행 화면으로 설명합니다.', description: '로컬에서 확인한 직장대화 소개 화면을 공개합니다. 화면의 답변과 코칭은 직접 작성한 설명용 예시입니다.', link: 'system/#evidence', action: '공개한 화면 보기' },
  { label: 'CONCEPT', title: '설계와 실물을 구분합니다.', description: '제공된 설계 도안을 바탕으로 만든 3D 이미지는 구조를 설명하는 콘셉트입니다. 실제 촬영 이미지나 제작 완료의 증거로 제시하지 않습니다.', link: 'system/#hardware-assembly', action: '도안 기반 구조 보기' },
  { label: '검증 자료 확인 필요', title: '확인할 범위를 남깁니다.', description: '실제 분석 결과, 완성 하드웨어 사진과 체험 영상은 추가로 확인할 자료입니다. 기능별 구현과 연동 상태도 검증 자료를 기준으로 안내합니다.' },
] as const;

export function TeamStory() {
  return <>
    <section id="team-approach" className="team-approach" tabIndex={-1} aria-labelledby="team-approach-title">
      <div className="container">
        <div className="team-approach__opening">
          <div>
            <p className="section-kicker">CarpeDM · 프로젝트의 관점</p>
            <h2 id="team-approach-title" className="section-title">대화의 연습을,<br /><span>하나의 경험으로.</span></h2>
            <p className="body-copy">4-Fit MirrorTing은 직장 대화를 미리 경험할 기회를 만드는 프로젝트입니다. 질문을 마주하고 말로 답한 뒤, 자신의 내용과 태도를 돌아보는 체험을 지향합니다.</p>
            <p className="team-approach__credit">4-Fit MirrorTing <span>by CarpeDM</span></p>
          </div>
          <div className="team-approach__device"><ProductFrame kind="mirror" media={media.mirror} /></div>
        </div>
        <ol className="team-principles">
          {approach.map((item, index) => <li key={item.title}><span className="team-principles__number" aria-hidden="true">0{index + 1}</span><h3>{item.title}</h3><p>{item.description}</p><a className="text-link" href={`${siteRoot}${item.link}`}>{item.label}<Arrow /></a></li>)}
        </ol>
      </div>
    </section>

    <section id="team-evidence" className="team-evidence" tabIndex={-1} aria-labelledby="team-evidence-title">
      <div className="container">
        <div className="team-evidence__heading"><div><p className="section-kicker">프로젝트 자료</p><h2 id="team-evidence-title" className="section-title">구상은 명확하게,<br /><span>자료는 정확하게.</span></h2></div><p className="body-copy">이 소개 사이트는 설계한 체험과 확인한 자료를 구분해 보여줍니다. 공개할 수 있는 자료를 바탕으로 작품의 목적과 현재 범위를 설명합니다.</p></div>
        <dl className="team-evidence__list">{evidence.map(item => <div key={item.label}><dt>{item.label}</dt><dd><h3>{item.title}</h3><p>{item.description}</p>{'link' in item && <a className="text-link" href={`${siteRoot}${item.link}`}>{item.action}<Arrow /></a>}</dd></div>)}</dl>
      </div>
    </section>
  </>;
}
