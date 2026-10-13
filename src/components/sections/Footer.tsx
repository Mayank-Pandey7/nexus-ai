import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="drft-footer">
      <div className="drft-footer-inner">
        {/* Brand statement column */}
        <div className="drft-footer-brand-col">
          <h3 className="drft-footer-logo">DRFT DEON</h3>
          <p className="drft-footer-desc">
            ELEVATING EVERYDAY ESSENTIALS. PREMIUM MINIMAL STREETWEAR CRAFTED WITH CUSTOM FABRICS, PRECISION SILHOUETTES, AND UNCOMPROMISING ATTENTION TO DETAIL.
          </p>
          <span className="drft-footer-est">EST. 2025 // ALL RIGHTS RESERVED</span>
        </div>

        {/* Links 1 */}
        <div className="drft-footer-col">
          <h4 className="drft-footer-col-title">COLLECTIONS</h4>
          <a href="#shop" onClick={(e) => { e.preventDefault(); document.querySelector('.drft-products-section')?.scrollIntoView({ behavior: 'smooth' }); }} className="drft-footer-link">OVERSIZED TEES</a>
          <a href="#shop" onClick={(e) => { e.preventDefault(); document.querySelector('.drft-products-section')?.scrollIntoView({ behavior: 'smooth' }); }} className="drft-footer-link">HOODIES & SWEATS</a>
          <a href="#shop" onClick={(e) => { e.preventDefault(); document.querySelector('.drft-products-section')?.scrollIntoView({ behavior: 'smooth' }); }} className="drft-footer-link">CARGOS & PANTS</a>
          <a href="#shop" onClick={(e) => { e.preventDefault(); document.querySelector('.drft-products-section')?.scrollIntoView({ behavior: 'smooth' }); }} className="drft-footer-link">ACCESSORIES</a>
        </div>

        {/* Links 2 */}
        <div className="drft-footer-col">
          <h4 className="drft-footer-col-title">INFORMATION</h4>
          <a href="#philosophy" onClick={(e) => { e.preventDefault(); document.querySelector('.drft-philosophy-section')?.scrollIntoView({ behavior: 'smooth' }); }} className="drft-footer-link">OUR STORY</a>
          <a href="#philosophy" onClick={(e) => { e.preventDefault(); document.querySelector('.drft-philosophy-section')?.scrollIntoView({ behavior: 'smooth' }); }} className="drft-footer-link">THE PHILOSOPHY</a>
          <a href="#faq" onClick={(e) => { e.preventDefault(); document.querySelector('.faq-section')?.scrollIntoView({ behavior: 'smooth' }); }} className="drft-footer-link">FAQ & HELP</a>
          <a href="#faq" onClick={(e) => { e.preventDefault(); document.querySelector('.faq-section')?.scrollIntoView({ behavior: 'smooth' }); }} className="drft-footer-link">SHIPPING & RETURNS</a>
        </div>

        {/* Links 3 - Newsletter */}
        <div className="drft-footer-col">
          <h4 className="drft-footer-col-title">NEWSLETTER</h4>
          <p className="drft-footer-newsletter-text">
            JOIN FOR EARLY ACCESS TO LIMITED DROPS AND PRIVATE RELEASES.
          </p>
          <form className="drft-newsletter-form" onSubmit={(e) => { e.preventDefault(); alert("Subscribed to DRFT DEON drops!"); }}>
            <input 
              type="email" 
              placeholder="ENTER EMAIL" 
              required 
              className="drft-newsletter-input" 
            />
            <button type="submit" className="drft-newsletter-submit">&rarr;</button>
          </form>
        </div>
      </div>

      <div className="drft-footer-bottom">
        <span>&copy; {new Date().getFullYear()} DRFT DEON. ALL RIGHTS RESERVED.</span>
        <span>DESIGNED FOR CONTEMPORARY STREETWEAR.</span>
      </div>
    </footer>
  );
};

export default Footer;
