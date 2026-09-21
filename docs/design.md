# CarpeDM visual system

## 1. Design objective
Present CarpeDM as a credible university exhibition project with the finish of a large product company website. A visitor should understand within five seconds that this is a Smart Mirror and ID Card Kiosk experience. The page should feel calm, established, and easy to explain in a judging presentation.

## 2. Visual character
Use a bright corporate editorial system for most of the page: white canvas, cool grey section surfaces, deep navy text, strong Korean headlines, and one functional blue. Reserve dark navy stages for the two physical devices and the closing message. The result should feel like a real product introduction, not an AI concept reel, futuristic dashboard, or fintech clone.

## 3. Reference interpretation
The supplied Toss reference informs direct Korean language, spacing discipline, functional blue, clear hierarchy, and explicit states. Large Korean corporate product sites inform the bright header, stable content grid, restrained navigation, calm section alternation, and product-first storytelling. Do not copy another brand's assets, layouts, fonts, or claims.

## 4. Anti-patterns
Avoid continuous black backgrounds, giant English slogans, monospaced interface decoration, corner brackets, scan-line annotations, neon, gradients used as spectacle, AI orbs, glass panels, fake dashboards, fake metrics, excessive pills, and repeated rounded cards. English remains a product label, not the main message.

## 5. Color
Foundations live in src/styles/tokens.css.

| Token | Value | Role |
| --- | --- | --- |
| Canvas | #FFFFFF | Main page and information sections |
| Surface | #F5F7FA | Section alternation and quiet grouping |
| Strong surface | #EEF2F6 | Hero product stage |
| Foreground | #101828 | Main headings and readable content |
| Body | #475467 | Supporting copy |
| Border | #E4E7EC | Rules and component boundaries |
| Accent | #2563EB | Focus, labels, active markers |
| Action | #1D4ED8 | Primary CTA with white text |
| Action hover | #1E40AF | Primary CTA hover |
| Dark stage | #0B1728 | Smart Mirror product section and closing |
| Dark surface | #111F33 | Device media stage |

Blue communicates action or structure. It is not ambient decoration. White text on blue uses the darker action token to preserve contrast.

## 6. Typography
Use Pretendard Variable, Pretendard, Apple system fonts, Segoe UI, and Noto Sans KR without remote font requests. Korean is the main headline language. Product names and short category labels may remain English.

- Hero: 42–84 px, weight 700, line height around 1.14.
- Section titles: 32–60 px, weight 700, line height around 1.25.
- Body: 16–17 px, line height around 1.75.
- Labels: 12 px, weight 700, modest tracking.
- Monospace is reserved for actual technical strings if needed; section labels and numbers use the main sans-serif family.

## 7. Spacing and grid
Use the existing 4–128 px spacing scale, with 16, 24, 32, 48, and 64 px as common layout intervals. Main sections use 80–128 px fluid vertical spacing. Content sits in a centered 1280 px container with 20 px mobile gutters and 48–64 px desktop gutters.

Hero and product sections use balanced two-column grids. Explanation sections use open editorial grids or clearly bounded functional groups. Cards are allowed for the six experience steps and device architecture because those are real grouped units; do not turn every paragraph into a card.

## 8. Header
Use a white translucent sticky header with a fine grey rule. The logo mark and active interaction use blue. Navigation uses dark neutral text, visible hover/focus, and a full-width white mobile disclosure. The EXPO context is a quiet grey badge.

## 9. Hero
Use a Korean value proposition: “거울이 인터페이스가 되는 순간.” The label, supporting copy, and two real section anchors follow. The mirror appears on a light grey product stage with no scan annotations or decorative corner marks. A three-column summary explains the confirmed roles of Smart Mirror, ID Card Kiosk, and their connected experience without invented metrics.

At 768 px and below, stack copy before the product. The CTA must remain visible on common short laptop screens. Do not rely on photography for understanding.

## 10. Product sections
Smart Mirror and ID Card Kiosk use deep navy stages to separate physical hardware from the bright explanation sections. Headlines are Korean. Product media sits in a bounded navy panel, with supporting copy and a two-column feature list. The mirror remains visually dominant.

## 11. Experience and architecture
The six designed steps use a three-column by two-row set of white cards on a cool grey field. Each card has one restrained numbered marker and clear Korean text. Mobile becomes one column.

Architecture uses two bounded device groups and a blue connection group. The public-scope note appears before the diagram. Hardware details remain native details/summary.

## 12. Technology and closing
Technology uses a grey section with one white ruled list. Rows may receive a subtle hover background but must remain readable without hover.

Closing uses deep navy, a Korean statement, and a restrained blue secondary line. Footer returns to white to end like a corporate information page.

## 13. Product media
There are no production photographs yet. Current CSS silhouettes are clearly labeled “제품 형태 콘셉트” and “디바이스 콘셉트 · 실제 촬영 이미지가 아닙니다.” Never present generated or conceptual media as the assembled project.

src/data/media.ts is the asset registry. Missing or failed images fall back to the silhouette. Non-hero media is lazy-loaded and every slot preserves intrinsic dimensions.

Preferred future assets:

| File | Ratio / minimum | Required content |
| --- | --- | --- |
| smart-mirror-hero.webp | 4:5, 1600×2000 | Full mirror product, front three-quarter view, clean light-grey studio |
| smart-mirror-detail.webp | 4:5, 1600×2000 | Actual mirror assembly or meaningful interaction detail |
| kiosk-front.webp | 4:5, 1600×2000 | Full kiosk showing screen, camera, NFC area, and output slot |

Real project photography is preferred. If AI-generated assets are supplied, describe them as concept renders and keep the public concept label.

## 14. Shape and effects
Use 8 px controls, 14 px grouped cards, and up to 24 px product stages. Shadows appear only on the hero product stage and should be broad and low-opacity. Device silhouettes may retain physical depth. Do not add glow, blur overlays, or glass cards.

## 15. Motion and interaction
Keep the existing one-time reveal as progressive enhancement. Pending content remains readable, reduced-motion removes transitions, and the hero never waits for animation. Hover movement is limited to 2 px on experience cards and 1 px pressed feedback on the primary button.

## 16. Accessibility
Keep semantic landmarks, one H1, logical heading levels, Korean document language, descriptive media labels, skip link, visible focus, 44 px minimum controls, keyboard mobile navigation, and native details. Color never carries the only meaning. Anchored sections must remain visible below the sticky header.

## 17. Responsive rules
- Below 480 px: one-column experience cards and product features.
- Below 768 px: mobile header, single-column hero and product sections.
- 768–959 px: compact two-column hero, two-column experience cards.
- 960 px and above: full product grids, three-column experience cards, horizontal architecture.
- Check 360, 390, 768, 1024, 1280, and 1440 px without hiding overflow defects.

## 18. Visual QA
- Korean value proposition and Smart Mirror are clear in the first viewport.
- The page reads as a credible product/exhibition site instead of an AI visual demo.
- Bright and dark sections alternate deliberately.
- No invented feature, metric, photograph, or completion claim appears.
- All widths remain free of horizontal overflow and clipped controls.
- Mobile menu, internal links, details, focus, reduced motion, and media fallback remain usable.

Record actual checks in docs/qa.md.
