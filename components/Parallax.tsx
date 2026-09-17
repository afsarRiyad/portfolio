"use client";
import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';

type ScrollOffset = NonNullable<Parameters<typeof useScroll>[0]>['offset'];

type ParallaxProps = {
  children?: React.ReactNode;
  /** How far the layer travels, in px. */
  distance?: number;
  direction?: 'up' | 'down';
  axis?: 'x' | 'y';

  anchor?: 'center' | 'start';

  offset?: ScrollOffset;
  className?: string;
  innerClassName?: string;
};

export default function Parallax({
  children,
  distance = 60,
  direction = 'up',
  axis = 'y',
  anchor = 'center',
  offset,
  className,
  innerClassName,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset ?? ['start end', 'end start'],
  });

  const sign = direction === 'up' ? 1 : -1;
  const [from, to] =
    anchor === 'start'
      ? [0, -2 * distance * sign]
      : [distance * sign, -distance * sign];

  const translate = useTransform(scrollYProgress, [0, 1], [from, to]);

  const style = reduceMotion ? undefined : axis === 'x' ? { x: translate } : { y: translate };

  return (
    <div ref={ref} className={className}>
      <motion.div style={style} className={innerClassName}>
        {children}
      </motion.div>
    </div>
  );
}
