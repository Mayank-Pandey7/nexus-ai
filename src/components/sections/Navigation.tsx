import React, { useState, useEffect } from 'react';
import { Link } from './Link';

interface NavigationProps {
  onGetStarted: () => void;
  activeView: 'home' | 'research' | 'company' | 'blog' | 'career' | 'fashion-ecommerce-ai' | 'accessories-try-on' | 'smart-assistants-ai' | 'visualization-ai' | 'team';
  onViewChange: (view: 'home' | 'research' | 'company' | 'blog' | 'career' | 'fashion-ecommerce-ai' | 'accessories-try-on' | 'smart-assistants-ai' | 'visualization-ai' | 'team') => void;
}

const Navigation: React.FC<NavigationProps> = ({ onGetStarted, activeView, onViewChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Background activates once scrolled past 50px
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const textColor = isScrolled ? '#000000' : '#ffffff';

  return (
    <>
      <header 
        className="drft-header" 
        style={{ 
          position: 'fixed', 
          top: isScrolled ? '16px' : '0px', 
          left: '50%',
          transform: 'translateX(-50%)',
          width: isScrolled ? 'min(980px, calc(100vw - 32px))' : '100%', 
          height: isScrolled ? '64px' : '88px',
          padding: isScrolled ? '0 28px' : '0 48px',
          borderRadius: '9999px',
          zIndex: 9999,
          backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.42)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(32px) saturate(200%)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(32px) saturate(200%)' : 'none',
          border: isScrolled ? '1px solid rgba(255, 255, 255, 0.28)' : '1px solid transparent',
          boxShadow: isScrolled 
            ? '0 14px 34px -4px rgba(0, 0, 0, 0.08), 0 4px 12px -2px rgba(0, 0, 0, 0.04)' 
            : 'none',
          transition: 'width 0.4s cubic-bezier(0.16, 1, 0.3, 1), top 0.4s cubic-bezier(0.16, 1, 0.3, 1), height 0.4s cubic-bezier(0.16, 1, 0.3, 1), padding 0.4s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.4s cubic-bezier(0.16, 1, 0.3, 1), backdrop-filter 0.4s cubic-bezier(0.16, 1, 0.3, 1), border 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxSizing: 'border-box'
        }}
      >
        {/* Left: Brand Logo Wordmark */}
        <div className="drft-header-left">
          <Link className="drft-logo-link" href="/" onClick={() => onViewChange('home')}>
            <span 
              className="drft-logo-text"
              style={{
                fontSize: isScrolled ? '1.35rem' : '1.65rem',
                fontWeight: 900,
                letterSpacing: '0.12em',
                color: textColor,
                transition: 'font-size 0.3s ease, color 0.3s ease'
              }}
            >
              DRFT DEON
            </span>
          </Link>
        </div>

        {/* Center: Minimal Streetwear Navigation */}
        <nav 
          className="drft-nav-links" 
          aria-label="Main Navigation"
          style={{
            position: 'static',
            transform: 'none',
            gap: isScrolled ? '32px' : '44px',
            transition: 'gap 0.3s ease'
          }}
        >
          <Link 
            className={`drft-nav-item ${activeView === 'fashion-ecommerce-ai' ? 'active' : ''}`}
            href="/fashion-ecommerce-ai" 
            onClick={() => onViewChange('fashion-ecommerce-ai')}
            style={{ 
              color: textColor, 
              fontSize: '15px', 
              fontWeight: 700, 
              letterSpacing: '0.14em',
              transition: 'color 0.3s ease' 
            }}
          >
            SHOP
          </Link>
          <Link 
            className={`drft-nav-item ${activeView === 'research' ? 'active' : ''}`}
            href="/projects" 
            onClick={() => onViewChange('research')}
            style={{ 
              color: textColor, 
              fontSize: '15px', 
              fontWeight: 700, 
              letterSpacing: '0.14em',
              transition: 'color 0.3s ease' 
            }}
          >
            NEW DROPS
          </Link>
          <Link 
            className={`drft-nav-item ${activeView === 'company' ? 'active' : ''}`}
            href="/company" 
            onClick={() => onViewChange('company')}
            style={{ 
              color: textColor, 
              fontSize: '15px', 
              fontWeight: 700, 
              letterSpacing: '0.14em',
              transition: 'color 0.3s ease' 
            }}
          >
            ABOUT
          </Link>
          <Link 
            className={`drft-nav-item ${activeView === 'career' ? 'active' : ''}`}
            href="/career" 
            onClick={() => onViewChange('career')}
            style={{ 
              color: textColor, 
              fontSize: '15px', 
              fontWeight: 700, 
              letterSpacing: '0.14em',
              transition: 'color 0.3s ease' 
            }}
          >
            CONTACT
          </Link>
        </nav>

        {/* Right: Modern Streetwear Utility Icons */}
        <div 
          className="drft-header-right"
          style={{
            gap: isScrolled ? '18px' : '26px',
            transition: 'gap 0.3s ease'
          }}
        >
          {/* Search Icon */}
          <button 
            type="button" 
            className="drft-icon-btn" 
            aria-label="Search"
            onClick={() => alert("Search collection")}
            style={{ color: textColor, transition: 'color 0.3s ease' }}
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="7.5"></circle>
              <line x1="21" y1="21" x2="16.5" y2="16.5"></line>
            </svg>
          </button>

          {/* Wishlist / Heart Icon */}
          <button 
            type="button" 
            className="drft-icon-btn" 
            aria-label="Wishlist"
            onClick={() => alert("Wishlist")}
            style={{ color: textColor, transition: 'color 0.3s ease' }}
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>

          {/* Account Icon */}
          <button 
            type="button" 
            className="drft-icon-btn" 
            aria-label="Account"
            onClick={onGetStarted}
            style={{ color: textColor, transition: 'color 0.3s ease' }}
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </button>

          {/* Bag / Cart Icon */}
          <button 
            type="button" 
            className="drft-icon-btn drft-cart-btn" 
            aria-label="Cart"
            onClick={() => alert("Bag: 0 items")}
            style={{ color: textColor, transition: 'color 0.3s ease' }}
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
          </button>

          {/* Mobile Menu Button */}
          <button 
            type="button" 
            className="drft-mobile-toggle" 
            aria-label="Open Menu"
            onClick={() => setIsMobileMenuOpen(true)}
            style={{ color: textColor, transition: 'color 0.3s ease' }}
          >
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`drft-mobile-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="drft-drawer-header">
          <span className="drft-logo-text">DRFT DEON</span>
          <button 
            type="button" 
            className="drft-drawer-close-btn"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            &times;
          </button>
        </div>

        <nav className="drft-drawer-nav">
          <Link href="/fashion-ecommerce-ai" onClick={() => { setIsMobileMenuOpen(false); onViewChange('fashion-ecommerce-ai'); }}>
            SHOP
          </Link>
          <Link href="/projects" onClick={() => { setIsMobileMenuOpen(false); onViewChange('research'); }}>
            NEW DROPS
          </Link>
          <Link href="/company" onClick={() => { setIsMobileMenuOpen(false); onViewChange('company'); }}>
            ABOUT
          </Link>
          <Link href="/career" onClick={() => { setIsMobileMenuOpen(false); onViewChange('career'); }}>
            CONTACT
          </Link>
        </nav>

        <div className="drft-drawer-footer">
          <button 
            type="button" 
            className="drft-drawer-auth-btn"
            onClick={() => { setIsMobileMenuOpen(false); onGetStarted(); }}
          >
            ACCOUNT / LOGIN
          </button>
        </div>
      </div>
    </>
  );
};

export default Navigation;
