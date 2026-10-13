export const scenes = {
  report: { file: 'workplace-silver-glass-v1.webp', alt: '실버 유리로 표현한 두 사람이 책상에서 업무를 보고하는 장면', width: 1536, height: 1024 },
  arrival: { file: 'workplace-arrival-glass-v1.webp', alt: '실버 유리 사무실 입구에서 새 동료를 맞이하는 첫 출근 장면', width: 1536, height: 1024 },
  question: { file: 'workplace-question-glass-v1.webp', alt: '유리 보드 앞에서 질문을 듣고 설명하는 두 동료의 실버 글래스 장면', width: 1536, height: 1024 },
  mistake: { file: 'workplace-mistake-glass-v1.webp', alt: '책상에서 문서를 함께 확인하고 보완할 내용을 정리하는 두 동료의 실버 글래스 장면', width: 1536, height: 1024 },
  alignment: { file: 'workplace-alignment-glass-v1.webp', alt: '원형 회의 테이블에서 서로의 의견을 조율하는 세 동료의 실버 글래스 장면', width: 1536, height: 1024 },
  reflection: { file: 'workplace-reflection-glass-v1.webp', alt: '조용한 책상에서 대화를 돌아보며 노트에 정리하는 사람의 실버 글래스 장면', width: 1536, height: 1024 },
  team: { file: 'workplace-team-glass-v1.webp', alt: '유리 사무실에서 같은 테이블을 중심으로 협업하는 세 사람의 실버 글래스 콘셉트', width: 1536, height: 1024 },
} as const;

export type SceneKind = keyof typeof scenes;
export const conversationScenes = ['report', 'question', 'mistake', 'alignment'] as const satisfies readonly SceneKind[];
