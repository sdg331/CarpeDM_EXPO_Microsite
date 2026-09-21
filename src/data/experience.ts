interface ExperienceStep {
  number: string;
  title: string;
  description: string;
}

export const experienceSteps: readonly ExperienceStep[] = [
  { number: '01', title: '사원증 발급', description: '키오스크에서 체험을 시작하고, 나를 소개할 접점을 만듭니다.' },
  { number: '02', title: '사용자 연결', description: 'ID 또는 NFC를 활용한 사용자 연결을 설계합니다.' },
  { number: '03', title: '스마트 미러 접근', description: '키오스크를 지나 메인 디바이스인 스마트 미러 앞으로 이동합니다.' },
  { number: '04', title: '사용자 인식', description: '연결된 사용자 정보와 센싱을 바탕으로 상호작용을 시작하는 단계입니다.' },
  { number: '05', title: '음성 · 화면 인터랙션', description: '목소리와 화면의 응답이 이어지는 상호작용을 구상합니다.' },
  { number: '06', title: '개인화된 경험', description: '사용자 맥락에 맞춰 달라지는 경험을 목표로 합니다.' },
];
