"use client";
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import FluidGradientText from '@/components/ui/FluidGradientText';
import LoginModal from '@/components/sections/LoginModal';
import '@/index.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  // Map pathname to activeView for Navigation highlights
  let activeView: any = 'home';
  if (pathname === '/projects') activeView = "projects";
  else if (pathname === '/company') activeView = 'company';
  else if (pathname === '/blogs') activeView = 'blog';
  else if (pathname === '/career') activeView = 'career';
  else if (pathname === '/team') activeView = 'team';
  else if (pathname === '/fashion-ecommerce-ai') activeView = 'fashion-ecommerce-ai';
  else if (pathname === '/accessories-try-on') activeView = 'accessories-try-on';
  else if (pathname === '/makeup-try-on') activeView = 'makeup-try-on';
  else if (pathname === '/smart-assistants-ai') activeView = 'smart-assistants-ai';
  else if (pathname === '/visualization-ai') activeView = 'visualization-ai';

  useEffect(() => {
    // Scroll to top on route change, unless returning to company with scrollToTeamSection flag
    if (pathname !== '/company' || localStorage.getItem('scrollToTeamSection') !== 'true') {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  useEffect(() => {
    // Immediate reveal trigger
    const immediateReveals = document.querySelectorAll('[data-reveal-immediate="true"]');
    immediateReveals.forEach((el) => {
      const delay = parseInt(el.getAttribute('data-reveal-delay') || '0', 10);
      setTimeout(() => {
        el.classList.add('is-revealed');
      }, delay);
    });

    // IntersectionObserver for scroll-reveal animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const delay = parseInt(el.getAttribute('data-reveal-delay') || '0', 10);
          
          setTimeout(() => {
            el.classList.add('is-revealed');
          }, delay);
          
          observer.unobserve(el);
        }
      });
    }, {
      root: null,
      rootMargin: '0px 0px -8% 0px',
      threshold: 0.05
    });

    const scrollReveals = document.querySelectorAll('[data-reveal], [data-reveal-stagger="true"]');
    scrollReveals.forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Trialshopy – Smart AR Shopping Platform</title>
        <meta name="description" content="Trialshopy is an AI-powered Smart AR Shopping Platform integrating IoT, AI, and Augmented Reality to transform enterprise retail — incubated at NIT Patna." />
        <link rel="icon" href="/favicon.png" />
      </head>
      <body style={{ margin: 0, padding: 0, backgroundColor: '#000000', color: '#ffffff', overflowX: 'hidden', width: '100%', maxWidth: '100%' }}>
        <Navigation 
          onGetStarted={() => setIsLoginOpen(true)} 
          activeView={activeView} 
          onViewChange={() => {}} 
        />
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%', overflowX: 'hidden' }}>
          {children}
        </div>
        {pathname !== '/team' && (
          <div className="w-full bg-black text-white overflow-hidden pt-12 md:pt-20 pb-0">
            <FluidGradientText text="DRFT DEON" />
          </div>
        )}
        {pathname !== '/team' && <Footer />}
        <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      </body>
    </html>
  );
}
