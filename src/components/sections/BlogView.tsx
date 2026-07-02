import React from 'react';

interface BlogViewProps {
  onBackToHome: () => void;
}

const BlogView: React.FC<BlogViewProps> = ({ onBackToHome }) => {
  const blogs = [
    {
      title: "Generative AI vs PointAI's Simulation AI",
      category: "In the fast-evolving world of fashion e-commerce, AI-powered Virtual Try-on (VTO) tools promised to solve one of retail's biggest questions…..",
      image: "https://stagingmedia.pointai.com/assets/blogs/blogs/genai-vs-simai.jpeg",
      url: "https://www.pointai.com/blog-details/genai-vs-simai"
    }
  ];

  return (
    <div className="blog-page tab-pop-in">
      {/* Blog Hero Section */}
      <section className="blog-hero" aria-labelledby="blog-hero-heading">
        <div className="blog-hero-bg" aria-hidden="true">
          <img 
            src="https://stagingmedia.pointai.com/assets/images/blog-hero.jpg" 
            alt="PointAI blog hero background" 
            className="blog-hero-image" 
            style={{ opacity: 1 }}
          />
        </div>
        <div className="blog-hero-overlay" aria-hidden="true"></div>

        {/* Absolute Back Trigger */}
        <div className="blog-hero-header-row" style={{ padding: '6.5rem 2rem 0', zIndex: 10 }}>
          <button 
            onClick={onBackToHome}
            style={{ 
              background: 'rgba(255, 255, 255, 0.85)', 
              border: '1px solid rgba(0, 0, 0, 0.08)', 
              borderRadius: '999px',
              color: '#1a1c20', 
              fontWeight: 600, 
              fontSize: '0.9rem', 
              cursor: 'pointer', 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.6rem',
              padding: '0.6rem 1.4rem',
              transition: 'background 0.2s, transform 0.2s',
              boxShadow: '0 4px 12px rgba(0,0,0,0.06)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#ffffff';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.85)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Back to Home
          </button>
        </div>

        <div className="blog-hero-inner home-container" style={{ marginTop: 'auto', marginBottom: 'auto' }}>
          <div className="blog-hero-visual">
            <a 
              className="blog-hero-simulative-card-link" 
              aria-label="Read latest blog: Generative AI vs PointAI's Simulation AI" 
              href="https://www.pointai.com/blog-details/genai-vs-simai"
              target="_blank"
              rel="noopener noreferrer"
            >
              <article className="research-simulative-card reveal-hover-lift blog-hero-simulative-card is-revealed">
                <img 
                  src="https://stagingmedia.pointai.com/assets/blogs/blogs/genai-vs-simai.jpeg" 
                  alt="Generative AI vs PointAI's Simulation AI" 
                  className="blog-simulative-card-img" 
                  style={{ opacity: 1 }}
                />
                <div className="research-simulative-card-body">
                  <h3 className="research-simulative-card-title">Generative AI vs PointAI's Simulation AI</h3>
                  <p className="research-simulative-card-text">
                    In the fast-evolving world of fashion e-commerce, AI-powered Virtual Try-on (VTO) tools promised to solve one of retail's biggest questions…..
                  </p>
                  <span className="blog-hero-simulative-card-cta">
                    Read article
                    <span className="blog-hero-simulative-card-cta-icon" aria-hidden="true">↗</span>
                  </span>
                </div>
              </article>
            </a>
          </div>

          <div className="blog-hero-copy">
            <h1 id="blog-hero-heading" className="blog-hero-title">
              Latest in <br />
              <span className="blog-hero-title-accent">Fashion &amp; AI</span>
            </h1>
            <p className="blog-hero-lead">
              Trusted innovation backed by internationally recognized patents across AI, virtual try-on, and digital visualization technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Recent Blogs Grid */}
      <section className="blog-recent" aria-labelledby="blog-recent-heading">
        <div className="blog-recent-inner">
          <h2 id="blog-recent-heading" className="blog-recent-title">
            Recent <span className="blog-recent-title-accent">Blogs</span>
          </h2>
          <div className="blog-recent-grid">
            {blogs.map((blog, index) => (
              <article key={index} className="blog-card reveal-hover-lift">
                <a 
                  className="blog-card-image-link" 
                  href={blog.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="blog-card-image-wrap">
                    <img 
                      src={blog.image} 
                      alt={blog.title} 
                      className="blog-card-image" 
                      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </span>
                </a>
                <div className="blog-card-content">
                  <a 
                    className="blog-card-title-link" 
                    href={blog.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="blog-card-infor">
                      <h3 className="blog-card-title">{blog.title}</h3>
                      <p className="blog-card-category">{blog.category}</p>
                    </div>
                  </a>
                  <a 
                    className="blog-card-read-more" 
                    href={blog.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read more
                    <span className="blog-card-read-more-icon" aria-hidden="true">↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogView;
