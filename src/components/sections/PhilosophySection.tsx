import React from 'react';

interface PhilosophySectionProps {
  onReadStory?: () => void;
}

const philosophyFeatures = [
  {
    id: 'fabric',
    title: 'PREMIUM FABRIC',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        {/* Diamond 4-point star icon */}
        <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
      </svg>
    ),
  },
  {
    id: 'fit',
    title: 'OVERSIZED FIT',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        {/* T-shirt / structured frame icon */}
        <rect x="5" y="5" width="14" height="14" rx="1.5" />
        <line x1="5" y1="10" x2="19" y2="10" />
      </svg>
    ),
  },
  {
    id: 'shipping',
    title: 'FAST SHIPPING',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        {/* Plane icon */}
        <path d="M21 16V14L13 9V3.5C13 2.67 12.33 2 11.5 2C10.67 2 10 2.67 10 3.5V9L2 14V16L10 13.5V19L8 20.5V22L11.5 21L15 22V20.5L13 19V13.5L21 16Z" />
      </svg>
    ),
  },
  {
    id: 'returns',
    title: 'EASY RETURNS',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {/* Refresh / circular counter-clockwise arrow */}
        <path d="M3 12a9 9 0 1 0 2.64-6.36L2 9" />
        <path d="M2 3v6h6" />
      </svg>
    ),
  },
];

const PhilosophySection: React.FC<PhilosophySectionProps> = ({ onReadStory }) => {
  const handleAction = () => {
    if (onReadStory) {
      onReadStory();
    } else {
      document.querySelector('.drft-philosophy-section')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full text-black select-none">
      {/* Top Editorial Statement Area (#f0f0f0 background) */}
      <div 
        className="w-full bg-[#f0f0f0] py-14 sm:py-20 md:py-24 px-4 sm:px-8 text-center flex flex-col items-center justify-center"
      >
        <div className="max-w-[860px] w-full mx-auto">
          {/* Eyebrow */}
          <span
            style={{
              fontFamily: 'var(--font-outfit), sans-serif',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.24em',
              textTransform: 'uppercase',
              color: '#666666',
              display: 'block',
              marginBottom: '20px',
            }}
          >
            THE PHILOSOPHY
          </span>

          {/* Main Headline */}
          <h2
            style={{
              fontFamily: 'var(--font-outfit), sans-serif',
              fontSize: 'clamp(28px, 4.4vw, 52px)',
              fontWeight: 900,
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
              textTransform: 'uppercase',
              color: '#000000',
              margin: '0 0 28px 0',
            }}
          >
            MOVEMENT. FREEDOM.<br />INDIVIDUALITY.
          </h2>

          {/* Body Paragraph */}
          <p
            style={{
              fontFamily: 'var(--font-outfit), sans-serif',
              fontSize: 'clamp(13px, 1.35vw, 15px)',
              fontWeight: 400,
              lineHeight: 1.7,
              color: '#333333',
              maxWidth: '720px',
              margin: '0 auto 36px auto',
            }}
          >
            DRFT DEON represents more than just clothing. It’s a statement of bold individuality and modern
            urban culture. We obsess over the perfect oversized fit, selecting only the most premium heavy-weight
            fabrics that move with you through the city streets.
          </p>

          {/* Editorial Outline Button */}
          <div>
            <button
              onClick={handleAction}
              style={{
                backgroundColor: 'transparent',
                border: '1px solid #000000',
                color: '#000000',
                padding: '13px 36px',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#000000';
                e.currentTarget.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#000000';
              }}
            >
              READ OUR STORY
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Features Strip (pure white #ffffff background) */}
      <div
        className="w-full bg-[#ffffff] border-t border-[#e7e7e7] py-8 sm:py-10 px-4 sm:px-8"
      >
        <div
          className="max-w-[1180px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 items-center justify-center"
        >
          {philosophyFeatures.map((feature) => (
            <div
              key={feature.id}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                gap: '10px',
              }}
            >
              <div
                style={{
                  color: '#000000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '24px',
                }}
              >
                {feature.icon}
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-outfit), sans-serif',
                  fontSize: '10.5px',
                  fontWeight: 800,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: '#000000',
                }}
              >
                {feature.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
