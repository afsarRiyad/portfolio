"use client";
import React, { useEffect, useRef } from 'react';
import { RevealContainer, RevealItem } from './Reveal';
import { useInView, animate } from 'framer-motion';

// make value number instead of string so that can do math
const stats = [
  { label: 'Ecommerce Platforms Built', value: 3, suffix: '+', isFloat: false },
  { label: 'Core Technologies', value: 4, suffix: '+', isFloat: false },
  { label: 'Years Self-Taught', value: 1.5, suffix: '+', isFloat: true },
  { label: 'Total Projects Delivered', value: 8, suffix: '+', isFloat: false }
];

// new custom Counter Component
function AnimatedNumber({ value, isFloat }: { value: number, isFloat?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (inView && ref.current) {
      animate(0, value, {
        duration: 2, 
        ease: [0.22, 1, 0.36, 1], 
        onUpdate: (v) => {
          if (ref.current) {
            ref.current.textContent = isFloat ? v.toFixed(1).replace(/\.0$/, '') : Math.floor(v).toString();
          }
        },
      });
    }
  }, [inView, value, isFloat]);

  return <span ref={ref}>0</span>;
}

export default function Results() {
  return (
    <section className="py-32 px-6 md:px-12 bg-background border-t border-wibify-border">
      <RevealContainer className="max-w-7xl mx-auto">
        <RevealItem className="text-wibify-gray text-xs tracking-[0.2em] uppercase mb-12 flex items-center gap-4">
          <span className="w-4 h-[1px] bg-wibify-gray"></span>
          [08] The Numbers
        </RevealItem>
        
        <RevealItem>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-20 leading-none">
            Data driven <span className="text-wibify-neon italic font-serif">results.</span>
          </h2>
        </RevealItem>

        <RevealContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-t border-wibify-border pt-12">
          {stats.map((stat, index) => (
            <RevealItem key={index} className="flex flex-col">
              <div className="text-5xl md:text-7xl font-bold text-foreground mb-4 tracking-tighter flex items-baseline">
                {/* number count triggers here */}
                <AnimatedNumber value={stat.value} isFloat={stat.isFloat} />
                {stat.suffix && <span className="text-wibify-neon text-3xl md:text-5xl ml-1 font-bold">{stat.suffix}</span>}
              </div>
              <div className="text-wibify-gray font-mono text-xs tracking-widest uppercase">
                {stat.label}
              </div>
            </RevealItem>
          ))}
        </RevealContainer>
      </RevealContainer>
    </section>
  );
}


