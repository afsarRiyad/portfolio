"use client";
import { Menu, X, Sun, Moon } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useTheme } from './ThemeProvider';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <>
      <nav className="fixed top-0 w-full z-[999] flex items-center justify-between px-6 md:px-12 py-6 pointer-events-none">
        <div className="flex items-center gap-2 pointer-events-auto text-foreground">
          <div className="text-wibify-neon font-bold text-3xl tracking-tighter">
            N.
          </div>
        </div>
        <div className="flex items-center gap-4 pointer-events-auto">
          <button
            onClick={toggleTheme}
            className="border border-wibify-border p-2 rounded hover:bg-wibify-neon hover:text-black transition-all duration-300 bg-[var(--color-bg-card)] text-foreground cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          {/* Solid fill instead of `backdrop-blur-sm`: a backdrop filter on a
              fixed element repaints its region on every scroll frame. */}
          <Link href="#contact" className="hidden md:block text-sm border border-wibify-border px-4 py-2 rounded hover:bg-wibify-neon hover:text-black transition-colors duration-300 bg-[var(--color-bg-card)]">
            Contact Me →
          </Link>
          <button onClick={() => setIsOpen(!isOpen)} className="border border-wibify-border p-2 rounded hover:bg-wibify-neon hover:text-black transition-all duration-300 bg-[var(--color-bg-card)] text-foreground cursor-pointer">
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <div className={`fixed inset-0 bg-[var(--color-bg-card)] z-[998] transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] flex flex-col justify-center px-6 md:px-24 ${
          isOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-full opacity-0 pointer-events-none'
        }`}>
        <div className="flex flex-col gap-4 text-6xl md:text-[8vw] font-bold tracking-tighter leading-none">
          <a href="#profile" onClick={() => setIsOpen(false)} className="hover:text-wibify-neon hover:translate-x-8 transition-all duration-500 w-max">Profile</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-wibify-neon hover:translate-x-8 transition-all duration-500 w-max">Projects</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-wibify-neon hover:translate-x-8 transition-all duration-500 w-max">Contact</a>
        </div>
        <div className="absolute bottom-12 left-6 md:left-24 text-wibify-gray font-mono text-xs uppercase tracking-widest flex gap-8">
            <a href="https://github.com/afsarriyad" target="_blank" className="hover:text-wibify-neon transition-colors">GitHub: afsarriyad ↗</a>
            <a href="https://linkedin.com/in/afsar-riyad" target="_blank" className="hover:text-wibify-neon transition-colors">LinkedIn: afsar-riyad ↗</a>
        </div>
      </div>
    </>
  );
}

