import React from 'react';
const automobileBanner = '/assets/images/automobile-banner.jpg';

const HowItWorks: React.FC = () => {
  return (
    <section className="automobile-section" aria-labelledby="automobile-heading">
      <div className="automobile-banner-visual">
        <img 
          src={automobileBanner} 
          alt="Nexus AI smart enterprise technology platform" 
          className="automobile-banner-image" 
          loading="lazy" 
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} 
        />
        <div className="automobile-banner-vignette" aria-hidden="true"></div>
      </div>
      <div className="automobile-banner-content" data-reveal="true">
        <h2 id="automobile-heading" className="automobile-kicker">
          AI for <span className="automobile-kicker-highlight">Enterprise Retail</span>
        </h2>
        <div className="automobile-banner-bottom modelling-bottom">
          <h3 className="modelling-headline">Revolutionizing Industries with Smart Tech.</h3>
          <p className="modelling-body">
            Nexus AI breaks boundaries by moving from traditional, reactive approaches to proactive, data-driven, and intelligent systems. We integrate IoT, AI, and AR to transform your core retail and enterprise operations.
          </p>
          <div className="home-section-cta-wrap">
            <a className="home-cta-button automobile-cta-button" href="#">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
