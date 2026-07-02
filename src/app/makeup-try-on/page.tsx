"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import MakeupTryonView from '@/components/sections/MakeupTryonView';

export default function MakeupTryonPage() {
  const router = useRouter();
  return <MakeupTryonView onBackToHome={() => router.push('/')} />;
}
