'use client';

import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import './Services.css';

const services = [
  {
    icon: '🌐',
    iconClass: 'web',
    title: 'Website Development',
    features: [
      'Modern responsive websites',
      'High-performance design',
      'SEO-ready architecture',
      'Conversion-optimized layouts',
    ],
  },
  {
    icon: '🤖',
    iconClass: 'ai',
    title: 'AI Automation',
    features: [
      'AI chatbots & assistants',
      'Workflow automation',
      'Lead generation systems',
      'Smart data processing',
    ],
  },
  {
    icon: '⚙️',
    iconClass: 'saas',
    title: 'SaaS Solutions',
    features: [
      'Custom dashboards',
      'Internal business tools',
      'Scalable software products',
      'API integrations',
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function Services() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section className="services" id="services" ref={ref}>
      <div className="services-inner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">What We Do</p>
          <h2 className="section-title">Services Built for Growth</h2>
          <p className="section-subtitle">
            From stunning websites to intelligent automation — we deliver
            end-to-end technology solutions that drive real business results.
          </p>
        </motion.div>

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              className="service-card"
              variants={cardVariants}
            >
              <div className="service-card-glow" />
              <div className={`service-card-icon ${service.iconClass}`}>
                {service.icon}
              </div>
              <div className="service-card-arrow">↗</div>
              <h3 className="service-card-title">{service.title}</h3>
              <ul className="service-card-features">
                {service.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
