import React, { useEffect, useState } from 'react';
import Navigation from './components/sections/Navigation';
import Hero from './components/sections/Hero';
import Products from './components/sections/Products';
import HowItWorks from './components/sections/HowItWorks';
import Benefits from './components/sections/Benefits';
import Testimonials from './components/sections/Testimonials';
import Pricing from './components/sections/Pricing';
import FAQ from './components/sections/FAQ';
import Footer from './components/sections/Footer';
import LoginModal from './components/sections/LoginModal';
import ResearchView from './components/sections/ResearchView';
import CompanyView from './components/sections/CompanyView';
import BlogView from './components/sections/BlogView';
import CareerView from './components/sections/CareerView';
import FashionEcommerceView from './components/sections/FashionEcommerceView';
import AccessoriesTryonView from './components/sections/AccessoriesTryonView';
import MakeupTryonView from './components/sections/MakeupTryonView';
import SmartAssistantsView from './components/sections/SmartAssistantsView';
import VisualizationView from './components/sections/VisualizationView';
import TeamView from './components/sections/TeamView';


const App: React.FC = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [activeView, setActiveView] = useState<'home' | 'research' | 'company' | 'blog' | 'career' | 'fashion-ecommerce-ai' | 'accessories-try-on' | 'makeup-try-on' | 'smart-assistants-ai' | 'visualization-ai' | 'team'>(() => {
    const saved = localStorage.getItem('activeView');
    return (saved as any) || 'home';
  });
  const [displayView, setDisplayView] = useState(activeView);
  const [transitionClass, setTransitionClass] = useState<'page-idle' | 'page-exit' | 'page-enter'>('page-idle');

  useEffect(() => {
    localStorage.setItem('activeView', activeView);
  }, [activeView]);

  const triggerViewChange = (newView: typeof activeView) => {
    if (newView === displayView) return;
    setTransitionClass('page-exit');
    setTimeout(() => {
      setDisplayView(newView);
      setActiveView(newView);
      setTransitionClass('page-enter');
      if (newView !== 'company' || localStorage.getItem('scrollToTeamSection') !== 'true') {
        window.scrollTo(0, 0);
      }
      setTimeout(() => {
        setTransitionClass('page-idle');
      }, 50);
    }, 600); // Duration: 600ms
  };

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
  }, [activeView]);

  return (
    <>
      <Navigation onGetStarted={() => setIsLoginOpen(true)} activeView={activeView} onViewChange={triggerViewChange} />
      <div className={`page-transition-container ${transitionClass}`}>
        {displayView === 'home' ? (
          <div className="flex-1">
            <main className="home-page">
              <div className="home-container">
                <Hero />
                <Products onKnowMore={() => triggerViewChange('fashion-ecommerce-ai')} />
                <HowItWorks />
                <Benefits onKnowMore={() => triggerViewChange('smart-assistants-ai')} />
                <Testimonials />
                <Pricing />
                <FAQ />
              </div>
            </main>
          </div>
        ) : (
          <div className="flex-1">
            {displayView === 'research' && <ResearchView onBackToHome={() => triggerViewChange('home')} />}
            {displayView === 'company' && <CompanyView onBackToHome={() => triggerViewChange('home')} onExploreTeam={() => triggerViewChange('team')} />}
            {displayView === 'blog' && <BlogView onBackToHome={() => triggerViewChange('home')} />}
            {displayView === 'career' && <CareerView onBackToHome={() => triggerViewChange('home')} />}
            {displayView === 'fashion-ecommerce-ai' && <FashionEcommerceView onBackToHome={() => triggerViewChange('home')} />}
            {displayView === 'accessories-try-on' && <AccessoriesTryonView onBackToHome={() => triggerViewChange('home')} />}
            {displayView === 'makeup-try-on' && <MakeupTryonView onBackToHome={() => triggerViewChange('home')} />}
            {displayView === 'smart-assistants-ai' && <SmartAssistantsView onBackToHome={() => triggerViewChange('home')} />}
            {displayView === 'visualization-ai' && <VisualizationView onBackToHome={() => triggerViewChange('home')} />}
            {displayView === 'team' && (
              <TeamView 
                onBackToCompany={() => {
                  localStorage.setItem('scrollToTeamSection', 'true');
                  triggerViewChange('company');
                }} 
              />
            )}
          </div>
        )}
      </div>
      <Footer />
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
};

export default App;
