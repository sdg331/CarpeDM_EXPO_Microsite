# Architecture

## Runtime and scope
Static multi-entry React + TypeScript microsite built with Vite and npm. Use Node.js 22.13+ or 24 LTS; the initial workspace uses Node 24. The full toolchain's ESLint requirement is stricter than Vite's minimum. No backend, router, identity API, analytics, form submission, cookies, camera permissions, or hardware access is needed for the introduction page. UI state is limited to navigation, conversation selection, 4-Fit tab selection, progressive reveals, and media fallback.

## Source structure and responsibilities
```text
AGENTS.md                  future-session instructions
docs/                      product, design, copy, architecture, QA, decisions
public/                    project-owned static media
src/
  components/
    Header/                navigation and mobile disclosure
    GlassIcon/             three original decorative SVG illustrations
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
Native CSS imports with global tokens and prefixed component/section class names. Use fluid typography, grid, flex, responsive gutters, and content-driven media queries. No CSS framework. Public layout primitives are `.container`, section spacing, light section theme, status note, eyebrow, and text links; avoid generic abstraction when markup is not repeated. Dark product stages and light explanation sections share semantic token names so component copy and borders inherit the correct contrast without duplicate markup.

## Data and content
`docs/content.md` is the editorial authority. Typed TS data modules mirror the actual public copy and array-based rows without a CMS or runtime fetch. Keep product facts traceable to `docs/product.md`. Document updates accompany material copy changes. These static pages have no asynchronous business data, so do not invent skeleton loaders, fake loading states, or an artificial API.

## Images
`src/data/media.ts` holds optional `hero`, `reflection`, `mirror`, and `kiosk` asset slots with source, alt, intrinsic dimensions, and a required concept/photograph kind. Loaded images use their intrinsic aspect ratio and contain fitting; Hero places the existing ProductFrame under HTML copy with CSS cover positioning and a dark gradient; Service's mirror stage has a transparent CSS background to expose the existing WebP alpha; concept media retains its visible disclosure. Use an omitted slot for absent photography, and a stateful `<img>` error fallback for broken files. Do not request nonexistent default URLs. Keep presentation aspect ratios stable. ProductFrame renders an original CSS illustration, visible concept caption, and accessible description when no photo is available. Configure future public assets through `siteAsset()` so nested pages and subpath deployments resolve the same local media; noncritical photographs are lazy loaded.

## Responsive and interaction strategy
The homepage contains hero, problem, selectable conversations, Introduction explaining the mirror interface, 4-Fit tabs, a two-device introduction, the reused six-step ExperienceFlow, uses and team purpose. Service contains contents, situation examples, six intended steps and Kiosk → Mirror introductions; Four Fit uses native buttons with tab semantics, roving focus and hidden inactive panels; System contains drawing-based image assembly, camera/audio scroll assemblies and strengths, architecture, evidence and technology. Uses contains four authored scenarios, intended audiences and expansion ideas. Team contains design principles and project materials. The mobile header closes on selection, Escape or the desktop breakpoint and never traps focus. Cross-page links are native relative links; the active menu destination uses `aria-current="page"`. Hardware and technology details use native `details/summary`.

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
npm run preview
```
`build` also checks TypeScript before Vite emits `dist/`. `typecheck` is available separately for clear verification. ESLint must reject unused disable directives. Use `npm ci` on subsequent clean installations / CI.

The Vite development server is fixed to port `5174` with `strictPort`; the production preview is fixed to `4175`. `vite.config.ts` builds home, five detail pages and a compatible `/expo/` homepage entry as static HTML inputs without a client router. This avoids silently switching to an unknown port when another local project already uses Vite's default `5173`.

## Deployment assumptions
Output is static `dist/`, including five detail directories and `dist/expo/index.html`. Vite `base: './'` keeps generated bundles portable. Each HTML entry declares `data-site-root` (`./` or `../`), used for links and public media so the same build can sit at the domain root or a repository subpath. In-page sections use fragments; the legacy `/expo/` entry sets data-site-root="../" and uses the shared homepage with relative parent paths. This does not add a deployment workflow, publish the site, or configure GitHub Pages automatically. The public URL is not confirmed; do not invent `og:url`, a canonical URL, or social handles. Existing Open Graph title, description, locale, and type provide a metadata structure; add a real absolute image URL and canonical URL only after the host is chosen. Test the built result with `npm run preview`.

## Sources checked for the initial setup
- [Vite getting started](https://vite.dev/guide/)
- [React: build from scratch](https://react.dev/learn/build-a-react-app-from-scratch)
- [typescript-eslint setup](https://typescript-eslint.io/getting-started/)

Use actual package and Node engine metadata during dependency upgrades; do not assume an old version requirement still applies.

Workplace situation examples live in `src/data/experience.ts`. Home and Service reuse `WorkplacePractice`, with a selected index and aria-pressed buttons updating an aria-live region. Uses links to the service selector. FourFit keeps one selected index and button refs for ArrowLeft/ArrowRight, Home and End focus. Inactive panels use native hidden plus a matching CSS rule. No runtime dependency or data service is added.

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

Twelve built-in image_gen outputs are saved as PNG in `output/hardware-renders/`. Alpha-preserving WebP derivatives in `public/media/hardware/` total about 1.18 MiB: the original six renders plus three camera and three audio component layers. Mirror images are 1086×1448; sensor images are 1448×1086. Camera/audio completed poses reuse their original close-ups; illustrative internal layers progressively overlap before the existing final-image handoff. `siteAsset()` preserves nested relative paths; native lazy loading avoids requesting them on other pages. No remote image service, API key or hardware access is needed at runtime.

`motion.ts` supplies clamped progress and sequential smoothstep assembly: internals move at .10–.40, front covers at .44–.76, and the completed-image blend at .84–.94. Chapters switch at .44 and .84; the last six percent holds the finished pose. Each stage's passive scroll listener schedules at most one requestAnimationFrame, updating CSS variables without React rerenders on scroll. No continuous animation loop, WebGL, scroll interception or added animation package. ResizeObserver and preference-change listeners update the pose and are released on cleanup; offscreen/hidden-document pose updates are skipped. Three strength rows remain in the document, while `data-phase` controls their visual emphasis. Reduced motion or a failed anatomy layer collapses that stage's long span and displays its static completed image. If that image fails, ProductFrame supplies the mirror silhouette and sensor stages supply domain-specific labeled silhouettes. One failing stage does not disable the others. The existing `#hardware-inputs` anchor is preserved around the two input stories.

All anatomy and completed images sit inside one centered plane with their source aspect ratio (3:4 mirror, 4:3 sensors). Native container size units fit that plane to its stage. Part sizes stay constant during movement, and the same enclosing scale applies to the completed image. CSS registration values remain adjustable. The camera/audio stack is housing → core → cover. Audio's core and cover images are each reused in three clipped decorative regions with individual origins and offsets; only four unique image URLs are needed for the stage. Driver depth fades as its grille seats because independently generated perspectives do not supply a real 3D occlusion mask. Matching CGI passes are the documented upgrade for exact geometry.

The shared hook owns `data-render` and the image-stage `aria-busy` flag. Captured native image-load events refresh them. `assemblyRenderState()` waits for all four images during animation, but only the completed image in static mode, so hidden lazy layers cannot leave the visible stage perpetually busy. Its failure priority and static/scroll readiness are covered by the existing small Node check. There is no separate image-loading state machine or additional dependency.

The accessible section label/description explain the whole construction without requiring animation. Visual progress labels are decorative; the native architecture skip link and existing details remain keyboard usable. `node tests/hardware-motion.mjs` checks scroll bounds, monotonic assembly, non-overlapping core/front/handoff intervals, chapter boundaries, the final hold and static readiness using Node 24.

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
