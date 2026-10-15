---
name: '4-Fit MirrorTing Light Glass'
version: '1.3'
language: 'ko-KR'
researched-at: '2026-10-16'
status: 'implemented and publicly deployed; commit e8767bb; verification recorded in docs/qa.md'
direction: 'light silver canvas, frosted reading surfaces, restrained glass navigation'
direction-authority: 'owner selected light glass in the current conversation'
composition-status: 'owner-selected frosted project card implemented; existing page composition retained'
token-provenance: 'MirrorTing proposals, not measured Apple platform tokens'
scope: 'responsive exhibition and portfolio microsite'
inspiration:
  - 'Apple Human Interface Guidelines: Materials'
  - 'Apple WWDC25: Meet Liquid Glass'
  - 'Apple WWDC25: Get to know the new design system'
colors:
  primary: '#0071e3'
  primary-hover: '#0066cc'
  primary-pressed: '#005bb5'
  brand: '#1d1d1f'
  canvas: '#f5f5f7'
  canvas-depth: '#e9edf3'
  surface: '#ffffff'
  foreground: '#1d1d1f'
  secondary: '#515154'
  muted: '#626975'
  on-primary: '#ffffff'
  link: '#0066cc'
  focus: '#0066cc'
  selected-surface: '#e8f1fc'
  selected-foreground: '#005bb5'
  border: 'rgba(29, 39, 55, 0.12)'
  border-strong: 'rgba(29, 39, 55, 0.22)'
  edge-light: 'rgba(255, 255, 255, 0.88)'
materials:
  reading:
    fill: '#ffffff'
    blur: 'none'
    use: 'long copy, evidence, expanded specifications'
  frost:
    fill: 'white gradient: 88% to 60%'
    blur-desktop: '24px'
    blur-mobile: '16px'
    use: 'Home card on the controlled light canvas'
  navigation:
    fill: 'rgba(255, 255, 255, 0.82)'
    blur-desktop: '24px'
    blur-mobile: '20px'
    use: 'detail header and mobile dock'
  dense:
    fill: 'rgba(255, 255, 255, 0.96)'
    blur: '20px when not nested inside another blurred surface'
    use: 'expanded navigation; use solid white when nested'
  fallback:
    fill: '#ffffff'
    blur: 'none'
    use: 'unsupported blur, reduced transparency, increased contrast'
typography:
  family: "'Pretendard Variable', 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans KR', sans-serif"
  display:
    mobile: 'clamp(30px, 7.5vw, 44px)'
    desktop: 'clamp(40px, 5.5vw, 56px)'
    fontWeight: 650
    lineHeight: 1.12
    letterSpacing: '-0.045em'
  page-title:
    mobile: '1.875rem'
    desktop: 'clamp(2.125rem, 3.4vw, 2.875rem)'
    fontWeight: 650
    lineHeight: 1.3
  section-title:
    mobile: '1.5rem'
    desktop: '2rem'
    fontWeight: 600
    lineHeight: 1.4
  body:
    mobile: '1rem'
    desktop: '1.0625rem'
    fontWeight: 400
    lineHeight: 1.8
  control:
    fontSize: '1rem'
    fontWeight: 600
    lineHeight: 1.5
  supporting:
    fontSize: '0.875rem'
    fontWeight: 400
    lineHeight: 1.65
  caption:
    fontSize: '0.8125rem'
    fontWeight: 400
    lineHeight: 1.6
rounded:
  control: '12px'
  reading: '18px'
  card-mobile: '24px'
  card-desktop: '28px'
  pill: '999px'
spacing:
  scale: ['4px', '8px', '12px', '16px', '20px', '24px', '32px', '40px', '48px', '64px']
  gutter-small: '16px'
  gutter-phone: '20px'
  gutter-tablet: '20px to 32px, fluid'
  gutter-desktop: 'clamp(20px, 2.5vw, 40px)'
  section-mobile: '32px'
  section-desktop: '56px'
layout:
  home-max: '1040px'
  home-phone-max: 'fluid within the shared page gutters'
  content-max: '1040px'
  reading-max: '42rem'
  header-min: '68px'
  dock-body: '64px'
  touch-target: '48px'
  control-gap: '8px'
motion:
  press: '120ms'
  control: '180ms'
  disclosure: '240ms'
  reduce: 'no decorative transitions or animated blur'
  provenance: 'local interaction proposals; not measured Apple timings'
components:
  primary-action: 'solid blue, white text, 48px minimum, existing rounded destination tile'
  secondary-action: 'frost or white surface, dark text, visible focus'
  home-card: 'one identity and product composition with three destinations'
  detail-navigation: 'glass control layer with explicit selected state'
  evidence-row: 'stable reading surface, direct source link, clear evidence scope'
  product-stage: 'contained local imagery, original proportions, existing fallback'
delivery:
  runtime-dependencies: 'no new dependency added'
  dark-theme-switch: 'out of this specification'
  live-integration: 'unchanged; the microsite remains explanatory'
  publication: 'GitHub Pages gh-pages 32e38c3; introduction and sample dashboard verified'
---

# 4-Fit MirrorTing — 라이트 글래스 웹 디자인 명세

## 0. 문서의 역할과 적용 상태

이 문서는 모바일과 데스크톱 웹사이트를 같은 기준으로 설계·구현·검수하기 위한 명세다. 색상표뿐 아니라 정보 구조, 재질의 역할, 컴포넌트 상태, 이미지, 반응형, 접근성, 성능과 제출 전 확인 기준까지 다룬다.

- **사용자 선택:** 밝은 회백색 배경과 뿌연 유리의 라이트 글래스.
- **현재 구현:** 이 명세에 따라 웹 전체에 라이트 글래스를 적용하고 공개 배포했다. 공개 파일·브라우저 검증은 QA에 기록했으며 실기기 검증은 별도 상태다.
- **설계 제안:** 본문의 색·크기·투명도·블러·여백·시간 값. Apple의 공통 토큰이나 실측값이 아니다.
- **유지할 목적:** CarpeDM과 4-Fit MirrorTing을 소개하는 간결한 디지털 명함, 충분한 설명을 제공하는 상세 페이지.
- **선택한 구성:** 기존 명함을 유지하는 프로스트 구성. 기존 기능·콘텐츠·로컬 미디어를 보존하고 실제 화면에서 곡률·명암·유리 농도를 조정했다. 확정한 구현값과 예외는 24절에 기록한다.

사실과 표현은 [제품 정보](product.md), [공개 문구](content.md)를 따른다. 현재 구현 설명과 이전 시각 기록은 [디자인](design.md), 구현 구조는 [아키텍처](architecture.md), 검증 결과는 [QA](qa.md), 방향 변경은 [결정 기록](decisions.md)에서 확인한다.

## 1. 완성도를 판단하는 기준

목표 인상은 **밝고 정돈되어 있으며, 재질은 섬세하고, 작품의 목적은 분명한 전시 웹사이트**다. 수상 가능성을 수치로 추정하는 대신 실제로 검수할 수 있는 조건을 둔다.

| 관점 | 방문자가 얻어야 할 답 | 디자인에서 확인할 것 |
| --- | --- | --- |
| 첫 방문 | 무엇을 만든 팀인가 | 작품명·CarpeDM·AI 스마트 미러 설명이 첫 진입에 함께 보임 |
| 작품 이해 | 왜 거울 앞에서 연습하는가 | Service 기본 화면에서 문제·상호작용·장치 역할이 연결됨 |
| 차별점 | 무엇을 돌아보는가 | 응답·목소리·표정·자세의 관점을 예시로 설명함 |
| 신뢰 | 어떤 근거를 볼 수 있는가 | 구현 근거·설계 자료·현장 검증 범위가 구분됨 |
| 탐색 | 다음에 어디로 가는가 | 세 주요 목적지와 현재 위치를 즉시 알아볼 수 있음 |
| 사용성 | 내 휴대전화에서도 편한가 | 글자·터치·뒤로 가기·확대·하단 안전영역이 함께 작동함 |

‘5초 안에 목적을 이해한다’는 디자인 목표다. 실제 사용자에게 확인하기 전에는 달성한 성과로 쓰지 않는다. 홈의 간결함과 상세 페이지의 설명 충실도를 함께 평가한다.

## 2. 조사 요약 — 글래스모피즘과 Apple

### 2.1 일반적인 글래스모피즘

글래스모피즘은 반투명한 면과 배경 흐림으로 앞뒤 깊이를 표현하는 방식이다. 불투명도와 블러가 기본이며, 얇은 경계와 명암이 재질을 보완한다. 가독성은 실제 뒤에 놓이는 색과 이미지에 따라 달라진다. [NN/g의 정의와 사용 기준](https://www.nngroup.com/articles/glassmorphism/)

우리 웹에서는 배경을 통제할 수 있으므로 밝은 실버 명암을 사용한다. 유리의 존재감을 위해 복잡한 사진·강한 색 덩어리·움직이는 배경을 추가할 필요는 없다. 설명의 위계가 재질보다 먼저 읽혀야 한다.

### 2.2 Apple의 Liquid Glass

Apple은 Liquid Glass를 내비게이션과 조작 요소가 콘텐츠 위에 놓이는 기능적 계층으로 설명한다. 일반적인 본문 영역에는 표준 재질을 사용하도록 구분한다. `regular`는 가독성을 고려해 배경을 조정하고, `clear`는 사진·영상처럼 시각적으로 풍부한 배경 위의 제한된 용도에 적합하다. [Apple Materials](https://developer.apple.com/design/human-interface-guidelines/materials)

WWDC의 설명에는 빛을 모으는 렌징, 반사·굴절, 주변 콘텐츠에 따른 적응, 터치와 형태 전환이 함께 등장한다. 단일 CSS 블러값으로 정의되는 스타일이 아니다. 유리를 겹겹이 쌓지 않고 기능 관계가 보이도록 사용하는 점도 강조한다. [Meet Liquid Glass](https://developer.apple.com/videos/play/wwdc2025/219/)

### 2.3 모바일에서 적용할 해석

모바일에서는 하단 탐색부와 펼친 메뉴가 적은 화면 면적을 차지하면서도 쉽게 눌려야 한다. 아이콘 옆이나 아래에 의미 있는 라벨을 유지하고, 탐색과 실행 동작을 구분한다. Apple의 Tab bars 가이드도 탐색 목적과 라벨을 강조한다. [Apple Tab bars](https://developer.apple.com/design/human-interface-guidelines/tab-bars)

이 원칙을 웹에 옮길 때는 실제 URL 이동, 브라우저 뒤로 가기, 주소창, 텍스트 확대와 안전영역을 함께 설계한다. 네이티브 iOS의 제스처·자동 축소 바·광학 렌더링을 구현했다고 표현하지 않는다.

## 3. Apple이 고급스럽게 보이는 이유와 우리 적용안

아래 ‘적용안’은 조사에서 도출한 MirrorTing의 설계 판단이다. Apple의 규격을 그대로 재현한 목록이 아니다.

| 관찰한 원리 | 우리 웹에서의 적용안 | 확인 방법 |
| --- | --- | --- |
| 콘텐츠와 조작부의 계층 구분 | 설명은 안정적인 밝은 면, 메뉴·하단 탐색은 유리 | 블러를 꺼도 문서의 읽는 순서가 분명함 |
| 배경·동작에 반응하는 재질 | 얇은 하이라이트와 제한된 투명도, 짧은 누름 피드백 | 스크롤 중 메뉴 글자가 배경과 섞이지 않음 |
| 조화로운 둥근 형태 | 큰 면의 곡률과 안쪽 버튼의 여백을 함께 조절 | 모서리 부근의 간격이 유독 좁거나 넓지 않음 |
| 관련 조작의 묶음 | 목적이 같은 링크는 한 그룹으로 정리 | 카드·캡슐·테두리를 중첩하지 않음 |
| 주변 환경에 따른 가독성 | 불투명 대체와 높은 기본 명암을 제공 | 이미지·진한 글자가 뒤로 지나가도 라벨이 읽힘 |
| 일관된 상호작용 | 선택·포커스·열림·뒤로 가기를 예측 가능하게 유지 | 터치·키보드·직접 주소 접근 결과가 일치함 |

곡률의 조화, 조작의 그룹화, 스크롤 경계의 역할은 Apple의 새 디자인 시스템 설명에서도 확인할 수 있다. 이 웹에서는 그 원리를 여백과 상태 설계에 반영한다. [Get to know the new design system](https://developer.apple.com/videos/play/wwdc2025/356/)

## 4. 제공받은 Apple 참고 MD를 사용하는 방법

제공 자료의 YAML·섹션·컴포넌트 설명 형식은 참고한다. 내용은 다음처럼 검토해 사용한다.

| 참고 자료의 항목 | 이번 명세에서의 처리 |
| --- | --- |
| `#0071e3`, `#f5f5f7` 등의 색 | 프로젝트 제안값으로 채택하고 실제 조합의 대비를 계산 |
| SF Pro 사용 횟수·관측 날짜 | 이번 조사에서 재측정하지 않았으므로 근거 수치로 재사용하지 않음 |
| 18px 카드·980px 버튼 곡률 | 특정 웹 표면의 관측과 보편적인 네이티브 토큰을 구분 |
| hover·pressed 관측 여부 | 자료 내부의 설명이 일치하지 않아 검증된 Apple 상태값으로 취급하지 않음 |
| 투명색 `#00000000`에 대한 고정 대비 | 실제 바탕색이 없으므로 해당 대비값을 채택하지 않음 |
| Apple 공개 웹과 HIG 문서 사이트 | 마케팅 화면·문서 사이트·네이티브 가이드를 다른 근거로 취급 |

예를 들어 `#0066cc` 글자와 `#f5f5f7` 배경의 대비는 약 **5.112:1**이다. 글자가 투명한 면 위에 있다면 그 면과 뒤 배경을 합성한 결과를 다시 검사한다. 실제 구현을 측정하지 않은 값을 ‘실측’이라고 기록하지 않는다.

## 5. 아트 디렉션

### 5.1 배경과 빛

- 기본은 밝은 회백색. 위쪽은 조금 밝고, 제품 주변에는 옅은 실버 명암을 둔다.
- 화면 전체가 단조롭지 않도록 큰 범위의 낮은 대비 그라데이션 하나를 허용한다.
- 그라데이션의 경계·중심 원이 눈에 띄지 않게 한다. 움직이는 구체나 네온은 사용하지 않는다.
- 거울의 어두운 반사면이 제품의 중심 대비를 만든다. 제품 뒤에 장식 판을 반복하지 않는다.
- 브랜드 파랑은 주요 행동·선택·링크에 사용한다. 모든 카드와 아이콘에 파랑을 칠하지 않는다.

### 5.2 화면의 밀도

- 홈은 한 장의 명함: 팀·작품·짧은 설명·제품·세 목적지.
- 상세는 한 개의 읽기 주제와 관련 이미지 또는 도식. 긴 자료는 펼쳐 읽는다.
- 카드로 둘러싸는 것은 실제 그룹 의미가 있을 때만 허용한다. 설명 문단마다 별도 유리 카드를 만들지 않는다.
- 작품 사진·설계 자료가 충분한 설명을 제공하면 장식 요소의 양을 줄인다.
- 페이지 제목, 선택 주제, 해당 설명의 위계가 구별되어야 한다. 같은 크기의 큰 제목을 연속으로 배치하지 않는다.

## 6. 색과 대비

### 6.1 역할별 색상

| 역할 | 제안값 | 사용 원칙 |
| --- | --- | --- |
| 기본 배경 | `#f5f5f7` | 모든 공개 페이지의 공통 바탕 |
| 배경 깊이 | `#e9edf3` | 제품 주변의 정적인 낮은 대비 명암 |
| 읽기 면 | `#ffffff` | 긴 설명·출처·확장된 세부 자료 |
| 주요 글자 | `#1d1d1f` | 제목·본문의 핵심 문장·활성 아이콘 |
| 보조 글자 | `#515154` | 설명·내비게이션 라벨 |
| 부가 글자 | `#626975` | 날짜·출처 설명 등. 작은 글자를 흐리게 처리하지 않음 |
| 주요 버튼 | `#0071e3` / 흰 글자 | 한 행동 그룹의 대표 목적지 |
| hover / pressed | `#0066cc` / `#005bb5` | 글자 대비를 유지하는 짙은 파랑 |
| 본문 링크 | `#0066cc` | 긴 문장 안에서는 밑줄도 사용 |
| 키보드 포커스 | `#0066cc` | 2px 외곽선과 3px 간격의 제안값 |
| 선택된 주제 | `#e8f1fc` / `#005bb5` | 명암·글자·선택 표시와 의미 속성을 함께 사용 |
| 경계 | 검정 계열 12~22% | 장식 경계와 필수 상태 표시의 기준을 구분 |

### 6.2 이번에 계산한 불투명 조합

아래는 sRGB 상대 휘도 공식으로 계산한 색상 조합이다. 표시용 소수 셋째 자리이며 통과 판단은 반올림 전 값으로 한다. 브라우저 전체 접근성 검증이나 유리 위 모든 배경의 통과를 의미하지 않는다.

| 글자 / 바탕 | 계산 대비 | 적용 |
| --- | ---: | --- |
| `#1d1d1f` / `#f5f5f7` | 15.457:1 | 제목·주요 글자 |
| `#515154` / `#f5f5f7` | 7.265:1 | 설명 |
| `#626975` / `#f5f5f7` | 5.080:1 | 부가 글자 |
| `#0066cc` / `#f5f5f7` | 5.112:1 | 링크 |
| `#ffffff` / `#0071e3` | 4.697:1 | 주요 버튼 기본 상태 |
| `#ffffff` / `#0066cc` | 5.567:1 | 주요 버튼 hover |
| `#ffffff` / `#005bb5` | 6.638:1 | 주요 버튼 pressed |
| `#626975` / `#e9edf3` | 4.707:1 | 배경 명암 위 부가 글자 |

일반 글자에는 4.5:1 이상을 적용한다. 큰 글자의 3:1 예외가 있더라도 이 디자인의 본문·컨트롤은 4.5:1을 기본으로 검사한다. [WCAG Contrast Minimum](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)

조작·선택을 식별하는 데 필요한 표시와 의미 있는 도식은 인접 색에 대해 3:1을 확인한다. 모든 장식 테두리에 동일한 조건이 적용되는 것은 아니다. [WCAG Non-text Contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html)

## 7. 재질 시스템

### 7.1 재질은 역할로 선택한다

| 재질 | 시작값 | 적용 영역 | 제한 |
| --- | --- | --- | --- |
| Reading | 불투명 흰색, 블러 없음 | 긴 설명, 근거 자료, 비교 예시 | 장시간 읽는 글자를 유리 효과로 흐리게 하지 않음 |
| Frost | 흰색 88%→60% 그라데이션, 모바일 16px / 데스크톱 24px 블러 | 통제된 밝은 배경의 홈 명함 | 움직이는 사진이나 글자를 뒤에 배치하지 않음 |
| Navigation | 흰색 82%, 모바일 20px / 데스크톱 24px 블러 | 상세 헤더·하단 탐색 | 스크롤되는 콘텐츠와의 실제 대비 검사 필요 |
| Dense | 흰색 96%, 필요 시 20px 블러 | 펼친 메뉴 | 흐린 부모 안에서는 불투명 흰색으로 처리 |
| Fallback | 불투명 흰색, 블러 없음 | 미지원·투명도 감소·대비 강화 | 정보·상태·포커스가 동일하게 유지됨 |

수치는 구현 시작점이다. 읽기 어려우면 **채움의 불투명도를 먼저 높이고**, 면적과 블러를 조절한다. 블러 반경만 키워 문제를 덮지 않는다. 모바일 성능은 실제 기기에서 판단한다.

### 7.2 경계·그림자·곡률

- 큰 면의 윗부분에는 얇은 흰 하이라이트, 아래쪽에는 낮은 대비의 회색 경계를 둔다.
- 홈 명함 그림자 시작값: `0 12px 40px rgba(29,39,55,.08)`와 작은 안쪽 하이라이트.
- 플로팅 탐색 그림자 시작값: `0 6px 24px rgba(29,39,55,.08)`.
- 본문 행과 출처 목록에는 큰 그림자를 쓰지 않는다. 구분선·여백이 우선이다.
- 큰 카드의 곡률은 모바일 24px, 데스크톱 28px. 작은 읽기 면은 18px, 일반 컨트롤은 12px.
- 캡슐은 단일 행동이나 탐색 그룹에 쓴다. 숫자가 큰 radius 자체를 품질 기준으로 삼지 않는다.
- 안쪽 곡률은 바깥 곡률과 사이 여백에 맞춰 시각 검수한다. 크기가 다른 요소에 같은 radius를 일괄 적용하지 않는다.

### 7.3 중첩 규칙

한 위치에서 여러 `backdrop-filter`가 중첩되지 않게 한다. 홈 명함 위 버튼은 별도 블러가 없는 안정적인 면을 사용한다. 헤더 안 메뉴는 부모의 재질 위에 불투명한 읽기 면을 둔다. 메뉴·도크·주제 탭을 모두 독립 유리 카드로 쌓지 않는다.

## 8. 타이포그래피와 한국어 읽기

### 8.1 글꼴

현재 Pretendard 우선 스택과 시스템 대체 글꼴을 유지한다. `public/` 확인 범위에서 별도 WOFF 파일은 없으므로 로컬 번들 Pretendard가 이미 포함됐다고 단정하지 않는다. 실제 로드 상태와 글꼴 권한은 구현 시 확인한다. Apple의 다운로드 글꼴을 새 웹폰트로 복사하지 않는다.

서체를 바꾸기 전에 크기·행간·행 길이·굵기를 조절한다. `650` 같은 중간 굵기는 가변 폰트가 없을 때 대체 글꼴에서도 확인한다.

### 8.2 글자 역할

| 역할 | 모바일 기준 | 데스크톱 기준 | 읽기 기준 |
| --- | --- | --- | --- |
| 홈 작품명 | 32~40px | 44~56px | 작품명이 설명보다 먼저 보임 |
| 상세 H1 | 30px | 34~46px | 짧은 페이지 목적, H1 한 개 |
| 섹션 제목 | 24px | 32px | 반복되는 대형 제목을 피함 |
| 핵심 본문 | 16px / 1.8 | 17px / 1.8 | 정보량을 줄일 때 글자부터 줄이지 않음 |
| 버튼·탭 | 16px / 1.5 | 16px / 1.5 | 라벨이 길면 높이 증가 또는 줄바꿈 |
| 보조 설명 | 14px / 1.65 | 14px / 1.65 | 의미 있는 도움말은 이 수준 이상 |
| 출처·부가 정보 | 13px / 1.6 | 13px / 1.6 | 필수 설명·면책을 작은 글자로 밀어내지 않음 |

- 본문은 왼쪽 정렬. 홈의 짧은 제목과 특별한 안내만 제한적으로 가운데 정렬한다.
- 한국어는 단어 단위 줄바꿈을 우선하되 긴 URL·기술명은 `overflow-wrap`으로 예외를 허용한다.
- 장식적인 강제 줄바꿈 때문에 320px에서 단어가 한 글자씩 떨어지지 않게 한다.
- 페이지 확대와 사용자 글자 설정을 허용한다. `text-size-adjust: none`, 확대 제한 viewport는 사용하지 않는다.
- 본문 읽기 폭은 최대 42rem을 시작점으로 하고, 도식·제품 이미지는 공통 1040px 컨테이너를 활용한다.

## 9. 레이아웃과 반응형

### 9.1 공통 배치

| CSS 너비 | 구성 | 여백 시작값 | 주요 확인 |
| --- | --- | --- | --- |
| 320~359px | 한 열, 필요한 경우 제품을 설명 아래로 이동 | 바깥 16px, 카드 안 18~20px | 제목·탭·두 보조 링크가 겹치지 않음 |
| 360~767px | 세로 명함, 제품과 짧은 제목의 균형 | 바깥 20px, 카드 안 20~24px | 주요 행동은 한 행 전체, 보조 둘은 다음 행 |
| 768~1023px | 콘텐츠에 맞는 1~2열 | 바깥 32px | 모바일 구성의 단순 확대를 피함 |
| 1024px 이상 | 가로 명함, 설명과 제품·도식의 2열 | 바깥 40~80px | 과도한 빈 공간·늘어난 본문 줄 길이를 방지 |

분기점은 이 프로젝트의 시작값이다. Apple의 공통 웹 브레이크포인트로 설명하지 않는다. 767/768/769px 경계도 함께 확인한다.

### 9.2 홈의 정보 순서

```text
CarpeDM                                      EXPO
─────────────────────────────────────────────────
AI 스마트 미러 프로젝트              제품 이미지
4-Fit MirrorTing
짧은 소개
면접 · 직업훈련 · 직장대화

[ 작품 알아보기: 대표 행동                         ]
[ 활용 장면                 ][ 기술과 자료          ]
응답 · 목소리 · 표정 · 자세          샘플 운영 화면
```

작품명·팀·설명·주요 행동은 이미지 로드를 기다리지 않고 보인다. 높이가 짧거나 확대된 환경에서는 정상 스크롤을 허용한다. 첫 화면에 모두 넣기 위해 글자·버튼을 계속 줄이지 않는다. 홈에는 상세 페이지용 헤더와 도크를 중복 배치하지 않는다.

### 9.3 상세 페이지의 정보 순서

```text
헤더 / 메뉴
페이지 제목 + 무엇을 읽을 수 있는지 한 문장
주제 선택 + 선택한 주제의 짧은 설명
핵심 설명과 제품·도식
필요한 근거 또는 펼쳐 읽는 상세 자료
다음에 읽을 주제
모바일 하단 탐색 / 안전영역
```

기본 화면은 설명만으로도 이해되어야 한다. 필수 이유·기준·근거를 모두 접어놓지 않는다. 더 긴 사양과 반복 예시를 선택적으로 펼친다.

## 10. 내비게이션과 조작 규칙

### 10.1 홈의 링크

| 라벨 | 목적지 | 위계 |
| --- | --- | --- |
| 작품 알아보기 | `service/` | 파란 대표 행동, 기존 장식 화살표 한 개 |
| 활용 장면 | `use-cases/` | 밝은 보조 행동 |
| 기술과 자료 | `system/` | 밝은 보조 행동 |
| CarpeDM | `team/` | 팀을 확인하는 텍스트 링크 |
| 샘플 운영 화면 | 기존 검증된 dashboard URL | 작은 독립 링크, 새 탭 안내 유지 |

실제 페이지 이동은 `<a>`다. 주요 목적지에 가짜 로딩·버튼 시뮬레이션·불필요한 확인 창을 넣지 않는다.

### 10.2 상세 헤더·메뉴·하단 탐색

- 기존 세 메뉴 `작품 소개 / 활용 장면 / 기술과 자료`와 모바일 네 목적지 `명함 / 작품 소개 / 활용 / 기술`을 유지한다.
- 헤더 높이는 현재 68px을 시작점으로 유지한다. 바꾸면 앵커 오프셋과 조립 장면의 헤더 계산을 함께 검증한다.
- 메뉴 열기·닫기의 접근 가능한 이름, `aria-expanded`, Escape 닫기, 원래 버튼으로 포커스 복귀를 유지한다.
- 메뉴가 열린 동안 가리는 배경 링크가 잘못 선택되지 않는지 현재 메뉴 구조에 맞게 확인한다. 일반 disclosure에 임의의 모달 포커스 가두기를 추가하지 않는다.
- 하단 탐색은 `<nav>` 안의 실제 링크와 `aria-current="page"`다. 페이지 내 ARIA tablist와 혼용하지 않는다.
- 라벨은 기본 표시한다. 작아진다고 아이콘만 남기거나 `더 보기`에 주요 목적지를 숨기지 않는다.
- 도크 본체 64px과 아래 간격·안전영역을 포함한 하단 여백을 콘텐츠에도 확보한다.
- 뒤로 가기, 새 탭 열기, 링크 복사와 `/expo/` 호환 진입이 그대로 작동해야 한다.

### 10.3 페이지 내부 탭·펼쳐보기

`PageTabs`의 방향키·Home/End, 선택된 탭의 포커스, 기존 fragment·history·접힌 조상의 열림 처리를 보존한다. 비활성 패널을 시각적으로 숨겨도 기존 마운트·주소 연결을 깨뜨리지 않는다.

네 관점 탭은 작은 화면에서 한국어를 우선 표시하고 전체 한국어·영문 이름을 접근 가능한 이름으로 유지한다. 펼쳐보기는 기존 `details/summary`를 사용하고 `열기/닫기`를 표시하는 상태와 포커스를 제공한다.

## 11. 컴포넌트의 상태와 세부 마감

### 11.1 행동과 선택

| 컴포넌트 | 기본 | hover / pressed | 키보드 포커스 | 선택·열림 |
| --- | --- | --- | --- | --- |
| 대표 링크 | 파랑·흰 글자·48px 이상 | 지정한 짙은 파랑, 레이아웃 이동 없음 | 외곽선과 간격을 유지 | 현재 페이지 링크와 혼동하지 않음 |
| 보조 링크 | 밝은 면·차콜 글자 | 면과 경계만 조금 짙어짐 | 대표 링크와 같은 포커스 원칙 | 목적지가 있으면 항상 접근 가능 |
| 본문 링크 | 파랑과 밑줄 | 밑줄 유지, 대비 유지 | 밑줄 외 포커스 표시 | 방문 상태가 의미를 지우지 않음 |
| 주제 탭 | 명확한 라벨, 조용한 기본 면 | 낮은 대비의 hover 면 | 방향키 이동과 포커스 일치 | 밑줄 또는 명확한 표시와 `aria-selected` |
| 도크 링크 | 라벨과 동일한 두께의 아이콘 | 터치 후 선택이 분명함 | 도크 밖에서도 보이는 외곽선 | 활성 면·글자·`aria-current` |
| 메뉴 버튼 | 최소 48px 터치 영역 | 짧은 명암 반응 | 열기 전후 포커스 위치가 예측 가능 | 아이콘 상태와 `aria-expanded` |
| 펼쳐보기 | 요약 문장·열림 표시·48px 이상 | 의미가 바뀌지 않음 | 네이티브 키보드 동작 유지 | 펼쳐진 본문과 구분되는 여백 |
| 네이티브 select | 라벨과 선택값, 16px 이상 입력 글자 | 브라우저 동작 존중 | 눈에 보이는 포커스 | 선택한 설명만 갱신 |

`disabled` 상태는 실제로 사용할 수 없는 동작이 있을 때만 만든다. 현재 정적 소개 링크에는 임의로 비활성 상태를 추가하지 않는다. 컨트롤을 누를 때 크기가 변해 옆 요소가 밀리지 않아야 한다. 초점 외곽선이 카드의 `overflow`에 잘리지 않게 한다.

### 11.2 읽기 면·출처·제품

| 컴포넌트 | 명세 |
| --- | --- |
| 홈 명함 | 한 번의 큰 그림자, 정체성·제품·목적지에 일정한 안쪽 여백 |
| 기본 설명 | 제목 다음의 짧은 문단으로 맥락을 설명, 설명만으로도 목적 이해 가능 |
| 대화 예시 | 질문·답변·연습 포인트를 시각적으로 구분, 작성된 예시임을 유지 |
| 근거 목록 | 자료 종류·무엇을 보여주는지·직접 링크를 행으로 정리 |
| 기술 공개 | 짧은 요약을 기본 표시, 상세 사양은 펼쳐보기 |
| 제품 이미지 | 원래 비율·`object-fit: contain`·예약된 면적·기존 실패 대체 |
| 다음 읽기 | 텍스트 중심의 한 링크, 큰 CTA 카드 반복 없음 |

현재 콘텐츠가 로컬·동기식이므로 가짜 스켈레톤·진행률·AI 처리 중 상태를 추가하지 않는다. 실제 이미지 로드 실패와 자료 부재는 기존 설명과 대체 형태로 처리한다.

## 12. 페이지별 디자인 브리프

### 12.1 Home — 디지털 명함

- **첫 질문:** 어떤 프로젝트이며 어느 팀의 작품인가.
- **구성:** CarpeDM·EXPO → AI 스마트 미러 → 작품명·짧은 설명·제품 → 세 연습 종류 → 세 목적지.
- **재질:** 밝은 실버 캔버스 위 Frost 한 장. 버튼은 별도 블러 없이 구분한다.
- **대표 행동:** `작품 알아보기`. 활용·기술은 두 보조 링크, 운영 화면은 하위 링크다.
- **이미지:** 기존 도안 기반 미러 전체를 표시한다. 화면 안에 가짜 분석 결과를 합성하지 않는다.
- **모바일:** 320px에서는 제품과 글자가 충돌하면 정상적으로 쌓는다. 제목과 버튼을 축소해 억지로 가로 정렬하지 않는다.
- **통과 기준:** 이미지가 없어도 이름·설명·팀·세 목적지가 남는다. 짧은 화면과 확대에서도 주요 링크에 도달할 수 있다.

### 12.2 Service — 작품과 체험 이해

- **첫 질문:** 왜 거울 앞에서 대화를 연습하며 어떻게 읽으면 되는가.
- **기본 주제:** `작품 이해`. 지금의 안내와 제품·연습 과정 구성을 유지한다.
- **주제:** 작품 이해 / 대화 예시 / 체험 순서 / 두 장치.
- **재질:** 읽기 문단은 안정적인 면, 주제 선택부는 제한된 조작 강조.
- **장치 설명:** 스마트 미러와 키오스크의 역할을 먼저 보여주고 상세 부품은 펼친다.
- **체험 순서:** 여섯 단계의 설계를 모바일 두 열, 넓은 화면 세 열로 정리한다. 화면이 더 좁거나 글자가 커지면 한 열을 허용한다.
- **통과 기준:** 작성된 대화 예시와 실제 연동·검증 상태가 혼동되지 않는다. 현재 페이지에서 실제 AI 체험을 실행하는 것으로 보이지 않는다.

### 12.3 Four Fit — 네 관점과 다음 연습

- **첫 질문:** 대화를 어떤 기준으로 돌아보는가.
- **구성:** 응답 / 목소리 / 표정 / 자세의 탭 → 선택한 관점의 의미 → 관찰 질문 → 다음에 바꿀 한 가지.
- **재질:** 아이콘의 실버 재질과 읽기 면을 구분한다. 탭 아래에 또 큰 유리 카드를 겹치지 않는다.
- **예시:** 답변 비교와 재연습 설명은 현재 공개 범위를 유지한다.
- **모바일:** 네 라벨이 가려지지 않고, 한 패널을 충분한 본문 크기로 읽을 수 있어야 한다.
- **통과 기준:** 표시한 그림을 실제 얼굴·자세 측정 결과로 이해하지 않는다. 탭 이동 후 키보드 포커스와 시각적 선택이 일치한다.

### 12.4 System — 구조와 구현 근거

- **첫 질문:** 답변이 피드백으로 이어지는 구조와 확인 가능한 근거는 무엇인가.
- **기본 흐름:** 상황 선택 → 답변 입력 → 대화·분석 → 결과·재연습의 설명.
- **주제:** 작동 흐름 / 장치 구성 / 구현 자료 / 발전 방향.
- **재질:** 도식의 선·라벨은 안정적인 읽기 면, 선택 컨트롤만 제한된 강조.
- **하드웨어:** 기존 미러·카메라·오디오 시각 자료와 조립 움직임을 보존한다. 부품 좌표·배율·스크롤 곡선을 재질 수정과 함께 재작성하지 않는다.
- **근거:** 코드에서 확인한 범위와 현장에서 검증할 부분을 서로 다른 설명으로 표시한다. 실시간 상태등·가짜 로그·추정 성능 수치를 넣지 않는다.
- **통과 기준:** 관련 소스 링크가 실제 자료로 연결되고, 현재의 소프트웨어 설명과 실물 통합 검증의 차이가 명확하다.

### 12.5 Uses — 연습 종류와 교육 활용

- **첫 질문:** 어떤 상황에서 연습하고 어디에 활용할 수 있는가.
- **구성:** 현재 소프트웨어의 연습 종류 → 제안하는 교육 활용 → 독립된 샘플 운영 화면.
- **재질:** 선택값·상황·연습 초점을 분명히 나눈다. 긴 교육 가이드는 흰 읽기 면과 여백으로 정리한다.
- **정보:** 대학 진로 준비·신입 교육·팀 워크숍은 제안된 활용으로 유지한다. 고객 도입·교육 효과로 표현하지 않는다.
- **모바일:** 하나의 네이티브 선택으로 내용을 바꾼다. 긴 가이드 전체를 live region으로 읽게 하지 않는다.
- **통과 기준:** 빈 선택이나 자동 분석을 연출하지 않는다. 운영 링크를 누르기 전 독립 예시라는 맥락이 보인다.

### 12.6 Team — CarpeDM의 의도와 기준

- **첫 질문:** 누가 왜 만들었으며 어떤 설계 기준을 지켰는가.
- **구성:** 팀의 목적 → 세 가지 설계 기준 → 공개 자료.
- **재질:** 본문과 기준 행의 정렬이 중심이다. 홈의 제품 이미지와 큰 홍보 문장을 반복하지 않는다.
- **내용:** 확인되지 않은 구성원 이름·역할·수상·연락처를 채우지 않는다.
- **통과 기준:** 목적과 판단 기준이 기본 화면에서 읽히고, 공개 근거로 이동할 수 있다.

### 12.7 EXPO 호환 주소와 샘플 Dashboard

`/expo/`는 별도 모바일 테마 없이 Home을 공유한다. Dashboard는 별도 체크아웃의 예시 운영 도구다. 향후 시각 정합성을 맞출 때도 표·필터·상태·다이얼로그의 정보 밀도와 데이터 경계를 우선한다. 이번 디자인 MD는 Dashboard 코드 변경이나 실시간 연동을 뜻하지 않는다.

## 13. 모바일 글래스의 구체적인 기준

### 13.1 터치와 탐색

- 이 프로젝트의 독립 컨트롤 목표는 **48×48 CSS px 이상**, 인접 컨트롤 간격은 8px 이상이다. 문자열 길이에 따라 너비·높이가 더 커질 수 있다.
- WCAG 2.2 AA의 Target Size Minimum은 예외 조건을 포함한 24×24 CSS px 기준이다. 프로젝트 목표와 표준 최소값을 구분한다. [W3C Target Size](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)
- Apple의 현재 접근성 표는 iOS/iPadOS 기본 컨트롤 크기 44×44pt와 최소 28×28pt를 구분한다. 이를 웹 CSS px의 동일한 규격이나 ‘일률적인 44px 최소’로 옮기지 않는다. [Apple Accessibility](https://developer.apple.com/design/human-interface-guidelines/accessibility)
- 파인 포인터 hover에서만 알 수 있는 기능을 만들지 않는다. 눌러야 하는 요소의 기본 상태가 분명해야 한다.
- 사이트에는 필요 없는 스와이프 전용 탐색, 드래그, 길게 누르기 기능을 추가하지 않는다.

### 13.2 안전영역과 짧은 높이

도크의 아래 간격은 `max(12px, env(safe-area-inset-bottom))`을 시작점으로 한다. 마지막 콘텐츠에는 도크 본체와 위아래 여유 공간까지 포함한 여백을 둔다. 노치·가로 화면에서는 좌우 안전영역도 확인한다. `env()`는 사용자 환경의 안전영역 값을 CSS에서 읽는 데 사용할 수 있다. [MDN env()](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/env)

홈은 높이 고정과 `overflow: hidden`으로 가두지 않는다. 주소창이 확장되거나 가로로 회전해 화면 높이가 줄어도 스크롤로 모든 링크를 사용할 수 있어야 한다. 키보드가 표시되는 환경에서도 선택 컨트롤과 해당 설명이 가려지는지 확인한다.

### 13.3 유리와 콘텐츠의 만남

| 상황 | 의도한 처리 |
| --- | --- |
| 도크 뒤에 진한 본문이 지나감 | 82% 채움과 블러로 라벨을 분리하고 실제 겹침 대비 확인 |
| 제품 이미지 위로 메뉴가 열림 | 펼친 메뉴는 더 불투명한 읽기 면 사용 |
| 고대비 설정 | 투명도·그림자를 줄이고 경계·포커스를 선명하게 유지 |
| 작은 화면에서 탭이 길어짐 | 라벨을 읽을 수 있게 줄바꿈·한글 우선 표시, 높이 자동 증가 |
| 저성능 기기에서 스크롤이 둔해짐 | 블러 면적·중첩부터 줄이고 필요하면 불투명 면으로 전환 |
| 화면 확대 | 컨트롤과 행 높이가 증가하며 본문을 자르지 않음 |

## 14. 제품 이미지와 아이콘

### 14.1 확인한 기존 자산

- 미러: `public/media/hardware/sm-assembled-v1.webp`.
- 키오스크: `public/media/kiosk-front.webp`.
- 슬롯과 출처 분류: `src/data/media.ts`.
- 제품 표시·실패 대체: `src/components/ProductFrame/`.
- 네 관점 장식: `src/components/GlassIcon/`.

이미지는 전체 비율을 보존하고 최대 표시 영역을 명시한다. 반투명 자산의 회색·흰 테두리 잔상, 어두운 렌더의 밝은 배경 분리감, 하단 베이스가 잘리는지 확인한다. 배경을 바꿨다는 이유로 제품 그림에 임의의 하드웨어·조명·화면 정보를 추가하지 않는다.

### 14.2 품질과 사실성

- 본문·버튼·작품명을 이미지에 구워 넣지 않는다. HTML 텍스트로 유지한다.
- 홈 이미지는 중요도에 맞게 먼저 표시하고, 상세 이미지는 기존 지연 로드를 유지한다.
- `width`·`height` 또는 안정적인 비율로 공간을 예약해 로드 후 밀림을 줄인다.
- 이미지 실패 시 기존 의도된 실루엣과 접근 가능한 설명을 사용한다. 깨진 이미지 표시를 남기지 않는다.
- 기존 이미지 분류·대체 텍스트·내부 출처를 유지한다. 장치 그림을 실제 촬영 사진으로 설명하지 않는다.
- 사용자 요청에 따라 그림 옆 AI·콘셉트·실물 사진 아님 캡션을 반복하지 않는다.
- SF Symbols나 Apple 브랜드 자산을 새로 복사하지 않는다. 기존 프로젝트 SVG를 재사용한다.
- 밝은 배경 위에서 SVG의 흰 하이라이트가 사라지면 경계·음영을 먼저 조절한다. 의미와 형태를 임의로 교체하지 않는다.

## 15. 모션과 반응

| 대상 | 제안 | 제한 |
| --- | --- | --- |
| 버튼 누름 | 120ms 안팎의 명암 반응 | 면적·문자 위치가 흔들리지 않음 |
| hover·선택 | 180ms 안팎의 색·경계 변화 | 색만으로 상태를 전달하지 않음 |
| 메뉴·펼침 | 240ms 이내의 짧은 전환 | 자동 높이 애니메이션을 위해 새 라이브러리를 넣지 않음 |
| 페이지·주제 이동 | 즉시 내용 표시, 기존 주소·포커스 유지 | 읽을 글자를 늦게 나타내지 않음 |
| 하드웨어 조립 | 현재의 제한된 스크롤 장면 유지 | 완성 위치·정렬·준비 상태·오류 처리를 보존 |
| 모션 감소 | 장식 transition·자동 움직임 제거 | 콘텐츠와 상태 변화는 즉시 사용 가능 |

위 시간은 프로젝트 제안값이다. Apple의 스프링 상수·프레임별 굴절을 측정한 값이 아니다. 모바일의 지속적인 블러 애니메이션, 포인터 추종 반사광, 기울기 센서 효과는 기본 범위에 넣지 않는다.

## 16. 접근성과 브라우저 대체

### 16.1 텍스트·포커스·구조

- 페이지마다 H1 한 개, 의미에 맞는 제목 단계와 `main`·`nav` 영역을 둔다.
- 첫 키보드 이동에서 건너뛰기 링크를 사용할 수 있어야 한다.
- 고정 헤더·도크가 포커스된 요소를 완전히 가리지 않게 한다. 프로젝트 기준은 포커스와 대상 전체가 가능하면 보이는 상태다. [WCAG Focus Not Obscured](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html)
- 320 CSS px에서 본문에 양방향 스크롤이 생기지 않도록 검사한다. 필요한 2차원 자료는 예외를 별도로 설명한다. [WCAG Reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html)
- 200% 텍스트 확대에서 정보와 기능을 유지한다. [WCAG Resize Text](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html)
- 사용자 행간·문단·자간·단어 간격 변경에서 내용이 잘리지 않게 한다. [WCAG Text Spacing](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html)
- 네 관점의 영어 이름·선택 상태를 스크린리더에서도 확인한다. 장식 SVG는 의미 텍스트와 구분한다.

### 16.2 투명도와 지원 차이

`backdrop-filter`는 뒤쪽 픽셀에 필터를 적용하며 투명·반투명 채움과 함께 사용한다. 오래된 브라우저와 배경 경계 조건을 고려해 불투명 기본값부터 작성한다. 부모 요소의 `opacity` 때문에 자식의 배경 흐림 범위가 달라질 수 있다. [MDN backdrop-filter](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/backdrop-filter)

`prefers-reduced-transparency`는 조회일 기준 MDN에서 지원 제한이 표시된다. 감지했을 때 개선하되, 모든 브라우저가 OS 설정을 전달한다고 가정하지 않는다. 기본 화면부터 높은 가독성을 제공한다. [MDN prefers-reduced-transparency](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-transparency)

`prefers-reduced-motion`, `prefers-contrast`, `forced-colors`도 확인한다. 높은 대비·강제 색상에서 그림자나 얇은 하이라이트만으로 컨트롤을 구분하지 않는다. 별도의 테마 설정 화면을 만들 필요는 없다.

## 17. 기존 코드에 적용할 재질 참고

아래 CSS는 구현 방향을 설명하는 최소 예시다. 기존 토큰·컴포넌트 CSS·마지막 `silver.css`의 우선순위를 확인해 각 소유 파일에 통합해야 한다. 이 블록만 덧붙이면 전체 사이트가 완성되는 것으로 간주하지 않는다.

```css
:root {
  color-scheme: light;
  --color-bg: #f5f5f7;
  --color-text: #1d1d1f;
  --color-secondary: #515154;
  --color-subtle: #626975;
  --color-action: #0071e3;
  --color-action-hover: #0066cc;
  --color-border: rgb(29 39 55 / 0.12);
  --color-border-strong: rgb(29 39 55 / 0.22);
}

.hero__card,
.site-header,
.mobile-dock,
.site-nav {
  background: #fff;
}

@supports (backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px)) {
  .hero__card {
    background: rgb(255 255 255 / 0.8);
    -webkit-backdrop-filter: blur(24px) saturate(110%);
    backdrop-filter: blur(24px) saturate(110%);
  }

  .site-header,
  .mobile-dock {
    background: rgb(255 255 255 / 0.82);
    -webkit-backdrop-filter: blur(24px) saturate(110%);
    backdrop-filter: blur(24px) saturate(110%);
  }

  @media (max-width: 767px) {
    .hero__card {
      -webkit-backdrop-filter: blur(16px) saturate(110%);
      backdrop-filter: blur(16px) saturate(110%);
    }

    .site-header,
    .mobile-dock {
      -webkit-backdrop-filter: blur(20px) saturate(110%);
      backdrop-filter: blur(20px) saturate(110%);
    }
  }
}

@media (prefers-reduced-transparency: reduce), (prefers-contrast: more) {
  .hero__card,
  .site-header,
  .mobile-dock,
  .site-nav {
    background: #fff;
    -webkit-backdrop-filter: none;
    backdrop-filter: none;
  }
}

@media (forced-colors: active) {
  .hero__card,
  .site-header,
  .mobile-dock,
  .site-nav {
    color: CanvasText;
    background: Canvas;
    border: 1px solid CanvasText;
    -webkit-backdrop-filter: none;
    backdrop-filter: none;
    box-shadow: none;
  }
}
```

본문 전체에 `opacity`를 주지 않는다. 반투명 값은 채움에만 적용한다. 불투명 기본값 → 지원되는 브라우저의 유리 재질 → 접근성 설정의 불투명 대체 순서를 지킨다. 접두 선언은 표준 선언 앞에 놓고 실제 빌드 결과의 계산된 스타일을 확인한다.

## 18. 성능과 표시 안정성

다음은 구현 후의 검수 목표다. 이 문서 작성으로 달성했다고 기록하지 않는다.

| 항목 | 목표·원칙 | 확인 방법 |
| --- | --- | --- |
| 블러 면적 | 화면 전체가 아닌 제한된 재질 면 | 실제 겹침과 스크롤 중 비용을 브라우저 성능 도구로 확인 |
| 동시 재질 | 한 위치의 블러 중첩을 피함 | 메뉴·헤더·도크·카드의 합성 구조 확인 |
| 입력 반응 | 클릭 후 즉시 상태와 내용이 보임 | 저사양 실제 휴대전화에서 주제·메뉴 전환 |
| 이미지 로드 | 예약된 공간, 홈 이미지 우선 | 느린 연결·이미지 실패 시 레이아웃 이동 확인 |
| 자바스크립트 | 재질 변경은 CSS 우선 | 새 애니메이션·굴절·UI 라이브러리 추가 없음 |
| 폰트 | 기존 스택 유지, 실패해도 읽힘 | 대체 글꼴·느린 로드에서 줄바꿈 확인 |

Core Web Vitals의 좋은 경험 기준인 LCP 2.5초 이내, INP 200ms 이하, CLS 0.1 이하를 목표로 참고한다. 실제 평가는 사용자 데이터의 75번째 백분위수를 포함해 구분하며, 단일 로컬 실행을 실사용 성과로 보고하지 않는다. [Web Vitals](https://web.dev/articles/vitals)

프레임 저하가 있으면 애니메이션과 넓은 블러를 먼저 줄인다. 영구적인 `will-change`·강제 GPU 레이어·매 프레임 DOM 측정을 기본 처방으로 넣지 않는다. 최적화 전후의 실제 기록이 있을 때만 개선 수치를 쓴다.

## 19. 문구·빈 상태·자료 상태

### 19.1 공개 문구

- [공개 문구](content.md)의 작품 설명·주제명·도움말을 유지한다. 디자인 예시 문구를 승인된 공개 문구로 자동 교체하지 않는다.
- ‘혁신적·완벽한·정확한 분석’ 같은 표현보다 무엇을 연습하고 무엇을 살펴보는지 설명한다.
- 연습 예시는 작성된 내용이며 실제 AI 응답·검증된 코칭으로 표시하지 않는다.
- 구현 근거와 실제 현장 연동·분석 품질·교육 효과를 구분한다.
- 샘플 운영 화면은 독립 예시라는 맥락을 유지한다. 사실을 설명하는 문구는 장식 때문에 작게 숨기지 않는다.

### 19.2 오류와 자료 부재

| 상태 | 표시·행동 |
| --- | --- |
| 이미지 없음·로드 실패 | 기존 의도된 대체 형태와 설명, 탐색 링크 유지 |
| 사진·영상 미제공 | 존재하지 않는 재생·다운로드 버튼을 만들지 않음 |
| 외부 근거 링크 | 의미 있는 링크명, 새 탭 사용 시 안내와 기존 보안 속성 유지 |
| Dashboard URL 미설정·검증 실패 | 기존 검증 로직에 따라 링크를 숨김, 주소를 추측해 대체하지 않음 |
| 자바스크립트 미실행 | 기존 HTML의 정직한 no-script 안내 유지 |
| 긴 라벨·번역·주소 | 문단·행 높이 증가와 줄바꿈, 말줄임만으로 중요 정보를 숨기지 않음 |

개인정보·방문자 등록·카메라·NFC·AI 요청을 새로 추가하는 문서가 아니다. 새로운 입력 기능이 필요해지면 데이터·동의·오류 설계를 별도로 다룬다.

## 20. 구현 범위와 파일 지도

### 20.1 재사용 우선

Vite·React·TypeScript·네이티브 CSS 구조를 유지한다. `GlassCard`, 범용 테마 엔진, 새로운 상태 관리나 라우터를 만들기 전에 기존 토큰·클래스·컴포넌트로 해결한다. 기존 이름을 재질 이름에 맞춰 일괄 변경하지 않는다.

| 파일·영역 | 적용 시 맡을 역할 | 함께 확인할 연결 |
| --- | --- | --- |
| `src/styles/tokens.css` | 의미별 밝은 색·타입·간격·재질 토큰 | native control의 color-scheme |
| `src/styles/globals.css`, `typography.css` | 본문·링크·포커스·대체 설정 | 키보드·확대·강제 색상 |
| `src/styles/showroom.css` | 공통 캔버스와 기존 배경 정합성 | 과거 어두운 하드코딩 |
| `src/styles/mobile.css`, `silver.css` | 모바일·마지막 재질 덮어쓰기 통합 | 중복 선언·대비·safe area |
| `src/sections/Hero/Hero.css` | 명함 재질·타입·세 링크 | Hero와 ProductFrame의 기존 구조 |
| `src/components/Header/`, `MobileNav.tsx` | 메뉴와 도크의 재질·상태 | Escape·선택·포커스·경로 |
| `src/components/PageTabs/` | 주제의 상태·좁은 화면 라벨 | 마운트·fragment·history·키보드 |
| `src/components/GlassIcon/` | 밝은 바탕에서의 아이콘 경계 | 네 관점의 의미·접근 가능한 이름 |
| `src/components/ProductFrame/`, `SceneFigure/` | 필요할 때만 밝은 무대 정합성 | 출처·오류·이미지 비율 |
| 상세 섹션 CSS | 설명·도식·출처의 배경과 글자 정합성 | 본문 크기·일관된 여백 |
| 일곱 HTML 진입점 | theme-color 등 브라우저 표면 | 기존 제목·OG·no-script·하위 경로 |

이 표는 코드 변경을 모두 요구하는 목록이 아니다. 실제 차이를 검사해 필요한 파일만 바꾼다. 하드웨어 조립 좌표·모션 함수·데이터·외부 연동·릴리스 스크립트는 재질 변경을 위해 수정하지 않는다.

### 20.2 적용 순서

1. 기존 변경과 실행 환경을 다시 확인하고 보존한다. 문서 작성 후 다른 작업이 진행됐을 수 있다.
2. Home 하나와 Service의 기본 주제에서 색·글자·재질·컨트롤을 먼저 맞춘다.
3. 한 화면만 통과하면 끝내지 않고, 나머지 네 상세 페이지와 EXPO 호환 진입에 같은 기준을 적용한다.
4. 메뉴·도크·선택·확대·실패 대체에서 동일한 정보와 기능이 유지되는지 확인한다.
5. 현재 문서의 제안값과 실제 구현값의 차이를 정리하고 공통 디자인 문서를 동기화한다.
6. 승인된 범위의 검증 결과만 QA에 기록한다. Git 커밋·push·공개 배포는 사용자 요청 범위를 따른다.

Dashboard의 재질 정합성은 별도 체크아웃을 확인한 다음 다룬다. 소개 웹의 `npm run build`는 결합 Dashboard 산출물을 만들지 않으므로 전체 배포 산출물 확인에는 기존 release 절차를 사용한다.

## 21. 검증 매트릭스와 제출 기준

### 21.1 화면과 동작

| 검증 | 범위 | 통과 기준 | 기록할 증거 |
| --- | --- | --- | --- |
| 대표 너비 | 360 / 390 / 768 / 1024 / 1280 / 1440 CSS px | 가로 넘침·겹침·이미지 잘림 없음 | 실제 innerWidth·경로·스크린샷 |
| 추가 경계 | 320, 767, 769px, 짧은 가로 화면 | 라벨·메뉴·마지막 링크 사용 가능 | 폭·높이·문제 재현 여부 |
| 키보드 | skip·메뉴·탭·summary·select | 포커스 표시, 자연스러운 이동과 복귀 | 수행 순서·선택 결과 |
| 주소·뒤로 가기 | 모든 상세 진입·이전 fragment·EXPO | 올바른 패널·내용·포커스 | 직접 URL과 복귀 결과 |
| 이미지 실패 | 미러·키오스크·근거 캡처 | 대체 설명과 탐색 유지 | 정상·실패 구분 캡처 |
| 대비 | 주요 글자·보조 글자·모든 컨트롤 상태 | 실제 합성 배경에서 요구 대비 유지 | 계산값과 확인한 배경 |
| 접근성 설정 | 모션·투명도·고대비·강제 색상 | 장식이 없어도 정보·조작 유지 | 지원 여부와 실제 수행 방식 |
| 확대·간격 | 200% 글자·320px reflow·사용자 글자 간격 | 정보 손실·가림·조작 불가 없음 | 브라우저와 설정값 |
| 경로·오류 | 루트·저장소 하위 경로·콘솔 | 내부 링크·자산 정상, 예상치 못한 오류 없음 | 빌드/서버·경로·로그 |
| 실제 모바일 | iPhone Safari·Android Chrome | 터치·주소창·safe area·스크롤 사용 가능 | 기기·OS·브라우저·수행 항목 |

브라우저 도구에 입력한 화면 크기와 실제 CSS viewport가 다를 수 있다. 특히 앱의 확대율을 확인하고 `innerWidth`를 읽어 기록한다. 도구 요청값만으로 해당 너비를 통과했다고 쓰지 않는다.

### 21.2 구현 후 실행할 기존 검사

```sh
npm run lint
npm run typecheck
npm run build
npm test
git diff --check
```

최초 명세 작성 단계는 문서 검증만 수행했다. 이후 실제 화면 구현과 기존 검사, 브라우저·대체 상태 검증을 수행했으며 결과는 [QA](qa.md)의 2026-10-16 라이트 글래스 구현 기록에서 확인한다. 빌드 성공만으로 반응형·모바일 재질·실물 장치 검증을 대체하지 않는다.

### 21.3 제출 전 우선 해결할 문제

- **막는 문제:** 링크·탭·뒤로 가기 불능, 주요 내용 가림, 읽을 수 없는 대비, 깨진 이미지와 대체 부재, 실제 기능을 오해하게 하는 표현.
- **완성도 문제:** 페이지마다 다른 글자·곡률·버튼 상태, 제품 비율 왜곡, 설명 없는 첫 화면, 촘촘한 모바일 터치 영역, 과한 유리 중첩.
- **후속 개선:** 실제 방문자 피드백, 권한이 정리된 실물 사진·영상, 실제 성능 측정 결과에 따른 추가 조정.

제출 검수는 ‘예뻐 보이는 홈’과 ‘설명·자료·예외 상태까지 이어지는 완성된 사이트’를 함께 확인한다. 확인하지 않은 항목은 미검증으로 남긴다.

## 22. 구현 요청에 재사용할 브리프

> 4-Fit MirrorTing과 CarpeDM의 전시 웹을 라이트 글래스로 구현한다. 밝은 회백색 캔버스, 안정적인 흰 읽기 면, 메뉴와 하단 탐색의 제한된 유리 재질, 차콜 글자, 단일 파란 대표 행동을 사용한다. Home은 디지털 명함 한 장으로 유지하고 다섯 상세 페이지의 설명과 근거를 충분히 제공한다. 이 문서의 수치는 프로젝트 시작값이며 Apple 실측 토큰으로 부르지 않는다. 기존 React/Vite·컴포넌트·한국어·URL·탭·접근성·미디어 실패·하드웨어 조립을 보존한다. 추가 라이브러리와 실시간 분석 시뮬레이션 없이 구현하고, 실제 대표 CSS 너비·키보드·설정 대체·콘솔·하위 경로를 검증한 결과를 기록한다.

기본 방향은 확정된 라이트 글래스이며, 정확한 곡률·명암·유리 농도는 실제 제품 이미지와 긴 콘텐츠를 넣고 판단한다. 관찰·제안·구현·실기기 검증 상태를 문서와 보고서에서 분리한다.

## 23. 조사 출처와 근거 범위

조회일은 **2026-10-16**이다. 아래 링크는 조사한 원칙의 출처다. CSS 값·타입 스케일·성능 결과를 Apple에서 측정했다는 의미는 아니다. 직접 인용보다 짧은 요약과 이 프로젝트의 적용 판단을 사용했다.

| 출처 | 확인한 범위 |
| --- | --- |
| [NN/g — Glassmorphism](https://www.nngroup.com/articles/glassmorphism/) | 일반적 정의, 불투명도·블러, 배경과 가독성 |
| [Apple — Materials](https://developer.apple.com/design/human-interface-guidelines/materials) | 조작 계층과 표준 재질, regular와 clear의 용도 |
| [Apple WWDC25 — Meet Liquid Glass](https://developer.apple.com/videos/play/wwdc2025/219/) | 광학적 표현·적응·형태 전환·중첩에 대한 설명 |
| [Apple WWDC25 — New design system](https://developer.apple.com/videos/play/wwdc2025/356/) | 형태의 조화·그룹화·콘텐츠와 탐색의 관계 |
| [Apple — Tab bars](https://developer.apple.com/design/human-interface-guidelines/tab-bars) | 탐색 목적·라벨·모바일 플로팅 계층 |
| [Apple — Layout](https://developer.apple.com/design/human-interface-guidelines/layout) | 크기·문자 확대·안전영역에 적응하는 배치 |
| [Apple — Accessibility](https://developer.apple.com/design/human-interface-guidelines/accessibility) | 컨트롤 크기의 플랫폼 단위·대비·움직임 고려 |
| [MDN — backdrop-filter](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/backdrop-filter) | 배경 필터의 동작·반투명 채움·backdrop root |
| [MDN — Reduced transparency](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-transparency) | 투명도 선호 감지와 제한된 지원 |
| [MDN — env()](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/env) | CSS 환경 변수와 안전영역 |
| [W3C — Contrast Minimum](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) | 텍스트 대비와 반올림 전 판단 |
| [W3C — Non-text Contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html) | 필수 조작·상태·그래픽의 대비 |
| [W3C — Target Size Minimum](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html) | 24 CSS px 최소 기준과 예외 |
| [W3C — Focus Not Obscured](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html) | 고정 UI와 키보드 포커스의 가림 |
| [W3C — Reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html) | 좁은 읽기 폭과 2차원 스크롤 |
| [W3C — Resize Text](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html) | 200% 텍스트 확대 |
| [W3C — Text Spacing](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html) | 사용자 글자 간격 변경 |
| [web.dev — Web Vitals](https://web.dev/articles/vitals) | LCP·INP·CLS의 좋은 경험 기준과 현장 평가 |

Apple HIG 일부 HTML은 도구에 JavaScript 안내만 반환했다. 공개 `.md` 표현을 읽어 Tab bars·Layout·Accessibility 내용을 확인했다. 문서의 버튼 크기·곡률·hover 색을 브라우저에서 새로 측정한 것은 아니다. 제공받은 Apple 참고 MD의 과거 관측값을 현재 확인값으로 바꾸어 쓰지 않았다.

## 24. 실제 구현 결정 — 2026-10-16

- Home, Service, Four-Fit, System, Uses, Team과 `/expo/` 호환 진입점에 적용했다. 별도 샘플 대시보드의 일곱 경로도 같은 색 체계로 맞췄다. 한국어·영어 문구와 예시·URL·상태 로직·이미지 원본은 변경하지 않았다.
- `#f5f5f7` 캔버스와 `#1d1d1f` 글자, 흰 읽기 면을 사용한다. Home 88%→60% 흰 프로스트는 데스크톱 24px·모바일 16px 블러, 헤더와 하단 탐색 82% 흰 재질은 24px·20px 블러다. 콘텐츠 패널과 펼친 메뉴는 불투명하게 유지한다.
- Home 카드와 상세는 공통 최대 1040px·모바일은 공통 여백 안의 유동 폭이며, 모서리 28px·24px다. 대표 행동은 흰 글자의 `#0071e3`이며 hover `#0066cc`, pressed `#005bb5`다. 기존 목적지 카드의 형태와 그룹을 유지해 버튼 모서리는 16–18px로 정했다. 모든 컨트롤을 캡슐 모양으로 바꾸지 않는다.
- 언어 선택과 주요 조작은 48px 이상이다. 영어 4-Fit은 작은 화면에서 두 열로 배치해 네 이름이 모두 보인다. 320px에서도 조정한 두 열 안에서 본문과 제품을 배치하고 짧은 화면에서 자연스럽게 스크롤한다.
- 하드웨어 장면은 기존 스크롤·정적 분기를 유지한다. 자동 높이 flex 부모 안에서 장면이 0px로 접히던 문제를 `flex: none`으로 수정했다. 역할 설명과 기능 설명은 16px, 보조 표시는 13px부터 읽도록 조정했다.
- 블러 미지원은 흰 면으로 동작한다. 투명도 감소·대비 증가 환경은 불투명 면으로 전환하며, 강제 색상에는 시스템 색과 선택 테두리를 제공한다. 모션 감소는 기존 정적 완성 장면을 사용한다. 실제 OS 환경과 CSS/JS 분기를 강제한 테스트 복사본의 결과를 구분한다.
- 추가 패키지·테마 전환 설정·라우터·애니메이션 라이브러리를 넣지 않았다. 기존 TS/TSX·JS/JSX·콘텐츠 데이터·상태 저장·미디어는 보존했다. 실제 검사 명령, 화면별 증거, 실기기·배포 미확인 항목은 [QA](qa.md)에 기록한다.


## 25. 폭과 재질 재조정 및 배포 요청

사용자가 전체 폭과 비율의 어색함을 지적해 재검토했다. 644px 화면에서 Home만 420px로 제한되고 상세는 604px를 사용하던 불일치를 없앴다. Home·헤더·상세·탭·푸터는 최대 1040px와 같은 유동 여백을 사용한다. 320px의 16px 여백, 일반 전화기의 20px 여백을 유지하고 넓은 화면은 `clamp(20px, 2.5vw, 40px)`로 자연스럽게 늘린다. 767/768px 경계에서 여백이 갑자기 커지지 않게 한다.

명함의 제품 열도 화면에 따라 늘리고, 긴 영문 학교명은 같은 상단 행 안에서 줄바꿈해 언어 컨트롤과 정렬한다. 약한 청회색·진주색 배경 위에 반투명 그라데이션, 흰 가장자리 하이라이트, 낮은 그림자로 유리 층을 구분한다. 긴 읽기 면과 대시보드 데이터 면은 흰색으로 유지한다. 기능과 번역·제품 사실을 바꾸지 않는다. 로컬 수정과 최종 공개 배포/HTTPS 검증 결과는 QA에 구분해 기록한다.

## 26. 공개 모바일 화면을 직접 넘기며 보정

390×844px에서 Home → 작품 소개 → 4-Fit → 활용 → 기술과 자료를 실제 링크와 탭으로 이동해 확인했다. Home과 공통 읽기 폭·유리 탐색은 유지한다. Service의 작품 이해와 두 장치 설명은 휴대폰에서 제품이 작고 14px 본문이 좁은 열에 몰려 있었다.

480px 미만에서는 작품 이해의 제품을 위에 놓고 세 단계 설명을 아래의 한 열로 정리한다. 제품 영역 200px, 본문 16px·줄간격 1.75, 제목 18px, 카드 안쪽 여백 20px, 단계 숫자 열 24px를 사용한다. 두 장치도 한 행에 카드 하나, 제품 영역 200px, 설명 16px로 표시한다. 480px 이상은 기존 배치를 유지한다. 기존 흰 읽기 면과 글래스 탐색, 문구·이미지·상호작용은 바꾸지 않는다. 실제 화면과 배포 결과는 QA에 기록한다.

## 27. 모바일 웹을 앱처럼 읽고 조작하기 — 2026-10-16

사용자는 모바일 웹 우선의 반응형 구성과 Apple 앱을 연상시키는 마감을 요청했다. 밝은 명함과 기존 내용은 유지한다. 휴대폰에서는 작품명·제품 다음 행에 소개 문장을 전체 폭 17px로 표시하고, 작품명은 34–44px(360px 미만 30px), 상세 제목은 34px로 조정한다. 시스템 글꼴을 먼저 사용한다. 주제 선택은 불투명 회색 세그먼트, 펼친 메뉴는 안쪽 여백이 있는 24px 모서리 면, 하단 탐색은 최대 440px·26px 모서리의 중앙 도크다. 각 선택과 포커스·기존 한영 전환은 보존한다.

일곱 HTML에 `viewport-fit=cover`를 적용하고 확대는 제한하지 않는다. 공통 좌우 여백은 안전영역 이상이며, 헤더의 실제 높이와 앵커 오프셋은 상단 안전영역을 한 번만 포함한다. 홈은 상하 안전영역을, 상세 하단은 홈 인디케이터와 도크 여백을 확보한다. 짧은 높이·가로 방향에서는 정상 스크롤을 허용한다. 넓은 화면은 기존 두 열 구성이다. 네이티브 iOS 앱·설치·오프라인 동작·Apple 공식 제품을 뜻하지 않는다. 실제 기기 검사와 소스 push·공개 배포는 QA에서 따로 기록한다.
