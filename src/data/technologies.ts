export interface Technology {
  name: string;
  role: string;
  description: string;
}

export const technologies: readonly Technology[] = [
  {
    name: 'Computer Vision',
    role: '장면을 입력으로',
    description: '카메라에서 얻는 시각 정보를 상호작용의 입력으로 활용하는 영역입니다.',
  },
  {
    name: 'Spatial Sensing',
    role: '공간과 움직임',
    description: '사용자 위치와 신체 움직임을 입력으로 다루도록 설계합니다.',
  },
  {
    name: 'Voice Interaction',
    role: '목소리로 연결',
    description: '마이크 입력과 스피커 출력을 통해 음성 상호작용을 구성하는 영역입니다.',
  },
  {
    name: 'NFC',
    role: '가까이에서 시작되는 연결',
    description: '사용자를 체험과 연결하는 접점으로 활용하도록 설계합니다.',
  },
  {
    name: 'Interactive Display',
    role: '반응을 보여주는 화면',
    description: '안내와 시각적 피드백을 전달하는 인터페이스입니다.',
  },
  {
    name: 'AI Interaction',
    role: '맥락에 맞는 응답',
    description: '사용자 입력과 맥락에 반응하는 경험을 목표로 합니다.',
  },
  {
    name: 'Physical Computing',
    role: '소프트웨어를 실제 장치로',
    description: 'Raspberry Pi와 PC를 중심으로 센서, 화면, 출력 장치를 연결하는 구성입니다.',
  },
];
