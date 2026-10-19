import rss from '@astrojs/rss';
import config from '@config/config.json';
import { defaultLocale, locales } from '@config/locales';
import { getPostEntries } from '@utils/posts';

export async function GET(context) {
  const posts = await getPostEntries(defaultLocale);
  return rss({
    title: config.site.title,
    description: locales[defaultLocale].siteDescription,
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `https://blog.ingcapadev.com/blog/${post.slug}/`,
    })),
  });
}
