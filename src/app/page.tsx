"use client";
import React from 'react';
import Hero from '@/components/sections/Hero';
import ExploreTheDrop from '@/components/sections/ExploreTheDrop';
import CategoryBanners from '@/components/sections/CategoryBanners';
import Products from '@/components/sections/Products';
import PhilosophySection from '@/components/sections/PhilosophySection';
import FAQ from '@/components/sections/FAQ';

export default function Home() {
  const scrollToCollection = () => {
    const el = document.querySelector('.drft-products-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPhilosophy = () => {
    const el = document.querySelector('.drft-philosophy-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ backgroundColor: '#000000', color: '#ffffff', minHeight: '100vh', width: '100%' }}>
      <main style={{ padding: 0, margin: 0, width: '100%' }}>
        <Hero />
        {/* Section right after Hero */}
        <ExploreTheDrop />
        {/* Category Banners matching user screenshot */}
        <CategoryBanners onSelectCategory={scrollToCollection} />
        <Products onKnowMore={scrollToCollection} />
        {/* The Philosophy section directly after FEATURED COLLECTION / LATEST DROPS */}
        <PhilosophySection onReadStory={scrollToPhilosophy} />
        <FAQ />
      </main>
    </div>
  );
}
