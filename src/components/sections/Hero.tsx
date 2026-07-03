import React from 'react';
const heroBanner = '/assets/images/hero-banner-models.png';
const nexusaiLogo = '/assets/images/nexusai-logo-black.png';

const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="scroll-cue" aria-hidden="true">
        <span className="scroll-cue-text">Scroll for more</span>
        <span className="scroll-cue-line"></span>
      </div>
      <div 
        className="hero-copy" 
        style={{ animation: 'gentle-fade-in 1.5s cubic-bezier(0.16, 1, 0.3, 1) both' }}
      >
        <div className="hero-main-logo">
          <img src={nexusaiLogo} alt="Trialshopy logo" style={{ width: '12.5rem', height: '11.5rem', objectFit: 'contain', animation: 'logo-float 3s ease-in-out infinite' }} />
          <span className="logo-text-bold" style={{ fontFamily: 'var(--font-inter-tight), sans-serif', fontWeight: 700, fontSize: '2.5rem', color: 'var(--primary-color)', letterSpacing: '-0.02em' }}>Trialshopy</span>
        </div>
        <p className="hero-tagline">
          <span className="hero-tagline-accent">Smart AR Shopping Platform — Innovate. Transform. Grow.</span>
        </p>
      </div>
      <div 
        className="hero-image-wrapper" 
        style={{ 
          background: 'none', 
          boxShadow: 'none',
          animation: 'gentle-fade-in 1.5s cubic-bezier(0.16, 1, 0.3, 1) 0.18s both'
        }}
      >
        <img src={heroBanner} alt="Trialshopy AR shopping experience" className="hero-image" loading="eager" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>
    </section>
  );
};

export default Hero;
