import { useEffect } from 'react';
import { Arrow } from './components/Arrow';
import { Header } from './components/Header/Header';
import { Hero } from './sections/Hero/Hero';
import { Introduction } from './sections/Introduction/Introduction';
import { ExperienceFlow } from './sections/ExperienceFlow/ExperienceFlow';
import { SmartMirror } from './sections/SmartMirror/SmartMirror';
import { IdKiosk } from './sections/IdKiosk/IdKiosk';
import { HardwareAssembly } from './sections/HardwareAssembly/HardwareAssembly';
import { SystemArchitecture } from './sections/SystemArchitecture/SystemArchitecture';
import { Technology } from './sections/Technology/Technology';
import { Closing } from './sections/Closing/Closing';
import { Development } from './sections/Development';
import { FourFit } from './sections/FourFit';
import { UseCases } from './sections/UseCases';
import { Evidence } from './sections/Evidence';
import { WorkplacePractice } from './sections/WorkplacePractice';
import { TeamStory } from './sections/TeamStory';
import { siteRoot } from './data/paths';
import './styles/footer.css';
import './styles/story.css';
import './styles/pages.css';

export type PageKind = 'home' | 'service' | 'four-fit' | 'system' | 'use-cases' | 'team';

function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <section className="page-intro"><div className="container">
    <p className="section-kicker">{eyebrow}</p>
    <div className="page-intro__content"><h1>{title}</h1><p>{description}</p></div>
  </div></section>;
}

function PageContent({ page }: { page: PageKind }) {
  switch (page) {
    case 'home': return <><Hero /><UseCases /><Development /><FourFit compact /></>;
    case 'service': return <><PageIntro eyebrow="서비스 소개" title="직장 대화, 실전 전에 연습합니다." description="보고와 질문을 역할극으로 연습하는 AI 스마트 미러 프로젝트. 연습할 대화와 체험 순서를 소개합니다." /><WorkplacePractice /><Introduction /><ExperienceFlow detailed /><IdKiosk /><SmartMirror /><p className="project-references container">작품의 <a href={`${siteRoot}four-fit/`}>4-Fit 설계</a>와 <a href={`${siteRoot}team/`}>제작팀 CarpeDM</a>도 알아보세요.</p></>;
    case 'four-fit': return <><PageIntro eyebrow="4-Fit 분석" title="4-Fit, 대화를 돌아보는 기준." description="응답·목소리·표정·자세. 네 가지 관점에서 말의 내용과 전달하는 태도를 함께 살펴봅니다." /><FourFit detailed /></>;
    case 'system': return <><PageIntro eyebrow="기술과 발전 방향" title="연습은 어떻게 결과로 이어질까요?" description="연습 선택에서 대화, 분석과 결과까지 소프트웨어의 흐름을 먼저 살펴봅니다. 장치 구성과 발전 방향도 이어서 소개합니다." /><SystemArchitecture /><HardwareAssembly /><Evidence /><Development detailed /><Technology /></>;
    case 'use-cases': return <><PageIntro eyebrow="활용" title="면접부터 직무와 직장 대화까지." description="현재 프로젝트의 세 가지 연습과 교육에 적용할 활용안을 소개합니다. 기관의 도입과 교육 효과는 검증이 필요한 제안입니다." /><UseCases detailed /></>;
    case 'team': return <><PageIntro eyebrow="제작팀" title="대화 연습을 준비하는 팀, CarpeDM." description="직장 대화를 미리 연습할 수 있도록 4-Fit MirrorTing을 만들고 있습니다. 제작 의도와 설계할 때 고민한 점을 소개합니다." /><TeamStory /><Closing /></>;
  }
}

export default function App({ page }: { page: PageKind }) {
  useEffect(() => {
    function openHash() {
      const hash = window.location.hash.slice(1);
      const movedSections: Record<string, string> = { problem: 'service/#practice', 'home-system': 'system/#system', team: 'team/#team', practice: 'service/#practice', project: 'service/#project', experience: 'service/#experience', 'use-cases': 'use-cases/#use-cases' };
      if (page === 'home' && Object.hasOwn(movedSections, hash)) {
        window.location.replace(`${siteRoot}${movedSections[hash]}`);
        return;
      }
      const target = document.getElementById(hash);
      target?.scrollIntoView({ behavior: 'instant' });
      target?.focus({ preventScroll: true });
    }
    openHash();
    if (page === 'home') window.addEventListener('hashchange', openHash);
    return () => window.removeEventListener('hashchange', openHash);
  }, [page]);

  return <>
    <a className="skip-link" href="#main-content">본문으로 건너뛰기</a>
    <Header page={page} />
    <main id="main-content" tabIndex={-1}><PageContent page={page} /></main>
    <footer className="site-footer site-footer--compact"><div className="container site-footer__brief"><p>CarpeDM · 동양미래대학교 EXPO</p><a className="text-link" href="#main-content">맨 위로<Arrow direction="up" /></a></div></footer>
  </>;
}
