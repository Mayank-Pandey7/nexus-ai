import React, { useState } from 'react';

interface AutomobileViewProps {
  onBackToHome: () => void;
}

const AutomobileView: React.FC<AutomobileViewProps> = ({ onBackToHome }) => {
  const [activeColor, setActiveColor] = useState('vermillion');

  // Color map for paint swatches
  const colorMap: Record<string, { name: string; hex: string; splineId: string }> = {
    green: {
      name: "British Racing Green",
      hex: "#0e5c38",
      splineId: "https://my.spline.design/carconfigurator-1f251c6c59b20757a3e5c9b7dd154562/" // Placeholder or direct scene
    },
    vermillion: {
      name: "Vermillion",
      hex: "#ac2525",
      splineId: "https://3d-interactive.zailaf.net/website-3d-assets/car-project"
    },
    blue: {
      name: "Cobalt Blue",
      hex: "#1d3f8c",
      splineId: ""
    },
    onyx: {
      name: "Onyx",
      hex: "#1f1f1f",
      splineId: ""
    },
    brown: {
      name: "Espresso Brown",
      hex: "#4a2818",
      splineId: ""
    }
  };

  return (
    <div className="home-page automobile-root w-full tab-pop-in">
      {/* Hero Section */}
      <section className="automobile-hero automobile-hero--screen-top" aria-labelledby="automobile-hero-heading">
        <div className="automobile-hero-media">
          <iframe 
            className="automobile-hero-frame" 
            src="https://3d-interactive.zailaf.net/website-3d-assets/car-project" 
            title="Interactive automotive 3D scene" 
            allow="autoplay; fullscreen" 
            loading="eager"
            style={{ border: 'none', width: '100%', height: '100%' }}
          />
          <div className="automobile-hero-scrim" aria-hidden="true"></div>
        </div>

        <div className="automobile-hero-ui">
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

          <div className="automobile-hero-inner home-container">
            <h1 id="automobile-hero-heading" className="automobile-hero-title">
              <span className="automobile-hero-title-prefix">AI for </span>
              <span className="automobile-hero-title-accent">Automobiles</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Real-time Configurator Showcase Section */}
      <section className="automobile-showcase" aria-labelledby="automobile-showcase-heading">
        <div className="automobile-showcase-sticky">
          <div className="automobile-showcase-viewer" role="img" aria-label="Interactive 3D car model" style={{ transform: 'translate(0px, 0px)' }}>
            <iframe 
              src={`https://3d-interactive.zailaf.net/website-3d-assets/car-project?color=${activeColor}`} 
              title="Interactive 3D configurator scene" 
              allow="autoplay; fullscreen" 
              style={{ border: 'none', width: '100%', height: '100%' }}
            />
          </div>
          
          <div className="automobile-showcase-inner">
            <h2 id="automobile-showcase-heading" className="automobile-showcase-heading">
              Configure your drive <span className="automobile-showcase-accent">in real time</span>
            </h2>
            <p className="automobile-showcase-body">
              Photo-real environments, instant material swaps, and lifelike lighting — drag to spin the car and explore every angle.
            </p>
          </div>

          <div className="automobile-showcase-swatches" role="radiogroup" aria-label="Body paint color">
            {Object.entries(colorMap).map(([key, details]) => (
              <button 
                key={key}
                type="button" 
                role="radio" 
                aria-checked={activeColor === key} 
                aria-label={details.name} 
                title={details.name} 
                className={`automobile-showcase-swatch ${activeColor === key ? 'automobile-showcase-swatch--active' : ''}`}
                style={{ backgroundColor: details.hex }}
                onClick={() => setActiveColor(key)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process / Life Showroom Timeline */}
      <section className="automobile-process" aria-labelledby="automobile-process-heading">
        <div className="automobile-process-inner">
          <div className="automobile-process-copy">
            <h2 id="automobile-process-heading" className="automobile-process-heading">
              Bring your <span className="automobile-process-heading-accent">Experience to Life</span>
            </h2>
            <p className="automobile-process-body">
              From discovery to a live showroom moment, we ship interactive 3D, voice, and configurator features on your own inventory — grounded in real cars and ready for production traffic.
            </p>
          </div>

          <div className="automobile-process-scroll" role="list" aria-label="Engagement process">
            <article className="automobile-process-card" role="listitem">
              <span className="automobile-process-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="11" cy="11" r="7"></circle>
                  <path d="m20 20-3.5-3.5"></path>
                </svg>
              </span>
              <h3 className="automobile-process-card-title">Discover &amp; Scope</h3>
              <p className="automobile-process-card-body">
                Align on problems, data reality, and success metrics. Opportunity brief, KPI model, phased roadmap, effort/cost ranges.
              </p>
              <div className="automobile-process-card-footer">
                <span className="automobile-process-duration">3-7 days</span>
                <span className="automobile-process-count" aria-hidden="true">
                  <strong>01</strong><em>/03</em>
                </span>
              </div>
            </article>

            <article className="automobile-process-card" role="listitem">
              <span className="automobile-process-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z"></path>
                </svg>
              </span>
              <h3 className="automobile-process-card-title">Prototype</h3>
              <p className="automobile-process-card-body">
                De-risk unknowns and validate value quickly. Clickable UX, tech spike repo, initial eval rubric, demo.
              </p>
              <div className="automobile-process-card-footer">
                <span className="automobile-process-duration">1-2 weeks</span>
                <span className="automobile-process-count" aria-hidden="true">
                  <strong>02</strong><em>/03</em>
                </span>
              </div>
            </article>

            <article className="automobile-process-card" role="listitem">
              <span className="automobile-process-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 15c0-5 4-9 9-9 1 0 2 .1 3 .3.2 1 .3 2 .3 3 0 5-4 9-9 9-1 0-2-.1-3-.3-.2-1-.3-2-.3-3Z"></path>
                  <path d="M5 15c-1.5 1.5-2 4-2 6 2 0 4.5-.5 6-2"></path>
                  <circle cx="14" cy="10" r="1.5" fill="currentColor"></circle>
                </svg>
              </span>
              <h3 className="automobile-process-card-title">Build &amp; Launch</h3>
              <p className="automobile-process-card-body">
                Production-ready integration with monitoring, evals, and guardrails. Ship to pilot, iterate on real signals.
              </p>
              <div className="automobile-process-card-footer">
                <span className="automobile-process-duration">4-6 weeks</span>
                <span className="automobile-process-count" aria-hidden="true">
                  <strong>03</strong><em>/03</em>
                </span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Voice Assistant Section */}
      <section className="automobile-voice" aria-labelledby="automobile-voice-heading">
        <div className="automobile-voice-inner">
          <header className="automobile-voice-header">
            <h2 id="automobile-voice-heading" className="automobile-voice-heading">
              AI <span className="automobile-voice-heading-accent">Voice Assistant</span>
            </h2>
            <p className="automobile-voice-body">
              An always-on voice concierge that books test drives, answers spec questions, and walks shoppers through every model — trained on your inventory, brand voice, and dealer policies.
            </p>
          </header>

          <div className="automobile-voice-grid">
            <div className="automobile-voice-hero">
              <img 
                src="https://stagingmedia.pointai.com/assets/images/automobile-banner-image.jpg" 
                alt="AI voice assistant for automotive experiences" 
                className="automobile-voice-hero-image"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            
            <ul className="automobile-voice-features">
              <li className="automobile-voice-feature">
                <div className="automobile-voice-feature-copy">
                  <h3 className="automobile-voice-feature-title">Shortlist Cars</h3>
                  <p className="automobile-voice-feature-body">
                    Customers describe their dream drive in their own words — the assistant filters your live inventory and surfaces the right shortlist in seconds.
                  </p>
                </div>
              </li>
              <li className="automobile-voice-feature">
                <div className="automobile-voice-feature-copy">
                  <h3 className="automobile-voice-feature-title">Book Appointments</h3>
                  <p className="automobile-voice-feature-body">
                    Conversational scheduling across test drives, service slots, and dealer visits — no forms, no waiting.
                  </p>
                </div>
              </li>
              <li className="automobile-voice-feature">
                <div className="automobile-voice-feature-copy">
                  <h3 className="automobile-voice-feature-title">Purchase Support</h3>
                  <p className="automobile-voice-feature-body">
                    Real-time pricing, finance options, and walkthroughs guided by a brand-safe voice agent your customers trust.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AutomobileView;
