import type { ContentCollectionKey } from 'astro:content';

interface LocaleConfig {
  prefix: string;
  name: string;
  websiteUrl: string;
  dateLocale: string;
  collection: Exclude<ContentCollectionKey, 'about'>;
  about: string;
  siteDescription: string;
  ogLocale: string;
  description: string;
  faviconRels: string[];
  googleTagManager: boolean;
}

export const locales = {
  en: {
    prefix: '',
    name: 'English',
    websiteUrl: 'https://ingcapadev.com',
    dateLocale: 'en-us',
    collection: 'blog',
    about: 'en',
    siteDescription: 'My personal blog',
    ogLocale: 'en_US',
    description:
      'Welcome to my personal blog where I share my experiences and knowledge about web development, productivity and other interesting topics.',
    faviconRels: ['shortcut icon', 'icon'],
    googleTagManager: true,
  },
  es: {
    prefix: '/es',
    name: 'Español',
    websiteUrl: 'https://ingcapadev.com/es',
    dateLocale: 'es-mx',
    collection: 'blogES',
    about: 'es',
    siteDescription: 'Mi blog personal',
    ogLocale: 'es_MX',
    description:
      'Bienvenido a mi blog personal donde comparto mis experiencias y conocimientos sobre desarrollo web, productividad y otros temas interesantes.',
    faviconRels: ['shortcut icon'],
    googleTagManager: false,
  },
} satisfies Record<string, LocaleConfig>;

export type Locale = keyof typeof locales;

export const defaultLocale = 'en' satisfies Locale;
export const supportedLocales = Object.keys(locales) as Locale[];
export const nonDefaultLocales = supportedLocales.filter((locale) => locale !== defaultLocale);
