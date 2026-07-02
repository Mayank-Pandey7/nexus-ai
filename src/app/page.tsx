"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import Hero from '@/components/sections/Hero';
import Products from '@/components/sections/Products';
import HowItWorks from '@/components/sections/HowItWorks';
import Benefits from '@/components/sections/Benefits';
import Testimonials from '@/components/sections/Testimonials';
import Pricing from '@/components/sections/Pricing';
import FAQ from '@/components/sections/FAQ';

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex-1">
      <main className="home-page">
        <div className="home-container">
          <Hero />
          <Products onKnowMore={() => router.push('/fashion-ecommerce-ai')} />
          <HowItWorks />
          <Benefits onKnowMore={() => router.push('/smart-assistants-ai')} />
          <Testimonials />
          <Pricing />
          <FAQ />
        </div>
      </main>
    </div>
  );
}
