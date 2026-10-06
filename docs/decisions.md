# Decisions

## 2026-10-05 — Strengthen the exhibition story with existing assets

Decision: Preserve the monumental Hero, exact promise, plain-text identity and responsive multi-page structure. Refine typography and shared navigation; insert the existing Introduction as a mirror-interface explanation and reuse ExperienceFlow on Home. Give the authored conversations a clear question/answer stage and each 4-Fit perspective an original decorative line drawing. Update detail introductions, device proportions, closing and footer consistently.

Reason: The owner requested a stronger exhibition presentation. The previous outline did not explain why the mirror mattered and left the full journey on another page. A complete story and useful interactions can be delivered from confirmed content and existing media.

Consequences: The homepage gains two meaningful sections. Chapter numbers appear only on Home. No new package, replacement logo, fake result, event claim or measured benefit is added. This supersedes the earlier homepage distribution and equal device-column layout; it retains the owner's Hero wording, removal of the logo, single responsive entry and evidence boundaries. The accurate hardware assembly visual remains dependent on real geometry, as previously documented.

## 2026-10-05 — Unify mobile and desktop entry

Decision: Remove mobile-guide links and the standalone ExpoPage/CSS. All devices use the existing responsive homepage. Keep `/expo/` as an HTML entry that mounts the same home App with the correct relative site root. This supersedes the earlier separate short-mobile-guide decision.

Reason: The owner prefers automatic responsive layout to choosing a mobile version. A second summary page made the experience appear split.

Consequences: Same sections and interactions at every width, existing media queries preserved, older EXPO links remain usable. Footer points to service and closing to system. No redirect, browser detection, new dependency, QR generation, NFC action or deployment is added.

## 2026-10-05 — Remove the custom logo at the owner’s request

Decision: Remove the shared symbol, export assets, favicon and symbol-only styles from all pages and fallback silhouettes. Keep ordinary artwork/team text and accessible home links. This supersedes the earlier vector-logo decision.

Reason: The owner rejected the logo and explicitly requested complete removal.

Consequences: No replacement symbol, image, font or dependency is added. Other page content and interactions remain unchanged.

## 2026-10-05 — Replace repeated outlines with a complete product introduction

Decision: Home now follows Hero → problem → selectable conversation examples → 4-Fit tabs → two-device stage → applications → team purpose. Reuse the same selector on Service and tabs on the 4-Fit detail page. Replace the repetitive central diagram/cards and homepage directory; reduce shared spacing and avoid duplicate detail titles. This supersedes the earlier three-scene/directory homepage and diagram presentation while retaining separate detail pages.

Reason: The owner found the site unfinished. Its outline repeated categories but did not show a concrete conversation or explain each perspective in context. The existing product story supports a complete introduction without inventing integration or results.

Consequences: Native buttons and React local selection provide explanatory interactions, with keyboard tab support and authored-example disclosure. Existing device concepts, error silhouettes, Hero, logo and six-step intended flow remain. No simulated AI, dependency, member profile, deployment or hardware claim is added.

## 2026-10-05 — Use an original vector logo for 4-Fit MirrorTing

Decision: Replace the thin bracket mark with a four-part mirror frame surrounding the numeral 4. Keep BrandMark, use filled SVG geometry and export a symbol and editable horizontal wordmark. Apply to header/footer, Hero, EXPO header and favicon; existing fallback silhouettes inherit the shared mark.

Reason: The owner requested a logo suited to the site. A native vector fits the existing SVG system, remains sharp at small sizes and avoids raster assets or new packages.

Consequences: Preserve artwork/team names and accessible home links. Blue is used on light surfaces, white on the Hero. Exported wordmark uses system typography and needs outlining after approval for identical cross-platform print output. No public deployment is performed.

## 2026-10-05 — Apply the monumental image and restore the owner’s Hero promise

Decision: Use the generated dark-hall, single-mirror concept as a full-section Hero backdrop. Restore the exact owner-provided main copy, show CarpeDM beside the artwork name, and order video before service. Video remains unavailable until supplied. The white site body and header remain unchanged.

Reason: The owner explicitly requested this first-screen composition. This supersedes the shortened Hero promise and pale Hero presentation for this section only.

Consequences: Keep words and controls in HTML, preserve concept disclosure and ProductFrame failure fallback. Use a 50 KiB WebP derivative for delivery. On mobile, position copy above the mirror scene and keep the object visible; verify six widths before completion.

## 2026-10-05 — Explain the experience before branching into detail pages

Decision: Home introduces the workplace problem and three experience scenes before detail links. Service presents four shared situation examples, six visible steps and the two devices, then links to 4-Fit. Add native anchor navigation to Service and shorten the hero promise.

Reason: The previous homepage asked readers to choose a page before explaining how the proposed experience works. Service repeated the three-scene overview before its six steps. This distribution keeps home understandable and service concrete.

Consequences: Reuse existing scene data, icons and situation wording; share situation data with Uses. Keep all experience, analysis and hardware-linkage uncertainty visible. No runtime dependency or simulated capability is added.

## 2026-10-05 — Split the introduction into linked pages

Decision: Keep a concise homepage and add separate static HTML entries for service, 4-Fit, system, use cases and team, while retaining the short `/expo/` mobile entry. Use Vite multi-page output with a shared React shell and relative paths rather than adding a client router.

Reason: The owner requested a company-style multi-page introduction that judges can scan and NFC visitors can explore on mobile. This supersedes the earlier one-page sequence. The four current header labels remain provisional and can be refined after visitor review.

Consequences: Each detail page has its own H1 and metadata. Public media paths use the entry's relative site root. “서비스 보기” opens `/service/`; “영상 보기” stays visibly disabled until real footage is supplied. The 4-Fit diagram uses the owner-confirmed four definitions, while analysis implementation remains unverified.


## 2026-10-05 — Center the site on workplace role-play and add an EXPO entry

Decision: Use the owner-provided order of workplace problem → 4-Fit perspectives → intended experience → devices → uses → system → evidence → team. The header uses `시스템 | 4-Fit 분석 | 활용 | 팀 소개`. Build `/expo/` as a second static HTML entry for short mobile reading without adding a router.

Reason: EXPO visitors and judges need to understand the problem, intended experience, system and evidence quickly. The prior product-first page did not explain the workplace role-play or what the name 4-Fit meant.

Consequences: The earlier one-page-only and three-scene-first decisions are superseded for the homepage. The owner confirmed Response / Voice / Expression / Posture as official 4-Fit names on 2026-10-05. A running local workplace-conversation introduction was captured as `DEMO UI`, with its example answer and coaching labeled. Video, actual analysis results and hardware photographs remain unavailable; concept renders stay labeled, the video action stays pending, and broader `IMPLEMENTED` claims await feature-specific evidence. The extended employee web and Dashboard chain is labeled as a design relationship.

## 2026-10-05 — Show the six experience steps directly

Decision: Keep the three illustrated scenes as an overview and place the six original steps in a visible, ruled grid beneath them.

Reason: The six-step sequence explains what a visitor would do at each device, but hiding it in a disclosure made the core experience easy to miss. The site now makes that designed sequence available without an extra action while retaining the existing scope note.

Consequences: The experience section is longer, especially on mobile. Hardware and technology details remain collapsed to preserve scanability. No device behavior is presented as verified implementation.

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


## 2026-10-05 — Scroll assembly requires actual device geometry

The owner clarified that the desired System visual is an exploded device whose parts assemble into one machine as the visitor scrolls. The earlier selector and invented sensor / microphone illustrations were withdrawn because they differ from the actual hardware. Existing architecture and technical details remain. Available local assets are concept renders, not assembled-device photographs or separable CAD / 3D parts. Accurate enclosure geometry, component placement and source photographs or models are needed before building the final assembly visual.

## 2026-10-05 — Research resolves component geometry

Decision: Use official Microsoft and Seeed STEP files, convert them offline to GLB, and render a naturally scrolling exploded-to-assembled device with Three.js. The owner explicitly requested web research after rejecting the invented shapes. The previous requirement to obtain source geometry is satisfied for the two named input devices; final custom enclosure measurements remain unconfirmed.

Reason: CSS illustrations cannot preserve manufacturer geometry or perform the requested actual mesh assembly. Three.js supplies the concrete missing capability; native scroll and one requestAnimationFrame callback suffice for motion.

Consequences: Component geometry is manufacturer-derived. Mirror frame, stand and relative installation are labeled as an arrangement concept. Model colors are illustrative. Initial input magnification is disclosed. Exact specifications and source links stay in the existing technical disclosure. The renderer and GLBs are local and lazy, and original source licenses/attribution are retained. No publication, physical integration or performance claim is made.

## 2026-10-05 — Drawing-based product renders replace the CAD canvas

Decision: Replace the rejected WebGL scene with actual image_gen product renders. The owner's nine engineering sheets now govern the enclosure, upper input devices, lower two speakers, rear PC BOX and wheeled base. Produce transparent anatomy layers and a matched complete image, then move them with native CSS and natural scroll. Add camera and audio close-up figures. Remove the unused Three.js runtime; preserve the earlier CAD work as local reference material.

Reason: The owner explicitly called the mesh presentation unattractive and asked for high-quality 3D images. The newly supplied drawings also show that the previous silhouette and mounting locations were wrong. Keeping the same canvas with new colors would not meet the corrected request.

Consequences: All drawing sheets were read as source data, not instructions. Generated material finishes are cosmetic concepts; physical implementation status is unchanged. The page clearly labels generated images, keeps technical manufacturer sources, provides reduced-motion/static image fallbacks and preserves the remainder of the site. Built-in image generation is used without API credentials. High-resolution PNG assets and prompt records remain available locally; runtime WebPs retain alpha and need no 3D engine.

## 2026-10-05 — Sensor assemblies explain hardware strengths

Decision: Replace the two static camera/audio figures with separate scroll assemblies. Generate six component layers from the existing close-ups; reuse those close-ups for the completed pose. Share the already proven native scroll hook across mirror and sensor stages, retaining the pure motion helper and existing runtime dependencies.

Reason: The owner explicitly requested the same disassembly-to-assembly treatment for camera and microphone, with an explanation of their strengths. Camera highlights color/depth input; audio highlights four microphones and manufacturer-provided voice processing while also assembling the two speaker units. An active rule and heavier feature heading follow the current chapter; all explanations stay visible.

Consequences: Generated internal electronics are clearly marked as explanatory concepts because no internal manufacturing drawing was provided. Manufacturer capabilities are sourced rather than treated as activated project features. Each stage retains independent error fallback, reduced motion and a keyboard skip link. No hardware access, animation library or public deployment is added.

## 2026-10-05 — Assemble internals before the front covers

Decision: Correct the shared motion helper once for all three stages. Seat internal parts, pause briefly, close front covers, then blend to and hold the finished render. Keep rear structures fixed and register all images in a common plane with constant sizes. Place input-device cores above empty housings and below covers; register audio's microphone and two speaker regions individually from the existing files.

Reason: The owner reported a mismatched sequence. The former overlapping intervals let front covers overtake internals, chapter labels indicated completion early, and part-size growth magnified differences at the final-image handoff. A core behind an opaque empty housing was also invisible before closure.

Consequences: Reuse all twelve raster assets and the native scroll hook. No generation job, video, runtime dependency or page-order change is necessary for this correction. Pure-helper checks cover the ordered intervals and final hold. Independent raster perspectives still have an alignment ceiling; calibrated CSS offsets and cover-seating occlusion are explicit approximations, with matched CGI passes as the upgrade path. Product facts and fallback behavior remain unchanged.

## 2026-10-05 — Give each detail page a complete purpose

Decision: Add substantive detail content using existing authored conversations and media. FourFit adds reflection/retry guidance; Uses explains concrete contexts and expansion ideas; Team explains intent and existing evidence. Native contents connect real sections. Reuse the System completed mirror across explanatory pages and show Service devices in Kiosk → Mirror experience order.

Reason: The owner reported that other pages felt incomplete. Their short summaries offered little depth, and older concepts made one device look inconsistent across pages. Generic cards or unverified claims would not resolve these gaps.

Consequences: Home stays compact, concepts stay labeled and no capability or award is claimed. The former mirror-first Service layout and slim-mirror detail imagery are superseded. Real biographies, measured results and footage remain owner-supplied follow-ups.


## 2026-10-05 — Explain input relationships and evidence per material

Decision: Preserve approved 3D assembly and add four input-to-4-Fit reflection relationships, a five-row evidence inventory and three concrete fields per technical disclosure. Show the intended visitor sequence separately from the existing independent fixed-example operations demo. Keep manufacturer model names and drawing dimensions in native hardware details.

Reason: The System page showed parts and generic technology names but did not explain why the inputs mattered to the four perspectives or what each material actually proved. The former numbered Dashboard endpoint could imply a verified automatic visitor transition even though its UI uses independent example records.

Consequences: The four compact visitor phases summarize the existing six-step intended journey; they do not change its product intent. Employee result surfaces and live operations/device linkage remain unverified. Reuse the existing optional dashboard destination and screenshot fallback. No new framework, media generation or fabricated implementation evidence. A native source-link/Enter check confirmed the hardware disclosure works without extra JavaScript.


## 2026-10-06 — Give the GNB an editorial hierarchy

Decision: Preserve the text identity and navigation labels, group content links separately from operations/service actions, and use restrained charcoal, a current-page underline and thin rules. Replace the large colored pill with a compact charcoal service action. Move the disclosure/desktop boundary to 1024 px and bound the mobile panel height with native internal scrolling.

Reason: The owner found the GNB visually weak. Small links clustered at the right and an oversized bright action had uneven visual weight. More balanced typography and spacing address that issue without adding another header mode or a new logo.

Consequences: CSS and matchMedia use the same boundary. Existing links, optional operations destination, Escape/selection closing and visible focus remain. Shared header-height tokens and footer style are preserved. The earlier bright-pill navigation treatment is superseded; no other page composition or hardware motion is changed.


## 2026-10-06 — Return home through the brand

Decision: Remove the shared detail breadcrumb and its unused CSS. Keep the brand home link and page titles.

Reason: The owner noted that the brand already returns home, making the extra home/page row redundant.

Consequences: All five detail pages start more directly with their label and title. Navigation destinations and accessible brand labels remain unchanged.

## 2026-10-06 — Unbox the Service mirror image

Decision: Remove the light gradient and corner radius from Service's mirror product stage. Reuse the existing transparent sm-assembled-v1.webp without regeneration or image editing.

Reason: The owner requested a background-free product. Both the source PNG and runtime WebP already have alpha ranging from0 to255, including fully transparent corners; the visible grey rectangle came from products.css.

Consequences: The product blends directly into the graphite section. Image dimensions, fitting, original reflections, concept caption, fallback and all other product stages remain unchanged. No new asset or dependency.


## 2026-10-06 — publish latest microsite through existing Pages branch

Use the existing public GitHub Pages site and `gh-pages` root. Publish the verified static build with a normal push and preserve deployment history. Do not add an Actions workflow or deploy the dashboard as part of this microsite request. Keep the production dashboard URL blank until its public host is confirmed.
