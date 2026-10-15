import { t } from './i18n';
import { useEffect } from 'react';
import { Header } from './components/Header/Header';
import { PageTabs } from './components/PageTabs/PageTabs';
import { MobileNav } from './components/MobileNav';
import { Hero } from './sections/Hero/Hero';
import { Introduction, DeviceOverview } from './sections/Introduction/Introduction';
import { ExperienceFlow } from './sections/ExperienceFlow/ExperienceFlow';
import { SmartMirror } from './sections/SmartMirror/SmartMirror';
import { IdKiosk } from './sections/IdKiosk/IdKiosk';
import { HardwareAssembly } from './sections/HardwareAssembly/HardwareAssembly';
import { SystemArchitecture } from './sections/SystemArchitecture/SystemArchitecture';
import { Technology } from './sections/Technology/Technology';
import { Development } from './sections/Development';
import { FourFit } from './sections/FourFit';
import { UseCases } from './sections/UseCases';
import { Evidence } from './sections/Evidence';
import { WorkplacePractice } from './sections/WorkplacePractice';
import { TeamStory } from './sections/TeamStory';
import { sitePage } from './data/paths';
import './styles/footer.css';
import './styles/story.css';
import './styles/pages.css';

export type PageKind = 'home' | 'service' | 'four-fit' | 'system' | 'use-cases' | 'team';

const nextReading = {
  service: { path: 'four-fit/', label: t('대화를 돌아보는 네 가지 관점') },
  'four-fit': { path: 'use-cases/', label: t('내게 맞는 연습과 교육 활용 찾기') },
  'use-cases': { path: 'system/', label: t('작동 구조와 구현 근거 확인하기') },
  system: { path: 'team/', label: t('제작팀이 고민한 설계 기준') },
  team: { path: 'service/', label: t('작품과 체험 방식 살펴보기') },
} as const;

function PageIntro({ title, description, eyebrow }: { title: string; description: string; eyebrow: string }) {
  return <section className="page-intro"><div className="container">
    <p className="page-intro__eyebrow">{eyebrow}</p>
    <div className="page-intro__content"><h1>{title}</h1><p>{description}</p></div>
  </div></section>;
}

function PageContent({ page }: { page: PageKind }) {
  switch (page) {
    case 'home': return <Hero />;
    case 'service': return <><PageIntro eyebrow={t('처음 만나는 4-Fit MirrorTing')} title={t('작품 소개')} description={t('어려운 대화를 거울 앞에서 미리 말해 보고, 내용과 전달하는 모습을 함께 돌아보는 프로젝트입니다.')} /><PageTabs label={t('작품 소개 주제')} tabs={[
      { id: 'service-about', label: t('작품 이해'), description: t('만든 이유와 연습 방식을 먼저 알아보세요.'), content: <Introduction /> },
      { id: 'service-practice', label: t('대화 예시'), description: t('상황을 바꾸며 질문·답변·연습 포인트를 읽어보세요.'), content: <WorkplacePractice /> },
      { id: 'service-flow', label: t('체험 순서'), description: t('체험 준비부터 다시 연습하기까지의 설계입니다.'), content: <ExperienceFlow detailed /> },
      { id: 'service-devices', label: t('두 장치'), description: t('체험을 준비하는 키오스크와 대화를 연습하는 미러입니다.'), content: <><DeviceOverview /><details className="compact-disclosure container"><summary>{t('키오스크 자세히 보기')}<span className="disclosure-plus" aria-hidden="true" /></summary><IdKiosk /></details><details className="compact-disclosure container"><summary>{t('스마트 미러 자세히 보기')}<span className="disclosure-plus" aria-hidden="true" /></summary><SmartMirror /></details></> },
    ]} /><p className="project-references container"><a href={sitePage(`four-fit/`)}>{t('4-Fit 알아보기')}</a><span aria-hidden="true"> · </span><a href={sitePage(`team/`)}>{t('제작팀 CarpeDM')}</a></p></>;
    case 'four-fit': return <><PageIntro eyebrow={t('내 대화를 돌아보는 방법')} title={t('4-Fit 피드백')} description={t('무슨 말을 했는지, 어떻게 전달했는지. 네 관점에서 다음 연습에 바꿀 한 가지를 찾아보세요.')} /><FourFit detailed /></>;
    case 'system': return <><PageIntro eyebrow={t('소프트웨어와 장치, 그 연결을 이해하기')} title={t('기술과 자료')} description={t('답변이 피드백으로 이어지는 구조와 미러를 이루는 장치, 확인할 수 있는 구현 근거를 담았습니다.')} /><PageTabs label={t('기술 소개 주제')} tabs={[
      { id: 'system-software', label: t('작동 흐름'), description: t('입력과 결과가 어떻게 이어질까요?'), content: <SystemArchitecture /> },
      { id: 'system-hardware', label: t('장치 구성'), description: t('미러·카메라·오디오를 골라 부품과 역할을 살펴보세요.'), content: <HardwareAssembly /> },
      { id: 'system-evidence', label: t('구현 자료'), description: t('공개 코드와 화면 자료에서 확인할 수 있는 범위입니다.'), content: <Evidence /> },
      { id: 'system-future', label: t('발전 방향'), description: t('기존 연습을 더 안정적으로 만들기 위한 다음 과제입니다.'), content: <><Development detailed /><Technology /></> },
    ]} /></>;
    case 'use-cases': return <><PageIntro eyebrow={t('누가, 어떤 상황에서 연습할까요?')} title={t('활용 장면')} description={t('면접과 현장 업무, 동료와의 대화. 현재 연습 종류를 살펴보고 교육에 적용할 방법을 만나보세요.')} /><UseCases detailed /></>;
    case 'team': return <><PageIntro eyebrow={t('4-Fit MirrorTing을 만드는 사람들')} title={t('제작팀 CarpeDM')} description={t('처음 겪는 대화 앞에서 연습할 기회를 만들고자 합니다. 작품을 만든 이유와 설계에서 지킨 기준을 소개합니다.')} /><TeamStory /></>;
  }
}

export default function App({ page }: { page: PageKind }) {
  useEffect(() => {
    function openHash() {
      const hash = window.location.hash.slice(1);
      const movedSections: Record<string, string> = { problem: 'service/#practice', 'home-system': 'system/#system', team: 'team/#team', practice: 'service/#practice', project: 'service/#project', experience: 'service/#experience', 'use-cases': 'use-cases/#use-cases', 'home-uses': 'use-cases/', 'four-fit': 'four-fit/', development: 'system/#system-future' };
      if (page === 'home' && Object.hasOwn(movedSections, hash)) {
        window.location.replace(sitePage(`${movedSections[hash]}`));
        return;
      }
      const target = document.getElementById(hash);
      let ancestor = target?.parentElement;
      while (ancestor) {
        if (ancestor instanceof HTMLDetailsElement) ancestor.open = true;
        ancestor = ancestor.parentElement;
      }
      target?.scrollIntoView({ behavior: 'instant' });
      target?.focus({ preventScroll: true });
    }
    openHash();
    window.addEventListener('hashchange', openHash);
    return () => window.removeEventListener('hashchange', openHash);
  }, [page]);

  return <>
    <a className="skip-link" href="#main-content">{t('본문으로 건너뛰기')}</a>
    {page !== 'home' && <Header page={page} />}
    <main id="main-content" tabIndex={-1}><PageContent page={page} /></main>
    {page !== 'home' && <><footer className="site-footer site-footer--compact"><div className="container site-footer__next"><span>{t('이어서 살펴보기')}</span><a href={sitePage(`${nextReading[page].path}`)}>{nextReading[page].label}</a></div><div className="container site-footer__brief"><p>{t('CarpeDM · 동양미래대학교 EXPO')}</p><a className="text-link" href="#main-content">{t('맨 위로')}</a></div></footer><MobileNav page={page} /></>}
  </>;
}
