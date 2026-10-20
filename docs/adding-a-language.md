# Adding a language

English remains the unprefixed default; other languages use one registered prefix segment such as `/es`. This project uses Astro 3.2.3 file-based routing, not the newer built-in i18n configuration.

## Register content and locale data

1. Create a separate translated post collection under `src/content`, preserving meaningful article slugs. Register it in `src/content/config.ts` with the existing `postSchema`; do not copy its fields or combine translated article bodies. Give translated articles the same optional `translationKey` as their paired original so the language control can open the equivalent article; unpaired articles fall back to the target-language blog index.
2. Add a BCP 47 language key to `src/config/locales.ts`. Supply its unique single-segment prefix, display name, website target, regional article date locale, registered post collection, About entry slug, short site description, default metadata description, OG locale, favicon relations, and GTM policy. Common branding, author identity, and site-wide feature flags belong in `src/config/config.json`, not another locale config file.
3. Add a complete dictionary to `src/config/ui.ts`. Its `Record<Locale, UiDictionary>` contract makes missing languages/labels a type error. Keep page headings, navigation, accessibility text, taxonomy tooltips, RSS discovery wording, and supported video headings in that owner.
4. Add the translated About entry to `src/content/about` as MDX with `title` and `metaTitle` frontmatter. Use the existing entries as structure references; import `SkillTags.astro` at the intended location instead of copying its markup. A registry entry pointing at missing About content fails rather than falling back to another language.
5. Optionally configure real artwork in `src/config/social-images.ts`. Its keys derive from `Locale`. Omit an unconfigured image entirely; do not add placeholder image metadata.

## Shared owners

- `src/utils/localized-path.ts` owns internal links, locale route parameters, and non-default locale path generation. `src/pages/[lang]` generates only registered non-default languages; no new route tree or language-specific template is needed.
- `src/utils/posts.ts` owns collection selection, original-order entries, newest-first listings, article routes, and translation lookup. `src/utils/taxonomy.ts` preserves collection-order taxonomy discovery/membership and selects the same locale for generation and filtering.
- Shared views receive an explicit locale. BlogPost owns article rendering with the installed entry `.render()` API; About renders its matching MDX entry. Do not replace these with APIs requiring a framework upgrade.
- `src/utils/language-switch.ts` owns the destination for each language control. Home, About and `/blog` keep the equivalent page; article links resolve through `translationKey` and fall back to the target-language `/blog`; tag/category detail pages go to the target-language indexes. With more than two languages it renders a labeled link per alternative. Locale keys are also the document/list-date language codes, so use valid BCP 47 keys rather than arbitrary identifiers.

## Verify before publishing

- Confirm the new homepage, `/blog`, About, every article, and each tag/category index/detail URL. Compare labels, content order, dates, language-switch destinations, and post membership; entries must not mix languages. `/blog` and the homepage must list every post without numeric archive routes.
- Check titles/descriptions, canonical URLs, document/OG language, JSON-LD, optional date/artwork absence, and artwork dimensions/alt text when configured. Unsupported prefixes and missing routes must remain 404s.
- Exercise home/article/taxonomy/language navigation and theme toggles at narrow and desktop widths. Check About section/grid order and footer placement on short/long pages. Tags intentionally vary sizes/shades; retain the accepted theme-aware monochrome palette.
- Preserve per-locale analytics policy: English has GTM plus GA; Spanish has GA only. GTM must initialize once across client-side locale changes. Check tags/loader behavior separately from delivery to external analytics services.
- Run focused existing lint/format and type checks for changed owners. This repository has no dedicated full Astro typecheck/test script; disclose missing proof instead of installing a test harness as part of adding translations.

The RSS endpoint and discovery links remain English-only. The shared 404 and production PWA configuration retain their existing behavior. PWA registration/manifest tags are emitted only in production because development PWA support is disabled; do not add development requests for build-only assets. New feeds, hreflang expansion, artwork resources, and framework upgrades require separate scope decisions. The existing `pnpm newpost` helper only creates English post files; other collections can be authored directly without changing it.
