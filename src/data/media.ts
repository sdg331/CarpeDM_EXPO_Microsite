import { t } from '../i18n';
import { siteAsset } from './paths';

export interface ProductMedia {
  source: string;
  alt: string;
  width: number;
  height: number;
  kind: 'concept' | 'photograph';
  srcSet?: string;
  sizes?: string;
}

type MediaSlot = 'hero' | 'reflection' | 'mirror' | 'kiosk';

// Generated white-mirror / black-kiosk concepts; not assembled-device photographs.
export const media: Record<MediaSlot, ProductMedia | undefined> = {
  hero: {
    source: siteAsset('media/smart-mirror-white-studio-v2.webp'),
    srcSet: `${siteAsset('media/smart-mirror-white-studio-v2-544.webp')} 544w, ${siteAsset('media/smart-mirror-white-studio-v2.webp')} 1086w`,
    sizes: '(max-width: 767px) 240px, 420px',
    alt: t('상단 센서와 하단 스피커, 이동식 베이스를 갖춘 흰색 스마트 미러 3D 콘셉트'),
    width: 1086, height: 1448, kind: 'concept',
  },
  reflection: {
    source: siteAsset('media/smart-mirror-white-studio-v2.webp'),
    srcSet: `${siteAsset('media/smart-mirror-white-studio-v2-544.webp')} 544w, ${siteAsset('media/smart-mirror-white-studio-v2.webp')} 1086w`,
    sizes: '(max-width: 767px) 240px, 420px',
    alt: t('상단 카메라와 마이크, 하단 두 스피커와 캐스터 베이스를 갖춘 흰색 스마트 미러 3D 콘셉트'),
    width: 1086, height: 1448, kind: 'concept',
  },
  mirror: {
    source: siteAsset('media/smart-mirror-white-studio-v2.webp'),
    srcSet: `${siteAsset('media/smart-mirror-white-studio-v2-544.webp')} 544w, ${siteAsset('media/smart-mirror-white-studio-v2.webp')} 1086w`,
    sizes: '(max-width: 767px) 240px, 420px',
    alt: t('설계 도안을 바탕으로 표현한 흰색 스마트 미러 전체 구조의 AI 생성 3D 콘셉트'),
    width: 1086, height: 1448, kind: 'concept',
  },
  kiosk: {
    source: siteAsset('media/kiosk-black-studio-v2.webp'),
    srcSet: `${siteAsset('media/kiosk-black-studio-v2-544.webp')} 544w, ${siteAsset('media/kiosk-black-studio-v2.webp')} 1086w`,
    sizes: '(max-width: 767px) 240px, 420px',
    alt: t('카메라, 조명, 화면, 출력구와 NFC 영역을 갖춘 검은색 키오스크 3D 콘셉트'),
    width: 1086, height: 1448, kind: 'concept',
  },
};
