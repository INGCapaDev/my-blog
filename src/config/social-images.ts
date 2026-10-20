import type { Locale } from './locales';

export interface SocialImage {
  path: string;
  alt: string;
  type: string;
  width: number;
  height: number;
}

const altText: Record<Locale, string> = {
  en: 'INGCapaDev Blog — articles on web development, productivity, and developer life',
  es: 'INGCapaDev Blog — artículos sobre desarrollo web, productividad y vida de desarrollador',
};

// The first variant is canonical; the others are alternates for crawlers that
// read multiple og:image entries.
const socialImageVariants = [
  { path: '/og/og-image.png', type: 'image/png', width: 1200, height: 630 },
  { path: '/og/og-image-large.png', type: 'image/png', width: 1600, height: 900 },
  { path: '/og/og-image-square.png', type: 'image/png', width: 1200, height: 1200 },
] satisfies Omit<SocialImage, 'alt'>[];

export const socialImages: Partial<Record<Locale, SocialImage[]>> = {
  en: socialImageVariants.map((image) => ({ ...image, alt: altText.en })),
  es: socialImageVariants.map((image) => ({ ...image, alt: altText.es })),
};
