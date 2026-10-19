import type { Locale } from '@config/locales';
import { getPostEntries, type Post } from './posts';
import { deslugify, slugify } from './slug';

export type Taxonomy = 'tags' | 'categories';

export interface TaxonomyTerm {
  name: string;
  slug: string;
}

function getTerms(posts: Post[], taxonomy: Taxonomy): TaxonomyTerm[] {
  const terms = new Map<string, TaxonomyTerm>();
  for (const post of posts) {
    for (const name of post.data[taxonomy]) {
      if (!terms.has(name)) terms.set(name, { name, slug: slugify(name) });
    }
  }
  return [...terms.values()];
}

export async function getTaxonomy(locale: Locale, taxonomy: Taxonomy): Promise<TaxonomyTerm[]> {
  return getTerms(await getPostEntries(locale), taxonomy);
}

export async function getTaxonomyPages(locale: Locale, taxonomy: Taxonomy) {
  const posts = await getPostEntries(locale);
  const terms = getTerms(posts, taxonomy);
  const parameter = taxonomy === 'tags' ? 'tag' : 'category';

  return terms.map((term) => ({
    params: { [parameter]: term.slug },
    props: {
      locale,
      taxonomy,
      term: term.slug,
      posts: posts.filter(
        (post) =>
          !post.id.startsWith('-') && post.data[taxonomy].some((name) => deslugify(name) === deslugify(term.slug))
      ),
    },
  }));
}
