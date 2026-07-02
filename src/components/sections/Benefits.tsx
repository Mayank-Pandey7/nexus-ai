import React from 'react';
import nexusaiLogo from '../../assets/images/nexusai-logo.png';

interface BenefitsProps {
  onKnowMore?: () => void;
}

const Benefits: React.FC<BenefitsProps> = ({ onKnowMore }) => {
  return (
    <section className="assistants-section" aria-labelledby="assistants-heading">
      <div className="assistants-inner">
        <h2 id="assistants-heading" className="assistants-title" data-reveal="true">
          AI for <span className="fashion-heading-highlight">Smart Assistance</span>
        </h2>
        
        <div className="assistants-hub" data-reveal-stagger="true">
          {/* Central Hub Badge styled like the mockup */}
          <div className="assistants-hub-badge" data-reveal-item="true">
            <div 
              className="assistants-badge" 
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.6rem', 
                padding: '1.1rem 2.2rem',
                background: 'linear-gradient(135deg, #f04e38 0%, #e53935 100%)',
                borderRadius: '1.25rem',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderBottom: '5px solid #b71c1c',
                boxShadow: '0 12px 35px rgba(240, 78, 56, 0.35), inset 0 1px rgba(255, 255, 255, 0.4)'
              }}
            >
              <img 
                src={nexusaiLogo} 
                alt="NexusAI logo" 
                style={{ width: '1.4rem', height: '1.4rem', objectFit: 'contain', filter: 'invert(1)' }} 
              />
              <span 
                className="logo-text-bold" 
                style={{ 
                  fontFamily: 'var(--font-inter-tight), sans-serif', 
                  fontWeight: 700, 
                  fontSize: '1.1rem', 
                  color: '#fff', 
                  letterSpacing: '-0.02em'
                }}
              >
                Nexus AI
              </span>
            </div>
          </div>
          
          {/* Left Cards */}
          <article className="assistants-card assistants-hub-card assistants-hub-card-l1 reveal-hover-lift" data-reveal-item="true">
            <div className="assistants-card-icon" aria-hidden="true" style={{ background: '#f5f5f7', border: '1px solid #e8e8ed', boxShadow: 'none' }}>
              <svg viewBox="0 0 24 24" width="22" height="22">
                <path fill="none" stroke="#1a1a1a" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M9 3h6v2H9V3zm3 17v2m4-13a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h10zm-9 10h14M8 21h8"></path>
              </svg>
            </div>
            <h3 className="assistants-card-title">Always-on Virtual Assistant</h3>
            <p className="assistants-card-text">A conversational concierge grounded in your catalog, brand book, and policies—answering questions, styling looks, and converting customers across web, app, and in-store.</p>
          </article>
          
          <div className="assistants-hub-spine assistants-hub-spine-left" aria-hidden="true">
            <svg className="assistants-spine-branch-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path className="assistants-spine-path assistants-spine-path-base assistants-spine-path-part-backbone" d="M 0 16 L 10 16 Q 50 16 50 29 L 50 71 Q 50 84 10 84 L 0 84"></path>
              <path className="assistants-spine-path assistants-spine-path-base assistants-spine-path-part-mid" d="M 0 50 L 100 50"></path>
              <path className="assistants-spine-path assistants-spine-path-flow assistants-spine-path-part-backbone" d="M 0 16 L 10 16 Q 50 16 50 29 L 50 71 Q 50 84 10 84 L 0 84"></path>
              <path className="assistants-spine-path assistants-spine-path-flow assistants-spine-path-part-mid" d="M 0 50 L 100 50"></path>
            </svg>
            <span className="assistants-spine-junction"></span>
          </div>
          
          <div className="assistants-hub-spine assistants-hub-spine-right" aria-hidden="true">
            <svg className="assistants-spine-branch-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path className="assistants-spine-path assistants-spine-path-base assistants-spine-path-part-backbone" d="M 100 16 L 90 16 Q 50 16 50 29 L 50 71 Q 50 84 90 84 L 100 84"></path>
              <path className="assistants-spine-path assistants-spine-path-base assistants-spine-path-part-mid" d="M 100 50 L 0 50"></path>
              <path className="assistants-spine-path assistants-spine-path-flow assistants-spine-path-part-backbone" d="M 100 16 L 90 16 Q 50 16 50 29 L 50 71 Q 50 84 90 84 L 100 84"></path>
              <path className="assistants-spine-path assistants-spine-path-flow assistants-spine-path-part-mid" d="M 100 50 L 0 50"></path>
            </svg>
            <span className="assistants-spine-junction"></span>
          </div>
          
          {/* Right Cards */}
          <article className="assistants-card assistants-hub-card assistants-hub-card-r1 reveal-hover-lift" data-reveal-item="true">
            <div className="assistants-card-icon" aria-hidden="true" style={{ background: '#f5f5f7', border: '1px solid #e8e8ed', boxShadow: 'none' }}>
              <svg viewBox="0 0 24 24" width="22" height="22">
                <circle cx={12} cy={9} r={3} fill="none" stroke="#1a1a1a" strokeWidth={1.5}></circle>
                <path fill="none" stroke="#1a1a1a" strokeWidth={1.5} strokeLinecap="round" d="M6 21v-1a6 6 0 0 1 12 0v1"></path>
                <path fill="none" stroke="#1a1a1a" strokeWidth={1.25} strokeLinecap="round" strokeLinejoin="round" d="M17.25 17.25v-.75l.53-.53a3 3 0 0 0 0-4.24l-.53-.53V11l-.75-.06a3 3 0 0 0-4.06-3.93L12 8l-.44-.93A3 3 0 0 0 7.5 11h-.06l-.75.53"></path>
              </svg>
            </div>
            <h3 className="assistants-card-title">FashionGPT Workspace</h3>
            <p className="assistants-card-text">A purpose-built creative workspace where merchandisers turn one prompt into a full campaign—moodboards, lookbooks, and PDP shots shipped in hours, not weeks.</p>
          </article>
          
          <article className="assistants-card assistants-hub-card assistants-hub-card-l2 reveal-hover-lift" data-reveal-item="true">
            <div className="assistants-card-icon" aria-hidden="true" style={{ background: '#f5f5f7', border: '1px solid #e8e8ed', boxShadow: 'none' }}>
              <svg viewBox="0 0 24 24" width="22" height="22">
                <path fill="none" stroke="#1a1a1a" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M9 5h-.5A2.5 2.5 0 0 0 6 7.5v12A2.5 2.5 0 0 0 8.5 22h7a2.5 2.5 0 0 0 2.5-2.5v-12A2.5 2.5 0 0 0 15.5 5H15M9 5a2 2 0 0 0 4 0M9 5h6M9 10h6M9 14h5"></path>
                <path fill="none" stroke="#1a1a1a" strokeWidth={1.5} strokeLinecap="round" d="m10 18 2 2 4-4"></path>
              </svg>
            </div>
            <h3 className="assistants-card-title">Catalogue Generation</h3>
            <p className="assistants-card-text">Spin up on-model, flat-lay, and lifestyle imagery for every SKU—auto-sized, cropped, and tagged so it slots straight into your PIM.</p>
          </article>
          
          <article className="assistants-card assistants-hub-card assistants-hub-card-r2 reveal-hover-lift" data-reveal-item="true">
            <div className="assistants-card-icon" aria-hidden="true" style={{ background: '#f5f5f7', border: '1px solid #e8e8ed', boxShadow: 'none' }}>
              <svg viewBox="0 0 24 24" width="22" height="22">
                <path fill="none" stroke="#1a1a1a" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M12 3 5 6v6c0 4.52 5.82 9 7 9s7-4.48 7-9V6l-7-3z"></path>
              </svg>
            </div>
            <h3 className="assistants-card-title">100% Accurate Try-on</h3>
            <p className="assistants-card-text">Garment fit, fabric drape, and on-model proportions stay pixel-true to your input—every seam and fold preserved across skin tones and body types.</p>
          </article>
          
          <article className="assistants-card assistants-hub-card assistants-hub-card-l3 reveal-hover-lift" data-reveal-item="true">
            <div className="assistants-card-icon" aria-hidden="true" style={{ background: '#f5f5f7', border: '1px solid #e8e8ed', boxShadow: 'none' }}>
              <svg viewBox="0 0 24 24" width="22" height="22">
                <path fill="none" stroke="#1a1a1a" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"></path>
                <path fill="none" stroke="#1a1a1a" strokeWidth={1.5} strokeLinecap="round" d="M14 2v6h6M9 13h6M9 17h6"></path>
              </svg>
            </div>
            <h3 className="assistants-card-title">10× Faster Renders</h3>
            <p className="assistants-card-text">Our simulative engine renders a brand-ready try-on in about 4 seconds—roughly 10× quicker than general-purpose models that take a full minute on the same input.</p>
          </article>
          
          <article className="assistants-card assistants-hub-card assistants-hub-card-r3 reveal-hover-lift" data-reveal-item="true">
            <div className="assistants-card-icon" aria-hidden="true" style={{ background: '#f5f5f7', border: '1px solid #e8e8ed', boxShadow: 'none' }}>
              <svg viewBox="0 0 24 24" width="22" height="22">
                <path fill="none" stroke="#1a1a1a" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M8 21h8v-7a8 8 0 1 0-8 0v7zm4 0v-7M9 13h6M11 10V7M13 10V7"></path>
              </svg>
            </div>
            <h3 className="assistants-card-title">Plug-and-play Try-on SDK</h3>
            <p className="assistants-card-text">Drop a single SDK into your web or app and serve pixel-true try-ons to every customer—fit, drape, and brand consistency preserved at catalog scale.</p>
          </article>
        </div>
        {/* Mockup Pill-shaped 'Know More' button */}
        {onKnowMore && (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3.5rem' }}>
            <button 
              onClick={onKnowMore}
              style={{
                background: '#1a1a1a',
                color: '#ffffff',
                borderRadius: '9999px',
                padding: '0.85rem 2.2rem',
                fontWeight: 600,
                fontSize: '0.95rem',
                boxShadow: '0 4px 12px rgba(0,0,0,0.12)',
                border: 'none',
                cursor: 'pointer',
                transition: 'transform 0.2s, background 0.2s, box-shadow 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-1px)';
                e.currentTarget.style.background = '#2c2c2c';
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.16)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.background = '#1a1a1a';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.12)';
              }}
            >
              Know More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Benefits;
