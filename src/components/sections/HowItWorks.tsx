import React from 'react';

const automobileBanner = '/assets/images/automobile-banner.jpg';

const features = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2 4 5v6c0 5 3.5 9.5 8 11 4.5-1.5 8-6 8-11V5l-8-3Z" />
      </svg>
    ),
    label: 'Predictive Analytics & AI Insights',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2 3 7l9 5 9-5-9-5Z" />
        <path d="M3 7v10l9 5 9-5V7" />
        <path d="M12 12v10" />
      </svg>
    ),
    label: 'Enterprise Resource Planning & CRM',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M13 2 3 14h7l-1 8 11-14h-7l1-6Z" />
      </svg>
    ),
    label: 'Real-time Monitoring & Automation',
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="automobile-section" aria-labelledby="automobile-heading">
      <div className="automobile-inner">
        {/* Left: text content */}
        <div className="automobile-content" data-reveal="true">
          <h2 id="automobile-heading" className="automobile-kicker">
            Revolutionizing Industries with{' '}
            <span className="automobile-kicker-highlight">Smart Tech Integrations</span>
          </h2>

          <p className="automobile-body">
            TrialShopy is breaking boundaries by moving from traditional, reactive
            approaches to proactive, data-driven, and intelligent systems. We
            integrate IoT, AI, and AR to transform your core operations.
          </p>

          <ul className="automobile-features">
            {features.map((f) => (
              <li key={f.label} className="automobile-feature-item">
                <span className="automobile-feature-icon">{f.icon}</span>
                <span>{f.label}</span>
              </li>
            ))}
          </ul>

          <a
            className="automobile-cta-link"
            href="https://nexus-ai-mayank.vercel.app/fashion-ecommerce-ai"
          >
            Learn more about our vision
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>

        {/* Right: contained image card */}
        <div className="automobile-banner-visual">
          <img
            src={automobileBanner}
            alt="Trialshopy smart enterprise technology platform"
            className="automobile-banner-image"
            loading="lazy"
          />
          <div className="automobile-banner-vignette" aria-hidden="true"></div>

          <div className="automobile-ar-badge">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13 2 3 14h7l-1 8 11-14h-7l1-6Z" />
            </svg>
            <span>AR Try-on Active</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
