import { locales, type Locale } from '@config/locales';
import { localizedPath } from './localized-path';
import { getTranslatedPost } from './posts';

export async function getLanguageSwitchPath(pathname: string, locale: Locale, targetLocale: Locale): Promise<string> {
  const path = pathname.slice(locales[locale].prefix.length).replace(/\/$/, '');
  if (path === '/about') return localizedPath(targetLocale, '/about');
  if (path === '/tags' || path.startsWith('/tags/')) return localizedPath(targetLocale, '/tags');
  if (path === '/categories' || path.startsWith('/categories/')) return localizedPath(targetLocale, '/categories');

  if (path === '/blog' || path.startsWith('/blog/')) {
    const slug = decodeURIComponent(path.slice('/blog/'.length));
    const translation = await getTranslatedPost(locale, slug, targetLocale);
    return localizedPath(targetLocale, translation ? `/blog/${translation.slug}` : '/blog');
  }

  return localizedPath(targetLocale);
}
