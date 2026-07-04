import React from 'react';
const automobileBanner = '/assets/images/automobile-banner.jpg';

const HowItWorks: React.FC = () => {
  return (
    <section className="automobile-section" aria-labelledby="automobile-heading">
      <div className="automobile-banner-visual">
        <img 
          src={automobileBanner} 
          alt="Trialshopy smart enterprise technology platform" 
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
          <h3 className="modelling-headline" style={{ color: '#ffffff', textShadow: '0 1px 6px rgba(0,0,0,0.75), 0 3px 20px rgba(0,0,0,0.55)' }}>Revolutionizing Industries with Smart Tech.</h3>
          <p className="modelling-body">
            TrialShopy is breaking boundaries by moving from traditional, reactive approaches to proactive, data-driven, and intelligent systems. We integrate IoT, AI, and AR to transform your core operations.
          </p>
          <div className="home-section-cta-wrap">
            <a className="home-cta-button automobile-cta-button" href="https://nexus-ai-mayank.vercel.app/fashion-ecommerce-ai">Explore</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;


