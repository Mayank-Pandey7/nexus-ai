import React from 'react';

const Features: React.FC = () => {
  return (
    <section className="modelling-section">
      <div className="modelling-inner" data-reveal-stagger="true">
        <h2 className="fashion-heading modelling-heading" data-reveal-item="true">
          Real-Time <span className="fashion-heading-3D-highlight">3D Visualization</span>
        </h2>
      </div>
      <div className="modelling-viewer-wrap" data-reveal-item="true">
        <iframe 
          className="modelling-viewer-frame" 
          src="https://i3d.nexusai.in/website-3d-assets/hikeys-piano/index.html" 
          title="HiKeys Piano 3D experience" 
          loading="lazy" 
          allow="autoplay"
        ></iframe>
        <div className="modelling-hero-words modelling-hero-words-overlay">
          <span className="modelling-word modelling-word-back">3D</span>
          <span className="modelling-word modelling-word-front">Interactive</span>
        </div>
      </div>
      <div className="modelling-bottom" data-reveal="true">
        <h2 className="modelling-headline">Interact With Products, Not Pictures</h2>
        <p className="modelling-body">Give customers the freedom to explore products naturally before making a purchase.</p>
        <div className="home-section-cta-wrap">
          <a className="home-cta-button" href="#">Explore</a>
        </div>
      </div>
    </section>
  );
};

export default Features;
