import { t } from '../i18n';
import { sitePage } from '../data/paths';
import './TeamStory.css';

const approach = [
  { title: t('마주할 상황에서 시작합니다.'), description: t('면접 질문, 고객 응대, 첫 보고와 의견 조율. 어떤 상대와 무엇을 연습할지 먼저 정했습니다.'), link: 'service/#practice', label: t('대화 예시 살펴보기') },
  { title: t('내용과 태도를 함께 봅니다.'), description: t('답변 내용만큼 전달하는 모습도 중요하다고 생각했습니다. 응답·목소리·표정·자세를 4-Fit의 기준으로 정한 이유입니다.'), link: 'four-fit/', label: t('4-Fit의 네 관점') },
  { title: t('두 장치의 역할을 나눴습니다.'), description: t('키오스크에서 시작해 미러 앞에서 연습합니다. 체험 준비와 대화 연습의 역할을 두 장치에 나눴습니다.'), link: 'system/#system', label: t('시스템의 연결 방향') },
] as const;

const evidence = [
  { label: t('공개 코드'), title: t('연습에서 리포트까지'), description: t('연습 모드, 대화 진행, 근거를 담는 리포트의 소스 구조와 확인한 버전을 공개합니다.'), link: 'system/#evidence', action: t('구현 근거 보기') },
  { label: t('실행 화면'), title: t('실행한 소개 화면'), description: t('로컬에서 확인한 직장대화 소개 화면을 공개합니다. 화면의 답변과 코칭은 직접 작성한 설명용 예시입니다.'), link: 'system/#evidence-capture', action: t('공개한 화면 보기') },
  { label: t('설계 자료'), title: t('장치 시각자료'), description: t('설계 도안을 바탕으로 미러와 부품의 구성을 정리했습니다.'), link: 'system/#hardware-assembly', action: t('장치 구성 보기') },
  { label: t('검증 자료 확인 필요'), title: t('추가로 확인할 자료'), description: t('실제 분석 결과, 완성 하드웨어 사진과 체험 영상은 추가로 확인할 자료입니다. 기능별 구현과 연동 상태도 검증 자료를 기준으로 안내합니다.') },
] as const;

export function TeamStory() {
  return <>
    <section id="team" className="team-approach" tabIndex={-1} aria-labelledby="team-approach-title">
      <div className="container">
        <div id="team-approach" className="team-approach__opening" tabIndex={-1}>
          <div>
            <h2 id="team-approach-title" className="section-title">{t('우리가 만든 이유')}</h2>
            <p className="body-copy">{t('첫 출근 날, 모르는 일을 어떻게 묻고 실수를 어떻게 설명할까요? CarpeDM은 이런 대화를 미리 연습할 수 있도록 4-Fit MirrorTing을 만들고 있습니다.')}</p>
          </div>
        </div>
        <ol className="team-principles" aria-label={t('작품을 설계한 세 가지 기준')}>
          {approach.map((item, index) => <li key={item.title}><span className="team-principles__number" aria-hidden="true">0{index + 1}</span><h3>{item.title}</h3><p>{item.description}</p><a className="text-link" href={sitePage(`${item.link}`)}>{item.label}</a></li>)}
        </ol>
      </div>
    </section>

    <details className="compact-disclosure container"><summary>{t('프로젝트 공개 자료')}<span className="disclosure-plus" aria-hidden="true" /></summary><section id="team-evidence" className="team-evidence" tabIndex={-1} aria-labelledby="team-evidence-title">
      <div className="container">
        <div className="team-evidence__heading"><div><p className="section-kicker">{t('프로젝트 자료')}</p><h2 id="team-evidence-title" className="section-title">{t('설계한 체험과')}<br /><span>{t('확인한 자료.')}</span></h2></div><p className="body-copy">{t('이 소개 사이트는 설계한 체험과 확인한 자료를 구분해 보여줍니다. 공개할 수 있는 자료로 작품의 목적과 현재 범위를 설명합니다.')}</p></div>
        <dl className="team-evidence__list">{evidence.map(item => <div key={item.label}><dt>{item.label}</dt><dd><h3>{item.title}</h3><p>{item.description}</p>{'link' in item && <a className="text-link" href={sitePage(`${item.link}`)}>{item.action}</a>}</dd></div>)}</dl>
      </div>
    </section></details>
  </>;
}
