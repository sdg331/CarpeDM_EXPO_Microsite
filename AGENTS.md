# 4-Fit MirrorTing EXPO Microsite — repository instructions

## Purpose and context
Build the official multi-page exhibition introduction to 4-Fit MirrorTing: a physical AI Smart Mirror and companion ID Card Kiosk. The public entry is a compact digital business card for the project and CarpeDM, leading to the exhibition / portfolio story. It is not a SaaS landing page. Keep the identity, purpose and primary links visible without a long scroll; the sample operations dashboard is secondary. Inspect the existing checkout and working tree before changes. Preserve useful user work and avoid unnecessary rewrites or renaming.

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
- Follow the owner-approved light-glass implementation and `docs/light-glass-design-system.md`: a bright silver canvas, dark readable type, stable white reading surfaces and restrained glass navigation. Home remains one compact frosted digital project card. The linked sample dashboard uses the same light palette. Detail pages use short descriptive headings and optional depth. Keep local implementation, browser verification and public deployment status distinct in `docs/qa.md`. Do not lead with an operations dashboard, repeated marketing sections, neon, AI orbs, fake terminals or copied reference assets.
- Short screens must still explain the purpose, how to read/use the page and what evidence supports the work. Keep basic rationale and design criteria visible; use optional depth for long specifications. Preserve the guided Service entry and descriptive topics/menu.
- Korean is the primary language. Keep public copy and `docs/content.md` synchronized when messaging changes.
- Preserve keyboard navigation, visible focus, readable contrast, reduced-motion support, and complete content without reveal effects. Design specifically for narrow mobile screens.
- Assets must work locally. Missing or failed product images must show the intentional concept silhouette, not a broken image. Keep asset provenance accurate in metadata, descriptive image alternatives and project documentation. Per the owner's latest request, do not repeat AI/concept/non-photograph captions beside images, and limit decorative arrows to the primary Home action. Do not claim an illustration is project photography.

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
