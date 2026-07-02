"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import TeamView from '@/components/sections/TeamView';

export default function TeamPage() {
  const router = useRouter();
  return (
    <TeamView 
      onBackToCompany={() => {
        localStorage.setItem('scrollToTeamSection', 'true');
        router.push('/company');
      }} 
    />
  );
}
