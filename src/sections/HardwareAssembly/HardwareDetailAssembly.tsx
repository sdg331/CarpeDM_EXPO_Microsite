import { useRef, useState } from 'react';
import { siteAsset } from '../../data/paths';
import { useAssemblyScroll } from './useAssemblyScroll';

const layers = ['shell', 'core', 'surface'] as const;
const imageLayers = {
  camera: layers.map(name => ({ name, unit: '' })),
  audio: layers.flatMap(name => (name === 'shell' ? [''] : ['mic', 'left', 'right']).map(unit => ({ name, unit }))),
};
const content = {
  camera: {
    label: '시각 입력', mark: 'CAMERA · COLOR + DEPTH',
    title: <>컬러와 깊이.<br /><span>함께 보는 카메라.</span></>,
    intro: '장면의 색과 디테일, 거리 정보를 함께 입력하는 센서 구성.',
    description: '외장과 브래킷, 센서 코어, 광학 전면부가 결합하는 카메라 구조 콘셉트.',
    chapters: ['컬러 영상', '깊이 정보', '두 입력의 결합'],
    features: [
      ['12 MP 컬러', '장면의 색과 디테일을 담는 고해상도 컬러 영상 입력.'],
      ['1 MP ToF 깊이', '거리 정보를 깊이 영상으로 다루기 위한 센서.'],
      ['컬러 + 깊이', '두 영상 입력을 한 장치에서 함께 제공하는 구성.'],
    ],
    next: '#audio-assembly', nextLabel: '오디오 살펴보기', fallback: '카메라 형태 콘셉트',
  },
  audio: {
    label: '음성 입력 · 소리 출력', mark: 'AUDIO · VOICE + SOUND',
    title: <>목소리에 집중하고.<br /><span>대화를 이어가도록.</span></>,
    intro: '상단 마이크 어레이와 하단 두 스피커로 구성한 대화의 입력과 출력.',
    description: '마이크·스피커 하우징, 마이크 보드와 두 스피커 유닛, 음향 그릴이 결합하는 오디오 구조 콘셉트.',
    chapters: ['네 개의 마이크', '방향과 에코', '소음을 줄이는 처리'],
    features: [
      ['4개의 마이크', '여러 마이크를 함께 사용하는 음성 입력 구성.'],
      ['빔포밍 · 에코 제거', '말하는 방향에 집중하고 스피커 에코를 줄이기 위한 처리.'],
      ['소음 억제', '주변 소음을 줄이도록 설계된 제조사 음성 처리 기능.'],
    ],
    next: '#system', nextLabel: '시스템 구성 보기', fallback: '마이크·스피커 형태 콘셉트',
  },
} as const;

export function HardwareDetailAssembly({ kind }: { kind: keyof typeof content }) {
  const data = content[kind];
  const loaded = useRef(new Set<string>());
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const [completeFailed, setCompleteFailed] = useState(false);
  const section = useAssemblyScroll(failed, ready);
  const asset = (part?: string) => siteAsset(`media/hardware/sm-${kind}${part ? '-' + part : ''}-v1.webp`);
  function imageLoaded(name: string) {
    loaded.current.add(name);
    if (loaded.current.size === 4) setReady(true);
  }

  return <section ref={section} id={kind + '-assembly'} tabIndex={-1}
    className={`hardware-assembly hardware-detail-assembly hardware-detail-assembly--${kind}${ready ? ' hardware-assembly--ready' : ''}`}
    data-phase="0" data-render="loading" aria-labelledby={kind + '-assembly-title'}>
    <div className="hardware-assembly__sticky">
      <div className="hardware-assembly__top container"><p>{data.mark}</p><a href={data.next}>{data.nextLabel} <span aria-hidden="true">↗</span></a></div>
      <div className="hardware-detail-assembly__main container">
        <div className="hardware-detail-assembly__copy"><p>{data.label}</p><h2 id={kind + '-assembly-title'}>{data.title}</h2><p>{data.intro}</p></div>
        <div className="hardware-assembly__stage hardware-detail-assembly__stage" role="img" aria-label={'AI 생성 3D 콘셉트. ' + data.description} aria-busy="true">
          <div className="hardware-assembly__object">
            {!failed && <div className="hardware-assembly__layers" aria-hidden="true">
              {imageLayers[kind].map(({ name, unit }) => <img key={name + unit} className={'hardware-assembly__layer hardware-detail-assembly__layer--' + name + (unit ? ' hardware-detail-assembly__unit--' + unit : '')} src={asset(name)} alt="" width={1448} height={1086} loading="lazy" decoding="async" onLoad={() => imageLoaded(name)} onError={() => setFailed(true)} />)}
            </div>}
            {!completeFailed ? <img className="hardware-assembly__complete" src={asset()} alt="" width={1448} height={1086} loading="lazy" decoding="async" onLoad={() => imageLoaded('complete')} onError={() => { setCompleteFailed(true); setFailed(true); }} /> : <div className="hardware-detail-assembly__fallback"><div aria-hidden="true"><span /><i /><i /></div><p>{data.fallback}</p></div>}
          </div>
        </div>
        <ol className="hardware-detail-assembly__features">
          {data.features.map(([title, copy], i) => <li key={title} data-feature={i}><span aria-hidden="true">0{i + 1}</span><div><h3>{title}</h3><p>{copy}</p></div></li>)}
        </ol>
      </div>
      <div className="hardware-assembly__bottom container">
        <div className="hardware-assembly__steps" aria-hidden="true">{data.chapters.map((chapter, i) => <span key={chapter} data-chapter={i}><b>0{i + 1} / 03</b> {chapter}</span>)}</div>
        <p>AI 생성 3D 구조 콘셉트 · 내부 형상은 설명용</p><div className="hardware-assembly__track" aria-hidden="true"><i /></div>
      </div>
      <p className="hardware-detail-assembly__scope container">제조사 공개 사양을 소개합니다. 실제 프로젝트의 분석 성능·기능 활성화·장치 연동을 의미하지 않습니다. <a href="#hardware-details">장비 사양과 출처 보기 ↗</a></p>
    </div>
    <p className="sr-only">{data.description} 스크롤하면 부품이 조립되며 컬러·깊이 입력 또는 음성 처리의 강점을 강조합니다. 내부 부품의 형상과 배치는 설명용 AI 생성 콘셉트이며 제조사의 실제 분해도나 제작 도면이 아닙니다.</p>
  </section>;
}
