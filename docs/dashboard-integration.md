# 조직 대시보드 연결

현재 홈의 `샘플 운영 화면`, 활용 페이지의 운영 화면 주제, 시스템 구현 자료에서 같은 대시보드로 연결합니다. 대시보드는 별도 저장소의 예시 데이터 앱이며 소개 사이트와 같은 배포 폴더에 합칩니다.

## 주소와 데이터 범위

- 공개 목적지: https://sdg331.github.io/CarpeDM_EXPO_Microsite/dashboard/#/overview
- 대시보드 소스: 별도 `CarpeDM_EXPO_dashboard` 저장소. 2026-10-14 재배포는 로컬 `3c39618acf0b4241021357864ce77d0c5f0381ad` 및 현재 UI 변경의 복사본을 빌드했습니다. 원본 checkout의 미커밋 변경과 브랜치는 보존했습니다. 회사 운영 개요, 팀·사원 관리, 체험과 리포트를 보여주는 샘플 워크스페이스입니다.
- 예시 데이터이며 실제 직원 정보·AI 분석·현장 장치와 연결되지 않습니다. 사용자가 변경한 예시 정보는 해당 브라우저에 저장됩니다.
- `src/data/paths.ts`는 개발에서 로컬 4174를, 프로덕션에서 HTML의 `data-site-root`를 사용한 같은 사이트 `dashboard/#/overview`를 기본값으로 사용합니다. 홈·상세·저장소 하위 경로에서 같은 목적지가 됩니다.
- `VITE_DASHBOARD_URL`로 절대 HTTP(S) 목적지를 재정의할 수 있습니다. 명시적 빈 값은 직접 링크를 숨기고, 잘못된 프로토콜·상대 주소는 거부합니다. 값은 공개 번들에 포함되므로 비밀을 넣지 않습니다.
- 대시보드 새 탭 링크에 `noopener noreferrer`와 샘플 워크스페이스·새 탭 접근성 설명을 제공합니다.

## 통합 빌드와 검증 — 2026-10-16

이 절차가 아래의 과거 수동 복사 기록을 대체합니다. 두 저장소의 `npm ci`가 완료된 상태에서 소개 사이트 폴더에서 실행합니다.

```sh
npm run build:release -- --dashboard "../EXPO_분석/dashboard-app"
npm run verify:release
npm run preview -- --host 127.0.0.1
```

`--dashboard`는 별도 대시보드 소스의 실제 경로입니다. 경로에 공백이나 한글이 있어도 따옴표로 감싸 사용할 수 있습니다. 소스가 없거나 의존성을 설치하지 않았으면 빌드 전에 중단하고 필요한 명령을 안내합니다.

1. `_workspace/release-*`에 두 소스의 현재 tracked·untracked 파일을 복사합니다. 삭제한 tracked 파일은 복사하지 않습니다. 환경 파일, 키·자격증명 파일, 의존성, Git 메타데이터는 소스 복사에서 제외합니다. 설치된 의존성은 링크로 재사용합니다.
2. 소개 사이트에서 `npm run check`로 lint·엄격한 TypeScript·빌드·전체 테스트를 실행합니다. 대시보드는 lint·typecheck·test 후 `npm run build -- --configLoader runner`로 빌드합니다. 대시보드 typecheck는 기존 tsconfig의 JS 데이터·모델·저장 로직 범위를 유지합니다.
3. 셸의 `VITE_*`와 원본 환경 파일은 사용하지 않습니다. 소개 사이트는 같은 사이트의 `dashboard/#/overview`를 기본값으로 사용하고, 통합 대시보드에는 공개 설정 `VITE_MICROSITE_URL=../`만 전달합니다. 프로젝트 명함 링크가 로컬과 GitHub Pages 하위 경로에서 같은 사이트로 돌아옵니다.
4. 대시보드를 `dist/dashboard/`에 합치고 `.nojekyll`을 생성합니다. 일곱 소개 HTML·대시보드 HTML, HTML/CSS의 로컬 자산 경로, 개발용 주소, 비공개 파일명·심볼릭 링크를 검사합니다. 외부 링크의 응답이나 브라우저 동작은 이 정적 검사로 확인되지 않습니다.
5. 원본 소스 파일 목록·내용·커밋이 그대로인지 확인한 후에만 기존 `dist/`와 검사 보고서를 교체합니다. 교체 중 일반 오류는 이전 두 항목을 복구합니다. 이전 산출물은 같은 작업 폴더의 `previous-dist/`, 이전 보고서는 `previous-report.json`에 남습니다.

`_workspace/release-report.json`은 소스 커밋·Git 상태·미추적 파일 목록·파일별 SHA-256, Node 버전과 최종 산출물 SHA-256을 담습니다. 이 보고서와 소스 복사본은 `.gitignore`의 기존 `_workspace/` 규칙으로 제외되며 공개 폴더에 들어가지 않습니다. `verify:release`는 현재 `dist/`의 파일 집합과 해시가 보고서와 일치하는지도 검사합니다.

중복 실행은 `_workspace/release.lock`으로 차단합니다. 강제 종료로 잠금이 남았다면 실행 중인 빌드가 없는지 확인한 뒤 해당 잠금만 제거하고 다시 실행합니다. 작업 폴더에는 검사용 소스와 이전 산출물이 보존되므로 필요한 보고서·백업을 확인한 후 오래된 작업 폴더를 정리합니다.

`npm run build`와 `npm run check`는 소개 사이트만 생성합니다. 통합 빌드 후 이 명령을 실행했다면 `build:release`를 다시 수행해야 합니다. 도구는 Git add·commit·push를 실행하지 않습니다. 새 소스의 반영 누락을 막기 위해 배포 전 다음 목록을 검토하고 필요한 파일을 선별해 버전 관리합니다.

```sh
git status --short
git ls-files --others --exclude-standard src scripts tests
git diff --check
```

## 브라우저 검수와 공개 배포

- 통합 미리보기의 `/`, `/service/`, `/four-fit/`, `/system/`, `/use-cases/`, `/team/`, `/expo/`와 `/dashboard/#/overview`, `#/teams`, `#/sessions`, `#/reports`, `#/devices`, `#/incidents`, `#/settings`를 확인합니다.
- 360 / 390 / 768 / 1024 / 1280 / 1440 px에서 페이지 제목, 가로 넘침, 깨진 이미지, 중복 ID, 링크와 콘솔을 확인합니다. 홈 → 운영 화면, 대시보드 → 프로젝트 명함의 왕복 목적지를 실제로 검사합니다.
- 모바일 메뉴 Escape와 포커스 복귀, 주제 탭의 화살표·Home/End, 상세 앵커와 펼치기, 모션 감소·미디어 실패 대체는 `qa.md`의 별도 절차로 확인합니다.
- 명시적인 배포 요청이 있을 때 검증한 통합 `dist/`를 기존 `gh-pages`에 일반 push합니다. 빌드 산출물과 로컬 보고서는 소스 `main`에 커밋하지 않습니다. Pages 커밋·빌드 상태, 공개 HTTPS 파일 해시와 왕복 동선을 확인해야 공개 배포 완료로 기록할 수 있습니다.

실제 검증 결과와 미검증 범위는 `qa.md`에 기록합니다. 이 도구는 로컬 통합 빌드이며 자동 공개 배포·백엔드·관리자 인증을 추가하지 않습니다.

## 2026-10-14 — 두 앱을 함께 재배포

- 소개 사이트의 현재 소스와 대시보드의 현재 로컬 UI를 각각 검사·빌드한 뒤 `dist/dashboard/`에 합칩니다. 대시보드의 환경 파일은 빌드 복사본에 포함하지 않았습니다.
- 대시보드 기반 커밋: `3c39618acf0b4241021357864ce77d0c5f0381ad`. 미커밋 tracked diff SHA-256: `0edd9e6e400b8e9b1fee4b5ad4dfeb4182e3ac74e020042bf004b22a0f829ce6`. 별도 대시보드 소스 저장소는 이번 요청에서 커밋·push하지 않았습니다.
- 소개 사이트 번들: `main-DgMtsyjB.js`, `main-DdCfdPHp.css`. 대시보드 번들: `index-Bw3mcNVk.js`, `index-BuD_RRWJ.css`. `.nojekyll`을 포함한 배포 파일은 64개입니다.
- 예시 데이터와 브라우저 저장 범위를 그대로 유지합니다. 실제 운영 API·장치·AI 연동 검증을 의미하지 않습니다.


## 2026-10-14 — Mobile silver-glass UI revision

The separate dashboard source is `/Users/do_not_delay/Desktop/EXPO_분석/dashboard-app`. Mobile UI work was first staged in `/private/tmp/mirrorting-mobile-dashboard-orvgwewn`, excluding environment files and preserving original dirty changes. The existing data/local-storage boundary and the same-site production URL are retained. The microsite adds the validated dashboard destination to its mobile dock. A combined local production preview is used for path/visual verification; publishing requires a separate explicit request.

Final UI source was applied to the original dashboard checkout with hash guards and backup. Original lint/typecheck/19 tests/build passed; dist/dashboard is combined locally. No public release in this UI task.

## 2026-10-15 — Secondary destination from the digital card

The public homepage is a digital business card. Its `샘플 운영 화면` link opens the validated existing dashboard URL in a new tab, with an accessible notice. The introductory dock no longer promotes operations beside project subjects. The dashboard returns via `프로젝트 명함`; its metrics share one compact divided panel, query filters lose the extra outer card and its light silver material matches the public entry. No operational data, routing, device safeguards, storage schema or actual integration changed. No new publication performed.

## 2026-10-15 — Black-glass palette

The latest owner direction replaces the light-silver material with black glass in both repositories. Dashboard changes are limited to its existing silver-mobile.css, browser theme-color metadata and documentation. The project-card link, hash routes, sample fixtures, CSV scope, local persistence and device safeguards remain unchanged. No live integration or publication is implied.


## 2026-10-15 — Black-glass project card production release

- Existing public destination retained: https://sdg331.github.io/CarpeDM_EXPO_Microsite/ and dashboard/#/overview.
- Microsite feature source: `3df8ed41615708427df9532861583063f895d02e`; includes the prior local exhibition-content commit and the latest mobile card, guided pages and black-glass refinements. Source was published to the existing main with a normal fast-forward push.
- Pages deployment: `1c7568d4b0ed2a2e5514883ca4fac97cc6f65633`, following `7df10c5`. GitHub Pages uses the existing gh-pages root; the latest build reported built with a null error. No workflow, permissions or host change.
- Dashboard source was copied from its existing local checkout without environment files. Base: `3c39618acf0b4241021357864ce77d0c5f0381ad`. Sorted file-manifest SHA-256: `eeb7ea3af9d175f0a6145f60f710584c1c1c42332f7de63c4360373c10fa19e8`. The separate dashboard repository was not committed or pushed.
- Microsite bundles: `main-XusuAFll.js`, `main-9_Eell8k.css`. Dashboard bundles: `index-UT_Oq9ag.js`, `index-CbURgAbx.css`. All 64 fresh build files matched the public HTTPS bytes by SHA-256; the published branch has 68 files because four previous hashed bundles remain for cached HTML during rollout.
- Public browser checks: seven microsite entries and seven dashboard routes at 360, 390, 768, 1024, 1280 and 1440 px (84 combinations), plus native introduction/keyboard/menu and dashboard-to-card new-tab navigation. No checked horizontal document overflow, broken visible image, duplicate ID, local development link or console warning/error.
- Deployment used isolated source/dashboard/publish copies under a temporary folder. Both original source snapshots were unchanged before adding this release record; original branches and dirty changes remain preserved. Sample data and browser storage scope remain unchanged; this release does not establish live hardware, NFC, AI or operational API integration.
