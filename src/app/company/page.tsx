"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import CompanyView from '@/components/sections/CompanyView';

export default function CompanyPage() {
  const router = useRouter();
  return (
    <CompanyView 
      onBackToHome={() => router.push('/')} 
      onExploreTeam={() => router.push('/team')} 
    />
  );
}
