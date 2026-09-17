"use client";
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, type Variants } from 'framer-motion';

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


type RevealEntry = {
  node: HTMLElement | null;
  /** A one-shot entry leaves the driver after it reveals. */
  once: boolean;
  update: (visible: boolean, settled: boolean) => void;
};

const RESET_MARGIN = 64;

const entries = new Set<RevealEntry>();
let frame = 0;
let listening = false;

function scheduleCheck() {
  if (frame) return;
  frame = window.requestAnimationFrame(checkVisibility);
}

function startListening() {
  if (listening) return;
  listening = true;
  window.addEventListener('scroll', scheduleCheck, { passive: true });
  window.addEventListener('resize', scheduleCheck);
  window.addEventListener('focus', scheduleCheck);
  document.addEventListener('visibilitychange', scheduleCheck);
}

function stopListening() {
  if (!listening) return;
  listening = false;
  window.removeEventListener('scroll', scheduleCheck);
  window.removeEventListener('resize', scheduleCheck);
  window.removeEventListener('focus', scheduleCheck);
  document.removeEventListener('visibilitychange', scheduleCheck);
}

function checkVisibility() {
  frame = 0;
  if (entries.size === 0) {
    stopListening();
    return;
  }

  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  const states: Array<{ entry: RevealEntry; visible: boolean; settled: boolean }> = [];
  const stale: RevealEntry[] = [];

  // Phase 1 — layout reads only. Interleaving reads and writes here is what
  // turned every scroll event into a forced synchronous layout per section.
  entries.forEach((entry) => {
    const node = entry.node;
    if (!node || !node.isConnected) {
      stale.push(entry);
      return;
    }
    const rect = node.getBoundingClientRect();
    states.push({
      entry,
      visible: rect.top < viewportHeight && rect.bottom > 0,
      settled: rect.bottom < -RESET_MARGIN || rect.top > viewportHeight + RESET_MARGIN,
    });
  });

  // Phase 2 — writes.
  stale.forEach((entry) => entries.delete(entry));
  states.forEach(({ entry, visible, settled }) => {
    entry.update(visible, settled);
    if (entry.once && visible) entries.delete(entry);
  });

  if (entries.size === 0) stopListening();
}

/** Register an element with the shared driver.* which is what lets every scroll play the reveal again.*/
function registerReveal(entry: RevealEntry) {
  entries.add(entry);
  startListening();
  // Check immediately (the element may already be on screen at mount, which is
  // how above-the-fold content like the hero plays its entrance)…
  scheduleCheck();
  // …and once more shortly after, for a tab that was hidden during mount and
  // therefore never ran the animation frame.
  const timer = window.setTimeout(scheduleCheck, 800);
  return () => {
    window.clearTimeout(timer);
    entries.delete(entry);
    if (entries.size === 0) stopListening();
  };
}

export function RevealContainer({
  children,
  className = "",
  once = false,
}: {
  children: React.ReactNode;
  className?: string;
  once?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const revealed = useRef(false);

  useEffect(() => {
    return registerReveal({
      node: ref.current,
      once,
      update: (visible, settled) => {
        if (visible) {
          if (revealed.current) return;
          revealed.current = true;
          controls.start('show');
          return;
        }
        if (!once && settled && revealed.current) {
          revealed.current = false;
          controls.set('hidden');
        }
      },
    });
  }, [controls, once]);

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

export function RevealItem({ children, className = "", ...rest }: React.ComponentProps<typeof motion.div>) {
  return (
    <motion.div variants={itemVariants} className={className} {...rest}>
      {children}
    </motion.div>
  );
}
