import { t } from '../../i18n';
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
    label: t('시각 입력 · 센서 구조'), mark: 'CAMERA · COLOR + DEPTH',
    title: <>{t('컬러 영상과 거리 정보,')}<br /><span>{t('센서 구조 살펴보기.')}</span></>,
    intro: t('컬러 카메라와 깊이 센서, 마이크 어레이. 하나의 장치 안에 담긴 입력 구조를 살펴보세요.'),
    description: t('제공된 Azure Kinect DK 분해 이미지를 참고한 외장, 상단 마이크 어레이, 내부 보드와 컬러·깊이 광학 모듈의 3D 구조 콘셉트.'),
    chapters: [t('위아래로 펼쳐진 구조'), t('위쪽 센서가 내려오고'), t('아래쪽 전면부가 결합')],
    features: [
      [t('12 MP 컬러'), t('장면의 색과 디테일을 담는 고해상도 컬러 영상 입력.')],
      [t('1 MP ToF 깊이'), t('거리 정보를 깊이 영상으로 다루기 위한 센서.')],
      [t('7개의 마이크'), t('상단에 배치된 마이크 어레이. 미러의 별도 음성 장비와는 구분합니다.')],
    ],
    next: '#audio-assembly', nextLabel: t('오디오 살펴보기'), fallback: t('카메라'),
  },
  audio: {
    label: t('음성 입력 · 소리 출력'), mark: 'AUDIO · VOICE + SOUND',
    title: <>{t('음성을 받는 마이크,')}<br /><span>{t('소리를 내는 스피커.')}</span></>,
    intro: t('상단 마이크 어레이와 하단 두 스피커로 구성한 대화의 입력과 출력.'),
    description: t('마이크·스피커 하우징, 마이크 보드와 두 스피커 유닛, 음향 그릴이 결합하는 오디오 구조 콘셉트.'),
    chapters: [t('네 개의 마이크'), t('방향과 에코'), t('소음을 줄이는 처리')],
    features: [
      [t('4개의 마이크'), t('여러 마이크를 함께 사용하는 음성 입력 구성.')],
      [t('빔포밍 · 에코 제거'), t('말하는 방향에 집중하고 스피커 에코를 줄이기 위한 처리.')],
      [t('소음 억제'), t('주변 소음을 줄이도록 설계된 제조사 음성 처리 기능.')],
    ],
    next: '#system', nextLabel: t('시스템 구성 보기'), fallback: t('마이크·스피커'),
  },
} as const;

export function HardwareDetailAssembly({ kind }: { kind: keyof typeof content }) {
  const data = content[kind];
  const loaded = useRef(new Set<string>());
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const [completeFailed, setCompleteFailed] = useState(false);
  const section = useAssemblyScroll(failed, ready, true);
  const asset = (part?: string) => siteAsset(kind === 'camera' ? 'media/hardware/sm-camera-atlas-v4.webp' : `media/hardware/sm-${kind}${part ? '-' + part : ''}-v1.webp`);
  function imageLoaded(name: string) {
    loaded.current.add(name);
    if (loaded.current.size === 4) setReady(true);
  }
  const completeImage = !completeFailed ? <img className="hardware-assembly__complete" src={asset()} alt="" width={1448} height={1086} loading="lazy" decoding="async" onLoad={() => imageLoaded('complete')} onError={() => { setCompleteFailed(true); setFailed(true); }} /> : <div className="hardware-detail-assembly__fallback"><div aria-hidden="true"><span /><i /><i /></div><p>{data.fallback}</p></div>;

  return <section ref={section} id={kind + '-assembly'} tabIndex={-1}
    className={`hardware-assembly hardware-detail-assembly hardware-detail-assembly--${kind}${ready ? ' hardware-assembly--ready' : ''}`}
    data-phase="0" data-render="loading" aria-labelledby={kind + '-assembly-title'}>
    <div className="hardware-assembly__sticky">
      <div className="hardware-assembly__top container"><p>{data.mark}</p><a href={data.next}>{data.nextLabel}</a></div>
      <div className="hardware-detail-assembly__main container">
        <div className="hardware-detail-assembly__copy"><p>{data.label}</p><h2 id={kind + '-assembly-title'}>{data.title}</h2><p>{data.intro}</p></div>
        <div className="hardware-assembly__stage hardware-detail-assembly__stage" role="img" aria-label={t('AI 생성 3D 콘셉트. ') + data.description} aria-busy="true">
          <div className="hardware-assembly__object">
            {!failed && <div className="hardware-assembly__layers" aria-hidden="true">
              {imageLayers[kind].map(({ name, unit }) => {
                const className = 'hardware-assembly__layer hardware-detail-assembly__layer--' + name + (unit ? ' hardware-detail-assembly__unit--' + unit : '');
                const image = <img key={name + unit} className={kind === 'camera' ? 'hardware-camera__sprite' : className} src={asset(name)} alt="" width={1448} height={1086} loading="lazy" decoding="async" onLoad={() => imageLoaded(name)} onError={() => setFailed(true)} />;
                return kind === 'camera' ? <div key={name} className={className + ' hardware-camera__tile'}>{image}{name === 'core' && <img className="hardware-camera__roof" src={asset()} alt="" width={1448} height={1086} loading="lazy" decoding="async" />}{name === 'shell' && <img className="hardware-camera__tray" src={asset()} alt="" width={1448} height={1086} loading="lazy" decoding="async" />}</div> : image;
              })}
            </div>}
            {kind === 'camera' && !completeFailed ? <div className="hardware-camera__tile hardware-camera__tile--complete">{completeImage}</div> : completeImage}
          </div>
        </div>
        <ol className="hardware-detail-assembly__features">
          {data.features.map(([title, copy], i) => <li key={title} data-feature={i}><span aria-hidden="true">0{i + 1}</span><div><h3>{title}</h3><p>{copy}</p></div></li>)}
        </ol>
      </div>
      <div className="hardware-assembly__bottom container">
        <div className="hardware-assembly__steps" aria-hidden="true">{data.chapters.map((chapter, i) => <span key={chapter} data-chapter={i}><b>0{i + 1} / 03</b> {chapter}</span>)}</div>
        <div className="hardware-assembly__track" aria-hidden="true"><i /></div>
      </div>
      <p className="hardware-detail-assembly__scope container">{t('제조사 공개 사양을 소개합니다. 실제 프로젝트의 분석 성능·기능 활성화·장치 연동을 의미하지 않습니다. ')}<a href="#hardware-details">{t('장비 사양과 출처 보기')}</a></p>
    </div>
    <p className="sr-only">{data.description} {kind === 'camera' ? t('스크롤하면 위쪽 내부 센서는 내려오고 아래쪽 전면부는 올라와 가운데 외장에 결합합니다.') : t('스크롤하면 부품이 조립되며 음성 처리의 강점을 강조합니다.')}{t(' 내부 부품의 형상과 배치는 설명용 AI 생성 콘셉트이며 제조사의 실제 분해도나 제작 도면이 아닙니다.')}</p>
  </section>;
}
