"use client";

import React from 'react';
import { motion } from 'motion/react';

const Hero: React.FC = () => {
  return (
    <section className="drft-hero-section">
      {/* Background Image Container */}
      <div className="drft-hero-bg-container">
        <img
          src="/hero_lifestyle_v3.webp"
          alt="DRFT DEON - A New Standard in Streetwear"
          className="drft-hero-img"
          loading="eager"
        />
        <div className="drft-hero-overlay" />
      </div>

      {/* Hero Content Overlay with Smooth Floating Animation */}
      <div className="drft-hero-content-wrapper">
        <motion.div 
          className="drft-hero-text-block"
          initial={{ y: 0 }}
          animate={{ 
            y: [-6, 6, -6],
            rotate: [-0.3, 0.3, -0.3]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <motion.h1 
            className="drft-hero-headline"
            animate={{ 
              y: [-3, 3, -3] 
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            A NEW<br />
            STANDARD<br />
            IN<br />
            STREETWEAR
          </motion.h1>

          <motion.p 
            className="drft-hero-tagline"
            animate={{ 
              y: [-2, 2, -2] 
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.2
            }}
          >
            ELEVATING EVERYDAY ESSENTIALS
          </motion.p>

          <motion.div 
            className="drft-hero-cta-wrapper"
            animate={{ 
              y: [-3, 3, -3] 
            }}
            transition={{
              duration: 4.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.4
            }}
          >
            <motion.a 
              href="#shop" 
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('.drft-products-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="drft-hero-cta-btn"
              whileHover={{ 
                scale: 1.05,
                y: -4,
                boxShadow: "0 10px 25px rgba(255, 255, 255, 0.2)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              SHOP THE DROP
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
