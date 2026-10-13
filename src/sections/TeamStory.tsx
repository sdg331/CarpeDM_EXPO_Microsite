import { Arrow } from '../components/Arrow';
import { ProductFrame } from '../components/ProductFrame/ProductFrame';
import { media } from '../data/media';
import { siteRoot } from '../data/paths';
import './TeamStory.css';

const approach = [
  { title: '상황에서 시작합니다.', description: '첫 보고, 질문, 실수 설명과 의견 조율. 직장에서 마주할 대화부터 정했습니다.', link: 'service/#practice', label: '설계한 대화 살펴보기' },
  { title: '내용과 태도를 함께 봅니다.', description: '답변 내용만큼 전달하는 모습도 중요하다고 생각했습니다. 응답·목소리·표정·자세를 4-Fit의 기준으로 정한 이유입니다.', link: 'four-fit/', label: '4-Fit의 네 관점' },
  { title: '두 장치의 역할을 나눴습니다.', description: '키오스크에서 시작해 미러 앞에서 연습합니다. 체험 준비와 대화 연습의 역할을 두 장치에 나눴습니다.', link: 'system/#system', label: '시스템의 연결 방향' },
] as const;

const evidence = [
  { label: 'DEMO UI', title: '실행한 소개 화면', description: '로컬에서 확인한 직장대화 소개 화면을 공개합니다. 화면의 답변과 코칭은 직접 작성한 설명용 예시입니다.', link: 'system/#evidence', action: '공개한 화면 보기' },
  { label: 'CONCEPT', title: '설계 도안으로 만든 이미지', description: '제공된 설계 도안을 바탕으로 만든 3D 이미지는 구조를 설명하는 콘셉트입니다. 실제 촬영 이미지나 제작 완료의 증거로 제시하지 않습니다.', link: 'system/#hardware-assembly', action: '도안 기반 구조 보기' },
  { label: '검증 자료 확인 필요', title: '추가로 확인할 자료', description: '실제 분석 결과, 완성 하드웨어 사진과 체험 영상은 추가로 확인할 자료입니다. 기능별 구현과 연동 상태도 검증 자료를 기준으로 안내합니다.' },
] as const;

export function TeamStory() {
  return <>
    <section id="team-approach" className="team-approach" tabIndex={-1} aria-labelledby="team-approach-title">
      <div className="container">
        <div className="team-approach__opening">
          <div>
            <p className="section-kicker">CarpeDM · 프로젝트의 관점</p>
            <h2 id="team-approach-title" className="section-title">직장 대화를<br /><span>미리 연습하는 거울.</span></h2>
            <p className="body-copy">첫 출근 날, 모르는 일을 어떻게 묻고 실수를 어떻게 설명할까요? CarpeDM은 이런 대화를 미리 연습할 수 있도록 4-Fit MirrorTing을 만들고 있습니다.</p>
            <p className="team-approach__credit">4-Fit MirrorTing <span>by CarpeDM</span></p>
          </div>
          <div className="team-approach__device"><ProductFrame kind="mirror" media={media.mirror} /></div>
        </div>
        <ol className="team-principles">
          {approach.map((item, index) => <li key={item.title}><span className="team-principles__number" aria-hidden="true">0{index + 1}</span><h3>{item.title}</h3><p>{item.description}</p></li>)}
        </ol>
      </div>
    </section>

    <section id="team-evidence" className="team-evidence" tabIndex={-1} aria-labelledby="team-evidence-title">
      <div className="container">
        <div className="team-evidence__heading"><div><p className="section-kicker">프로젝트 자료</p><h2 id="team-evidence-title" className="section-title">설계한 체험과<br /><span>확인한 자료.</span></h2></div><p className="body-copy">이 소개 사이트는 설계한 체험과 확인한 자료를 구분해 보여줍니다. 공개할 수 있는 자료로 작품의 목적과 현재 범위를 설명합니다.</p></div>
        <dl className="team-evidence__list">{evidence.map(item => <div key={item.label}><dt>{item.label}</dt><dd><h3>{item.title}</h3><p>{item.description}</p>{'link' in item && <a className="text-link" href={`${siteRoot}${item.link}`}>{item.action}<Arrow /></a>}</dd></div>)}</dl>
      </div>
    </section>
  </>;
}
