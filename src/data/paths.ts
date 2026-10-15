// Each HTML entry declares its distance from the site root for static subpath hosting.
export const siteRoot = document.getElementById('root')?.dataset.siteRoot ?? './';
export const siteAsset = (path: string) => `${siteRoot}${path}`;

const dashboardDestination = import.meta.env.VITE_DASHBOARD_URL
  ?? (import.meta.env.DEV ? 'http://127.0.0.1:4174/#/overview'
    : new URL(`${siteRoot}dashboard/#/overview`, document.baseURI).href);
export const dashboardUrl = URL.canParse(dashboardDestination)
  && /^https?:$/.test(new URL(dashboardDestination).protocol) ? dashboardDestination : '';

export const navigation = [
  { path: 'service/', page: 'service', label: '작품 소개', description: '만든 이유 · 대화 예시 · 체험 방식' },
  { path: 'use-cases/', page: 'use-cases', label: '활용 장면', description: '연습 종류 · 교육 활용 · 운영 화면' },
  { path: 'system/', page: 'system', label: '기술과 자료', description: '작동 구조 · 장치 역할 · 구현 근거' },
] as const;
