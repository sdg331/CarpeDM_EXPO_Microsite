# CarpeDM EXPO Microsite

스마트 미러와 사원증 발급 키오스크가 연결되는 체험을 소개하는 동양미래대학교 EXPO 프로젝트의 한 페이지 웹사이트입니다. 방문자는 체험 흐름과 디바이스를, 심사위원과 개발자는 시스템 구성과 기술의 역할을 확인할 수 있습니다.

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

브라우저에서 `http://localhost:5174`를 엽니다. 다른 프로젝트가 사용하는 Vite 기본 포트 `5173`과 충돌하지 않도록 이 프로젝트는 개발 포트를 `5174`로 고정합니다. 프로덕션 미리보기는 `http://localhost:4175`를 사용합니다.

## 확인과 프로덕션 빌드

```sh
npm run lint
npm run typecheck
npm run build
npm run preview
```

- `lint`: TypeScript/React 코드 및 설정 검사. 경고도 실패로 처리합니다.
- `typecheck`: 브라우저 코드와 Vite 설정을 엄격한 TypeScript 설정으로 검사합니다.
- `build`: 타입 검사 후 정적 파일을 `dist/`에 생성합니다.
- `preview`: 빌드된 `dist/`를 로컬에서 확인합니다. 공개 배포 명령이 아닙니다.

360 / 390 / 768 / 1024 / 1280 / 1440 px 화면, 키보드 메뉴, 모션 감소와 이미지 대체 화면을 함께 확인합니다. 상세 절차와 실제 결과는 [QA 문서](docs/qa.md)에 기록합니다.

## 디렉터리

```text
AGENTS.md          이후 작업을 위한 저장소 지침
docs/              제품 사실, 디자인, 문구, 구조, QA, 결정 기록
public/            favicon 및 프로젝트 소유 정적 미디어
src/
  components/      내비게이션, 제품 미디어, 글래스 SVG 아이콘, 등장 효과
  sections/        Hero부터 Closing까지 페이지 섹션
  data/            문구, 체험 흐름, 기술, 미디어 슬롯
  styles/          디자인 토큰, 기본 스타일, 타이포그래피
  App.tsx          섹션 구성
  main.tsx         React 시작점
```

## 페이지 구성

제품 쇼케이스 → 프로젝트 소개 → 스마트 미러 → 키오스크 → 세 장면의 체험 → 시스템·기술 상세 순서로 읽습니다. 체험의 원래 6단계, 하드웨어 목록, 기술별 설명은 네이티브 펼쳐보기로 확인합니다. 글래스 아이콘은 `src/components/GlassIcon/`의 자체 SVG이며 추가 패키지 없이 렌더링합니다.

## 실제 제품 이미지로 교체

현재 세 슬롯에는 사용자가 제공한 콘셉트 이미지가 WebP로 적용되어 있습니다. 실제 촬영 이미지가 아니라는 캡션을 유지하며, 누락·로딩 실패 시 CSS 실루엣으로 복구합니다.

1. 사용 권한을 확인한 AVIF/WebP 이미지를 `public/media/`에 추가합니다. 기존 콘셉트 파일을 교체할 수 있습니다.
2. `src/data/media.ts`의 `hero`, `mirror`, `kiosk` 중 해당 슬롯을 설정합니다.
3. `source`에는 배포 base를 포함한 경로, `alt`에는 실제 보이는 내용, `width`·`height`에는 이미지의 실제 픽셀 크기를 넣습니다. `kind`는 콘셉트에 `concept`, 실제 사진에 `photograph`를 지정합니다. 필요하면 `srcSet`·`sizes`를 추가합니다.
4. 기본 화면·하위 경로·좁은 화면을 확인하고 잘못된 이미지 경로에서도 실루엣으로 복구되는지 확인합니다.

슬롯 값 예시입니다. 실제 파일을 넣기 전에는 등록하지 않습니다.

```ts
hero: {
  source: `${import.meta.env.BASE_URL}media/smart-mirror-hero.webp`,
  alt: '실제 사진에서 확인되는 스마트 미러와 주변 모습을 설명',
  kind: 'photograph',
  width: 1200,
  height: 1600,
}
```

예시 크기는 실제 파일 크기로 바꿉니다. 권장 이름은 `smart-mirror-hero.webp`, `smart-mirror-detail.webp`, `kiosk-front.webp`이며 `kiosk-detail.webp`, `expo-space.webp`는 후속 구성용입니다. 현재 사용되는 슬롯은 hero/mirror/kiosk 세 개입니다. 이미지가 빠졌거나 로드에 실패하면 제품 콘셉트가 표시됩니다.

## 작업 전 읽을 문서

먼저 [AGENTS.md](AGENTS.md)를 읽고 다음 순서를 따릅니다.

1. [제품 정보](docs/product.md): 확인된 사실과 미확정 범위
2. [디자인](docs/design.md): 시각 시스템과 반응형 기준
3. [공개 문구](docs/content.md): 화면에 사용하는 한국어 중심 콘텐츠
4. [아키텍처](docs/architecture.md): 코드 구조와 구현 규칙
5. [QA](docs/qa.md): 재사용 검증 체크리스트와 실제 결과

기존 결정을 바꾸기 전에는 [결정 기록](docs/decisions.md)도 확인합니다. 주요 문구·시각·구조 변경은 관련 문서와 함께 반영합니다.

## 배포

배포 대상은 `dist/`의 정적 파일입니다. Vite의 `base: './'`로 자산 경로를 상대 경로로 생성하므로 루트 또는 저장소 하위 경로 호스팅을 고려할 수 있습니다. 실제 호스트에서 자산과 앵커를 확인해야 합니다.

현재 공개 배포와 GitHub Pages 설정은 실행하지 않았습니다. 실제 도메인, canonical URL, Open Graph URL과 공유 이미지는 배포 위치와 미디어가 확정된 뒤 추가합니다. 초기 버전은 JavaScript로 본문을 렌더링하며, 비활성화 시 간단한 한국어 프로젝트 소개를 제공합니다.

실제 사진, 기능별 구현 확인, AI·디바이스 연결 방식, EXPO 일정·부스 정보는 후속 확인 항목입니다. 확인되지 않은 정보를 완성된 기능이나 실적으로 소개하지 않습니다.
