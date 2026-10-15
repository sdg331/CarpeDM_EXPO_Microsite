import { t } from '../i18n';
export const developmentDirections = [
  {
    title: t('기관의 교육 기준을 더해서'),
    summary: t('기존 시나리오에 기관별 교육 자료와 기준을 연결.'),
    technology: t('검색 기반 생성(RAG)'),
    detail: t('이미 준비한 면접·카페 응대·직장 대화에 승인된 기관 교육 자료를 연결하는 발전안입니다. 자료 검색을 통해 질문과 피드백의 근거를 보강하는 방식을 검토합니다.'),
    validation: t('자료 사용 권한, 검색된 근거와 답변의 일치, 근거가 없을 때의 응답을 먼저 확인해야 합니다.'),
    source: 'https://developers.openai.com/api/docs/guides/retrieval',
    sourceLabel: t('자료 검색 기술 문서'),
  },
  {
    title: t('현장에서도 잘 들리도록'),
    summary: t('기존 음성 입출력을 소음과 응답 지연에 맞게 보완.'),
    technology: t('음성 입출력 개선 / 대화 중단·재시도 처리'),
    detail: t('이미 연결한 음성 인식과 음성 출력을 실제 설치 환경에서 보완하는 발전안입니다. 주변 소음, 말 끊기, 잘못 알아들은 답변과 재시도 상황에서도 연습을 이어갈 수 있는지 확인합니다.'),
    validation: t('전시장 소음, 응답 지연, 말 끊기와 재시도, 음성 처리 동의와 보관 범위를 실제 환경에서 확인해야 합니다.'),
    source: 'https://developers.openai.com/api/docs/guides/realtime-conversations',
    sourceLabel: t('음성 대화 기술 문서'),
  },
  {
    title: t('피드백의 기준을 검증하도록'),
    summary: t('표정·자세의 참고값을 교육 기준과 실제 관찰로 검증.'),
    technology: t('비언어 분석 검증 / 측정 품질·교육 기준 확인'),
    detail: t('이미 연결한 표정·자세 분석을 조명과 가림, 사용자별 차이, 교육자의 관찰과 비교하는 발전안입니다. 모델의 출력값과 대화 상황에 맞는 피드백은 별도로 검증하며, 특정 감정이나 성격을 단정하지 않습니다.'),
    validation: t('조명과 가림, 사용자별 차이, 오인식과 영상 처리 동의를 확인해야 합니다. 센서 입력과 피드백 기준은 별도로 검증해야 합니다.'),
    source: 'https://developers.google.com/edge/mediapipe/solutions/vision/pose_landmarker',
    sourceLabel: t('자세 특징점 기술 문서'),
  },
] as const;
