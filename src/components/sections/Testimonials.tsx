import React from 'react';
const mlElevate = '/assets/images/mlelevate.jpeg';
const patents = '/assets/images/patents.jpg';
const innovation = '/assets/images/innovation.jpg';

const Testimonials: React.FC = () => {
  return (
    <section className="showcase-section awards-section" aria-labelledby="awards-heading">
      <div className="showcase-card awards-showcase-card">
        <video className="showcase-video showcase-video-right" src="/assets/media/awards.mp4" autoPlay muted loop playsInline preload="auto" disablePictureInPicture controlsList="nodownload nofullscreen noplaybackrate"></video>
        <div className="awards-sparkles" aria-hidden="true"></div>
        <div className="showcase-content" data-reveal="true">
          <h2 id="awards-heading" className="showcase-heading awards-showcase-heading">What makes us <span className="showcase-highlight">Different?</span></h2>
          <p className="showcase-subtext awards-showcase-subtext">Nexus AI is breaking boundaries by integrating IoT, AI, and AR to transform core retail and enterprise operations — moving from reactive to proactive, data-driven, and intelligent systems.</p>
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
              <h3 className="awards-card-title">AR Try-On Technology</h3>
              <p className="awards-card-meta">Computer Vision + AI</p>
              <p className="awards-card-text">Pixel-accurate augmented reality try-on for fashion, accessories, and retail products. Customers see before they buy — reducing returns and boosting confidence.</p>
            </article>
            
            <article className="awards-card reveal-hover-lift" data-reveal-item="true">
              <div className="awards-card-top">
                <div className="awards-card-icon-frame">
                  <img src={patents} alt="70+ Granted Patents Globally" className="awards-icon-mlelevate" />
                </div>
              </div>
              <h3 className="awards-card-title">Enterprise IoT Integration</h3>
              <p className="awards-card-meta">5,000+ IoT Deployments</p>
              <p className="awards-card-text">Custom hardware sensor connectivity, plant monitoring, and cloud data processing for SCADA and industrial automation — 5K+ deployments and counting.</p>
            </article>
            
            <article className="awards-card reveal-hover-lift" data-reveal-item="true">
              <div className="awards-card-top">
                <div className="awards-card-icon-frame">
                  <img src={innovation} alt="Innovation of the Year 2020" className="awards-icon-mlelevate" />
                </div>
              </div>
              <h3 className="awards-card-title">AI-Driven Analytics</h3>
              <p className="awards-card-text awards-card-text-single">Predictive analytics, demand forecasting, and real-time intelligence dashboards — trusted by <strong className="awards-card-em">40+ Happy Clients</strong> across industries.</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
