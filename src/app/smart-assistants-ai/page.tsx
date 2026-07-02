"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import SmartAssistantsView from '@/components/sections/SmartAssistantsView';

export default function SmartAssistantsPage() {
  const router = useRouter();
  return <SmartAssistantsView onBackToHome={() => router.push('/')} />;
}
