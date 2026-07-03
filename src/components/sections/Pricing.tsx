import React from 'react';
const sdkAndroidIos = '/assets/images/SDK-android-ios.png';
const sdkBrowsers = '/assets/images/SDK-browsers.png';

const Pricing: React.FC = () => {
  return (
    <section className="journey-section" aria-labelledby="journey-heading">
      <div className="journey-inner">
        <h2 id="journey-heading" className="journey-heading" data-reveal="true">
          Start Your <span className="journey-heading-highlight">Digital Journey</span>
        </h2>
        <div className="journey-grid" data-reveal-stagger="true">
          <article className="journey-card reveal-hover-lift" data-reveal-item="true">
            <div className="journey-card-icons" aria-hidden="true">
              <img src={sdkAndroidIos} alt="Mobile App" className="journey-card-icons-image journey-card-icons-image-left" />
            </div>
            <h3 className="journey-card-title">Mobile App</h3>
            <p className="journey-card-text">Cross-platform iOS & Android app for AR try-on experiences, smart shopping, and real-time enterprise monitoring on the go.</p>
          </article>
          
          <article className="journey-card reveal-hover-lift" data-reveal-item="true">
            <div className="journey-card-icons" aria-hidden="true">
              <img src={sdkBrowsers} alt="Web Platform" className="journey-card-icons-image" />
            </div>
            <h3 className="journey-card-title">Web Platform</h3>
            <p className="journey-card-text">Full-featured web dashboard for enterprise management, AR integrations, analytics, and seamless deployment across modern browsers.</p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
