import type { Locale } from './locales';

export interface SocialImage {
  path: string;
  alt: string;
  width: number;
  height: number;
}

export const socialImages: Partial<Record<Locale, SocialImage>> = {};
