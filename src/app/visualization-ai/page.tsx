"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import VisualizationView from '@/components/sections/VisualizationView';

export default function VisualizationPage() {
  const router = useRouter();
  return <VisualizationView onBackToHome={() => router.push('/')} />;
}
