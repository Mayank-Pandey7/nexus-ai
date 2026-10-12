import React from 'react';

interface ProductsProps {
  onKnowMore: () => void;
}

const products = [
  {
    id: 1,
    title: 'OVERSIZED HEAVYWEIGHT TEE // BLACK',
    price: '₹1,999',
    category: 'ESSENTIALS',
    image: '/tshirt_graphic.webp'
  },
  {
    id: 2,
    title: 'TECHNICAL CARGO PANT // SLATE',
    price: '₹3,499',
    category: 'BOTTOMS',
    image: '/assets/images/p1.jpg'
  },
  {
    id: 3,
    title: 'RELAXED DROP-SHOULDER HOODIE',
    price: '₹3,999',
    category: 'OUTERWEAR',
    image: '/assets/images/p2.jpg'
  },
  {
    id: 4,
    title: 'OVERSIZED HEAVYWEIGHT TEE // CHALK',
    price: '₹1,999',
    category: 'ESSENTIALS',
    image: '/assets/images/p3.jpg'
  }
];

const Products: React.FC<ProductsProps> = ({ onKnowMore }) => {
  return (
    <section className="drft-products-section">
      <div className="drft-section-header">
        <div>
          <span className="drft-section-eyebrow">FEATURED COLLECTION</span>
          <h2 className="drft-section-title">LATEST DROPS</h2>
        </div>
        <button onClick={onKnowMore} className="drft-view-all-btn">
          VIEW ALL [04] &rarr;
        </button>
      </div>

      <div className="drft-products-grid">
        {products.map((p) => (
          <div key={p.id} className="drft-product-card" onClick={onKnowMore}>
            <div className="drft-product-media">
              <img src={p.image} alt={p.title} className="drft-product-img" />
              <span className="drft-product-tag">{p.category}</span>
            </div>
            <div className="drft-product-info">
              <h3 className="drft-product-name">{p.title}</h3>
              <p className="drft-product-price">{p.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
