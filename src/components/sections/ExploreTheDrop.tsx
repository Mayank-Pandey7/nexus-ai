import React, { useRef } from 'react';

const dropCards = [
  {
    id: 1,
    tag: '@drftdeon',
    title: 'The Drop You Waited For',
    image: '/hero_lifestyle_v3.webp'
  },
  {
    id: 2,
    tag: '@drftdeon',
    title: 'Structured. Minimal. Premium.',
    image: '/hero_lifestyle_v3.webp'
  },
  {
    id: 3,
    tag: '@drftdeon',
    title: 'Built for the Streets',
    image: '/hero_lifestyle_v3.webp'
  },
  {
    id: 4,
    tag: '@drftdeon',
    title: 'Wear the Standard',
    image: '/hero_lifestyle_v3.webp'
  },
  {
    id: 5,
    tag: '@drftdeon',
    title: 'Movement Redefined',
    image: '/hero_lifestyle_v3.webp'
  },
  {
    id: 6,
    tag: '@drftdeon',
    title: 'Elevating Everyday Essentials',
    image: '/hero_lifestyle_v3.webp'
  }
];

const ExploreTheDrop: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 420;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      style={{
        backgroundColor: '#f6f6f7',
        color: '#000000',
        padding: '50px 0 60px 0',
        width: '100%',
        boxSizing: 'border-box',
        overflow: 'hidden'
      }}
    >
      {/* Top Header Row matching screenshot */}
      <div 
        style={{
          width: '100%',
          margin: '0 0 28px 0',
          padding: '0 32px',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          boxSizing: 'border-box'
        }}
      >
        <div>
          <span 
            style={{
              display: 'block',
              fontFamily: '"Outfit", -apple-system, sans-serif',
              fontSize: '14px',
              fontWeight: 800,
              letterSpacing: '0.24em',
              color: '#555555',
              textTransform: 'uppercase',
              marginBottom: '8px'
            }}
          >
            THE COLLECTION
          </span>
          <h2 
            style={{
              fontFamily: '"Outfit", -apple-system, sans-serif',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 900,
              letterSpacing: '-0.04em',
              color: '#000000',
              lineHeight: 0.95,
              margin: 0,
              textTransform: 'uppercase'
            }}
          >
            EXPLORE THE DROP
          </h2>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <a 
            href="https://instagram.com/drftdeon" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{
              fontFamily: '"Outfit", -apple-system, sans-serif',
              fontSize: '11px',
              fontWeight: 800,
              letterSpacing: '0.14em',
              color: '#000000',
              textDecoration: 'none',
              textTransform: 'uppercase'
            }}
          >
            VIEW ON INSTAGRAM
          </a>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button 
              type="button" 
              aria-label="Previous card"
              onClick={() => scroll('left')}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                backgroundColor: '#ffffff',
                color: '#000000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                outline: 'none'
              }}
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button 
              type="button" 
              aria-label="Next card"
              onClick={() => scroll('right')}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                backgroundColor: '#ffffff',
                color: '#000000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                outline: 'none'
              }}
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Carousel Track matching exact card aspect ratio and rounded corners */}
      <div 
        ref={scrollRef}
        style={{
          display: 'flex',
          gap: '20px',
          overflowX: 'auto',
          scrollBehavior: 'smooth',
          padding: '0 32px 16px 32px',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}
      >
        {dropCards.map((card, idx) => (
          <article 
            key={idx}
            style={{
              flex: '0 0 340px',
              height: '490px',
              borderRadius: '20px',
              overflow: 'hidden',
              position: 'relative',
              backgroundColor: '#111111',
              cursor: 'pointer',
              boxShadow: '0 12px 32px rgba(0, 0, 0, 0.12)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
          >
            <img 
              src={card.image} 
              alt={card.title} 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: `${(idx * 22) % 100}% center`,
                display: 'block'
              }}
            />

            {/* Bottom Content Overlay with Exact Text */}
            <div 
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to bottom, rgba(0,0,0,0) 55%, rgba(0,0,0,0.5) 75%, rgba(0,0,0,0.85) 100%)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '16px 14px',
                boxSizing: 'border-box'
              }}
            >
              <span 
                style={{
                  fontFamily: '"Outfit", -apple-system, sans-serif',
                  fontSize: '11px',
                  fontWeight: 600,
                  color: 'rgba(255, 255, 255, 0.75)',
                  marginBottom: '2px'
                }}
              >
                {card.tag}
              </span>
              <h3 
                style={{
                  fontFamily: '"Outfit", -apple-system, sans-serif',
                  fontSize: '13px',
                  fontWeight: 700,
                  color: '#ffffff',
                  margin: 0,
                  lineHeight: 1.25
                }}
              >
                {card.title}
              </h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ExploreTheDrop;
