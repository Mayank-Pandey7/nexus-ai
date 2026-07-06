import React from 'react';

interface BlogDetailsViewProps {
  onBackToBlogs: () => void;
}

const BlogDetailsView: React.FC<BlogDetailsViewProps> = ({ onBackToBlogs }) => {
  return (
    <div className="blog-details-shell tab-pop-in">
      {/* Back Link Row */}
      <div style={{ padding: '6.5rem 2rem 1.5rem', background: '#ffffff', borderBottom: '1px solid #e8e8ed' }}>
        <div className="blog-details-wrap" style={{ padding: 0 }}>
          <button onClick={onBackToBlogs} className="blog-details-back-btn">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Back to Blogs
          </button>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="blog-details-hero">
        <img 
          src="https://stagingmedia.pointai.com/assets/blogs/blogs/genai-vs-simai.jpeg" 
          alt="Generative AI vs Simulation AI - Fashion E-commerce"
        />
        <div className="blog-details-hero-overlay"></div>
      </div>

      {/* Blog Header */}
      <div className="blog-details-header">
        <div className="blog-details-eyebrow">e-commerce simulation</div>
        <h1>Generative AI vs Trialshopy's Simulation AI</h1>
        <p className="blog-details-subtitle">Why Simulation AI is the New Future for Ecommerce &amp; Enterprises</p>
      </div>

      {/* Intro block */}
      <div className="blog-details-intro">
        <div className="blog-details-wrap">
          <p>In the fast-evolving world of fashion e-commerce, AI-powered Virtual Try-On (VTO) tools promised to solve one of retail's biggest questions:</p>
          <div className="blog-details-highlight">"Will this actually Fit and look Good on me?"</div>
          <p>And yes — Virtual Try-On (VTO) has moved the industry forward.</p>
          <p>But here's the Uncomfortable Truth:</p>
          <p className="blog-details-uncomfortable-truth"><span>Looking Right is different from being Right…</span></p>
        </div>
      </div>

      {/* Shoppers Problem & McKinsey stats */}
      <div className="blog-details-section">
        <div className="blog-details-wrap">
          <div className="blog-details-two-panel">
            {/* Left: Customer Problem */}
            <div className="blog-details-panel-card">
              <span className="tag">Customers' Real Problem</span>
              <h3>Online Fashion in 2026</h3>
              <p>Customers in 2026 are no longer impressed by "Good-looking" outputs. They are looking for <strong>certainty</strong>, not just visuals.</p>
              <p style={{ fontWeight: 600, color: 'var(--secondary-color)', fontSize: '.88rem', marginTop: '12px' }}>
                What they actually want to know?
              </p>
              <img 
                className="blog-details-shoppers-img" 
                src="https://stagingmedia.pointai.com/assets/blogs/blogs/genai-vs-simai.jpeg" 
                alt="What shoppers want to know" 
              />
            </div>

            {/* Right: McKinsey */}
            <div className="blog-details-panel-card">
              <span className="tag">As per McKinsey</span>
              <h3>Changing Consumer Expectations</h3>
              <p>This shift is being driven by evolving consumer demands for accuracy and personalization.</p>
              
              <div className="blog-details-stats-grid">
                <div className="blog-details-stat-box">
                  <div className="num">71%</div>
                  <p>of consumers expect personalized experiences</p>
                </div>
                <div className="blog-details-stat-box">
                  <div className="num warn">76%</div>
                  <p>feel frustrated when personalization is missing</p>
                </div>
                <div className="blog-details-stat-box">
                  <div className="num up">20%</div>
                  <p>increase in Customer Satisfaction</p>
                </div>
                <div className="blog-details-stat-box">
                  <div className="num up">10%</div>
                  <p>increase in Conversions</p>
                </div>
              </div>
            </div>
          </div>

          {/* Blockquote Banner */}
          <div className="blog-details-quote-banner">
            <span className="q-icon">"</span>
            <p>But here's the catch: <span className="teal">Personalization</span> without <span className="accent">Accuracy</span> is just <span className="accent">Decoration.</span></p>
          </div>
        </div>
      </div>

      {/* How E-Commerce Industry is Moving Forward */}
      <div className="blog-details-section" style={{ background: '#ffffff' }}>
        <div className="blog-details-wrap">
          <h2 className="blog-details-heading">How is E-Commerce Industry <span className="accent">Moving Forward?</span></h2>
          <div className="blog-details-divider"></div>

          <div className="blog-details-hybrid-layout">
            <div className="blog-details-hybrid-text">
              <p>The Ecommerce industry is now shifting towards a <strong>Hybrid AI approach:</strong></p>
              <ul>
                <li><strong>Generative AI</strong> for visual appeal &amp; Simulation</li>
                <li><strong>AI</strong> for speed, mix &amp; match, accuracy and realism</li>
              </ul>
              <p>That's why the future lies in combining <strong>Visual intelligence</strong> with <strong>Physical intelligence.</strong></p>
              <p style={{ fontSize: '.85rem', color: '#5a5a6a', margin: '16px 0 6px', fontStyle: 'italic' }}>
                Put simply:
              </p>
              <div className="blog-details-sim-statement">
                <p>Simulation AI doesn't Generate —<br/>it Simulates.</p>
                <p className="sub">And that difference separates Visual Experience from Decision confidence.</p>
              </div>
            </div>
            <div className="blog-details-hybrid-img">
              <img 
                src="https://stagingmedia.pointai.com/assets/blogs/blogs/genai-vs-simai.jpeg" 
                alt="Virtual Try-On Mirror Experience" 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Is GenAI Really Solving the Problem? */}
      <div className="blog-details-section">
        <div className="blog-details-wrap">
          <h2 className="blog-details-heading">Is Generative AI <span className="accent">Really Solving</span> the Problem?</h2>
          <div className="blog-details-divider"></div>

          <div className="blog-details-problem-text">
            <p>Generative AI has improved how fashion <em>looks</em> online, not how it <em>works</em>. It creates visually appealing outputs, but the product may not always be the same.</p>
            <p>And when it comes to Speed, Fit, Accuracy, Mix n Match for brands &amp; customers — it falls short.</p>
            <p className="why-label">Here's the reason why:</p>
            <p>While it looks real, it doesn't always <em>behave</em> real because of how GenAI works:</p>
            <ul>
              <li>Learns from images not physical properties — misses actual Fabric texture &amp; Pattern</li>
              <li>Guesses Fit instead of calculating it — often shows unrealistic "Perfect" results</li>
              <li>Cannot simulate Fabric physics, Stretch, or Movement</li>
              <li>Produces largely Static outputs</li>
            </ul>
            <div className="blog-details-critical-note">
              <p>
                This leads to a critical issue: The experience looks right — but doesn't feel right in reality.<br/>
                In simple terms, it enhances <span className="app">Appearance</span>, not <span className="acc">Accuracy</span>.
              </p>
            </div>
          </div>

          <div className="blog-details-comparison-img-wrap">
            <img 
              src="https://stagingmedia.pointai.com/assets/blogs/blogs/genai-vs-simai.jpeg" 
              alt="GenAI vs Trialshopy Simulation Comparison" 
            />
          </div>
        </div>
      </div>

      {/* Trialshopy Simulation AI Section */}
      <div className="blog-details-simulation-section">
        <div className="blog-details-wrap">
          <h2 className="blog-details-heading" style={{ maxWidth: '680px' }}>
            Trialshopy's Simulation AI doesn't recreate Appearances —<br/>
            <span className="accent">it recreates reality.</span>
          </h2>
          <div className="blog-details-divider"></div>

          <p className="blog-details-sim-intro">Simulation AI takes a fundamentally different approach by recreating the physics of the product.</p>

          <div className="blog-details-detail-grid">
            <div className="blog-details-detail-card">
              <h4>Every detail is:</h4>
              <ul>
                <li>Calculated, not guessed</li>
                <li>Measured, not estimated</li>
                <li>Simulated, not generated</li>
              </ul>
            </div>
            <div className="blog-details-detail-card">
              <h4>It understands:</h4>
              <ul>
                <li>Gravity</li>
                <li>Fabric tension</li>
                <li>Body movement</li>
                <li>Real measurements</li>
              </ul>
            </div>
          </div>

          <p className="blog-details-sim-closing">
            At Trialshopy, we go beyond Visuals — blending Photorealism with physics to show not just how a garment <em>looks</em>, but how it truly <em>behaves</em>.<br/><br/>
            And that's what transforms online shopping from <strong>Uncertainty into Certainty.</strong>
          </p>

          <div className="blog-details-sim-banner-img">
            <img 
              src="https://stagingmedia.pointai.com/assets/blogs/blogs/genai-vs-simai.jpeg" 
              alt="Trialshopy — See It. Try It. Buy It." 
            />
          </div>
        </div>
      </div>

      {/* Stay Tuned */}
      <div className="blog-details-stay-tuned">
        <div className="blog-details-wrap">
          <p>To know more about how GenAI and Simulation AI compare on speed, cost, accuracy.</p>
          <p><strong>Stay tuned for our next blog.</strong></p>
        </div>
      </div>

      {/* Share Bar */}
      <div className="blog-details-share-bar">
        <div className="blog-details-share-label">Share this article on:</div>
        <div className="blog-details-share-icons">
          <a 
            href="#" 
            className="blog-details-share-icon cp" 
            onClick={(e) => {
              e.preventDefault();
              navigator.clipboard.writeText(window.location.href);
              alert("Link copied to clipboard!");
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <rect x="9" y="9" width="13" height="13" rx="2"/>
              <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
            </svg>
            Copy Link
          </a>
          <a 
            href="https://twitter.com/intent/tweet?url=https://www.nexusai.com/blog-details/genai-vs-simai" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="blog-details-share-icon tw"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.23 10.16L22.98 0h-2.07l-7.59 8.82L7.25 0H.26l9.17 13.34L.26 24H2.33l8.02-9.32L16.75 24h6.99z"/>
            </svg>
            X (Twitter)
          </a>
          <a 
            href="https://www.facebook.com/sharer/sharer.php?u=https://www.nexusai.com/blog-details/genai-vs-simai" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="blog-details-share-icon fb"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9.1 23.69v-7.98H6.63V12.04h2.47v-1.58c0-4.09 1.85-5.98 5.86-5.98.4 0 .95.04 1.47.1.39.05.79.12 1.14.2v3.32a8.6 8.6 0 00-.65-.04 26.8 26.8 0 00-.73-.01c-.71 0-1.26.1-1.68.31a1.69 1.69 0 00-.68.62c-.26.42-.37 1-.37 1.75v1.3h3.92l-.67 3.67H13.63v8.25C19.4 23.24 24 18.18 24 12.04 24 5.41 18.63 0 12 0S0 5.41 0 12.04c0 5.63 3.87 10.35 9.1 11.65Z"/>
            </svg>
            Facebook
          </a>
          <a 
            href="https://www.linkedin.com/sharing/share-offsite/?url=https://www.nexusai.com/blog-details/genai-vs-simai" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="blog-details-share-icon li"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.45 20.45h-3.55V14.75c0-1.36-.03-3.1-1.89-3.1-1.9 0-2.19 1.48-2.19 3.01v5.8H9.26V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.45v6.29ZM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12ZM6.9 20.45H3.77V9H6.9ZM21.71 0H2.29C1.02 0 0 1.01 0 2.26v19.49C0 23.74 1.02 24 2.29 24h19.42C22.98 24 24 23.74 24 21.75V2.26C24 1.01 22.98 0 21.71 0Z"/>
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsView;
