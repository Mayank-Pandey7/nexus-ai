import React, { useState } from 'react';

interface MakeupTryonViewProps {
  onBackToHome: () => void;
}

const MakeupTryonView: React.FC<MakeupTryonViewProps> = ({ onBackToHome }) => {
  const [activeTab, setActiveTab] = useState<'Lipstick' | 'Blush' | 'Eyeshadow'>('Lipstick');

  const tabVideos = {
    Lipstick: 'https://stagingmedia.pointai.com/assets/media/makeup-lipstick.mov',
    Blush: 'https://stagingmedia.pointai.com/assets/media/makeup-blush.mov',
    Eyeshadow: 'https://stagingmedia.pointai.com/assets/media/makeup-eyeshadow.mov',
  };

  const processes = [
    {
      title: "Shade Mapping",
      copy: "We analyze your beauty catalog, extract shade information, and prepare products for accurate virtual try-on across lipstick, foundation, blush, and other makeup categories.",
      index: "01/03",
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
          <circle cx="11" cy="11" r="6"></circle>
          <path d="m16 16 5 5" strokeLinecap="round"></path>
        </svg>
      )
    },
    {
      title: "Experience Tuning",
      copy: "We calibrate color rendering, skin-tone matching, and user journeys while customizing the experience to align with your brand and product range.",
      index: "02/03",
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
          <path fill="currentColor" d="M13 2 4 14h7l-1 8 9-12h-7l1-8z"></path>
        </svg>
      )
    },
    {
      title: "Integration & Launch",
      copy: "We integrate the solution into your web and mobile platforms, support rollout, and provide analytics to track engagement, conversions, and product performance.",
      index: "03/03",
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 3c2 4 4 6 7 7-3 1-5 3-7 7m0-14v4m-3-1 3 1M5 19l2-2m10 2 2-2"></path>
        </svg>
      )
    }
  ];

  return (
    <div className="home-page makeup-root tab-pop-in">
      {/* Hero Section */}
      <section className="makeup-hero makeup-hero--screen-top" aria-labelledby="makeup-hero-heading">
        <video 
          className="makeup-hero-video" 
          src="https://stagingmedia.pointai.com/assets/media/makeup-hero.mp4" 
          autoPlay 
          muted 
          loop 
          playsInline 
          preload="auto"
        />
        <div className="makeup-hero-scrim" aria-hidden="true" />
        <div className="makeup-hero-ui">
          {/* Header Row / Back button */}
          <div className="home-container makeup-hero-header-row" style={{ padding: '6.5rem 2rem 0', zIndex: 10 }}>
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

          <div className="makeup-hero-inner" style={{ marginTop: 'auto', marginBottom: 'auto' }}>
            <h1 id="makeup-hero-heading" className="makeup-hero-title">
              Makeup <span className="makeup-hero-title-accent">Try-on</span>
            </h1>
            <p className="makeup-hero-subtitle">
              True-to-tone shades placed on every face — computer vision and real-time rendering reproduce the exact gloss, finish, and undertone of the actual product on the customer’s own skin.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Switcher Section */}
      <section id="makeup-tryon" className="makeup-tryon-section" aria-labelledby="makeup-tryon-heading">
        <div className="home-container makeup-tryon-inner">
          <div className="makeup-tryon-layout">
            {/* Phone Visual Frame */}
            <div className="makeup-tryon-phone" aria-hidden="true">
              <div className="makeup-tryon-phone-frame">
                {Object.entries(tabVideos).map(([key, videoUrl]) => (
                  <video 
                    key={key}
                    className={`makeup-tryon-phone-video ${activeTab === key ? 'makeup-tryon-phone-video--active' : ''}`} 
                    src={videoUrl} 
                    autoPlay 
                    muted 
                    loop 
                    playsInline 
                    preload="auto"
                  />
                ))}
              </div>
            </div>

            {/* Content & Tab Buttons */}
            <div className="makeup-tryon-copy">
              <div className="makeup-tryon-tabs" role="tablist" aria-label="Makeup categories">
                <button 
                  type="button" 
                  role="tab" 
                  aria-selected={activeTab === 'Lipstick'} 
                  className={`makeup-tryon-tab ${activeTab === 'Lipstick' ? 'makeup-tryon-tab--active' : ''}`}
                  onClick={() => setActiveTab('Lipstick')}
                >
                  Lipstick
                </button>
                <button 
                  type="button" 
                  role="tab" 
                  aria-selected={activeTab === 'Blush'} 
                  className={`makeup-tryon-tab ${activeTab === 'Blush' ? 'makeup-tryon-tab--active' : ''}`}
                  onClick={() => setActiveTab('Blush')}
                >
                  Blush
                </button>
                <button 
                  type="button" 
                  role="tab" 
                  aria-selected={activeTab === 'Eyeshadow'} 
                  className={`makeup-tryon-tab ${activeTab === 'Eyeshadow' ? 'makeup-tryon-tab--active' : ''}`}
                  onClick={() => setActiveTab('Eyeshadow')}
                >
                  Eyeshadow
                </button>
              </div>
              <h2 id="makeup-tryon-heading" className="makeup-tryon-title">
                Makeup Virtual <span className="makeup-accent">Try-on</span>
              </h2>
              <p className="makeup-tryon-body">
                Lipstick, eyeshadow, foundation, and more — placed on the customer’s own face in real time, with true-to-product shade and finish, right inside the browser.
              </p>
              <a 
                href="#makeup-ipad-heading" 
                className="makeup-tryon-cta"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('makeup-ipad-heading')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Experience Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo mirroring section */}
      <section className="makeup-ipad-section" aria-labelledby="makeup-ipad-heading">
        <div className="home-container makeup-ipad-inner">
          <h2 id="makeup-ipad-heading" className="makeup-ipad-title">
            Anywhere, Anytime Virtual <span className="makeup-accent">Makeup Try-on</span>
          </h2>
          <p className="makeup-ipad-lead">
            One engine that runs in your web store, mobile app, and in-store smart mirror — same shades, same fidelity, no extra device or download required from the customer.
          </p>
          <div className="makeup-ipad-visual">
            <iframe 
              src="https://makeup.tryndbuy.com/makeup-ui2/makeup-ui2.html#/vm" 
              title="PointAI virtual makeup try-on interactive demo" 
              className="makeup-ipad-iframe" 
              loading="lazy" 
              allow="camera; microphone; accelerometer; gyroscope; fullscreen" 
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Process implementation steps */}
      <section className="makeup-process-section" aria-labelledby="makeup-process-heading">
        <div className="makeup-process-inner">
          <div className="makeup-process-intro">
            <h2 id="makeup-process-heading" className="makeup-process-title">
              Bring your <span className="makeup-accent">Experience to Life</span>
            </h2>
            <p className="makeup-process-body">
              From beauty catalog onboarding to live AR makeup experiences, we ship a production-ready try-on solution into your platform — tuned to your range and integrated with your existing stack.
            </p>
          </div>
          <div className="makeup-process-rail" aria-label="Delivery phases">
            {processes.map((proc, index) => (
              <article key={index} className="makeup-process-card reveal-hover-lift">
                <span className="makeup-process-card-icon" aria-hidden="true">
                  {proc.icon}
                </span>
                <h3 className="makeup-process-card-title">{proc.title}</h3>
                <p className="makeup-process-card-copy">{proc.copy}</p>
                <footer className="makeup-process-card-footer">
                  <span className="makeup-process-card-index">{proc.index}</span>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MakeupTryonView;
