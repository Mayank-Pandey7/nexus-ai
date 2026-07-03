import React, { useEffect } from 'react';
const nikhilChoudharyPhoto = '/assets/images/nikhil-choudhary.jpg';

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

  const departments = ['Leadership', 'Engineering', 'Design', 'HR & Operations'];

  const allMembers: TeamMember[] = [
    {
      name: "Nikhil Choudhary",
      role: "Founder & CEO",
      department: "Leadership",
      photo: nikhilChoudharyPhoto,
      bio: "Nikhil is the visionary leading TrialShopy Marketplace, bringing 6+ years of engineering leadership from NIT Patna to shape the future of digital retail.",
      linkedin: "https://www.linkedin.com/in/nikhil-choudhary-1st-27b4621b8/"
    },
    {
      name: "Shubhang Sheel",
      role: "Co-Founder & CMO",
      department: "Leadership",
      photo: "/assets/images/shubhangu.jpg",
      bio: "Shubhang directs the brand positioning, digital distribution channels, and growth strategies across global retail marketplaces.",
      linkedin: "https://www.linkedin.com/"
    },
    {
      name: "Suresh Choudhary",
      role: "Director",
      department: "Leadership",
      photo: "/assets/images/suresh-ch.jpg",
      bio: "Suresh manages key corporate relations, retail alliances, and strategic corporate investments.",
      linkedin: "https://www.linkedin.com/"
    },
    {
      name: "Vinamra",
      role: "SDE2",
      department: "Engineering",
      photo: "/assets/images/vinamra.jpg",
      bio: "Vinamra is a Software Development Engineer 2 at Trialshopy, specializing in scaling system performance and backend databases.",
      linkedin: "https://www.linkedin.com/"
    },
    {
      name: "Satyam",
      role: "SDE1",
      department: "Engineering",
      photo: "/assets/images/satyam.jpg",
      bio: "Satyam is a Software Development Engineer 1 at Trialshopy, focused on e-commerce microservices and database integration.",
      linkedin: "https://www.linkedin.com/"
    },
    {
      name: "Janhvi",
      role: "SDE1",
      department: "Engineering",
      photo: "/assets/images/janhvi2.png",
      bio: "Janhvi is a Software Development Engineer 1 at Trialshopy, working on frontend interfaces and low-latency digital try-on integrations.",
      linkedin: "https://www.linkedin.com/"
    },
    {
      name: "Gurprit Singh",
      role: "Senior Tester",
      department: "Engineering",
      photo: "/assets/images/gurpit.jpg",
      bio: "Gurprit leads quality assurance and automated testing across all platform integrations to guarantee release stability.",
      linkedin: "https://www.linkedin.com/"
    },
    {
      name: "Yashika",
      role: "Frontend Dev",
      department: "Design",
      photo: "/assets/images/yashika.jpg",
      bio: "Yashika develops premium, highly interactive client-side web layers and fluid graphics rendering loops.",
      linkedin: "https://www.linkedin.com/"
    },
    {
      name: "Ritu Singh",
      role: "UI/UX",
      department: "Design",
      photo: "/assets/images/ritu.png",
      bio: "Ritu is a UI/UX Designer, crafting intuitive human-centered wireframes and user flows for virtual fittings.",
      linkedin: "https://www.linkedin.com/"
    },
    {
      name: "Dipti",
      role: "COO",
      department: "HR & Operations",
      photo: "/assets/images/dipti.jpg",
      bio: "Dipti leads operations at Trialshopy, coordinating daily operational execution and cross-functional corporate planning.",
      linkedin: "https://www.linkedin.com/"
    },
    {
      name: "Mahi Nigam",
      role: "HR Intern",
      department: "HR & Operations",
      photo: "/assets/images/mahi.jpg",
      bio: "Janhvi is an HR Executive, driving talent acquisition, onboarding workflows, and community building programs.",
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
          Discover the complete leadership and engineering team driving advanced 3D &amp; immersive AR retail technology at TrialShopy.
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
