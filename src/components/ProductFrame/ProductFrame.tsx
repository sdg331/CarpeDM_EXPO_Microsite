import { t } from '../../i18n';
import { useState } from 'react';
import type { ProductMedia } from '../../data/media';
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
          <div className="kiosk-screen"></div>
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
        <span className="mirror-microphone" />
        <span className="mirror-nfc" />
        <div className="mirror-surface"><span className="mirror-reflection" /></div>
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
    ? t('상단 카메라와 마이크, 하단 스피커와 넓은 베이스를 단순화한 스마트 미러 형태 콘셉트')
    : t('화면, 카메라와 출력구를 갖춘 사원증 발급 키오스크의 콘셉트 이미지');

  return (
    <figure className={`product-frame product-frame--${kind} product-frame--${variant}`}>
      <div className={`product-frame__stage${showPhoto ? ' product-frame__stage--photo' : ''}`}
        style={media ? { aspectRatio: `${media.width} / ${media.height}` } : undefined}>
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
    </figure>
  );
}
