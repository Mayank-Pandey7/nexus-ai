"use client";
import React, { useState, useEffect } from 'react';
import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import FluidGradientText from '@/components/ui/FluidGradientText';
import LoginModal from '@/components/sections/LoginModal';
import '@/index.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

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
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>DRFT DEON – A New Standard in Streetwear</title>
        <meta name="description" content="DRFT DEON — Elevating Everyday Essentials. Premium minimal streetwear engineered for modern metropolitan culture." />
        <link rel="icon" href="/favicon.png" />
      </head>
      <body style={{ margin: 0, padding: 0, backgroundColor: '#000000', color: '#ffffff', overflowX: 'hidden', width: '100%', maxWidth: '100%' }}>
        <Navigation 
          onGetStarted={() => setIsLoginOpen(true)} 
          activeView="home" 
          onViewChange={() => {}} 
        />
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%', overflowX: 'hidden' }}>
          {children}
        </div>
        <div className="w-full bg-black text-white overflow-hidden pt-12 md:pt-20 pb-0">
          <FluidGradientText text="DRFT DEON" />
        </div>
        <Footer />
        <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      </body>
    </html>
  );
}
