import { language, t } from '../../i18n';
import { Arrow } from '../../components/Arrow';
import { Reveal } from '../../components/Reveal/Reveal';
import { ProductFrame } from '../../components/ProductFrame/ProductFrame';
import { media } from '../../data/media';
import { sitePage } from '../../data/paths';
import './SystemArchitecture.css';

const hardwareGroups = [
  {
    title: t('스마트 미러 구성'),
    items: [
      ['LG 65UH5J', t('65인치 상업용 디스플레이')],
      ['Azure Kinect DK', t('깊이 · 신체 센싱 입력')],
      ['Seeed ReSpeaker XMOS XVF3800', t('마이크 어레이를 통한 음성 입력')],
      [t('NFC 리더'), t('사용자 연결 입력')],
      [t('외부 스피커'), t('소리 출력')],
      [t('전용 Windows PC'), t('디바이스 및 소프트웨어 구성의 중심')],
    ],
  },
  {
    title: t('키오스크 구성'),
    items: [
      ['Raspberry Pi 5', t('키오스크 제어')],
      ['Camera Module 3', t('카메라 입력')],
      [t('10.1인치 디스플레이'), t('체험 안내 및 화면 인터랙션')],
      ['NFC', t('사용자 연결')],
      [t('80 mm 감열 프린터'), t('물리적 출력')],
      [t('커스텀 인클로저 · LED 조명'), t('장치 외형과 조명 구성')],
    ],
  },
] as const;

const hardwareReferences = [
  {name: 'Azure Kinect DK', fact: t('12 MP 컬러 카메라, 1 MP ToF 깊이 카메라와 7개의 마이크를 한 장치에 담습니다.'), url: 'https://learn.microsoft.com/en-us/previous-versions/azure/kinect-dk/hardware-specification', source: t('Microsoft 공식 사양')},
  {name: 'ReSpeaker XVF3800', fact: t('4개의 마이크와 빔포밍·에코 제거·소음 억제 기능을 제공하는 마이크 어레이입니다.'), url: 'https://wiki.seeedstudio.com/respeaker_xvf3800_introduction/', source: t('Seeed 공식 사양')},
  {name: 'LG 65UH5J-H', fact: t('65인치 UHD 디스플레이. 설계 도안의 세로형 미러 내부 화면을 구성하는 장비입니다.'), url: 'https://www.lg.com/hk_en/business/information-display/digital-signage/standard-digital-signage/65uh5j-h/', source: t('LG 공식 사양')},
] as const;

const systemJourney = [
  { title: t('상황 선택'), role: t('연습할 종류와 장면'), input: t('면접·직업훈련·직장대화 중 선택한 모드와 상황'), process: t('모드에 맞는 질문·목표와 대화 흐름을 준비합니다.'), output: t('어떤 상대와 무엇을 연습할지 정한 대화 맥락') },
  { title: t('답변 입력'), role: t('말·글·카메라 관찰'), input: t('사용자의 음성 또는 직접 입력, 유효한 영상 관찰'), process: t('답변 내용과 음성·표정·자세의 관찰 정보를 구분해 다룹니다.'), output: t('답변 기록과 분석에 사용할 수 있는 입력 정보') },
  { title: t('대화 · 분석'), role: t('진행 상태와 네 관점'), input: t('질문·목표, 답변과 수집된 관찰 정보'), process: t('대화가 어디까지 진행됐는지와 4-Fit 관점을 각각 정리합니다.'), output: t('대화 진행 기록, 분석 근거와 측정 상태') },
  { title: t('결과 · 재연습'), role: t('근거와 다음 연습 문장'), input: t('대화·분석 결과와 측정 가능한 항목'), process: t('관찰한 내용, 해석, 다음에 시도할 문장을 리포트로 구성합니다.'), output: t('돌아볼 지점과 다음 연습에 참고할 제안') },
] as const;

const feedbackInputs = [
  ['Response', t('응답'), t('대화 상황과 사용자의 답변 내용'), t('질문의 의도, 진행 상황, 다음 행동을 답변에 담았는지')],
  ['Voice', t('목소리'), t('마이크 어레이의 음성 입력'), t('말의 속도·크기·명료도를 어떻게 전달했는지')],
  ['Expression', t('표정'), t('브라우저 표정 모델의 구간별 출력'), t('유효한 얼굴 표본에서 얻은 검증 전 참고값')],
  ['Posture', t('자세'), t('카메라 영상의 신체 특징점'), t('자세와 움직임의 관찰 항목·측정 가능 여부')],
] as const;

export function SystemArchitecture() {
  return (
    <section id="system" className="section section--light system-section" tabIndex={-1} aria-labelledby="system-heading">
      <div className="container">
        <Reveal className="system-section__heading">
          <div><h2 id="system-heading" className="section-title">{t('한눈에 보는 작동 구조.')}</h2></div>
        </Reveal>

        <div className="system-map">
          <div className="system-map__device"><ProductFrame kind="mirror" media={media.mirror} /><p>{t('화면 · 마이크 · 카메라')}<small>{t('연습을 마주하는 공간')}</small></p></div>
          <div className="system-map__flow"><ol className="system-journey" aria-label={t('코드에서 확인한 연습 소프트웨어 흐름')}>
            {systemJourney.map((step, index) => <li key={step.title}><span aria-hidden="true">0{index + 1}</span><div><strong>{step.title}</strong><small>{step.role}</small></div></li>)}
          </ol><p className="system-map__perspectives">{t('응답 · 목소리 · 표정 · 자세')}</p></div>
        </div>

        <div className="system-status" aria-label={t('구현 근거와 검증 범위')}>
          <div><span>{t('코드에서 확인')}</span><p>{t('연습 모드, 대화 진행 관리,')}<br />{t('4-Fit 리포트 구조')}</p></div>
          <div><span>{t('현장에서 검증할 부분')}</span><p>{t('등록·NFC·출력의 연결,')}<br />{t('분석 정확도와 교육 효과')}</p></div>
        </div>
        <a className="text-link system-source-link" href="#system-evidence">{t('확인한 코드와 자료 보기')}</a>

        <details className="compact-disclosure"><summary>{t('각 단계에서 무엇이 오가나요?')}<span className="disclosure-plus" aria-hidden="true" /></summary><div className="system-stage-details">{systemJourney.map((step, index) => <article key={step.title}><h3><span aria-hidden="true">0{index + 1}</span>{step.title}</h3><dl><div><dt>{t('입력')}</dt><dd>{step.input}</dd></div><div><dt>{t('처리')}</dt><dd>{step.process}</dd></div><div><dt>{t('결과')}</dt><dd>{step.output}</dd></div></dl></article>)}</div></details>

        <details className="compact-disclosure"><summary>{t('키오스크와 미러의 연결 구조')}<span className="disclosure-plus" aria-hidden="true" /></summary><Reveal className="system-diagram-wrap">
          <ol className="system-diagram">
            <li className="system-device">
              <p className="eyebrow">01 / ENTRY</p>
              <h3 className="system-device__title">ID Card Kiosk</h3>
              <p className="system-device__role">{t('체험 안내 · 등록과 NFC 연결 구상 · 물리적 출력')}</p>
              <ul className="system-device__parts">
                <li>{t('디스플레이')}</li>
                <li>{t('카메라')}</li>
                <li>NFC</li>
                <li>{t('감열 프린터')}</li>
                <li>{t('키오스크 제어 장치')}</li>
              </ul>
            </li>
            <li className="system-link">
              <div className="system-link__path" aria-hidden="true"><Arrow /></div>
              <div className="system-link__copy">
                <p>{t('사용자 · 체험 연결')}</p>
              </div>
            </li>
            <li className="system-device">
              <p className="eyebrow">02 / INTERACTION</p>
              <h3 className="system-device__title">Smart Mirror</h3>
              <p className="system-device__role">{t('상황 제시 · 대화 입력 · 피드백과 음성 출력 구상')}</p>
              <ul className="system-device__parts">
                <li>{t('미러 디스플레이')}</li>
                <li>{t('깊이 센서')}</li>
                <li>{t('마이크 어레이')}</li>
                <li>NFC</li>
                <li>{t('스피커')}</li>
                <li>{t('전용 PC')}</li>
              </ul>
            </li>
          </ol>
        </Reveal></details>

        <p className="scope-note system-section__scope">{t('공개된 프로젝트 코드를 기준으로 정리했습니다. 이 소개 페이지에서 음성·영상을 수집하거나 AI 분석을 실행하지 않습니다. 운영 관리 화면은 독립된 예시 데모입니다.')}</p>

        <details className="compact-disclosure"><summary>{t('입력과 4-Fit 분석의 관계')}<span className="disclosure-plus" aria-hidden="true" /></summary><div className="system-feedback" aria-labelledby="system-feedback-heading">
          <div className="system-feedback__heading"><div><p className="section-kicker">{t('입력에서 피드백으로')}</p><h3 id="system-feedback-heading">{t('입력과 4-Fit 분석의 관계')}</h3></div><p className="body-copy">{t('현재 분석 경로의 입력과 돌아볼 내용을 정리했습니다. 시선 측정은 사용하지 않으며, 참고값과 미측정 상태를 구분합니다.')}</p></div>
          <dl className="system-feedback__list">
            {feedbackInputs.map(([name, label, input, reflection]) => <div key={name}><dt><strong lang="en">{name}</strong>{language === 'ko' && <span>{label}</span>}</dt><dd><div><span>{t('입력 · 맥락')}</span><p>{input}</p></div><div><span>{t('돌아볼 내용')}</span><p>{reflection}</p></div></dd></div>)}
          </dl>
          <div className="section-end"><p className="scope-note">{t('센서 입력과 해석은 별도 단계입니다. 음성 인식, 표정·신체 분석, 모델과 판단 기준은 실제 동작 검증이 필요합니다.')}</p><a className="text-link" href={sitePage(`four-fit/`)}>{t('4-Fit 설명과 대화 예시 보기')}</a></div>
        </div></details>

        <details className="hardware-details">
          <summary id="hardware-details">
            <span>{t('하드웨어 구성 자세히 보기')}</span>
            <span className="hardware-details__toggle" aria-hidden="true" />
          </summary>
          <div className="hardware-details__content">
            <p className="scope-note hardware-details__note">{t('아래는 프로젝트에서 사용한다고 제공된 하드웨어 목록입니다. 각 기능의 구현 완료를 의미하지 않습니다.')}</p>
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
              <h3>{t('도안에서 확인한 장치 배치')}</h3>
              <p className="scope-note">{t('상단 중앙 카메라와 왼쪽 마이크, 우측 NFC, 후면 PC BOX, 하단 두 스피커와 이동식 베이스의 배치를 표현했습니다. 도안 수치는 프레임 폭 890 mm, 바닥부터 상단까지 1705 mm, 베이스 950 × 600 mm입니다. 최종 제작 치수와 설치 상태를 보증하지 않습니다.')}</p>
              <h3 className="hardware-references__spec-heading">{t('제조사 공개 사양과 설계 역할')}</h3>
              <p className="scope-note">{t('제조사가 공개한 장비 사양입니다. 실제 분석 성능이나 프로젝트에서 활성화된 기능을 의미하지 않습니다.')}</p>
              <dl>{hardwareReferences.map(item => <div key={item.name}><dt>{item.name}</dt><dd><p>{item.fact}</p><a href={item.url} target="_blank" rel="noreferrer">{item.source}</a></dd></div>)}</dl>
            </div>
          </div>
        </details>
      </div>
    </section>
  );
}
