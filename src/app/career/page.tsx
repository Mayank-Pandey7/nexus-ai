"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import CareerView from '@/components/sections/CareerView';

export default function CareerPage() {
  const router = useRouter();
  return <CareerView onBackToHome={() => router.push('/')} />;
}
