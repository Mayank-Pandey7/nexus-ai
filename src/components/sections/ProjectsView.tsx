import React from 'react';

interface ResearchViewProps {
  onBackToHome: () => void;
}

const ProjectsView: React.FC<ResearchViewProps> = ({ onBackToHome }) => {
  const patents = [
    { text: "Realistic Indoor Tennis Setup", className: "cloud-xl", left: "20%", top: "15%" },
    { text: "Talk to Anyone", className: "cloud-lg", left: "65%", top: "25%" },
    { text: "Transparent Mobile", className: "cloud-md", left: "10%", top: "45%" },
    { text: "E-Learning Gadget", className: "cloud-md", left: "80%", top: "40%" },
    { text: "Automatic Cooking Machine", className: "cloud-lg", left: "45%", top: "8%" },
    { text: "Pain Programmers for Visually Impaired", className: "cloud-sm", left: "5%", top: "72%" },
    { text: "Taste Sensors", className: "cloud-xl", left: "30%", top: "60%" },
    { text: "3D Realistic Map", className: "cloud-xl", left: "70%", top: "62%" },
    { text: "Very High Speed Instant Brakes", className: "cloud-xxl", left: "48%", top: "82%" },
    { text: "Small Sensor", className: "cloud-sm", left: "85%", top: "78%" },
    { text: "Realistic Indoor Cricket Setup", className: "cloud-md", left: "15%", top: "30%" },
    { text: "Realistic Remote Conferencing", className: "cloud-lg", left: "75%", top: "12%" },
    { text: "Gadgets for Pets", className: "cloud-xl", left: "38%", top: "35%" },
    { text: "Texture Sensor", className: "cloud-sm", left: "55%", top: "52%" },
    { text: "Robotic Co-Players", className: "cloud-lg", left: "62%", top: "48%" },
    { text: "Future Interactive Tiny Walk Simulator", className: "cloud-md", left: "25%", top: "88%" },
    { text: "Automatic Self Drying Stool", className: "cloud-md", left: "5%", top: "58%" },
    { text: "Self Secure Safe", className: "cloud-xl", left: "88%", top: "22%" },
    { text: "Realistic Dress Changing Panel", className: "cloud-lg", left: "40%", top: "72%" },
    { text: "Fully Secure Aeroplane", className: "cloud-xxl", left: "50%", top: "24%" },
    { text: "Mobile Phone for Blinds", className: "cloud-xl", left: "18%", top: "50%" },
    { text: "Educational Gadgets", className: "cloud-xl", left: "78%", top: "70%" },
    { text: "Intelligent Robots", className: "cloud-md", left: "32%", top: "78%" }
  ];

  return (
    <div className="research-page tab-pop-in">
      {/* Hero Section */}
      <section className="research-hero" aria-labelledby="research-heading" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <div className="research-hero-bg" aria-hidden="true">
          <img 
            src="\assets\images\29.jpg" 
            alt="Patent documentation gallery" 
            className="research-hero-image" 
            style={{ opacity: 1 }}
          />
        </div>
        <div 
          className="research-overlay" 
          aria-hidden="true" 
          style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 30%, rgba(255,255,255,0.9) 70%, #ffffff 100%)' }}
        ></div>
        
        {/* Absolute Back Trigger */}
        <div className="research-top-nav" style={{ zIndex: 10, paddingTop: '6.5rem' }}>
          <button 
            onClick={onBackToHome}
            style={{ 
              background: 'rgba(0, 0, 0, 0.05)', 
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
              boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
              marginLeft: '2rem'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(0, 0, 0, 0.09)';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(0, 0, 0, 0.05)';
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

        <div className="research-copy" style={{ zIndex: 2, alignSelf: 'flex-end', marginTop: 'auto', marginBottom: 'auto' }}>
          <h1 id="research-heading" className="research-heading" data-reveal-immediate="true" data-reveal-delay="0" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.2rem)' }}>
            <span style={{ fontFamily: '"Instrument Serif", Georgia, serif', fontStyle: 'italic', fontWeight: 400, textTransform: 'none' }}>Our</span><br />
            <span className="research-heading-highlight" style={{ fontFamily: 'var(--font-inter-tight), sans-serif', fontStyle: 'normal', fontWeight: 700, textShadow: '0 0 20px rgba(232, 76, 53, 0.15)' }}> Work &amp; Projects</span>
          </h1>
          <p className="research-text" data-reveal-immediate="true" data-reveal-delay="140" style={{ fontSize: '1.1rem', color: '#272930eb' }}>
            Explore our extensive portfolio of AI, IoT, and software applications engineered for industry leaders.
          </p>
        </div>

        {/* Scroll cue at the bottom center */}
        <div className="scroll-cue" aria-hidden="true" style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', color: '#272930bf', zIndex: 2 }}>
          <span className="scroll-cue-text" style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Scroll for more</span>
          <span className="scroll-cue-line" style={{ width: '1px', height: '40px', background: '#27293040' }}></span>
        </div>
      </section>

      {/* Interactive Patents Word Cloud Section */}
      <section className="research-patents-cloud" aria-labelledby="research-patents-heading">
        <div className="research-patents-inner">
          <h2 id="research-patents-heading" className="research-patents-title">
            70+ Granted <span className="research-patents-title-accent">Patents</span>
          </h2>
          <p className="research-patents-subtitle">
            Over a decade of breakthrough research in Simulation AI, body modeling, and virtual try-on rendering—protected by 70+ patents that power scalable, category-leading digital experiences.
          </p>

          <div className="research-cloud-wrap" style={{ position: 'relative', background: 'rgba(0,0,0,0.02)', borderRadius: '24px', border: '1px solid rgba(0,0,0,0.04)' }}>
            {patents.map((pat, idx) => (
              <span 
                key={idx} 
                className={`cloud-word cloud-word-btn ${pat.className}`} 
                style={{ 
                  left: pat.left, 
                  top: pat.top,
                  position: 'absolute',
                  transform: 'translate(-50%, -50%)',
                  fontWeight: 600,
                  color: 'rgba(0, 0, 0, 0.45)',
                  transition: 'color 0.2s, transform 0.2s, text-shadow 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#e84c35';
                  e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.06)';
                  e.currentTarget.style.textShadow = '0 4px 12px rgba(232, 76, 53, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(0, 0, 0, 0.45)';
                  e.currentTarget.style.transform = 'translate(-50%, -50%)';
                  e.currentTarget.style.textShadow = 'none';
                }}
              >
                {pat.text}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Simulative AI Section */}
      <section className="research-simulative-section" aria-labelledby="research-simulative-heading">
        <div className="research-simulative-wrap">
          <figure className="research-simulative-hero">
            <img 
              src="https://stagingmedia.pointai.com/assets/images/patent-BG.jpg" 
              alt="Conceptual artwork for simulative versus generative AI" 
              className="research-simulative-hero-img" 
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
            <div className="research-simulative-fade" aria-hidden="true" style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.7) 40%, #ffffff 100%)' }}></div>
          </figure>

          <div className="research-simulative-overlay" style={{ background: 'transparent' }}>
            <div className="research-simulative-inner">
              <header
  className="project-simulative-copy"
  data-reveal="true"
  style={{
    width: "100%",
    maxWidth: "720px",
    marginTop: "clamp(2.5rem, 15vw, 15rem)",
    marginBottom: "4rem",
    marginLeft: "auto",
    marginRight: "2%",
    alignSelf: "flex-end",
    textAlign: "right"
  }}
>
                <h2 id="research-simulative-heading" className="research-heading" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)' }}>
                  From Content Generation to<br />
                  <span className="research-heading-highlight" style={{ textShadow: '0 0 20px rgba(232, 76, 53, 0.25)' }}>Reality Simulation</span>
                </h2>
                <p
  style={{
    maxWidth: "55ch",
    marginLeft: "auto",
    marginRight: "0",
    color: "#1a1c20",
    textAlign: "right"
  }}
>
                  Generative AI imagines possibilities. Simulative AI understands reality. By modeling real-world behavior and interactions, it enables products, humans, and digital systems to respond, adapt, and evolve with unprecedented accuracy and contextual intelligence.
                </p>
              </header>

              <div className="research-simulative-cards" data-reveal-stagger="true" style={{ paddingBottom: '6rem' }}>
                
                <article className="research-simulative-card reveal-hover-lift" data-reveal-item="true" style={{ marginBottom: '2rem' }}>
                  <img 
                    src="https://stagingmedia.pointai.com/assets/images/Patent-Speed.jpg" 
                    alt="10X Faster Rendering Speed" 
                    className="research-simulative-card-img" 
                  />
                  <div className="research-simulative-card-body">
                    <h3 className="research-simulative-card-title" style={{ fontFamily: 'var(--font-inter-tight), sans-serif', fontWeight: 700 }}>
                      10X Faster Than GenAI
                    </h3>
                    <p className="research-simulative-card-text" style={{ color: '#55555d' }}>
                      Powered by proprietary Simulation AI, our virtual try-on engine delivers photorealistic experiences up to 10× faster than generative approaches—enabling real-time customer engagement and enterprise-scale deployment.
                    </p>
                  </div>
                </article>

                <article className="research-simulative-card reveal-hover-lift" data-reveal-item="true" style={{ marginBottom: '2rem' }}>
                  <img 
                    src="https://stagingmedia.pointai.com/assets/images/Patent-cost.jpg" 
                    alt="Built for Enterprise Economics" 
                    className="research-simulative-card-img" 
                  />
                  <div className="research-simulative-card-body">
                    <h3 className="research-simulative-card-title" style={{ fontFamily: 'var(--font-inter-tight), sans-serif', fontWeight: 700 }}>
                      Built for Enterprise Economics
                    </h3>
                    <p className="research-simulative-card-text" style={{ color: '#55555d' }}>
                      Nexus AI’s Simulation AI requires one-time product modeling, eliminating the recurring token costs of GenAI and delivering dramatically lower operating costs at enterprise scale.
                    </p>
                  </div>
                </article>

                <article className="research-simulative-card reveal-hover-lift" data-reveal-item="true" style={{ marginBottom: '2rem' }}>
                  <img 
                    src="https://stagingmedia.pointai.com/assets/images/patent-accurate.jpg" 
                    alt="Simulated Reality Not AI Guesswork" 
                    className="research-simulative-card-img" 
                  />
                  <div className="research-simulative-card-body">
                    <h3 className="research-simulative-card-title" style={{ fontFamily: 'var(--font-inter-tight), sans-serif', fontWeight: 700 }}>
                      Simulated Reality. Not AI Guesswork
                    </h3>
                    <p className="research-simulative-card-text" style={{ color: '#55555d' }}>
                      GenAI predicts how a product might look. Simulation AI models how it actually behaves—preserving every detail from fabric drape and silhouette to fabric drape, color, and design.
                    </p>
                  </div>
                </article>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsView;
