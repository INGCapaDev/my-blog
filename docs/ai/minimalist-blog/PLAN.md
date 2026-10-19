# Minimalist blog

## Goal and scope

Redesign the blog as a text-first publication inspired by https://antfu.me/posts.
Repository: `C:\my-blog`; branch: `feat/minimalist-blog`, created from `main` at `329777a`.
Preserve English and Spanish content, dark mode, existing article/archive URLs, and images inside articles. Keep existing image files. No framework upgrades, pushes, or deployments are authorized. The human explicitly authorized committing the accepted S1/S2 changes with "Yes commit and continue" and subsequently authorized committing accepted S3 with "for now commit the changes and we move on".

## Relevant context

Original request:

> Create a new branch on main to make more minimalist my blog, I want something like https://antfu.me/posts minalist blog kind of index with the titles for discovering new post, removing post covers support and leaving a kind of only blog content approach,

Later requirements:

> Explore what fonts are the https://antfu.me/ website using for content, titles, navmenus, etc. and how can we match it on this website

> how's our current fonting system, what would change show me comparison betwen both, and what approach do we use for the current font to see if we can keep using the same project approach for the new ones

> Lets go with fontsource approach like the nutriflex/landing project on the workprojects folder.
> explore as well if we can improve some SEO, metadata based on the landing nutriflex references and ai harness landing as well, I'll provide the opengraph resources later. limit as well thereading width like antfu.

S3 adjustment requested by the human:

> Make the articleSchema on Base.astro a function. on the top when getting with undefined and use early return.
>
> same for ES and EN version.
>
> Change the 404 page for a more minimalist style a like, you can as well explore antfu for this approach

The human approved the updated three-step plan and execution of step 1 with "Yes".

- `src/layouts/Base.astro` and `BaseES.astro` own the document shell and duplicated metadata. They currently show large author heroes on non-article pages.
- `src/layouts/Posts.astro` and `PostsES.astro` own cover cards and truncate incoming collections to six entries. Homepages and paginated archive routes use them.
- `src/layouts/BlogPost.astro` and `BlogPostES.astro` own article covers and prose styling; `src/content/config.ts` and `scripts/newpost.cjs` own cover metadata support.
- `src/styles/global.css` and `tailwind.config.cjs` own typography. Tailwind v3 supplies system fonts; existing Atkinson assets are unused. Ordinary prose lists currently have a monospace override.
- Fontsource reference: `C:\Users\ftaca\WorkProjects\nutriflex\landing\src\styles\global.css`, package-based imports; its Tailwind v4 syntax is not applicable here.
- Metadata references: Nutriflex's `src/config/metadata.json` and `src/layouts/main-layout.astro`; `C:\Users\ftaca\DevProjects\ai-harness-landing\src/config/metadata.ts` and `src/layouts/main-layout.astro` for canonical/social metadata.
- Applicable global AGENTS and code-quality/coding-conventions govern implementation; writing-for-agents applies when updating this plan.

## Agreed design

- Compact navigation, no large author hero, and title/date lists grouped by year, newest first. Homepages show every post; paginated archive URLs remain available.
- Use Fontsource-packaged Inter Variable for prose and UI, DM Mono for code, with system fallbacks. Keep shared CSS and Tailwind v3 as the font owners. Body text is 16px with 1.75 line-height; index titles are 18px regular with subtle dates.
- Limit article reading content and the post index to 65ch with mobile padding and no forced horizontal page overflow.
- Remove all post-cover rendering and metadata support in S2; preserve article-body images and existing assets.
- Improve canonical resolution, localized social metadata, article type/dates, BlogPosting JSON-LD, and RSS discovery in S3. Remove obsolete template metadata.
- Current OG generation uses literal Cloudinary placeholders. Replace broken output with optional image configuration; artwork, alt text, and dimensions will be supplied later. No invented assets or dimensions. Article covers and social images remain separate concepts.
- Do not infer translation pairs from different-language post slugs. No automatic post-level hreflang without an explicit pairing model.
- S3 refinement: use a named article-schema function with an early `undefined` return on non-article pages in both Base layouts. Replace the 404 illustration with a text-only error message and standard links to the English/Spanish indexes, retaining the shared shell and noindex behavior.

## Slices

### S1 — Minimalist layout and readable typography

Status: complete

- Replace index cards with year-grouped title/date links; show all posts on each homepage and retain archive pagination.
- Introduce Fontsource imports and Tailwind font configuration, remove the monospace list override, compact the header, remove the large hero from the shell, and enforce the 65ch content width.
- Acceptance: both homepages expose all posts in descending date order; English/Spanish routes and theme controls remain usable; articles remain readable on narrow screens and desktop; article cover rendering remains supported until S2.
- Verification: focused lint/format checks and dev-server observations of both homepages, archive pages, and representative articles; inspect loaded font CSS and rendered links. Use browser viewport/theme checks if browser tooling is available; disclose unavailable proof. No routine production build or new tests.

Evidence:

- Implemented on `feat/minimalist-blog`; worktree was clean before this slice. Only this slice and its plan are present in the attributable diff. Article cover rendering, content schemas/frontmatter, SEO, and existing assets remain unchanged.
- Fontsource Inter Variable and DM Mono 5.3.0 installed with pnpm; `package.json` and `pnpm-lock.yaml` updated. Legacy `package-lock.json` was already out of sync with the manifest and was not regenerated.
- Dev preview: `http://127.0.0.1:4322/` (4321 was occupied by a pre-existing server). No production build or new test files.
- Headless Edge checks at 390px and 1280px: English/Spanish homepages, archive entry pages, and Storybook/Tailwind articles render without horizontal page overflow. Desktop reading content is approximately 656px (65ch with Inter), excluding padding. Article prose computes to 16px/28px; code computes to DM Mono. Inter's WOFF2 request returns 200; index titles compute to 18px/400.
- Both homepages contain all 13 corresponding content entries in descending publication order, grouped into 2025/2024/2023. All 26 article links return 200. Both locales' archive pages 2 and 3, About, Tags, and Categories return 200.
- Theme toggles and local-storage state work across both viewport sizes and both languages. Client-side navigation from the Spanish index to an article retains the theme and the toggle still works after the swap. Stable light/mobile and dark/desktop screenshots visually inspected; stored outside the repository in the approved temporary folder as `blog-mobile.png` and `blog-desktop.png`.
- Focused ESLint passes for changed components, post layouts, homepages, and Tailwind configuration. The two Base layouts retain three pre-existing lint errors: unqualified `dataLayer` in each, plus missing title on the English analytics iframe. Running ESLint against their original HEAD contents reproduced those same errors. No new lint errors observed.
- Targeted Prettier checks and `git diff --check` pass. Attributable diff reconciled with S1 scope. No independent review requested or performed; production-build behavior is not verified.
- Human accepted S1 and authorized S2 with "continue". Accepted S1/S2 changes were subsequently committed together as `2268c91` under explicit human authorization.

### S2 — Remove post-cover support

Status: complete

- Remove article cover rendering, schema/frontmatter cover fields, template defaults, and obsolete cover-specific props/types. Preserve article-body images, social metadata, and image files.
- Acceptance: no post-cover support remains in source/content generation; existing articles still render without covers in both languages.
- Verification: targeted source/content search, lint for changed code, and representative English/Spanish article responses including body-image preservation.

Evidence:

- Removed cover rendering and cover-to-Base props from both article layouts, the unused Base image prop declarations, both collection schema fields, the taxonomy Post field, and the new-post template default. Removed the cover frontmatter line from all 26 articles.
- Pre-slice source/content snapshot and public asset hashes captured outside the repository in the approved temporary folder (`minimalist-blog-s2-baseline.json`), preserving attribution against accepted but uncommitted S1 work.
- Source/template search finds no remaining `heroImage` or `blog-placeholder` references. No public assets were deleted or modified; hashes for all 16 public files match the pre-slice snapshot.
- All 26 article sources match their pre-slice content after removing only the cover metadata and normalizing line endings/final newlines. The patch added missing final newlines to 13 files; article text and body-image references otherwise remain unchanged.
- Both homepages and all 26 linked article routes return 200 on the existing port-4322 preview. Rendered article markup contains no cover placeholder, cover figure, or cover-sized image. Each locale retains its Storybook article body-image tag and the existing author avatar. An initial whole-document assertion matched stale Tailwind dev CSS rather than rendered cover markup; the corrected article-scoped checks pass.
- Focused ESLint passes for both article layouts, collection configuration, taxonomy utility, and new-post script. The unchanged analytics lint limitations from S1 remain applicable to Base layouts.
- Prettier checks pass for the changed Astro layouts and plan. The collection configuration, taxonomy utility, and new-post script already failed formatting checks in the pre-slice snapshot and remain equally noncompliant; left unformatted to avoid unrelated churn. `git diff --check` passes.
- Candidate reconciled with S2 scope; SEO and existing S1 layout behavior were preserved. No production build, new tests, or independent review performed.
- Human accepted S2, authorized committing the accepted S1/S2 changes, and authorized S3 with "Yes commit and continue".
- Accepted S1/S2 changes committed as `2268c91` (`feat(blog): adopt minimalist typography and remove post covers`). S3 started from a clean worktree. No push was requested or performed.

### S3 — Accurate SEO and optional social artwork

Status: complete

- Apply the agreed metadata improvements through existing document/layout owners, adapted for bilingual blog pages and articles.
- Acceptance: canonical and social URLs resolve absolutely; article pages expose correct type/dates and valid BlogPosting JSON-LD; English/Spanish defaults are localized; RSS is discoverable; no placeholder OG image URLs are emitted. Image metadata is optional until resources arrive.
- Verification: inspect rendered head and parsed structured data on both homepages, representative articles, an archive page, and the noindex page; check canonical overrides and absence of image tags without assets. Focused lint/format checks.

Evidence:

- Existing English/Spanish Base layouts now resolve canonicals and social URLs against the production site origin, honor canonical overrides, expose localized site metadata, distinguish articles from websites, and advertise the existing English RSS feed explicitly as English in both locales. Removed obsolete template-identification metadata and the unused placeholder Cloudinary helper.
- Article layouts pass publication/modification dates. The Base props contract requires publication dates for article pages. Article metadata and BlogPosting JSON-LD use actual dates, titles, descriptions, language, author, and canonical URLs; absent modification dates remain absent. JSON-LD escapes `<` before script insertion.
- `src/config/social-images.ts` owns optional English/Spanish artwork defaults and the required path/alt/width/height shape; Base props also allow page-specific artwork. Config remains empty pending human-supplied resources. No image tags, invented artwork, or dimensions are emitted; Twitter cards use `summary` without artwork.
- The existing 404 page now uses Base with `noindex`, supplying a real document/head and retaining its existing illustration and controls. Its content height was adjusted to fit inside the shared shell.
- Rendered-head checks pass on 32 routes: both homepages, English/Spanish archive page 2, `/404`, an unknown URL, and all 26 articles. Canonical and OG URLs agree, locales are `en_US`/`es_MX`, all article JSON-LD parses with the expected content/date/language, and no image metadata or placeholder URLs appear. Missing-page responses are HTTP 404 with `noindex,nofollow`. RSS endpoint returns 200 with RSS content.
- Ten in-memory probes execute each layout's actual frontmatter using existing esbuild: query-free default canonicals, relative and absolute canonical overrides, modification dates, per-page and locale-default artwork URL resolution, and script-termination escaping all pass. Initial probe attempts lacked Node VM globals (`module` and `URL`); corrected the probe context without source changes. No temporary test files, assets, or debug routes were added.
- Headless Edge confirms the 404 page has no horizontal overflow at 390px and carries its noindex metadata. Client-side home-to-article navigation installs one article schema with a matching canonical; returning home removes the schema and restores website metadata.
- Focused lint passes for the new social-image configuration and both article layouts. The Base layouts retain S1's three analytics lint errors. The 404 page has three pre-existing anchor-accessibility lint errors, reproduced from HEAD before this slice; unchanged by the metadata work. No new lint errors observed. All changed-file Prettier checks and `git diff --check` pass.
- Diff reconciled against the committed S1/S2 baseline: existing article content, assets, typography, and index behavior are unchanged. No independent review, production build, production crawler validation, or real-image social-preview validation performed. Optional artwork data/serialization is probed and tag markup inspected; real-artwork previews remain pending resources. SEO changes are uncommitted pending human acceptance.

Requested-adjustment evidence:

- Refactored both Base layouts to `getArticleSchema()`, returning `undefined` immediately on non-article pages and otherwise returning the existing schema. All schema fields and serialization remain unchanged.
- Explored antfu's published source at `https://github.com/antfu/antfu.me/blob/main/pages/%5B...404%5D.md`: its error content is simply a 404 heading and a short friendly sentence. The live HTTP fallback returned homepage HTML rather than reliable error-page markup, so source informed the text-only approach.
- Replaced the 404 illustration/history action with restrained text, whitespace, and ordinary links to `/` and `/es/`. Retained the shared document shell, noindex metadata, fonts, and dark mode. Removing the non-semantic history anchor also removes the three prior 404 lint errors.
- Captured the pre-adjustment files, rendered schema strings, and actual Git index in the approved temporary folder (`minimalist-blog-s3-adjustment.json`). Existing staged SEO changes were preserved exactly; these adjustments remain unstaged. No commit was made for this request.
- Before/after HTTP comparison on both homepages and all 26 articles confirms byte-identical JSON-LD output, including absence on non-article pages. Isolated strict TypeScript checks using the installed compiler pass for both layouts' actual frontmatter; this is not a full-project Astro typecheck.
- `/404` and an unknown path still return HTTP 404 with noindex metadata; main content contains no images, SVGs, or click handlers and exposes both working return links. Headless Edge checks at 390px/light and 1280px/dark show no horizontal overflow; screenshots visually inspected. The Spanish link successfully navigates to the Spanish index through the client router.
- 404 ESLint, changed-file Prettier checks, and `git diff --check` pass. The three previously evidenced Base analytics lint errors remain unchanged. Other unchanged S3 evidence above is reused; no independent review or build performed.
- Human accepted revised S3 and authorized committing it: "Lets keep the footer always on the bottom of the screen fix this on a later slice, for now commit the changes and we move on". Footer positioning is explicitly deferred in the repository's `TODO.md`, outside this completed plan; no footer implementation was added. Real social artwork remains pending human-provided resources.

## Current progress

- Current slice: none; S1, S2, and S3 are human-accepted and complete.
- Next action: await authorization/resources for deferred footer implementation or social-artwork integration; no further implementation is authorized by this completed plan.
