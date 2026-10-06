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
import { Problem } from './sections/Problem';
import { FourFit } from './sections/FourFit';
import { UseCases } from './sections/UseCases';
import { Evidence } from './sections/Evidence';
import { WorkplacePractice } from './sections/WorkplacePractice';
import { TeamStory } from './sections/TeamStory';
import { ProductFrame } from './components/ProductFrame/ProductFrame';
import { media } from './data/media';
import { navigation, siteRoot } from './data/paths';
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

function PageNext({ href, label }: { href: string; label: string }) {
  return <div className="page-next"><div className="container"><span>계속 살펴보기</span><a href={`${siteRoot}${href}`}>{label}<Arrow /></a></div></div>;
}

function PageContents({ items }: { items: readonly (readonly [string, string])[] }) {
  return <nav className="page-contents container" aria-label="이 페이지에서 살펴볼 내용"><span aria-hidden="true">이 페이지에서</span><div>{items.map(([id, label]) => <a key={id} href={`#${id}`}>{label}<Arrow direction="down" /></a>)}</div></nav>;
}

function HomeSystem() {
  return (
    <section id="home-system" className="home-system story-section" tabIndex={-1} aria-labelledby="home-system-title">
      <div className="container">
        <div className="section-editorial">
          <div><p className="section-kicker"><span className="chapter-number" aria-hidden="true">05</span>두 장치, 하나의 체험</p><h2 id="home-system-title" className="section-title">시작은 키오스크에서,<br /><span>연습은 미러 앞에서.</span></h2></div>
          <p className="body-copy">체험의 입구와 역할극의 무대. 서로 다른 역할의 두 장치가 하나의 경험으로 이어지도록 설계합니다.</p>
        </div>
        <div className="home-system__devices">
          <article>
            <ProductFrame kind="kiosk" media={media.kiosk} />
            <div><p className="section-kicker">01 · 체험의 입구</p><h3>ID Card Kiosk</h3><p>화면 안내와 등록·NFC를 체험의 첫 접점으로 구상합니다.</p><a className="text-link" href={`${siteRoot}service/#kiosk`}>키오스크 살펴보기<Arrow /></a></div>
          </article>
          <article>
            <ProductFrame kind="mirror" media={media.mirror} />
            <div><p className="section-kicker">02 · 역할극의 무대</p><h3>Smart Mirror</h3><p>직장 상황을 마주하고 말로 답하는 연습 공간을 설계합니다.</p><a className="text-link" href={`${siteRoot}service/#mirror`}>스마트 미러 살펴보기<Arrow /></a></div>
          </article>
        </div>
        <div className="section-end"><p className="scope-note">장치의 역할을 소개하는 콘셉트입니다. 실제 발급·NFC·분석 연동은 검증이 필요합니다.</p><a className="text-link" href={`${siteRoot}system/`}>시스템과 구현 자료 보기<Arrow /></a></div>
      </div>
    </section>
  );
}

function PageContent({ page }: { page: PageKind }) {
  switch (page) {
    case 'home': return <><Hero /><Problem /><WorkplacePractice /><Introduction /><FourFit /><HomeSystem /><ExperienceFlow /><UseCases /><Closing /></>;
    case 'service': return <><PageIntro eyebrow="서비스 소개" title="직장 대화, 실전 전에 연습합니다." description="무엇을 연습하고, 어떤 순서로 체험하며, 두 장치는 어떤 역할을 하는지 살펴보세요." /><PageContents items={[["practice", "연습할 대화"], ["experience", "체험 순서"], ["kiosk", "키오스크"], ["mirror", "스마트 미러"]]} /><WorkplacePractice /><ExperienceFlow detailed /><IdKiosk /><SmartMirror /><PageNext href="four-fit/" label="4-Fit 분석 살펴보기" /></>;
    case 'four-fit': return <><PageIntro eyebrow="4-Fit 분석" title="4-Fit, 대화를 돌아보는 기준." description="응답·목소리·표정·자세. 네 가지 관점에서 말의 내용과 전달하는 태도를 함께 살펴봅니다." /><PageContents items={[["four-fit", "네 가지 관점"], ["fit-practice", "대화 예시"], ["fit-retry", "다음 연습"]]} /><FourFit detailed /><PageNext href="system/" label="전체 시스템 살펴보기" /></>;
    case 'system': return <><PageIntro eyebrow="시스템" title="두 장치에서 시작해, 하나의 경험으로." description="키오스크, 스마트 미러, 4-Fit 피드백과 결과 화면의 연결 방향을 살펴봅니다." /><PageContents items={[["hardware-assembly", "장치와 입력"], ["system", "전체 구성"], ["evidence", "구현 자료"], ["technology", "기술 설계"]]} /><HardwareAssembly /><SystemArchitecture /><Evidence /><Technology /><PageNext href="use-cases/" label="활용 분야 살펴보기" /></>;
    case 'use-cases': return <><PageIntro eyebrow="활용" title="직장 대화에서, 필요한 연습으로." description="보고와 질문, 실수 설명과 의견 조율. 지금 필요한 대화에서 시작해 더 다양한 상황으로 확장하는 방향입니다." /><PageContents items={[["use-cases", "연습할 맥락"], ["use-scenarios", "네 가지 상황"], ["use-dashboard", "조직 대시보드"], ["use-expansion", "확장 방향"]]} /><UseCases detailed /><PageNext href="team/" label="제작팀 알아보기" /></>;
    case 'team': return <><PageIntro eyebrow="제작팀" title="경험을 설계하는 팀, CarpeDM." description="처음 겪는 직장 대화에 연습할 기회를 더합니다. 4-Fit MirrorTing의 제작 의도와 설계 관점을 소개합니다." /><PageContents items={[["team-approach", "제작 관점"], ["team-evidence", "프로젝트 자료"], ["team", "우리가 만드는 경험"]]} /><TeamStory /><Closing /><PageNext href="service/" label="체험 설계 다시 살펴보기" /></>;
  }
}

export default function App({ page }: { page: PageKind }) {
  useEffect(() => {
    const target = document.getElementById(window.location.hash.slice(1));
    target?.scrollIntoView({ behavior: 'instant' });
    target?.focus({ preventScroll: true });
  }, []);

  return <>
    <a className="skip-link" href="#main-content">본문으로 건너뛰기</a>
    <Header page={page} />
    <main id="main-content" tabIndex={-1}><PageContent page={page} /></main>
    <footer className="site-footer"><div className="container">
      <div className="site-footer__top">
        <a className="brand" href={`${siteRoot}index.html`} aria-label="4-Fit MirrorTing, 처음으로"><span>4-Fit MirrorTing</span></a>
        <p>Interactive AI Smart Mirror + ID Card Kiosk</p>
        <a className="text-link" href="#main-content">페이지 맨 위로<Arrow direction="up" /></a>
      </div>
      <nav className="site-footer__navigation" aria-label="하단 메뉴">
        <a href={`${siteRoot}service/`}>서비스 소개</a>
        {navigation.map(item => <a key={item.path} href={`${siteRoot}${item.path}`}>{item.label}</a>)}
      </nav>
      <div className="site-footer__bottom"><p>동양미래대학교 EXPO 프로젝트 · by CarpeDM</p><p>설계한 직장생활 역할극과 확인 가능한 자료를 소개합니다.</p></div>
    </div></footer>
  </>;
}
