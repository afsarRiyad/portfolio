"use client";
import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * Scroll progress rail.
 *
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2px] origin-left bg-wibify-neon z-[1000] pointer-events-none"
    />
  );
}
