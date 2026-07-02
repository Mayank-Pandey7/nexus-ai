import React from 'react';
const sdkAndroidIos = '/assets/images/SDK-android-ios.png';
const sdkBrowsers = '/assets/images/SDK-browsers.png';

const Pricing: React.FC = () => {
  return (
    <section className="journey-section" aria-labelledby="journey-heading">
      <div className="journey-inner">
        <h2 id="journey-heading" className="journey-heading" data-reveal="true">
          Start Your <span className="journey-heading-highlight">AI Journey</span>
        </h2>
        <div className="journey-grid" data-reveal-stagger="true">
          <article className="journey-card reveal-hover-lift" data-reveal-item="true">
            <div className="journey-card-icons" aria-hidden="true">
              <img src={sdkAndroidIos} alt="Mobile SDKs" className="journey-card-icons-image journey-card-icons-image-left" />
            </div>
            <h3 className="journey-card-title">Mobile SDKs</h3>
            <p className="journey-card-text">Cross-platform mobile SDKs designed for rapid and seamless client-side integrations.</p>
          </article>
          
          <article className="journey-card reveal-hover-lift" data-reveal-item="true">
            <div className="journey-card-icons" aria-hidden="true">
              <img src={sdkBrowsers} alt="Web Plugins" className="journey-card-icons-image" />
            </div>
            <h3 className="journey-card-title">Web Plugins</h3>
            <p className="journey-card-text">Web plugins designed for smooth integration with modern front-end stacks.</p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
