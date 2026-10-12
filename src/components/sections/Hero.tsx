import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="drft-hero-section">
      {/* Background Image Container */}
      <div className="drft-hero-bg-container">
        <img
          src="/hero_lifestyle_v3.webp"
          alt="DRFT DEON - A New Standard in Streetwear"
          className="drft-hero-img"
          loading="eager"
        />
        <div className="drft-hero-overlay" />
      </div>

      {/* Hero Content Overlay */}
      <div className="drft-hero-content-wrapper">
        <div className="drft-hero-text-block">
          <h1 className="drft-hero-headline">
            A NEW<br />
            STANDARD<br />
            IN<br />
            STREETWEAR
          </h1>

          <p className="drft-hero-tagline">
            ELEVATING EVERYDAY ESSENTIALS
          </p>

          <div className="drft-hero-cta-wrapper">
            <a href="/fashion-ecommerce-ai" className="drft-hero-cta-btn">
              SHOP THE DROP
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
