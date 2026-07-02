"use client";
import React, { useEffect } from 'react';
import Home from '../page';

export default function ProductsPage() {
  useEffect(() => {
    setTimeout(() => {
      const element = document.querySelector('.fashion-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  }, []);

  return <Home />;
}
