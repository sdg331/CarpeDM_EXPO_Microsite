import { t } from '../i18n';
import { developmentDirections } from '../data/development';
import { sitePage } from '../data/paths';
import './Development.css';

export function Development({ detailed = false }: { detailed?: boolean }) {
  if (!detailed) return <section id="development" className="development development--compact" tabIndex={-1} aria-labelledby="development-title"><div className="container development__compact"><div><p className="section-kicker">{t('다음 발전 방향 · 제안')}</p><h2 id="development-title">{t('더 나은 연습을 준비합니다.')}</h2><p>{t('교육 기준 · 음성 입출력 · 피드백 검증')}</p></div><a className="text-link" href={sitePage(`system/#system-future`)}>{t('발전 방향 보기')}</a></div></section>;
  return <section id="development" className={`development${detailed ? ' development--detailed' : ''}`} tabIndex={-1} aria-labelledby="development-title">
    <div className="container">
      <div className="development__heading"><p className="section-kicker">{t('다음 발전 방향 · 제안')}</p><h2 id="development-title">{t('어떻게 더 발전시킬까요?')}</h2><p>{t('기존 연습과 분석을 보강하기 위해 검토할 발전안입니다.')}</p></div>
      <div className="development__list">{developmentDirections.map(direction => detailed ?
        <details key={direction.title}><summary><span>{direction.title}</span><span className="disclosure-plus" aria-hidden="true" /></summary><div className="development__detail"><p>{direction.detail}</p><dl><dt>{t('검토할 기술')}</dt><dd>{direction.technology}</dd><dt>{t('적용 전 확인할 것')}</dt><dd>{direction.validation}</dd></dl><a className="text-link" href={direction.source} target="_blank" rel="noopener noreferrer">{direction.sourceLabel}<span className="sr-only">{t(' (새 탭)')}</span></a></div></details>
        : <article key={direction.title}><h3>{direction.title}</h3><p>{direction.summary}</p></article>
      )}</div>
    </div>
  </section>;
}
