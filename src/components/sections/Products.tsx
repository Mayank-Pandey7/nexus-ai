import React from 'react';
const p1 = '/assets/images/p1.jpg';
const p2 = '/assets/images/p2.jpg';
const p3 = '/assets/images/p3.jpg';

interface ProductsProps {
  onKnowMore: () => void;
}

const Products: React.FC<ProductsProps> = ({ onKnowMore }) => {
  return (
    <section className="fashion-section">
      <h2 className="fashion-heading" data-reveal="true">AI for <span className="fashion-heading-highlight">Smart Commerce</span></h2>
      <div className="fashion-grid" data-reveal-stagger="true">
        <a className="fashion-item-link" aria-label="AR Virtual Try-On — Trialshopy" data-reveal-item="true" href="#">
          <article className="fashion-item reveal-hover-lift">
            <div className="fashion-image-frame">
              <img src={p1} alt="AR Virtual Try-On" className="fashion-image" loading="lazy" />
            </div>
            <h3 className="fashion-item-title">AR Virtual Try-On</h3>
            <p className="fashion-item-text">Experience products before you buy. Our augmented reality try-on lets customers visualize fashion, accessories, and more on themselves in real time — reducing returns and boosting purchase confidence.</p>
          </article>
        </a>
        
        <a className="fashion-item-link" aria-label="AI-Powered Recommendations — Trialshopy" data-reveal-item="true" href="#">
          <article className="fashion-item reveal-hover-lift">
            <div className="fashion-image-frame">
              <img src={p2} alt="AI Recommendations" className="fashion-image" loading="lazy" />
            </div>
            <h3 className="fashion-item-title">AI-Powered Recommendations</h3>
            <p className="fashion-item-text">Our intelligent engine learns your preferences to surface products you'll love. Predictive analytics and machine learning drive personalized shopping experiences tailored to every individual customer.</p>
          </article>
        </a>
        
        <a className="fashion-item-link" aria-label="Enterprise IoT & Analytics — Trialshopy" data-reveal-item="true" href="#">
          <article className="fashion-item reveal-hover-lift">
            <div className="fashion-image-frame">
              <img src={p3} alt="Enterprise IoT Analytics" className="fashion-image" loading="lazy" />
            </div>
            <h3 className="fashion-item-title">Enterprise IoT & Analytics</h3>
            <p className="fashion-item-text">Real-time monitoring, predictive analytics, and intelligent automation for enterprise retail operations. From in-store IoT deployments to cloud data processing — powered by Trialshopy's smart tech integrations.</p>
          </article>
        </a>
      </div>
      <div className="home-section-cta-wrap">
        <a 
          className="home-cta-button" 
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onKnowMore();
          }}
        >
          Explore Our Services
        </a>
      </div>
    </section>
  );
};

export default Products;
