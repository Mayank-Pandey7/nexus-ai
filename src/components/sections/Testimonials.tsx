import React from 'react';
import mlElevate from '../../assets/images/mlelevate.jpeg';
import patents from '../../assets/images/patents.jpg';
import innovation from '../../assets/images/innovation.jpg';

const Testimonials: React.FC = () => {
  return (
    <section className="showcase-section awards-section" aria-labelledby="awards-heading">
      <div className="showcase-card awards-showcase-card">
        <video className="showcase-video showcase-video-right" src="/assets/media/awards.mp4" autoPlay muted loop playsInline preload="auto" disablePictureInPicture controlsList="nodownload nofullscreen noplaybackrate"></video>
        <div className="awards-sparkles" aria-hidden="true"></div>
        <div className="showcase-content" data-reveal="true">
          <h2 id="awards-heading" className="showcase-heading awards-showcase-heading">What makes us the <span className="showcase-highlight">Best?</span></h2>
          <p className="showcase-subtext awards-showcase-subtext">Our innovative, patented technology has received global acclaim and is trusted by partners around the world.</p>
        </div>
      </div>
      
      <div className="awards-cards-panel">
        <div className="awards-cards-inner">
          <div className="awards-cards" data-reveal-stagger="true">
            <article className="awards-card reveal-hover-lift" data-reveal-item="true">
              <div className="awards-card-top">
                <div className="awards-card-icon-frame">
                  <img src={mlElevate} alt="AWS ML Elevate 2023: Generative AI Edition" className="awards-icon-mlelevate" />
                </div>
              </div>
              <h3 className="awards-card-title">MLelevate Generative AI</h3>
              <p className="awards-card-meta">Version 2023</p>
              <p className="awards-card-text">Top AI company from India &amp; Korea.</p>
            </article>
            
            <article className="awards-card reveal-hover-lift" data-reveal-item="true">
              <div className="awards-card-top">
                <div className="awards-card-icon-frame">
                  <img src={patents} alt="70+ Granted Patents Globally" className="awards-icon-mlelevate" />
                </div>
              </div>
              <h3 className="awards-card-title">70+ Granted Patents Globally</h3>
              <p className="awards-card-meta">US, China, Korea &amp; India.</p>
              <p className="awards-card-text">Coverage spans virtual try-on, generative cataloging, and spatial commerce—giving you room to innovate while our IP backs the roadmap.</p>
            </article>
            
            <article className="awards-card reveal-hover-lift" data-reveal-item="true">
              <div className="awards-card-top">
                <div className="awards-card-icon-frame">
                  <img src={innovation} alt="Innovation of the Year 2020" className="awards-icon-mlelevate" />
                </div>
              </div>
              <h3 className="awards-card-title">Innovation of the Year 2020</h3>
              <p className="awards-card-text awards-card-text-single">Awarded for “the most advanced virtual try-on room in the world” by <strong className="awards-card-em">Amazon</strong>.</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
