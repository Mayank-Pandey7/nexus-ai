import React from 'react';
const automobileBanner = '/assets/images/automobile-banner.jpg';

const HowItWorks: React.FC = () => {
  return (
    <section className="automobile-section" aria-labelledby="automobile-heading">
      <div className="automobile-banner-visual">
        <img 
          src={automobileBanner} 
          alt="Off-road vehicle on a vast salt flat" 
          className="automobile-banner-image" 
          loading="lazy" 
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} 
        />
        <div className="automobile-banner-vignette" aria-hidden="true"></div>
      </div>
      <div className="automobile-banner-content" data-reveal="true">
        <h2 id="automobile-heading" className="automobile-kicker">
          AI for <span className="automobile-kicker-highlight">Automobiles</span>
        </h2>
        <div className="automobile-banner-bottom modelling-bottom">
          <h3 className="modelling-headline">Experience Every Vehicle Before You Drive It.</h3>
          <p className="modelling-body">
            Interactive configurators, AI-powered guidance, and digital vehicle experiences that turn curiosity into purchase confidence.
          </p>
          <div className="home-section-cta-wrap">
            <a className="home-cta-button automobile-cta-button" href="#">Explore</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
