# Architecture

## Runtime and scope
Static multi-entry React + TypeScript microsite built with Vite and npm. Use Node.js 22.13+ or 24 LTS; the initial workspace uses Node 24. The full toolchain's ESLint requirement is stricter than Vite's minimum. No backend, router, identity API, analytics, form submission, cookies, camera permissions, or hardware access is needed for the introduction page. UI state is limited to navigation, conversation selection, application selection, 4-Fit tab selection, progressive reveals, and media fallback.

## Source structure and responsibilities
```text
AGENTS.md                  future-session instructions
docs/                      product, design, copy, architecture, QA, decisions
public/                    project-owned static media
src/
  components/
    Header/                navigation and mobile disclosure
    GlassIcon/             four original decorative silver-glass 4-Fit symbols
    SectionHeading/        optional editorial heading utility
    StatusNote.tsx         shared public-scope explanation
    Reveal/                optional native viewport reveal
    ProductFrame/          real-image slots and concept fallbacks
  sections/
    Hero/ ExperienceFlow/ SmartMirror/ IdKiosk/
    SystemArchitecture/ Technology/ Closing/
    Problem.tsx WorkplacePractice.tsx FourFit.tsx UseCases.tsx TeamStory.tsx Evidence.tsx
  data/                    typed public copy, experience, technologies, media
  styles/                  tokens, globals, typography, section styles
  App.tsx                  page composition and shared footer
  main.tsx                 shared home/detail React entry
index.html                 homepage metadata, language, no-JS message
service/ four-fit/ system/ use-cases/ team/
                           separate HTML entries and metadata
expo/index.html            legacy entry using main.tsx and the same home App
```

Do not create placeholder files merely to fill a directory. Components represent real UI concepts. Section-local CSS may be colocated with sections; shared layout, interaction, and tokens belong in `styles/`.

## CSS strategy

Visual scope: tokens.css supplies the light palette, mobile.css adjusts narrow reading and the existing silver.css supplies stable white surfaces, bounded glass navigation and legacy-section palette alignment. Hero.css defines the frosted digital project card. Home and all detail containers share the 65rem maximum and fluid gutters; no phone-specific card-width cap remains. Home composes only Hero and omits shared header/footer/dock; detail pages retain them. PageTabs uses existing native button/tab semantics, a white selected surface and blue label. English 4-Fit labels remain visible on phones with a two-column layout. The normal-flow hardware stage explicitly opts out of flex sizing to preserve its set height; assembly geometry/state/math is unchanged. Media classification remains in metadata, alternatives and documentation. No theme switch, client router or runtime dependency.
Native CSS imports with global tokens and prefixed component/section class names. Use fluid typography, grid, flex, responsive gutters, and content-driven media queries. No CSS framework. Public layout primitives are `.container`, section spacing, light section theme, status note, eyebrow, and text links; avoid generic abstraction when markup is not repeated. Dark product stages and light explanation sections share semantic token names so component copy and borders inherit the correct contrast without duplicate markup.

## Data and content

`src/i18n.ts` resolves `?lang=ko|en` before a saved `mirrorting.language` preference, then defaults to Korean. Storage reads/writes are guarded; explicit language links also work when storage is blocked. `t()` selects authored local English text from `src/data/en.json`, retaining Korean and unchanged product names as fallbacks. No translation service, locale package, React context or router is added. The existing multi-entry page load applies the language before React renders, and `main.tsx` updates document language, title, description and OG fields. Static source HTML remains Korean.

`LanguageSwitch` uses native links on Home and in the detail menu. `localizedHref()` uses URL/URLSearchParams so queries and fragments survive a language change. `sitePage()` applies the choice to cross-page links and legacy Home fragment redirects; `siteAsset()` and external/dashboard destinations retain their original semantics. A language change reloads the current entry: URL topic/context survives, while unsaved local selections/disclosures reset as with a normal reload. Only the language preference is stored; no visitor profile or analytics is introduced.

`src/data/useCases.ts` supplies the three shared application summaries, detailed educational proposals and source-confirmed practice-mode descriptions to `UseCases.tsx`. Each typed application includes situations, proposed steps, reflection questions and preparation/development copy. Only the selected guide is rendered. The existing short summary remains a polite live region; the long guide stays outside it to avoid automatically reading the entire article on selection. All content is local and synchronous; no data collection, backend, generated feedback or new state system is added.

`docs/content.md` is the editorial authority. Typed TS data modules mirror the actual public copy and array-based rows without a CMS or runtime fetch. Keep product facts traceable to `docs/product.md`. Document updates accompany material copy changes. These static pages have no asynchronous business data, so do not invent skeleton loaders, fake loading states, or an artificial API.

## Images
`src/data/media.ts` holds optional `hero`, `reflection`, `mirror`, and `kiosk` asset slots with source, alt, intrinsic dimensions, and a required concept/photograph kind. Loaded images use their intrinsic aspect ratio and contain fitting; Hero places the existing ProductFrame beside the HTML project identity, containing the full object without cropping; Service's mirror stage has a transparent CSS background to expose the existing WebP alpha; asset provenance stays in its classification and descriptive alternative. Use an omitted slot for absent photography, and a stateful `<img>` error fallback for broken files. Do not request nonexistent default URLs. Keep presentation aspect ratios stable. ProductFrame renders the original CSS illustration and accessible description when an asset is unavailable. Per-image caption markup is omitted; provenance remains in media classification and descriptive alternatives. Configure future public assets through `siteAsset()` so nested pages and subpath deployments resolve the same local media; noncritical photographs are lazy loaded.

## Responsive and interaction strategy

The mobile-app pass keeps the same static entries and native navigation. All seven HTML viewport declarations enable `viewport-fit=cover` without restricting zoom. The shared gutter takes the larger of the normal gutter and the left/right safe insets. `--header-height` includes the top inset; Header adds that inset once, and its inner row subtracts it to retain the 68px control row. Existing scroll offsets use the same token and hardware motion reads the measured header. Hero's description is a grid item: below both columns on phones and under the title alongside the product on larger screens. The bounded mobile dock, inset disclosure menu and opaque topic segments reuse existing CSS and state. No manifest, service worker, router, dependency or sample-dashboard source change is added.
The homepage contains one digital project card with three native detail links, a team link and a secondary sample-operations link. Service contains situation examples, mirror rationale, six intended steps and Kiosk → Mirror introductions; Four Fit uses native buttons with tab semantics, roving focus and hidden inactive panels. System shows software flow first, then drawing-based hardware assemblies, evidence, improvements and technology. Uses shows three source-confirmed practice modes, one of three educational guides, one authored-dialogue disclosure and the separate operations demo. Team contains a short purpose and native disclosures for design principles and project materials. The mobile header closes on selection or Escape and never traps focus. Cross-page links are native relative links; the active menu destination uses `aria-current="page"`. Hardware and technology details use native `details/summary`.

## Motion
IntersectionObserver only enhances offscreen sections with a short reveal. Default content is visible. Observe once, disconnect on cleanup, and avoid concealing focused content. Match reduced-motion preference in CSS and JavaScript; if the API or observer is unavailable, keep content visible. Avoid scroll listeners, page progress calculations, or per-frame JS unless a demonstrated need appears.

## Dependencies and tooling
Production: React and React DOM. Development: Vite and its React plugin, TypeScript, ESLint with TypeScript / React hooks / React refresh support, and types. Lock versions in `package-lock.json`. Do not add production packages for icons, animation, styling, state, or routing. Test tooling should stay proportional; browser interaction verification and compiler/linter checks cover the initial static implementation.

## Commands
```sh
npm install
npm run dev
npm run lint
npm run typecheck
npm run build
npm test
npm run check
npm run build:release -- --dashboard /path/to/dashboard-app
npm run verify:release
npm run preview
```
`build` also checks TypeScript before Vite emits `dist/`. `typecheck` is available separately for clear verification. ESLint must reject unused disable directives. Use `npm ci` on subsequent clean installations / CI.

The Vite development server is fixed to port `5174` with `strictPort`; the production preview is fixed to `4175`. `vite.config.ts` builds home, five detail pages and a compatible `/expo/` homepage entry as static HTML inputs without a client router. This avoids silently switching to an unknown port when another local project already uses Vite's default `5173`.

## Deployment assumptions
Output is static `dist/`, including five detail directories and `dist/expo/index.html`. Vite `base: './'` keeps generated bundles portable. Each HTML entry declares `data-site-root` (`./` or `../`), used for links and public media so the same build can sit at the domain root or a repository subpath. In-page sections use fragments; the legacy `/expo/` entry sets data-site-root="../" and uses the shared homepage with relative parent paths. GitHub Pages serves the root of the existing `gh-pages` branch at https://sdg331.github.io/CarpeDM_EXPO_Microsite/. The 2026-10-06 production build from source `016189d` was published in deployment commit `fd27954`, preserving branch history with a normal push. No automatic deployment workflow was added. The final release adds the existing sample dashboard build under the same public site; see the 2026-10-06 final connection section below. Canonical and absolute social image metadata remain follow-up work. Existing Open Graph title, description, locale, and type provide a metadata structure; add a real absolute image URL and canonical URL only after the host is chosen. Test the built result with `npm run preview`.

## Sources checked for the initial setup
- [Vite getting started](https://vite.dev/guide/)
- [React: build from scratch](https://react.dev/learn/build-a-react-app-from-scratch)
- [typescript-eslint setup](https://typescript-eslint.io/getting-started/)

Use actual package and Node engine metadata during dependency upgrades; do not assume an old version requirement still applies.

Workplace situation examples live in `src/data/experience.ts`. Service renders `WorkplacePractice`, with a selected index and aria-pressed buttons updating an aria-live region. Home links to it. Uses links to the service selector. FourFit keeps one selected index and button refs for ArrowLeft/ArrowRight, Home and End focus. Inactive panels use native hidden plus a matching CSS rule. No runtime dependency or data service is added.

The shared App restores an incoming fragment after React mounts, scrolls without animation and focuses the target. Same-page links continue to use native navigation. Unknown fragments are ignored.

Hero reuses ProductFrame with its source failure silhouette. A WebP derivative of the 1672×941 generated PNG is used for runtime (about 50 KiB); the PNG is retained as the source. Hero styles control background placement, mobile crop and readable text independently of the asset. No new dependency or additional image-request state is needed.

The custom logo component, exports and favicon were removed at the owner’s request. All seven HTML entries, including the legacy home alias, use an empty data icon to avoid a stale custom icon or implicit favicon request. Artwork/team identities remain ordinary HTML text.

The separate ExpoPage and expo.css are removed. All entries now use main.tsx, App and the same native responsive styles. Keeping expo/index.html as a compatible home entry avoids a redirect, user-agent detection, extra state and broken older links. NFC/QR should point to the public homepage.

## 2026-10-05 — Editorial composition

Reuse Introduction for the mirror-interface explanation and ExperienceFlow on both Home and Service. `media.reflection` points to the already present 1122×1402 light mirror WebP and uses the existing ProductFrame success/failure behavior. No new asset load mechanism or runtime dependency is added.

The four existing FourFit records include authored SVG path strings. The common SVG is decorative, needs no definitions or generated IDs, and changes with the same selected index as the text. Tab IDs, keyboard wrapping, Home/End, hidden panels and focus behavior remain unchanged. Practice state and data remain unchanged; the new presentation still labels every conversation as authored content.

`src/data/paths.ts` now supplies the four shared navigation destinations to Header and the footer. Service is the header action and an additional footer destination. PageIntro uses a section label and responsive title/description grid. The owner removed the duplicate home breadcrumb; the shared brand remains the home link. The 80 px desktop / 60 px mobile header heights are shared CSS tokens used by anchor offsets. No router, scroll listener, animation library, device detection, network API or hardware interaction is introduced.

## 2026-10-05 — Image-based hardware assembly

`sections/HardwareAssembly/` owns the System-only mirror, camera and audio scroll presentations. `HardwareDetailAssembly.tsx` renders the two actual hardware-detail stories with their strength rows. `useAssemblyScroll.ts` reuses the existing passive-scroll/resize/preference logic for all three stages; `motion.ts` remains a pure, directly testable helper. The owner rejected the mesh renderer and requested generated 3D images based on supplied engineering PDFs. `scene.ts`, Three.js and its type package are removed. React and React DOM remain the only production packages. The earlier manufacturer CAD derivatives/licenses are preserved locally in `output/hardware-cad/`, outside Vite's public output; `scripts/convert-hardware.cjs` remains an offline reference utility.

Twelve built-in image_gen outputs are saved as PNG in `output/hardware-renders/`. Alpha-preserving WebP derivatives in `public/media/hardware/` total about 1.18 MiB: the original six renders plus three camera and three audio component layers. Mirror images are 1086×1448; sensor images are 1448×1086. Camera/audio completed poses reuse their original close-ups; illustrative internal layers progressively overlap before the closed layer composition holds. `siteAsset()` preserves nested relative paths; native lazy loading avoids requesting them on other pages. No remote image service, API key or hardware access is needed at runtime.

`motion.ts` supplies clamped progress and sequential smoothstep assembly: internals move at .10–.40 and front covers at .44–.76. Chapters switch at .44 and .84; the same closed layer composition holds after assembly. The separate completed image is used only for static presentation and error fallback, avoiding a geometry-changing image handoff. A time-based exponential filter with a 65ms time constant eases wheel/trackpad steps independently of frame rate. Each stage owns at most one pending requestAnimationFrame; it continues only until progress reaches its current target within .0005, and stops when settled, hidden or offscreen. Initial entry and boundary positions use their actual scroll pose. CSS variables update without React scroll rerenders. ResizeObserver, preference/viewport changes and listeners are released on cleanup. Reduced motion, failed anatomy and viewports 740px high or less (820px or less on widths below 768px) use natural-height static sections; their product stages are bounded with clamp while copy remains in normal document flow. No perpetual loop, WebGL, scroll interception or added animation package. Three strength rows remain in the document, while data-phase controls their emphasis. A failed completed image uses the existing labeled silhouette. One failing stage does not disable the others. The existing #hardware-inputs anchor is preserved.

All anatomy and completed images sit inside one centered plane with their source aspect ratio (3:4 mirror, 4:3 sensors). Native container size units fit that plane to its stage. Part sizes stay constant during movement, and the same enclosing scale applies to the completed image. CSS registration values remain adjustable. The camera/audio stack is housing → core → cover. Audio's core and cover images are each reused in three clipped decorative regions with individual origins and offsets; only four unique image URLs are needed for the stage. Driver depth fades as its grille seats because independently generated perspectives do not supply a real 3D occlusion mask. Matching CGI passes are the documented upgrade for exact geometry.

The shared hook owns `data-render` and the image-stage `aria-busy` flag. Captured native image-load events refresh them. `assemblyRenderState()` waits for all four images during animation, but only the completed image in static mode, so hidden lazy layers cannot leave the visible stage perpetually busy. Its failure priority and static/scroll readiness are covered by the existing small Node check. There is no separate image-loading state machine or additional dependency.

The accessible section label/description explain the whole construction without requiring animation. Visual progress labels are decorative; the native architecture skip link and existing details remain keyboard usable. `node tests/hardware-motion.mjs` checks scroll bounds, monotonic assembly, non-overlapping core/front intervals, chapter boundaries, frame-rate-independent damping, target convergence and static readiness using Node 24.

## 2026-10-05 — Detailed editorial pages

App's PageContents renders native fragment links on all detail pages. FourFit, UseCases and ExperienceFlow accept an optional detailed prop: Home stays compact while details add authored reflection, scenarios and scope guidance. FourFit observation data is keyed by confirmed English names. Existing keyboard state and workplaceMoments are reused. TeamStory is a separate two-section component; Closing stays shared. New section-prefixed CSS complements shared primitives.

ProductMedia's optional caption distinguishes drawing-based renders from other concepts. Mirror and reflection share hardware/sm-assembled-v1.webp (1086×1448) and its browser cache. Existing ProductFrame error behavior and eager/lazy loading remain. No router, API, dependency or additional motion state.

Run node tests/site-build.mjs after build: it checks seven built entries, relative assets, unique detail titles, Korean language, descriptions and essential media. Browser QA separately verifies runtime content, links and rendering.

## 2026-10-05 — Standalone dashboard link

`data/paths.ts` validates the public `VITE_DASHBOARD_URL` as an absolute HTTP(S) address. Development alone defaults to `http://127.0.0.1:4174/#/overview`; an explicit blank value or an unconfigured production build omits the header link. Header reuses its existing desktop/mobile navigation and closes the menu on selection. No dashboard code, router, API, authentication or dependency is added here. Configuration and scope are documented in `dashboard-integration.md`; `node tests/dashboard-url.mjs` exercises the actual source with representative environment values.


## 2026-10-05 — System detail audit

SystemArchitecture keeps the existing device diagram and native hardware disclosure, adds four static input/reflection rows, and separates the four-step visitor design from the independent operations example. Evidence reuses the existing validated dashboardUrl and native new-tab anchor, showing it only when configured. Its existing capture failure state is unchanged. Technology data now has input, description and boundary fields, rendered as a semantic definition list in each of the seven existing native disclosures. No router, listener, API, generated media, dependency or hardware access is added.

Hardware source links deliberately navigate to the native hardware summary; Enter expands it. Browser verification found no need for a second disclosure state or hash-change listener.


## 2026-10-06 — Header navigation groups

Header's existing native nav contains two plain div groups for content links and utility actions. Reuse navigation, dashboardUrl, siteRoot and Arrow. The existing isOpen state, Escape focus restoration and link-close handlers are unchanged. Desktop now starts at 1024 px in both matchMedia and CSS; a resize to desktop closes the disclosure. Below that width, display:none removes the closed menu from keyboard navigation. Native max-height/overflow-y and overscroll-behavior cover short viewports without scroll locks or a modal focus trap. Header brand overrides are scoped to site-header; shared footer brand styling and header-height tokens are untouched. No dependency or new data/API behavior.


## 2026-10-06 — final navigation and dashboard connection

Reuse the shared validated dashboardUrl for Uses and Evidence. Production resolves dashboard/#/overview against the entry baseURI and siteRoot; development retains port 4174. The independent React dashboard build is copied into dist/dashboard after the microsite build and published in the existing gh-pages root. No router or runtime dependency is added to the microsite. Header retains the native nav, disclosure state and keyboard handling; desktop uses CSS grid with display:contents on the nav to center its link group.


## 2026-10-06 — stronger GNB presentation

Header.tsx only changes presentation markup. Existing isOpen, Escape focus restoration, resize closing and link-close handlers remain. Header.css consolidates prior desktop/mobile overrides and removes unused operations selectors. Shared header-height tokens and footer brand styling are preserved. The mobile action resets justify-self to stretch and width to 100%; otherwise current browser block self-alignment shrinks it to its content width. No package, new listener, breakpoint or hardware-scroll change.

The `#hardware-details` fragment targets the native summary so keyboard visitors arrive on the control that opens the technical disclosure. Summary anchors share the header scroll clearance.


## 2026-10-07 — Audio surface registration

`HardwareAssembly.css` corrects only the two speaker surface transforms: left (-.35%, -.2%) and right (-3.4%, -1.4%), both at .94 scale. Existing assets, scroll timing, static completed image and error fallback are reused.


## 2026-10-07 — Silver, charcoal and restrained glass

Visual update uses existing native CSS and three shared material tokens (glass, silver, edge). No runtime dependency, component state, route, media, hardware motion or content change. Existing assembly CSS edits are preserved.


## 2026-10-07 — Black silver-glass showroom reference

`WorkplacePractice.tsx` adds one local scene with intrinsic dimensions, lazy loading and onError fallback. `WorkplacePractice.css` styles the shared conversation section; `showroom.css` scopes the darker editorial palette to the Home root (including the EXPO compatibility entry). Imports follow base/component CSS so intentional overrides are deterministic. The 1536×1024 WebP is about 109 KiB. No dependency, route, timer, AI or hardware interaction added.


## 2026-10-07 — Premium silver-glass 4-Fit icons

FourFit renders four CSS-clipped quadrants from one locally hosted 1254×1254 alpha WebP (241780 bytes), preserving static relative asset paths for all entries. One shared image-error state restores the existing SVG paths. No image crop script, new runtime package, timer or tab behavior change.


## 2026-10-07 — Expanded silver-glass workplace scenes

`data/scenes.ts` is the typed source for seven local concept scenes. `SceneFigure` centralizes relative asset paths, intrinsic image dimensions, lazy loading, captions and source-specific error fallback; it is shared by Problem, WorkplacePractice, ExperienceFlow and Closing. Conversation selection reuses existing React state and maps four authored moments to four scenes. Controls precede the image/dialogue in both DOM and CSS order, and aria-controls references both outputs. A failed scene does not suppress another source when the selection changes. No dependency, timer, backend or route changes.


## 2026-10-07 — Native 4-Fit icon refinement

Reuse GlassIcon for four typed 4-Fit SVG variants; unique gradient/filter IDs come from React useId. FourFit no longer requests a bitmap icon or keeps shared image-error state. Native vector markup remains present without media requests, so there is no icon loading/failure branch. Remove obsolete fallback drawings and quadrant CSS. The build-media check covers assets still used by the site; archived atlas is preserved but no longer required. No runtime dependency, route, animation or tab-state change.


## 2026-10-07 — Restore dimensional icon atlas with native fallbacks

FourFit once again renders a local 1254×1254 transparent atlas, now `four-fit-silver-glass-v2.webp` (227166 bytes). Shared onError state switches all four illustrations to the existing GlassIcon variants. Native tab state/keyboard semantics are unchanged; relative media paths work for Home/detail/EXPO. FourFit.css clips and centers each source region using measured dominant alpha bounds; no bitmap cropping or pixel editing script is introduced. The built-media check requires v2. Preserve the original v1 and native source artwork.


## 2026-10-07 — Separate Expression face mesh artwork

Expression alone uses `expression-face-mesh-glass-v2.webp`, a 1254×1254 transparent conceptual image with gently closed eyes (152178 bytes). Other perspectives use the unchanged v2 atlas. The single-image Expression CSS override uses contain fitting and a .9376 scale to retain the approximately 160/80px visible sizing contract. Per-icon failure state selects existing GlassIcon fallbacks independently; a failed Expression does not suppress the other three images. Its explanatory concept label is outside the decorative aria-hidden artwork. No timer, capture, detector, geometry runtime or camera permission is added; the mesh is part of the illustration, not measured landmark data.


## 2026-10-07 — Native doorway transition

Problem reuses DoorTransition in place of its existing SceneFigure. The component wraps the same arrival SceneFigure, retaining its intrinsic 3:2 layout, lazy loading, alt text, concept caption and error fallback. One new local asset, workplace-doors-glass-v1.webp (1536×1024 RGBA, 89580 bytes), is referenced by two decorative half-width leaves. Native CSS named view timelines rotate leaves around their outside edges; no scroll listener, timer, animation dependency or WebGL. Default leaves are hidden. Only supported scroll timelines with no reduced-motion preference enable motion. A failed door asset removes both leaves; a failed arrival scene disables the overlay and retains SceneFigure's intentional fallback. Shared siteAsset preserves root/subpath compatibility; /expo/ uses the same home composition. The built-media check requires the new asset.

Forward-opening clarification: left rotateY(-100deg), right rotateY(100deg) bring both center edges toward positive Z. Stage uses overflow-x: clip with overflow-y: visible to preserve projected top/bottom corners while preventing transformed leaves from widening the document, including after their backs become invisible. Perspective is 1400px desktop / 900px narrow screens; entry 100% → cover 65% delays opening until the scene enters. Concept caption remains above the decorative layer. No component logic or asset change.


## 2026-10-07 — Compact Home and moved content

App composes five Home sections. FourFit compact renders a semantic four-item list using the same typed names, artwork rendering and per-icon failure state as the detailed tabs. Closing compact omits the long narrative and shared team scene only on Home; Team retains the complete version. Service now renders Introduction after WorkplacePractice and exposes #project in PageContents. No second data inventory, runtime dependency, media regeneration or client router.

The existing App fragment effect handles four moved Home section names with native location.replace to known relative detail destinations, both on mount and hashchange. Object.hasOwn restricts routing to the declared keys; unknown fragments remain normal document targets. Listener cleanup is included, and siteRoot keeps root and EXPO/subpath destinations portable. Retained #problem, #four-fit, #home-system and #team anchors continue to focus their sections. Source and built media remain local with existing fallback behavior.


## 2026-10-12 — Reference-based camera exploded view

HardwareDetailAssembly retains its shared component and useAssemblyScroll hook. Camera now requests only sm-camera-exploded-v2.webp (1448×1086, 203326 bytes, alpha preserved), marks ready after that single image loads, and renders no legacy assembly layers. Audio still requests four unique images and uses its existing calibrated layers. A camera-only CSS rule exposes the image and adds scroll-driven drift/scale; static preference/short-screen rules remove that transform. Existing role=img, loading state, relative siteAsset paths and silhouette fallback remain. The built-in image_gen tool generated the asset; cwebp -q 88 converted its PNG without cropping. No runtime package added.


## 2026-10-12 — Camera parts join on scroll

Camera now uses one 1448×1086 transparent 2×2 atlas sm-camera-atlas-v3.webp (194298 bytes). Four native img elements reuse that URL inside CSS-clipped tiles. Shell/core/front wrappers move using existing panels/glass variables; all four image load events establish readiness. A camera-only completion blend from progress .80 to .88 holds the closed upper-left tile. Core opacity approximates enclosure occlusion; exact geometry requires CAD rendering. Existing hook, audio calibration, fallback and short-screen/reduced-motion paths retained.


## 2026-10-12 — Vertical camera assembly

Camera shell transform is now constant (-1%, -.5%). Core x stays -2% and y is 11% − (1 − panels) × 52%; front x stays 4.5% and y is 13.7% + (1 − glass) × 40%. No image, hook, runtime dependency or audio changes. Registered final offsets and the existing completion blend remain intact.

Mobile camera scale is .70 to reserve separation from the feature rows; desktop stays .76.


## 2026-10-12 — Camera visibility and coherent assembly correction

Camera uses sm-camera-atlas-v4.webp (1448×1086, 201986 bytes, alpha), four named loading events and two decorative same-URL images for roof/tray. Completed tile images are 190% wide to accommodate generated cell registration. Complementary clip-path masks divide completed roof/body/front. Repeated URL requests reuse the browser cache; no runtime dependency added. useAssemblyScroll identifies camera once. Short viewports no longer force camera static: cameraStageProgress maps normal-flow root position relative to the MEASURED header height over 25% of the viewport. Do not parse the rem-valued header CSS token as pixels. Reduced-motion and asset failure still select static mode. New pure progress bounds/continuity tests cover short heights.


## 2026-10-13 — Compact applications and shared silver controls

UseCases reuses its existing compact/detailed split and an authored local applications array. Home shows three short context rows with one detail-page link; Uses uses the existing WorkplacePractice button/aria-pressed/aria-live pattern to select one application. Native named details keep authored questions and answers accessible without additional accordion state. Existing section IDs and workplaceMoments are preserved, including /use-cases/#use-cases. No backend, router, runtime dependency, data collection or simulated AI interaction.

Shared silver/glass/shadow tokens now also serve the detail header, contents links, 4-Fit and practice selections. showroom.css continues to scope the dark Home. Header blur progressively enhances its opaque fallback; body panels retain solid backgrounds. Shorter Hero and Uses spacing use native responsive CSS with content flow. Hardware hooks and calibration were not modified in this revision.

FourFit uses a native details element for its existing observation rows, keeping the same content and tabs without extra state. The disclosure content retains the existing responsive grid; the summary is always visible.

## 2026-10-13 — Mobile home and development content

Home and legacy /expo/ share Hero → UseCases overview → Development overview. Unmounted HomeSystem and Problem imports were removed; detailed devices remain in Service/System. Development is a small native React component backed by typed `src/data/development.ts`; System renders its expanded disclosures before the existing hardware section. No API, identity collection, framework, state store or dependency was added. Existing relative siteRoot links remain portable. Header uses the existing disclosure state at all widths with Escape, outside-pointer and focus-leave closure; hidden navigation is removed from the tab sequence by display:none. Home has a short footer; detail footers remain. Removed home anchors redirect to existing detailed equivalents. Global explanatory copy uses a 1rem readability floor; small mobile application controls stack vertically. Public deployment and physical NFC recording are separate from this local change.


## 2026-10-13 — Offline Korean copy review

Public copy is extracted and reviewed offline with the owner-linked im-not-ai rules. Apply only changed strings to the latest source; compare non-copy source structure to prevent logic changes and preserve concurrent work. Run records and source backups live in ignored `_workspace/`, also excluded by ESLint. The reference checkout and one-off mapping utilities remain outside this repository in temporary storage. No runtime dependency or external text service is added.

Home application links carry a known `context` key; the Uses state initializer matches it against the local typed applications list, with an unknown key falling back to index 0. No URL value is rendered as content. Query parameters affect only the initial local explanation panel.

## 2026-10-13 — Restore effects without broad typography overrides

Home/EXPO composes Hero → UseCases overview (with existing DoorTransition) → Development overview → FourFit compact. Reuse the existing CSS view-timeline door animation and existing image-failure behavior. Restore the backed-up cinematic Hero stylesheet with bounded corrections for 16–17 px copy, full-width media, and nonoverlapping flow/caption layout. A clipped door wrapper must use overflow:clip to avoid a new scroll container. Global all-paragraph typography overrides were removed; scope Home label sizes explicitly so hardware stage geometry stays calibrated. No hardware motion hook, device positions or animation framework changed.

## 2026-10-13 — Consolidated navigation and native selectors

Removed unused PageContents/PageNext implementations and their calls. Shared footer renders credit/top link only. Header retains its existing disclosure behavior and places Service in the same text list as other destinations. Home application rows are semantic articles; no new route or state. UseCases retains query-based initial context and aria-live content but replaces three pressed buttons with a labeled native select. WorkplacePractice replaces four choice buttons with one native select while preserving scene/content updates and the local state. Native select values are the rendered indices from each local data list. Uses wraps four unchanged authored examples in one details disclosure; brief expansion copy becomes ordinary articles. Existing section IDs remain compatible with external fragments. Removed redundant navigation imports without modifying product imagery, hardware hooks or fallbacks. Functional demo/source/skip links remain.

## 2026-10-13 — Three-item icon-only hamburger

Per the owner's explicit correction, show only the hamburger/X icon in a 48×48 px control; preserve aria-label, aria-expanded, Escape focus restoration and outside/focus-leave closure. Navigation is exactly 작품 소개 (/service/), 활용 장면 (/use-cases/) and 기술과 발전 방향 (/system/). 4-Fit and Team remain reachable from a quiet plain-text reference sentence on Service. This supersedes the five-item menu and visible 메뉴/닫기 label. No visual effects, hardware logic or dependencies changed.

## 2026-10-13 — Dedicated mobile layout and normal-flow hardware

main.tsx imports mobile.css last, providing bounded mobile overrides without replacing desktop component styles or applying blanket font overrides. Header uses the shared 4.25rem token including its border. Hardware's compact/static decision now depends on reduced motion or failed assets, not phone height. For max-width 767px or max-height 740px, the hook uses the existing cameraStageProgress curve and measured header; CSS provides normal-flow stages instead of desktop scroll tracks. Motion layers remain display:block in scroll mode during loading, with their existing opacity gating; only ready scenes hide the completed image. This prevents hidden lazy layers from waiting forever. Public helper functions and geometry are unchanged. FourFit tabs gain explicit accessible names so hidden phone English labels do not remove their full identity.


## 2026-10-14 — Mobile topic navigation and shared silver styles

`components/PageTabs` provides native-button tabs with roving focus, wrapping arrows, Home/End, hidden inactive panels, fragment-driven selection and popstate restoration. All content stays mounted so previous section IDs, native disclosures and local selections survive. Fragment handling opens ancestor details and the owning nested tabs, then focuses the target after the visible render. The effect depends on stable tab IDs, avoiding jumps when an education select changes.

`components/MobileNav.tsx` uses existing `siteRoot`/validated `dashboardUrl` for a phone dock. `styles/silver.css` follows legacy component/mobile styles and owns the final material and compact overrides; `showroom.css` now supplies only the shared canvas. Hero's media slot reuses `hardware/sm-assembled-v1.webp`, native failure handling and its concept disclosure. Native GlassIcon replaces request-dependent atlas symbols.

Service/System/Uses use PageTabs, with nested hardware tabs. Existing assembly hook's optional `flowView` applies the proven short-window progress mapping at every width; it retains layer registration, cleanup, readiness and reduced-motion/failure output. There is no long sticky track in the selected device topic. Reading expansions use native details. No runtime dependency or API added.

Dashboard changes live in the separate dashboard checkout: a final `silver-mobile.css`, bottom dock, mobile modal menu/inert background, overview section selection and team disclosures, native mobile team select, four-item record pagination, device/output view selection and optional report/audit reading. Source data, validation and persistence are reused. Final builds can still be combined under `dist/dashboard/`.

The bounded assembly maps the existing `cameraStageProgress` curve to the visible image stage rather than the whole section. This lets the last short mirror topic finish before the page bottom without adding a scroll track. Final browser checks reached progress 1.000 for mirror, camera and audio.

## 2026-10-15 — Digital card entry

Reuse Hero and ProductFrame rather than introduce another page/router or media loader. App mounts only Hero for Home/EXPO; its old home-uses/four-fit/development fragments join the existing native redirect map. Service/Uses/System remain actual HTML entries. Detailed topics stay mounted with hidden panels, retaining state, fragments, keyboard selection and existing media/motion fallbacks. Team keeps both team and team-approach targets and uses native details for its existing principles. The separate dashboard changes only App wording/accessibility and the silver-mobile material/layout; operational calculations and persistence are untouched.

## 2026-10-15 — Caption and arrow cleanup

ProductFrame no longer renders a figcaption or calculates caption-only `isConcept`; the unused optional ProductMedia.caption field is removed. SceneFigure and hardware stages omit repeated visual captions. All image load/error handlers, silhouettes, intrinsic sizes, hardware progress and readiness stay intact. Ordinary links drop Arrow instances; Hero's primary action and the technical diagram retain the existing SVG component. No new component API, state, dependency or routing behavior.

## 2026-10-15 — Black-glass materials

Reuse tokens/globals/showroom/silver, Hero and PageTabs styles; do not add another stylesheet layer or component state. All seven HTML entries set theme-color to #06080c. Dark color-scheme covers native controls; silver primary actions retain dark ink. Existing silver-mobile.css is the final dashboard palette, including its legacy data views and native dialogs. Data, routes, assets, assembly geometry, loading/error handlers and reduced-motion branches are unchanged.

Backdrop declarations keep the WebKit alias before the standard property so the production CSS preserves the supported unprefixed blur. Verify computed blur in the built page; successful compilation alone does not prove the effect is active.

## 2026-10-15 — Reader guidance and evidence presentation

App's existing PageIntro gains descriptive copy and an eyebrow; Service defaults to the new service-about topic, reusing Introduction. Introduction also exports DeviceOverview for its related two-device role summary. Existing service/system/fit/team fragments remain mounted and reachable. PageTabs adds optional per-topic descriptions, displayed in the owning panel and connected with aria-describedby; selection, hash/history, focus and ancestor-disclosure code is unchanged.

SystemArchitecture reuses ProductFrame and the four-stage source flow, with typed static input/process/output descriptions and a native detailed explanation. This is a rendered explanation, not a data-processing simulation. Evidence reads the small typed projectEvidence dataset with a pinned repository/commit, date and three verified file paths. Source code and illustrative UI/material inventory are separated; #evidence-capture opens the correct topic/disclosure.

workplaceMoments gains authored three-part answer explanations. Practice keeps its original native select/live region; a separate disclosure follows the selected explanation. FourFit exposes existing retry guidance within the active panel. Uses adds authored mode questions/focus; Team exposes its existing principles and references. Header/paths and one footer link provide reading guidance. CSS changes stay in the existing component/material files; ProductFrame itself, assets, hardware hooks/calibration, storage, dashboard code and runtime dependencies are untouched.

Detail HTML/OG metadata aligns with the visible page labels. Native no-script text covers interview, training and workplace conversation. No backend, router, telemetry, permissions, theme switch, generated scoring or new package.


## 2026-10-16 — Isolated combined build and artifact verification

`npm run check` runs the microsite linter, strict typecheck/build and Node tests. `scripts/build-release.mjs` orchestrates the microsite and the explicitly supplied separate dashboard checkout, using only Node standard-library APIs. It snapshots current tracked/untracked disk files into ignored `_workspace/release-*` directories, excludes private filenames/environment files, and links each checkout's installed dependencies. Neither Git's index nor the original source files are mutated. Source file hashes, file list and HEAD are checked again before replacing output.

The orchestrator runs microsite check plus dashboard lint/typecheck/test/build with the existing runner config loader. Ambient `VITE_*` settings are removed; the dashboard receives only the public return-link override `VITE_MICROSITE_URL=../`. Relative base assets and hash routing are retained. No dashboard source edit or dependency change is needed.

The staged dashboard joins the microsite at `dist/dashboard/`, with `.nojekyll`. `scripts/verify-release.mjs` requires all eight HTML entries, checks their bundle/styles and local HTML/CSS references, rejects development URLs and private filenames/symlinks, and hashes every artifact. Static verification does not execute browser routes, validate external endpoints or prove absence of arbitrary secrets embedded in source.

Only a verified candidate replaces `dist/`. Normal replacement errors roll back output and its local report; previous output/report remain under the job directory. A lock prevents concurrent release builds. The ignored `_workspace/release-report.json` records source commits, dirty status, untracked paths, source hashes, Node version and artifact hashes. `npm run verify:release` compares the current file set and bytes with that report. These local records never enter public output. Builds are offline when dependencies already exist; a missing installation produces an actionable error. See dashboard-integration.md for preparation, interruption recovery, browser QA and explicitly authorized publication.

The existing `npm run build`/`check` remain microsite-only commands and replace dist without the dashboard; rerun build:release before integrated preview/publication. Tooling regression tests cover missing dashboard/assets, nonportable paths, local URLs, private/symlink rejection, dirty/untracked snapshot preservation, environment filtering and output/report rollback. ESLint now includes mjs tooling and tests with Node globals. Public copy, design, component code, hardware motion and sample-data boundaries are unchanged.
