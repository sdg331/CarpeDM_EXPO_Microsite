interface ExperienceStep {
  number: string;
  title: string;
  description: string;
}

export const experienceSteps: readonly ExperienceStep[] = [
  { number: '01', title: '사원 등록 · NFC', description: '키오스크와 NFC를 체험의 진입점으로 설계합니다. 등록 정보와 연결 방식은 확인이 필요합니다.' },
  { number: '02', title: '스마트 미러 역할극', description: '첫 출근이나 업무 대화 같은 상황을 스마트 미러 앞에서 연습하는 흐름입니다.' },
  { number: '03', title: 'AI 분석', description: '역할극의 입력을 분석 단계로 이어가려는 설계입니다. 실제 모델과 분석 범위는 확인이 필요합니다.' },
  { number: '04', title: '4-Fit 피드백', description: '응답·목소리·표정·자세 관점으로 대화를 돌아보는 피드백을 구상합니다.' },
  { number: '05', title: '결과 확인', description: '체험 후 결과를 이해하기 쉬운 화면으로 확인하는 흐름을 목표로 합니다.' },
  { number: '06', title: '재도전', description: '피드백을 참고해 같은 상황을 다시 연습할 수 있는 경험을 지향합니다.' },
];

export const workplaceMoments = [
  { title: '업무 보고', description: '진행 상황과 막힌 부분을 짧고 분명하게 설명하는 장면', question: '지금 업무는 어디까지 진행됐나요?', answer: '자료 정리는 마쳤고, 비교 내용을 검토하고 있습니다. 확인이 필요한 항목을 정리해 다음 보고 때 함께 전달하겠습니다.', focus: '진행 상황과 확인할 내용을 구분하고, 다음 행동까지 전달해 봅니다.' },
  { title: '질문 대응', description: '예상하지 못한 질문을 듣고 상황에 맞게 답하는 장면', question: '이 방법을 선택한 이유가 무엇인가요?', answer: '현재 필요한 내용을 먼저 확인할 수 있는 방법이라고 생각했습니다. 비교한 기준을 설명드리고, 빠진 조건이 있는지도 확인하겠습니다.', focus: '판단의 근거를 설명하고, 불확실한 부분은 확인할 대상으로 남겨 봅니다.' },
  { title: '실수 설명', description: '문제와 후속 조치를 차분하게 전달하는 장면', question: '자료에서 누락된 부분을 발견했는데, 어떻게 된 건가요?', answer: '제가 최종 확인 과정에서 놓쳤습니다. 누락 항목을 먼저 보완하고, 같은 문제가 반복되지 않도록 확인 목록을 정리하겠습니다.', focus: '문제를 인정하고, 보완할 내용과 재발 방지를 차분하게 전달해 봅니다.' },
  { title: '의견 조율', description: '서로 다른 의견을 듣고 자신의 생각을 설명하는 장면', question: '저는 다른 방향이 더 나을 것 같은데, 어떻게 생각하세요?', answer: '말씀하신 방향의 장점을 이해했습니다. 제가 제안한 안과 일정, 필요한 작업을 함께 비교해 보고 선택하면 어떨까요?', focus: '상대의 의견을 먼저 듣고, 함께 비교할 기준을 제안해 봅니다.' },
] as const;
