import { t } from '../../i18n';
import { ProductFrame } from '../../components/ProductFrame/ProductFrame';
import { Reveal } from '../../components/Reveal/Reveal';
import { copy } from '../../data/content';
import { media } from '../../data/media';
import '../../styles/products.css';

export function IdKiosk() {
  return (
    <section id="kiosk" className="kiosk-section" tabIndex={-1} aria-labelledby="kiosk-title">
      <div className="container kiosk-section__grid">
        <Reveal className="kiosk-section__content">
          <p className="section-kicker">ID Card Kiosk</p>
          <h2 id="kiosk-title" className="section-title">{t('미러 앞에 서기 전,')}<br /><span>{t('키오스크에서 시작합니다.')}</span></h2>
          <p className="body-copy">{t('미러 앞에 서기 전, 키오스크에서 체험을 시작합니다. 안내 화면과 카메라, NFC, 프린터를 갖춘 입구 장치로 설계했습니다.')}</p>

        </Reveal>
        <Reveal className="kiosk-section__visual"><span className="product-stage-label" aria-hidden="true">{t('01 / 체험의 입구')}</span><ProductFrame kind="kiosk" media={media.kiosk} /></Reveal>
        <Reveal className="kiosk-section__details">
          <dl className="kiosk-section__features">
            <div><dt>{t('화면과 카메라')}</dt><dd>{t('체험 안내와 등록을 위한 입력 구성입니다.')}</dd></div>
            <div><dt>NFC</dt><dd>{t('등록과 미러 체험을 연결하기 위한 구성입니다.')}</dd></div>
            <div><dt>{t('감열 프린터')}</dt><dd>{t('체험 출력물을 인쇄하기 위한 구성입니다.')}</dd></div>
          </dl>
          <div className="kiosk-section__detail"><span>{t('출력물과 NFC는 서로 다른 구성입니다.')}</span><p>{copy.kiosk.scope}</p></div>
        </Reveal>
      </div>
    </section>
  );
}
