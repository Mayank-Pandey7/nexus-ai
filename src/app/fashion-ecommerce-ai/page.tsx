"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import FashionEcommerceView from '@/components/sections/FashionEcommerceView';

export default function FashionEcommercePage() {
  const router = useRouter();
  return <FashionEcommerceView onBackToHome={() => router.push('/')} />;
}
