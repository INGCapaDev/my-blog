import englishConfig from './config.json';
import spanishConfig from './configES.json';
import type { ContentCollectionKey } from 'astro:content';

interface LocaleConfig {
  prefix: string;
  name: string;
  websiteUrl: string;
  dateLocale: string;
  collection: ContentCollectionKey;
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
    ogLocale: englishConfig.metadata.locale,
    description: englishConfig.metadata.meta_description,
    faviconRels: ['shortcut icon', 'icon'],
    googleTagManager: true,
  },
  es: {
    prefix: '/es',
    name: 'Español',
    websiteUrl: 'https://ingcapadev.com/es',
    dateLocale: 'es-mx',
    collection: 'blogES',
    ogLocale: spanishConfig.metadata.locale,
    description: spanishConfig.metadata.meta_description,
    faviconRels: ['shortcut icon'],
    googleTagManager: false,
  },
} satisfies Record<string, LocaleConfig>;

export type Locale = keyof typeof locales;

export const supportedLocales = Object.keys(locales) as Locale[];
