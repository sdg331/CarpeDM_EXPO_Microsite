export interface ProductMedia {
  source: string;
  alt: string;
  width: number;
  height: number;
  srcSet?: string;
  sizes?: string;
}

type MediaSlot = 'hero' | 'mirror' | 'kiosk';

// Intentionally empty until project-owned photographs are supplied.
// Set a slot to a ProductMedia object; never point at an absent default file.
// Public assets: `${import.meta.env.BASE_URL}media/smart-mirror-hero.webp`.
export const media: Record<MediaSlot, ProductMedia | undefined> = {
  hero: undefined,
  mirror: undefined,
  kiosk: undefined,
};
