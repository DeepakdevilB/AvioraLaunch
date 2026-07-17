'use client';

import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'CEO, Bloom Restaurants',
    initials: 'SM',
    stars: 5,
    quote:
      'Peka Launch transformed our online presence completely. Our new website increased reservations by 45% in the first month. Their attention to detail and understanding of our brand was exceptional.',
  },
  {
    name: 'James Rodriguez',
    role: 'Founder, FitCore Gym',
    initials: 'JR',
    stars: 5,
    quote:
      'Working with Peka Launch felt like having a tech co-founder. They didn\'t just build a website — they built a membership system that automated our entire onboarding process.',
  },
  {
    name: 'Emily Chen',
    role: 'COO, DataFlow Inc.',
    initials: 'EC',
    stars: 5,
    quote:
      'The AI automation dashboard they built for us saves our team 20+ hours per week. It\'s intuitive, fast, and exactly what we needed. Highly recommend their SaaS capabilities.',
  },
  {
    name: 'Marcus Williams',
    role: 'Owner, Brew & Bean Cafe',
    initials: 'MW',
    stars: 5,
    quote:
      'From design to launch, everything was seamless. Our cafe\'s online ordering system has driven a 60% increase in takeaway orders. Peka Launch truly understands small business needs.',
  },
  {
    name: 'Priya Sharma',
    role: 'VP Engineering, ScaleUp',
    initials: 'PS',
    stars: 5,
    quote:
      'Their SaaS admin panel is the best investment we\'ve made this year. Clean code, great documentation, and a team that actually listens. They\'re our go-to tech partners now.',
  },
];

export default function Testimonials() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section className="testimonials" id="testimonials" ref={ref}>
      <div className="testimonials-inner">
        <motion.div
          className="testimonials-header"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Testimonials</p>
          <h2 className="section-title">Trusted by Growing Businesses</h2>
          <p className="section-subtitle">
            Don&apos;t take our word for it — hear from the businesses we&apos;ve helped
            launch and scale.
          </p>
        </motion.div>

        <motion.div
          className="testimonials-track"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="testimonial-card"
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
            >
              <div className="testimonial-stars">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <span key={j}>★</span>
                ))}
              </div>
              <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{t.initials}</div>
                <div className="testimonial-author-info">
                  <span className="testimonial-author-name">{t.name}</span>
                  <span className="testimonial-author-role">{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
