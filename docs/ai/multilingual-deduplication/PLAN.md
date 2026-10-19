# Shared multilingual presentation

## Goal and scope

Preserve the current English/Spanish website while replacing per-language component copies with shared presentation and locale-owned data. UI changes should propagate once; adding a language should require configuration, translations, and content rather than copied templates.

- Repository: `C:\my-blog`; branch: `feat/minimalist-blog`.
- This plan follows the completed [minimalist blog plan](../minimalist-blog/PLAN.md). Commits `2268c91` and `8a35685` contain the accepted redesign and SEO work. The accepted footer fix and TODO cleanup are being committed alongside this plan before handoff; Git owns their final commit identity.
- In scope: shared components/layouts, typed dictionaries, locale configuration, reusable content/schema/query ownership, thin route entrypoints, generic registered-language routes, and contributor guidance for adding a language.
- Out of scope: redesign, translated-copy rewrites, framework upgrades, new languages, automatic translation, article translation pairing, article-aware switching, new hreflang behavior, real OG artwork, unrelated lint cleanup, pushes, and deployment.
- Overall acceptance: preserve current appearance, URLs, post bodies, dates, pagination, metadata, dark mode, sticky footer behavior, and existing analytics differences. English remains unprefixed; Spanish remains under `/es/`. Keep translated Markdown separate and preserve article slugs.
- The human approved this design and five slices, initially deferred implementation to a new session, then authorized starting with “Start working on the plan for multilanguage approach”.

## Relevant context

Original planning request:

> accepted, is there anything left? if not I would want to plan how can we have a better multilanguage apporach than the current one that makes every component to duplicate or is this apporach really necessary?

Selected scope:

> I want to deduplicate components and keep the content separated translated markdown file the final version should practically being able to match the current website but with a better codebase and less code to mantain, as well being easy to add new languages and spread changes if something updates instead of mantaining a component for each language

Approval and handoff instruction:

> Yes persist it commit the current work to clean the workspace then Ill start on another clean session

Current owners and constraints:

- `package.json`: Astro 3.2.3, Tailwind 3.3.3, existing MDX integration, pnpm 9.9.0. Native Astro i18n configuration was introduced in 3.5.0; this plan uses existing file-based routing rather than requiring an upgrade. Use version-compatible content APIs, including the current entry `.render()` method, not examples that require newer Astro versions.
- `src/content/config.ts`: `blog` and `blogES` register identical schemas. Each collection has 13 separate translated Markdown entries. Keep these folders, collection names, post bodies, and existing slugs; share the schema instead of migrating all content into a new collection.
- `src/config/config.json` and `configES.json`: duplicated site/author/features plus locale-specific descriptions, URL prefixes, language, and OG locale. `menu.json` and `menuES.json` duplicate navigation structure with translated labels and different external Website URLs. Preserve those external targets.
- Eleven component/layout pairs exist: Base, BlogPost, Posts, Header, Footer, FormattedDate, Pagination, LanguageIcon, FeaturedVideos, Hero, and HomePagination. Hero/HomePagination pairs currently have no source import consumers; confirm before removing them. FeaturedVideos is disabled by configuration but remains a supported feature; its two copies are identical and currently display the English heading.
- `src/layouts/Base.astro` and `BaseES.astro`: duplicated SEO, JSON-LD, theme controls, and page shell. Both have `getArticleSchema()` with an early undefined return. English has Google Tag Manager plus Google Analytics; Spanish has Google Analytics only. Do not accidentally enable, remove, or double-install analytics while merging the shell.
- `src/config/social-images.ts`: optional `en`/`es` artwork with path, alt, width, and height. It is empty pending resources. Registry-driven language support must not leave this as a separately hardcoded language list or emit placeholder images.
- `src/components/LanguageIcon.astro` and `LanguageIconES.astro`: the current one-click control links to the other language's homepage. No explicit article translation identity exists; do not guess counterpart slugs.
- `src/pages` and `src/pages/es`: paired homepage, archive, article, About, tag, and category routes. Current About copy is in separate Astro page bodies with a repeated technology grid. `src/layouts/Page.astro` and `Techicon.astro` are already shared.
- `src/pages/es/tags/[tag].astro` currently generates paths from English tags and filters Spanish posts. Current EN/ES taxonomy sets match (21 tags and nine categories each), so this does not presently require URL changes. Shared generation must use the selected locale's content instead of retaining the cross-locale coupling.
- Tag clouds intentionally choose from a random style-class list; preserve the style set and behavior rather than treating random class differences as parity failures.
- `src/pages/rss.xml.js`: existing English-only feed. Preserve it and the explicitly English RSS discovery links; creating per-language feeds is not part of this refactor. `src/pages/404.astro` is the accepted shared text-only error page with English/Spanish return links and noindex metadata.
- Known baseline limitations: three Base analytics lint errors (two unqualified `dataLayer` references and the English analytics iframe title). The legacy npm lockfile is already stale; pnpm and `pnpm-lock.yaml` are the active install approach. No test runner or dedicated typecheck script is configured. Do not turn this refactor into framework/checker setup or broad legacy cleanup.

Applicable instructions: follow the global AGENTS baseline. Before substantive implementation, use `code-quality`, `coding-conventions`, and its TypeScript/architecture references. When editing this plan or contributor instructions, apply `writing-for-agents`. The Capa installation's `references/planned-execution.md` owns execution/resume; this plan does not replace that procedure.

Documentation consulted during planning:

- https://docs.astro.build/en/recipes/i18n/ — shared UI dictionaries and locale/path helpers.
- https://docs.astro.build/en/guides/routing/ — static dynamic routes and pagination parameters; apply only APIs supported by installed Astro.

## Agreed design

- Keep one markup owner for each responsibility: Base, Header, Footer, BlogPost, Posts, FormattedDate, Pagination, and language controls. ThemeIcon, icons, Code, and other already-shared components remain shared.
- Establish one typed locale registry containing each language's prefix, display name, date/OG locale, content collection, localized defaults, and relevant feature/analytics differences. Keep common branding, author data, and site-wide settings shared. Reuse the repository's configuration ownership rather than scattering language conditionals across components.
- Store UI labels and accessibility strings in typed dictionaries. Maintain the current wording, including existing labels, rather than mixing copy corrections into the refactor. Missing required dictionary entries should be visible to maintainers, not silently hidden by arbitrary fallback text.
- Resolve locale at the route boundary and pass it explicitly through shared layouts/components. Central helpers own localized internal links and collection selection; individual components should not independently parse URLs or recreate prefix rules. Preserve legitimate external-link differences in locale data.
- Keep existing translated article files separate. Reuse one schema and typed locale-aware queries across the current collections. Views receive the matching entries and locale, preserving absence semantics for optional dates and OG images.
- English route entrypoints remain thin adapters. Non-default registered languages use generic `[lang]` entrypoints rather than one copied route tree per language. Generate only supported non-default language paths, while preserving every existing English/Spanish URL and pagination endpoint.
- Preserve the two-language homepage-switch behavior. The shared control owns supported-language navigation from the registry; adding a language must not require another icon/component variant or assume an article translation exists.
- Separate About's translated prose from shared page/technology presentation. Preserve its paragraphs, section order, metadata, and grid. Existing Markdown/MDX support may host translated long-form content where needed; no new rendering library is required.
- Preserve analytics placement/activation, client-side theme navigation, JSON-LD escaping and early-return semantics, real metadata absence, the shared 404, and the accepted full-height flex shell. Do not normalize previously distinct behavior merely because it was encoded in separate files.
- After final migration, adding a language requires its registry entry, complete UI dictionary, translated content/collection registration, and any localized About content. It must not require copying layout/components or adding a language-specific route tree. No third language is added in this plan.

Verification baseline: before each slice, attribute its actual starting worktree/index and capture the relevant current route/content/head output. Compare normalized text, links, dates, locale-specific metadata, and structure; account for existing random tag styles. Reuse the established headless-browser tooling when available. Check desktop/mobile short and long pages, locale switching, and theme behavior where affected. Use focused existing lint/format checks and purposeful runtime evidence; no routine production build, new test suite, or independent review has been authorized.

## Slices

### S1 — Shared navigation and footer

Status: complete

- Introduce the typed locale registry, UI dictionaries, and the localized-link helpers needed by navigation. Separate common site settings from the locale-owned values that these components consume.
- Consolidate Header, Footer, and language controls; wire both existing Base layouts to the shared components. The document metadata/layout consolidation stays in S2.
- Acceptance: both languages retain their current navigation labels, link destinations, current-page indication, external targets, footer text, language-homepage switching, responsive layout, and theme controls. Shared markup contains no per-language component copies for these responsibilities.
- Verification: compare English/Spanish navigation/footer DOM and destinations; exercise locale and theme controls through client-side navigation at narrow and desktop widths; verify the accepted sticky-footer layout on short pages. Focused checks on changed code; distinguish baseline analytics errors from new findings.
- Boundary: preserve accepted footer behavior and existing analytics/metadata in both document shells. Do not enable extra languages or change the switch to article-aware navigation.

Evidence (2026-10-19):

- Started from clean worktree/index at `1ae7005`. Added `src/config/locales.ts`, typed `src/config/ui.ts`, and `src/utils/localized-path.ts`. Shared Header/Footer consume common branding/features from `config.json` and locale-owned navigation/wording from the new data owners. Registry fields needed by later slices remain for those slices.
- Both Base layouts now pass explicit locales into shared Header/Footer. Removed HeaderES, FooterES, LanguageIconES, and their obsolete menu JSON files; no source references remain. ThemeIcon receives its unchanged accessible label from the dictionary; its client-side logic is unchanged. Shared language navigation selects the other registered locales and still links to homepages, not guessed article translations.
- Reused the running Astro server at port 4321 and headless Edge/CDP at port 9331. Before/after snapshots of home, About, tags, and categories in both languages at widths 390 and 1280 preserve header/footer text, link destinations/targets/rel/current-page indicators, language-control titles, and head metadata. Non-randomized pages retain exact header/footer geometry, including bottom placement on short category pages and normal flow on long homepages.
- Initial exact geometry comparison differed on the mobile English tag cloud (375 versus 390 px available width). Existing random font sizes in `src/pages/tags/index.astro` can change wrapping/scrollbars; tag-cloud geometry was excluded from strict equality, not repaired. Its text, navigation, and head comparisons still pass; taxonomy behavior remains untouched.
- Browser clicks at both widths confirm theme toggles once per click and persists through client-side About/language navigation in both directions. A window marker survived these transitions, distinguishing client-side swaps from full reloads.
- Focused ESLint and Prettier checks pass for changed components/new TypeScript files. A focused TypeScript 5.2.2 compiler check using project compiler options passes for registry, dictionaries, and path helper. `git diff --check` passes. Base layout lint reproduces exactly the three baseline analytics errors recorded above, with no new errors.
- Final attributable diff and new files inspected against S1 acceptance. No production build, full Astro typecheck, new repository tests, or independent review performed. Human acceptance remains pending; S2 has not started. Temporary browser-check script and snapshots are under `C:\Users\ftaca\AppData\Local\Temp\opencode\multilingual-s1-*` and are not repository deliverables.
- Human accepted S1 and authorized its commit plus continuation with “continue and commit the changes”.

### S2 — Shared document and article layouts

Status: complete
Depends on: S1's locale contract and shared shell components.

- Consolidate Base, BlogPost, and FormattedDate using explicit locale props. Migrate their consumers; any transitional adapter must be a pass-through rather than another markup/metadata owner and must be removed by final migration.
- Keep the article metadata contract, named early-return schema function, locale-specific descriptions/OG settings, optional artwork, and analytics differences in the shared owner/configuration.
- Acceptance: one document template and one article template render both languages; current titles, descriptions, canonical URLs, article dates, JSON-LD, author metadata, body formatting, and content images match. No schema appears on non-article pages; no artwork appears when unconfigured.
- Verification: compare rendered heads and parsed JSON-LD on both homepages, archive pages, About, 404, and representative English/Spanish articles. Verify relative/absolute canonical overrides, absence of optional dates/images, and JSON-LD escaping where feasible using existing tools. Check client-side home/article/language navigation for stale metadata, theme handlers, or doubled analytics. Recheck footer geometry on short and long pages.
- Boundary: retain English GTM+GA versus Spanish GA-only behavior. No analytics migration or broad lint repair. Recommend a focused review if unresolved compatibility/security uncertainty remains in the actual candidate; do not dispatch without approval.

Evidence (2026-10-19):

- S1 accepted and committed as `c5fab63`; S2 started from the resulting clean worktree/index. Base, BlogPost, and FormattedDate now require an explicit locale. All route consumers pass their existing language; removed ES variants have no remaining source references. Translated article files, content schemas, listing/pagination owners, and route generation remain unchanged for later slices.
- Registry now owns document descriptions/OG locales (sourced from existing configuration), date locales, favicon relation differences, and GTM activation. RSS discovery wording comes from typed UI dictionaries; both languages still advertise the English feed. Shared author/branding/features remain sourced from `config.json`; final legacy config cleanup remains for later migration.
- GTM's unchanged loader moved to `src/scripts/google-tag-manager.js`, referenced as a conditional external module via Vite's `?url` import. This preserves English-only emission and module-once execution instead of relying on Astro's processed-script hoisting. GA/Partytown initialization is unchanged and emitted once in each language. The shared noscript iframe remains English-only. Installed Astro 3.2.3 router inspection confirms it strips noscript elements during client-side swaps; verification accounts for that existing behavior.
- Before/after browser snapshots cover home, About, archive, and two representative articles per language, plus shared 404, at widths 390 and 1280 (22 snapshots). Head metadata, parsed JSON-LD, document language, normalized main text, publication dates, body images, internal links, navigation/footer text, and exact shell geometry match. Schema and optional artwork remain absent on ordinary/unconfigured pages; short/long-page footer behavior is unchanged.
- Browser clicks at both widths preserve single-toggle theme behavior across About and language changes. Additional home/article/language navigation from direct EN and direct ES loads confirms current article metadata, removal of stale schema on homepages, one GA tag, English-only GTM module/noscript SSR emission, and one GTM initialization across repeated language changes. This verifies emitted tags/loader initialization, not analytics delivery to external services.
- Temporary dynamic routes exercised relative/absolute canonical overrides, modified-date presence/absence, configured/unconfigured artwork, no article schema on ordinary pages, and a closing-script payload in title/description. Canonicals and schema values matched; JSON-LD escaped every `<`, parsed correctly, and executed no injected script. Fixtures were removed, with their route returning 404. Subsequent final-candidate parity/theme/analytics checks pass; fixture evidence is reused for the unchanged metadata logic.
- Focused ESLint passes for changed non-Base components, registry/dictionaries, GTM loader, and route entrypoints. Shared Base reports only the two existing analytics issue kinds (unqualified `dataLayer`, iframe title); the third former report disappeared with the duplicate BaseES owner. Prettier checks pass for substantive changed owners; mechanical route edits retain surrounding formatting. Focused TypeScript 5.2.2 checks pass for registry/dictionaries/link helper. Final diff/new files inspected; `git diff --check` passes.
- No production build, full Astro typecheck, independent review, or maintained test suite added/run. Production asset emission and downstream analytics delivery are not runtime-proven. Browser script/snapshots remain outside the repository at `C:\Users\ftaca\AppData\Local\Temp\opencode\multilingual-s1-check.mjs` and `multilingual-s2-{before,after}.json`. S2 remains uncommitted and awaits human acceptance; S3 has not started.
- Human accepted S2 and authorized its commit plus continuation with “commit and continue”.

### S3 — Shared post discovery and pagination

Status: complete
Depends on: S2's shared locale-aware layouts.

- Consolidate Posts and Pagination, homepage/archive presentation, and the content queries they need. Register existing blog collections against a shared schema; select collections through locale configuration instead of copied queries.
- Acceptance: each homepage still shows all 13 corresponding posts, newest first and grouped by year; archives retain six-entry pages and all current pagination URLs. Titles, locale-specific dates, links, and pagination labels are preserved. English and Spanish entries never mix.
- Verification: compare every homepage/archive link and publication order with the slice baseline; exercise archive boundaries (pages 1, 2, and 3), locale-specific labels, and representative article links. Check shared types/schema and focused lint/format output; verify both viewport sizes.

Evidence (2026-10-19):

- S2 accepted and committed as `4c3c6ef`; S3 started from the resulting clean worktree/index. Added locale-to-collection registration and `src/utils/posts.ts` as the shared newest-first query/pagination owner. The `Post` type derives from the registered collections and is reused by article/listing views. Both existing collections now register one unchanged schema; Markdown files and slugs remain untouched.
- Shared Home/BlogListing views own homepage/archive presentation. Existing route files are thin locale adapters; Posts and Pagination now take explicit locales. Removed PostsES and PaginationES with no remaining source references. Dictionary entries preserve Blog, Prev Page/Next Page, and Anterior/Siguiente wording. Listing dates retain the original locale code and UTC grouping/formatting; six-entry page size and generated previous/next URLs remain unchanged.
- Captured before/after browser snapshots of both homepages and all three archive pages per language at widths 390 and 1280 (16 snapshots). Exact comparisons pass for post titles/order/dates, year groups, every main link, pagination labels/destinations/active classes, head metadata, document language, navigation/footer text, and shell geometry.
- Runtime assertions confirm 13 posts per homepage, newest-first ordering, and archive partitions of 6/6/1 exactly matching the corresponding homepage without cross-language links. Client-side pagination through pages 1→2→3→2→1 passes at both widths/languages, retains the window marker, and highlights the correct page. Representative article clicks retain the matching title/language. Existing About/language/theme browser checks also pass at both widths.
- Focused TypeScript 5.2.2 checks pass with generated content types included for the registry, dictionaries, shared schema, post query/pagination helpers, and link helper. Focused ESLint passes for all changed owners and route entrypoints. Prettier checks pass for all changed/new files (literal bracketed route paths checked through the Prettier API after CLI glob handling skipped them). `git diff --check` passes. Complete attributable diff and new files inspected against S3 acceptance.
- Metadata/theme/analytics implementation is unchanged from accepted S2; its applicable edge-case evidence is reused rather than re-running the temporary fixtures. No production build, full Astro typecheck, independent review, or maintained tests added/run. Browser script/snapshots remain outside the repository at `C:\Users\ftaca\AppData\Local\Temp\opencode\multilingual-s1-check.mjs` and `multilingual-s3-{before,after}.json`. S3 remains uncommitted and awaits human acceptance; S4 has not started.
- Human approved S3's commit and selected `BlogListing.astro` instead of `Archive.astro`, then confirmed “Yes do the changes and then commit”. Renamed the shared view and both route imports without behavior changes. Re-ran all 16 browser parity snapshots, pagination/article navigation and theme checks successfully; focused rename lint/format checks and diff checks pass. No stale Archive source references remain. Prior unchanged schema/type evidence is reused. S3 is accepted with this requested rename; S4 has not started.

### S4 — Shared tags and categories

Status: complete
Depends on: S3's locale-aware content ownership and shared discovery components.

- Consolidate tag/category index and detail views and their query/generation logic. Use each locale's own collection for path generation and filtering, including the existing Spanish tag-generation coupling.
- Acceptance: existing taxonomy labels, paths, link destinations, post membership, tag-cloud styles, and category presentation remain available in both languages. No repeated language-specific taxonomy view or query implementation remains.
- Verification: inventory all current EN/ES taxonomy URLs before edits, then compare generated route membership and rendered post links for each tag/category. Confirm no cross-language post links. Compare structural/tag-style behavior without expecting identical random class assignments. Use focused checks for the affected query and view contracts.
- Approved visual refinement: human requested monochrome styling and clarified “Yes tags I mean”. Replace the colorful tag-cloud palette with neutral black/gray shades in light mode and white/gray shades in dark mode; preserve varied text sizes, random selection, content, links, and category presentation. This supersedes color parity only.

Evidence (2026-10-19):

- S3 is committed as `02515f3`; S4 started from a clean worktree/index. Added shared TaxonomyIndex/TaxonomyPosts views and typed `src/utils/taxonomy.ts` for term discovery, path generation, and filtering. All eight existing taxonomy routes are thin locale/kind adapters. UI dictionaries retain exact heading/tooltip wording, including the existing English category tooltips in Spanish.
- Added `getPostEntries()` to the existing post-query owner to expose validated entries in collection order. Taxonomy indices and detail membership preserve that original order rather than using the homepage's newest-first query. Term discovery deduplicates names in first-seen order; original slug/deslugify semantics and negative-ID exclusion remain. The removed legacy draft check addressed no schema-valid state: the unchanged content schema has no draft field. Removed the obsolete, broadly lint-disabled `getAllTags.ts` after migrating every caller and confirming its standalone MDX helper had no consumers.
- Spanish tag generation now selects Spanish entries through the locale registry, eliminating the English-collection coupling. The existing EN/ES taxonomy URL sets still match their baselines: 21 tag and nine category detail URLs per language plus four indices (64 distinct URLs). Content files, schemas, post-list sort/pagination behavior, and route-tree structure remain unchanged.
- Captured before/after browser snapshots for every taxonomy URL at widths 390 and 1280 (128 comparisons). Route inventory, normalized main text/headings, heading locale, tooltip titles, every term/post link, exact post membership and order, document language, head metadata, and header/footer text match. Non-randomized shell geometry also matches; tag-cloud geometry remains excluded because of the established random font sizes.
- Browser checks retain the original eight tag style classes, category presentation, and client-side index→detail→article navigation for both taxonomy kinds/languages at both widths. Window markers survive those transitions; resulting articles retain the correct language and JSON-LD. Existing About/language/theme checks pass at both widths. No cross-language detail-page post links appear in any snapshot.
- Focused TypeScript 5.2.2 checks pass for taxonomy/query contracts, registry/dictionaries, shared schema, and generated content types. Focused ESLint passes for all changed/new source owners and taxonomy routes. Prettier API checks pass for every changed/new source file after CLI directory discovery skipped the route files. Complete attributable diff/new files inspected against S4 acceptance; `git diff --check` passes, and no references to removed helper exports remain.
- Prior unchanged metadata/security/analytics evidence from accepted S2 is reused. No production build, full Astro typecheck, independent review, or maintained tests added/run. Temporary browser script and `multilingual-s4-{before,after}.json` snapshots remain under `C:\Users\ftaca\AppData\Local\Temp\opencode`, not in the repository. S4 remains uncommitted and awaits human acceptance; S5 has not started.
- Requested tag refinement replaces chromatic classes with neutral-600 through neutral-900 in light mode and neutral-100 through neutral-400 in dark mode, plus black/white hover transitions. The eight original size choices and random selection remain intact; categories and all queries are unchanged. Focused browser checks cover EN/ES tags at widths 390/1280 in both themes: all 21 links match the baseline, varied sizes remain, computed text colors are neutral RGB, hover resolves to black/white, and minimum measured text contrast is 7.02:1. Inspected desktop screenshots in both themes (`tags-monochrome-{light,dark}.png` in the approved temporary directory). Focused ESLint/Prettier and final diff checks pass. Prior unchanged membership/navigation evidence is reused; the earlier original-color assertion is superseded by these theme-aware checks, not claimed as current proof. Adjusted S4 awaits acceptance; no commit or S5 execution authorized.
- Human accepted all S4 changes, including monochrome tags, and authorized committing them with “commit all this changes are approved”. No continuation to S5 or push requested.

### S5 — Registry-driven language expansion

Status: pending
Depends on: S1–S4's shared components and locale-aware query/view contracts.

- Replace the copied non-default-language route tree with generic registered-language routes; keep thin English route entrypoints. Consolidate About presentation with separate translated content and the shared technology grid.
- Remove remaining obsolete locale-specific variants/adapters and confirmed unused Hero/HomePagination pairs after checking source references. Preserve existing assets and supported disabled-feature behavior, including FeaturedVideos, through a shared implementation.
- Document the language-addition procedure: registry, dictionary, content/collection registration, localized content, and verification. Extend optional social-image configuration from the locale contract rather than maintaining a separate hardcoded language list.
- Acceptance: current route/content/metadata parity holds end to end; unsupported language prefixes do not produce invented pages; no language-specific component/template or route-tree copy is required to register another language. About copy/order/grid remains intact; no unused compatibility wrappers or ES presentation copies remain.
- Verification: compare the complete EN/ES route inventory and rendered text/links/head data to the established baseline, including pagination, taxonomy, 404, RSS discovery, and articles with body images. Exercise navigation and theme controls after language changes, verify short/long-page footer placement, and inspect import references for removed variants. Assess the documented language-addition path against actual registry/schema/route ownership without publishing a fictitious language. Use focused checks and disclose unavailable production proof.
- Boundary: adding real languages, translation-pair models, hreflang expansion, translated feeds, artwork integration, and framework upgrades remain separate work. Current behavior differences and known baseline limitations are not permission for unrelated changes.

## Current progress

- Current slice: S5 (pending; not started).
- Next action: await continuation to capture the full-site baseline and execute S5.
