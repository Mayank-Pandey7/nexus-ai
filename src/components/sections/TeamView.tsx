import React, { useEffect } from 'react';
import nikhilChoudharyPhoto from '../../assets/images/nikhil-choudhary.jpg';

interface TeamViewProps {
  onBackToCompany: () => void;
}

interface TeamMember {
  name: string;
  role: string;
  department: string;
  photo: string;
  bio: string;
  linkedin: string;
}

const TeamView: React.FC<TeamViewProps> = ({ onBackToCompany }) => {
  useEffect(() => {
    // Avoid resetting scroll, since behavior requires scrolling smoothly to target section
  }, []);

  const departments = ['Leadership', 'Engineering', 'Design', 'QA', 'HR & Operations'];

  const allMembers: TeamMember[] = [
    {
      name: "Nikhil Choudhary",
      role: "Founder & CEO",
      department: "Leadership",
      photo: nikhilChoudharyPhoto,
      bio: "Nikhil is the visionary leading Trialshopy Marketplace, bringing 6+ years of engineering leadership from NIT Patna to shape the future of digital retail.",
      linkedin: "https://www.linkedin.com/in/nikhil-choudhary-1st-27b4621b8/"
    },
    {
      name: "Shubhang Sheel",
      role: "Co-Founder & CMO",
      department: "Leadership",
      photo: "https://stagingmedia.pointai.com/assets/images/investors/muralikrishnan-b.jpeg",
      bio: "Shubhang directs the brand positioning, digital distribution channels, and growth strategies across global retail marketplaces.",
      linkedin: "https://www.linkedin.com/"
    },
    {
      name: "Suresh Choudhary",
      role: "Director",
      department: "Leadership",
      photo: "https://stagingmedia.pointai.com/assets/images/investors/lip-bu-tan.jpg",
      bio: "Suresh manages key corporate relations, retail alliances, and strategic corporate investments.",
      linkedin: "https://www.linkedin.com/"
    },
    {
      name: "Dipti",
      role: "COO",
      department: "HR & Operations",
      photo: "https://stagingmedia.pointai.com/assets/images/investors/ganapathy-subramaniam.jpeg",
      bio: "Dipti leads the daily operational framework, merchant relations, and cross-functional performance tracking.",
      linkedin: "https://www.linkedin.com/"
    },
    {
      name: "Vivek",
      role: "CTO",
      department: "Engineering",
      photo: "https://stagingmedia.pointai.com/assets/images/investors/vijay-shekhar-sharma.jpeg",
      bio: "Vivek manages the engineering core, developing low-latency AR algorithms and cloud render infrastructure.",
      linkedin: "https://www.linkedin.com/"
    },
    {
      name: "Yashika",
      role: "Frontend Developer",
      department: "Design",
      photo: "https://stagingmedia.pointai.com/assets/images/investors/ganapathy-subramaniam.jpeg",
      bio: "Yashika specializes in high-fidelity interactive user interfaces and smooth web experiences.",
      linkedin: "https://www.linkedin.com/"
    },
    {
      name: "Satyam",
      role: "SDE1",
      department: "Engineering",
      photo: "https://stagingmedia.pointai.com/assets/images/investors/vinod-sood.jpeg",
      bio: "Satyam builds backend systems, commerce microservices, and database pipelines.",
      linkedin: "https://www.linkedin.com/"
    },
    {
      name: "Rohan Mehta",
      role: "Lead Frontend Engineer",
      department: "Engineering",
      photo: "https://stagingmedia.pointai.com/assets/images/investors/vijay-shekhar-sharma.jpeg",
      bio: "Rohan drives UI responsiveness and handles integrations of virtual try-on models.",
      linkedin: "https://www.linkedin.com/"
    },
    {
      name: "Siddharth Rao",
      role: "AI Engineer",
      department: "Engineering",
      photo: "https://stagingmedia.pointai.com/assets/images/investors/muralikrishnan-b.jpeg",
      bio: "Siddharth implements deep learning and shape-matching computer vision pipelines.",
      linkedin: "https://www.linkedin.com/"
    },
    {
      name: "Karan Malhotra",
      role: "Mobile Architect",
      department: "Engineering",
      photo: "https://stagingmedia.pointai.com/assets/images/investors/vinod-sood.jpeg",
      bio: "Karan leads the cross-platform native SDK development and mobile graphics layers.",
      linkedin: "https://www.linkedin.com/"
    },
    {
      name: "Pooja Mallick",
      role: "UX Lead",
      department: "Design",
      photo: "https://stagingmedia.pointai.com/assets/images/investors/ganapathy-subramaniam.jpeg",
      bio: "Pooja builds intuitive interaction systems that make virtual try-ons effortless.",
      linkedin: "https://www.linkedin.com/"
    },
    {
      name: "Neha Sharma",
      role: "HR Manager",
      department: "HR & Operations",
      photo: "https://stagingmedia.pointai.com/assets/images/investors/ganapathy-subramaniam.jpeg",
      bio: "Neha drives company culture, team recruitment, and talent development projects.",
      linkedin: "https://www.linkedin.com/"
    },
    {
      name: "Amit Kumar",
      role: "QA Lead",
      department: "QA",
      photo: "https://stagingmedia.pointai.com/assets/images/investors/vinod-sood.jpeg",
      bio: "Amit directs automation testing across our virtual fitting SDK platform integrations.",
      linkedin: "https://www.linkedin.com/"
    },
    {
      name: "Ritu Singh",
      role: "QA Analyst",
      department: "QA",
      photo: "https://stagingmedia.pointai.com/assets/images/investors/ganapathy-subramaniam.jpeg",
      bio: "Ritu leads feature release tests, cross-browser compatibility, and user acceptance testing.",
      linkedin: "https://www.linkedin.com/"
    }
  ];

  return (
    <div style={{ background: '#000000', minHeight: '100vh', color: '#ffffff', paddingBottom: '8rem' }}>
      {/* Back Button Header */}
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '6.5rem 2rem 2rem 2rem' }}>
        <button 
          onClick={onBackToCompany}
          style={{ 
            background: 'rgba(255, 255, 255, 0.03)', 
            border: '1px solid rgba(255, 255, 255, 0.08)', 
            borderRadius: '999px',
            color: '#ffffff', 
            fontWeight: 500, 
            fontSize: '0.85rem', 
            cursor: 'pointer', 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.4rem',
            padding: '0.5rem 1.1rem',
            transition: 'all 0.2s',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = '#ff8a00';
            e.currentTarget.style.color = '#ff8a00';
            e.currentTarget.style.transform = 'translateX(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
            e.currentTarget.style.color = '#ffffff';
            e.currentTarget.style.transform = 'translateX(0)';
          }}
        >
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back
        </button>
      </div>

      {/* Main Title Section */}
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem 4rem 2rem', textAlign: 'center' }}>
        <h1 data-reveal="true" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 'bold', margin: '0 0 1rem 0', letterSpacing: '-0.03em' }}>
          Meet the <span className="company-accent" style={{ color: '#ff8a00' }}>Innovators</span>
        </h1>
        <p data-reveal="true" data-reveal-delay="100" style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: 'rgba(255, 255, 255, 0.6)', maxWidth: '750px', margin: '0 auto', lineHeight: 1.6 }}>
          Discover the complete leadership and engineering team driving advanced 3D &amp; immersive AR retail technology at Trialshopy.
        </p>
      </div>

      {/* Department Sections */}
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
        {departments.map((dept) => {
          const deptMembers = allMembers.filter(m => m.department === dept);
          if (deptMembers.length === 0) return null;

          return (
            <div key={dept} style={{ marginBottom: '5rem' }}>
              <h2 data-reveal="true" style={{ fontSize: '1.75rem', fontWeight: 700, borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '0.75rem', marginBottom: '2.5rem', letterSpacing: '-0.02em' }}>
                {dept}
              </h2>

              <div className="company-team-grid" data-reveal-stagger="true" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
                {deptMembers.map((member, idx) => (
                  <div 
                    key={idx}
                    className="company-team-card reveal-hover-lift"
                    data-reveal-item="true"
                    style={{
                      background: 'linear-gradient(135deg, rgba(28, 28, 30, 0.5) 0%, rgba(18, 18, 20, 0.6) 100%)',
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                      borderRadius: '20px',
                      padding: '1.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1.25rem',
                      transition: 'all 0.3s cubic-bezier(0.25, 1, 0.5, 1)',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.borderColor = 'rgba(255, 138, 0, 0.2)';
                      e.currentTarget.style.boxShadow = '0 12px 24px rgba(255, 138, 0, 0.1)';
                      const img = e.currentTarget.querySelector('img') as HTMLImageElement;
                      if (img) img.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                      e.currentTarget.style.boxShadow = 'none';
                      const img = e.currentTarget.querySelector('img') as HTMLImageElement;
                      if (img) img.style.transform = 'scale(1)';
                    }}
                  >
                    <div style={{ width: '4.5rem', height: '4.5rem', borderRadius: '50%', overflow: 'hidden', position: 'relative', flexShrink: 0 }}>
                      <img 
                        src={member.photo} 
                        alt={member.name} 
                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                      />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.15rem', fontWeight: 600, margin: 0, color: '#ffffff' }}>{member.name}</h3>
                      <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', margin: '0.25rem 0 0' }}>{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TeamView;
