"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import ResearchView from '@/components/sections/ResearchView';

export default function ResearchPage() {
  const router = useRouter();
  return <ResearchView onBackToHome={() => router.push('/')} />;
}
