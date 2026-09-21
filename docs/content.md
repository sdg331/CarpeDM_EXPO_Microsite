# CarpeDM — Public content source of truth

Korean is the primary language. English is reserved for project identity, the short editorial headlines below, product labels, and meaningful technology terms. Do not substitute English for Korean instructions or explanatory body copy arbitrarily.

The copy introduces the **intended** exhibit experience. It does not certify that all exhibit functions are implemented. The status wording below is part of the public message and must remain visible near the experience/architecture explanations. Material changes to rendered copy must be reflected here.

## Metadata

- Document language: `ko`
- Title: `CarpeDM — Interactive AI Smart Mirror`
- Description: `AI와 인터랙션 기술을 통해 거울을 새로운 경험 공간으로 확장하는 동양미래대학교 EXPO 프로젝트 CarpeDM.`
- Open Graph title and description: same as above.
- Open Graph type: `website`
- Open Graph locale: `ko_KR`
- Theme color: `#FFFFFF`
- Canonical URL, Open Graph URL, real social preview image, contact links, and social handles: add only after confirmation. Do not publish invented URLs or empty image links.
- No-JavaScript message: **CarpeDM은 스마트 미러와 사원증 발급 키오스크를 연결하는 동양미래대학교 EXPO 프로젝트입니다. 전체 소개를 보려면 브라우저에서 JavaScript를 켜 주세요.**

## Navigation and shared interface

| Element | Public copy | Destination / use |
| --- | --- | --- |
| Skip link | 본문으로 건너뛰기 | Main content |
| Brand | CARPEDM | Page top |
| Brand accessible name | CarpeDM, 처음으로 | Brand link |
| Primary navigation accessible label | 주요 메뉴 | Header navigation |
| Project link | 프로젝트 | Introduction |
| Experience link | 체험 흐름 | Experience flow |
| Device link | 디바이스 | Smart Mirror |
| System link | 시스템 | Architecture |
| Technology link | 기술 | Technology |
| Public scope label | 현재 공개 범위 | Experience and architecture status note |
| Mobile menu toggle | 메뉴 열기 / 메뉴 닫기 | Only if a toggle is implemented |
| Back-to-top link | 처음으로 | Page top |

Use native links for section navigation. A mobile menu must preserve the same labels and order as desktop navigation. Navigation may use a compact subset if the reading sequence remains clear.

## Hero

- Eyebrow: **CARPEDM / INTERACTIVE AI MIRROR**
- H1:
  - **거울이 인터페이스가 되는 순간.**
- Body: **거울을 바라보는 경험을 넘어, AI와 인터랙션 기술을 통해 새로운 상호작용 공간을 만듭니다.**
- Primary CTA: **체험 흐름 보기**
- Secondary CTA: **시스템 살펴보기**
- Context label: **동양미래대학교 EXPO**
- Confirmed composition summary: **Smart Mirror / 메인 인터랙션 디바이스**, **ID Card Kiosk / 경험이 시작되는 접점**, **Connected Experience / 두 장치를 잇는 체험 설계**.
- Product visual identity: **SMART MIRROR**
- Public placeholder type: **제품 형태 콘셉트**
- Public placeholder caption: **디바이스 콘셉트 · 실제 촬영 이미지가 아닙니다.**
- Placeholder accessible description: **세로형 스마트 미러의 비율과 형태를 표현한 콘셉트 이미지**

Line breaks are composition choices, not separate headings. Preserve the headline wording. Do not put unverified capabilities, a “live” indicator, hardware model numbers, or fake results inside the visual.

## Project introduction

- Section label: **THE PROJECT**
- H2: **사람과 시스템이 마주하는 새로운 방식.**
- Paragraph 1: **CarpeDM은 거울, 센서, 음성, 사용자 인식 기술을 하나의 공간에 연결하는 인터랙티브 AI 프로젝트입니다.**
- Paragraph 2: **단순히 정보를 보여주는 디스플레이를 넘어, 사용자를 인식하고 반응하는 경험을 만드는 것을 목표로 합니다.**
- Supporting statement: **익숙한 거울 앞에서 시작해, 사람과 시스템이 만나는 새로운 방식을 탐구합니다.**

Keep this editorial and brief. The two-device relationship becomes explicit in the next section.

## Experience flow

- Section label: **THE EXPERIENCE**
- H2: **두 개의 디바이스, 하나로 이어지는 경험.**
- Introduction: **키오스크에서 시작한 연결이 스마트 미러 앞의 상호작용으로 이어지도록 설계합니다.**
- Visible scope note: **아래는 설계한 체험 흐름입니다. 단계별 실제 구현 범위는 확인 후 안내합니다.**

| Number | Step title | Supporting copy |
| --- | --- | --- |
| 01 | 사원증 발급 | 키오스크에서 체험을 시작하고, 나를 소개할 접점을 만듭니다. |
| 02 | 사용자 연결 | ID 또는 NFC를 활용한 사용자 연결을 설계합니다. |
| 03 | 스마트 미러 접근 | 키오스크를 지나 메인 디바이스인 스마트 미러 앞으로 이동합니다. |
| 04 | 사용자 인식 | 연결된 사용자 정보와 센싱을 바탕으로 상호작용을 시작하는 단계입니다. |
| 05 | 음성 · 화면 인터랙션 | 목소리와 화면의 응답이 이어지는 상호작용을 구상합니다. |
| 06 | 개인화된 경험 | 사용자 맥락에 맞춰 달라지는 경험을 목표로 합니다. |

Implement as an ordered list. Do not replace the scope note with an internal `TODO` or imply measured recognition/personalization outcomes. “ID 또는 NFC” does not specify a shared physical medium.

## Smart Mirror

- Section label: **01 / SMART MIRROR**
- H2:
  - **사용자와 마주하는**
  - **메인 인터페이스.**
- Body: **대형 미러 디스플레이와 공간 인식, 음성 인터랙션, NFC를 연결해 사용자의 움직임과 행동에 반응하는 인터랙티브 공간을 구성하는 것이 목표입니다.**
- Supporting copy: **화면, 센서, 목소리가 하나의 장치 안에서 만납니다. CarpeDM의 중심에는 사람과 마주하는 스마트 미러가 있습니다.**

| Feature label | Supporting copy |
| --- | --- |
| 세로형 미러 인터페이스 | 65인치 디스플레이와 거울 표면을 중심으로 구성합니다. |
| 공간과 움직임 | 깊이와 신체 움직임을 상호작용의 입력으로 활용하도록 설계합니다. |
| 목소리와 피드백 | 음성 입력, 화면의 변화, 스피커 출력을 연결하는 경험을 구상합니다. |
| 사용자 연결 | NFC를 통한 사용자 연결을 시스템 구성에 포함합니다. |

- Visual label: **SMART MIRROR / MAIN EXPERIENCE**
- Public placeholder caption: **디바이스 콘셉트 · 실제 촬영 이미지가 아닙니다.**
- Placeholder accessible description: **대형 세로형 스마트 미러와 하단 센싱 영역을 단순화한 콘셉트 이미지**

Only use the 65-inch size here, and put exact model names in technical detail. A drawing may show abstract sensor placement, but must not imply verified enclosure dimensions or final assembly.

## ID Card Kiosk

- Section label: **02 / ID CARD KIOSK**
- H2:
  - **경험을 시작하는**
  - **첫 번째 접점.**
- Paragraph 1: **사원증 발급 키오스크는 사용자가 CarpeDM의 경험에 진입하는 첫 번째 접점입니다.**
- Paragraph 2: **카메라, NFC, 디스플레이와 프린터를 하나의 장치에 구성하고, 이후 스마트 미러 경험으로 연결하는 흐름을 설계합니다.**

| Feature label | Supporting copy |
| --- | --- |
| 체험의 시작 | 디스플레이와 카메라를 활용한 등록 · 식별 과정을 구상합니다. |
| 연결의 접점 | NFC를 사용자 연결을 위한 구성 요소로 포함합니다. |
| 손에 남는 출력 | 감열 프린터를 통한 물리적 출력물을 체험에 포함하도록 설계합니다. |

- Clarifying copy: **출력물과 NFC의 구체적인 연결 방식은 구현 범위 확인 후 안내합니다.**
- Visual label: **ID CARD KIOSK / ENTRY POINT**
- Public placeholder caption: **디바이스 콘셉트 · 실제 촬영 이미지가 아닙니다.**
- Placeholder accessible description: **화면, 카메라와 출력구를 갖춘 사원증 발급 키오스크의 콘셉트 이미지**

Do not describe an NFC card being produced by a thermal receipt printer. Do not add a fake functional registration form to this explanatory microsite.

## System architecture

- Section label: **SYSTEM**
- H2:
  - **두 디바이스를 연결하는**
  - **경험 구조.**
- Introduction: **서로 다른 역할의 두 디바이스가 사용자 경험을 중심으로 연결됩니다.**
- Visible scope note: **통신 방식과 기능별 구현 상태는 확인이 필요하며, 아래 도식은 장치의 역할과 연결 방향을 설명합니다.**

| Diagram element | Label | Description / children |
| --- | --- | --- |
| Kiosk group | ID CARD KIOSK | 체험 진입 · 사용자 연결 |
| Kiosk controller | Raspberry Pi 5 | 디스플레이 · 카메라 · NFC · 감열 프린터 |
| Experience link | IDENTITY / EXPERIENCE LINK | 사용자와 체험을 잇는 연결 개념 |
| Mirror group | SMART MIRROR SYSTEM | 메인 인터랙션 |
| Mirror controller | Windows PC | 미러 디스플레이 · 깊이 센서 · 마이크 어레이 · NFC · 스피커 |

- Technical disclosure summary: **하드웨어 구성 자세히 보기**
- Hardware status note: **아래는 프로젝트에서 사용한다고 제공된 하드웨어 목록입니다. 각 기능의 구현 완료를 의미하지 않습니다.**
- Smart Mirror details heading: **스마트 미러 구성**
- Kiosk details heading: **키오스크 구성**

| Smart Mirror component | Role |
| --- | --- |
| LG 65UH5J | 65인치 상업용 디스플레이 |
| Azure Kinect DK | 깊이 · 신체 센싱 입력 |
| Seeed ReSpeaker XMOS XVF3800 | 마이크 어레이를 통한 음성 입력 |
| NFC 리더 | 사용자 연결 입력 |
| 외부 스피커 | 소리 출력 |
| 전용 Windows PC | 디바이스 및 소프트웨어 구성의 중심 |

| Kiosk component | Role |
| --- | --- |
| Raspberry Pi 5 | 키오스크 제어 |
| Camera Module 3 | 카메라 입력 |
| 10.1인치 디스플레이 | 체험 안내 및 화면 인터랙션 |
| NFC | 사용자 연결 |
| 80 mm 감열 프린터 | 물리적 출력 |
| 커스텀 인클로저 · LED 조명 | 장치 외형과 조명 구성 |

The conceptual connection must remain understandable in normal HTML reading order, including on mobile and with a screen reader. Decorative lines/arrows add no new information and do not need accessible names.

## Technology

- Section label: **TECHNOLOGY**
- H2:
  - **상호작용을 완성하는**
  - **핵심 기술.**
- Supporting copy: **각 기술은 그 자체를 보여주기 위한 것이 아니라 사용자가 자연스럽게 시스템과 상호작용하도록 만드는 역할을 합니다.**
- Scope note: **프로젝트에서 다루는 기술과 설계 역할을 소개합니다.**

| English label | Korean role heading | Description |
| --- | --- | --- |
| Computer Vision | 장면을 입력으로 | 카메라에서 얻는 시각 정보를 상호작용의 입력으로 활용하는 영역입니다. |
| Spatial Sensing | 공간과 움직임 | 사용자 위치와 신체 움직임을 입력으로 다루도록 설계합니다. |
| Voice Interaction | 목소리로 연결 | 마이크 입력과 스피커 출력을 통해 음성 상호작용을 구성하는 영역입니다. |
| NFC | 가까이에서 시작되는 연결 | 사용자를 체험과 연결하는 접점으로 활용하도록 설계합니다. |
| Interactive Display | 반응을 보여주는 화면 | 안내와 시각적 피드백을 전달하는 인터페이스입니다. |
| AI Interaction | 맥락에 맞는 응답 | 사용자 입력과 맥락에 반응하는 경험을 목표로 합니다. |
| Physical Computing | 소프트웨어를 실제 장치로 | Raspberry Pi와 PC를 중심으로 센서, 화면, 출력 장치를 연결하는 구성입니다. |

There are no percentages, speed claims, model rankings, invented AI model names, or measured results. Raspberry Pi is explained within Physical Computing instead of appearing as an unexplained technology badge.

## Closing

- Section label: **CARPEDM**
- H2:
  - **거울 너머,**
  - **새로운 상호작용으로.**
- Body: **거울 너머의 상호작용을 탐구합니다.**
- Event context: **동양미래대학교 EXPO**
- Optional navigation link: **처음으로**

Do not add dates, a booth location, opening hours, a live invitation, booking, signup, or a purchase CTA without confirmed information.

## Footer

- Brand: **CARPEDM**
- Project descriptor: **Interactive AI Smart Mirror + ID Card Kiosk**
- Attribution: **동양미래대학교 EXPO 프로젝트**
- Context note: **본 페이지는 프로젝트의 구성과 설계한 경험을 소개합니다.**
- Back-to-top link: **처음으로**
- Optional footer navigation accessible label: **하단 메뉴**

Do not invent a corporate entity, social profile, email address, or legal-policy link. Avoid a copyright year that has no useful editorial role.

## Media replacement and accessible content

All first-version device visuals are neutral HTML/CSS concept illustrations, not photographs or photorealistic mock evidence. The visible type label is **제품 형태 콘셉트** and the clarification remains **디바이스 콘셉트 · 실제 촬영 이미지가 아닙니다.** Keep both until real media is supplied, and mark placeholder implementations in code. Developer-only asset replacement instructions must not appear in a production build.

| Planned asset | Purpose | Alt text rule when replaced |
| --- | --- | --- |
| `smart-mirror-hero.webp` | Main device reveal | Describe the actual assembled mirror and relevant setting visible in the supplied photo |
| `smart-mirror-detail.webp` | Device/detail presentation | Name the actually visible component or interaction, without claiming unseen behavior |
| `kiosk-front.webp` | Kiosk front presentation | Describe the actual kiosk and visible controls/output opening |
| `kiosk-detail.webp` | Kiosk detail presentation | Describe only the relevant visible detail |
| `expo-space.webp` | Optional confirmed exhibition context | Describe the real scene; do not infer an event date or location from appearance |

If an adjacent caption already fully communicates an image and the image is decorative, use empty alt text. Do not expose redundant ARIA labels on semantic text or duplicate the entire surrounding copy in alt text. Visible text must remain actual HTML text, never only embedded in imagery.
