import { useRef, useState } from 'react';
import { ProductFrame } from '../../components/ProductFrame/ProductFrame';
import { siteAsset } from '../../data/paths';
import { useAssemblyScroll } from './useAssemblyScroll';
import { HardwareDetailAssembly } from './HardwareDetailAssembly';
import './HardwareAssembly.css';

const layers = ['body', 'display', 'front'] as const;
const chapters = ['후면 구조와 화면', '미러 프레임 결합', '하나의 스마트 미러'] as const;
const asset = (name: string) => siteAsset('media/hardware/sm-' + name + '-v1.webp');

export function HardwareAssembly() {
  const loaded = useRef(new Set<string>());
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const [completeFailed, setCompleteFailed] = useState(false);
  const section = useAssemblyScroll(failed, ready);

  function imageLoaded(name: string) {
    loaded.current.add(name);
    if (loaded.current.size === 4) setReady(true);
  }

  return <>
    <section ref={section} id="hardware-assembly" tabIndex={-1} className={'hardware-assembly' + (ready ? ' hardware-assembly--ready' : '')} data-phase="0" data-render="loading" aria-labelledby="assembly-title">
      <div className="hardware-assembly__sticky">
        <div className="hardware-assembly__top container"><p>4-FIT MIRRORTING · HARDWARE</p><a href="#system">시스템 구성 보기 <span aria-hidden="true">↗</span></a></div>
        <div className="hardware-assembly__heading container">
          <h2 id="assembly-title">각각의 기술이,<br /><span>하나의 미러로.</span></h2>
          <div><p>거울과 화면. 카메라와 오디오.<br />설계 도안을 바탕으로 구성한 하나의 스마트 미러.</p><span className="hardware-assembly__hint">스크롤하며 조립 과정을 살펴보세요 <i aria-hidden="true">↓</i></span></div>
        </div>
        <div className="hardware-assembly__stage container" role="img" aria-label="설계 도안 기반 AI 생성 3D 콘셉트. 거울 프레임과 모니터, 스피커·PC BOX·베이스가 결합합니다." aria-busy="true">
          <div className="hardware-assembly__shadow" aria-hidden="true" />
          <div className="hardware-assembly__object">
            {!failed && <div className="hardware-assembly__layers" aria-hidden="true">
              {layers.map(name => <img key={name} className={'hardware-assembly__layer hardware-assembly__layer--' + name} src={asset(name)} alt="" width={1086} height={1448} loading="lazy" decoding="async" onLoad={() => imageLoaded(name)} onError={() => setFailed(true)} />)}
            </div>}
            {!completeFailed ? <img className="hardware-assembly__complete" src={asset('assembled')} alt="" width={1086} height={1448} loading="lazy" decoding="async" onLoad={() => imageLoaded('assembled')} onError={() => { setCompleteFailed(true); setFailed(true); }} /> : <div className="hardware-assembly__fallback"><ProductFrame kind="mirror" /></div>}
          </div>
        </div>
        <div className="hardware-assembly__bottom container">
          <div className="hardware-assembly__steps" aria-hidden="true">{chapters.map((chapter, i) => <span key={chapter} data-chapter={i}><b>0{i + 1} / 03</b> {chapter}</span>)}</div>
          <p>설계 도안 기반 AI 생성 3D 콘셉트 · 실제 촬영 이미지가 아닙니다.</p>
          <div className="hardware-assembly__track" aria-hidden="true"><i /></div>
        </div>
      </div>
      <p className="sr-only">미러 프레임에는 상단 카메라·마이크와 측면 NFC를 배치합니다. 내부 모니터와 후면 PC BOX, 하단 두 스피커와 캐스터 베이스가 결합하는 설계입니다. 이미지의 마감과 반사는 표현용이며 실제 제작 및 연동 완료를 의미하지 않습니다.</p>
    </section>
    <div id="hardware-inputs"><HardwareDetailAssembly kind="camera" /><HardwareDetailAssembly kind="audio" /></div>
  </>;
}
