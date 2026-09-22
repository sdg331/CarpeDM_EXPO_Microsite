# 4-Fit MirrorTing EXPO Microsite — repository instructions

## Purpose and context
Build the official one-page exhibition introduction to 4-Fit MirrorTing: a physical AI Smart Mirror and companion ID Card Kiosk. It is an exhibition / portfolio story, not a SaaS application. Inspect the existing checkout and working tree before changes. Preserve useful user work and avoid unnecessary rewrites or renaming.

Before substantial changes, read in order:
1. `docs/product.md` — authority for product facts and unconfirmed information.
2. `docs/design.md` — authority for visual work.
3. `docs/content.md` — authority for public wording.
4. `docs/architecture.md` — authority for technical structure.
5. `docs/qa.md` — verification checklist and recorded results.

Consult `docs/decisions.md` before reversing a decision. Explain conflicts, choose a justified alternative, and update the relevant documents together with the implementation.

## Engineering and design
- Use Vite, React, TypeScript, semantic HTML, and native CSS. Runtime dependencies should stay limited to React and React DOM unless a concrete need is explained.
- Keep components meaningful and small; use typed content data and CSS variables. Do not add state management, animation frameworks, UI libraries, WebGL, or routing without need.
- Follow the restrained near-black editorial system: physical objects, large type, open spacing, thin rules. No neon, AI orbs, SaaS dashboards, fake terminals, repetitive rounded cards, or copied reference assets.
- Korean is the primary language. Keep public copy and `docs/content.md` synchronized when messaging changes.
- Preserve keyboard navigation, visible focus, readable contrast, reduced-motion support, and complete content without reveal effects. Design specifically for narrow mobile screens.
- Assets must work locally. Missing or failed product images must show the intentional concept silhouette, not a broken image. Never present a concept illustration as project photography.

## Truth and scope
- Hardware supplied by the project owner is confirmed context, not proof that device integration or AI capabilities are complete.
- Never promote TODOs to facts without evidence. Do not invent metrics, latency, recognition accuracy, trials, awards, partnerships, dates, location details, or capabilities.
- This repository presents the intended experience. It does not implement identity handling, NFC, cameras, AI inference, or hardware control. Do not add simulated functionality that suggests otherwise.
- Keep exact hardware models in the technical disclosure, not the visitor introduction.

## Safety and verification
- Never commit secrets, `.env` files, credentials, private keys, OS junk, editor scratch files, dependencies, or build output. Check `.gitignore` when adding tooling.
- Do not push without an explicit request, rewrite Git history, or delete unrelated user work.
- After meaningful code changes, install dependencies if needed and run `npm run lint`, `npm run typecheck`, and `npm run build`. Resolve errors before declaring completion.
- For visual or interaction changes, check representative 360, 390, 768, 1024, 1280, and 1440 px widths, keyboard navigation, reduced motion, media fallback, console errors, and internal links using available browser tools. Record actual checks and distinguish limitations.

## Definition of done
All requested sections are complete, mobile layouts work, wording is truthful, images have reliable fallbacks, checks pass, and product/design/content/architecture/QA documentation reflects the implementation. Report files changed, design decisions, commands actually run, outcomes, placeholders, and remaining TODOs. Do not claim unrun checks passed.
