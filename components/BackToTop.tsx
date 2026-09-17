"use client";
import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let frame = 0;
    let visible = false;

    const check = () => {
      frame = 0;
      const next = window.scrollY > 300;
      if (next === visible) return;
      visible = next;
      setIsVisible(next);
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(check);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-[var(--color-bg-nav)] border border-wibify-border p-4 rounded-sm hover:border-wibify-neon hover:text-wibify-neon transition-colors duration-300 group"
          aria-label="Back to top"
        >
          <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform duration-300" />
        </button>
      )}
    </>
  );
}


