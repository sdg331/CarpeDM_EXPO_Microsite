# 4-Fit MirrorTing visual system

## Current implementation — light glass, 2026-10-16

The owner selected light glass and requested its application across the actual website. The [Light Glass design specification](light-glass-design-system.md) is now implemented and publicly deployed across Home, all detail pages, the legacy entry and the integrated sample dashboard. Its values are MirrorTing design choices, not measured Apple platform tokens or a native Liquid Glass renderer.

The local light theme supersedes black glass. The owner subsequently requested width/material refinement and public deployment with the dashboard; actual delivery evidence is recorded in qa.md. Keep the compact project card, guided detail explanations, factual scope, Korean/English content, local media, caption/arrow policy and existing interaction behavior. Dated sections below retain earlier design history; actual verification is recorded in `qa.md`.

The later mobile-app refinement below is implemented and browser-checked in the source. Its Git publication is separate from the previous public Pages release; this pass does not update gh-pages.

## Visual treatment
A product introduction with Apple-like restraint and Toss-like Korean clarity, using original assets and an original layout. Show the object before explaining the technology. No copied brand assets, fictitious product claims, metrics, dashboards, or interface simulations.

Home uses a frosted white card on a quiet #f5f5f7 canvas. Details and the sample dashboard use stable white reading surfaces, charcoal type and fine gray/silver rules. Bounded blur enhances only the Home card, header and phone navigation; expanded menus and dense content remain opaque. The dark hardware artwork keeps its original appearance. No dependency, runtime logic, route, source copy or media asset is changed for this theme.

| Element | Current treatment |
| --- | --- |
| Canvas | #f5f5f7 with quiet gray/silver gradients |
| Header and phone dock | White 82% glass with an opaque fallback; blur 24px desktop / 20px phone |
| Reading surfaces | Solid white, dark secondary copy, thin gray dividers |
| Selection | White or pale-blue fill, dark-blue label and border, with existing semantic state |
| Home card | White 88%–60% gradient frost, blur 24px desktop / 16px phone, 28px / 24px corners |
| Product imagery | Existing drawing-based mirror, contained at its natural proportions |
| Illustration | Native SVG silver-glass symbols; no cropped icon atlas or generated people in the primary flow |
| Motion | Existing assembly in a bounded, selected normal-flow stage; reduced-motion and media failure stay static |

Use one decorative arrow on the main Home action. Ordinary links rely on clear text, styling and visible focus; menu and disclosure controls remain. Technical connection diagrams may retain a meaningful direction arrow. Remove repeated image captions. Artwork provenance remains in metadata, descriptive alternatives and project documentation. Do not copy Apple/Toss assets or add their brand names to visitor UI.

Text selection uses dark text against a pale-blue highlight. Reading text uses #1d1d1f, secondary copy #515154 and auxiliary labels #626975. The main Home action uses white text on #0071e3; ordinary links use #0066cc. The existing rounded destination tiles remain 16–18px rather than being converted into unrelated pill controls.

## Page structure
1. Home: a single compact project card with CarpeDM/team link, 4-Fit MirrorTing name, AI smart mirror description, three practice modes and the contained drawing-based mirror. Main links are 작품 알아보기, 활용 장면 and 기술과 자료. The sample operations link is secondary. No header/dock/repeated sections compete with the card. Keep a horizontal card on desktop and a compact portrait composition on phones; allow normal scrolling on short screens and zoom.
2. Service: four topics, beginning with project understanding and a short visual practice loop, then authored dialogue, the six-step designed journey and two devices. Longer device roles expand on demand.
3. Four Fit: four accessible tabs with dimension-specific reflection. The authored comparison and retry steps are available in a native disclosure. No score or measured result.
4. System: software selection/input/dialogue/analysis/results first, with separate topics for selected mirror/camera/audio assemblies, evidence and proposed improvements/technology. The device diagram and input/reflection descriptions distinguish source-confirmed software from physical integration and accuracy validation. Operations remains a separate example demo.
5. Uses: three source-confirmed software modes first, then three proposed educational application contexts selected with one native select. One selected education guide retains three situations, four training steps, reflection questions, takeaways, preparation and development in six disclosures. Four shared dialogue examples sit in one native disclosure; operations remains a separate example demo.
6. Team: CarpeDM's purpose followed by three visible design principles and one disclosure for project materials. Avoid repeating the Home device and closing pitch.

On detail pages, the icon-only hamburger exposes 작품 소개, 활용 장면 and 기술과 자료. The phone dock returns to 명함 and those three subjects; dashboard access stays on the card and Uses operations topic. The brand returns home; Service has quiet text references to Four-Fit and Team. Every page adapts automatically to viewport width. Remove mobile-version selection links; `/expo/` is only a compatibility entry displaying the same responsive homepage. Labels can be refined after visitor testing.

## Foundations
- Shared text: #1d1d1f; secondary #515154; subtle #626975. Keep normal-text contrast on opaque reading surfaces and controlled glass backgrounds.
- Shared canvas: #f5f5f7, white surfaces, fine #1d27371f rules. Source imagery remains inside bounded media stages.
- Primary Home action: #0071e3 with white text; hover #0066cc, pressed #005bb5. Secondary links use dark text on white, with a stronger border on hover.
- Gray/silver rules, blue selected labels and semantic attributes indicate detail-page action/selection. Four approved silver-glass icons keep their existing artwork, Korean/English labels and conceptual scope on every page.
- Font: the device system stack first, followed by existing Pretendard fallbacks. No downloaded Apple font, remote font or new runtime dependency.
- Project name: 30–56 px; phone detail H1s 34 px; section titles roughly 26–36 px; body 16–17 px. Keep readable Korean line lengths and intentional line breaks.
- Home and detail content share a 1040 px maximum and the same fluid gutters. There is no fixed 420 px phone-card cap; the product column scales with the available width. Shared section spacing: 28–56 px according to content.

## Product imagery
Use local WebP renders. Home and Service share the drawing-based completed mirror used in System, with complete proportions. Service uses its existing alpha on the white explanation panel; Home contains the mirror beside the project identity; System retains neutral stages. Team focuses on its purpose without repeating the product image. Hero reuses the drawing-based assembled mirror at its full proportions; Kiosk retains the supplied render. The monumental Hero source remains archived. No fake screen content or assembled-device photography claim.

Product and scene images do not render AI/concept/non-photograph captions. Keep source classification and descriptive alternatives accurate; use neutral design-material wording in the evidence inventory. Missing media uses a labeled CSS silhouette; the mirror fallback reflects upper inputs, lower speakers and a broad base. Hero is eager-loaded; details are lazy-loaded. Intrinsic dimensions reserve space.

## Original glass icons
`GlassIcon` implements the four decorative 4-Fit vectors: Response, Voice, Expression and Posture. Overlapping translucent shapes, white edge highlights, gentle color gradients, and a small shadow convey glass without blurring text. SVG IDs use React `useId` so instances cannot collide. Icons are decorative, marked `aria-hidden`, and paired with meaningful text. No raster asset, WebGL, icon package or looping animation is needed.

## Interaction and accessibility
- Compact translucent sticky header and an accessible three-link disclosure on details; four direct links in the phone dock.
- A blue primary action with white text on Home; blue text links on light details. Main touch controls use 48px minimum targets and visible keyboard focus. Older inline/footer controls retain their existing 44px minimum where appropriate.
- The homepage shows a concise visual introduction; Service carries the conversation selector, mirror rationale, six-step intended flow and device detail. Conversation selection uses native buttons with aria-pressed and a polite live region. 4-Fit uses roving-focus tabs, ArrowLeft/ArrowRight wrapping, Home/End, and hidden inactive panels. Both interactions explain authored content without simulating AI. Native `details/summary` remains for hardware and technology, with visible plus/minus affordances.
- One-time progressive reveals only. Content stays visible before initialization; reduced-motion removes transitions and smooth scroll.
- Semantic landmarks, one H1, logical headings, descriptive image alternatives and Korean document language.
- Document language follows the visitor's Korean/English choice; Korean is the default.
- Home pairs identity and a contained device on phones, retaining a compact text/product composition at 320px. Practice situations use one labeled native select; all four 4-Fit tabs remain visible above one stacked panel. English 4-Fit labels use two columns below 600px; Korean keeps four columns. Tablet preserves layout without truncating headlines or navigation.
- Below 480px, Service's introductory showcase places its 200px product stage above a numbered, full-width practice loop with 16px body copy. The two-device topic uses one card per row and 16px descriptions. This avoids the small product thumbnail and narrow 14px text columns found during the public mobile walkthrough. Wider layouts and the compact Home are preserved.
- Reduced transparency/increased contrast and unsupported blur use opaque surfaces; forced colors uses system colors and selected borders. The bounded normal-flow hardware stage has `flex: none` so its explicit height cannot collapse in the automatic-height flex parent. No assembly algorithm is changed.
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


## 2026-10-07 — Speaker grille seating

Retain transparent anatomy layers and native scroll assembly. Register the left and right audio grilles independently to their housing openings using proportional offsets and a constant .94 scale. No background-bearing screenshot replaces the layer assets.


## 2026-10-07 — Silver, charcoal and restrained glass

Use silver material gradients on the Hero action and 4-Fit illustration stage, charcoal product/conversation stages, and translucent neutral gradients on the shared header and active conversation/4-Fit controls. Keep white/silver editorial sections, readable opaque copy panels, blue text actions and existing concept captions. Glass now extends to selection controls, superseding the earlier icon/navigation-only restriction. Hardware assembly retains its bright product stage and existing motion. The mobile menu uses an opaque silver fallback; header blur is progressive enhancement. No new assets, dependencies or layout changes.


## 2026-10-07 — Black silver-glass showroom reference

Owner supplied a black-background silver-glass office reference, correcting the earlier bright-silver interpretation. Home now uses a black showroom, white/silver text, dark glass navigation and thin luminous edges on conversation/4-Fit panels. WorkplacePractice is a centered scene above an opaque dark dialogue panel with four native manual selectors. Home and Service share this conversation scene; other technical detail stages keep their current light backgrounds. No autoplay or decorative looping animation. Supersedes the earlier white editorial Home canvas; preserves the monumental mirror Hero, factual captions and assembly work.


## 2026-10-07 — Premium silver-glass 4-Fit icons

Replace the four 4-Fit line illustrations with coordinated original silver smoked-glass 3D icons: overlapping dialogue bubbles, voice waveform, expressive face, upright bust. Keep the original line paths as image-error fallback. The single transparent 2×2 WebP atlas uses equal square cells, rendered at 200px desktop and 100px mobile. Decorative artwork stays aria-hidden and paired with the existing Korean/English labels. Navigation arrows/menu controls remain native simple affordances. This supersedes the earlier line-only 4-Fit illustration decision.


## 2026-10-07 — Equal visible icon sizing

Normalize the four atlas quadrants by their visible alpha bounds, keeping native aspect ratios: the longest visible edge is approximately 160px inside a 200px desktop stage and 80px inside a 100px mobile stage. Per-icon scales and offsets center the artwork; quadrant clip paths prevent neighboring icons bleeding into the stage after scaling. Reuse existing art and SVG fallbacks.


## 2026-10-07 — Expanded silver-glass workplace scenes

At the owner’s request, expand the black/silver glass visual narrative with six locally generated scenes in the same smoky optical-glass and satin-platinum material family. Home places arrival art in the problem section, a selected workplace scene in practice, quiet reflection after the experience steps, and an architectural collaboration scene before the closing. Service shares practice/reflection; Team shares closing. Alternate wide 960/1040px illustrations and a narrower 760px dialogue stage rather than repeat generic cards. Keep black image stages, restrained captions, intrinsic 3:2 sizing and mobile full-width stacking. Preserve approved device imagery and hardware scroll motion. No autoplay or looping effects.


## 2026-10-07 — Minimal silver-glass 4-Fit symbols

Owner disliked the heavy chrome atlas. Replace it with four restrained original SVG symbols: overlapping conversation panes, five voice bars, a simple friendly expression and an upright abstract person. Use a single frontal plane, smoky translucent faces, thin silver edges and a small constant depth offset. Avoid anatomical masks, realistic busts, thick chrome rims and saturated color. Reuse 200px desktop / 100px mobile square stages; visible geometry is approximately 145–150px / 73–75px. Keep labels, panels and interaction unchanged. This supersedes the bitmap atlas and per-quadrant transforms; the older asset remains archived locally.


## 2026-10-07 — Restore and subtly refine the dimensional 4-Fit icons

Owner prefers the earlier dimensional silver-glass design and requested only stronger individual characteristics. Use the edited v2 of the original atlas, retaining its material, soft highlights, front camera and four original object silhouettes. Refine rear reply separation, natural waveform heights, relaxed open eyes/small smile and upright shoulder/chest contours. No flat smiley, new visual category or panel redesign. Normalize dominant alpha bounds to approximately 160px desktop / 80px mobile in existing 200/100px stages. Adjust source clipping to isolate the waveform and retain the bust crown. This supersedes the minimal SVG-only presentation; native symbols remain solely as failed-image fallbacks.


## 2026-10-07 — Surface-conforming face mesh concept

Owner asked for a natural face mesh that suggests expression analysis. Preserve the approved dimensional face and silver-glass lighting, using a separate Expression asset with fine connected triangular geometry following the forehead, eyes, nose, cheeks, lips and jaw. Keep nodes integrated into the mesh rather than floating sparkles, with no neon, scan bands, progress indicators, scores or status UI. Response, Voice and Posture retain their exact v2 atlas artwork and sizing. Add the quiet visible label `표정 분석 시각화 콘셉트`; this depicts the intended visual idea, not live analysis.

The owner subsequently requested gently closed eyes. Expression v2 retains the same silver-glass face, smile and anatomy-aligned mesh with both eyelids comfortably closed. The other three perspectives remain unchanged.


## 2026-10-07 — Open the first-day scene with glass doors

Replace the static first-day scene presentation in Home's Problem section with a restrained paired-door reveal, preserving the existing arrival artwork and page length. Two smoky silver-glass leaves swing outward as the scene moves toward the viewport center. Use a single locally generated transparent paired-door image, thin silver rims and quiet frosted reflections. No extra full-page interlude, duplicate scene, sticky scroll trap, autoplay, looping motion or icon redesign. Motion is tied to natural scrolling and reverses naturally when scrolling upward. Unsupported scroll timelines and reduced-motion preferences show the complete scene immediately.

The owner clarified that doors must open toward the viewer. Preserve the outer hinges and forward rotation signs; expose the expanding top/bottom corners instead of clipping them to the static image rectangle. Strengthen desktop perspective to 1400px, keep horizontal clipping, and delay opening to entry 100% → cover 65% so enlarged leaves do not cover the preceding heading. Preserve transparent glass margins and place the concept caption above the decorative leaves.


## 2026-10-07 — Reduce homepage reading load

This supersedes the 2026-10-05 full eight-chapter homepage and two-action Hero. Retain the exact monumental Hero promise, one enabled service action, concise Problem with its glass doors, a four-icon overview, two physical-device previews and compact closing. Chapters after Hero are now 01–04. Remove repeated dialogue panels, six-step explanations, applications, long observation copy and the unavailable video control from Home. Detail pages keep their full content; Service gains the moved Introduction. Home's four icons are an open row on desktop and a 2×2 layout on mobile, with existing material, optical scales and fallbacks. No extra overview cards, illustrations, animation or dependency. Keep concept labels and one clear detail link per topic.


## 2026-10-07 — Separate Home atmosphere from detail-page clarity

Owner found the mixed styles awkward. Keep Home and its doors, icons, device artwork and silver actions unchanged. Limit silver surface tokens and header blur to the home data-page scope. Detail pages use opaque white navigation, flat blue selected controls, cool-grey icon fields, light conversation/question panels, white mirror explanations and a flat grey Team closing. Reuse dark source artwork inside media frames only. Preserve all public text, interactions, hardware assemblies and fallbacks.


## 2026-10-12 — Reference-based camera exploded view

Camera alone supersedes the earlier three-layer housing/mount animation: show one coherent transparent reference-based exploded view, with subtle 3% vertical drift and 4% scale change on scroll. Preserve separated components throughout, avoiding false seating of unmatched geometry. The neutral stage, numbered feature rows and native chapter highlight remain. Static/reduced-motion and failed-media modes retain ordinary flow and an intentional silhouette. Mirror and audio choreography remain unchanged.


## 2026-10-12 — Camera parts join on scroll

Supersedes the fixed exploded-view treatment above. A coordinated 2×2 atlas contains completed camera, hollow housing, connected internal module and front plate. Keep part scale constant during movement, converge along the front opening axis, fade internals as they enter the opaque enclosure, then blend registered completed view only after motion ends. No viewport-spinning camera or new framework. Static presentation shows the closed device.


## 2026-10-12 — Vertical camera assembly

Owner prefers vertical joining inspired by the supplied exploded reference. Keep housing at its final center. Move internal sensor/microphone board down from 52% above its seated position, then move optical front up from 40% below. Horizontal registration stays constant; no sideways travel. Reuse the same atlas, scale, easing, occlusion and completed pose. This supersedes the prior diagonal/front-opening-axis motion only.


## 2026-10-12 — Camera visibility and coherent assembly correction

Supersedes the independently registered v3 layers and final-image blend. Roof, visible body side and optical face now use complementary masks of the SAME completed atlas tile, so zero translation reconstructs the same silhouette with no image handoff. Core/roof descend by 40%; front rises by 32%. The open-tray illustration and internal PCB fade as seating progresses; exact manufacturing occlusion remains illustrative. No scale changes during movement. Short camera sections use ordinary flow and remain animated; reduced-motion users retain the closed static view. Mirror/audio short-screen fallback is unchanged.


## 2026-10-13 — Restrained silver glass and shorter screens

Owner requested stronger applications, plain Korean wording and a premium silver-glass site with bounded information per screen. This supersedes the exact older Hero promise, the four-chapter/no-applications Home composition, and flat blue detail controls. Keep the dark Home, glass artwork and hardware assembly. Detail intros use a pale silver gradient; shared navigation uses a mostly opaque glass surface with blur only when supported. Application and 4-Fit controls use silver selected surfaces, graphite rules and semantic selection. Reading panels remain opaque. No additional illustrations, libraries, timers or scrolling effects.

Home has chapters 01–05 after a shorter Hero; mobile Hero is 680–760 px rather than forcing 820 px. Uses shows one application at a time. Authored dialogues and expansion ideas use native disclosures; the four dialogue disclosures share a name so supported browsers keep only one open. No fixed-height copy containers or clipped text. All three application buttons remain visible on 360px screens. Existing header-height tokens and hardware calibration remain intact.

4-Fit keeps one selected perspective visible; its longer workplace observation rows are behind `업무 보고에 적용해 보기`, a native disclosure. The existing reflection content and keyboard tab semantics are preserved.

## 2026-10-13 — One-minute mobile home

Mobile is the primary design target. Home contains roughly 500 Korean characters as a reading target, not a measured reading time. Use 16 px minimum for visible home text and notes, 17 px body/action text, 21–22 px list headings and 32 px or larger Hero type. A 200 px mobile image stage preserves the existing concept; no fixed full-screen sections or new image generation. Thin-rule application rows and development summaries replace duplicate problem, device and team sections. All detail pages remain available through a 48 px hamburger control and large menu links. Escape restores focus, outside pointer interaction and focus leaving the header close the menu. This supersedes the six-section Home and desktop horizontal menu decisions. The existing shared Home at /expo/ remains.


## 2026-10-13 — Concrete wording and narrow 4-Fit labels

Replace generic experience slogans with headings naming the actual device, input or material. Preserve the current visual system, artwork, assembly and text hierarchy. At mobile widths up to 767px, hide only the aria-hidden ordinal in 4-Fit tabs: the full English name and Korean label remain, preventing Expression from touching the following tab at 360px. Selection, focus and panel semantics are unchanged. Concurrent Home/header design changes are preserved.

## 2026-10-13 — Restore existing effects after mobile regression feedback

The owner rejected the flattened mobile redesign because it removed the established effects. Restore the cinematic full-width Hero image and overlay, silver pill action, original native scroll-driven DoorTransition inside applications, restrained glass application surface and four existing silver-glass 4-Fit images. Keep concise use/development wording and the large hamburger menu. This supersedes the three-rendered-section/no-door/no-icon layout, not the mobile-first content goal. Home now has four rendered sections. Only Home explanatory labels get the 16 px floor; remove the broad #root p/small/dt/dd rule which interfered with calibrated fixed hardware stages. Door framing uses overflow:clip, not overflow:hidden, so it does not create a scrolling ancestor that stalls its view timeline. Unsupported timeline/reduced-motion behavior retains the complete static scene.

## 2026-10-13 — Quiet controls and reading surfaces

Consolidate page navigation in the hamburger. Remove duplicate contents chips, next-page banners, repeated footer menus, section navigation and closing actions. Keep one primary action on Home; use contexts are static descriptive rows. Both educational-context and workplace-scene choice use one labeled native select with a thin baseline and 52 px target. Uses' reading panel loses its thick border/rounded card, dialogue examples share a single native disclosure, and two short future contexts are ordinary articles. Four Fit's necessary tabs keep their keyboard semantics but lose enclosing glass pill boxes and filled backgrounds; underline indicates selection. The glass artwork and Home application surface remain. Content-anchor focus does not outline an entire full-width section; interactive links/buttons/selects retain visible focus. Do not use a global font change that affects calibrated hardware views.

## 2026-10-13 — Three-item icon-only hamburger

Per the owner's explicit correction, show only the hamburger/X icon in a 48×48 px control; preserve aria-label, aria-expanded, Escape focus restoration and outside/focus-leave closure. Navigation is exactly 작품 소개 (/service/), 활용 장면 (/use-cases/) and 기술과 발전 방향 (/system/). 4-Fit and Team remain reachable from a quiet plain-text reference sentence on Service. This supersedes the five-item menu and visible 메뉴/닫기 label. No visual effects, hardware logic or dependencies changed.

## 2026-10-13 — Whole-site phone layout audit

Phone-specific layout is maintained in src/styles/mobile.css after component/showroom styles. Detail introductions use 30 px H1s, 28 px section headings, 16 px reading copy, 14 px secondary labels, 40 px base section spacing and 32 px Uses/Development spacing. Scene selectors and Four Fit tabs appear earlier in the reading flow; on phones, tabs show clear Korean names while aria-label retains full English/Korean names. Preserve a 56 px tab hit area. Portrait product stages use bounded 250–340 px height with contain-fit assets, keeping the whole product visible. Hero height responds to the phone viewport within existing bounds.

Header token and actual header are both 68 px; menu and anchored content use the same height. All hardware scenes use normal document flow on narrow phones, retaining the scroll assembly rather than tall desktop sticky tracks. Existing camera progress mapping drives all normal-flow scenes; full desktop stages remain sticky. Reduced motion and media failure still select static output. Keep layer elements in layout while they load to avoid a lazy-loading deadlock; reserve completed image until all layer assets are ready. Sensor/part geometry and calibrated offsets are unchanged.

## 2026-10-14 — Detailed educational uses

The utilization expansion adds detail after the existing context selector. Use thin horizontal rules, headings and readable 16 px copy rather than more buttons/cards. The selected guide stacks on phones and uses a narrow heading column plus a reading column from 768 px. Keep the initial summary/selector compact and the dark Home artwork unchanged. No new motion or media is introduced.

## 2026-10-14 — Show implemented modes and software flow first

Correct interview and job training as current software modes following owner confirmation and repository review. Uses shows three quiet static mode rows before educational proposals. System begins with the source-confirmed software flow and preserves all later assemblies; development is refinement/validation of existing capabilities. Home stays concise with one action and the same cinematic/glass assets. No new control, visual asset or animation.


## 2026-10-14 — Short mobile topics and silver materials

The latest user request asks for all screens, including the dashboard, to feel natural on mobile and avoid long scrolling. Keep the three-item hamburger; add a compact bottom dock with safe-area clearance and 54 px targets. Hero uses a full-proportion drawing-based product stage, a short explanation and two clear destinations. It no longer crops a monumental room scene. Source art remains archived locally.

Split Service and System into accessible topic tabs. Uses separates practice modes, education proposals and operations. Keep content mounted and reveal the owning tab for incoming fragments. Expandable copy must remain natural-height and unclipped. The education details, system connections/inputs, extra device roles, Four-Fit comparison and Team materials use native details/summary.

Hardware selects one mirror/camera/audio stage, reusing calibrated layers and the existing progress curve within natural flow on all widths. This resolves the previous desktop scroll length while preserving the earlier requested effect. Do not regenerate or change sensor geometry.

The independent dashboard shares the silver palette and mobile dock. Overview alternates team comparison and follow-up; phone team rows disclose metrics. Team selection becomes a native phone select. Record pages show four items per page, retaining pagination and full CSV scope. Device fleet and output records are separate phone views; reports and audit extras are native disclosures. No dataset, scoring, storage or hardware-control behavior changes.

## 2026-10-15 — Digital card correction

The owner reported the overall UI still felt awkward and clarified business-card usage. Reduce competing decoration and repeated navigation. Center one satin silver card on the entry; identify the project before the slogan and place three plain-language destinations immediately below it. Shorten detail H1s, use thin topic underlines and keep the separate operations demo visually related but secondary. Dashboard metrics share one compact divided panel and its period/team filters no longer sit in another outer card. No new artwork or invented contact details.

## 2026-10-15 — Quiet image presentation and links

The latest owner request supersedes the mandatory visible image-caption policy. Delete caption markup for ProductFrame/SceneFigure and the hardware stages, remove unused caption styling, and retain their exact media/error/motion logic. Keep one Home primary-action arrow; remove ordinary-link arrows from the card, shared menu/footer and detail links. A technical connection diagram keeps its direction indicator. Neutral Expression subtitle: `표정으로 전하는 태도`. No new image, layout framework, capability claim or deployment.

## 2026-10-15 — Black-glass correction

The owner explicitly requested a black background and glassmorphism after reviewing Service. Change material/colors in existing CSS and browser theme-color metadata, retaining the card composition, short topic/disclosure flow, local assets, one Home arrow and no repeated image captions. The dashboard shares the palette, including tables, native controls, semantic status badges, drawer and dialogs. No theme switch, new illustration, motion, dependency or content/state behavior is introduced.

## 2026-10-15 — Friendly exhibition depth

The newest feedback asks for a more complete and welcoming introduction. Keep one compact Home card, but give its three destinations clear helpers and replace the abstract body with a concrete mirror/four-perspective explanation. Preserve the black palette, one Home arrow and existing local artwork.

Basic understanding belongs in the default view: why this practice exists, how to start reading, the two device roles, a visible four-stage system map, code evidence and team design criteria. Optional technical/educational depth stays in native disclosures. Avoid stacking repeated large headings, generic instructions and scope warnings ahead of the main image/diagram. Phone intros omit only the redundant desktop eyebrow. Core copy remains 16 px; control hints are secondary, with readable contrast.

Use one bounded product-and-process panel on Service/System rather than empty rules or repeated generic cards. The image is contained within an explicit-width stage, preserving aspect/proportions and leaving the reading column clear. Source cards are editorial rows, with direct human-readable code links; no fake terminal, telemetry or completion badge. The 6-step visitor design becomes a compact 2-column phone / 3-column desktop grid. No added animation or artwork generation.

A small description under each selected outer topic explains what the user can read. Menu descriptions and one quiet next-subject footer link make the reading sequence discoverable. Existing keyboard, fragment, mounted-panel and reduced-motion behavior stays. Newly authored practice explanations are disclosed as editorial examples; evidence is pinned to inspected source, and onsite acceptance remains separate.

## 2026-10-16 — Language choice on the digital card

Place `한국어 / English` beside CarpeDM at the top of the existing card. Keep the university credit below the team name so the two language links retain 44 px targets on phones. Use the existing dark glass and silver border, a visible selected surface and `aria-current`; each language names itself and declares its own `lang`/`hreflang`. No flags, welcome modal or extra entry page.

Detail pages offer the same control inside the existing hamburger menu. Preserve topic/fragment navigation when changing language. English 4-Fit tabs show each official English dimension once. Let longer English copy wrap naturally; do not reduce body text or clip it to force a fixed card height. The original local assets, fallbacks, calibrated assembly and reduced-motion behavior remain.

## 2026-10-16 — Mobile web with an iOS app rhythm

The owner requests mobile web first, responsive wider layouts, an Apple-app feel and Git publication. Retain the light-glass project card and existing content. Make the phone title 34–44px (30px below 360px) with a full-width 17px introduction beneath the title/product row. Use the device system font first, 34px detail titles, opaque gray segmented topics, a rounded inset menu and a centered bottom dock capped at 440px. All existing language, keyboard and fragment interactions remain.

Enable safe-area-aware layout on all seven HTML entries without limiting zoom. Gutters respect lateral insets, the sticky header includes the top inset once, Home respects top/bottom insets and the existing footer clears the bottom dock. Tablet/desktop retain the wider two-column product composition. The source is a mobile website; no native wrapper, Apple font/assets or new motion is introduced. Browser checks and source publication are recorded separately from public Pages deployment in QA.
