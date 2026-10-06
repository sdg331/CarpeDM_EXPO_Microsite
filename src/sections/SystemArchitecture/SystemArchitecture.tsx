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
  {name: 'Azure Kinect DK', fact: '12 MP 컬러 카메라와 1 MP ToF 깊이 카메라를 한 장치에 담습니다.', url: 'https://learn.microsoft.com/en-us/windows/apps/design/devices/kinect-for-windows', source: 'Microsoft 공식 사양'},
  {name: 'ReSpeaker XVF3800', fact: '4개의 마이크와 빔포밍·에코 제거·소음 억제 기능을 제공하는 마이크 어레이입니다.', url: 'https://wiki.seeedstudio.com/respeaker_xvf3800_introduction/', source: 'Seeed 공식 사양'},
  {name: 'LG 65UH5J-H', fact: '65인치 UHD 디스플레이. 설계 도안의 세로형 미러 내부 화면을 구성하는 장비입니다.', url: 'https://www.lg.com/hk_en/business/information-display/digital-signage/standard-digital-signage/65uh5j-h/', source: 'LG 공식 사양'},
] as const;

const systemJourney = [
  ['01', '키오스크 · NFC', '화면 안내와 등록을 체험의 시작점으로'],
  ['02', '스마트 미러 역할극', '상황을 마주하고, 말로 답하는 연습'],
  ['03', '4-Fit 피드백', '내용과 전달 태도를 네 관점으로 돌아보기'],
  ['04', '결과 확인 · 재도전', '피드백을 다음 대화 연습으로 연결'],
] as const;

const feedbackInputs = [
  ['Response', '응답', '대화 상황과 사용자의 답변 내용', '질문의 의도, 진행 상황, 다음 행동을 답변에 담았는지'],
  ['Voice', '목소리', '마이크 어레이의 음성 입력', '말의 속도·크기·명료도를 어떻게 전달했는지'],
  ['Expression', '표정', '컬러 카메라의 영상 입력', '질문을 듣고 답하는 동안 시선과 표정은 어땠는지'],
  ['Posture', '자세', '깊이 영상과 거리 입력', '미러 앞에서 자신의 자세와 움직임은 어땠는지'],
] as const;

export function SystemArchitecture() {
  return (
    <section id="system" className="section section--light system-section" tabIndex={-1} aria-labelledby="system-heading">
      <div className="container">
        <Reveal className="system-section__heading">
          <div><p className="section-kicker">전체 시스템 연결</p><h2 id="system-heading" className="section-title">입장부터 피드백까지.<br /><span>하나의 체험으로.</span></h2></div>
          <p className="body-copy">체험의 시작은 키오스크, 대화 연습은 스마트 미러에서. 영상·깊이·음성 입력을 4-Fit 피드백으로 연결하고, 다음 연습으로 이어가는 흐름을 설계합니다.</p>
        </Reveal>

        <ol className="system-journey" aria-label="구상한 전체 시스템 흐름">
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

        <p className="scope-note system-section__scope">장치의 역할과 연결 방향을 설명하는 설계안입니다. 실제 등록·NFC·출력·분석 연동과 결과 화면의 위치·구현 상태는 검증이 필요합니다. 운영 관리 화면은 별도 샘플 워크스페이스이며 체험 장치와의 연결을 뜻하지 않습니다.</p>

        <div className="system-feedback" aria-labelledby="system-feedback-heading">
          <div className="system-feedback__heading"><div><p className="section-kicker">입력에서 피드백으로</p><h3 id="system-feedback-heading">좋은 입력을, 의미 있는 연습으로.</h3></div><p className="body-copy">센서가 받는 정보와 4-Fit이 돌아보려는 관점을 함께 보여줍니다. 아래는 분석이 완료된 결과가 아닌 설계 관계입니다.</p></div>
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
              <p className="scope-note">상단 중앙 카메라와 왼쪽 마이크, 우측 NFC, 후면 PC BOX, 하단 두 스피커와 이동식 베이스를 바탕으로 표현했습니다. 도안 수치는 프레임 폭 890 mm, 바닥부터 상단까지 1705 mm, 베이스 950 × 600 mm입니다. 최종 제작 치수와 설치 상태를 보증하지 않습니다.</p>
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
