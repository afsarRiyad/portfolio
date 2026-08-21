"use client";
import React from 'react';
import { useTheme } from './ThemeProvider';

const steps = [
  {
    id: '01 / 04',
    title: 'Strategy',
    desc: 'We define the project requirements, database schema, and system design. For ecommerce projects, this means mapping out the user flows and data structures before writing a single line of code.',
    tags: ['SYSTEM DESIGN', 'DATABASE SCHEMA', 'API DESIGN'],
    img: '/strategie.avif'
  },
  {
    id: '02 / 04',
    title: 'Design',
    desc: 'Architecture of the user interface and database design. Focusing on minimal friction and high utility. From responsive layouts to intuitive user experiences.',
    tags: ['UX DESIGN', 'UI ARCHITECTURE', 'PROTOTYPING'],
    img: '/design.avif'
  },
  {
    id: '03 / 04',
    title: 'Build',
    desc: 'Engineering on a modern stack. Writing clean, high-performance code. Whether it is React for frontend interfaces or Express.js for backend APIs, performance is non-negotiable.',
    tags: ['FRONTEND', 'BACKEND / API', 'PERFORMANCE'],
    img: '/build.avif'
  },
  {
    id: '04 / 04',
    title: 'Launch & Care',
    desc: 'Deployment to production, database optimization, and continuous improvement. Applications are built to scale, perform well, and adapt based on real-world usage.',
    tags: ['DEPLOYMENT', 'OPTIMIZATION', 'MAINTENANCE'],
    img: '/launch.avif'
  }
];

export default function Process() {
  const { theme } = useTheme();

  return (
    <section className="py-32 px-6 md:px-12 bg-background border-t border-wibify-border relative">
      <div className="text-wibify-gray text-xs tracking-[0.2em] uppercase mb-12">
        [04] Process / How I work
      </div>
      <h2 className="text-5xl md:text-7xl lg:text-[8vw] font-bold tracking-tighter mb-20 leading-none">
        From logic to <span className="text-wibify-neon italic font-serif">execution.</span>
      </h2>
      <div className="relative w-full max-w-7xl mx-auto pb-32">
        {steps.map((step, index) => (
          <div 
            key={index}
            className="sticky w-full bg-[var(--color-bg-card-alt)] border-t border-x border-wibify-border flex flex-col md:flex-row shadow-[0_-10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 rounded-t-xl overflow-hidden group"
            style={{ 
              top: `calc(15vh + ${index * 40}px)`, 
              height: '70vh',
              zIndex: index + 10,
            }}
          >
            <div className="hidden lg:flex w-1/2 bg-[var(--color-bg-deep)] border-r border-wibify-border items-center justify-center relative overflow-hidden">
               <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
               <div className="absolute w-64 h-64 bg-wibify-neon/10 blur-[100px] rounded-full group-hover:bg-wibify-neon/10 transition-colors duration-700"></div>
               <img 
                 src={step.img} 
                 alt={step.title}
                 className={`w-full h-full object-contain p-12 relative z-10 opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out ${theme === 'dark' ? 'mix-blend-screen' : 'mix-blend-multiply'}`}
                 onError={(e) => {
                   e.currentTarget.style.display = 'none';
                 }}
               />
            </div>
            <div className="w-full lg:w-1/2 p-10 md:p-16 flex flex-col justify-center bg-[var(--color-bg-card-alt)]">
              <div className="text-wibify-neon font-mono text-sm tracking-widest mb-8">{step.id}</div>
              <h3 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">{step.title}</h3>
              <p className="text-wibify-gray text-lg leading-relaxed mb-12 max-w-md font-light">
                {step.desc}
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-mono text-wibify-gray mt-auto">
                {step.tags.map((tag, i) => (
                  <span key={i} className="flex items-center gap-2 bg-[var(--color-bg-card)] px-3 py-2 rounded-sm border border-wibify-border">
                    <span className="w-1 h-1 bg-wibify-gray rounded-full"></span> {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
