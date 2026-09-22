# Decisions

## 2026-09-22 — Public product name updated to 4-Fit MirrorTing

Decision: Use **4-Fit MirrorTing** as the product name across the rendered site, metadata, accessibility labels, and current product/content/design documentation. Keep the existing repository path, npm package identifier, and historical QA path records unchanged.

Reason: The project owner explicitly corrected the public-facing name from CarpeDM to 4-Fit MirrorTing.

Consequences: Future public copy must use 4-Fit MirrorTing consistently. Technical identifiers tied to the existing repository remain stable unless a separate rename is requested.

## 2026-09-21 — Static React site with native styling
Decision: Use Vite, React, TypeScript, npm, and CSS; limit production dependencies to React / React DOM.

Reason: The repository began with only `.gitignore`. A one-page exhibition introduction needs no server, routing, application store, or component framework. The project owner explicitly requested this baseline.

Alternatives considered: Next.js, a styling framework, a static HTML-only page, and animation libraries.

Consequences: Small, understandable source; manual component styling; a static `dist/` deploy. Rendering depends on JavaScript, with a basic no-JS explanation in the document. A prerendering step can be considered if later SEO requirements justify it.

## 2026-09-21 — Truthful intended-experience presentation
Decision: Treat supplied hardware as confirmed project context, with implementation status separately unverified. Introduce the visitor sequence as the designed experience; keep protocols, AI behavior, and delivery status unconfirmed.

Reason: Product copy is not evidence of working device integration.

Alternatives considered: Repeating all provisional feature copy as completed behavior, or withholding the whole experience until every integration is tested.

Consequences: Visitors can understand the concept without invented evidence. Future feature claims require confirmation in `docs/product.md` and corresponding copy updates.

## 2026-09-21 — Original silhouettes until real photography exists
Decision: Use CSS mirror and kiosk silhouettes with visible concept captions and an optional typed media registry.

Reason: There are no guaranteed production photos. Local CSS keeps the first version fast and gives the physical devices visual presence without counterfeit evidence.

Alternatives considered: Stock hardware photos, generated photorealistic renders, empty gray rectangles, external design-reference imagery.

Consequences: Shapes are illustrative, not enclosure specifications. Real photographs can replace each slot independently; failed files recover to silhouettes. No remote asset dependency.

## 2026-09-21 — Editorial sequence and progressive detail
Decision: Follow the requested section list: hero, introduction, experience, mirror, kiosk, architecture, technology, closing. Place exact hardware models inside a native disclosure in architecture.

Reason: Visitors first understand the experience and objects. Judges can then inspect the physical relationships and technical roles. The prompt's listed order is more explicit than its later informal technology/architecture ordering.

Alternatives considered: Exposing a bill of materials above the fold or putting technology names before devices.

Consequences: Sparse navigation targets major parts of the story. Technical detail remains keyboard accessible without a custom accordion or library.

## 2026-09-21 — Portable static output without publishing
Decision: Use a relative Vite asset base and leave deployment destination / canonical URL unconfigured.

Reason: The repository URL is known, but a public site URL and host are not. Initialization does not authorize pushing or publishing.

Alternatives considered: Assuming a GitHub Pages URL or adding an automatic deployment workflow.

Consequences: Build assets can be served under a subdirectory; deployment and social preview image remain explicit follow-up work.

## 2026-09-21 — Compatible pinned development toolchain
Decision: Pin dependencies in package.json and the npm lockfile. Use TypeScript 6.0.3 with typescript-eslint 8.70.0; require Node 22.13 in the 22 series or Node 24+.

Reason: During initial registry inspection, the newest TypeScript major was outside the parser's declared peer range. ESLint's runtime requirement is stricter than Vite's minimum.

Alternatives considered: Installing every latest package without checking peer compatibility, or adding an unsupported-version override.

Consequences: A reproducible initial toolchain. Recheck peer and engine metadata together when upgrading; these versions are a setup snapshot, not a permanent ban on newer releases.

## 2026-09-21 — Reveals always remain legible
Decision: Keep pending reveal content at 85% opacity with a 12 px offset; use a 450 ms transition and disable effects for reduced motion.

Reason: Browser inspection of a rapid scroll showed that starting from zero opacity could briefly present a blank product section.

Alternatives considered: Removing all transitions or using a fully hidden reveal with a longer delay.

Consequences: Progressive motion remains subtle. Reading does not depend on the observer firing, and keyboard focus immediately restores full opacity.

## 2026-09-21 — Adapt Toss clarity without replacing the product identity
Decision: Apply the supplied Toss reference to hierarchy, functional blue, light neutral explanation sections, CTA states, spacing rhythm, and direct scope language. Preserve dark stages for the physical mirror and kiosk, and use a solid blue closing field. Use the darker palette blue `#1B64DA` wherever small white text sits on blue so the web treatment preserves text contrast. Do not bundle or fetch Toss Product Sans; use it only when it is already available locally, with system fallbacks.

Reason: A full white fintech treatment would weaken the physical exhibition character, while the original continuous dark presentation made explanation-heavy sections harder to scan. The reference is most useful as an interaction and information system rather than a brand skin.

Alternatives considered: Recoloring the entire site white and blue, changing only the accent color, or copying native-app button/card patterns into the web page.

Consequences: Product objects retain a cinematic stage, explanatory content gains a calmer reading surface, blue has a consistent functional role, and implementation uncertainty appears before the relevant flows. Future components must use the semantic tokens and documented web states rather than inventing additional blues, shadows, or card treatments.

## 2026-09-22 — Corporate product presentation replaces the concept-reel treatment
Decision: Make white and cool grey the default page surfaces, use Korean value propositions for H1/H2 content, and reserve deep navy for the two device stages and closing. Remove scan-style annotations, corner brackets, continuous black backgrounds, and oversized English slogans. Keep the existing component structure, product facts, scope notes, and media fallback behavior.

Reason: The previous visual system combined dark backgrounds, large English statements, monospace labels, and abstract silhouettes in a way that looked like a generated AI concept page. The project needs the clarity and trust of a large product-company website for judges and exhibition visitors.

Alternatives considered: Adding more generated imagery while keeping the existing dark layout, replacing the whole site with a generic component library, or removing the physical-device presentation.

Consequences: The first screen now explains the product in Korean, information sections scan more like a corporate product page, and the physical hardware still receives a distinct premium stage. Real product photography remains the highest-impact future upgrade; generated imagery must stay labeled as concept media.

## 2026-09-22 — Supplied concept renders

Decision: Apply the three owner-supplied renders as local WebP assets, retaining full intrinsic proportions and visible concept captions. Light mirror imagery accompanies the bright hero; dark mirror and kiosk imagery accompany the navy device sections.

Reason: The owner explicitly requested these images. This supersedes silhouette-only presentation, while preserving the rule that concepts cannot serve as evidence of completed hardware.

Consequences: CSS silhouettes remain the error fallback; eager hero and lazy detail loading remain in place.

## 2026-09-22 — Product storytelling and original glass iconography

Decision: Reorder the page around the physical products, compress repeated descriptions, replace six always-visible experience cards with three illustrated scenes and a six-step disclosure, and make technology descriptions expandable. Use a pale unboxed hero, a dark mirror showcase, a white kiosk presentation and restrained project closing. Add three original glass SVG illustrations with no new dependency.

Reason: The owner explicitly requested an Apple/Toss-level redesign after the earlier page still felt like a draft. This changes the editorial hierarchy instead of only recoloring cards. The explicit glass-icon request supersedes the former glass-effect ban for decorative icons; text surfaces stay simple and readable.

Consequences: Hardware and six-step facts remain available. All supplied renders retain concept disclosure. Use React useId for SVG definitions; keep native keyboard interactions and motion-reduction behavior. No implementation-status claim changes.
