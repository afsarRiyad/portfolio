"use client";
import React from 'react';
import { RevealContainer, RevealItem } from './Reveal';

const servicesList = [
  { num: '01', title: 'Frontend Development', desc: 'Building modern, responsive user interfaces with React, Next.js, and Tailwind CSS. Focus on performance, accessibility, and pixel-perfect design.' },
  { num: '02', title: 'Full Stack Applications', desc: 'Connecting frontend applications to backend services using TanStack Query and Axios — handling authentication flows, token refresh, and data synchronization.' },
  { num: '03', title: 'API Development', desc: 'Working with REST APIs — integrating endpoints with Express.js and MongoDB, and implementing authentication. Currently deepening backend fundamentals.' }
];

export default function Services() {
  return (
    <section className="py-32 px-6 md:px-12 bg-background border-t border-wibify-border">
      <RevealContainer className="max-w-7xl mx-auto">
        <RevealItem className="text-wibify-gray text-xs tracking-[0.2em] uppercase mb-12">
          [03] Capabilities
        </RevealItem>
        
        <RevealItem>
          <h2 className="text-5xl md:text-7xl lg:text-[7vw] font-bold tracking-tighter mb-20 leading-none">
            What I can <span className="text-wibify-neon italic font-serif">do.</span>
          </h2>
        </RevealItem>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-wibify-border pt-12">
          {servicesList.map((service, index) => (
            <RevealItem key={index} className="flex flex-col">
              <span className="text-wibify-neon font-mono text-sm mb-6">{service.num}</span>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">{service.title}</h3>
              <p className="text-wibify-gray font-light leading-relaxed">{service.desc}</p>
            </RevealItem>
          ))}
        </div>
      </RevealContainer>
    </section>
  );
}
