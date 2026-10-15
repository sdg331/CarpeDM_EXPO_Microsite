# 4-Fit MirrorTing EXPO Microsite

직장생활 대화를 스마트 미러 역할극으로 미리 경험하고 4-Fit 관점으로 돌아보는 동양미래대학교 EXPO 프로젝트의 웹사이트입니다. 서비스 전체 흐름을 소개하는 반응형 홈페이지와 서비스·4-Fit·시스템·활용·팀 소개 상세 페이지가 있습니다. 같은 주소에서 화면 폭에 맞춰 자동으로 배치되며, 모바일 버전 선택은 필요하지 않습니다.

이 저장소는 **설계한 프로젝트 경험을 소개하는 정적 웹사이트**입니다. 실제 하드웨어 제어, 사용자 등록, NFC 처리, AI 추론을 수행하지 않습니다. 확인된 정보와 구현 상태는 [제품 문서](docs/product.md)에서 구분합니다.

## 기술 구성

Vite 8, React 19, TypeScript 6, 네이티브 CSS, ESLint를 사용합니다. 프로덕션 의존성은 React와 React DOM 두 개이며 라우터·UI 라이브러리·애니메이션 라이브러리·외부 폰트가 없습니다. TypeScript는 ESLint 파서의 지원 범위에 맞춰 6.0.3을 사용합니다.

## 준비와 설치

- Node.js **24 LTS 권장**. 지원 범위는 Node.js 22.13 이상인 22 계열 또는 24 이상입니다.
- npm 사용. 잠금 파일은 `package-lock.json`입니다.
- 환경 변수, API 키 또는 백엔드 설정은 필요하지 않습니다.

```sh
npm install
```

잠금 파일을 그대로 사용하는 새 환경이나 CI에서는 `npm ci`를 실행합니다.

## 로컬 실행

```sh
npm run dev
```

브라우저에서 `http://localhost:5174`를 엽니다. 서비스 상세는 `http://localhost:5174/service/`입니다. 기존 `http://localhost:5174/expo/` 주소도 동일한 반응형 홈을 표시합니다. 다른 프로젝트가 사용하는 Vite 기본 포트 `5173`과 충돌하지 않도록 이 프로젝트는 개발 포트를 `5174`로 고정합니다. 프로덕션 미리보기는 `http://localhost:4175`를 사용합니다.

## 확인과 프로덕션 빌드

```sh
npm run lint
npm run typecheck
npm run build
npm test
npm run preview
```

- `lint`: TypeScript/React 코드 및 설정 검사. 경고도 실패로 처리합니다.
- `typecheck`: 브라우저 코드와 Vite 설정을 엄격한 TypeScript 설정으로 검사합니다.
- `build`: 타입 검사 후 정적 파일을 `dist/`에 생성합니다.
- `test`: 빌드된 소개 사이트, URL·모션 로직과 통합 빌드 도구의 실패·복구 처리를 검사합니다. 먼저 `build`를 실행합니다.
- `check`: lint → 타입 검사와 소개 사이트 빌드 → 전체 테스트를 실행합니다. 소개 사이트만 검사하는 명령입니다.
- `preview`: 빌드된 `dist/`를 로컬에서 확인합니다. 공개 배포 명령이 아닙니다.

## 대시보드를 포함한 통합 빌드

두 앱의 의존성을 설치한 뒤, 이 저장소에서 실행합니다. 아래 대시보드 경로는 현재 작업 공간의 예시이므로 다른 환경에서는 실제 checkout 경로로 바꿉니다.

```sh
npm ci
npm --prefix "../EXPO_분석/dashboard-app" ci
npm run build:release -- --dashboard "../EXPO_분석/dashboard-app"
npm run verify:release
npm run preview -- --host 127.0.0.1
```

`build:release`는 두 저장소의 현재 디스크 파일을 `_workspace/release-*`에 복사해 검사·빌드합니다. 미커밋 수정과 미추적 소스도 복사하며 Git 인덱스와 브랜치는 건드리지 않습니다. 환경 파일·키 파일은 복사하지 않고, 셸의 `VITE_*` 설정도 제외합니다. 통합 대시보드의 명함 복귀 주소는 `../`로 고정해 로컬·공개 하위 경로에서 같은 사이트로 돌아옵니다. 설치된 `node_modules`는 재사용하며 새 패키지를 설치하지 않습니다.

소개 사이트의 `check`, 대시보드의 lint/typecheck/test/build, 통합 산출물 검증이 모두 성공하면 `dist/dashboard/`와 `.nojekyll`을 포함한 `dist/`로 교체합니다. 교체 중 오류는 이전 산출물과 검사 보고서를 복구합니다. 이전 `dist`와 보고서는 해당 작업 폴더의 `previous-dist/`, `previous-report.json`에 보존됩니다. 원본 소스의 파일 목록·내용·커밋이 빌드 중 바뀌면 교체하지 않습니다.

`_workspace/release-report.json`에는 두 소스의 커밋·Git 상태·미추적 파일·파일별 SHA-256과 통합 산출물의 SHA-256이 저장됩니다. 보고서와 복사본은 로컬 검사 자료이며 공개 `dist/`에는 포함되지 않습니다. `verify:release`는 대시보드 누락, HTML/CSS 자산 경로, 개발용 주소, 비공개 파일명·심볼릭 링크와 보고서 대비 파일 변경을 검사합니다. 브라우저 조작과 실제 장치 검증은 별도로 수행합니다.

미리보기는 `http://127.0.0.1:4175/`, 샘플 대시보드는 `http://127.0.0.1:4175/dashboard/#/overview`입니다. 통합 빌드 이후 `npm run build` 또는 `npm run check`를 실행하면 소개 사이트만 다시 생성하므로, 공개 배포 전에는 `build:release`와 `verify:release`를 다시 실행합니다. 자세한 절차는 [대시보드 연결 문서](docs/dashboard-integration.md)에 있습니다.

360 / 390 / 768 / 1024 / 1280 / 1440 px 화면, 키보드 메뉴, 모션 감소와 이미지 대체 화면을 함께 확인합니다. 상세 절차와 실제 결과는 [QA 문서](docs/qa.md)에 기록합니다. 완성 화면은 [첫 화면](docs/screenshots/home-desktop.jpg), [전체 홈](docs/screenshots/home-full-desktop.jpg), [4-Fit 상세](docs/screenshots/four-fit-detail-1440.jpg), [제작팀](docs/screenshots/team-story-1440.jpg), [서비스 모바일](docs/screenshots/service-mirror-360.jpg), [시스템 입력 연결](docs/screenshots/system-inputs-1440.jpg), [시스템 구현 자료](docs/screenshots/system-evidence-1440.jpg) 캡처로 확인할 수 있습니다.

## 디렉터리

```text
AGENTS.md          이후 작업을 위한 저장소 지침
docs/              제품 사실, 디자인, 문구, 구조, QA, 결정 기록
public/            프로젝트 소유 정적 미디어
scripts/           통합 빌드·산출물 검증과 오프라인 미디어 도구
tests/             빌드·URL·모션·통합 빌드 실패/복구 검사
src/
  components/      내비게이션, 제품 미디어, 글래스 SVG 아이콘, 등장 효과
  sections/        Hero부터 Closing까지 페이지 섹션
  data/            문구, 체험 흐름, 기술, 미디어 슬롯
  styles/          디자인 토큰, 기본 스타일, 타이포그래피
  App.tsx          페이지 구성
  main.tsx         React 시작점
```

## 페이지 구성

홈페이지는 작품명·CarpeDM·짧은 목적 설명과 주요 링크를 담은 디지털 명함입니다. 밝은 실버 배경, 흰 읽기 면과 절제한 글라스 탐색을 사용합니다. 휴대폰에서는 큰 제목 아래로 소개 문장을 전체 폭에 배치하고, 상세 화면에는 네 목적지의 하단 탐색과 선택 상태를 표시합니다. 기기 시스템 글꼴, 노치·홈 인디케이터 안전영역, 확대와 자연스러운 세로 스크롤을 지원하는 모바일 웹입니다. `작품 알아보기`, `활용 장면`, `기술과 자료`로 상세 설명을 열고, 팀명으로 제작팀 소개를 확인합니다. 샘플 운영 화면은 보조 링크로 연결합니다. 홈의 화살표는 주요 버튼 하나에만 사용합니다.

`/service/`는 작품 이해·대화 예시·체험 순서·두 장치, `/four-fit/`는 네 관점과 설명용 대화 비교, `/system/`은 작동 흐름·장치·구현 자료·발전 방향, `/use-cases/`는 연습 종류·교육 활용·운영 화면, `/team/`은 제작 목적과 자료를 소개합니다. 긴 설명은 탭과 펼치기로 확인하며 상세 화면의 메뉴는 작품 소개·활용 장면·기술과 자료입니다. 기존 `/expo/`는 같은 명함을 표시하는 호환 진입점입니다.

대화·운영 화면의 예시와 실제 AI·장치 실행은 구분합니다. 실제 NFC·QR에는 공개 배포 후 확인한 절대 HTTPS 주소를 기록해야 합니다. 로컬 주소는 관람객 휴대폰의 공개 목적지가 아닙니다.

## 실제 제품 이미지로 교체

명함형 홈과 미러 상세에는 제공 도안을 바탕으로 만든 미러 렌더를, 키오스크에는 기존 이미지를 사용합니다. 이미지 아래의 AI·콘셉트·촬영 여부 캡션은 표시하지 않습니다. 출처 구분은 이미지 대체 설명, kind 메타데이터와 프로젝트 문서에 유지하며, 누락·로딩 실패 시 CSS 실루엣으로 복구합니다.

1. 사용 권한을 확인한 AVIF/WebP 이미지를 `public/media/`에 추가합니다. 기존 콘셉트 파일을 교체할 수 있습니다.
2. `src/data/media.ts`의 `hero`, `reflection`, `mirror`, `kiosk` 중 해당 슬롯을 설정합니다.
3. `source`에는 `siteAsset()`을 사용한 경로, `alt`에는 실제 보이는 내용, `width`·`height`에는 이미지의 실제 픽셀 크기를 넣습니다. `kind`는 콘셉트에 `concept`, 실제 사진에 `photograph`를 지정합니다. 필요하면 `srcSet`·`sizes`를 추가합니다.
4. 기본 화면·하위 경로·좁은 화면을 확인하고 잘못된 이미지 경로에서도 실루엣으로 복구되는지 확인합니다.

슬롯 값 예시입니다. 실제 파일을 넣기 전에는 등록하지 않습니다.

```ts
hero: {
  source: siteAsset('media/smart-mirror-hero.webp'),
  alt: '실제 사진에서 확인되는 스마트 미러와 주변 모습을 설명',
  kind: 'photograph',
  width: 1200,
  height: 1600,
}
```

예시 크기는 실제 파일 크기로 바꿉니다. 현재 슬롯은 hero/reflection/mirror/kiosk 네 개이며 mirror/reflection은 설계 도안 기반 sm-assembled-v1.webp를 함께 사용합니다. 이미지 출처는 kind와 대체 설명, 프로젝트 문서에 기록합니다. 이미지가 빠졌거나 로드에 실패하면 제품 콘셉트가 표시됩니다.

## 작업 전 읽을 문서

먼저 [AGENTS.md](AGENTS.md)를 읽고 다음 순서를 따릅니다.

1. [제품 정보](docs/product.md): 확인된 사실과 미확정 범위
2. [디자인](docs/design.md): 시각 시스템과 반응형 기준
3. [공개 문구](docs/content.md): 화면에 사용하는 한국어 중심 콘텐츠
4. [아키텍처](docs/architecture.md): 코드 구조와 구현 규칙
5. [QA](docs/qa.md): 재사용 검증 체크리스트와 실제 결과

기존 결정을 바꾸기 전에는 [결정 기록](docs/decisions.md)도 확인합니다. 주요 문구·시각·구조 변경은 관련 문서와 함께 반영합니다.

## 배포

배포 대상은 `dist/`의 정적 파일입니다. Vite의 `base: './'`로 자산 경로를 상대 경로로 생성하므로 루트 또는 저장소 하위 경로 호스팅을 고려할 수 있습니다. 실제 호스트에서 상세 페이지·미디어·내부 링크를 확인해야 합니다.

공개 사이트는 https://sdg331.github.io/CarpeDM_EXPO_Microsite/ 입니다. `main` push만으로 자동 배포되지는 않습니다. `build:release`와 `verify:release`로 확인한 통합 `dist/`를 명시적인 배포 요청이 있을 때 기존 `gh-pages`에 일반 push합니다. 활용 페이지의 `운영 화면 데모 보기`와 시스템 구현 자료에서 같은 사이트의 `dashboard/#/overview`로 이동합니다. 대시보드는 예시 데이터와 브라우저 저장을 사용하는 독립된 데모이며 실제 운영 API·장치·AI와 연결되지 않습니다. 2026-10-16 최신 공개 배포는 `09404ca`이며, 한영 모바일 웹·흰색 미러·검은색 키오스크 이미지와 샘플 대시보드를 함께 제공합니다. 대응하는 구현 소스는 `c1ea87f`입니다. 소스 범위·번들·공개 검증 결과는 [대시보드 연결 문서](docs/dashboard-integration.md)와 [QA 문서](docs/qa.md)에 기록합니다. canonical URL과 절대 공유 이미지 메타데이터는 추가 작업으로 남아 있습니다. 초기 버전은 JavaScript로 본문을 렌더링하며, 비활성화 시 간단한 한국어 프로젝트 소개를 제공합니다.

실제 사진, 기능별 구현 확인, AI·디바이스 연결 방식, EXPO 일정·부스 정보는 후속 확인 항목입니다. 확인되지 않은 정보를 완성된 기능이나 실적으로 소개하지 않습니다.

## 처음 방문하는 분을 위한 구성

명함에서 작품 소개를 열면 만든 이유와 연습 방식부터 볼 수 있습니다. 대화 예시에서는 상황별 질문·답변과 구성 해설을, 4-Fit에서는 다음에 해볼 연습을 확인합니다. 기술 화면은 미러와 네 단계 흐름을 함께 보여주고, 입력·처리·결과 설명과 실제 확인한 코드로 이어집니다. 자료 링크는 검토한 버전에 고정되어 있습니다. 활용과 팀 화면은 연습 장면·교육 활용안·설계 기준을 구체적으로 안내합니다.

이 사이트의 대화와 해설은 직접 작성한 설명 자료입니다. 공개 코드에서 확인한 소프트웨어 구조, 샘플 운영 화면, 실물 연동·분석 검증은 각각 구분합니다. 사이트에서 AI 분석이나 영상·음성 수집을 실행하지 않습니다.
