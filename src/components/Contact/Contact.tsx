'use client';

import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import './Contact.css';

export default function Contact() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section className="contact" id="contact" ref={ref}>
      <div className="contact-inner">
        <motion.div
          className="contact-cta-section"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="contact-cta-title">Ready To Launch?</h2>
          <p className="contact-cta-subtitle">
            Let&apos;s build something extraordinary together. Book a free
            consultation and discover how we can accelerate your growth.
          </p>
          <div className="contact-cta-buttons">
            <a href="#contact-form" className="contact-cta-btn-primary">
              📞 Schedule a Call
            </a>
            <a href="#contact-form" className="contact-cta-btn-secondary">
              📄 Get a Free Proposal
            </a>
          </div>
        </motion.div>

        <motion.div
          className="contact-form-card"
          id="contact-form"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h3 className="contact-form-title">Get In Touch</h3>
          <p className="contact-form-subtitle">
            Fill out the form and we&apos;ll get back to you within 24 hours.
          </p>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="contact-form-row">
              <div className="contact-form-group">
                <label className="contact-form-label" htmlFor="name">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="contact-form-input"
                  placeholder="John Doe"
                />
              </div>
              <div className="contact-form-group">
                <label className="contact-form-label" htmlFor="email">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  className="contact-form-input"
                  placeholder="john@company.com"
                />
              </div>
            </div>
            <div className="contact-form-group">
              <label className="contact-form-label" htmlFor="subject">
                What do you need?
              </label>
              <input
                id="subject"
                type="text"
                className="contact-form-input"
                placeholder="Website, AI Automation, SaaS..."
              />
            </div>
            <div className="contact-form-group">
              <label className="contact-form-label" htmlFor="message">
                Tell Us More
              </label>
              <textarea
                id="message"
                className="contact-form-textarea"
                placeholder="Describe your project, goals, and timeline..."
              />
            </div>
            <button type="submit" className="contact-form-submit">
              Send Message →
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
