import { t } from '../i18n';
import { useState } from 'react';
import { workplaceMoments } from '../data/experience';
import { dashboardUrl, sitePage } from '../data/paths';
import { applications, practiceModes } from '../data/useCases';
import './UseCases.css';
import { PageTabs } from '../components/PageTabs/PageTabs';

export function UseCases({ detailed = false }: { detailed?: boolean }) {
  const [selected, setSelected] = useState(() => Math.max(0, applications.findIndex(item => item.id === new URLSearchParams(window.location.search).get('context'))));
  const application = applications[selected]!;

  if (!detailed) return (
    <section id="home-uses" className="use-overview" tabIndex={-1} aria-labelledby="home-uses-title">
      <div className="container use-overview__layout">
        <div><p className="section-kicker">{t('활용 제안')}</p><h2 id="home-uses-title" className="section-title">{t('어디에 쓰일까요?')}</h2><p className="body-copy">{t('대학에서, 회사에서, 팀 안에서.')}</p></div>
        <div className="use-overview__list">{applications.map((item, index) => <a href={sitePage(`use-cases/?context=${item.id}#uses-education`)} key={item.title}><span className="use-overview__number" aria-hidden="true">0{index + 1}</span><div><h3>{item.title}</h3><p>{item.summary}</p></div></a>)}</div>
      </div>
    </section>
  );

  return <PageTabs label={t('활용 소개 주제')} initialId={new URLSearchParams(window.location.search).has('context') ? 'uses-education' : 'uses-practice'} tabs={[
    { id: 'uses-practice', label: t('연습 종류'), description: t('어떤 질문을 연습하고 싶은지, 세 가지 모드에서 찾아보세요.'), content:
    <section id="use-expansion" className="use-expansion" tabIndex={-1} aria-labelledby="use-expansion-title">
      <div className="container"><div className="use-detail__section-head"><h2 id="use-expansion-title">{t('내가 마주할 장면부터.')}</h2><p>{t('면접·직업훈련·직장대화로 구성했습니다.')}</p></div><div className="use-expansion__grid">{practiceModes.map(mode => <article key={mode.title}><h3>{mode.title}</h3><blockquote>{mode.question}</blockquote><p>{mode.description}</p><dl className="use-mode-focus"><dt>{t('연습할 것')}</dt><dd>{mode.focus}</dd></dl></article>)}</div><p className="scope-note use-detail__scope">{t('질문은 연습 장면을 설명하는 예시입니다. 모드는 공개 코드에서 확인했으며, 실물 장치 연동과 분석 정확도·교육 효과는 별도 검증 항목입니다.')}</p></div>
    </section>
    }, { id: 'uses-education', label: t('교육 활용'), description: t('대상과 장소를 고르면 상황·진행 순서·준비할 내용을 볼 수 있어요.'), content: <>
    <section id="use-cases" className="use-detail" tabIndex={-1} aria-labelledby="uses-title">
      <div className="container">
        <div className="use-detail__intro"><div><p className="section-kicker">{t('활용 제안')}</p><h2 id="uses-title" className="section-title">{t('어디서, 누구와')}<br /><span>{t('연습할까요?')}</span></h2></div><p className="body-copy">{t('직장 대화가 필요한 세 가지 장면입니다.')}<br />{t('교육 장소와 대상에 맞춰 활용을 제안합니다.')}</p></div>
        <div className="use-contexts"><label htmlFor="use-context">{t('활용 장면')}</label><select id="use-context" value={selected} onChange={event => setSelected(Number(event.target.value))}>{applications.map((item, index) => <option key={item.id} value={index}>{item.title}</option>)}</select></div>
        <div id="use-application" className="use-application" aria-live="polite" aria-atomic="true">
          <div className="use-application__question"><p className="section-kicker">{application.place}</p><h3>{application.question}</h3><p>{application.audience}</p></div>
          <div className="use-application__copy"><p>{application.description}</p><dl><dt>{t('연습 후 돌아볼 것')}</dt><dd>{application.focus}</dd></dl></div>
        </div>
        <p className="scope-note use-detail__scope">{t('작품의 활용 제안입니다. 실제 도입 사례나 교육 효과를 검증한 결과는 아닙니다.')}</p>
      </div>
    </section>

    <section id="use-guide" className="use-guide" tabIndex={-1} aria-labelledby="use-guide-title">
      <div className="container">
        <div className="use-guide__heading"><p className="section-kicker">{application.title}{t(' · 교육 활용안')}</p><h2 id="use-guide-title">{application.title}{t('에')}<br /><span>{t('적용해 보기.')}</span></h2><p>{application.purpose}</p></div>

        <details className="use-guide__block">
          <summary>{t('연습할 상황 3가지')}<span className="disclosure-plus" aria-hidden="true" /></summary>
          <ol className="use-guide__situations">{application.situations.map(situation => <li key={situation.title}><h4>{situation.title}</h4><blockquote>{situation.question}</blockquote><p>{situation.description}</p></li>)}</ol>
        </details>

        <details className="use-guide__block">
          <summary>{t('교육에 넣는 순서')}<span className="disclosure-plus" aria-hidden="true" /></summary>
          <p className="use-guide__note">{t('미러 체험과 교육자의 설명을 함께 진행하는 예시입니다. 실제 장치·분석·결과 연결은 검증이 필요합니다.')}</p>
          <ol className="use-guide__steps">{application.steps.map(step => <li key={step.title}><h4>{step.title}</h4><p>{step.description}</p></li>)}</ol>
        </details>

        <details className="use-guide__block">
          <summary>{t('4-Fit으로 돌아볼 질문')}<span className="disclosure-plus" aria-hidden="true" /></summary>
          <p className="use-guide__note">{t('스스로 또는 교육자와 살펴볼 질문입니다. 실제 AI 분석 결과가 아니며, 표정과 자세로 성격이나 역량을 단정하지 않습니다.')}</p>
          <dl className="use-guide__reflections">{application.reflections.map(reflection => <div key={reflection.perspective}><dt>{t(reflection.perspective)}</dt><dd>{reflection.question}</dd></div>)}</dl>
        </details>

        <details className="use-guide__block">
          <summary>{t('연습 뒤에 남길 것')}<span className="disclosure-plus" aria-hidden="true" /></summary>
          <dl className="use-guide__outcomes"><div><dt>{t('학습자가 정리할 내용')}</dt><dd>{application.takeaway}</dd></div><div><dt>{t('교육자와 확인할 내용')}</dt><dd>{application.educatorCheck}</dd></div></dl>
        </details>

        <details className="use-guide__block">
          <summary>{t('교육 전에 준비할 것')}<span className="disclosure-plus" aria-hidden="true" /></summary><p>{application.preparation}</p>
        </details>

        <details className="use-guide__block">
          <summary>{t('더 발전시킬 부분')}<span className="disclosure-plus" aria-hidden="true" /></summary>
          <p className="use-guide__note">{t('추가로 검토할 기능과 기술입니다. 현재 기능에 포함됐다는 의미는 아닙니다.')}</p><p>{application.development}</p>
        </details>
      </div>
    </section>
    <section id="use-scenarios" className="use-scenarios" tabIndex={-1} aria-labelledby="use-scenarios-title">
      <div className="container">
        <div className="use-detail__section-head"><h2 id="use-scenarios-title">{t('이런 말을 연습합니다.')}</h2><p>{t('보고와 질문, 실수 설명과 의견 조율의 예시입니다.')}</p></div>
        <details className="use-examples"><summary>{t('대화 예시 읽기')}<span className="disclosure-plus" aria-hidden="true" /></summary><div className="use-scenarios__grid">{workplaceMoments.map(moment => <article key={moment.title} className="use-scenario"><h3>{moment.title}</h3><div className="use-scenario__body"><blockquote>{moment.question}</blockquote><p>{moment.answer}</p><div className="use-scenario__focus"><span>{t('연습 포인트')}</span><p>{moment.focus}</p></div></div></article>)}</div></details>
        <p className="scope-note use-detail__scope">{t('직접 작성한 설명용 대화입니다. 실제 AI 응답이나 분석 결과가 아닙니다.')}</p>
      </div>
    </section>

    </> }, { id: 'uses-operations', label: t('운영 화면'), description: t('교육을 운영하는 사람의 화면을 예시 데이터로 둘러보세요.'), content:
    <section id="use-dashboard" className="use-dashboard" tabIndex={-1} aria-labelledby="use-dashboard-title">
      <div className="container use-dashboard__layout"><div><p className="section-kicker">{t('교육 운영 화면')}</p><h2 id="use-dashboard-title">{t('연습하는 사람과')}<br />{t('운영하는 사람을 위해.')}</h2><p className="body-copy">{t('참여자와 팀별 체험 기록을 살펴보는 운영 화면도 준비했습니다.')}</p>{dashboardUrl && <a className="text-link" href={dashboardUrl} target="_blank" rel="noopener noreferrer" aria-label={t('운영 화면 데모 보기 (새 탭)')}>{t('운영 화면 데모 보기')}</a>}</div><div><dl><div><dt>{t('팀별 현황')}</dt><dd>{t('팀을 비교하고 확인할 항목을 찾습니다.')}</dd></div><div><dt>{t('구성원과 체험 이력')}</dt><dd>{t('예시 참여자와 대화 연습 기록을 살펴봅니다.')}</dd></div></dl><p className="scope-note">{t('예시 데이터로 만든 독립된 데모입니다. 실제 직원 정보·AI 분석·장치와 연결되지 않으며 변경 사항은 현재 브라우저에 저장됩니다.')}</p></div></div>
    </section>

    },
  ]} />;
}
