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
import ProjectsView from "./components/sections/ProjectsView";
import CompanyView from './components/sections/CompanyView';
import BlogView from './components/sections/BlogView';
import CareerView from './components/sections/CareerView';
import FashionEcommerceView from './components/sections/FashionEcommerceView';
import AccessoriesTryonView from './components/sections/AccessoriesTryonView';
import SmartAssistantsView from './components/sections/SmartAssistantsView';
import VisualizationView from './components/sections/VisualizationView';
import TeamView from './components/sections/TeamView';


const App: React.FC = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const getViewFromPath = (path: string): 'home' | 'projects' | 'company' | 'blog' | 'career' | 'fashion-ecommerce-ai' | 'accessories-try-on' | 'smart-assistants-ai' | 'visualization-ai' | 'team' => {
    switch (path) {
      case '/products': return 'home';
      case '/projects': return 'projects';
      case '/company': return 'company';
      case '/blogs': return 'blog';
      case '/career': return 'career';
      case '/team': return 'team';
      case '/fashion-ecommerce-ai': return 'fashion-ecommerce-ai';
      case '/accessories-try-on': return 'accessories-try-on';
      case '/smart-assistants-ai': return 'smart-assistants-ai';
      case '/visualization-ai': return 'visualization-ai';
      default: return 'home';
    }
  };

  const [activeView, setActiveView] = useState<'home' | 'projects' | 'company' | 'blog' | 'career' | 'fashion-ecommerce-ai' | 'accessories-try-on' | 'smart-assistants-ai' | 'visualization-ai' | 'team'>(() => {
    return getViewFromPath(window.location.pathname);
  });

  const triggerViewChange = (newView: typeof activeView, isPopState = false) => {
    if (newView === activeView) return;
    if (!isPopState) {
      let path = '/';
      if (newView === 'blog') path = '/blogs';
      else if (newView !== 'home') path = '/' + newView;
      window.history.pushState(null, '', path);
    }
    setActiveView(newView);
  };

  useEffect(() => {
    const handlePopState = () => {
      setActiveView(getViewFromPath(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('activeView', activeView);
    if (activeView !== 'company' || localStorage.getItem('scrollToTeamSection') !== 'true') {
      window.scrollTo(0, 0);
    }
  }, [activeView]);

  useEffect(() => {
    if (window.location.pathname === '/products') {
      setTimeout(() => {
        const element = document.querySelector('.fashion-section');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    }
  }, [activeView]);

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
      <Navigation 
        onGetStarted={() => setIsLoginOpen(true)} 
        activeView={activeView} 
        onViewChange={triggerViewChange} 
      />
      {activeView === 'home' ? (
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
          {activeView === 'projects' && (<ProjectsView onBackToHome={() => triggerViewChange('home')} />)}
          {activeView === 'company' && <CompanyView onBackToHome={() => triggerViewChange('home')} onExploreTeam={() => triggerViewChange('team')} />}
          {activeView === 'blog' && <BlogView onBackToHome={() => triggerViewChange('home')} />}
          {activeView === 'career' && <CareerView onBackToHome={() => triggerViewChange('home')} />}
          {activeView === 'fashion-ecommerce-ai' && <FashionEcommerceView onBackToHome={() => triggerViewChange('home')} />}
          {activeView === 'accessories-try-on' && <AccessoriesTryonView onBackToHome={() => triggerViewChange('home')} />}
          {activeView === 'smart-assistants-ai' && <SmartAssistantsView onBackToHome={() => triggerViewChange('home')} />}
          {activeView === 'visualization-ai' && <VisualizationView onBackToHome={() => triggerViewChange('home')} />}
          {activeView === 'team' && (
            <TeamView 
              onBackToCompany={() => {
                localStorage.setItem('scrollToTeamSection', 'true');
                triggerViewChange('company');
              }} 
            />
          )}
        </div>
      )}
      {activeView !== 'team' && <Footer />}
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
};

export default App;
