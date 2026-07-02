import React from 'react';
import p1 from '../../assets/images/p1.jpg';
import p2 from '../../assets/images/p2.jpg';
import p3 from '../../assets/images/p3.jpg';

const Products: React.FC = () => {
  return (
    <section className="fashion-section">
      <h2 className="fashion-heading" data-reveal="true">AI for <span className="fashion-heading-highlight">Fashion eCommerce</span></h2>
      <div className="fashion-grid" data-reveal-stagger="true">
        <a className="fashion-item-link" aria-label="Virtual Try-on — AI for Fashion eCommerce" data-reveal-item="true" href="#">
          <article className="fashion-item reveal-hover-lift">
            <div className="fashion-image-frame">
              <img src={p1} alt="Virtual Try-on" className="fashion-image" loading="lazy" />
            </div>
            <h3 className="fashion-item-title">Virtual Try-on</h3>
            <p className="fashion-item-text">Transform product discovery into personal experience. Let customers visualize garments on themselves with realistic fit, drape, and styling across body types, skin tones, and sizes.</p>
          </article>
        </a>
        
        <a className="fashion-item-link" aria-label="Makeup Try-on — AI for Fashion eCommerce" data-reveal-item="true" href="#">
          <article className="fashion-item reveal-hover-lift">
            <div className="fashion-image-frame">
              <img src={p2} alt="Makeup Try-on" className="fashion-image" loading="lazy" />
            </div>
            <h3 className="fashion-item-title">Makeup Try-on</h3>
            <p className="fashion-item-text">Empower customers to find their ideal shade instantly with accurate virtual testing that enhances confidence, accelerates decision-making, and drives product discovery.</p>
          </article>
        </a>
        
        <a className="fashion-item-link" aria-label="AI Catalogue Generation — AI for Fashion eCommerce" data-reveal-item="true" href="#">
          <article className="fashion-item reveal-hover-lift">
            <div className="fashion-image-frame">
              <img src={p3} alt="AI Catalogue Generation" className="fashion-image" loading="lazy" />
            </div>
            <h3 className="fashion-item-title">AI Catalogue Generation</h3>
            <p className="fashion-item-text">Create on-model, lifestyle, flat-lay, and campaign visuals for every SKU at unprecedented speed and scale.</p>
          </article>
        </a>
      </div>
      <div className="home-section-cta-wrap">
        <a className="home-cta-button" href="#">Know More</a>
      </div>
    </section>
  );
};

export default Products;
