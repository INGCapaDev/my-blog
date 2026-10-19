import type { PaginateFunction } from 'astro';
import { getCollection, type CollectionEntry } from 'astro:content';
import config from '@config/config.json';
import { locales, type Locale } from '@config/locales';

export type Post = CollectionEntry<(typeof locales)[Locale]['collection']>;

export async function getPosts(locale: Locale): Promise<Post[]> {
  const posts = await getCollection(locales[locale].collection);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export async function getPostPages(locale: Locale, paginate: PaginateFunction) {
  return paginate(await getPosts(locale), {
    pageSize: config.site.pageSize,
    props: { locale },
  });
}
