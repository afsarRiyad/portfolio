import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-bg-card)] pt-32 pb-12 px-6 md:px-12 border-t border-wibify-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16 mb-32">
        <div>
          <div className="text-wibify-neon font-bold text-5xl tracking-tighter mb-4">N.</div>
          <h2 className="text-2xl font-bold max-w-xs">
            Frontend & Full Stack <br/>
            <span className="text-wibify-gray font-normal italic">from Dhaka, BD.</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24">
          <div>
            <h4 className="text-xs font-mono text-wibify-gray tracking-widest uppercase mb-6">Base</h4>
            <ul className="text-sm space-y-3 text-wibify-gray font-light">
              <li>Dhaka, Bangladesh</li>
              <li>Available for remote work</li>
              <li>Open to collaborations</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-mono text-wibify-gray tracking-widest uppercase mb-6">Social</h4>
            <ul className="text-sm space-y-3 text-wibify-gray font-light">
              <li><a href="https://github.com/afsarriyad" target="_blank" className="hover:text-wibify-neon transition-colors">GitHub: afsarriyad ↗</a></li>
              <li><a href="https://linkedin.com/in/afsar-riyad" target="_blank" className="hover:text-wibify-neon transition-colors">LinkedIn: afsar-riyad ↗</a></li>
              <li><a href="mailto:nariyad.dev@gmail.com" className="hover:text-wibify-neon transition-colors">Email: nariyad.dev@gmail.com ↗</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs font-mono text-wibify-gray border-t border-wibify-border/50 pt-8">
        <p>© 2026 NURUL AFSAR RIYAD</p>
        <p className="mt-4 md:mt-0">BUILT WITH REACT & NEXT.JS</p>
      </div>
    </footer>
  );
}


