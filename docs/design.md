# 4-Fit MirrorTing visual system

## Direction
A product introduction with Apple-like restraint and Toss-like Korean clarity, using original assets and an original layout. Show the object before explaining the technology. No copied brand assets, fictitious product claims, metrics, dashboards, or interface simulations.

The 2026-09-22 request authorizes a full editorial redesign and glassmorphism icons. This supersedes the earlier all-dark direction and the blanket ban on glass. Translucent depth is limited to the three experience icons and the navigation backdrop.

## Page structure
1. Home: the workplace rehearsal promise, labeled device concept, two visible hero actions, a short problem statement, selectable conversation examples, a mirror-interface explanation, interactive 4-Fit explanations, a two-device stage, the six-step designed journey, applications and team purpose, with detail links. “영상 보기” is disabled and marked as being produced until footage exists.
2. Service: native contents, four selectable authored conversations, six designed steps and retry guidance, then Kiosk → Smart Mirror roles in experience order.
3. Four Fit: four accessible tabs, dimension-specific reflection points, an authored answer comparison and three retry steps. No score or measured result.
4. System: mirror → camera → audio scroll assembly and hardware strengths, four-part intended visitor journey, two device roles, four input/reflection relationships, material-by-material evidence and on-demand technical detail. Operations is a separate example demo, not a sequential visitor step.
5. Uses: four workplace scenarios with native answer disclosures, three intended use contexts, then explicitly labeled interview/job-training expansion ideas.
6. Team: CarpeDM's purpose, three design principles, the drawing-based device concept and an honest project-material inventory.

The header exposes four major destinations: 시스템, 4-Fit 분석, 활용, 팀 소개. The brand returns home and “서비스 보기” opens the service page. Every page adapts automatically to viewport width. Remove mobile-version selection links; `/expo/` is only a compatibility entry displaying the same responsive homepage. Labels can be refined after visitor testing.

## Foundations
- Main text: #1D1D1F. Body: #606773. Muted heading fragments: #737780.
- Canvas: white. Alternate surface: #F5F5F7. Hero: #0B0C0E with the monumental dark-space concept image and light HTML copy. Smart Mirror: #14181D, with the transparent product directly on the section background.
- Primary action: #1963DA, hover #1453BC, with white text. Dark-section links: #93BDFF.
- Blue indicates action. Soft blue, teal and violet distinguish the three decorative icons; meaning is always repeated in text.
- Font: existing local Pretendard/system stack. No remote fonts or new runtime dependencies.
- Hero promise: 29–64 px with a smaller lead-in; section titles roughly 30–60 px; body 15–17 px. Keep readable Korean line lengths and intentional line breaks.
- Content width: 1216 px; fluid 20–80 px gutters. Shared section spacing: 72–112 px according to content rather than identical blocks.

## Product imagery
Use local WebP renders. Home, Service and Team share the drawing-based completed mirror used in System, with complete proportions. Service uses its existing alpha directly on the graphite section; Home, Team and System retain their neutral stages. The monumental Hero keeps its separately approved concept; Kiosk retains the supplied render. No fake screen content or assembled-device photography claim.

Always show the concept caption. Drawing-based media specifies “설계 도안 기반 AI 생성 3D 콘셉트 · 실제 촬영 이미지가 아닙니다.” Other concepts retain the generic caption. Missing media uses a labeled CSS silhouette; the mirror fallback reflects upper inputs, lower speakers and a broad base. Hero is eager-loaded; details are lazy-loaded. Intrinsic dimensions reserve space.

## Original glass icons
`GlassIcon` implements three SVG illustrations: identification card, mirror and voice bubbles. Overlapping translucent shapes, white edge highlights, gentle color gradients, and a small shadow convey glass without blurring text. SVG IDs use React `useId` so instances cannot collide. Icons are decorative, marked `aria-hidden`, and paired with meaningful text. No raster asset, WebGL, icon package or looping animation is needed.

## Interaction and accessibility
- Compact translucent sticky header, four real section links, and an accessible mobile disclosure.
- Pill primary CTA; simple blue text links. At least 44 px action targets and visible keyboard focus.
- The homepage shows the full introduction; the service page provides the six-step intended flow and device detail. Conversation selection uses native buttons with aria-pressed and a polite live region. 4-Fit uses roving-focus tabs, ArrowLeft/ArrowRight wrapping, Home/End, and hidden inactive panels. Both interactions explain authored content without simulating AI. Native `details/summary` remains for hardware and technology, with visible plus/minus affordances.
- One-time progressive reveals only. Content stays visible before initialization; reduced-motion removes transitions and smooth scroll.
- Semantic landmarks, one H1, logical headings, descriptive image alternatives and Korean document language.
- Mobile stacks copy and devices; situation options form a 2×2 grid, while all four 4-Fit tabs remain visible above one stacked panel. Tablet preserves layout without truncating headlines or navigation.
- Validate 360, 390, 768, 1024, 1280 and 1440 px. Record actual results and limitations in `qa.md`.

## 2026-10-05 — Monumental Hero

Use the newly generated one-mirror dark-hall concept only in Hero. Desktop places copy on the left and mirror on the right. Mobile puts readable copy and buttons above the mirror scene; crop the empty space while keeping the entire mirror in frame. Artwork name, CarpeDM, the owner’s exact main promise and controls are real HTML. Button order is video then service; video remains disabled with its production status. Light body sections and header remain part of the editorial system.

## 2026-10-05 — Complete the introduction

Replace the homepage directory and duplicate 4-Fit diagram/cards with meaningful selectable content. Preserve the monumental Hero and light editorial body. A dark two-device stage separates explanation from physical objects. Detail H1s are smaller than Hero type and avoid repeating the section title. The closing pairs the artwork/team text with a specific project purpose rather than another oversized name. No new animation, external asset or package is required.

## 2026-10-05 — Remove the logo

At the owner’s request, remove the custom symbol everywhere and use plain artwork/team text. Remove the symbol from navigation, Hero, footer, 4-Fit, closing, concept silhouettes and the legacy EXPO entry, including its exported files. The browser tab has no custom icon (`data:,`). Home links retain readable names and 44 px targets.

## 2026-10-05 — One responsive experience

Keep the same content and actions on phones, tablets and desktops. Existing media queries adjust navigation, typography, columns and image crops automatically, without device detection or a version toggle. Remove the standalone EXPO summary and its styles. Footer links to service; closing links to service and system.

## 2026-10-05 — Exhibition editorial polish

Keep the owner's exact Hero promise and existing monumental concept. Give the lead-in a smaller size and the final two lines a stronger hierarchy. The header retains the plain artwork name and CarpeDM credit, and adds a real service link. Its mobile disclosure includes the same five destinations; no replacement logo is introduced.

Home has eight numbered story chapters after Hero: problem, conversation, mirror interface, 4-Fit, devices, experience, uses, team purpose. Chapter numbers are decorative and hidden on detail entries, where the section label and title supply context. Alternate white and cool-grey explanation sections with dark Hero/device stages. Use typography, thin rules and deliberate image proportions rather than repeating identical cards.

Conversation selection retains the four authored situations. The question has a dark stage and the answer a white inset, with an explicit authored-example label. Four Fit pairs native keyboard tabs with a single visible panel, a quiet blue-grey illustration area, and reflection text. Original speech, voice, expression and posture line drawings are decorative; none implies measured data or sensor geometry.

Reuse the existing light mirror render for the interface section with an intact silhouette and visible concept caption. The two-device stage uses unequal columns and contains the full objects. Detail pages share a section label, split introduction, next-page link and footer navigation. The brand returns home. Native hover/focus feedback and existing Reveal are the only motion. No new library, generated media, fake score, live badge or hardware assembly animation is needed.

## 2026-10-05 — Scroll-driven hardware assembly

The owner rejected the CAD canvas and explicitly requested premium generated 3D images, then supplied nine SM_001–SM_008 engineering sheets. Those sheets now govern the silhouette and placement: top-center camera, top-left microphone housing, right-side NFC, two lower speakers, rear PC BOX, broad plinth and casters. The earlier slim stand and bottom-mounted input devices are withdrawn. Drawing colors are component identifiers, not finish requirements. Use graphite and satin platinum CGI materials, convincing glass reflection, optical details and woven speaker grilles. These remain AI-generated design visualizations, not photographs or fabrication drawings.

System now opens with a bright, neutral sticky product stage. Three transparent generated images show the front mirror/frame with its inputs, internal LCD, and rear structure with speaker/base. The rear structure stays as the reference; the LCD seats first, then the front frame closes. Keep part sizes constant during movement. The complete product shares the same centered image plane, with the front registered against its finished silhouette. Images are genuine raster render assets; no code-drawn panels or CAD meshes are used on the page. Copy is short and subordinate to the object. Below the mirror, separate camera and audio sticky stages replace the static close-ups at the owner's request. Camera separates housing/mount, sensor core and optical front; audio separates housings, microphone board/two speaker drivers and three acoustic grilles. Empty housings stay behind the internals, and internals stay behind the front covers. Each stage seats its internals before closing the front, then holds the same composed layers without swapping product geometry. The completed single render is reserved for static presentation and fallback. Audio uses individually aligned microphone, left-speaker and right-speaker regions of the existing images. No glowing waveform, orb, technical label overlay or fake screen content.

A native `시스템 구성 보기` link skips to architecture. Camera links onward to audio; audio links onward to architecture. Mobile places the generated parts between the short heading and three compact strength rows. On desktop, the image is beside the copy. All strength text remains visible, with the current step indicated by a dark rule and heavier heading. Reduced motion and failed layer loading show a static complete product with an ordinary section height; failure of the final image uses the intentional ProductFrame silhouette for the mirror or a labeled camera/audio silhouette for the inputs. The mirror keeps its drawing-based concept caption. Sensor-stage captions explicitly state `AI 생성 3D 구조 콘셉트 · 내부 형상은 설명용`; internal electronics are illustrative rather than certified teardown geometry. Manufacturer features are labeled as component specifications, with a native link to the existing technical disclosure.

## 2026-10-05 — Detail depth and coherent imagery

Every detail introduction has compact native contents with downward links to real sections. Keep the shared split title/description, open spacing, thin rules and white/cool-grey palette. FourFit adds observation rows, a dark question stage and unboxed answer comparison. Uses gives four large questions in two columns, native answer disclosures, audience rows and separate expansion copy. Team pairs the drawing-based concept with three principles and a material inventory. Narrow screens stack these layouts; no dashboard or scores.

Home retains compact FourFit/Uses. Service adds device roles and a restrained practice-loop note; entry kiosk precedes mirror. The graphite mirror section now uses an unboxed transparent product image. The new mirror is consistent across Home, Service, System and Team; older slim-mirror details remain archived locally. No new animation, generation or runtime package.

Service mobile device sections place heading/description, then product image, then role details. Desktop keeps the object beside both text rows. This avoids an entire mobile viewport of technical copy before the product.


## 2026-10-05 — System evidence and input relationships

Keep all approved mirror/camera/audio renders and assembly motion. Below them, four ruled rows connect each 4-Fit perspective to its intended input and reflection question. Use open spacing and typography instead of extra pictograms or cards. On narrow screens, each row stacks its perspective, input and reflection with explicit labels. The evidence inventory spans the container with material, current form and verification boundary; at 767 px and below it becomes one column. Seven existing native disclosures expose input/configuration, intended role and verification boundary. Exact hardware models and drawing dimensions remain within the native hardware disclosure.


## 2026-10-06 — Refine the global navigation

Use a white translucent header with a thin neutral rule. Strengthen only the header text identity (21 px / 650 on wide desktop) and keep the CarpeDM credit understated. Center the four content links; separate the optional operations link and service action with spacing and a short vertical rule. Current content links use a charcoal underline as well as color. The service action is compact charcoal with a 6 px corner radius, replacing the bright pill treatment. Preserve all label text and the owner's removed logo decision.

Below 1024 px, use a white disclosure with larger 23 px navigation rows, thin dividers and the existing decorative Arrow. Keep 44 px minimum action targets. Constrain the panel to the available viewport height with internal scrolling. Shared 80/60 px header-height tokens and footer text styling stay unchanged; hardware sticky offsets therefore remain unchanged. No animation package, new asset or scroll-dependent header state.


## 2026-10-06 — Remove duplicate detail breadcrumbs

At the owner's request, all five detail introductions begin directly with the section label and title, without the former home/page breadcrumb. Keep the existing introduction padding, contents and shared brand link to home. Remove breadcrumb markup and unused styles together.


## 2026-10-06 — final navigation and dashboard connection

Desktop GNB uses symmetric outer grid tracks so the four content links stay centered on the page independently of brand/service widths. Operations is introduced in Uses rather than competing in the GNB. Preserve the existing mobile disclosure, header heights, active underline and focus behavior. Uses adds an open two-column introduction with three operating tasks; narrow screens stack the content.


## 2026-10-06 — stronger GNB presentation

Refine GNB visual weight: 24 px / 700 desktop wordmark (22 px at 1024–1199), 15 px / 550 content links with header-height hit areas and a 2 px indicator at the header rule. Keep equal outer grid tracks. Use a compact 4 px-radius charcoal service action; its current-page state is outlined. Mobile keeps the existing disclosure, adds visible 메뉴/닫기 wording, a 프로젝트 살펴보기 label and a subdued 현재 페이지 marker. Reset desktop justify-self for the mobile utility block so the service action fills the panel. This supersedes the earlier 21 px wordmark and text-adjacent underline styling.


## 2026-10-06 — Home mirror without a backing plate

Home’s Smart Mirror preview inherits the shared transparent product stage with zero corner radius. The source alpha, complete product shape, fitting and concept caption remain intact, matching the existing unboxed Service mirror treatment.


## 2026-10-06 — Calm motion and stable assembly

Ordinary Reveal content fades subtly without vertical translation, preserving column alignment. Hardware progress uses a short time-based easing filter, and the assembled layers stay visible through the final hold; independently generated renders no longer crossfade into double outlines. Retain core-before-cover order, fixed part sizes and natural scrolling. At viewport heights of 740px or less (820px or less on widths below 768px), or with reduced motion, use complete images in natural-height sections so all strengths and disclosures remain reachable. This supersedes the earlier completed-image handoff; it does not change hardware claims or source assets.
