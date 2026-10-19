import type { Locale } from './locales';

interface UiDictionary {
  navigation: {
    label: string;
    home: string;
    about: string;
    tags: string;
    categories: string;
    website: string;
  };
  changeLanguage: string;
  themeToggle: string;
  rssTitle: string;
  footer: {
    madeWith: string;
    location: string;
  };
}

export const ui = {
  en: {
    navigation: {
      label: 'Main navigation',
      home: 'Home',
      about: 'About',
      tags: 'Tags',
      categories: 'Categories',
      website: 'Website',
    },
    changeLanguage: 'Change Language',
    themeToggle: 'Theme Toggle',
    rssTitle: 'RSS (English)',
    footer: {
      madeWith: 'Made with',
      location: 'in Mexico. by',
    },
  },
  es: {
    navigation: {
      label: 'Navegación principal',
      home: 'Home',
      about: 'Sobre mí',
      tags: 'Etiquetas',
      categories: 'Categorías',
      website: 'Sitio web',
    },
    changeLanguage: 'Cambiar Idioma',
    themeToggle: 'Theme Toggle',
    rssTitle: 'RSS (inglés)',
    footer: {
      madeWith: 'Hecho con',
      location: 'en Mexico. por',
    },
  },
} satisfies Record<Locale, UiDictionary>;
