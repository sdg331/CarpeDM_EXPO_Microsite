import { useState } from 'react';
import type { ProductMedia } from '../../data/media';
import { BrandMark } from '../BrandMark';
import './ProductFrame.css';

interface ProductFrameProps {
  kind: 'mirror' | 'kiosk';
  variant?: 'hero' | 'detail';
  media?: ProductMedia | undefined;
}

// Original concept silhouettes, not photographs or final enclosure specifications.
function ConceptDevice({ kind }: Pick<ProductFrameProps, 'kind'>) {
  if (kind === 'kiosk') {
    return (
      <div className="device device--kiosk" aria-hidden="true">
        <div className="kiosk-body">
          <span className="kiosk-camera" />
          <div className="kiosk-screen"><BrandMark /></div>
          <div className="kiosk-controls"><span className="kiosk-reader" /><span className="kiosk-slot" /></div>
          <span className="kiosk-paper"><i /><i /><i /></span>
        </div>
        <div className="kiosk-pedestal" />
        <div className="kiosk-foot" />
      </div>
    );
  }

  return (
    <div className="device device--mirror" aria-hidden="true">
      <div className="mirror-body">
        <span className="mirror-sensor" />
        <div className="mirror-surface"><span className="mirror-reflection" /><BrandMark /></div>
        <span className="mirror-bottom-line" />
      </div>
      <div className="mirror-stand" /><div className="mirror-foot" />
    </div>
  );
}

export function ProductFrame({ kind, variant = 'detail', media }: ProductFrameProps) {
  const [failedSource, setFailedSource] = useState<string>();
  const showPhoto = media && media.source !== failedSource;
  const description = kind === 'mirror'
    ? '대형 세로형 스마트 미러와 하단 센싱 영역을 단순화한 콘셉트 이미지'
    : '화면, 카메라와 출력구를 갖춘 사원증 발급 키오스크의 콘셉트 이미지';

  return (
    <figure className={`product-frame product-frame--${kind} product-frame--${variant}`}>
      <div className={`product-frame__stage${showPhoto ? ' product-frame__stage--photo' : ''}`}>
        {showPhoto ? (
          <img src={media.source} alt={media.alt} width={media.width} height={media.height}
            srcSet={media.srcSet} sizes={media.sizes}
            loading={variant === 'hero' ? 'eager' : 'lazy'}
            fetchPriority={variant === 'hero' ? 'high' : 'auto'} decoding="async"
            onError={() => setFailedSource(media.source)} />
        ) : (
          <>
            <div className="product-frame__drawing" role="img" aria-label={description}>
              <ConceptDevice kind={kind} />
            </div>
          </>
        )}
      </div>
      <figcaption className="product-frame__caption">
        <span>{showPhoto ? (kind === 'mirror' ? 'SMART MIRROR' : 'ID CARD KIOSK') : '제품 형태 콘셉트'}</span>
        {!showPhoto && <span>디바이스 콘셉트 · 실제 촬영 이미지가 아닙니다.</span>}
      </figcaption>
    </figure>
  );
}
