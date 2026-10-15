import { t } from '../../i18n';
import { ProductFrame } from '../../components/ProductFrame/ProductFrame';
import { Reveal } from '../../components/Reveal/Reveal';
import { media } from '../../data/media';
import '../../styles/products.css';

export function SmartMirror() {
  return (
    <section id="mirror" className="mirror-section" tabIndex={-1} aria-labelledby="mirror-title">
      <div className="container mirror-section__grid">
        <Reveal className="mirror-section__content">
          <p className="section-kicker">Smart Mirror</p>
          <h2 id="mirror-title" className="section-title">{t('직장 대화를 연습하는')}<br /><span>{t('스마트 미러.')}</span></h2>
          <p className="body-copy">{t('화면에 나온 상황에 말로 답하고 거울에 비친 내 모습을 봅니다. 대화와 자기 모습을 한 자리에서 마주하도록 설계한 장치입니다.')}</p>

        </Reveal>
        <Reveal className="mirror-section__visual"><span className="product-stage-label" aria-hidden="true">{t('02 / 역할극의 무대')}</span><ProductFrame kind="mirror" media={media.mirror} /></Reveal>
        <Reveal className="mirror-section__details">
          <dl className="mirror-section__features">
            <div><dt>{t('상황을 마주하기')}</dt><dd>{t('세로 화면에 대화 상황을 보여주는 역할입니다.')}</dd></div>
            <div><dt>{t('나를 돌아보기')}</dt><dd>{t('표정과 자세를 살피기 위한 컬러·깊이 입력입니다.')}</dd></div>
            <div><dt>{t('말로 이어가기')}</dt><dd>{t('마이크와 스피커로 질문과 응답을 이어가려는 설계입니다.')}</dd></div>
          </dl>
          <p className="scope-note mirror-section__scope">{t('장치의 의도한 역할을 소개합니다. 실제 인식·분석·음성 연동은 검증이 필요합니다.')}</p>
        </Reveal>
      </div>
    </section>
  );
}
