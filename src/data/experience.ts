import { t } from '../i18n';
interface ExperienceStep {
  number: string;
  title: string;
  description: string;
}

export const experienceSteps: readonly ExperienceStep[] = [
  { number: '01', title: t('사원 등록 · NFC'), description: t('키오스크에서 체험을 시작합니다. 등록·NFC 연결은 확인 중입니다.') },
  { number: '02', title: t('스마트 미러 역할극'), description: t('미러 앞에서 보고나 질문 같은 직장 대화에 말로 답하는 역할극입니다.') },
  { number: '03', title: t('AI 분석'), description: t('대화의 내용과 전달 방식을 분석하도록 설계했습니다.') },
  { number: '04', title: t('4-Fit 피드백'), description: t('응답·목소리·표정·자세에서 돌아볼 점을 정리하는 피드백입니다.') },
  { number: '05', title: t('결과 확인'), description: t('결과 화면에서 연습한 대화와 피드백을 확인합니다.') },
  { number: '06', title: t('재도전'), description: t('바꾸고 싶은 한 가지를 골라 같은 상황을 다시 연습합니다.') },
];

export const workplaceMoments = [
  { title: t('업무 보고'), description: t('진행 상황과 막힌 부분을 짧고 분명하게 설명하는 장면'), question: t('지금 업무는 어디까지 진행됐나요?'), answer: t('자료 정리는 마쳤고 비교 내용을 검토하고 있습니다. 확인이 필요한 항목은 정리해서 다음 보고 때 함께 전달하겠습니다.'), focus: t('진행 상황과 확인할 내용을 구분하고 다음에 할 일까지 말해 봅니다.'), structure: [t('마친 일을 먼저 말합니다.'), t('현재 진행 중인 일을 구분합니다.'), t('다음에 전달할 내용을 덧붙입니다.')] },
  { title: t('질문 대응'), description: t('예상하지 못한 질문을 듣고 상황에 맞게 답하는 장면'), question: t('이 방법을 선택한 이유가 무엇인가요?'), answer: t('현재 필요한 내용을 먼저 확인할 수 있는 방법이라고 생각했습니다. 비교한 기준을 설명드리고 빠진 조건이 있는지도 확인하겠습니다.'), focus: t('판단의 근거를 설명하고 불확실한 부분은 확인할 내용으로 남겨 봅니다.'), structure: [t('선택한 이유를 먼저 말합니다.'), t('비교한 기준을 설명합니다.'), t('놓친 조건을 함께 확인합니다.')] },
  { title: t('실수 설명'), description: t('문제와 후속 조치를 차분하게 전달하는 장면'), question: t('자료에서 누락된 부분을 발견했는데, 어떻게 된 건가요?'), answer: t('제가 최종 확인 과정에서 놓쳤습니다. 누락된 항목을 먼저 보완하고 같은 문제가 반복되지 않도록 확인 목록을 정리하겠습니다.'), focus: t('문제를 인정하고 보완할 내용과 같은 실수를 막을 방법을 차분하게 말해 봅니다.'), structure: [t('놓친 부분을 인정합니다.'), t('지금 보완할 일을 말합니다.'), t('다음 확인 방법을 제안합니다.')] },
  { title: t('의견 조율'), description: t('서로 다른 의견을 듣고 자신의 생각을 설명하는 장면'), question: t('저는 다른 방향이 더 나을 것 같은데, 어떻게 생각하세요?'), answer: t('말씀하신 방향의 장점을 이해했습니다. 제가 제안한 안과 일정, 필요한 작업을 함께 비교해 보고 선택하면 어떨까요?'), focus: t('상대의 의견을 먼저 듣고 함께 비교할 기준을 제안해 봅니다.'), structure: [t('상대 의견의 장점을 확인합니다.'), t('비교할 기준을 제안합니다.'), t('함께 선택할 여지를 남깁니다.')] },
] as const;
