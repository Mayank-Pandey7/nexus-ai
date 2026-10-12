"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import Hero from '@/components/sections/Hero';
import ExploreTheDrop from '@/components/sections/ExploreTheDrop';
import CategoryBanners from '@/components/sections/CategoryBanners';
import Products from '@/components/sections/Products';
import HowItWorks from '@/components/sections/HowItWorks';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';

export default function Home() {
  const router = useRouter();

  return (
    <div style={{ backgroundColor: '#000000', color: '#ffffff', minHeight: '100vh', width: '100%' }}>
      <main style={{ padding: 0, margin: 0, width: '100%' }}>
        <Hero />
        {/* Section right after Hero */}
        <ExploreTheDrop />
        {/* Category Banners matching user screenshot */}
        <CategoryBanners onSelectCategory={() => router.push('/fashion-ecommerce-ai')} />
        <Products onKnowMore={() => router.push('/fashion-ecommerce-ai')} />
        <HowItWorks />
        <Testimonials />
        <FAQ />
      </main>
    </div>
  );
}
