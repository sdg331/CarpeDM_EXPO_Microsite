# CarpeDM — Public content source of truth

Korean is the main language; English is limited to product identity and established technology terms. This page describes a project and intended experience, not verified exhibit integration. Product facts remain governed by `product.md`.

## Metadata and navigation
- Document language: `ko`
- Title: `CarpeDM — Interactive AI Smart Mirror`
- Description and Open Graph description: `AI와 인터랙션 기술을 통해 거울을 새로운 경험 공간으로 확장하는 동양미래대학교 EXPO 프로젝트 CarpeDM.`
- Open Graph type/locale: `website` / `ko_KR`. Theme: white.
- No invented canonical URL, event dates, booth location, social links, booking or purchase actions.
- No-JavaScript message: CarpeDM은 스마트 미러와 사원증 발급 키오스크를 연결하는 동양미래대학교 EXPO 프로젝트입니다. 전체 소개를 보려면 브라우저에서 JavaScript를 켜 주세요.
- Skip link: 본문으로 건너뛰기
- Brand: CARPEDM. Accessible name: CarpeDM, 처음으로
- Navigation: 소개 → #project; 디바이스 → #mirror; 체험 흐름 → #experience; 기술 구성 → #system
- Mobile toggle: 메뉴 열기 / 메뉴 닫기. Navigation label: 주요 메뉴

## Hero
- Product name: CarpeDM
- H1: 거울 너머, / 새로운 나를 만나다.
- Body: 스마트 미러와 사원증 키오스크. / 두 디바이스로 설계한 하나의 전시 경험.
- Primary CTA: 스마트 미러 만나보기 → #mirror
- Secondary CTA: 체험 흐름 보기 → #experience
- Lower rail: Smart Mirror + ID Card Kiosk; 프로젝트 알아보기 → #project

## Introduction
- Label: 익숙한 일상에서 출발한 아이디어
- H2: 나를 비추는 거울에서, / 나와 소통하는 거울로.
- Body: 거울에 화면을, 공간에 센서를, 경험에 목소리를 더합니다. CarpeDM은 두 개의 디바이스로 사람과 기술이 만나는 방식을 탐구합니다.

## Smart Mirror
- Label: Smart Mirror
- H2: 가장 익숙한 모습의 / 새로운 인터페이스.
- Body: 거울 앞의 움직임, 건네는 말 한마디. 공간 센싱과 음성 입력을 화면의 응답으로 연결하는 스마트 미러를 설계합니다.
- Link: 디바이스 구성 살펴보기 → #system
- Categories: Display / 대형 세로형 미러; Sensing / 공간과 움직임; Voice / 음성 입력과 응답

## ID Card Kiosk
- Label: ID Card Kiosk
- H2: 작은 시작. / 이어지는 경험.
- Body: 스마트 미러를 만나기 전, 키오스크에서 시작합니다. 화면과 카메라, NFC와 프린터를 하나의 장치에 담아 체험의 첫 접점을 설계합니다.
- Link: 체험 흐름 알아보기 → #experience
- Components: 화면 · 카메라 · NFC · 감열 프린터
- Scope: 출력물과 NFC의 구체적인 연결 방식은 구현 범위 확인 후 안내합니다.

## Experience
- Label: 설계한 체험 흐름
- H2: 시작은 간단하게. / 경험은 자연스럽게.
- Introduction: 키오스크에서 시작해, 스마트 미러 앞에 서기까지.
- 01 나를 소개하고. — 키오스크에서 사원증 발급과 사용자 연결로 체험을 시작하도록 설계합니다.
- 02 거울 앞에 서면. — 스마트 미러로 이동해, 연결된 사용자 정보와 공간 센싱을 바탕으로 상호작용을 준비합니다.
- 03 대화로 이어지도록. — 목소리와 화면의 응답이 이어지고, 사용자 맥락에 맞춰 달라지는 경험을 목표로 합니다.
- Visible scope: 현재는 설계한 체험 흐름을 소개합니다. 단계별 실제 구현 범위는 확인 후 안내합니다.
- Disclosure: 6단계 체험 설계 자세히 보기

The six detailed steps remain in their original order:
1. 사원증 발급 — 키오스크에서 체험을 시작하고, 나를 소개할 접점을 만듭니다.
2. 사용자 연결 — ID 또는 NFC를 활용한 사용자 연결을 설계합니다.
3. 스마트 미러 접근 — 키오스크를 지나 메인 디바이스인 스마트 미러 앞으로 이동합니다.
4. 사용자 인식 — 연결된 사용자 정보와 센싱을 바탕으로 상호작용을 시작하는 단계입니다.
5. 음성 · 화면 인터랙션 — 목소리와 화면의 응답이 이어지는 상호작용을 구상합니다.
6. 개인화된 경험 — 사용자 맥락에 맞춰 달라지는 경험을 목표로 합니다.

## Architecture
- Label: 하나의 경험을 만드는 구조
- H2: 역할은 다르게. / 연결은 하나로.
- Introduction: 키오스크는 체험의 시작을, 스마트 미러는 상호작용을 담당합니다. 두 장치를 사용자 경험으로 연결하는 구성입니다.
- ID Card Kiosk: 01 / ENTRY; 체험 진입 · 사용자 연결; 디스플레이, 카메라, NFC, 감열 프린터
- Connection: 사용자 · 체험 연결
- Smart Mirror: 02 / INTERACTION; 메인 인터랙션; 미러 디스플레이, 깊이 센서, 마이크 어레이, NFC, 스피커
- Scope: 장치의 역할과 연결 방향을 설명하는 개념도입니다. 통신 방식과 기능별 구현 상태는 확인 후 안내합니다.
- Hardware disclosure: 하드웨어 구성 자세히 보기
- Hardware notice: 아래는 프로젝트에서 사용한다고 제공된 하드웨어 목록입니다. 각 기능의 구현 완료를 의미하지 않습니다.
- Hardware names and roles: unchanged from the confirmed lists in `product.md`, rendered in `SystemArchitecture.tsx`.

## Technology
- Label: 경험을 뒷받침하는 기술
- H2: 보이지 않는 곳까지, / 하나의 경험을 위해.
- Introduction: 입력에서 응답까지. 프로젝트에서 다루는 기술과 설계 역할을 소개합니다.
- Computer Vision / 장면을 입력으로 — 카메라에서 얻는 시각 정보를 상호작용의 입력으로 활용하는 영역입니다.
- Spatial Sensing / 공간과 움직임 — 사용자 위치와 신체 움직임을 입력으로 다루도록 설계합니다.
- Voice Interaction / 목소리로 연결 — 마이크 입력과 스피커 출력을 통해 음성 상호작용을 구성하는 영역입니다.
- NFC / 가까이에서 시작되는 연결 — 사용자를 체험과 연결하는 접점으로 활용하도록 설계합니다.
- Interactive Display / 반응을 보여주는 화면 — 안내와 시각적 피드백을 전달하는 인터페이스입니다.
- AI Interaction / 맥락에 맞는 응답 — 사용자 입력과 맥락에 반응하는 경험을 목표로 합니다.
- Physical Computing / 소프트웨어를 실제 장치로 — Raspberry Pi와 PC를 중심으로 센서, 화면, 출력 장치를 연결하는 구성입니다.

## Closing and footer
- Closing context: 동양미래대학교 EXPO
- H2: 거울 앞, 그다음. / CarpeDM.
- Link: 처음부터 다시 보기 → #top
- Footer: CARPEDM.; Interactive AI Smart Mirror + ID Card Kiosk; 처음으로
- Attribution: 동양미래대학교 EXPO 프로젝트
- Scope: 본 페이지는 프로젝트의 구성과 설계한 경험을 소개합니다.

## Media and icons
- Visible caption for all supplied images: 디바이스 콘셉트 · 실제 촬영 이미지가 아닙니다.
- Hero alternative: 밝은 스튜디오 배경에 놓인 세로형 스마트 미러 콘셉트
- Mirror alternative: 어두운 네이비 배경의 세로형 스마트 미러 콘셉트
- Kiosk alternative: 카메라, 조명, 화면, 출력구와 NFC 영역을 갖춘 키오스크 콘셉트
- On failure, original CSS silhouettes have accessible concept descriptions; no broken images.
- Glass card, mirror and voice icons are decorative illustrations, not real exhibit screens. Their meaning is conveyed by adjacent headings; SVGs are hidden from assistive technology.
