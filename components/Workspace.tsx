"use client";
import React from 'react';
import { RevealContainer, RevealItem } from './Reveal';

export default function Workspace() {
  return (
    <section className="py-32 px-6 md:px-12 bg-background border-t border-wibify-border">
      <RevealContainer className="max-w-7xl mx-auto">
        
        {/* Item 1: Top Tag */}
        <RevealItem className="text-wibify-gray text-xs tracking-[0.2em] uppercase mb-12 flex items-center gap-4">
          <span className="w-4 h-[1px] bg-wibify-gray"></span>
          [07] WORKSPACE • BASE
        </RevealItem>

        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Item 2: Image Section */}
          <RevealItem className="w-full lg:w-[60%] relative group">
            <div className="aspect-video bg-[var(--color-bg-card)] border border-wibify-border overflow-hidden rounded-sm relative">
              <div className="absolute top-6 left-6 z-10 bg-[var(--color-bg-card-alt)] border border-wibify-border px-5 py-4 text-xs font-mono shadow-2xl">
                <div className="text-foreground font-bold mb-2 text-sm">Dhaka, Bangladesh</div>
                <div className="text-wibify-gray flex items-center gap-3">
                   <span className="w-2 h-2 bg-wibify-neon rounded-full animate-pulse"></span>
                   REMOTE READY
                </div>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&q=80&w=1200" 
                alt="Workspace"
                className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              />
              <div className="absolute bottom-6 right-6 z-10 text-wibify-neon font-mono text-xs uppercase bg-[var(--color-bg-card)]/80 backdrop-blur-sm px-4 py-2 border border-wibify-neon/30">
                ◼ INSIDE SETUP - 01
              </div>
            </div>
          </RevealItem>

          <div className="w-full lg:w-[40%] flex flex-col justify-center">
            
            {/* Item 3: Main Heading */}
            <RevealItem>
              <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-8 leading-[1.1]">
                My setup in Dhaka is the <span className="text-wibify-neon italic font-serif">Development Hub.</span>
              </h2>
            </RevealItem>

            {/* Item 4: Paragraph */}
            <RevealItem>
              <p className="text-wibify-gray text-lg font-light leading-relaxed mb-12">
                This is where I build modern web applications and ecommerce platforms — focused on clean, performant frontend code, while growing into full-stack development.
              </p>
            </RevealItem>

            {/* Item 5: Grid */}
            <RevealContainer className="grid grid-cols-2 gap-x-8 gap-y-10 border-t border-wibify-border pt-10">
              <RevealItem>
                <div className="text-wibify-gray font-mono text-xs tracking-widest uppercase mb-2">Focus</div>
                <div className="text-xl font-bold">Frontend → Full Stack</div>
              </RevealItem>
              <RevealItem>
                <div className="text-wibify-gray font-mono text-xs tracking-widest uppercase mb-2">Stack</div>
                <div className="text-xl font-bold">React, Next.js, REST API</div>
              </RevealItem>
              <RevealItem>
                <div className="text-wibify-gray font-mono text-xs tracking-widest uppercase mb-2">Region</div>
                <div className="text-xl font-bold">Dhaka, BD</div>
              </RevealItem>
              <RevealItem>
                <div className="text-wibify-gray font-mono text-xs tracking-widest uppercase mb-2">Status</div>
                <div className="text-xl font-bold">Open to Work</div>
              </RevealItem>
            </RevealContainer>

          </div>
        </div>
      </RevealContainer>
    </section>
  );
}

