import { Arrow } from './components/Arrow';
import { BrandMark } from './components/BrandMark';
import { Header } from './components/Header/Header';
import { Hero } from './sections/Hero/Hero';
import { Introduction } from './sections/Introduction/Introduction';
import { ExperienceFlow } from './sections/ExperienceFlow/ExperienceFlow';
import { SmartMirror } from './sections/SmartMirror/SmartMirror';
import { IdKiosk } from './sections/IdKiosk/IdKiosk';
import { SystemArchitecture } from './sections/SystemArchitecture/SystemArchitecture';
import { Technology } from './sections/Technology/Technology';
import { Closing } from './sections/Closing/Closing';
import './styles/footer.css';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">본문으로 건너뛰기</a>
      <div id="top" tabIndex={-1} />
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Introduction />
        <ExperienceFlow />
        <SmartMirror />
        <IdKiosk />
        <SystemArchitecture />
        <Technology />
        <Closing />
      </main>
      <footer className="site-footer">
        <div className="container">
          <div className="site-footer__top">
            <a className="brand" href="#top" aria-label="CarpeDM, 처음으로"><BrandMark /><span>CARPEDM<span className="brand__period">.</span></span></a>
            <p>Interactive AI Smart Mirror + ID Card Kiosk</p>
            <a className="text-link" href="#top">처음으로<Arrow direction="up" /></a>
          </div>
          <div className="site-footer__bottom">
            <p>동양미래대학교 EXPO 프로젝트</p>
            <p>본 페이지는 프로젝트의 구성과 설계한 경험을 소개합니다.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
