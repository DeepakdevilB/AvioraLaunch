'use client';

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import './Portfolio.css';

const projects = [
  {
    title: 'Shoe World',
    tag: 'E-Commerce',
    desc: 'Modern sneaker store with sleek product showcases',
    image: '/images/portfolio-shoe-world.png',
    url: 'https://shoe-world.netlify.app/',
  },
  {
    title: 'Bon Cafe & Sweets',
    tag: 'Website',
    desc: 'Elegant cafe website with menu and ordering',
    image: '/images/portfolio-bon-cafe.png',
    url: 'https://bon-cafe-sweets.onrender.com/',
  },
  {
    title: 'Shoe World Gold',
    tag: 'E-Commerce',
    desc: 'Premium shoe store with a refined shopping experience',
    image: '/images/portfolio-shoe-vercel.png',
    url: 'https://shoe-world-gold.vercel.app/',
  },
  {
    title: 'Luxury Coffee',
    tag: 'Website',
    desc: 'High-end coffee brand with immersive visuals',
    image: '/images/portfolio-luxury-coffee.png',
    url: 'https://luxury-coffee.vercel.app/',
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants: Variants = {
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
            <motion.a
              key={project.title}
              className="portfolio-card"
              variants={cardVariants}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="portfolio-card-image"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
              />
              <div className="portfolio-card-overlay">
                <span className="portfolio-card-tag">{project.tag}</span>
                <h3 className="portfolio-card-title">{project.title}</h3>
                <p className="portfolio-card-desc">{project.desc}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
