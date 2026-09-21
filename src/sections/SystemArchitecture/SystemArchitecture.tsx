import { Arrow } from '../../components/Arrow';
import { Reveal } from '../../components/Reveal/Reveal';
import { SectionHeading } from '../../components/SectionHeading/SectionHeading';
import { StatusNote } from '../../components/StatusNote';
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

export function SystemArchitecture() {
  return (
    <section id="system" className="section section--light system-section" tabIndex={-1} aria-labelledby="system-heading">
      <div className="container">
        <Reveal>
          <SectionHeading
            id="system-heading"
            label="SYSTEM"
            korean
            description="서로 다른 역할의 두 디바이스가 사용자 경험을 중심으로 연결됩니다."
          >
            두 디바이스를 연결하는<br />경험 구조.
          </SectionHeading>
        </Reveal>

        <Reveal>
          <StatusNote>
            통신 방식과 기능별 구현 상태는 확인이 필요하며, 아래 도식은 장치의 역할과 연결 방향을 설명합니다.
          </StatusNote>
        </Reveal>

        <Reveal className="system-diagram-wrap">
          <ol className="system-diagram">
            <li className="system-device">
              <p className="eyebrow">ID CARD KIOSK</p>
              <h3 className="system-device__title">Raspberry Pi 5</h3>
              <p className="system-device__role">체험 진입 · 사용자 연결</p>
              <ul className="system-device__parts">
                <li>디스플레이</li>
                <li>카메라</li>
                <li>NFC</li>
                <li>감열 프린터</li>
              </ul>
            </li>
            <li className="system-link">
              <div className="system-link__path" aria-hidden="true"><Arrow /></div>
              <div className="system-link__copy">
                <p className="eyebrow">IDENTITY /<br />EXPERIENCE LINK</p>
                <p>사용자와 체험을<br />잇는 연결 개념</p>
              </div>
            </li>
            <li className="system-device">
              <p className="eyebrow">SMART MIRROR SYSTEM</p>
              <h3 className="system-device__title">Windows PC</h3>
              <p className="system-device__role">메인 인터랙션</p>
              <ul className="system-device__parts">
                <li>미러 디스플레이</li>
                <li>깊이 센서</li>
                <li>마이크 어레이</li>
                <li>NFC</li>
                <li>스피커</li>
              </ul>
            </li>
          </ol>
        </Reveal>

        <details className="hardware-details">
          <summary>
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
          </div>
        </details>
      </div>
    </section>
  );
}
