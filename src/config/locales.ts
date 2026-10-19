interface LocaleConfig {
  prefix: string;
  name: string;
  websiteUrl: string;
}

export const locales = {
  en: {
    prefix: '',
    name: 'English',
    websiteUrl: 'https://ingcapadev.com',
  },
  es: {
    prefix: '/es',
    name: 'Español',
    websiteUrl: 'https://ingcapadev.com/es',
  },
} satisfies Record<string, LocaleConfig>;

export type Locale = keyof typeof locales;

export const supportedLocales = Object.keys(locales) as Locale[];
