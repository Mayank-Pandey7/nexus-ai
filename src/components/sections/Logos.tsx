import React from 'react';
const amazonSpn = '/assets/images/partners/amazon-spn.png';
const myntra = '/assets/images/partners/myntra.png';
const flipkart = '/assets/images/partners/flipkart.png';
const zivame = '/assets/images/partners/zivame.png';
const rakuten = '/assets/images/partners/rakuten.png';
const peterEngland = '/assets/images/partners/peter-england.png';
const vanHeusen = '/assets/images/partners/van-heusen.png';
const allenSolly = '/assets/images/partners/allen-solly.png';
const afrl = '/assets/images/partners/afrl.png';

const Logos: React.FC = () => {
  return (
    <section className="site-footer-partners" aria-label="Trusted by leading brands">
      <div className="site-footer-inner site-footer-partners-inner">
        <p className="site-footer-partners-label" data-reveal="true">Trusted by the<br />world's best</p>
        <div className="site-footer-partners-marquee" data-reveal="true">
          <div className="site-footer-partners-track">
            <span className="site-footer-partner-logo-wrap">
              <img src={amazonSpn} alt="Amazon SPN" className="site-footer-partner-logo" style={{ filter: 'none' }} />
            </span>
            <span className="site-footer-partner-logo-wrap">
              <img src={myntra} alt="Myntra" className="site-footer-partner-logo" style={{ filter: 'none' }} />
            </span>
            <span className="site-footer-partner-logo-wrap">
              <img src={flipkart} alt="Flipkart" className="site-footer-partner-logo" style={{ filter: 'none' }} />
            </span>
            <span className="site-footer-partner-logo-wrap">
              <img src={zivame} alt="Zivame" className="site-footer-partner-logo" style={{ filter: 'none' }} />
            </span>
            <span className="site-footer-partner-logo-wrap">
              <img src={rakuten} alt="Rakuten" className="site-footer-partner-logo" style={{ filter: 'none' }} />
            </span>
            <span className="site-footer-partner-logo-wrap">
              <img src={peterEngland} alt="Peter England" className="site-footer-partner-logo" style={{ filter: 'none' }} />
            </span>
            <span className="site-footer-partner-logo-wrap">
              <img src={vanHeusen} alt="Van Heusen" className="site-footer-partner-logo" style={{ filter: 'none' }} />
            </span>
            <span className="site-footer-partner-logo-wrap">
              <img src={allenSolly} alt="Allen Solly" className="site-footer-partner-logo" style={{ filter: 'none' }} />
            </span>
            <span className="site-footer-partner-logo-wrap">
              <img src={afrl} alt="AFRL" className="site-footer-partner-logo" style={{ filter: 'none' }} />
            </span>
            
            {/* Duplicated track for infinite scroll marquee */}
            <span className="site-footer-partner-logo-wrap" aria-hidden="true">
              <img src={amazonSpn} alt="Amazon SPN" className="site-footer-partner-logo" style={{ filter: 'none' }} />
            </span>
            <span className="site-footer-partner-logo-wrap" aria-hidden="true">
              <img src={myntra} alt="Myntra" className="site-footer-partner-logo" style={{ filter: 'none' }} />
            </span>
            <span className="site-footer-partner-logo-wrap" aria-hidden="true">
              <img src={flipkart} alt="Flipkart" className="site-footer-partner-logo" style={{ filter: 'none' }} />
            </span>
            <span className="site-footer-partner-logo-wrap" aria-hidden="true">
              <img src={zivame} alt="Zivame" className="site-footer-partner-logo" style={{ filter: 'none' }} />
            </span>
            <span className="site-footer-partner-logo-wrap" aria-hidden="true">
              <img src={rakuten} alt="Rakuten" className="site-footer-partner-logo" style={{ filter: 'none' }} />
            </span>
            <span className="site-footer-partner-logo-wrap" aria-hidden="true">
              <img src={peterEngland} alt="Peter England" className="site-footer-partner-logo" style={{ filter: 'none' }} />
            </span>
            <span className="site-footer-partner-logo-wrap" aria-hidden="true">
              <img src={vanHeusen} alt="Van Heusen" className="site-footer-partner-logo" style={{ filter: 'none' }} />
            </span>
            <span className="site-footer-partner-logo-wrap" aria-hidden="true">
              <img src={allenSolly} alt="Allen Solly" className="site-footer-partner-logo" style={{ filter: 'none' }} />
            </span>
            <span className="site-footer-partner-logo-wrap" aria-hidden="true">
              <img src={afrl} alt="AFRL" className="site-footer-partner-logo" style={{ filter: 'none' }} />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logos;
