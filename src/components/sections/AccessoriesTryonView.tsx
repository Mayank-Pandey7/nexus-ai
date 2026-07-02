import React from 'react';

interface AccessoriesTryonViewProps {
  onBackToHome: () => void;
}

const AccessoriesTryonView: React.FC<AccessoriesTryonViewProps> = ({ onBackToHome }) => {
  const processes = [
    {
      title: "Asset Preparation",
      copy: "We onboard and optimize your eyewear and watch assets for accurate AR placement and realistic visualization.",
      index: "01/03",
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
          <circle cx="11" cy="11" r="6" fill="none" stroke="currentColor" strokeWidth="1.6"></circle>
          <path d="m16 16 5 5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"></path>
        </svg>
      )
    },
    {
      title: "Fit Calibration",
      copy: "We fine-tune sizing, positioning, and tracking across face and wrist to ensure a natural try-on experience across devices.",
      index: "02/03",
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
          <path fill="currentColor" d="M13 2 4 14h7l-1 8 9-12h-7l1-8z"></path>
        </svg>
      )
    },
    {
      title: "Integration & Launch",
      copy: "We integrate the experience into your web and mobile platforms, support rollout, and provide analytics to measure engagement, try-ons, and conversions.",
      index: "03/03",
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
          <path fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M12 3c2 4 4 6 7 7-3 1-5 3-7 7m0-14v4m-3-1 3 1M5 19l2-2m10 2 2-2"></path>
        </svg>
      )
    }
  ];

  return (
    <div className="home-page accessories-root tab-pop-in">
      {/* Hero Section */}
      <section className="accessories-hero accessories-hero--screen-top" aria-labelledby="accessories-hero-heading">
        <div className="accessories-hero-ui">
          {/* Header Row / Back button */}
          <div className="home-container accessories-hero-header-row" style={{ padding: '6.5rem 2rem 0', zIndex: 10 }}>
            <button 
              onClick={onBackToHome}
              style={{ 
                background: 'rgba(255, 255, 255, 0.85)', 
                border: '1px solid rgba(0, 0, 0, 0.08)', 
                borderRadius: '999px',
                color: '#1a1c20', 
                fontWeight: 600, 
                fontSize: '0.9rem', 
                cursor: 'pointer', 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.6rem',
                padding: '0.6rem 1.4rem',
                transition: 'background 0.2s, transform 0.2s',
                boxShadow: '0 4px 12px rgba(0,0,0,0.06)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#ffffff';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.85)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              Back to Home
            </button>
          </div>

          <div className="accessories-hero-inner" style={{ marginTop: 'auto', marginBottom: 'auto' }}>
            <h1 id="accessories-hero-heading" className="accessories-hero-title">
              Accessories <span className="accessories-hero-title-accent">Try-on</span>
            </h1>
            <p className="accessories-hero-subtitle">
              Instantly visualize watches and eyewear with precision. Photorealistic materials and accurate placement create a true-to-life experience that feels as real as wearing the product itself.
            </p>
          </div>
        </div>
      </section>

      {/* Eyewear section */}
      <section id="accessories-eyewear" className="accessories-feature accessories-feature--image-right" aria-labelledby="accessories-eyewear-heading">
        <div className="home-container accessories-feature-inner">
          <div className="accessories-feature-copy">
            <h2 id="accessories-eyewear-heading" className="accessories-feature-title">
              Realistic Eyewear <span className="accessories-accent">Try-on</span>
            </h2>
            <p className="accessories-feature-body">
              Experience every frame with accurate fit, natural lens effects, and true-to-life realism—on any device.
            </p>
          </div>
          <div className="accessories-feature-visual">
            <img 
              src="https://stagingmedia.pointai.com/assets/images/eyewear.png" 
              alt="Three models wearing virtual eyewear" 
              className="accessories-feature-image" 
            />
          </div>
        </div>
      </section>

      {/* Watch section */}
      <section id="accessories-watch" className="accessories-feature accessories-feature--image-left" aria-labelledby="accessories-watch-heading">
        <div className="home-container accessories-feature-inner">
          <div className="accessories-feature-copy">
            <h2 id="accessories-watch-heading" className="accessories-feature-title">
              Premium Watch <span className="accessories-accent">Try-on</span>
            </h2>
            <p className="accessories-feature-body">
              Bring every timepiece to life with an authentic wrist try-on experience.
            </p>
          </div>
          <div className="accessories-feature-visual">
            <img 
              src="https://stagingmedia.pointai.com/assets/images/watch.png" 
              alt="Wrist try-on preview" 
              className="accessories-feature-image" 
            />
          </div>
        </div>
      </section>

      {/* Implementation Process Card Section */}
      <section className="accessories-process-section" aria-labelledby="accessories-process-heading">
        <div className="accessories-process-inner">
          <div className="accessories-process-intro">
            <h2 id="accessories-process-heading" className="accessories-process-title">
              From Assets to <span className="accessories-accent">Live Try-on</span>
            </h2>
            <p className="accessories-process-body">
              From product catalogs to live AR engagement, we power eyewear and watch try-on experiences — seamlessly integrated into your customer journey on any device.
            </p>
          </div>
          <div className="accessories-process-rail" aria-label="Delivery phases">
            {processes.map((proc, index) => (
              <article key={index} className="accessories-process-card reveal-hover-lift">
                <span className="accessories-process-card-icon" aria-hidden="true">
                  {proc.icon}
                </span>
                <h3 className="accessories-process-card-title">{proc.title}</h3>
                <p className="accessories-process-card-copy">{proc.copy}</p>
                <footer className="accessories-process-card-footer">
                  <span className="accessories-process-card-index">{proc.index}</span>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccessoriesTryonView;
