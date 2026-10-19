import { locales, type Locale } from '@config/locales';

export function localizedPath(locale: Locale, path: '' | `/${string}` = ''): string {
  return `${locales[locale].prefix}${path}` || '/';
}
