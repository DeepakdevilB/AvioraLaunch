'use client';

import { motion, Variants } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import './Process.css';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    desc: 'We dive deep into your business, goals, and challenges to fully understand what you need and who your audience is.',
  },
  {
    number: '02',
    title: 'Strategy',
    desc: 'We craft a tailored roadmap — selecting the right technology stack, defining milestones, and aligning everything to your growth objectives.',
  },
  {
    number: '03',
    title: 'Build',
    desc: 'Our team designs and develops your solution with precision — iterating quickly, testing thoroughly, and keeping you in the loop.',
  },
  {
    number: '04',
    title: 'Launch',
    desc: 'We deploy, optimize, and ensure everything runs flawlessly. Post-launch support keeps your product performing at its best.',
  },
];

const stepVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.15,
      ease: 'easeOut',
    },
  }),
};

export default function Process() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section className="process" id="process" ref={ref}>
      <div className="process-inner">
        <motion.div
          className="process-header"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">How We Work</p>
          <h2 className="section-title">From Idea to Launch</h2>
          <p className="section-subtitle">
            A proven process designed to turn your vision into a live, revenue-generating product.
          </p>
        </motion.div>

        <div className="process-timeline">
          <div className="process-timeline-line" />
          <div
            className={`process-timeline-line-fill ${isInView ? 'active' : ''}`}
          />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className={`process-step ${isInView ? 'active' : ''}`}
              custom={i}
              variants={stepVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              <div className="process-step-indicator">{step.number}</div>
              <div className="process-step-content">
                <h3 className="process-step-title">{step.title}</h3>
                <p className="process-step-desc">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
