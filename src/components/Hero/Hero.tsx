'use client';

import { Suspense } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import './Hero.css';

const RocketScene = dynamic(() => import('./RocketScene'), { ssr: false });

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-canvas-container">
        <Suspense fallback={null}>
          <RocketScene />
        </Suspense>
      </div>

      <div className="hero-gradient-overlay" />

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
      >
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <span className="hero-badge-dot" />
          Technology Agency for the Future
        </motion.div>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          we launch bussinesss, not rockets
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          We build modern websites, AI automations, and scalable SaaS solutions
          that help businesses grow faster.
        </motion.p>

        <motion.div
          className="hero-ctas"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
        >
          <a href="#contact" className="hero-cta-primary">
            Book a Free Consultation
            <span>→</span>
          </a>
          <a href="#portfolio" className="hero-cta-secondary">
            View Our Work
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        <span>Scroll</span>
        <div className="hero-scroll-line" />
      </motion.div>
    </section>
  );
}
