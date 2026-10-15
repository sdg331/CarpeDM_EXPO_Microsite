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

// Concept imagery, including the generated Hero; not assembled-device photographs.
export const media: Record<MediaSlot, ProductMedia | undefined> = {
  hero: {
    source: siteAsset('media/hardware/sm-assembled-v1.webp'),
    alt: '상단 센서와 하단 스피커, 이동식 베이스를 갖춘 설계 도안 기반 스마트 미러 3D 콘셉트',
    width: 1086, height: 1448, kind: 'concept',
  },
  reflection: {
    source: siteAsset('media/hardware/sm-assembled-v1.webp'),
    alt: '상단 카메라와 마이크, 하단 두 스피커와 캐스터 베이스를 갖춘 설계 도안 기반 스마트 미러 3D 콘셉트',
    width: 1086, height: 1448, kind: 'concept',
  },
  mirror: {
    source: siteAsset('media/hardware/sm-assembled-v1.webp'),
    alt: '설계 도안을 바탕으로 표현한 스마트 미러 전체 구조의 AI 생성 3D 콘셉트',
    width: 1086, height: 1448, kind: 'concept',
  },
  kiosk: {
    source: siteAsset('media/kiosk-front.webp'),
    alt: '카메라, 조명, 화면, 출력구와 NFC 영역을 갖춘 키오스크 콘셉트',
    width: 1122, height: 1402, kind: 'concept',
  },
};
