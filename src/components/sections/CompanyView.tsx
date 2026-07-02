import React, { useState, useEffect } from 'react';
import nexusaiLogoWhiteSparkle from '../../assets/images/nexusai-logo-white-sparkle.png';

interface CompanyViewProps {
  onBackToHome: () => void;
}

const CompanyView: React.FC<CompanyViewProps> = ({ onBackToHome }) => {
  const [selectedMember, setSelectedMember] = useState<any | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const teamMembers = [
    {
      name: "Nikhil Choudhary",
      designation: "Founder & CEO",
      company: "Trialshopy",
      experience: "6+ Years",
      bio: "Nikhil Choudhary is the Founder & CEO of Trialshopy, bringing a wealth of expertise in Computer Science and Data Science from NIT Patna. He leads the company's long-term technology vision and retail partnerships to build scale-ready AR/AI retail configurations.",
      photo: "https://stagingmedia.pointai.com/assets/images/nitin-vats.jpeg",
      linkedin: "https://www.linkedin.com/in/nitin-vats-29a7a4118/"
    },
    {
      name: "Pooja Mallick",
      designation: "COO & UX Lead",
      company: "Trialshopy",
      experience: "4+ Years",
      bio: "Pooja Mallick is the Chief Operating Officer and User Experience Lead at Trialshopy. She specializes in designing intuitive, human-centered AR flows that simplify virtual clothing try-ons and conversion paths.",
      photo: "https://stagingmedia.pointai.com/assets/images/investors/ganapathy-subramaniam.jpeg",
      linkedin: "https://www.linkedin.com/"
    },
    {
      name: "Suresh Choudhry",
      designation: "Director & Co-Founder",
      company: "Trialshopy",
      experience: "10+ Years",
      bio: "Suresh Choudhry drives the business architecture and market positioning at Trialshopy, bringing a decade of expertise in scaling e-commerce distribution networks and corporate investment strategies.",
      photo: "https://stagingmedia.pointai.com/assets/images/investors/lip-bu-tan.jpg",
      linkedin: "https://www.linkedin.com/"
    },
    {
      name: "Rohan Mehta",
      designation: "Lead Frontend Engineer",
      company: "Trialshopy",
      experience: "5+ Years",
      bio: "Rohan leads the web interface engineering, crafting premium, responsive web platforms and integrating low-latency 3D scene modules that execute directly in browsers.",
      photo: "https://stagingmedia.pointai.com/assets/images/investors/vijay-shekhar-sharma.jpeg",
      linkedin: "https://www.linkedin.com/"
    },
    {
      name: "Siddharth Rao",
      designation: "AI & Computer Vision Engineer",
      company: "Trialshopy",
      experience: "4+ Years",
      bio: "Siddharth designs the proprietary deep learning computer vision frameworks, enabling real-time size mapping, texture detection, and model fit evaluation.",
      photo: "https://stagingmedia.pointai.com/assets/images/investors/muralikrishnan-b.jpeg",
      linkedin: "https://www.linkedin.com/"
    },
    {
      name: "Karan Malhotra",
      designation: "Lead Mobile Architect",
      company: "Trialshopy",
      experience: "6+ Years",
      bio: "Karan manages mobile product deployment, building fluid cross-platform AR/VR fitting app integrations leveraging Flutter and native graphics layers.",
      photo: "https://stagingmedia.pointai.com/assets/images/investors/vinod-sood.jpeg",
      linkedin: "https://www.linkedin.com/"
    }
  ];

  const handleOpenModal = (member: any) => {
    setSelectedMember(member);
    setTimeout(() => {
      setIsModalOpen(true);
    }, 10);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedMember(null);
    }, 300);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleCloseModal();
      }
    };
    if (selectedMember) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedMember]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  const news = [
    {
      date: "November 12, 2022",
      title: "We wanted to change the way people buy clothes online — digital twin does that with just a selfie, says Aarav Sharma of Nexus AI",
      image: "https://stagingmedia.pointai.com/assets/images/news/times-now.png",
      url: "https://www.timesnownews.com/technology-science/we-wanted-to-change-the-way-people-buy-clothes-online-digital-twin-does-that-with-just-a-selfie-says-nitin-vats-of-tryndbuy-article-95473161"
    },
    {
      date: "December 07, 2020",
      title: "Fashion AI gets a booster shot from pandemic — Indian startups TryNDBuy and AskSid help global fashion brands pivot as buyers shift from bricks to clicks",
      image: "https://stagingmedia.pointai.com/assets/images/news/livemint.png",
      url: "https://www.livemint.com/news/business-of-life/fashion-ai-gets-a-booster-shot-from-pandemic-11607260509374.html"
    },
    {
      date: "February 24, 2020",
      title: "Why an Indian virtual fitting room has a fit in China — William Bao Bean on TryNdBuy and the Chinaccelerator",
      image: "https://stagingmedia.pointai.com/assets/images/news/china-speakers.png",
      url: "https://www.china-speakers-bureau.com/2020/02/24/why-an-indian-virtual-fitting-room-has-a-fit-in-china-william-bao-bean/"
    },
    {
      date: "January 03, 2019",
      title: "Step into this virtual trial room to TryNDBuy that perfect dress or pair of denims",
      image: "https://stagingmedia.pointai.com/assets/images/news/yourstory.jpg",
      url: "https://yourstory.com/2019/01/virtual-trial-room-tryndbuy-fashion"
    }
  ];

  const offices = [
    {
      city: "New Delhi",
      address: "1614A-B, The Iconic Correnthum Tower, Sector 62, Opp. Electronic City Metro Station, Noida, INDIA 201309",
      icon: "https://stagingmedia.pointai.com/assets/images/new-delhi.png"
    },
    {
      city: "San Francisco",
      address: "5746, Corsa Avenue, Suite 110, Westlake, San Francisco, CA-91362, USA",
      icon: "https://stagingmedia.pointai.com/assets/images/san-francisco.png"
    },
    {
      city: "London",
      address: "1, Wilde House, 10, Gloucester Terrace, W2 3DL, London, U.K.",
      icon: "https://stagingmedia.pointai.com/assets/images/london.png"
    },
    {
      city: "Shanghai",
      address: "Hero Center, Level 1, Building 3, West Entrance N.28, Yuyuan East Rd, Jing'An District, Shanghai 200040.",
      icon: "https://stagingmedia.pointai.com/assets/images/shanghai.png"
    }
  ];

  return (
    <div className="company-page tab-pop-in">
      {/* Hero Section */}
      <section className="company-hero" aria-labelledby="company-hero-heading">
        <div className="company-hero-bg" aria-hidden="true">
          <img 
            src="https://stagingmedia.pointai.com/assets/images/company.jpg" 
            alt="Nexus AI company hero background" 
            className="company-hero-image" 
            style={{ opacity: 1 }}
          />
        </div>
        <div className="company-hero-overlay" aria-hidden="true"></div>
        
        {/* Absolute Back Trigger */}
        <div className="company-hero-header-row" style={{ padding: '6.5rem 2rem 0', zIndex: 10 }}>
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

        <div className="company-hero-content" style={{ marginTop: 'auto', marginBottom: 'auto' }}>
          <p className="company-hero-eyebrow" data-reveal-immediate="true" data-reveal-delay="0">Who we are</p>
          <h1 id="company-hero-heading" className="company-hero-title" data-reveal-immediate="true" data-reveal-delay="80">
            Our <span className="company-hero-title-accent">Story</span>
          </h1>
          <p className="company-hero-caption">
            At Nexus AI, we're more than just a technology company. We're a team of visionaries, creators, and problem-solvers dedicated to transforming the way brands and customers connect in the digital age.
          </p>
        </div>

        {/* Scroll cue at the bottom center */}
        <div className="scroll-cue" aria-hidden="true" style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)' }}>
          <span className="scroll-cue-text">Scroll for more</span>
          <span className="scroll-cue-line" style={{ background: 'rgba(0,0,0,0.25)' }}></span>
        </div>
      </section>

      {/* Founder Nitin Vats Section */}
      <section className="company-leader" aria-labelledby="company-leader-heading">
        <div className="company-inner company-leader-inner">
          <article className="company-leader-card reveal-hover-lift" data-reveal="left" style={{ margin: '0 auto' }}>
            <div className="company-leader-photo-wrap">
              <img 
                src="https://stagingmedia.pointai.com/assets/images/nitin-vats.jpeg" 
                alt="Nikhil Choudhary" 
                className="company-leader-photo" 
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <h3 className="company-leader-name-wrap">
              <a 
                target="_blank" 
                rel="noopener noreferrer" 
                className="company-leader-name" 
                href="https://www.linkedin.com/"
              >
                Nikhil Choudhary
              </a>
            </h3>
            <p className="company-leader-role">Founder &amp; CEO</p>
            <div className="company-leader-social" aria-label="Founder social links">
              <a 
                target="_blank" 
                rel="noopener noreferrer" 
                className="company-social-icon-btn" 
                aria-label="LinkedIn" 
                href="https://www.linkedin.com/"
              >
                <img 
                  src="https://stagingmedia.pointai.com/assets/images/linkedin.png" 
                  alt="LinkedIn icon" 
                  className="company-linkedin-icon" 
                  width="18" 
                  height="18" 
                  loading="lazy"
                />
              </a>
            </div>
          </article>

          <div className="company-leader-copy" data-reveal="right">
            <h2 id="company-leader-heading" className="company-section-title company-section-title--light">
              Visionary <span className="company-accent">Leader</span>
            </h2>
            <p className="company-leader-bio" data-reveal="true" data-reveal-delay="120">
              Nikhil Choudhary is the Founder and &amp; CEO of Trialshopy, Bringing a wealth of expertise from a distinguished career in industrial automation spanning over six years. A proud alumnus of NIT Patna, he holds a B.Tech in Computer Science and Engineering and an M.Tech in Data Science.
              <br /><br />
              Throughout his career, Nikhil has made significant contributions while working with leading organizations such as Altorum Leren, Repido, Msol Technology, and Walmart. His experience includes delivering over 30 successful projects, showcasing his ability to drive innovation and deliver impactful solutions.
              <br /><br />
              At Trialshopy, Nikhil is committed to redefining the technological landscape, utilizing data-driven insights to enhance operational efficiency and create exceptional value for clients.
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Team Grid */}
      <section className="company-team" aria-labelledby="company-team-heading">
        <div className="company-inner">
          <h2 id="company-team-heading" className="company-section-title company-section-title--light company-section-title--center" data-reveal="true">
            Meet the <span className="company-accent">Team</span>
          </h2>
          <p className="company-section-lead company-section-lead--light" data-reveal="true" style={{ textAlign: 'center' }}>
            The innovators, creators, and leaders driving the future of immersive AI technology at Trialshopy.
          </p>

          <div className="company-team-grid" data-reveal-stagger="true">
            {teamMembers.map((member, index) => (
              <article 
                key={index} 
                className="company-team-card reveal-hover-lift" 
                data-reveal-item="true"
                style={{ cursor: 'pointer' }}
                onClick={() => handleOpenModal(member)}
              >
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  <div className="company-team-photo-wrap" style={{ borderRadius: '50%' }}>
                    <img 
                      src={member.photo} 
                      alt={member.name} 
                      className="company-team-photo" 
                      style={{ 
                        position: 'absolute', 
                        inset: 0, 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover',
                        objectPosition: member.name === 'Nikhil Choudhary' ? '22% center' : 'center'
                      }}
                    />
                  </div>
                </div>
                <h3 className="company-team-name-wrap" style={{ textAlign: 'center' }}>
                  <span className="company-team-name">{member.name}</span>
                </h3>
                <p className="company-team-role" style={{ textAlign: 'center', color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', marginTop: '0.35rem' }}>
                  {member.designation}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Team Member Detail Modal */}
      {selectedMember && (
        <div 
          className={`team-modal-overlay ${isModalOpen ? 'team-modal-overlay--active' : ''}`}
          onClick={handleOverlayClick}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            backdropFilter: 'blur(12px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: isModalOpen ? 1 : 0,
            transition: 'opacity 0.3s ease',
            padding: '1.5rem'
          }}
        >
          <div 
            className="team-modal-content"
            style={{
              background: 'linear-gradient(135deg, rgba(28, 28, 30, 0.9) 0%, rgba(18, 18, 20, 0.95) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '24px',
              padding: '2.5rem 2rem',
              maxWidth: '520px',
              width: '100%',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5), inset 0 1px rgba(255, 255, 255, 0.1)',
              transform: isModalOpen ? 'scale(1)' : 'scale(0.95)',
              opacity: isModalOpen ? 1 : 0,
              transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease',
              position: 'relative'
            }}
          >
            {/* Close Button Top Right */}
            <button 
              onClick={handleCloseModal}
              aria-label="Close modal"
              style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.25rem',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '50%',
                width: '2rem',
                height: '2rem',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
                e.currentTarget.style.transform = 'rotate(90deg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.transform = 'rotate(0)';
              }}
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Modal Body */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              {/* Large Profile Photo */}
              <div 
                style={{ 
                  width: '7.5rem', 
                  height: '7.5rem', 
                  borderRadius: '50%', 
                  overflow: 'hidden', 
                  position: 'relative',
                  border: '2px solid rgba(255, 255, 255, 0.15)',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
                  marginBottom: '1.25rem',
                  backgroundColor: '#1c1c1e'
                }}
              >
                <img 
                  src={selectedMember.photo} 
                  alt={selectedMember.name} 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    objectPosition: selectedMember.name === 'Nikhil Choudhary' ? '22% center' : 'center'
                  }}
                />
              </div>

              {/* Name & Designation */}
              <h3 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#ffffff', margin: 0, letterSpacing: '-0.02em' }}>
                {selectedMember.name}
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--secondary-color)', fontWeight: 600, margin: '0.25rem 0 0' }}>
                {selectedMember.designation}
              </p>
              
              {/* Company & Experience pills */}
              <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.75rem', marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '999px', padding: '0.2rem 0.65rem', fontWeight: 500 }}>
                  {selectedMember.company}
                </span>
                <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '999px', padding: '0.2rem 0.65rem', fontWeight: 500 }}>
                  Experience: {selectedMember.experience}
                </span>
              </div>

              {/* Bio Divider */}
              <div style={{ width: '100%', height: '1px', background: 'rgba(255, 255, 255, 0.08)', marginBottom: '1.25rem' }} />

              {/* Short Bio */}
              <p style={{ fontSize: '0.925rem', color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.6, margin: '0 0 1.75rem', fontWeight: 400 }}>
                {selectedMember.bio}
              </p>

              {/* LinkedIn Button */}
              <a 
                href={selectedMember.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  color: '#ffffff',
                  borderRadius: '999px',
                  padding: '0.75rem 2rem',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  transition: 'all 0.25s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#0077b5';
                  e.currentTarget.style.borderColor = 'transparent';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      )}

      {/* In the News Scroll Box */}
      <section className="company-news" aria-labelledby="company-news-heading">
        <div className="company-inner company-news-inner">
          <h2 id="company-news-heading" className="company-section-title" data-reveal="true">
            In The <span className="company-accent">News</span>
          </h2>
        </div>

        <div className="company-news-scroll-wrap">
          <div className="company-news-scroll" aria-label="News articles" data-reveal-stagger="true">
            {news.map((item, index) => (
              <article key={index} className="company-news-card reveal-hover-lift" data-reveal-item="true">
                <div className="company-news-image-wrap">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="company-news-image" 
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div className="company-news-body">
                  <p className="company-news-category">{item.date}</p>
                  <h3 className="company-news-title">{item.title}</h3>
                  <a 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="company-news-cta" 
                    href={item.url}
                  >
                    Read more
                    <span className="company-news-cta-arrow" aria-hidden="true">
                      <svg viewBox="0 0 16 16" width="14" height="14" fill="none">
                        <path d="M4.5 11.5 11.5 4.5M5.5 4.5h6v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Stay Connected social pills */}
      <section className="company-connected" aria-labelledby="company-connected-heading">
        <div className="company-connected-watermark" aria-hidden="true">
          <img 
            src={nexusaiLogoWhiteSparkle} 
            alt="Nexus AI watermark logo" 
            className="company-connected-watermark-img" 
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain', opacity: 0.12 }}
          />
        </div>

        <div className="company-inner company-connected-inner">
          <span className="company-connected-icon" aria-hidden="true">
            <img 
              src={nexusaiLogoWhiteSparkle} 
              alt="Nexus AI icon" 
              className="company-connected-icon-img" 
              width="36" 
              height="36" 
              loading="lazy" 
            />
          </span>
          <h2 id="company-connected-heading" className="company-connected-title" data-reveal="true">
            Stay <span className="company-accent">Connected</span>
          </h2>
          <p className="company-connected-lead" data-reveal="true">Don't miss on our updates</p>

          <div className="company-social-row" data-reveal-stagger="true">
            <a target="_blank" rel="noopener noreferrer" className="company-social-pill" data-reveal-item="true" href="https://x.com/maynkio">
              <span className="company-social-pill-label">Twitter / X</span>
              <span className="company-social-pill-icon-wrap" aria-hidden="true">
                <svg className="company-social-pill-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
              </span>
            </a>

            <a target="_blank" rel="noopener noreferrer" className="company-social-pill" data-reveal-item="true" href="https://www.facebook.com/mayank__pandeyy/">
              <span className="company-social-pill-label">Facebook</span>
              <span className="company-social-pill-icon-wrap" aria-hidden="true">
                <svg className="company-social-pill-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                </svg>
              </span>
            </a>

            <a target="_blank" rel="noopener noreferrer" className="company-social-pill" data-reveal-item="true" href="https://www.instagram.com/mayank__pandeyy/">
              <span className="company-social-pill-label">Instagram</span>
              <span className="company-social-pill-icon-wrap" aria-hidden="true">
                <svg className="company-social-pill-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path>
                </svg>
              </span>
            </a>

            <a target="_blank" rel="noopener noreferrer" className="company-social-pill" data-reveal-item="true" href="https://www.linkedin.com/in/mynkdev/">
              <span className="company-social-pill-label">LinkedIn</span>
              <span className="company-social-pill-icon-wrap" aria-hidden="true" style={{ padding: '0.45rem' }}>
                <img 
                  src="https://stagingmedia.pointai.com/assets/images/linkedin.png" 
                  alt="LinkedIn icon" 
                  className="company-social-pill-icon company-social-pill-icon--linkedin" 
                  width="14" 
                  height="14" 
                  loading="lazy" 
                />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="company-values" aria-labelledby="company-values-heading">
        <div className="company-inner">
          <h2 id="company-values-heading" className="company-section-title" data-reveal="true">
            Our <span className="company-accent">Global Presence</span>
          </h2>

          <div className="company-values-grid" data-reveal-stagger="true">
            {offices.map((office, index) => (
              <article key={index} className="company-value-card reveal-hover-lift" data-reveal-item="true">
                <span className="company-value-icon" aria-hidden="true">
                  <img 
                    src={office.icon} 
                    alt={`${office.city} Office Icon`} 
                    className="company-value-icon-img" 
                    width="36" 
                    height="36" 
                    loading="lazy" 
                  />
                </span>
                <h3 className="company-value-title">{office.city}</h3>
                <p className="company-value-body">{office.address}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompanyView;
