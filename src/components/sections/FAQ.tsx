import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      question: "What makes DRFT DEON streetwear different?",
      answer: "Every DRFT DEON piece is engineered with custom heavyweight cottons, pre-shrunk fabrics, and architectural drop-shoulder silhouettes designed for durability, structure, and effortless everyday wear."
    },
    {
      question: "How do your oversized silhouettes fit?",
      answer: "Our garments are intentionally tailored with a relaxed, boxy streetwear fit. We recommend staying true to your standard size for the intended oversized drape, or sizing down if you prefer a closer fit."
    },
    {
      question: "How often do you release new drops?",
      answer: "We release limited drops in curated capsule collections. Quantities are strictly limited to maintain quality control and uniqueness. Once a drop sells out, restocks are not guaranteed."
    },
    {
      question: "What is your shipping and return policy?",
      answer: "Orders are processed within 24-48 hours with express domestic delivery. We offer hassle-free 7-day exchanges and returns on all unworn items with original tags intact."
    }
  ];

  return (
    <section className="faq-section">
      <div className="assistants-inner" style={{ maxWidth: '44rem' }}>
        <h2 className="overview-heading" style={{ color: 'white', marginBottom: '2.5rem' }} data-reveal="true">
          Frequently Asked <span className="overview-heading-highlight">Questions</span>
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
          {faqData.map((item, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div
                key={idx}
                className="faq-item reveal-hover-lift"
                style={{
                  borderRadius: '1.25rem',
                  padding: '1.4rem 1.6rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.25, 1, 0.5, 1)'
                }}
                onClick={() => setActiveIndex(isOpen ? null : idx)}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 className="assistants-card-title" style={{ fontSize: '1.05rem', fontWeight: 600, color: 'white' }}>
                    {item.question}
                  </h3>
                  <span style={{
                    fontSize: '1.25rem',
                    fontWeight: 300,
                    color: 'white',
                    transform: isOpen ? 'rotate(45deg)' : 'none',
                    transition: 'transform 0.3s cubic-bezier(0.25, 1, 0.5, 1)',
                    display: 'inline-block'
                  }}>
                    +
                  </span>
                </div>

                <div style={{
                  maxHeight: isOpen ? '12rem' : '0',
                  opacity: isOpen ? 1 : 0,
                  overflow: 'hidden',
                  transition: 'all 0.3s cubic-bezier(0.25, 1, 0.5, 1)',
                  marginTop: isOpen ? '0.75rem' : '0'
                }}>
                  <p className="assistants-card-text" style={{ margin: 0, fontSize: '0.9rem', color: 'white', lineHeight: '1.5' }}>
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;