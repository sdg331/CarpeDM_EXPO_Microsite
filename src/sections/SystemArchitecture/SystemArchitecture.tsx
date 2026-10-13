import { Arrow } from '../../components/Arrow';
import { Reveal } from '../../components/Reveal/Reveal';
import { siteRoot } from '../../data/paths';
import './SystemArchitecture.css';

const hardwareGroups = [
  {
    title: '스마트 미러 구성',
    items: [
      ['LG 65UH5J', '65인치 상업용 디스플레이'],
      ['Azure Kinect DK', '깊이 · 신체 센싱 입력'],
      ['Seeed ReSpeaker XMOS XVF3800', '마이크 어레이를 통한 음성 입력'],
      ['NFC 리더', '사용자 연결 입력'],
      ['외부 스피커', '소리 출력'],
      ['전용 Windows PC', '디바이스 및 소프트웨어 구성의 중심'],
    ],
  },
  {
    title: '키오스크 구성',
    items: [
      ['Raspberry Pi 5', '키오스크 제어'],
      ['Camera Module 3', '카메라 입력'],
      ['10.1인치 디스플레이', '체험 안내 및 화면 인터랙션'],
      ['NFC', '사용자 연결'],
      ['80 mm 감열 프린터', '물리적 출력'],
      ['커스텀 인클로저 · LED 조명', '장치 외형과 조명 구성'],
    ],
  },
] as const;

const hardwareReferences = [
  {name: 'Azure Kinect DK', fact: '12 MP 컬러 카메라, 1 MP ToF 깊이 카메라와 7개의 마이크를 한 장치에 담습니다.', url: 'https://learn.microsoft.com/en-us/previous-versions/azure/kinect-dk/hardware-specification', source: 'Microsoft 공식 사양'},
  {name: 'ReSpeaker XVF3800', fact: '4개의 마이크와 빔포밍·에코 제거·소음 억제 기능을 제공하는 마이크 어레이입니다.', url: 'https://wiki.seeedstudio.com/respeaker_xvf3800_introduction/', source: 'Seeed 공식 사양'},
  {name: 'LG 65UH5J-H', fact: '65인치 UHD 디스플레이. 설계 도안의 세로형 미러 내부 화면을 구성하는 장비입니다.', url: 'https://www.lg.com/hk_en/business/information-display/digital-signage/standard-digital-signage/65uh5j-h/', source: 'LG 공식 사양'},
] as const;

const systemJourney = [
  ['01', '연습 · 상황 선택', '면접·직업훈련·직장대화와 해당 상황 선택'],
  ['02', '질문 · 답변', '음성·직접 입력과 카메라 관찰을 수집'],
  ['03', '대화 진행 · 분석', '질문·목표의 진행 상태와 네 관점을 분석'],
  ['04', '결과 확인 · 재연습', '발언 근거·측정 상태·다음에 바꿀 점 확인'],
] as const;

const feedbackInputs = [
  ['Response', '응답', '대화 상황과 사용자의 답변 내용', '질문의 의도, 진행 상황, 다음 행동을 답변에 담았는지'],
  ['Voice', '목소리', '마이크 어레이의 음성 입력', '말의 속도·크기·명료도를 어떻게 전달했는지'],
  ['Expression', '표정', '브라우저 표정 모델의 구간별 출력', '유효한 얼굴 표본에서 얻은 검증 전 참고값'],
  ['Posture', '자세', '카메라 영상의 신체 특징점', '자세와 움직임의 관찰 항목·측정 가능 여부'],
] as const;

export function SystemArchitecture() {
  return (
    <section id="system" className="section section--light system-section" tabIndex={-1} aria-labelledby="system-heading">
      <div className="container">
        <Reveal className="system-section__heading">
          <div><p className="section-kicker">연습 소프트웨어의 흐름</p><h2 id="system-heading" className="section-title">상황에 맞춰 답하고,<br /><span>결과의 근거를 확인합니다.</span></h2></div>
          <p className="body-copy">연습 종류와 상황을 고르고 질문에 답합니다. 대화의 진행 상태와 카메라·음성 관찰을 분석해, 근거와 측정 상태가 포함된 결과로 정리하는 구조입니다.</p>
        </Reveal>

        <ol className="system-journey" aria-label="코드에서 확인한 연습 소프트웨어 흐름">
          {systemJourney.map(([number, title, role]) => <li key={number}><span>{number}</span><strong>{title}</strong><small>{role}</small></li>)}
        </ol>

        <Reveal className="system-diagram-wrap">
          <ol className="system-diagram">
            <li className="system-device">
              <p className="eyebrow">01 / ENTRY</p>
              <h3 className="system-device__title">ID Card Kiosk</h3>
              <p className="system-device__role">체험 안내 · 등록과 NFC 연결 구상 · 물리적 출력</p>
              <ul className="system-device__parts">
                <li>디스플레이</li>
                <li>카메라</li>
                <li>NFC</li>
                <li>감열 프린터</li>
                <li>키오스크 제어 장치</li>
              </ul>
            </li>
            <li className="system-link">
              <div className="system-link__path" aria-hidden="true"><Arrow /></div>
              <div className="system-link__copy">
                <p>사용자 · 체험 연결</p>
              </div>
            </li>
            <li className="system-device">
              <p className="eyebrow">02 / INTERACTION</p>
              <h3 className="system-device__title">Smart Mirror</h3>
              <p className="system-device__role">상황 제시 · 대화 입력 · 피드백과 음성 출력 구상</p>
              <ul className="system-device__parts">
                <li>미러 디스플레이</li>
                <li>깊이 센서</li>
                <li>마이크 어레이</li>
                <li>NFC</li>
                <li>스피커</li>
                <li>전용 PC</li>
              </ul>
            </li>
          </ol>
        </Reveal>

        <p className="scope-note system-section__scope">소프트웨어의 흐름은 프로젝트 코드에서 확인했습니다. 실물 장치의 현장 연동과 분석 정확도·교육 효과는 별도 검증이 필요합니다. 운영 관리 화면은 독립된 예시 데모입니다.</p>

        <div className="system-feedback" aria-labelledby="system-feedback-heading">
          <div className="system-feedback__heading"><div><p className="section-kicker">입력에서 피드백으로</p><h3 id="system-feedback-heading">입력과 4-Fit 분석의 관계</h3></div><p className="body-copy">현재 분석 경로의 입력과 돌아볼 내용을 정리했습니다. 시선 측정은 사용하지 않으며, 참고값과 미측정 상태를 구분합니다.</p></div>
          <dl className="system-feedback__list">
            {feedbackInputs.map(([name, label, input, reflection]) => <div key={name}><dt><strong lang="en">{name}</strong><span>{label}</span></dt><dd><div><span>입력 · 맥락</span><p>{input}</p></div><div><span>돌아볼 내용</span><p>{reflection}</p></div></dd></div>)}
          </dl>
          <div className="section-end"><p className="scope-note">센서 입력과 해석은 별도 단계입니다. 음성 인식, 표정·신체 분석, 모델과 판단 기준은 실제 동작 검증이 필요합니다.</p><a className="text-link" href={`${siteRoot}four-fit/`}>4-Fit 설명과 대화 예시 보기<Arrow /></a></div>
        </div>

        <details className="hardware-details">
          <summary id="hardware-details">
            <span>하드웨어 구성 자세히 보기</span>
            <span className="hardware-details__toggle" aria-hidden="true" />
          </summary>
          <div className="hardware-details__content">
            <p className="scope-note hardware-details__note">
              아래는 프로젝트에서 사용한다고 제공된 하드웨어 목록입니다.
              각 기능의 구현 완료를 의미하지 않습니다.
            </p>
            <div className="hardware-details__groups">
              {hardwareGroups.map((group) => (
                <div className="hardware-group" key={group.title}>
                  <h3>{group.title}</h3>
                  <dl>
                    {group.items.map(([name, role]) => (
                      <div className="hardware-group__row" key={name}>
                        <dt>{name}</dt>
                        <dd>{role}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ))}
            </div>
            <div className="hardware-references">
              <h3>도안에서 확인한 장치 배치</h3>
              <p className="scope-note">상단 중앙 카메라와 왼쪽 마이크, 우측 NFC, 후면 PC BOX, 하단 두 스피커와 이동식 베이스의 배치를 표현했습니다. 도안 수치는 프레임 폭 890 mm, 바닥부터 상단까지 1705 mm, 베이스 950 × 600 mm입니다. 최종 제작 치수와 설치 상태를 보증하지 않습니다.</p>
              <h3 className="hardware-references__spec-heading">제조사 공개 사양과 설계 역할</h3>
              <p className="scope-note">제조사가 공개한 장비 사양입니다. 실제 분석 성능이나 프로젝트에서 활성화된 기능을 의미하지 않습니다.</p>
              <dl>{hardwareReferences.map(item => <div key={item.name}><dt>{item.name}</dt><dd><p>{item.fact}</p><a href={item.url} target="_blank" rel="noreferrer">{item.source} <span aria-hidden="true">↗</span></a></dd></div>)}</dl>
            </div>
          </div>
        </details>
      </div>
    </section>
  );
}
