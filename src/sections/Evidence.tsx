import { useState } from 'react';
import { dashboardUrl, siteAsset } from '../data/paths';
import { sourceReview } from '../data/projectEvidence';

export function Evidence() {
  const [captureFailed, setCaptureFailed] = useState(false);

  return (
    <section id="evidence" className="story-section story-section--evidence" tabIndex={-1} aria-labelledby="evidence-title">
      <div className="container story-section__split">
        <div>
          <h2 id="evidence-title" className="section-title">공개 코드로 확인한 것.</h2>
        </div>
        <div className="story-section__body">
          <p className="body-copy">연습 모드, 대화 진행, 리포트 구조를 확인했습니다. 아래 링크에서 검토한 코드를 직접 볼 수 있습니다.</p>
        </div>
      </div>
      <div className="container evidence-sources">
        <div className="evidence-sources__heading"><span>{sourceReview.reviewedOn} 검토 · 링크는 확인한 코드 버전으로 연결됩니다.</span></div>
        <ol>{sourceReview.items.map((item, index) => <li key={item.path}><span aria-hidden="true">0{index + 1}</span><div><h3>{item.title}</h3><p>{item.description}</p><a className="text-link" href={`https://github.com/${sourceReview.repository}/blob/${sourceReview.commit}/${item.path}`} target="_blank" rel="noopener noreferrer">{item.action}<span className="sr-only"> (새 탭)</span></a></div></li>)}</ol>
        <p className="scope-note">특정 버전의 소스 구조를 확인한 기록입니다. 실물 장치의 연결과 분석 정확도·교육 효과를 검증한 결과와는 구분합니다.</p>
      </div>
      <details className="compact-disclosure container evidence-extra"><summary>실행 화면·설계 자료·운영 데모<span className="disclosure-plus" aria-hidden="true" /></summary>
      <dl className="evidence-list">
        <div><dt>설명 웹</dt><dd><strong>동작하는 설명 예시</strong><p>대화 상황 선택, 4-Fit 관점 전환, 스크롤 조립을 이 사이트에서 확인할 수 있습니다. 답변과 코칭은 직접 작성한 예시이며 AI 분석을 실행하지 않습니다.</p></dd></div>
        <div><dt>장치 시각자료</dt><dd><strong>설계 자료</strong><p>미러·카메라·오디오와 키오스크의 구성과 배치를 설명하는 시각자료입니다.</p></dd></div>
        <div><dt>체험 소개 UI</dt><dd><strong>로컬 실행 캡처</strong><p>아래 직장대화 소개 화면은 실행한 프런트엔드의 캡처입니다. 화면 속 답변·코칭·4-Fit 항목은 설명용 예시이며 실측 결과가 아닙니다.</p></dd></div>
        <div><dt>운영 화면</dt><dd><strong>팀 · 사원 운영 관리</strong><div><p>팀 구성과 사원 명부를 관리하고 체험 이력·4-Fit 리포트·장치와 출력 현황을 확인하는 별도 화면입니다. 샘플 워크스페이스로 실행되며 실제 사원 정보·장치 제어·분석 연동은 포함하지 않습니다.</p>{dashboardUrl && <a className="text-link evidence-list__demo" href={dashboardUrl} target="_blank" rel="noopener noreferrer" aria-label="운영 관리 둘러보기, 샘플 워크스페이스 (새 탭)">운영 관리 둘러보기</a>}</div></dd></div>
        <div><dt>실물 · 분석 연동</dt><dd><strong>검증 자료 필요</strong><p>실제 4-Fit 분석 결과, 등록·NFC·출력과 장치 간 연결은 확인되지 않았습니다. 완성 하드웨어 사진, 체험 영상과 기능별 연동 기록이 필요합니다.</p></dd></div>
      </dl>
      <figure id="evidence-capture" className="evidence-capture" tabIndex={-1}>
        {captureFailed ? (
          <div className="evidence-capture__fallback" role="img" aria-label="직장대화 소개 화면 캡처를 불러올 수 없습니다">직장대화 소개 화면 캡처를 불러올 수 없습니다.</div>
        ) : (
          <img src={siteAsset('media/workplace-ui-example.jpg')} alt="직장대화 소개 UI의 예시 질문, 답변, 코칭 노트와 네 가지 4-Fit 항목" width="1680" height="900" loading="lazy" decoding="async" onError={() => setCaptureFailed(true)} />
        )}
        <figcaption>로컬 개발 화면 캡처 · 답변과 코칭은 설명용 예시이며 실제 분석 결과가 아닙니다.</figcaption>
      </figure>
      </details>
    </section>
  );
}
