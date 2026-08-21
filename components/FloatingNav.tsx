import React from 'react';
import { MessageSquare, MessageCircle, Mail } from 'lucide-react';

export default function FloatingNav() {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-1 pr-6">
      <a href="https://github.com/afsarriyad" target="_blank" rel="noreferrer" className="bg-[var(--color-bg-nav)] border border-wibify-border p-4 hover:border-wibify-neon transition-colors duration-300 text-wibify-gray hover:text-foreground rounded-sm group relative overflow-hidden">
        <div className="absolute inset-0 bg-wibify-neon/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        <MessageCircle size={20} className="relative z-10" />
      </a>
      <a href="https://wa.me/8801829758534" target="_blank" rel="noreferrer" className="bg-[var(--color-bg-nav)] border border-wibify-border p-4 hover:border-wibify-neon transition-colors duration-300 text-wibify-gray hover:text-foreground rounded-sm group relative overflow-hidden">
        <div className="absolute inset-0 bg-wibify-neon/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        <MessageSquare size={20} className="relative z-10" />
      </a>
      <a href="mailto:nariyad.dev@gmail.com" className="bg-[var(--color-bg-nav)] border border-wibify-border p-4 hover:border-wibify-neon transition-colors duration-300 text-wibify-gray hover:text-foreground rounded-sm group relative overflow-hidden">
        <div className="absolute inset-0 bg-wibify-neon/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        <Mail size={20} className="relative z-10" />
      </a>
    </div>
  );
}

