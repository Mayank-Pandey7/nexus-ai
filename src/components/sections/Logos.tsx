import React from 'react';
import amazonSpn from '../../assets/images/partners/amazon-spn.png';
import myntra from '../../assets/images/partners/myntra.png';
import flipkart from '../../assets/images/partners/flipkart.png';
import zivame from '../../assets/images/partners/zivame.png';
import rakuten from '../../assets/images/partners/rakuten.png';
import peterEngland from '../../assets/images/partners/peter-england.png';
import vanHeusen from '../../assets/images/partners/van-heusen.png';
import allenSolly from '../../assets/images/partners/allen-solly.png';
import afrl from '../../assets/images/partners/afrl.png';

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
