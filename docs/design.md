# 4-Fit MirrorTing visual system

## Direction
A product introduction with Apple-like restraint and Toss-like Korean clarity, using original assets and an original layout. Show the object before explaining the technology. No copied brand assets, fictitious product claims, metrics, dashboards, or interface simulations.

The 2026-09-22 request authorizes a full editorial redesign and glassmorphism icons. This supersedes the earlier all-dark direction and the blanket ban on glass. Translucent depth is limited to the three experience icons and the navigation backdrop.

## Page sequence
1. Hero: quiet pale studio field, two-line Korean headline, large full-device image, one primary action and one text action. No summary cards or decorative backdrop shapes.
2. Introduction: short centered statement explaining the project idea.
3. Smart Mirror: full-width dark product showcase; an unboxed image, short description, and three capability categories.
4. ID Card Kiosk: white space, short copy, one dark product image. Explain its role in the same experience.
5. Experience: three open columns with original glass icons. The six original steps remain accessible in a native disclosure.
6. Architecture: two device groups and a restrained connection arrow; hardware specifications remain in a disclosure.
7. Technology: seven native disclosure rows to reveal role descriptions on demand.
8. Closing: quiet project identity and an actual back-to-top link, followed by factual footer context.

## Foundations
- Main text: #1D1D1F. Body: #606773. Muted heading fragments: #737780.
- Canvas: white. Alternate surface and hero: #F5F5F7. Smart Mirror: #0C1625.
- Primary action: #1963DA, hover #1453BC, with white text. Dark-section links: #93BDFF.
- Blue indicates action. Soft blue, teal and violet distinguish the three decorative icons; meaning is always repeated in text.
- Font: existing local Pretendard/system stack. No remote fonts or new runtime dependencies.
- Hero type: 34–76 px; section titles roughly 30–60 px; body 15–17 px. Keep readable Korean line lengths and intentional line breaks.
- Content width: 1152 px; fluid 20–64 px gutters. Section spacing: 80–144 px according to content rather than identical blocks.

## Product imagery
Use owner-supplied local WebP renders. Preserve complete product proportions with `object-fit: contain`. Hero and mirror images have soft edge masks; the kiosk image has one 28 px frame. No fake screen content or generated device changes.

Always show “디바이스 콘셉트 · 실제 촬영 이미지가 아닙니다.” These are not project photographs or evidence of assembled hardware. Missing/failed media uses the existing labeled CSS silhouette. The hero is eager-loaded; detail images are lazy-loaded. Intrinsic dimensions reserve space.

## Original glass icons
`GlassIcon` implements three SVG illustrations: identification card, mirror and voice bubbles. Overlapping translucent shapes, white edge highlights, gentle color gradients, and a small shadow convey glass without blurring text. SVG IDs use React `useId` so instances cannot collide. Icons are decorative, marked `aria-hidden`, and paired with meaningful text. No raster asset, WebGL, icon package or looping animation is needed.

## Interaction and accessibility
- Compact translucent sticky header, four real section links, and an accessible mobile disclosure.
- Pill primary CTA; simple blue text links. At least 44 px action targets and visible keyboard focus.
- Native `details/summary` for experience details, hardware and technology, with visible plus/minus affordances.
- One-time progressive reveals only. Content stays visible before initialization; reduced-motion removes transitions and smooth scroll.
- Semantic landmarks, one H1, logical headings, descriptive image alternatives and Korean document language.
- Mobile stacks content before products; experience illustrations sit beside their text. Tablet preserves layout without truncating headlines or navigation.
- Validate 360, 390, 768, 1024, 1280 and 1440 px. Record actual results and limitations in `qa.md`.
