"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import AccessoriesTryonView from '@/components/sections/AccessoriesTryonView';

export default function AccessoriesTryonPage() {
  const router = useRouter();
  return <AccessoriesTryonView onBackToHome={() => router.push('/')} />;
}
