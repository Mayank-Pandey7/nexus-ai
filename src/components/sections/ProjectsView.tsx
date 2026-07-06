import React from 'react';

interface ResearchViewProps {
  onBackToHome: () => void;
}

const ProjectsView: React.FC<ResearchViewProps> = ({ onBackToHome }) => {


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

  

      {/* Simulative AI Section */}
      <section className="research-simulative-section" aria-labelledby="research-simulative-heading">
        <div className="research-simulative-wrap">
          <figure className="research-simulative-hero">
            
            <div className="research-simulative-fade" aria-hidden="true" style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.7) 40%, #ffffff 100%)' }}></div>
          </figure>

          <div className="research-simulative-overlay" style={{ background: 'transparent' }}>
            <div className="research-simulative-inner">
              <div className="research-simulative-cards" data-reveal-stagger="true" style={{ paddingBottom: '6rem' }}>
                
                <article className="research-simulative-card reveal-hover-lift" data-reveal-item="true" style={{ marginBottom: '2rem' }}>
                  <img 
                    src="\assets\images\project (1).jpg" 
                    alt="10X Faster Rendering Speed" 
                    className="research-simulative-card-img" 
                  />
                  <div className="research-simulative-card-body">
                    <h3 className="research-simulative-card-title" style={{ fontFamily: 'var(--font-inter-tight), sans-serif', fontWeight: 700 }}>
                      edTestz Assessment Pvt Ltd
                    </h3>
                    <p className="research-simulative-card-text" style={{ color: '#55555d' }}>
                      EdTestz, A Robust Test-Taking Platform, Excels In Delivering Curriculum-Aligned Assessments At The Concept Level, Allowing Students, Teachers, And Parents To Discern Strengths And Weaknesses For Personalized Learning. Our Focus Is On Detailed Concept-Level Analysis And AI Driven Metrics That Enable Educators To Tailor Teaching Strategies, Monitor Progress, And Foster Effective Collaboration.
                    </p>
                  </div>
                </article>

                <article className="research-simulative-card reveal-hover-lift" data-reveal-item="true" style={{ marginBottom: '2rem' }}>
                  <img 
                    src="\assets\images\project (6).jpg" 
                    alt="Built for Enterprise Economics" 
                    className="research-simulative-card-img" 
                  />
                  <div className="research-simulative-card-body">
                    <h3 className="research-simulative-card-title" style={{ fontFamily: 'var(--font-inter-tight), sans-serif', fontWeight: 700 }}>
                     SCADA Development
                    </h3>
                    <p className="research-simulative-card-text" style={{ color: '#55555d' }}>
                      SCADA Development: We Are Developing This Solution For FrinsoTech To Monitor And Control Plants. We Will Deliver IOT HW Which Will Be Connected With Plants Machinery And Sensors. We Will Collect Data And Send It To Cloud For Further Processing. The SCADA (Supervisory Control And Data Acquisition) Development Project For FrinsoTech Involves Creating A Comprehensive Solution To Monitor And Control Plant Operations.
                    </p>
                  </div>
                </article>
                 <article className="research-simulative-card reveal-hover-lift" data-reveal-item="true" style={{ marginBottom: '2rem' }}>
                  <img 
                    src="\assets\images\project (5).jpg" 
                    alt="Built for Enterprise Economics" 
                    className="research-simulative-card-img" 
                  />
                  <div className="research-simulative-card-body">
                    <h3 className="research-simulative-card-title" style={{ fontFamily: 'var(--font-inter-tight), sans-serif', fontWeight: 700 }}>
                     WIM (Weigh In Motion)
                    </h3>
                    <p className="research-simulative-card-text" style={{ color: '#55555d' }}>
                      WIM (Weigh In Motion): We Are Developing This Software For Avery KCCL To Weigh Any Transportation Vehicle While In Motion. Many Sensors And HW Will Interact With Controller And The Weighment Report Will Be Published. The Weigh In Motion (WIM) Project Developed For Avery KCCL Involves Creating Software That Facilitates The Weighing Of Transportation Vehicles While They Are Moving.
                    </p>
                  </div>
                </article>

                <article className="research-simulative-card reveal-hover-lift" data-reveal-item="true" style={{ marginBottom: '2rem' }}>
                  <img 
                    src="\assets\images\project (4).jpg" 
                    alt="Simulated Reality Not AI Guesswork" 
                    className="research-simulative-card-img" 
                  />
                  <div className="research-simulative-card-body">
                    <h3 className="research-simulative-card-title" style={{ fontFamily: 'var(--font-inter-tight), sans-serif', fontWeight: 700 }}>
                      Mahindra Track And Trace
                    </h3>
                    <p className="research-simulative-card-text" style={{ color: '#55555d' }}>
                      Track And Trace: This Application Is Developed For Tracking The Vehicle Or Any Asset For The Client In Warehouse. Nexus Tech Is Developing This Product To Keep In Mind With Various Customer Like Mahindra, JSW. The Track And Trace Application By Nexus Tech Is Designed To Monitor The Location And Status Of Vehicles And Assets Within A Warehouse.
                    </p>
                  </div>
                </article>

                <article className="research-simulative-card reveal-hover-lift" data-reveal-item="true" style={{ marginBottom: '2rem' }}>
                  <img 
                    src="\assets\images\project (3).jpg" 
                    alt="Simulated Reality Not AI Guesswork" 
                    className="research-simulative-card-img" 
                  />
                  <div className="research-simulative-card-body">
                    <h3 className="research-simulative-card-title" style={{ fontFamily: 'var(--font-inter-tight), sans-serif', fontWeight: 700 }}>
                      Favrtrent.com
                    </h3>
                    <p className="research-simulative-card-text" style={{ color: '#55555d' }}>
                      This Platform For Stylish Clothing Rentals! Discover Fashion Freedom At Favrtrent, We Believe That Everyone Deserves To Look Fabulous Without Breaking The Bank. Our Platform Allows You To Rent High-Quality, Trendy Clothing For Any Occasion—Be It A Wedding, Party, Or A Night Out
                    </p>
                  </div>
                </article>

                <article className="research-simulative-card reveal-hover-lift" data-reveal-item="true" style={{ marginBottom: '2rem' }}>
                  <img 
                    src="\assets\images\project (2).jpg" 
                    alt="Simulated Reality Not AI Guesswork" 
                    className="research-simulative-card-img" 
                  />
                  <div className="research-simulative-card-body">
                    <h3 className="research-simulative-card-title" style={{ fontFamily: 'var(--font-inter-tight), sans-serif', fontWeight: 700 }}>
                      PgtoHome
                    </h3>
                    <p className="research-simulative-card-text" style={{ color: '#55555d' }}>
                      Smart Solution For PG Accommodation And More! Find Your Perfect Home Away From Home. Hometopg Is Dedicated To Helping Students Discover Comfortable, Affordable, And Safe PG Accommodations. Our Innovative Platform Not Only Lets You See Live Room Tours But Also Integrates A Seamless Loan System For Those Looking To Rent Flats.
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
