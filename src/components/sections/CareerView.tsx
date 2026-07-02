import React, { useState } from 'react';
import careerHeroBg from '../../assets/images/career-hero-bg.jpg';

interface CareerViewProps {
  onBackToHome: () => void;
}

const CareerView: React.FC<CareerViewProps> = ({ onBackToHome }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const jobs = [
    {
      title: "Senior Machine Learning Engineer",
      summary: "Design and ship models for virtual try-on, size recommendation, and personalization. You will work across data pipelines, evaluation, and production APIs.",
      applyUrl: "mailto:careers@nexusai.com?subject=Application for Senior Machine Learning Engineer"
    },
    {
      title: "Frontend Engineer (React / WebGL)",
      summary: "Build polished, performant experiences for try-on, 3D viewers, and merchant dashboards using modern React and real-time graphics.",
      applyUrl: "mailto:careers@nexusai.com?subject=Application for Frontend Engineer (React / WebGL)"
    }
  ];

  const benefits = [
    {
      title: "Think Big, Build Bigger.",
      body: "We tackle ambitious problems in AI and commerce—shipping products that scale from prototype to production with clarity and craft."
    },
    {
      title: "Passionately Driven, Fearlessly Proud.",
      body: "Our team brings energy to every release. We celebrate wins, learn from setbacks, and keep raising the bar together."
    },
    {
      title: "Own it. Deliver it.",
      body: "You will own outcomes end to end—from design through deployment—with the support of mentors and a culture that values accountability."
    },
    {
      title: "Freedom with Integrity.",
      body: "We trust people to do great work with flexibility, transparency, and respect for customers, partners, and each other."
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="career-page tab-pop-in">
      {/* Career Hero Section */}
      <section className="career-hero" aria-labelledby="career-hero-heading">
        <div className="career-hero-bg" aria-hidden="true">
          <img 
            src={careerHeroBg} 
            alt="Nexus AI career hero background" 
            className="career-hero-image career-hero-image--desktop" 
            style={{ opacity: 1 }}
          />
          <img 
            src={careerHeroBg} 
            alt="Nexus AI career hero background mobile" 
            className="career-hero-image career-hero-image--mobile" 
            style={{ opacity: 1 }}
          />
        </div>
        <div className="career-hero-overlay" aria-hidden="true"></div>

        {/* Absolute Back Trigger */}
        <div className="career-hero-header-row" style={{ padding: '6.5rem 2rem 0', zIndex: 10 }}>
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

        <div className="career-hero-content home-container" style={{ marginTop: 'auto', marginBottom: 'auto' }}>
          <h1 id="career-hero-heading" className="career-hero-title">
            Virtual is the <span className="career-hero-title-accent">new Real</span>
          </h1>
          <p className="career-hero-subtitle">
            Come build the future with us. Engineered so that it looks good.
          </p>
          <a className="home-cta-button career-hero-cta" href="#open-positions">
            View Open Roles
          </a>
        </div>
      </section>

      {/* Why Nexus AI Section */}
      <section className="career-why" aria-labelledby="career-why-heading">
        <div className="career-why-inner">
          <h2 id="career-why-heading" className="career-section-title">
            Why <span className="career-section-title-accent">Nexus AI?</span>
          </h2>
          <p className="career-section-lead career-why-lead">
            We are redefining how people shop online through AI—virtual try-on, size intelligence, and immersive 3D experiences that feel real.
          </p>
          <div className="career-why-grid">
            {benefits.map((benefit, index) => (
              <article key={index} className="career-why-card reveal-hover-lift">
                <span className="career-why-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="20" height="20">
                    <path fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M12 3 4 9v12h16V9l-8-6zm0 6v12M9 21v-6h6v6"></path>
                  </svg>
                </span>
                <h3 className="career-why-card-title">{benefit.title}</h3>
                <p className="career-why-card-body">{benefit.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="open-positions" className="career-positions" aria-labelledby="career-positions-heading">
        <div className="career-positions-inner">
          <h2 id="career-positions-heading" className="career-section-title">
            Open <span className="career-section-title-accent">Positions</span>
          </h2>
          <p className="career-section-lead">
            Explore open roles across teams at Nexus AI.
          </p>
          <div className="career-positions-list">
            {jobs.map((job, index) => {
              const isOpen = openIndex === index;
              return (
                <article 
                  key={index} 
                  className={`career-position-item ${isOpen ? 'career-position-item--open' : ''}`}
                >
                  <button 
                    type="button" 
                    className="career-position-trigger" 
                    onClick={() => handleToggle(index)}
                    aria-expanded={isOpen}
                  >
                    <span className="career-position-title">{job.title}</span>
                    <span className="career-position-chevron" aria-hidden="true">
                      <svg className="career-position-chevron-icon" viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
                        <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </button>
                  <div className="career-position-panel-wrap">
                    <div className="career-position-panel-inner">
                      <p className="career-position-summary">{job.summary}</p>
                      <a className="career-position-apply" href={job.applyUrl}>Apply now</a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerView;
