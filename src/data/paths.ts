// Each HTML entry declares its distance from the site root for static subpath hosting.
export const siteRoot = document.getElementById('root')?.dataset.siteRoot ?? './';
export const siteAsset = (path: string) => `${siteRoot}${path}`;

const dashboardDestination = import.meta.env.VITE_DASHBOARD_URL
  ?? (import.meta.env.DEV ? 'http://127.0.0.1:4174/#/overview'
    : new URL(`${siteRoot}dashboard/#/overview`, document.baseURI).href);
export const dashboardUrl = URL.canParse(dashboardDestination)
  && /^https?:$/.test(new URL(dashboardDestination).protocol) ? dashboardDestination : '';

export const navigation = [
  { path: 'system/', page: 'system', label: '시스템' },
  { path: 'four-fit/', page: 'four-fit', label: '4-Fit 분석' },
  { path: 'use-cases/', page: 'use-cases', label: '활용' },
  { path: 'team/', page: 'team', label: '팀 소개' },
] as const;
