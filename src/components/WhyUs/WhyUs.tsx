'use client';

import { useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useCountUp } from '@/hooks/useCountUp';
import './WhyUs.css';

const pillars = [
  {
    emoji: '🚀',
    title: 'Fast Delivery',
    desc: 'We ship fast without cutting corners. Your project launches on time, every time.',
  },
  {
    emoji: '🤖',
    title: 'AI-Driven Solutions',
    desc: 'We integrate AI where it matters — automating workflows and boosting efficiency.',
  },
  {
    emoji: '⚡',
    title: 'Performance First',
    desc: 'Every product we build is optimized for speed, scalability, and reliability.',
  },
  {
    emoji: '📈',
    title: 'Business Growth Focus',
    desc: 'We don\'t just build software — we build tools that drive measurable growth.',
  },
];

function StatCounter({
  end,
  suffix,
  label,
  isInView,
}: {
  end: number;
  suffix: string;
  label: string;
  isInView: boolean;
}) {
  const { display, start } = useCountUp({ end, suffix });

  useEffect(() => {
    if (isInView) start();
  }, [isInView, start]);

  return (
    <div className="why-us-stat">
      <div className="why-us-stat-number">{display}</div>
      <div className="why-us-stat-label">{label}</div>
    </div>
  );
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function WhyUs() {
  const { ref, isInView } = useScrollReveal();

  const stats = [
    { end: 50, suffix: '+', label: 'Projects Delivered' },
    { end: 99, suffix: '%', label: 'Client Satisfaction' },
    { end: 3, suffix: '×', label: 'Faster Development' },
    { end: 200, suffix: '%', label: 'Average ROI' },
  ];

  return (
    <section className="why-us" id="why-us" ref={ref}>
      <div className="why-us-inner">
        <motion.div
          className="why-us-header"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Why Aviora Launch</p>
          <h2 className="section-title">Built Different, By Design</h2>
          <p className="section-subtitle">
            We combine technical excellence with business strategy to deliver
            solutions that actually move the needle.
          </p>
        </motion.div>

        <motion.div
          className="why-us-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.title}
              className="why-us-card"
              variants={itemVariants}
            >
              <span className="why-us-card-emoji">{pillar.emoji}</span>
              <h3 className="why-us-card-title">{pillar.title}</h3>
              <p className="why-us-card-desc">{pillar.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="why-us-stats"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {stats.map((stat) => (
            <StatCounter key={stat.label} {...stat} isInView={isInView} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
