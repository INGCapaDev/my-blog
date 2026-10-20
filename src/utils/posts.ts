import type { PaginateFunction } from 'astro';
import { getCollection, type CollectionEntry } from 'astro:content';
import config from '@config/config.json';
import { locales, type Locale } from '@config/locales';
import { getLocaleParams } from './localized-path';

export type Post = CollectionEntry<(typeof locales)[Locale]['collection']>;

export async function getPostEntries(locale: Locale): Promise<Post[]> {
  return getCollection(locales[locale].collection);
}

export async function getPosts(locale: Locale): Promise<Post[]> {
  const posts = await getPostEntries(locale);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export async function getPostPages(locale: Locale, paginate: PaginateFunction) {
  return paginate(await getPosts(locale), {
    pageSize: config.site.pageSize,
    params: getLocaleParams(locale),
    props: { locale },
  });
}

export async function getArticlePages(locale: Locale) {
  const posts = await getPostEntries(locale);
  return posts.map((post) => ({
    params: { ...getLocaleParams(locale), slug: post.slug },
    props: { locale, post },
  }));
}
