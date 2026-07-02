import React, { useState, useEffect } from 'react';
const nexusaiLogo = '/assets/images/nexusai-logo-black.png';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSignUp) {
      alert(`Welcome, ${name}! Your Nexus AI account has been created successfully.`);
    } else {
      alert(`Successfully signed in as ${email}. Welcome back to Nexus AI!`);
    }
    // Reset forms and close modal
    setEmail('');
    setPassword('');
    setName('');
    onClose();
  };

  return (
    <div className="login-modal-overlay" onClick={onClose} aria-modal="true" role="dialog">
      <div 
        className="login-modal-card reveal-hover-lift" 
        onClick={(e) => e.stopPropagation()}
        style={{ animation: 'reveal-scale 0.4s cubic-bezier(0.25, 1, 0.5, 1) both' }}
      >
        <button 
          type="button" 
          className="login-modal-close" 
          aria-label="Close modal" 
          onClick={onClose}
        >
          &times;
        </button>

        <div className="login-modal-header">
          <div className="login-modal-logo" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}>
            <img src={nexusaiLogo} alt="Nexus AI logo" style={{ width: '2rem', height: '2rem', objectFit: 'contain' }} />
            <span className="logo-text-bold" style={{ fontFamily: 'var(--font-inter-tight), sans-serif', fontWeight: 700, fontSize: '1.25rem', color: 'var(--primary-color)', letterSpacing: '-0.02em' }}>Nexus AI</span>
          </div>
          <h2 className="login-modal-title">
            {isSignUp ? 'Create Account' : 'Welcome Back'}
          </h2>
          <p className="login-modal-subtitle">
            {isSignUp ? 'Sign up to build virtual try-ons and 3D scenes' : 'Sign in to access your Nexus AI workspace'}
          </p>
        </div>

        <form className="login-modal-form" onSubmit={handleSubmit}>
          {isSignUp && (
            <label className="site-footer-field">
              <span>Full Name</span>
              <input 
                type="text" 
                placeholder="Enter your full name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required 
              />
            </label>
          )}

          <label className="site-footer-field">
            <span>Email Address</span>
            <input 
              type="email" 
              placeholder="name@example.com" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </label>

          <label className="site-footer-field">
            <span>Password</span>
            <input 
              type="password" 
              placeholder="••••••••" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </label>

          <button type="submit" className="site-footer-submit" style={{ marginTop: '1.5rem' }}>
            {isSignUp ? 'Create Account' : 'Sign In'}
          </button>
        </form>

        <div className="login-modal-footer">
          <p>
            {isSignUp ? 'Already have an account? ' : "Don't have an account? "}
            <button 
              type="button" 
              className="login-modal-toggle"
              onClick={() => setIsSignUp(!isSignUp)}
            >
              {isSignUp ? 'Sign In' : 'Create one'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
