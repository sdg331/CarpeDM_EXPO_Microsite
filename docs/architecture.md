# Architecture

## Runtime and scope
Static one-page React + TypeScript microsite built with Vite and npm. Use Node.js 22.13+ or 24 LTS; the initial workspace uses Node 24. The full toolchain's ESLint requirement is stricter than Vite's minimum. No backend, router, identity API, analytics, form submission, cookies, camera permissions, or hardware access is needed for the introduction page. UI state is limited to navigation, progressive reveals, and media fallback.

## Source structure and responsibilities
```text
AGENTS.md                  future-session instructions
docs/                      product, design, copy, architecture, QA, decisions
public/                    favicon and project-owned static media
src/
  components/
    Header/                navigation and mobile disclosure
    SectionHeading/        shared editorial index / label / heading
    StatusNote.tsx         shared public-scope explanation
    Reveal/                optional native viewport reveal
    ProductFrame/          real-image slots and concept fallbacks
  sections/
    Hero/ Introduction/ ExperienceFlow/ SmartMirror/ IdKiosk/
    SystemArchitecture/ Technology/ Closing/
  data/                    typed public copy, experience, technologies, media
  styles/                  tokens, globals, typography, section styles
  App.tsx                  section composition and footer
  main.tsx                 React entry
index.html                 metadata, language, no-JS message
```

Do not create placeholder files merely to fill a directory. Components represent real UI concepts. Section-local CSS may be colocated with sections; shared layout, interaction, and tokens belong in `styles/`.

## CSS strategy
Native CSS imports with global tokens and prefixed component/section class names. Use fluid typography, grid, flex, responsive gutters, and content-driven media queries. No CSS framework. Public layout primitives are `.container`, section spacing, light section theme, status note, eyebrow, and text links; avoid generic abstraction when markup is not repeated. Dark product stages and light explanation sections share semantic token names so component copy and borders inherit the correct contrast without duplicate markup.

## Data and content
`docs/content.md` is the editorial authority. Typed TS data modules mirror the actual public copy and array-based rows without a CMS or runtime fetch. Keep product facts traceable to `docs/product.md`. Document updates accompany material copy changes. This static page has no asynchronous business data, so do not invent skeleton loaders, fake loading states, or an artificial API.

## Images
`src/data/media.ts` holds optional `hero`, `mirror`, and `kiosk` asset slots with source, alt, and intrinsic dimensions. Use an omitted slot for absent photography, and a stateful `<img>` error fallback for broken files. Do not request nonexistent default URLs. Keep presentation aspect ratios stable. ProductFrame renders an original CSS illustration, visible concept caption, and accessible description when no photo is available. Configure future local assets using Vite imports or the configured base URL; noncritical photographs are lazy loaded.

## Responsive and interaction strategy
One DOM reading order with mobile-first CSS. Six steps become vertical on phones, three columns on intermediate widths, six on desktop. Architecture becomes vertical without changing its meaning. Mobile header uses a button controlling a navigation disclosure, closes on selection / Escape / desktop breakpoint, and never traps focus. The selected destination is available through native fragment links. Hardware details use native `details/summary`.

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

The Vite development server is fixed to port `5174` with `strictPort`; the production preview is fixed to `4175`. This avoids silently switching to an unknown port when another local project already uses Vite's default `5173`.

## Deployment assumptions
Output is static `dist/`. Configure Vite `base: './'` so bundled resources work when hosted at the root or a repository subpath. All in-page links use fragments. This does not add a deployment workflow, publish the site, or configure GitHub Pages automatically. The public URL is not confirmed; do not invent `og:url`, a canonical URL, or social handles. Existing Open Graph title, description, locale, and type provide a metadata structure; add a real absolute image URL and canonical URL only after the host is chosen. Test the built result with `npm run preview`.

## Sources checked for the initial setup
- [Vite getting started](https://vite.dev/guide/)
- [React: build from scratch](https://react.dev/learn/build-a-react-app-from-scratch)
- [typescript-eslint setup](https://typescript-eslint.io/getting-started/)

Use actual package and Node engine metadata during dependency upgrades; do not assume an old version requirement still applies.
