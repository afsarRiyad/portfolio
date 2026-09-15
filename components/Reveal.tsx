"use client";
import React, { useCallback, useEffect, useRef } from 'react';
import { motion, useInView, useAnimation, type Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export function RevealContainer({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  /**
   * `amount: 'some'` instead of a ratio, deliberately.
   *
   * A ratio threshold is measured against the *container*, so a section taller
   * than the viewport can never satisfy it — no matter how far the visitor
   * scrolls, the ratio stays below the threshold and the section stays at
   * opacity 0 forever. `'some'` fires as soon as any part of the section is on
   * screen, which is true for every viewport height.
   *
   * `once: true` means a section that has been revealed can never fall back to
   * hidden. Re-hiding on the way back up is a bug factory: anything that
   * interrupts the reveal leaves permanently invisible content.
   */
  const isInView = useInView(ref, { once: true, amount: 'some' });

  useEffect(() => {
    if (isInView) controls.start('show');
  }, [isInView, controls]);

  /**
   * Safety net.
   *
   * Browsers defer IntersectionObserver callbacks while a tab is hidden or
   * occluded, and the reveal is otherwise the *only* thing standing between the
   * visitor and content that is baked into the HTML at `opacity: 0`. So if the
   * element is genuinely on screen but the observer has not reported it, reveal
   * it anyway. Cheap, and it only fires when the element actually intersects
   * the viewport, so off-screen sections still animate normally.
   */
  const revealIfOnScreen = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) controls.start('show');
  }, [controls]);

  useEffect(() => {
    // Run once after mount in case the observer never delivers.
    const timer = window.setTimeout(revealIfOnScreen, 600);

    window.addEventListener('scroll', revealIfOnScreen, { passive: true });
    window.addEventListener('resize', revealIfOnScreen);
    window.addEventListener('focus', revealIfOnScreen);
    document.addEventListener('visibilitychange', revealIfOnScreen);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('scroll', revealIfOnScreen);
      window.removeEventListener('resize', revealIfOnScreen);
      window.removeEventListener('focus', revealIfOnScreen);
      document.removeEventListener('visibilitychange', revealIfOnScreen);
    };
  }, [revealIfOnScreen]);

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}
