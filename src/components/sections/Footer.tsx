import React from 'react';
const nexusaiLogoWhiteSparkle = '/assets/images/nexusai-logo-white-sparkle.png';

// Import partner logos for the partners section
const amazonSpn = '/assets/images/partners/amazon-spn.png';
const myntra = '/assets/images/partners/myntra.png';
const flipkart = '/assets/images/partners/flipkart.png';
const zivame = '/assets/images/partners/zivame.png';
const rakuten = '/assets/images/partners/rakuten.png';
const peterEngland = '/assets/images/partners/peter-england.png';
const vanHeusen = '/assets/images/partners/van-heusen.png';
const allenSolly = '/assets/images/partners/allen-solly.png';
const afrl = '/assets/images/partners/afrl.png';

const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      {/* 1. Partners Section */}
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

      {/* 2. Meta Links Section */}
      <section className="site-footer-meta">
        <div className="site-footer-inner">
          <div className="site-footer-columns" data-reveal-stagger="true">
            <div className="site-footer-brand" data-reveal-item="true">
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
                <img src={nexusaiLogoWhiteSparkle} alt="Nexus AI logo" style={{ width: '2.25rem', height: '2.25rem', objectFit: 'contain' }} />
                <span className="logo-text-bold" style={{ fontFamily: 'var(--font-inter-tight), sans-serif', fontWeight: 700, fontSize: '1.35rem', color: '#ffffff', letterSpacing: '-0.02em' }}>Nexus AI</span>
              </div>
              <p className="site-footer-brand-text">AI Platform for e-commerce to generate<br />media, try-on and AI services.</p>
            </div>
            
            <div className="site-footer-col" data-reveal-item="true">
              <h3>Social</h3>
              <a target="_blank" rel="noopener noreferrer" href="https://x.com/maynkio">X</a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mynkdev/">LinkedIn</a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/mayank__pandeyy/">Instagram</a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/mayank__pandeyy/">Facebook</a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@Nomad.Mayank">YouTube</a>
            </div>
            
            <div className="site-footer-col" data-reveal-item="true">
              <h3>Legal</h3>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms &amp; Conditions</a>
            </div>
            
            <div className="site-footer-col site-footer-contact-col" data-reveal-item="true">
              <h3>Contact</h3>
              <p>1614 A-B, Bhagwanpur,<br />Block, Haldwani<br />Uttarakhand, India 201309</p>
              <a href="mailto:mayankpandey0717@gmail.com">mayankpandey0717@gmail.com</a>
            </div>
          </div>
          <div className="site-footer-bottom">© 2026 Nexus AI. All rights reserved.</div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
