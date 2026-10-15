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


## 2026-10-06 — final navigation and dashboard connection

The owner requested a corrected GNB and a browsable dashboard in Uses, then a final repository-wide release check. Move the operations introduction into Uses, center GNB links with equal outer tracks, and publish the existing sample dashboard under the established microsite Pages host. This supersedes the earlier blank production dashboard default. Reuse the separate dashboard source and preserve its sample-data boundary. Main stores source/docs; gh-pages stores both static builds.


## 2026-10-06 — stronger GNB presentation

The owner requested a stronger GNB after the release. Strengthen brand/menu typography, anchor active-location marks to the header rule, clarify mobile toggle labels and fill the mobile action row. Preserve the text identity, five existing destinations, sample-dashboard connection and header-height tokens. Keep the same native disclosure and avoid adding scroll-state or navigation frameworks.


## 2026-10-06 — Unbox the Home mirror image

Decision: Remove Home’s mirror-only light background and corner-radius overrides from `pages.css`; inherit the existing transparent stage.

Reason: The owner requested a transparent background for the Home product preview. The existing `sm-assembled-v1.webp` is RGBA with alpha 0–255 and fully transparent corners; the rectangle was CSS, not image pixels.

Consequences: One CSS rule changes. Reuse the existing asset; retain dimensions, image fitting, mask removal, concept disclosure, fallback and device links. No generated replacement or dependency.


## 2026-10-06 — Replace the final render handoff with a stable assembly hold

Decision: Keep the closed raster layers visible after assembly. Reserve the separate complete render for reduced-motion, short-screen and error presentation. Add a shared 65ms time-based progress filter with a finite settling loop; remove vertical Reveal translation.

Reason: Actual browser inspection showed double outlines when independently generated assembled/composed geometries blended, abrupt wheel-driven progress and clipped sensor descriptions at 390×640. This explicitly supersedes the earlier final-image handoff while retaining internals-before-covers and constant image scale.

Consequences: Native scrolling and all existing assets/links remain. Active settling ends at the current target and stops offscreen/hidden. Viewports no taller than 740px (820px on widths below 768px) use static products with normal-flow copy. No dependency, regenerated image, scroll interception or hardware change. Generated anatomy is still illustrative; exact part geometry requires matched CGI or actual CAD passes.


## 2026-10-07 — Silver, charcoal and restrained glass

Owner approved the silver-product / charcoal-stage / restrained-glass direction. Refine existing CSS rather than switch all content to dark or introduce translucent body cards. Preserve authored content, product evidence, media fallbacks, keyboard controls and existing assembly work. The previous limitation of glass to icons/header is superseded for active selection controls.


## 2026-10-07 — Black silver-glass showroom reference

The owner’s screenshot requests stronger black/silver glass visual language than the prior light treatment. Apply it to Home and shared conversation presentation while preserving factual detail-page content and hardware motion. Reuse four authored selections with manual navigation; the single generated office setting is conceptual art, not distinct verified scenes. Add a clear image-failure text fallback rather than use a misleading hardware silhouette.


## 2026-10-07 — Premium silver-glass 4-Fit icons

Owner explicitly requested premium glass icons matching the silver office concept. Generate one coordinated decorative atlas for all four visible 4-Fit dimensions and reuse it across Home/detail/EXPO. Keep existing SVG geometry as a resilient fallback; unused GlassIcon artwork and small functional arrows are outside the requested large-illustration change.


## 2026-10-07 — Expanded silver-glass workplace scenes

Owner asked for several additional premium images distributed throughout the site. Generate six purposeful workplace scenes instead of inventing project hardware or photographs. Reuse existing authored interactions and a shared conceptual-figure renderer. Distinct conversation imagery supersedes the earlier single-office-for-all-situations decision. Native manual controls move above the image so a selection immediately reveals its new scene; unrelated assembly assets and current dirty work are preserved.


## 2026-10-07 — Simplify the 4-Fit icon material and form

Owner found the current icons unsatisfactory. Review showed heavy chrome reflections and mask/bust forms competing with the restrained glass-office scenes. After offering optional style choices, proceed with the stated default of minimal silver-glass symbols: reuse the native GlassIcon component, four clear geometries and one consistent material. Preserve all four labels, existing panels, keyboard behavior and earlier user work. This supersedes the generated atlas, per-icon sprite normalization and raster fallback decisions. Archived artwork remains local; no additional image generation or dependency is needed for these simple forms.


## 2026-10-07 — Preserve the preferred dimensional icon design

Owner explicitly preferred the previous 3D icons over the simplified SVG revision, asking for small refinements to each icon’s characteristics. Edit the original atlas rather than invent another style. Keep the material and silhouettes while clarifying dialogue, spoken voice, expression and upright posture. Restore image rendering and reuse the native symbols as error fallbacks. This supersedes the minimal-symbol decision and restores the earlier optical sizing contract. Other site images, authored copy, panels and hardware behavior remain intact.


## 2026-10-07 — Change only Expression to a face mesh concept

Owner asked for natural face mesh analysis imagery after approving the previous dimensional icon style. Use image_gen to extract/refine the Expression face into a separate transparent asset rather than regenerate the whole atlas and risk changing the other three icons. Preserve the face shape and silver material, use anatomy-aligned triangle connections and label it a concept. No simulated analysis workflow, new inference dependency or camera permission is introduced. Use per-icon image-error handling so one failed asset does not suppress unrelated icons.

The owner subsequently requested gently closed eyes. Expression v2 retains the same silver-glass face, smile and anatomy-aligned mesh with both eyelids comfortably closed. The other three perspectives remain unchanged.


## 2026-10-07 — Add motion to the existing first-day image

Owner found the site monotonous and suggested closed doors opening as visitors move onward. Interpret this as a section-scroll transition and enhance the existing arrival scene, preserving all 4-Fit artwork and selectors. This avoids adding an extra section and repeating the same scene in consecutive stages. Use native CSS view-timeline enhancement with a generated silver-glass paired-door overlay. Retain immediately visible content when motion is reduced or timelines unsupported, and independent media-error fallbacks. No library, physical-door claim, new product flow, push or deployment.


## 2026-10-07 — Make Main an introduction rather than repeat every detail

Owner explicitly asked to move detail out of Main because long copy felt tiring. Replace the prior full introduction composition with five large visual sections and short native links. This reverses the 2026-10-05 decision to put every story chapter on Home. Conversations, experience steps, reflection detail, applications and team material remain available on their detail pages; move the unique mirror rationale to Service. Preserve the approved Hero wording, glass doorway, all four icons and physical-device images. Remove the unavailable video control from Home while keeping missing footage in the System evidence inventory. Add compatibility navigation for the four moved section fragments. No push, deployment or capability claim.

## 2026-10-07 — Make the doors visibly open toward the visitor

Owner clarified forward opening. Existing rotation signs already move the center edges toward the viewer; reversing them would open into the scene. Correct the visual cause instead: remove stage clipping that concealed the expanding corners, strengthen desktop perspective, retain horizontal clipping and start the swing later to protect preceding copy. Remove the solid leaf background so transparent image margins stay clean; keep the concept caption above the leaves. Reuse the approved asset, native scroll timeline and static/error fallbacks.


## 2026-10-07 — Home glass, detail-page editorial clarity

Owner explicitly requested a style boundary after the combined Apple/Toss and silver-glass treatments felt awkward. Home and EXPO keep the approved dark glass showroom. Service, Four-Fit, System, Uses and Team use a white/cool-grey editorial interface with opaque navigation, flat reading fields, restrained blue selections and thin dividers. Existing dark product/scene artwork is a bounded media exception, preserving approved assets and concept captions. This supersedes the 2026-10-07 shared glass selection and dark Service conversation decisions. Scope silver tokens and header blur to Home; change shared detail defaults and existing section CSS rather than add a second theme system or replace artwork. All public content, tab/selection logic, media fallbacks and hardware motion remain intact.


## 2026-10-12 — Reference-based camera exploded view

Owner requested a camera 3D section based on the supplied exploded reference. Use one faithful generated exploded illustration rather than the prior generic tripod sensor and independently generated mating parts. This supersedes the camera-only closed-layer hold, while preserving mirror/audio assembly. The internal drawing remains conceptual and all displayed sensor specifications link to Microsoft. No hardware access, simulated analysis or deployment is introduced.


## 2026-10-12 — Camera parts join on scroll

Owner corrected the prior interpretation: parts must naturally join, not remain exploded. Generate a coordinated atlas in built-in image_gen from the supplied-reference render, then reuse native assembly phases and settle on the closed tile. This supersedes the fixed camera illustration decision above. Calibration and staged enclosure occlusion address visible overlap; generated internal geometry stays conceptual.


## 2026-10-12 — Vertical camera assembly

Owner explicitly prefers the reference image’s upper/lower joining feel. Change only camera displacement to vertical, with fixed centered shell, descending core and ascending faceplate. Preserve completed silhouette, existing artwork and shared scroll logic. The previous diagonal movement is superseded.


## 2026-10-12 — Camera visibility and coherent assembly correction

Owner reported no visible application and unnatural joining. Fresh process inspection confirms Vite 4915 serves this checkout on 5174. The existing short-height rule explained a supported path with animation disabled; the user’s actual in-app tab could not be inspected because only Chrome is connected. Keep camera animated in short normal-flow sections, preserving reduced-motion. Replace independently sized mating surfaces with complementary masks from a single completed view and eliminate the final blend. This supersedes v3 registration and short-screen static-camera decisions. Keep generated interiors illustrative and do not claim real CAD geometry.


## 2026-10-13 — Plain wording, proposed uses and silver-glass detail pages

The current owner request explicitly changes the earlier exact Hero promise, omission of Home applications and flat-blue detail-page controls. Lead with the concrete AI smart mirror/workplace-rehearsal definition, show three proposed educational contexts on Home, and let visitors select one context on Uses. Replace repeated abstract future-language with short concrete descriptions, while keeping implementation uncertainty in visible scope notes. University, new-employee and team contexts are proposed uses, not verified installations or measured outcomes.

Use pale silver glass for navigation and controls, graphite selection rules and opaque reading panels. Native disclosures bound scenario/expansion copy and preserve keyboard access. Preserve the approved assets, existing hardware assemblies and all entry paths. This request authorizes committing and pushing the resulting repository; source publication is distinct from updating the separately maintained gh-pages deployment.

## 2026-10-13 — Make mobile use and future development the main story

The owner's latest instruction explicitly prioritizes mobile web, a one-minute core introduction, large readable text and hamburger access to detail. This supersedes the six-section Home and desktop horizontal navigation. Use the same responsive home at / and /expo/, with three sections and a concise footer; keep every existing detail page. Prioritize application contexts and clearly proposed technology directions over duplicate problem/device/team sections. Reuse existing concept imagery and native CSS/React. Technical suggestions are documentation-backed proposals, not implementation evidence or provider commitments. Main's reading time is a design target that needs visitor testing. No public deployment or NFC-card write is part of this change.


## 2026-10-13 — Natural Korean with product status preserved

Use the owner's [im-not-ai reference](https://github.com/epoko77-ai/im-not-ai) for localized Korean editing. Replace abstract experience slogans and repeated `~하는 단계입니다` endings, and remove unnecessary connector commas. Preserve technical names, quantities, fictional-example labels and unverified implementation boundaries. Keep the latest concurrent Home and navigation work. This supersedes earlier exact wording where the current user request calls for revision, without reversing product scope or visual direction. Hide decorative 4-Fit tab ordinals on mobile to keep the full names legible. No commit, push or deployment is part of this request.

## 2026-10-13 — Restore visual behavior after mobile redesign regression

The user's feedback is explicit that the simplified UI lost its effects. Reconnect original DoorTransition and compact 4-Fit visuals, restore full-width cinematic Hero and glass surface, and withdraw the global typography floor. This reverses the flattened image-card/unboxed-list visual direction while retaining short mobile copy, use/development priorities and hamburger details. No return to the long duplicated problem/device/team narrative. Source changes are limited to Home composition, Hero/Uses/FourFit styles and scoped global typography. Verify actual door transforms and hardware progress, not only overflow counts.

## 2026-10-13 — Consolidate navigation and reduce button density

The owner finds the overall UI crowded by buttons. Move repeated page navigation to the existing hamburger instead of decorating it differently. Remove PageContents/PageNext, repeated footer/closing links and redundant section calls to action. Keep the single Home primary action, source/demo/skip links and necessary 4-Fit tabs. Replace repeated scene/context choices with single native selects, group authored examples under one disclosure and make brief expansion content static. Preserve section IDs, semantic content, image fallbacks and all restored effects. This supersedes the pill-contents and repeated navigation decisions. No runtime dependency, deployment, hardware hook or artwork change.

## 2026-10-13 — Three-item icon-only hamburger

Per the owner's explicit correction, show only the hamburger/X icon in a 48×48 px control; preserve aria-label, aria-expanded, Escape focus restoration and outside/focus-leave closure. Navigation is exactly 작품 소개 (/service/), 활용 장면 (/use-cases/) and 기술과 발전 방향 (/system/). 4-Fit and Team remain reachable from a quiet plain-text reference sentence on Service. This supersedes the five-item menu and visible 메뉴/닫기 label. No visual effects, hardware logic or dependencies changed.

## 2026-10-13 — Phone-first detail reading and effect preservation

The owner asks to review the whole UI because desktop-based composition remains awkward on phones. Actual 390 px inspection confirms oversized repeated heading/spacing, early controls near 600–665 px, crowded 4-Fit English labels, small reading copy, and a 69 px header calculated as 60 px. Correct these in a dedicated phone stylesheet and one shared header token. Use normal-flow hardware scenes on all narrow phones, keeping the existing assembly curve rather than disabling mirror/audio by phone height. This supersedes the short-screen static-mirror/audio decision but preserves reduced-motion and failed-media static output. Calibrated layer geometry, original art, three-menu navigation and limited button density remain. No framework, dependency, new visual asset or public deployment.

## 2026-10-14 — Expand selected educational uses without crowding Home

The owner requests very detailed utilization explanations. Expand the Uses page with context-specific situations, a proposed training sequence, four reflection questions, learner/educator follow-up, preparation and future needs. This supersedes the brief-only detail panel while preserving Home summaries, the three-item hamburger and the existing single context selector. Add readable editorial sections, with no new action buttons, media or motion. Retain one shared dialogue disclosure and the independently labeled operations demo. Do not imply proven training outcomes, automated learning records, hiring assessments or multi-user AI dialogue. The long selected article is outside the live region; only its short summary is announced. No deployment or Git publication is part of this request.

## 2026-10-14 — Correct scope from current GitHub evidence

The owner confirms interview/job-training implementations and asks to analyze the public repository in light of differentiation, unclear deployment/system and hardware cost. Pin the review to main adb9355b0da4ef69a6485811ec82ee46cf133239. Supersede the future-only mode classification and the sensor-first System presentation. Show actual modes and software input→dialogue→analysis→results before hardware, and describe future work as improving the existing paths. Do not infer Kinect depth usage, gaze tracking, proven advantages, zero marginal cost, complete offline operation or established buyers. Keep venue/low-cost proposals in the analysis, not as confirmed public installations. Runtime and physical acceptance remain separate. No backend change, commit, push or public deployment.


## 2026-10-14 — All-page mobile silver glass and bounded reading

The latest owner asks for the dashboard and all introduction pages to use mobile UI, clean futuristic silver glass, better images and less scrolling. Use pale silver throughout, superseding the earlier mandatory dark Home, monumental Hero placement and raster icon atlas. Preserve those source assets but stop placing generated people/office scenes in the primary flow. Reuse the drawing-based product and native vectors.

Keep the three-item hamburger and add a phone dock for direct access. This intentionally supersedes the previous prohibition on repeated navigation because switching between introduction and operations is now a primary mobile task. Divide long detail pages into topics; keep every explanation available via tabs/disclosures and preserve incoming fragments. Preserve assembly motion within one bounded selected stage; the existing curve replaces tall sticky tracking on desktop too. The dashboard retains its local sample data and operational safeguards, with shorter lists and optional detail. No framework, dependency, back-end work or deployment is required by this visual request.

## 2026-10-15 — Make the entry a digital business card

The owner explicitly clarified business-card usage after finding the overall UI awkward. This supersedes the 2026-10-14 Home section stack and five-destination Home dock. Use one compact project card: project/team identity, clear purpose, contained concept mirror and three detail destinations. Put the sample dashboard link below the primary actions. Detail pages retain a simpler four-destination dock, topic tabs and all substantive explanations. Shorten H1s and remove Team's repeated product/closing composition. This follows the newest owner direction while preserving old Home fragments and the accessible local demo. Contact identity/QR generation and public deployment remain separate because no new contact data or publication request was supplied.

## 2026-10-15 — Remove visible image disclaimers and repetitive arrows

The owner explicitly requests removing `도안 기반 AI 콘셉트 / 실물 사진 아님` and similar visitor text and asks for fewer arrows. This supersedes the prior always-visible caption requirement. Remove captions at their shared rendering sources and from hardware stages; use neutral design-material descriptions. Preserve provenance in internal records, media kind and descriptive alternatives, with no new photography or completion claim. Retain one Home primary-action arrow and meaningful connection direction, while ordinary links keep legible labels, touch targets and focus without repeated arrows. Image failures and assembly calibration are unchanged. No public deployment requested.

## 2026-10-15 — Use black glass across the project card and dashboard

Decision: Replace the pale canvas/white panels with a near-black canvas, light type, dark translucent surfaces and fine silver edges. Keep the digital card, responsive dimensions and native topic/disclosure controls; update the separate dashboard palette through its existing final stylesheet.

Reason: The owner reviewed Service and explicitly requested a black background with glassmorphism. This supersedes the earlier pale-silver material direction, while retaining the compact business-card hierarchy and caption/arrow cleanup.

Consequences: No new package, theme switch, generated artwork, behavior/data change or deployment. Existing assets, assembly calibration and truthful product scope remain.

## 2026-10-15 — Restore explanation and a guided reading sequence

Decision: Keep the mobile digital card and black glass, while exposing core project understanding before optional depth. Add Service's default project-understanding topic; show device roles, a four-stage software map, verified source links, direct retry guidance and Team's design criteria. Explain each selected topic and menu destination, with a quiet next-subject footer link.

Reason: The owner reports that the simplified UI is too sparse and unfriendly, and asks for competition-quality completeness. This supersedes treating short screens as a reason to hide all basic rationale/team explanation or remove every onward reading hint. Short copy and bounded layouts remain; no return to a long repeated Home or dense button directory.

Consequences: No guarantee/claim of an award or newly completed AI/device linkage. Preserve one Home arrow, no image-origin captions, existing media/calibration, all legacy fragment targets, native controls and accessible state. Main input/process/output presentation is static; authored examples are distinct from verified source. No dashboard behavior, dependency, commit or publication change.
