export interface ProductMedia {
  source: string;
  alt: string;
  width: number;
  height: number;
  kind: 'concept' | 'photograph';
  srcSet?: string;
  sizes?: string;
}

type MediaSlot = 'hero' | 'mirror' | 'kiosk';

// Owner-supplied concept renders; these are not assembled-device photographs.
export const media: Record<MediaSlot, ProductMedia | undefined> = {
  hero: {
    source: `${import.meta.env.BASE_URL}media/smart-mirror-hero.webp`,
    alt: '밝은 스튜디오 배경에 놓인 세로형 스마트 미러 콘셉트',
    width: 1122, height: 1402, kind: 'concept',
  },
  mirror: {
    source: `${import.meta.env.BASE_URL}media/smart-mirror-detail.webp`,
    alt: '어두운 네이비 배경의 세로형 스마트 미러 콘셉트',
    width: 1122, height: 1402, kind: 'concept',
  },
  kiosk: {
    source: `${import.meta.env.BASE_URL}media/kiosk-front.webp`,
    alt: '카메라, 조명, 화면, 출력구와 NFC 영역을 갖춘 키오스크 콘셉트',
    width: 1122, height: 1402, kind: 'concept',
  },
};
