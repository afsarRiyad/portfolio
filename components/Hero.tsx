"use client";
import React from 'react';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-20 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-wibify-neon/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      
      <div className="flex flex-col lg:flex-row justify-between items-center relative z-10 w-full h-full mt-10">
        
        {/* Left Side: Text Area */}
        <div className="w-full lg:w-[60%] flex flex-col justify-center pointer-events-auto z-20">
          <div className="flex items-center gap-4 mb-8 text-wibify-gray text-xs tracking-[0.2em] uppercase">
            <span className="w-8 h-[1px] bg-wibify-gray"></span>
            [01] Nurul Afsar Riyad — Portfolio
          </div>

          {/* Personal Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-bold tracking-tighter leading-[1.05] max-w-3xl">
            Building web <br />
            <span className="text-wibify-neon italic font-serif pr-2">applications</span> that <br />
            perform.
          </h1>

          <p className="text-wibify-gray mt-8 text-lg max-w-lg font-light leading-relaxed">
            React and Next.js specialist based in Dhaka, Bangladesh. I build interfaces and the systems behind them — currently expanding into full-stack engineering.
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-6">
            <a href="#contact" className="bg-[var(--color-bg-nav)] border border-wibify-border px-8 py-4 rounded-sm text-sm font-medium hover:border-wibify-neon transition-all duration-300 relative group overflow-hidden">
              <span className="relative z-10 group-hover:text-wibify-neon transition-colors duration-300">Start a project →</span>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-[1px] bg-wibify-neon shadow-[0_0_10px_#ccff00]"></div>
            </a>
            <a href="/Nurul_Afsar_Riyad_Resume.pdf" download="Nurul_Afsar_Riyad_Resume.pdf" className="flex items-center gap-3 text-sm text-wibify-gray bg-[var(--color-bg-nav)] border border-wibify-border px-6 py-4 rounded-sm hover:border-wibify-neon hover:text-wibify-neon transition-all duration-300">
              <span>Download CV</span>
              <span>↓</span>
            </a>
          </div>
        </div>

        {/* Right Side: Code/Development Visual - Hidden on mobile */}
        <div className="hidden lg:flex absolute right-0 top-0 lg:relative lg:w-[40%] h-full lg:h-[80vh] justify-center lg:justify-start items-center z-10 pointer-events-auto lg:-ml-12">
           <div className="w-full max-w-[500px] bg-[var(--color-bg-card-alt)] border border-wibify-border rounded-sm p-6 opacity-80 font-mono text-xs md:text-sm">
             <div className="flex gap-2 mb-4">
               <div className="w-3 h-3 rounded-full bg-red-500"></div>
               <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
               <div className="w-3 h-3 rounded-full bg-green-500"></div>
             </div>
             <div className="space-y-2 text-wibify-gray">
               <div><span className="text-wibify-neon">const</span> developer = {"{"}</div>
               <div className="pl-4">name: <span className="text-foreground">"Riyad"</span>,</div>
               <div className="pl-4">skills: [<span className="text-foreground">"React"</span>, <span className="text-foreground">"Next.js"</span>, <span className="text-foreground">"Tailwind CSS"</span>, <span className="text-foreground">"Bootstrap"</span>, <span className="text-foreground">"TanStack Query"</span>, <span className="text-foreground">"Redux"</span>, <span className="text-foreground">"Authentication"</span>, <span className="text-foreground">"Axios"</span>, <span className="text-foreground">"Git"</span>, <span className="text-foreground">"GitHub"</span>, <span className="text-foreground">"Vercel"</span>, <span className="text-foreground">"Render"</span>, <span className="text-foreground">"Figma"</span>, <span className="text-foreground">"Responsive Design"</span>],</div>
               <div className="pl-4">focus: <span className="text-foreground">"Full Stack"</span>,</div>
               <div className="pl-4">location: <span className="text-foreground">"Dhaka, BD"</span></div>
               <div>{"}"};</div>
               <div className="mt-4"><span className="text-wibify-neon">export default</span> developer;</div>
             </div>
           </div>
        </div>

      </div>
      
      {/* Bottom Stats Bar */}
      <div className="mt-auto mb-10 flex flex-wrap gap-12 text-xs font-mono text-wibify-gray border-t border-wibify-border/50 pt-8 w-full z-20 relative">
        <div className="flex items-center gap-3">
          <span className="bg-wibify-neon/10 text-wibify-neon p-1 rounded-sm">★</span>
          SELF-TAUGHT DEVELOPER
        </div>
        <div className="flex items-center gap-3">
          <span className="text-wibify-neon border border-wibify-neon/30 p-1 rounded-sm">✦</span>
          FRONTEND → FULL STACK
        </div>
        <div className="flex items-center gap-3">
          <span className="text-wibify-neon border border-wibify-neon/30 p-1 rounded-sm">⚡</span>
          REACT, NEXT.JS, MONGODB, EXPRESS
        </div>
      </div>
    </section>
  );
}


