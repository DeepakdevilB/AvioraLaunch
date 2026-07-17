'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import './Portfolio.css';

const projects = [
  {
    title: 'Fine Dining Experience',
    tag: 'Website',
    desc: 'Premium restaurant website with online reservations',
    image: '/images/portfolio-restaurant.png',
  },
  {
    title: 'Artisan Coffee House',
    tag: 'Website',
    desc: 'Modern cafe website with menu and online ordering',
    image: '/images/portfolio-cafe.png',
  },
  {
    title: 'Elite Fitness Center',
    tag: 'Website',
    desc: 'High-energy gym website with membership management',
    image: '/images/portfolio-gym.png',
  },
  {
    title: 'AI Automation Hub',
    tag: 'AI Dashboard',
    desc: 'Intelligent workflow automation dashboard',
    image: '/images/portfolio-ai-dashboard.png',
  },
  {
    title: 'CloudScale Admin',
    tag: 'SaaS Platform',
    desc: 'Full-featured SaaS administration panel',
    image: '/images/portfolio-saas-panel.png',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, rotateX: 5 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function Portfolio() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section className="portfolio" id="portfolio" ref={ref}>
      <div className="portfolio-inner">
        <motion.div
          className="portfolio-header"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Our Work</p>
          <h2 className="section-title">Projects That Deliver Results</h2>
          <p className="section-subtitle">
            From local businesses to enterprise platforms — every project is
            crafted with precision and purpose.
          </p>
        </motion.div>

        <motion.div
          className="portfolio-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              className="portfolio-card"
              variants={cardVariants}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="portfolio-card-image"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="portfolio-card-overlay">
                <span className="portfolio-card-tag">{project.tag}</span>
                <h3 className="portfolio-card-title">{project.title}</h3>
                <p className="portfolio-card-desc">{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
