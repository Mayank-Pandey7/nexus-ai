import React, { useState, useEffect } from 'react';
import nexusaiLogo from '../../assets/images/nexusai-logo-black.png';

interface NavigationProps {
  onGetStarted: () => void;
  activeView: 'home' | 'research' | 'company' | 'blog' | 'career' | 'fashion-ecommerce-ai' | 'accessories-try-on' | 'makeup-try-on' | 'smart-assistants-ai' | 'visualization-ai' | 'team';
  onViewChange: (view: 'home' | 'research' | 'company' | 'blog' | 'career' | 'fashion-ecommerce-ai' | 'accessories-try-on' | 'makeup-try-on' | 'smart-assistants-ai' | 'visualization-ai' | 'team') => void;
}

const Navigation: React.FC<NavigationProps> = ({ onGetStarted, activeView, onViewChange }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileProductsPanel, setIsMobileProductsPanel] = useState(false);
  const closeTimeout = React.useRef<any>(null);

  const handleMouseEnter = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (closeTimeout.current) {
        clearTimeout(closeTimeout.current);
      }
    };
  }, []);


  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.home-nav-item-has-mega') && !target.closest('.home-products-dropdown')) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setIsMobileProductsPanel(false);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="home-header">
        <div className="home-header-inner">
          <a className="home-header-logo" href="#" onClick={(e) => { e.preventDefault(); onViewChange('home'); }} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}>
            <img src={nexusaiLogo} alt="NexusAI logo" style={{ width: '2.25rem', height: '2.25rem', objectFit: 'contain' }} />
            <span className="logo-text-bold" style={{ fontFamily: 'var(--font-inter-tight), sans-serif', fontWeight: 700, fontSize: '1.35rem', color: 'var(--primary-color)', letterSpacing: '-0.02em' }}>Nexus AI</span>
          </a>
          
          <nav className="home-nav" aria-label="Primary">
            <div 
              className="home-nav-item home-nav-item-has-mega"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                type="button" 
                className="home-nav-link" 
                aria-haspopup="menu" 
                aria-expanded={isDropdownOpen}
                aria-controls="home-products-dropdown" 
                id="home-products-menu-button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsDropdownOpen(!isDropdownOpen);
                }}
              >
                Products
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="dropdown-chevron-icon" style={{ transform: isDropdownOpen ? 'rotate(180deg)' : 'none' }}>
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
            </div>
            <a className={`home-nav-link ${activeView === 'research' ? 'active' : ''}`} href="#" onClick={(e) => { e.preventDefault(); onViewChange('research'); }}>Research</a>
            <a className={`home-nav-link ${activeView === 'company' ? 'active' : ''}`} href="#" onClick={(e) => { e.preventDefault(); onViewChange('company'); }}>Company</a>
            <a className={`home-nav-link ${activeView === 'blog' ? 'active' : ''}`} href="#" onClick={(e) => { e.preventDefault(); onViewChange('blog'); }}>Blogs</a>
            <a className={`home-nav-link ${activeView === 'career' ? 'active' : ''}`} href="#" onClick={(e) => { e.preventDefault(); onViewChange('career'); }}>Career</a>
          </nav>
          
          <div className="home-header-actions">
            <button type="button" className="home-cta-button" onClick={onGetStarted}>Get Started</button>
            <button 
              type="button" 
              className="home-mobile-menu-button" 
              id="home-mobile-menu-button" 
              aria-label="Open menu" 
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <span className="home-mobile-menu-lines" aria-hidden="true"></span>
            </button>
          </div>
        </div>
        
        {/* Products Dropdown (Mega Menu) */}
        <div 
          id="home-products-dropdown" 
          className={`home-products-dropdown ${isDropdownOpen ? 'home-products-dropdown--open' : ''}`}
          role="menu" 
          aria-label="Products submenu" 
          aria-hidden={!isDropdownOpen}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="home-products-dropdown-inner">
            <a className="home-products-item" role="menuitem" style={{ '--item-index': 0 } as React.CSSProperties} href="#" onClick={(e) => { e.preventDefault(); onViewChange('fashion-ecommerce-ai'); setIsDropdownOpen(false); }}>
              <span className="home-products-item-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 8h12v11a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8z"></path>
                  <path d="M9 8V6a3 3 0 0 1 6 0v2"></path>
                  <path d="M9 13h6"></path>
                </svg>
              </span>
              <span className="home-products-item-content">
                <span className="home-products-item-title">AI for Fashion Ecommerce</span>
                <span className="home-products-item-text">One AI Engine, Endless Fashion Experiences.</span>
              </span>
            </a>
            <a className="home-products-item" role="menuitem" style={{ '--item-index': 1 } as React.CSSProperties} href="#" onClick={(e) => { e.preventDefault(); onViewChange('makeup-try-on'); setIsDropdownOpen(false); }}>
              <span className="home-products-item-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3s-4 4.5-4 9a4 4 0 0 0 8 0c0-4.5-4-9-4-9z"></path>
                  <path d="M12 11v4"></path>
                  <path d="m10 13 2 2 2-2"></path>
                </svg>
              </span>
              <span className="home-products-item-content">
                <span className="home-products-item-title">Makeup Tryon</span>
                <span className="home-products-item-text">True-to-tone beauty try-on with realistic lighting and skin adaptation.</span>
              </span>
            </a>
            <a className="home-products-item" role="menuitem" style={{ '--item-index': 2 } as React.CSSProperties} href="#" onClick={(e) => { e.preventDefault(); onViewChange('accessories-try-on'); setIsDropdownOpen(false); }}>
              <span className="home-products-item-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 12h2a4 4 0 0 1 4 4 4 4 0 0 1 8 0h2"></path>
                  <circle cx="9" cy="14" r="2.25"></circle>
                  <circle cx="15" cy="14" r="2.25"></circle>
                  <path d="M11.25 14h1.5"></path>
                </svg>
              </span>
              <span className="home-products-item-content">
                <span className="home-products-item-title">Accessories Tryon</span>
                <span className="home-products-item-text">Real-time try-on for eyewear, watches, jewelry, and more.</span>
              </span>
            </a>
            <a className="home-products-item" role="menuitem" style={{ '--item-index': 3 } as React.CSSProperties} href="#" onClick={(e) => { e.preventDefault(); onViewChange('smart-assistants-ai'); setIsDropdownOpen(false); }}>
              <span className="home-products-item-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="7" width="14" height="11" rx="2"></rect>
                  <path d="M9 11v2M12 11v2M15 11v2"></path>
                  <path d="M9 18h6"></path>
                  <path d="M12 7V5"></path>
                  <circle cx="12" cy="4" r="1"></circle>
                </svg>
              </span>
              <span className="home-products-item-content">
                <span className="home-products-item-title">AI for Smart Assistance</span>
                <span className="home-products-item-text">Context-aware assistants for guided shopping and customer support.</span>
              </span>
            </a>
            <a className="home-products-item" role="menuitem" style={{ '--item-index': 4 } as React.CSSProperties} href="#" onClick={(e) => { e.preventDefault(); onViewChange('visualization-ai'); setIsDropdownOpen(false); }}>
              <span className="home-products-item-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3 21 8v8l-9 5-9-5V8l9-5z"></path>
                  <path d="M12 3v10"></path>
                  <path d="m3 8 9 5 9-5"></path>
                  <path d="m12 13 9-5"></path>
                </svg>
              </span>
              <span className="home-products-item-content">
                <span className="home-products-item-title">AI for 3D Visualization</span>
                <span className="home-products-item-text">High-fidelity digital twins, drag-and-drop 3D scene editing, and web-native performance.</span>
              </span>
            </a>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu Overlay */}
      <div className={`home-mobile-menu-overlay ${isMobileMenuOpen ? 'home-mobile-menu-overlay-open' : ''}`} id="home-mobile-menu-overlay">
        <div className="home-mobile-menu-backdrop" id="home-mobile-menu-backdrop" onClick={() => setIsMobileMenuOpen(false)}></div>
        <button type="button" className="home-mobile-menu-close" id="home-mobile-menu-close" aria-label="Close menu" onClick={() => setIsMobileMenuOpen(false)}>
          Close
        </button>
        
        {isMobileProductsPanel && (
          <button type="button" className="home-mobile-menu-back" id="home-mobile-menu-back" aria-label="Go back" onClick={() => setIsMobileProductsPanel(false)}>
            ←
          </button>
        )}
        
        <div className={`home-mobile-menu-panels ${isMobileProductsPanel ? 'home-mobile-menu-panels--products' : ''}`} id="home-mobile-menu-panels">
          <div className="home-mobile-menu-panel home-mobile-menu-panel--main">
            <button type="button" className="home-mobile-menu-link" id="mobile-menu-products-trigger" onClick={() => setIsMobileProductsPanel(true)}>
              Products
            </button>
            <a className="home-mobile-menu-link" href="#" onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); onViewChange('research'); }}>Research</a>
            <a className="home-mobile-menu-link" href="#" onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); onViewChange('company'); }}>Company</a>
            <a className="home-mobile-menu-link" href="#" onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); onViewChange('blog'); }}>Blogs</a>
            <a className="home-mobile-menu-link" href="#" onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); onViewChange('career'); }}>Career</a>
            <button 
              type="button" 
              className="home-mobile-menu-link" 
              onClick={() => {
                setIsMobileMenuOpen(false);
                onGetStarted();
              }}
            >
              Get Started
            </button>
          </div>
          
          <div className="home-mobile-menu-panel home-mobile-menu-panel--products">
            <a className="home-mobile-menu-link" href="#" onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); onViewChange('fashion-ecommerce-ai'); }}>Fashion eCommerce</a>
            <a className="home-mobile-menu-link" href="#" onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); onViewChange('makeup-try-on'); }}>Makeup Try-on</a>
            <a className="home-mobile-menu-link" href="#" onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); onViewChange('accessories-try-on'); }}>Accessories Try-on</a>
            <a className="home-mobile-menu-link" href="#" onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); onViewChange('smart-assistants-ai'); }}>Smart Assistance</a>
            <a className="home-mobile-menu-link" href="#" onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); onViewChange('visualization-ai'); }}>3D Visualization</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
