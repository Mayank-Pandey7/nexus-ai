import React, { useState, useEffect } from 'react';

interface SmartAssistantsViewProps {
  onBackToHome: () => void;
}

const SmartAssistantsView: React.FC<SmartAssistantsViewProps> = ({ onBackToHome }) => {
  // Local state for active tab in the Explore section
  const [activeTab, setActiveTab] = useState<'assistant' | 'catalog' | 'sdk' | 'gpt'>('sdk');

  // Typing simulation effect for the search prompt in the Hero section
  const [promptText, setPromptText] = useState('');
  const samplePrompts = [
    "Editorial photoshoot of a model wearing our new autumn orange coat in a neon Tokyo street background, cinematic lighting",
    "Campaign moodboard showing 5 model variations wearing premium sunglasses next to a vintage luxury sports car, high-end fashion",
    "Interactive product lineup showing detailed fits and drape of our summer collections on different body types and skin tones"
  ];

  useEffect(() => {
    let activeIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timer: any;

    const tick = () => {
      const currentFullText = samplePrompts[activeIndex];
      
      if (!isDeleting) {
        setPromptText(currentFullText.substring(0, charIndex + 1));
        charIndex++;
        
        if (charIndex === currentFullText.length) {
          // Pause at the end of typing
          timer = setTimeout(() => {
            isDeleting = true;
            tick();
          }, 3500);
          return;
        }
      } else {
        setPromptText(currentFullText.substring(0, charIndex - 1));
        charIndex--;
        
        if (charIndex === 0) {
          isDeleting = false;
          activeIndex = (activeIndex + 1) % samplePrompts.length;
          // Pause before starting typing next prompt
          timer = setTimeout(() => {
            tick();
          }, 600);
          return;
        }
      }

      // Typing speed vs deleting speed
      const speed = isDeleting ? 15 : 35;
      timer = setTimeout(tick, speed);
    };

    tick();

    return () => {
      clearTimeout(timer);
    };
  }, []);

  // Content map for the explore vertical tabs
  const tabContent = {
    assistant: {
      title: "Conversational Styling",
      copy: "Serve personal shoppers to every customer. Nexus AI understands style queries, builds complete outfits, and visualizes garments instantly inside a unified chat interface.",
      source1: "https://stagingmedia.pointai.com/assets/images/input-3-1.jpg",
      source2: "https://stagingmedia.pointai.com/assets/images/input-3-2.jpg",
      output: "https://stagingmedia.pointai.com/assets/images/p1.jpg"
    },
    catalog: {
      title: "Instant Model Catalogues",
      copy: "Generate on-model product catalogues for your entire inventory from flat lay or mannequin images in minutes — reducing photography costs by up to 90%.",
      source1: "https://stagingmedia.pointai.com/assets/images/speed-input-cloth.png",
      source2: "https://stagingmedia.pointai.com/assets/images/speed-input-model.png",
      output: "https://stagingmedia.pointai.com/assets/images/p2.jpg"
    },
    sdk: {
      title: "Plug-and-play Try-on",
      copy: "Drop a single SDK into your web or app and serve pixel-true try-ons to every customer — fit, drape, and brand consistency preserved at catalog scale.",
      source1: "https://stagingmedia.pointai.com/assets/images/input-3-1.jpg",
      source2: "https://stagingmedia.pointai.com/assets/images/input-3-2.jpg",
      output: "https://stagingmedia.pointai.com/assets/images/output-3.jpg"
    },
    gpt: {
      title: "Generative Commerce Platform",
      copy: "Empower shoppers to search, design, and order custom garments using simple natural language descriptions, backed by our real-time production rendering engine.",
      source1: "https://stagingmedia.pointai.com/assets/images/speed-input-cloth.png",
      source2: "https://stagingmedia.pointai.com/assets/images/input-3-2.jpg",
      output: "https://stagingmedia.pointai.com/assets/images/p3.jpg"
    }
  };

  const activeContent = tabContent[activeTab];

  return (
    <div className="home-page assistants-root tab-pop-in">
      {/* Hero Section */}
      <section className="assistants-hero assistants-hero--screen-top" aria-labelledby="assistants-hero-heading">
        <div className="assistants-hero-bg" aria-hidden="true"></div>
        <div className="assistants-hero-parallax" aria-hidden="true"><div className="assistants-hero-parallax-track"></div></div>
        <div className="assistants-hero-scrim" aria-hidden="true"></div>
        
        <div className="assistants-hero-ui">
          {/* Navigation Bar back link */}
          <div className="home-container" style={{ padding: '2rem 1.5rem 0', display: 'flex', justifyContent: 'flex-start' }}>
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
                transition: 'all 0.25s'
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

          <div className="assistants-hero-inner home-container">
            <h1 id="assistants-hero-heading" className="assistants-hero-title" data-reveal-immediate="true">
              What should we <span className="assistants-hero-title-accent">Make?</span>
            </h1>
            
            <form className="assistants-prompt" aria-label="Example prompt" onSubmit={(e) => e.preventDefault()}>
              <textarea 
                className="assistants-prompt-input" 
                name="prompt" 
                rows={3} 
                readOnly 
                aria-label="Auto-generated example prompt"
                value={promptText}
              />
            </form>
            
            <ul className="assistants-prompt-chips" aria-label="Sample prompts">
              <li><button type="button" className="assistants-prompt-chip" onClick={() => setPromptText(samplePrompts[0])}>On-brand variations</button></li>
              <li><button type="button" className="assistants-prompt-chip" onClick={() => setPromptText(samplePrompts[1])}>Editorial Photoshoot</button></li>
              <li><button type="button" className="assistants-prompt-chip" onClick={() => setPromptText(samplePrompts[2])}>Campaign moodboard</button></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Explore Section */}
      <section className="assistants-explore" aria-labelledby="assistants-explore-heading">
        <div className="assistants-explore-bg" aria-hidden="true">
          <video 
            className="assistants-explore-bg-video" 
            src="https://stagingmedia.pointai.com/assets/media/virtual-tryon.mp4" 
            autoPlay 
            muted 
            loop 
            playsInline 
            preload="auto"
          />
          <span className="assistants-explore-bg-ridge assistants-explore-bg-ridge--back"></span>
          <span className="assistants-explore-bg-ridge assistants-explore-bg-ridge--front"></span>
          <span className="assistants-explore-bg-fog"></span>
          <span className="assistants-explore-bg-sea"></span>
          <span className="assistants-explore-bg-overlay"></span>
        </div>

        <div className="home-container assistants-explore-inner">
          <header className="assistants-explore-head">
            <h2 id="assistants-explore-heading" className="assistants-explore-title">
              Never let a good idea go <em className="assistants-explore-title-accent">unexplored</em>
            </h2>
          </header>

          <div className="assistants-explore-grid">
            <ul className="assistants-explore-tabs" role="tablist" aria-orientation="vertical" aria-label="Product modules">
              <li className="assistants-explore-tab-item">
                <button 
                  type="button" 
                  role="tab" 
                  aria-selected={activeTab === 'assistant'} 
                  onClick={() => setActiveTab('assistant')}
                  className={`assistants-explore-tab ${activeTab === 'assistant' ? 'assistants-explore-tab--active' : ''}`}
                >
                  Virtual Assistant
                </button>
              </li>
              <li className="assistants-explore-tab-item">
                <button 
                  type="button" 
                  role="tab" 
                  aria-selected={activeTab === 'catalog'} 
                  onClick={() => setActiveTab('catalog')}
                  className={`assistants-explore-tab ${activeTab === 'catalog' ? 'assistants-explore-tab--active' : ''}`}
                >
                  Catalogue Generation
                </button>
              </li>
              <li className="assistants-explore-tab-item">
                <button 
                  type="button" 
                  role="tab" 
                  aria-selected={activeTab === 'sdk'} 
                  onClick={() => setActiveTab('sdk')}
                  className={`assistants-explore-tab ${activeTab === 'sdk' ? 'assistants-explore-tab--active' : ''}`}
                >
                  Automated Virtual Try-on SDK
                </button>
              </li>
              <li className="assistants-explore-tab-item">
                <button 
                  type="button" 
                  role="tab" 
                  aria-selected={activeTab === 'gpt'} 
                  onClick={() => setActiveTab('gpt')}
                  className={`assistants-explore-tab ${activeTab === 'gpt' ? 'assistants-explore-tab--active' : ''}`}
                >
                  FashionGPT.com
                </button>
              </li>
            </ul>

            <article id="assistants-explore-preview" className="assistants-explore-card" aria-live="polite">
              <div className="assistants-explore-canvas">
                <div className="assistants-explore-board">
                  <span className="assistants-explore-source assistants-explore-source--1 assistants-explore-source--selected">
                    <span className="assistants-explore-source-label">Source 1</span>
                    <span className="assistants-explore-source-tile">
                      <img 
                        src={activeContent.source1} 
                        alt="Source cloth swatch" 
                        className="assistants-explore-source-img" 
                        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </span>
                  </span>
                  
                  <span className="assistants-explore-source assistants-explore-source--2">
                    <span className="assistants-explore-source-label">Source 2</span>
                    <span className="assistants-explore-source-tile">
                      <img 
                        src={activeContent.source2} 
                        alt="Source model mockup" 
                        className="assistants-explore-source-img" 
                        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </span>
                  </span>

                  <span className="assistants-explore-output assistants-explore-output--1">
                    <span className="assistants-explore-output-labels">
                      <span>Render Output</span>
                      <span>100% Accurate</span>
                    </span>
                    <span className="assistants-explore-output-stack">
                      <span className="assistants-explore-output-card assistants-explore-output-card--back" aria-hidden="true"></span>
                      <span className="assistants-explore-output-card">
                        <img 
                          src={activeContent.output} 
                          alt="Render output simulation" 
                          className="assistants-explore-output-img" 
                          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      </span>
                    </span>
                  </span>

                  <svg className="assistants-explore-curves" viewBox="0 0 600 400" preserveAspectRatio="none" aria-hidden="true">
                    <defs>
                      <linearGradient id="explore-curve-stroke" x1="0" x2="1" y1="0" y2="0">
                        <stop offset="0%" stopColor="rgba(255,255,255,0.05)"></stop>
                        <stop offset="40%" stopColor="rgba(255,255,255,0.45)"></stop>
                        <stop offset="100%" stopColor="rgba(255,255,255,0.1)"></stop>
                      </linearGradient>
                    </defs>
                    <g fill="none" stroke="url(#explore-curve-stroke)" strokeWidth="1.1" strokeLinecap="round">
                      <path d="M 130 95 C 275 95, 330 130, 477 240"></path>
                      <path d="M 130 330 C 270 330, 330 280, 460 200"></path>
                    </g>
                  </svg>
                </div>
              </div>
              
              <div className="assistants-explore-card-body">
                <h3 className="assistants-explore-card-title">{activeContent.title}</h3>
                <p className="assistants-explore-card-copy">{activeContent.copy}</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Speed Comparison Section */}
      <section className="assistants-compare assistants-compare--speed" aria-labelledby="assistants-speed-heading">
        <div className="home-container assistants-compare-speed-grid">
          <div className="assistants-compare-copy">
            <span className="assistants-compare-badge">
              <span className="assistants-compare-badge-dot" aria-hidden="true"></span>Speed Comparison
            </span>
            <h2 id="assistants-speed-heading" className="assistants-compare-title">
              10 Times <em className="assistants-compare-title-accent">Faster</em>
            </h2>
            <p className="assistants-compare-body">
              Nexus AI’s simulation engine renders a brand-ready try-on in about 4 seconds — roughly 10× quicker than general-purpose models that take a full minute on the same input.
            </p>
            <div className="assistants-compare-input">
              <span className="assistants-compare-input-label">Input Cloth and Model</span>
              <div className="assistants-compare-input-tiles">
                <span className="assistants-compare-input-tile">
                  <img src="https://stagingmedia.pointai.com/assets/images/speed-input-cloth.png" alt="Input cloth swatch" className="assistants-compare-input-img" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                </span>
                <span className="assistants-compare-input-tile">
                  <img src="https://stagingmedia.pointai.com/assets/images/speed-input-model.png" alt="Input model" className="assistants-compare-input-img" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                </span>
              </div>
            </div>
            <p className="assistants-compare-footer">Results based on comparison done in December 2025 with publicly available models.</p>
          </div>

          <div className="assistants-compare-results">
            <article className="assistants-compare-result-card">
              <span className="assistants-compare-result-image">
                <img src="https://stagingmedia.pointai.com/assets/images/nexusai-model.png" alt="Nexus AI try-on result" className="assistants-compare-result-img" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
              </span>
              <div className="assistants-compare-result-body">
                <h3 className="assistants-compare-result-title">Nexus AI — 4 Seconds</h3>
                <p className="assistants-compare-result-copy">The power of simulation AI. Awarded for “The most advanced virtual try-on room.”</p>
              </div>
            </article>
            <article className="assistants-compare-result-card">
              <span className="assistants-compare-result-image">
                <img src="https://stagingmedia.pointai.com/assets/images/gemini-model.png" alt="Gemini try-on result" className="assistants-compare-result-img" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
              </span>
              <div className="assistants-compare-result-body">
                <h3 className="assistants-compare-result-title">Gemini — 63 Seconds</h3>
                <p className="assistants-compare-result-copy">The power of simulation AI. Awarded for “The most advanced virtual try-on room.”</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Cost Comparison Section */}
      <section className="assistants-compare assistants-compare--cost" aria-labelledby="assistants-cost-heading">
        <div className="home-container">
          <header className="assistants-compare-head assistants-compare-head--centered">
            <span className="assistants-compare-badge">
              <span className="assistants-compare-badge-dot" aria-hidden="true"></span>Cost Comparison
            </span>
            <h2 id="assistants-cost-heading" className="assistants-compare-title">
              10 Times <em className="assistants-compare-title-accent">Cost Efficient</em>
            </h2>
            <p className="assistants-compare-body assistants-compare-body--centered">
              Skip the per-call meter. Nexus AI delivers production-grade try-ons for a fraction of what OpenAI or Gemini charge — about 10× less for the same 30,000 generations.
            </p>
          </header>

          <div className="assistants-cost-grid">
            <article className="assistants-cost-card">
              <header className="assistants-cost-card-head">
                <span className="assistants-cost-card-logo">
                  <svg viewBox="0 0 32 32" width="32" height="32" aria-hidden="true">
                    <path fill="#ffffff" d="M28.6 13.1a7.3 7.3 0 0 0-.6-6 7.4 7.4 0 0 0-8-3.5A7.4 7.4 0 0 0 14.7 1 7.4 7.4 0 0 0 7.6 6.1a7.4 7.4 0 0 0-4.9 3.6 7.4 7.4 0 0 0 .9 8.6 7.3 7.3 0 0 0 .6 6 7.4 7.4 0 0 0 8 3.5A7.4 7.4 0 0 0 17.3 31a7.4 7.4 0 0 0 7.1-5.1 7.4 7.4 0 0 0 4.9-3.6 7.4 7.4 0 0 0-.7-8.6Zm-11.3 15.8a5.5 5.5 0 0 1-3.5-1.3l.2-.1 5.8-3.3a1 1 0 0 0 .5-.8v-8.2l2.5 1.4v6.7a5.5 5.5 0 0 1-5.5 5.6Zm-11.8-5a5.5 5.5 0 0 1-.6-3.7l.2.1 5.8 3.4a1 1 0 0 0 1 0l7.1-4.1v2.8L13 25.7a5.5 5.5 0 0 1-7.5-2Zm-1.5-12.8a5.5 5.5 0 0 1 2.8-2.4v6.8a1 1 0 0 0 .4.9l7.1 4-2.5 1.4-5.8-3.4a5.5 5.5 0 0 1-2-7.4Zm20.3 4.7L17.2 11.7l2.5-1.4 5.8 3.3a5.5 5.5 0 0 1-.8 9.9v-6.8a1 1 0 0 0-.5-.9ZM26.8 12l-.2-.1L20.7 8.5a1 1 0 0 0-1 0L12.6 12.6V9.8l5.7-3.3a5.5 5.5 0 0 1 8.5 5.5ZM11.3 16.4l-2.5-1.4V8.3a5.5 5.5 0 0 1 9-4.2l-.2.1-5.8 3.3a1 1 0 0 0-.5.8Zm1.4-3 3.2-1.8 3.2 1.8v3.7L15.9 19l-3.2-1.9Z"></path>
                  </svg>
                </span>
                <span className="assistants-cost-card-price">
                  <span className="assistants-cost-card-amount">$4,515</span>
                  <span className="assistants-cost-card-cadence">for 30k Try-ons</span>
                </span>
              </header>
              <h3 className="assistants-cost-card-name">OpenAI</h3>
              <p className="assistants-cost-card-meta">Per API Cost</p>
              <p className="assistants-cost-card-copy">OpenAI charges $0.15 per API generation call.</p>
            </article>

            <article className="assistants-cost-card">
              <header className="assistants-cost-card-head">
                <span className="assistants-cost-card-logo">
                  <svg viewBox="0 0 32 32" width="32" height="32" aria-hidden="true">
                    <defs>
                      <linearGradient id="gemini-grad-view" x1="0%" x2="100%" y1="0%" y2="100%">
                        <stop offset="0%" stopColor="#4796E3"></stop>
                        <stop offset="55%" stopColor="#8A6DE9"></stop>
                        <stop offset="100%" stopColor="#D96570"></stop>
                      </linearGradient>
                    </defs>
                    <path fill="url(#gemini-grad-view)" d="M16 1.5c.4 5.8 5 10.4 10.7 10.7v.6c-5.7.3-10.3 4.9-10.7 10.7h-.6c-.4-5.8-5-10.4-10.7-10.7v-.6C10.4 11.9 15 7.3 15.4 1.5h.6Z" transform="translate(0 4)"></path>
                  </svg>
                </span>
                <span className="assistants-cost-card-price">
                  <span className="assistants-cost-card-amount">$4,515</span>
                  <span className="assistants-cost-card-cadence">for 30k Try-ons</span>
                </span>
              </header>
              <h3 className="assistants-cost-card-name">Gemini</h3>
              <p className="assistants-cost-card-meta">Per API Cost</p>
              <p className="assistants-cost-card-copy">Gemini charges $0.15 per API generation call.</p>
            </article>

            <article className="assistants-cost-card assistants-cost-card--highlight">
              <header className="assistants-cost-card-head">
                <span className="assistants-cost-card-logo" style={{ background: '#ffa600' }}>
                  <img src="https://stagingmedia.pointai.com/assets/images/nexusai-logo-black-icon.png" alt="" className="assistants-cost-card-logo-img" style={{ filter: 'brightness(0) invert(1)' }} />
                </span>
                <span className="assistants-cost-card-price">
                  <span className="assistants-cost-card-amount" style={{ color: 'var(--secondary-color)' }}>$11</span>
                  <span className="assistants-cost-card-cadence">for 30k Try-ons</span>
                </span>
              </header>
              <h3 className="assistants-cost-card-name">Nexus AI</h3>
              <p className="assistants-cost-card-meta">One Time Cost</p>
              <p className="assistants-cost-card-copy">Nexus AI charges a flat $11 for the first 30k try-ons.</p>
            </article>
          </div>
          <p className="assistants-compare-footer assistants-compare-footer--centered">Results based on comparison done in December 2025 with publicly available models.</p>
        </div>
      </section>

      {/* Accuracy Comparison Section */}
      <section className="assistants-compare assistants-compare--accuracy" aria-labelledby="assistants-accuracy-heading">
        <div className="home-container">
          <header className="assistants-compare-head assistants-compare-head--centered">
            <span className="assistants-compare-badge">
              <span className="assistants-compare-badge-dot" aria-hidden="true"></span>Accuracy Comparison
            </span>
            <h2 id="assistants-accuracy-heading" className="assistants-compare-title">
              Always <em className="assistants-compare-title-accent">100% Accurate</em>
            </h2>
            <p className="assistants-compare-body assistants-compare-body--centered">
              Garment fit, fabric drape, and on-model proportions stay pixel-true to your input — every stitch, seam, and fold preserved across skin tones and body types, with no drift between runs.
            </p>
          </header>

          <div className="assistants-accuracy-grid">
            <article className="assistants-accuracy-card">
              <span className="assistants-accuracy-image">
                <img src="https://stagingmedia.pointai.com/assets/images/accuracy-input.png" alt="Input Cloth" className="assistants-accuracy-img" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
              </span>
              <div className="assistants-accuracy-body">
                <h3 className="assistants-accuracy-title">Input Cloth</h3>
                <p className="assistants-accuracy-copy">The power of simulation AI. Awarded for "The most advanced virtual try-on room."</p>
              </div>
            </article>
            <article className="assistants-accuracy-card">
              <span className="assistants-accuracy-image">
                <img src="https://stagingmedia.pointai.com/assets/images/accuracy-nexusai.png" alt="Nexus AI Result" className="assistants-accuracy-img" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
              </span>
              <div className="assistants-accuracy-body">
                <h3 className="assistants-accuracy-title">Nexus AI</h3>
                <p className="assistants-accuracy-copy">The power of simulation AI. Awarded for "The most advanced virtual try-on room."</p>
              </div>
            </article>
            <article className="assistants-accuracy-card">
              <span className="assistants-accuracy-image">
                <img src="https://stagingmedia.pointai.com/assets/images/accuracy-gemini.png" alt="Gemini Result" className="assistants-accuracy-img" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
              </span>
              <div className="assistants-accuracy-body">
                <h3 className="assistants-accuracy-title">Gemini</h3>
                <p className="assistants-accuracy-copy">The power of simulation AI. Awarded for "The most advanced virtual try-on room."</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Shopify App Integration Process */}
      <section id="assistants-demo" className="assistants-process" aria-labelledby="assistants-process-heading">
        <div className="assistants-process-inner">
          <div className="assistants-process-intro">
            <h2 id="assistants-process-heading" className="assistants-process-title">
              Shopify app <span className="assistants-accent">integration</span>
            </h2>
            <p className="assistants-process-body">
              From Shopify catalog sync to live shopper experiences, we deploy Nexus AI across your store — integrated with your theme, optimized for conversion, and ready in days.
            </p>
          </div>

          <div className="assistants-process-rail" aria-label="Delivery phases">
            <article className="assistants-process-card reveal-hover-lift">
              <span className="assistants-process-card-icon" aria-hidden="true" style={{ background: '#ffa600' }}>
                <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
                  <circle cx="11" cy="11" r="6" fill="none" stroke="currentColor" strokeWidth="1.6"></circle>
                  <path d="m16 16 5 5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"></path>
                </svg>
              </span>
              <h3 className="assistants-process-card-title">Store Assessment</h3>
              <p className="assistants-process-card-copy">
                We review your Shopify setup, catalog structure, theme requirements, and customer journeys to identify the best Nexus AI experiences for your store.
              </p>
              <footer className="assistants-process-card-footer">
                <span className="assistants-process-card-index">01</span>
              </footer>
            </article>

            <article className="assistants-process-card reveal-hover-lift">
              <span className="assistants-process-card-icon" aria-hidden="true" style={{ background: '#ffa600' }}>
                <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
                  <path fill="currentColor" d="M13 2 4 14h7l-1 8 9-12h-7l1-8z"></path>
                </svg>
              </span>
              <h3 className="assistants-process-card-title">App Configuration</h3>
              <p className="assistants-process-card-copy">
                We customize the Shopify app, configure branding and features, connect your product catalog, and tailor the experience to your merchandising strategy.
              </p>
              <footer className="assistants-process-card-footer">
                <span className="assistants-process-card-index">02</span>
              </footer>
            </article>

            <article className="assistants-process-card reveal-hover-lift">
              <span className="assistants-process-card-icon" aria-hidden="true" style={{ background: '#ffa600' }}>
                <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
                  <path fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M12 3c2 4 4 6 7 7-3 1-5 3-7 7m0-14v4m-3-1 3 1M5 19l2-2m10 2 2-2"></path>
                </svg>
              </span>
              <h3 className="assistants-process-card-title">Go Live</h3>
              <p className="assistants-process-card-copy">
                We deploy across your storefront, validate performance, and provide analytics to track engagement, try-ons, conversions, and customer behavior.
              </p>
              <footer className="assistants-process-card-footer">
                <span className="assistants-process-card-index">03/03</span>
              </footer>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SmartAssistantsView;
