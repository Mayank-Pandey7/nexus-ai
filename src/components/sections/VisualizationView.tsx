import React, { useState } from 'react';

interface VisualizationViewProps {
  onBackToHome: () => void;
}

const VisualizationView: React.FC<VisualizationViewProps> = ({ onBackToHome }) => {
  const [topIndex, setTopIndex] = useState(0);

  const showcaseItems = [
    {
      src: "https://stagingmedia.pointai.com/assets/images/3d-images/escooter.png",
      label: "3D experience preview — studio scene",
      title: "E-Scooter"
    },
    {
      src: "https://stagingmedia.pointai.com/assets/images/3d-images/guitar.png",
      label: "3D experience preview — product render",
      title: "Guitar"
    },
    {
      src: "https://stagingmedia.pointai.com/assets/images/3d-images/Gshock.png",
      label: "3D experience preview — environment",
      title: "G-Shock Watch"
    },
    {
      src: "https://stagingmedia.pointai.com/assets/images/3d-images/GolfBag.png",
      label: "3D experience preview — mix and match",
      title: "Golf Bag"
    },
    {
      src: "https://stagingmedia.pointai.com/assets/images/3d-images/phone.png",
      label: "3D experience preview — innovation lab",
      title: "Smartphone"
    }
  ];

  return (
    <div className="home-page visualization-root w-full tab-pop-in">
      {/* Hero Section */}
      <section className="visualization-hero visualization-hero--screen-top" aria-labelledby="visualization-hero-heading">
        <div className="visualization-hero-media">
          <video 
            className="visualization-hero-video" 
            src="https://stagingmedia.pointai.com/assets/media/3d-banner.mp4" 
            autoPlay 
            muted 
            loop 
            playsInline 
            preload="auto" 
            disablePictureInPicture 
            controlsList="nodownload nofullscreen noplaybackrate"
          />
          <div className="visualization-hero-scrim" aria-hidden="true"></div>
        </div>

        <div className="visualization-hero-ui">
          {/* Navigation Bar back link */}
          <div className="home-container" style={{ padding: '6.5rem 1.5rem 0', display: 'flex', justifyContent: 'flex-start', zIndex: 10 }}>
            <button 
              onClick={onBackToHome}
              className="home-cta-button"
              style={{ 
                background: 'rgba(255, 255, 255, 0.08)', 
                backdropFilter: 'blur(8px)', 
                color: '#ffffff',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '0.65rem 1.25rem',
                fontSize: '0.85rem',
                fontWeight: 600,
                borderRadius: '999px',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.25s',
                zIndex: 10
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--secondary-color)';
                e.currentTarget.style.borderColor = 'transparent';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
              }}
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              Back to Home
            </button>
          </div>

          <div className="visualization-hero-inner home-container">
            <h1 id="visualization-hero-heading" className="visualization-hero-title">
              <span className="visualization-hero-title-prefix">AI for </span>
              <span className="visualization-hero-title-accent">3D Visualization</span>
            </h1>
            <p className="visualization-hero-subtitle">
              Build fast with no code, create bespoke with low code—high-fidelity twins, scene editing, and performance that holds up on the web.
            </p>
          </div>
        </div>
      </section>

      {/* Bento Grid */}
      <section className="visualization-bento" aria-label="3D visualization capabilities">
        <div className="home-container visualization-bento-inner">
          <div className="visualization-bento-group">
            {/* Large Card: Watch */}
            <article className="visualization-bento-card visualization-bento-card--large visualization-bento-card--purple reveal-hover-lift" data-reveal="true">
              <div className="visualization-bento-card-top">
                <h2 className="visualization-bento-heading">Interactive 3D that responds in real time — explore, configure, and customize every angle right in the browser.</h2>
                <p className="visualization-bento-stat" aria-label="100 times faster">
                  3<span className="visualization-bento-stat-x">D</span>
                </p>
              </div>
              <div className="visualization-bento-media visualization-bento-media--editor">
                <div className="visualization-touch-surface visualization-bento-glb-wrap visualization-bento-glb-wrap--editor">
                  <iframe 
                    src="https://i3d.pointai.in/combined/iframes/watch-analog/watch_analog3.html?id=Analog_golden_IWC_watch&transparent=1" 
                    title="Interactive 3D watch preview" 
                    className="visualization-bento-glb visualization-bento-glb--editor" 
                    allow="camera; gyroscope; accelerometer; magnetometer; xr-spatial-tracking; fullscreen; autoplay" 
                    allowFullScreen 
                    loading="lazy"
                  />
                </div>
              </div>
            </article>

            {/* Duo cards */}
            <div className="visualization-bento-duo" data-reveal-stagger="true">
              {/* Card 1: Easy to integrate */}
              <article className="visualization-bento-card visualization-bento-card--small visualization-bento-card--blue reveal-hover-lift" data-reveal-item="true">
                <h3 className="visualization-bento-heading visualization-bento-heading--sm">Easy to integrate</h3>
                <div className="visualization-bento-media visualization-bento-media--shapes">
                  <div className="visualization-touch-surface visualization-bento-glb-wrap visualization-bento-glb-wrap--shapes">
                    <iframe 
                      src="https://i3d.pointai.in/combined/iframes/ar-3d/ar-3d-v9.html?id=Google_Pixel_10_Pro&scale=0.035" 
                      title="Interactive Pixel 10 Pro 3D preview" 
                      className="visualization-bento-glb visualization-bento-glb--shapes" 
                      allow="camera; gyroscope; accelerometer; magnetometer; xr-spatial-tracking; fullscreen; autoplay" 
                      allowFullScreen 
                      loading="lazy"
                    />
                  </div>
                </div>
              </article>

              {/* Card 2: Highest Quality Performance */}
              <article className="visualization-bento-card visualization-bento-card--medium visualization-bento-card--coral reveal-hover-lift" data-reveal-item="true">
                <div className="visualization-bento-card-top visualization-bento-card-top--row">
                  <h3 className="visualization-bento-heading visualization-bento-heading--sm">Highest Quality Performance on Web</h3>
                  <p className="visualization-bento-stat visualization-bento-stat--sm" aria-label="90 percent">
                    90<span className="visualization-bento-stat-pct">%</span>
                  </p>
                </div>
                <div className="visualization-bento-media visualization-bento-media--product">
                  <div className="visualization-touch-surface visualization-bento-glb-wrap visualization-bento-glb-wrap--shapes">
                    <iframe 
                      src="https://i3d.pointai.in/combined/iframes/ar-3d/ar-3d-v9.html?id=SundayRedShoes&scale=1.5" 
                      title="Interactive Shoe 3D preview" 
                      className="visualization-bento-glb visualization-bento-glb--shapes" 
                      allow="camera; gyroscope; accelerometer; magnetometer; xr-spatial-tracking; fullscreen; autoplay" 
                      allowFullScreen 
                      loading="lazy"
                    />
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Showcase / Card Deck */}
      <section className="visualization-showcase" aria-label="3D experience previews">
        <div className="visualization-showcase-stage" data-deck-ready="true" style={{ '--deck-progress': 1, '--deck-count': 5 } as React.CSSProperties}>
          {showcaseItems.map((item, idx) => {
            const deckIndex = (idx - topIndex + 5) % 5;
            const isTop = idx === topIndex ? 1 : 0;
            return (
              <button 
                key={idx}
                type="button" 
                className="visualization-showcase-panel" 
                style={{ 
                  '--deck-index': deckIndex, 
                  '--deck-count': 5, 
                  '--deck-is-top': isTop 
                } as React.CSSProperties} 
                aria-label={`Open 3D preview: ${item.label}`} 
                onClick={() => setTopIndex(idx)}
              >
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className="visualization-showcase-img" 
                  loading="lazy" 
                  decoding="async" 
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                />
              </button>
            );
          })}
        </div>
      </section>

      {/* Process / Delivery Phases */}
      <section className="visualization-process-section" aria-labelledby="visualization-process-heading">
        <div className="visualization-process-inner">
          <div className="visualization-process-intro" data-reveal="true">
            <h2 id="visualization-process-heading" className="visualization-process-title">
              From Assets to <span className="visualization-process-title-accent">Live 3D</span>
            </h2>
            <p className="visualization-process-body">
              Transform how customers experience your products with high-fidelity 3D visualization they can explore and interact with in real time—spin, configure, and inspect every detail live in the browser before they buy.
            </p>
          </div>

          <div className="visualization-process-rail" aria-label="Delivery phases" data-reveal-stagger="true">
            <article className="visualization-process-card reveal-hover-lift" data-reveal-item="true">
              <span className="visualization-process-card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
                  <circle cx="11" cy="11" r="6" fill="none" stroke="currentColor" strokeWidth="1.6"></circle>
                  <path d="m16 16 5 5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"></path>
                </svg>
              </span>
              <h3 className="visualization-process-card-title">3D Asset Gathering</h3>
              <p className="visualization-process-card-copy">
                We collect product imagery and reference materials, then build and refine production-ready 3D models—finalizing geometry, materials, textures, and scene details to match your brand standards.
              </p>
              <footer className="visualization-process-card-footer">
                <span className="visualization-process-card-index">01/03</span>
              </footer>
            </article>

            <article className="visualization-process-card reveal-hover-lift" data-reveal-item="true">
              <span className="visualization-process-card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
                  <path fill="currentColor" d="M13 2 4 14h7l-1 8 9-12h-7l1-8z"></path>
                </svg>
              </span>
              <h3 className="visualization-process-card-title">Interactive 3D Viewer</h3>
              <p className="visualization-process-card-copy">
                We deliver a polished, real-time 3D viewer with orbit controls, configurators, AR placement, and web-native performance tuned for smooth interaction across devices.
              </p>
              <footer className="visualization-process-card-footer">
                <span className="visualization-process-card-index">02/03</span>
              </footer>
            </article>

            <article className="visualization-process-card reveal-hover-lift" data-reveal-item="true">
              <span className="visualization-process-card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
                  <path fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M12 3c2 4 4 6 7 7-3 1-5 3-7 7m0-14v4m-3-1 3 1M5 19l2-2m10 2 2-2"></path>
                </svg>
              </span>
              <h3 className="visualization-process-card-title">Deployment</h3>
              <p className="visualization-process-card-copy">
                We integrate and launch the experience into your website or client application—handling SDK setup, performance optimization, and a production-ready rollout your team can scale.
              </p>
              <footer className="visualization-process-card-footer">
                <span className="visualization-process-card-index">03/03</span>
              </footer>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisualizationView;
