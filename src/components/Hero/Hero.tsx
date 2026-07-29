'use client';

import { motion } from 'framer-motion';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Animated gradient background */}
      <div className="hero-gradient-overlay" />
      <div className="hero-gradient-orb" />

      <div className="hero-container">
        {/* Left Content */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        >
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <span className="hero-badge-dot" />
            Engineering the Digital Frontier
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            Launch Your Business <br /> Into The Future
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
              Start Your Mission
              <span>→</span>
            </a>
            <a href="#portfolio" className="hero-cta-secondary">
              View Our Work
            </a>
          </motion.div>
        </motion.div>

        {/* Right Content: Floating Glass Cards */}
        <div className="hero-visuals">
          <motion.div 
            className="hero-glass-card card-saas"
            animate={{ y: [0, -15, 0], rotate: [0, -2, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          >
            <div className="card-icon">⚡</div>
            <div className="card-text">
              <h4>Custom SaaS</h4>
              <p>Scalable web applications</p>
            </div>
            <div className="card-glow glow-purple" />
          </motion.div>

          <motion.div 
            className="hero-glass-card card-ai"
            animate={{ y: [0, 20, 0], rotate: [0, 3, 0] }}
            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
          >
            <div className="card-icon">🤖</div>
            <div className="card-text">
              <h4>AI Automation</h4>
              <p>Smart workflows & chatbots</p>
            </div>
            <div className="card-glow glow-cyan" />
          </motion.div>

          <motion.div 
            className="hero-glass-card card-web"
            animate={{ y: [0, -10, 0], rotate: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 2 }}
          >
            <div className="card-icon">🚀</div>
            <div className="card-text">
              <h4>Web Development</h4>
              <p>High-performance sites</p>
            </div>
            <div className="card-glow glow-accent" />
          </motion.div>
        </div>
      </div>

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
