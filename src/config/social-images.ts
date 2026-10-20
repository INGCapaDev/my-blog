import type { Locale } from './locales';

export interface SocialImage {
  path: string;
  alt: string;
  type: string;
  width: number;
  height: number;
}

const socialImage = {
  path: '/og/og-image.png',
  type: 'image/png',
  width: 1200,
  height: 630,
};

export const socialImages: Partial<Record<Locale, SocialImage>> = {
  en: {
    ...socialImage,
    alt: 'INGCapaDev Blog — articles on web development, productivity, and developer life',
  },
  es: {
    ...socialImage,
    alt: 'INGCapaDev Blog — artículos sobre desarrollo web, productividad y vida de desarrollador',
  },
};
