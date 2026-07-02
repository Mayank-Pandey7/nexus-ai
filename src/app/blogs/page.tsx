"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import BlogView from '@/components/sections/BlogView';

export default function BlogsPage() {
  const router = useRouter();
  return <BlogView onBackToHome={() => router.push('/')} />;
}
