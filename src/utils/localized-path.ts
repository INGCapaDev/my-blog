import { defaultLocale, locales, nonDefaultLocales, type Locale } from '@config/locales';

export function localizedPath(locale: Locale, path: '' | `/${string}` = ''): string {
  return `${locales[locale].prefix}${path}` || '/';
}

export function getLocaleParams(locale: Locale): { lang?: string } {
  return locale === defaultLocale ? {} : { lang: locales[locale].prefix.slice(1) };
}

export function getLocalePaths() {
  return nonDefaultLocales.map((locale) => ({ params: getLocaleParams(locale), props: { locale } }));
}
