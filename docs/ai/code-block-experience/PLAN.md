# Blog code block experience

## Goal and scope
Use Vitesse Light in light mode and Kanagawa Dragon in dark mode for Markdown and MDX code highlighting, then provide automatic accessible copying on all blog posts without editing post content. Preserve existing user edits in Code.astro and src/config/ui.ts and the separate About typography change.

## Relevant context
- User request: "Use kanagawa dragon for the shiki code rendering instead of the current one, and add the code copy experience at an scalable not invasive way to do it, is better to modify the blog post manually or to do it by default on all posts?"
- Approved proposal: configure the theme first, then implement copying as a separate outcome. Authorization: "Do it".
- Refinement: "In light mode use Vitesse light". User approved generating both palettes at build time and switching with CSS: "Yes, Im still not seing the copy button on the code blocks".
- Superseding refinement: user rejected the custom highlighting approach and approved removing it and upgrading necessary dependencies to use native Astro/Shiki dual-theme configuration: "Yes do it that way".
- astro.config.mjs owns Markdown and MDX highlighting; Astro 3 and Shiki 0.14 require a compatible local theme.
- src/layouts/BlogPost.astro renders posts; its MDX component override does not wrap ordinary Markdown code fences.
- Follow global AGENTS, applicable quality/conventions, and the installed planned-execution procedure.

## Agreed design
- Use native Astro/Shiki bundled theme names via shikiConfig.themes with Vitesse Light and Kanagawa Dragon. Upgrade the necessary compatible framework/integration dependencies; remove the custom plugin and local theme artifacts introduced by this task.
- Generate palettes at build time through native Shiki and switch with CSS using the existing site dark class; no client-side highlighting.
- Apply copying automatically at the blog layout boundary, scoped to article fenced code blocks. Preserve plain inline code and unrelated pre elements.
- Use keyboard-accessible localized controls and report successful copying only after clipboard success. No new browser dependency or post conversion.

## Slices
### S1 — Light/dark code highlighting
Status: complete
- Configure both palettes for both rendering paths, with source/license provenance as applicable.
- Acceptance: Markdown and MDX use Vitesse Light in light mode and actual Kanagawa Dragon in dark mode using native configuration; compatible dependency/config migrations preserve existing behavior and unrelated edits remain unchanged.
- Verification: exercise installed highlighting and both processors, inspect theme-switch CSS and config integration; no routine full build.
Evidence:
- Initial local Kanagawa Dragon configuration implemented; worker reported installed Shiki, Markdown/MDX processing and config-loading checks passed. Human acceptance remains pending; dual-theme refinement is authorized.
- Custom dual-theme implementation is superseded and must be removed. Its worker found the existing MDX pre override discards highlighting attributes; native integration must address this seam without losing prior user edits.
- Native configuration now uses Astro 4.16.19, MDX 3.1.9, Tailwind integration 5.1.5 and vite-plugin-pwa 0.17.5 with the pnpm lockfile updated. Custom plugin and local theme artifacts removed. Code.astro forwards pre attributes; existing copy behavior is unchanged.
- Parent verification: installed native Markdown processor generated light #ffffff and dark #181616 backgrounds and dual per-token palettes. Initial verification script failed on Windows file URL conversion; corrected script passed.
- Parent dev HTTP smoke: home, English design-system post (19 dual-theme blocks), English/Spanish About, tags and categories all returned 200. Server stopped after checks. No browser visual/toggle/clipboard proof and no full build. MDX About routes render, but contain no fenced blocks; fenced MDX end-to-end coverage remains limited.
- git diff --check passed. Prettier passed config/package/global CSS; existing compact Code.astro markup still reports formatting mismatch. No independent review dispatched. Existing Squoosh deprecation and outdated Browserslist data warnings remain. Legacy package-lock.json remains unchanged; pnpm is declared project package manager.
- Human accepted S1 and explicitly authorized its commit and continuation to S2: "Yes commit this changes and proceed with the other ones".

### S2 — Automatic code copying
Status: pending
- Add layout-owned copy enhancement for Markdown and MDX, including localized accessible feedback and failure handling.
- Acceptance: both design-system language versions receive copying without content edits; inline code is untouched; initialization is scoped and repeat-safe.
- Verification: focused rendering/interaction evidence for success and failure and inspection of integration with existing MDX behavior.

## Current progress
- Current slice: S2.
- Next action: Commit accepted S1, then implement and verify automatic copying and stop for human acceptance.
