import { t } from '../i18n';
// Source-level review; hardware acceptance and analysis accuracy are separate checks.
export const sourceReview = {
  repository: 'DMUCarpeDM/2026CarpeDM_EXPO',
  commit: 'adb9355b0da4ef69a6485811ec82ee46cf133239',
  reviewedOn: '2026-10-15',
  items: [
    { title: t('세 가지 연습 모드'), description: t('면접·직업훈련·직장대화를 구분하고, 모드마다 상황과 질문을 고르는 구조를 확인했습니다.'), path: 'mvp/src/data/setupCatalog.js', action: t('연습 모드 코드 보기') },
    { title: t('대화를 이어가는 진행 관리'), description: t('면접 질문과 훈련 목표, 직장대화의 진행 상태를 구분해 관리하는 코드를 확인했습니다.'), path: 'poc/backend/app/services/interaction.py', action: t('대화 진행 코드 보기') },
    { title: t('근거와 다음 연습을 담는 리포트'), description: t('관찰 내용·해석·다음 연습 문장을 구성하고, 측정하지 못한 항목을 구분하는 리포트 코드를 확인했습니다.'), path: 'poc/backend/app/services/report.py', action: t('리포트 코드 보기') },
  ],
} as const;
