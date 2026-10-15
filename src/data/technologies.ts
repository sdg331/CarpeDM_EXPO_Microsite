import { t } from '../i18n';
export interface Technology {
  name: string;
  role: string;
  input: string;
  description: string;
  boundary: string;
}

export const technologies: readonly Technology[] = [
  {
    name: 'Computer Vision',
    role: t('컬러 영상으로 대화 장면을'),
    input: t('스마트 미러의 컬러 카메라 영상.'),
    description: t('시선과 표정을 돌아보기 위한 컬러 영상 입력입니다.'),
    boundary: t('영상 입력과 표정 분석은 별도 단계입니다. 분석 방법과 실제 동작은 검증이 필요합니다.'),
  },
  {
    name: 'Spatial Sensing',
    role: t('깊이 정보로 위치와 자세를'),
    input: t('스마트 미러 깊이 센서의 거리 정보.'),
    description: t('위치와 신체 움직임을 자세 피드백에 연결하기 위한 입력입니다.'),
    boundary: t('깊이 입력만으로 자세 판단이 완성되지는 않습니다. 신체 추적·판단 방법과 연동 상태는 확인이 필요합니다.'),
  },
  {
    name: 'Voice Interaction',
    role: t('듣고 말하는 대화의 입출력'),
    input: t('상단 마이크 어레이의 음성 입력과 하단 두 스피커의 소리 출력.'),
    description: t('질문을 듣고 말로 답하는 역할극의 음성 입출력입니다.'),
    boundary: t('제조사 음성 처리 기능과 프로젝트의 음성 인식·합성·피드백은 구분합니다. 실제 적용 상태는 검증이 필요합니다.'),
  },
  {
    name: 'NFC',
    role: t('키오스크에서 미러로 잇는 접점'),
    input: t('키오스크와 스마트 미러의 NFC 구성.'),
    description: t('등록과 미러 체험을 연결하기 위한 구성입니다.'),
    boundary: t('등록 정보와 NFC의 연결 방식은 확인이 필요합니다. 감열 출력물과 NFC는 서로 다른 구성입니다.'),
  },
  {
    name: 'Interactive Display',
    role: t('안내와 역할극을 보여주는 화면'),
    input: t('키오스크의 안내 화면과 미러 내부의 세로형 디스플레이.'),
    description: t('키오스크에는 체험 안내를, 미러에는 대화 상황과 피드백을 보여주도록 설계했습니다.'),
    boundary: t('소개 UI 캡처는 예시 화면입니다. 실제 장치 화면과 분석 결과 화면의 동작·연동은 검증이 필요합니다.'),
  },
  {
    name: 'AI Interaction',
    role: t('상황과 답변을 피드백으로'),
    input: t('설계한 직장 대화 상황과 사용자가 답한 내용.'),
    description: t('질문과 답변을 이어가고 답변 내용을 피드백으로 정리하도록 설계했습니다.'),
    boundary: t('모델·서비스 제공자·분석 기준은 확인되지 않았습니다. 사이트의 답변과 코칭은 작성한 예시입니다.'),
  },
  {
    name: 'Physical Computing',
    role: t('두 장치의 역할을 나누는 구성'),
    input: t('키오스크의 Raspberry Pi와 스마트 미러의 전용 PC, 각 장치에 배치한 센서·화면·출력 장치.'),
    description: t('키오스크가 체험 준비를, 미러가 역할극을 맡도록 장치의 역할을 나눴습니다.'),
    boundary: t('하드웨어 구성은 프로젝트 제공 정보입니다. 장치 제어·통신 방식과 전체 체험 연동은 별도 검증이 필요합니다.'),
  },
];
