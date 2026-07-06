import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      question: "What is Trialshopy's Virtual Try-on technology?",
      answer: "Trialshopy's Virtual Try-on uses advanced Generative AI to model clothing fit, fabric drape, and proportions instantly and pixel-truely across different body types and skin tones in under 4 seconds."
    },
    {
      question: "How fast does Trialshopy render virtual catalogue models?",
      answer: "Our rendering pipeline processes and delivers high-fidelity on-model visual campaigns in about 4 seconds—roughly 10 times quicker than general-purpose diffusion models."
    },
    {
      question: "Can Trailshopy integrate with native mobile applications?",
      answer: "Yes. Trialshopy provides cross-platform mobile SDKs (iOS and Android) and web plugins designed to drop into modern frontend stacks seamlessly."
    },
    {
      question: "Does the 3D visualizer support real-time interactions?",
      answer: "Yes, our web-native 3D visualization platform supports smooth drag-and-drop scene editing, real-time rotations, lighting adaptation, and ultra-high-fidelity digital twins."
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