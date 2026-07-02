import React, { useState } from 'react';

const CTA: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [project, setProject] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you, ${name}! Your request has been received. Our sales team will get in touch with you shortly.`);
    setName('');
    setPhone('');
    setProject('');
  };

  return (
    <section className="site-footer-contact" aria-labelledby="site-footer-contact-heading">
      <div className="site-footer-inner site-footer-contact-inner">
        <div className="site-footer-form-wrap" data-reveal="left">
          <h2 id="site-footer-contact-heading" className="site-footer-heading">
            Get in <span className="site-footer-heading-highlight">Touch</span>
          </h2>
          <form className="site-footer-form" onSubmit={handleSubmit}>
            <label className="site-footer-field">
              <span>Your Name</span>
              <input 
                type="text" 
                placeholder="Enter your full name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required 
              />
            </label>
            <label className="site-footer-field">
              <span>Your Phone</span>
              <input 
                type="text" 
                placeholder="Enter your phone number" 
                value={phone} 
                onChange={(e) => setPhone(e.target.value)} 
                required 
              />
            </label>
            <label className="site-footer-field">
              <span>More About The Project</span>
              <textarea 
                rows={6} 
                placeholder="Tell us what you are building" 
                value={project} 
                onChange={(e) => setProject(e.target.value)} 
                required 
              />
            </label>
            <button type="submit" className="site-footer-submit">Submit Message</button>
          </form>
        </div>
        
        <div className="site-footer-hero-media" aria-hidden="true" data-reveal="right">
          <video 
            className="site-footer-animation" 
            src="/assets/media/logo-animation.mov" 
            autoPlay 
            muted 
            loop 
            playsInline 
            preload="metadata"
          ></video>
        </div>
      </div>
    </section>
  );
};

export default CTA;
