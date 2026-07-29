'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import './Contact.css';

export default function Contact() {
  const { ref, isInView } = useScrollReveal();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setError(data.error || 'Something went wrong.');
      }
    } catch (err) {
      setError('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

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
          
          {success && (
            <div style={{ padding: '1rem', background: 'rgba(0, 242, 255, 0.1)', color: '#00f2ff', borderRadius: '8px', marginBottom: '1rem', border: '1px solid rgba(0, 242, 255, 0.3)' }}>
              Message sent successfully! We'll be in touch soon.
            </div>
          )}
          {error && (
            <div style={{ padding: '1rem', background: 'rgba(255, 0, 0, 0.1)', color: '#ff6b6b', borderRadius: '8px', marginBottom: '1rem', border: '1px solid rgba(255, 0, 0, 0.3)' }}>
              {error}
            </div>
          )}

          <form className="contact-form" onSubmit={handleSubmit}>
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
                  value={formData.name}
                  onChange={handleChange}
                  required
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
                  value={formData.email}
                  onChange={handleChange}
                  required
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
                value={formData.subject}
                onChange={handleChange}
                required
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
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="contact-form-submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message →'}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
