import React, { useState } from 'react';
import mnmModel1 from '../../assets/images/mnm-model1.png';
import mnmModel2 from '../../assets/images/mnm-model2.png';
import mnmModel3 from '../../assets/images/mnm-model3.png';

interface FashionEcommerceViewProps {
  onBackToHome: () => void;
}

const FashionEcommerceView: React.FC<FashionEcommerceViewProps> = ({ onBackToHome }) => {
  const [gender, setGender] = useState<'Female' | 'Male'>('Female');
  const [category, setCategory] = useState<'Tops' | 'Bottoms' | 'Shoes'>('Tops');
  const [selectedTop, setSelectedTop] = useState<number>(1);
  const [selectedBottom, setSelectedBottom] = useState<number>(1);
  const [selectedShoes, setSelectedShoes] = useState<number>(1);
  const [isRendering, setIsRendering] = useState<boolean>(false);

  // Female Tops
  const femaleTops = [
    { id: 1, img: "https://stagingmedia.pointai.com/assets/images/mnm/female/top/1.png", modelImg: mnmModel1, label: "Orange Knit Vest" },
    { id: 2, img: "https://stagingmedia.pointai.com/assets/images/mnm/female/top/2.png", modelImg: mnmModel2, label: "Beige Ribbed Crop" },
    { id: 3, img: "https://stagingmedia.pointai.com/assets/images/mnm/female/top/3.png", modelImg: mnmModel3, label: "Casual White Tee" },
    { id: 4, img: "https://stagingmedia.pointai.com/assets/images/mnm/female/top/4.png", modelImg: mnmModel1, label: "Saffron Summer Top" }
  ];

  // Female Bottoms
  const femaleBottoms = [
    { id: 1, img: "https://stagingmedia.pointai.com/assets/images/mnm/female/top/2.png", modelImg: mnmModel2, label: "Denim Straight Jeans" },
    { id: 2, img: "https://stagingmedia.pointai.com/assets/images/mnm/female/top/3.png", modelImg: mnmModel1, label: "Tan Tailored Trousers" },
    { id: 3, img: "https://stagingmedia.pointai.com/assets/images/mnm/female/top/4.png", modelImg: mnmModel3, label: "Wide-Leg Khakis" }
  ];

  // Female Shoes
  const femaleShoes = [
    { id: 1, img: "https://stagingmedia.pointai.com/assets/images/mnm/female/top/3.png", modelImg: mnmModel3, label: "Classic White Sneakers" },
    { id: 2, img: "https://stagingmedia.pointai.com/assets/images/mnm/female/top/1.png", modelImg: mnmModel1, label: "Casual Canvas Mules" }
  ];

  // Male Tops
  const maleTops = [
    { id: 1, img: "https://stagingmedia.pointai.com/assets/images/mnm/female/top/1.png", modelImg: mnmModel3, label: "Orange Knit Vest" },
    { id: 2, img: "https://stagingmedia.pointai.com/assets/images/mnm/female/top/2.png", modelImg: mnmModel2, label: "Beige Ribbed Crop" },
    { id: 3, img: "https://stagingmedia.pointai.com/assets/images/mnm/female/top/3.png", modelImg: mnmModel1, label: "Casual White Tee" },
    { id: 4, img: "https://stagingmedia.pointai.com/assets/images/mnm/female/top/4.png", modelImg: mnmModel3, label: "Saffron Summer Top" }
  ];

  // Male Bottoms
  const maleBottoms = [
    { id: 1, img: "https://stagingmedia.pointai.com/assets/images/mnm/female/top/2.png", modelImg: mnmModel1, label: "Denim Straight Jeans" },
    { id: 2, img: "https://stagingmedia.pointai.com/assets/images/mnm/female/top/3.png", modelImg: mnmModel3, label: "Tan Tailored Trousers" }
  ];

  // Male Shoes
  const maleShoes = [
    { id: 1, img: "https://stagingmedia.pointai.com/assets/images/mnm/female/top/3.png", modelImg: mnmModel2, label: "Classic White Sneakers" }
  ];

  const getItemsForCategory = () => {
    if (gender === 'Female') {
      if (category === 'Tops') return femaleTops;
      if (category === 'Bottoms') return femaleBottoms;
      return femaleShoes;
    } else {
      if (category === 'Tops') return maleTops;
      if (category === 'Bottoms') return maleBottoms;
      return maleShoes;
    }
  };

  const currentItems = getItemsForCategory();

  const getActiveItemId = () => {
    if (category === 'Tops') return selectedTop;
    if (category === 'Bottoms') return selectedBottom;
    return selectedShoes;
  };

  const handleGenderChange = (newGender: 'Female' | 'Male') => {
    setGender(newGender);
    setSelectedTop(1);
    setSelectedBottom(1);
    setSelectedShoes(1);
    triggerRender();
  };

  const handleCategoryChange = (newCategory: 'Tops' | 'Bottoms' | 'Shoes') => {
    setCategory(newCategory);
  };

  const handleItemSelect = (id: number) => {
    if (category === 'Tops') setSelectedTop(id);
    else if (category === 'Bottoms') setSelectedBottom(id);
    else setSelectedShoes(id);
    triggerRender();
  };

  const triggerRender = () => {
    setIsRendering(true);
    setTimeout(() => {
      setIsRendering(false);
    }, 550);
  };

  const getActiveModelImg = () => {
    // We determine model image depending on active selection
    const activeTopItem = (gender === 'Female' ? femaleTops : maleTops).find(i => i.id === selectedTop) || femaleTops[0];
    return activeTopItem.modelImg;
  };

  const getActiveLabelText = () => {
    const activeTopItem = (gender === 'Female' ? femaleTops : maleTops).find(i => i.id === selectedTop) || femaleTops[0];
    const activeBottomItem = (gender === 'Female' ? femaleBottoms : maleBottoms).find(i => i.id === selectedBottom) || femaleBottoms[0];
    return `${activeTopItem.label} + ${activeBottomItem.label}`;
  };

  const processes = [
    {
      title: "Discover & Scope",
      copy: "Understand business goals, customer journeys, catalog requirements, and integration needs across web and mobile.",
      index: "01/03"
    },
    {
      title: "Customization",
      copy: "Configure PointAI features, branding, recommendations, and analytics to match your ecommerce experience.",
      index: "02/03"
    },
    {
      title: "Integration & Launch",
      copy: "Deploy the SDK, validate performance, go live, and track engagement through analytics and optimization.",
      index: "03/03"
    }
  ];

  return (
    <div className="home-page fashion-root tab-pop-in">
      {/* Hero Section */}
      <section className="fashion-hero fashion-hero--screen-top" aria-labelledby="fashion-hero-heading">
        <video 
          className="fashion-hero-video-bg" 
          src="https://stagingmedia.pointai.com/assets/media/2-hero.mp4" 
          autoPlay 
          muted 
          loop 
          playsInline 
          preload="auto"
        />
        <div className="fashion-hero-ui">
          {/* Header Row / Back button */}
          <div className="home-container fashion-hero-header-row" style={{ padding: '6.5rem 2rem 0', zIndex: 10 }}>
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

          <div className="fashion-hero-inner" style={{ marginTop: 'auto', marginBottom: 'auto' }}>
            <h2 id="fashion-hero-heading" className="fashion-hero-title">
              <span className="fashion-hero-title-prefix">AI for </span>
              <span className="fashion-hero-title-accent">Fashion E-commerce</span>
            </h2>
            <p className="fashion-hero-subtitle">
              Catalog creation, virtual try-on, sizing, and styling—powered by a single Simulative AI engine that accurately represents every product, for every customer, at scale.
            </p>
          </div>
        </div>
      </section>

      {/* Size Recommendation Section */}
      <section className="fashion-size-rec-section" aria-labelledby="fashion-size-rec-heading">
        <div className="fashion-size-rec-inner">
          <div className="fashion-size-rec-copy">
            <h2 id="fashion-size-rec-heading" className="fashion-size-rec-title">
              <span className="fashion-size-rec-title-dark">Size </span>
              <span className="fashion-size-rec-title-accent">Recommendation</span>
            </h2>
            <p className="fashion-size-rec-body">
              From a single selfie and a few measurements, we predict the <strong>right size</strong> across <strong>every brand and cut</strong> — taking the guesswork out of checkout and the returns out of your inbox.
            </p>
          </div>
        </div>
      </section>

      {/* Body Fitting Section */}
      <section className="fashion-body-fit-section" aria-labelledby="fashion-body-fit-heading">
        <div className="fashion-body-fit-inner">
          <div className="fashion-body-fit-media fashion-body-fit-media-left">
            <img 
              src="https://stagingmedia.pointai.com/assets/images/fitting-left.png" 
              alt="Model for body based fitting preview left" 
              className="fashion-body-fit-img" 
            />
          </div>
          <div className="fashion-body-fit-copy">
            <h2 id="fashion-body-fit-heading" className="fashion-body-fit-title">
              <span className="fashion-body-fit-title-dark">Body based </span>
              <span className="fashion-body-fit-title-accent">Fitting</span>
            </h2>
            <p className="fashion-body-fit-body">
              Body measurements and a single selfie are all we need to render every garment on the customer’s exact build — no guesswork, no “wrong size” returns.
            </p>
          </div>
          <div className="fashion-body-fit-media fashion-body-fit-media-right">
            <img 
              src="https://stagingmedia.pointai.com/assets/images/fitting-right.png" 
              alt="Model for body based fitting preview right" 
              className="fashion-body-fit-img" 
            />
          </div>
        </div>
      </section>

      {/* 3D Digital Twin Section */}
      <section className="fashion-digital-twin-section" aria-labelledby="fashion-digital-twin-heading">
        <div className="fashion-digital-twin-inner">
          <div className="fashion-digital-twin-copy">
            <h2 id="fashion-digital-twin-heading" className="fashion-digital-twin-title">
              <span className="fashion-digital-twin-title-dark">3D </span>
              <span className="fashion-digital-twin-title-accent">Digital Twin</span>
            </h2>
            <p className="fashion-digital-twin-body">
              Turn a selfie and a few body measurements into a photorealistic digital twin—enabling accurate virtual try-on, personalized sizing, and confident shopping experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Mix & Match Section */}
      <section className="fashion-mix-match-section" aria-labelledby="fashion-mix-match-heading">
        <div className="fashion-mix-match-inner">
          <div className="fashion-mix-match-copy">
            <h2 id="fashion-mix-match-heading" className="fashion-mix-match-title">
              <span className="fashion-mix-match-title-dark">Mix &amp; Match</span>
              <span className="fashion-mix-match-title-accent"> at Scale</span>
            </h2>
            <p className="fashion-mix-match-body">
              Generate endless outfit combinations on the same model in seconds, enabling customers to visualize complete looks without the need for reshoots.
            </p>

            {/* Gender Selection */}
            <div className="fashion-mix-match-gender-row" role="radiogroup" aria-label="Gender selection">
              <button 
                type="button" 
                role="radio" 
                aria-checked={gender === 'Female'} 
                className={`fashion-mix-match-chip ${gender === 'Female' ? 'fashion-mix-match-chip-active' : ''}`}
                onClick={() => handleGenderChange('Female')}
              >
                Female
              </button>
              <button 
                type="button" 
                role="radio" 
                aria-checked={gender === 'Male'} 
                className={`fashion-mix-match-chip ${gender === 'Male' ? 'fashion-mix-match-chip-active' : ''}`}
                onClick={() => handleGenderChange('Male')}
              >
                Male
              </button>
            </div>

            {/* Category selection */}
            <div className="fashion-mix-match-type-row" role="radiogroup" aria-label="Category selection">
              <button 
                type="button" 
                role="radio" 
                aria-checked={category === 'Tops'} 
                className={`fashion-mix-match-chip fashion-mix-match-chip-soft ${category === 'Tops' ? 'fashion-mix-match-chip-soft-active' : ''}`}
                onClick={() => handleCategoryChange('Tops')}
              >
                Tops
              </button>
              <button 
                type="button" 
                role="radio" 
                aria-checked={category === 'Bottoms'} 
                className={`fashion-mix-match-chip fashion-mix-match-chip-soft ${category === 'Bottoms' ? 'fashion-mix-match-chip-soft-active' : ''}`}
                onClick={() => handleCategoryChange('Bottoms')}
              >
                Bottoms
              </button>
              <button 
                type="button" 
                role="radio" 
                aria-checked={category === 'Shoes'} 
                className={`fashion-mix-match-chip fashion-mix-match-chip-soft ${category === 'Shoes' ? 'fashion-mix-match-chip-soft-active' : ''}`}
                onClick={() => handleCategoryChange('Shoes')}
              >
                Shoes
              </button>
            </div>

            {/* Items row selectors */}
            <div className="fashion-mix-match-items-row" role="radiogroup" aria-label="Choose a product">
              {currentItems.map((item) => (
                <button 
                  key={item.id}
                  type="button" 
                  role="radio" 
                  aria-checked={getActiveItemId() === item.id} 
                  className={`fashion-mix-match-item-btn ${getActiveItemId() === item.id ? 'fashion-mix-match-item-btn-active' : ''}`}
                  aria-label={`product option ${item.id}`}
                  onClick={() => handleItemSelect(item.id)}
                >
                  <img src={item.img} alt="" className="fashion-mix-match-item" />
                </button>
              ))}
            </div>
          </div>

          {/* Phone Frame container hosting VTO demo */}
          <div className="fashion-mix-match-phone-wrap">
            <div className="fashion-mix-match-phone-screen" style={{ position: 'absolute', inset: '2.5% 5.8% 2.3%', borderRadius: '2rem', overflow: 'hidden' }}>
              
              {/* Client-side Virtual Try-on Room simulation mockup */}
              <div style={{ position: 'relative', width: '100%', height: '100%', background: 'linear-gradient(180deg, #1b1d22 0%, #0d0e11 100%)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
                
                {/* Backdrop dots */}
                <div style={{ position: 'absolute', inset: 0, opacity: 0.12, backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '16px 16px' }} />

                {/* Model display layer */}
                <img 
                  src={getActiveModelImg()} 
                  alt="Virtual Try-on simulation result" 
                  style={{ 
                    width: '90%', 
                    height: '90%', 
                    objectFit: 'contain', 
                    zIndex: 2, 
                    transition: 'opacity 0.25s ease-in-out',
                    opacity: isRendering ? 0.35 : 1 
                  }} 
                />

                {/* HUD info card */}
                <div style={{ position: 'absolute', bottom: '1.25rem', left: '1rem', right: '1rem', background: 'rgba(255, 255, 255, 0.06)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '1rem', padding: '0.65rem 0.95rem', zIndex: 3, backdropFilter: 'blur(12px)', textAlign: 'center' }}>
                  <span style={{ display: 'block', color: 'rgba(255,255,255,0.45)', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>Active Style Selection</span>
                  <span style={{ display: 'block', color: '#ffffff', fontSize: '0.85rem', fontWeight: 600, marginTop: '0.15rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {getActiveLabelText()}
                  </span>
                </div>

                {/* Loading indicator overlay */}
                {isRendering && (
                  <div style={{ position: 'absolute', inset: 0, background: 'rgba(11, 12, 16, 0.72)', backdropFilter: 'blur(8px)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}>
                    <div style={{ border: '3px solid rgba(255,255,255,0.1)', borderTop: '3px solid var(--secondary-color)', borderRadius: '50%', width: '2rem', height: '2rem', animation: 'spin 1s linear infinite' }} />
                    <span style={{ color: '#ffffff', fontSize: '0.8rem', marginTop: '0.65rem', fontFamily: 'var(--font-inter-tight), sans-serif', fontWeight: 500 }}>AI Rendering...</span>
                  </div>
                )}
              </div>

            </div>
            <img 
              src="https://stagingmedia.pointai.com/assets/images/cellPhone.png" 
              alt="Phone frame mockup" 
              className="fashion-mix-match-phone-frame" 
            />
          </div>
        </div>
      </section>

      {/* Plugin Implementation Section */}
      <section className="fashion-process-section" aria-labelledby="fashion-process-heading">
        <div className="fashion-process-inner">
          <div className="fashion-process-intro">
            <h2 id="fashion-process-heading" className="fashion-process-title">
              Plugin <span className="fashion-process-title-accent">Implementation</span>
            </h2>
            <p className="fashion-process-body">
              Deploy PointAI's fashion commerce SDK as a fully customized plugin for your website and app — enabling virtual try-on, fit guidance, AI-powered styling, and enriched product experiences with seamless integration, analytics, and minimal engineering effort.
            </p>
          </div>

          <div className="fashion-process-rail" aria-label="Delivery phases">
            {processes.map((process, idx) => (
              <article key={idx} className="fashion-process-card reveal-hover-lift">
                <span className="fashion-process-card-icon" aria-hidden="true">
                  {idx === 0 && (
                    <svg viewBox="0 0 24 24" width="24" height="24">
                      <circle cx="11" cy="11" r="5.5" fill="none" stroke="currentColor" strokeWidth="1.9"></circle>
                      <path d="m16 16 4 4" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round"></path>
                    </svg>
                  )}
                  {idx === 1 && (
                    <svg viewBox="0 0 24 24" width="24" height="24">
                      <path d="M13.8 2 6.9 13h4.5l-1.3 9 6.9-11H12.5L13.8 2z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"></path>
                    </svg>
                  )}
                  {idx === 2 && (
                    <svg viewBox="0 0 24 24" width="24" height="24">
                      <path d="M7 14c0-4.8 3.8-8 10-8 0 6.2-3.2 10-8 10l-2.2 2.2c-.6.6-1.8.2-1.8-.7V14Z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"></path>
                      <path d="M9.5 14.5 6 18m8-9.5h.01" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"></path>
                    </svg>
                  )}
                </span>
                <h3 className="fashion-process-card-title">{process.title}</h3>
                <p className="fashion-process-card-copy">{process.copy}</p>
                <footer className="fashion-process-card-footer">
                  <span className="fashion-process-card-index">{process.index}</span>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FashionEcommerceView;
