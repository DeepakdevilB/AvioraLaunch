'use client';

import { useRef } from 'react';
import { useInView, UseInViewOptions } from 'framer-motion';

interface ScrollRevealOptions {
  once?: boolean;
  margin?: string;
  amount?: number | 'some' | 'all';
}

export function useScrollReveal(options: ScrollRevealOptions = {}) {
  const { once = true, margin = '-80px', amount = 0.2 } = options;
  const ref = useRef<HTMLDivElement>(null);

  const inViewOptions: UseInViewOptions = {
    once,
    margin: margin as `${number}px`,
    amount,
  };

  const isInView = useInView(ref, inViewOptions);

  return { ref, isInView };
}
