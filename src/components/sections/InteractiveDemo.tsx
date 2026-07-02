import React, { useState, useEffect } from 'react';
const mixNMatch = '/assets/images/mix-n-match.png';
const mnmModel1 = '/assets/images/mnm-model1.png';
const mnmModel2 = '/assets/images/mnm-model2.png';
const mnmModel3 = '/assets/images/mnm-model3.png';

const InteractiveDemo: React.FC = () => {
  const [currentLayer, setCurrentLayer] = useState(0);
  const totalLayers = 3;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentLayer((prev) => (prev + 1) % totalLayers);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="mix-match-section">
      <div className="mix-match-stack" data-reveal="scale">
        <img src={mixNMatch} alt="Mix and match boutique scene" className="mix-match-image" loading="eager" />
        <div className="mix-match-models-overlay" aria-hidden="true">
          <div className="mix-match-model-anchor" id="mix-match-model-anchor">
            <div className={`mix-match-model-layer ${currentLayer === 0 ? 'mix-match-model-layer--visible' : ''}`}>
              <img src={mnmModel1} alt="Model 1" className="mix-match-model-image" loading="lazy" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
            <div className={`mix-match-model-layer ${currentLayer === 1 ? 'mix-match-model-layer--visible' : ''}`}>
              <img src={mnmModel2} alt="Model 2" className="mix-match-model-image" loading="lazy" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
            <div className={`mix-match-model-layer ${currentLayer === 2 ? 'mix-match-model-layer--visible' : ''}`}>
              <img src={mnmModel3} alt="Model 3" className="mix-match-model-image" loading="lazy" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;