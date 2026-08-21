"use client";
import React, { useEffect, useState } from 'react';
import { RevealContainer, RevealItem } from './Reveal';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeProvider';

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
}

export default function LiveGithub() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    fetch('https://api.github.com/users/afsarriyad/repos?sort=updated&per_page=3')
      .then(res => res.json())
      .then(data => {
        if(Array.isArray(data)) setRepos(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section className="py-32 px-6 md:px-12 bg-background border-t border-wibify-border">
      <RevealContainer className="max-w-7xl mx-auto">
        <RevealItem className="text-wibify-gray text-xs tracking-[0.2em] uppercase mb-12 flex items-center gap-4">
          <span className="w-4 h-[1px] bg-wibify-gray"></span>
          [09] Live Activity
        </RevealItem>
        
        <RevealItem>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-16 leading-none">
            Code <span className="text-wibify-neon italic font-serif">activity.</span>
          </h2>
        </RevealItem>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Side: Massive Contribution Graph */}
          <RevealItem className="w-full lg:w-1/2 border border-wibify-border bg-[var(--color-bg-card)] p-6 md:p-10 rounded-sm group flex flex-col relative overflow-hidden min-h-[450px]">
             
             {/* Background Grid - theme-aware */}
             <div className={`absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none ${theme === 'light' ? 'opacity-30' : 'opacity-100'}`}></div>

             <motion.div
               initial={{ clipPath: 'inset(100% 0 0 0)' }}
               whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
               viewport={{ once: true, margin: "-10%" }}
               transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
               className="w-full flex-1 flex items-center justify-end z-10"
             >
               <img
                 src="https://ghchart.rshah.org/ccff00/afsarriyad"
                 alt="Github Contribution Chart"
                 className="w-[800px] md:w-[1000px] max-w-none h-auto opacity-80 group-hover:opacity-100 transition-all duration-700"
                 onError={(e) => { e.currentTarget.style.display = 'none'; }}
               />
             </motion.div>

             <div className="flex justify-between items-center text-wibify-gray font-mono text-xs uppercase border-t border-wibify-border pt-6 mt-6 z-10 bg-[var(--color-bg-card)]">
               <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-wibify-neon animate-pulse"></span>
                  Commits Graph
               </span>
               <a href="https://github.com/afsarriyad" target="_blank" rel="noreferrer" className="hover:text-wibify-neon transition-colors">afsarriyad ↗</a>
             </div>
          </RevealItem>

          {/* Right Side: Live Recent Repositories */}
          <RevealItem className="w-full lg:w-1/2 flex flex-col gap-4">
            <div className="text-wibify-gray font-mono text-xs tracking-widest uppercase mb-4 pl-2">
              Recently Updated Repositories
            </div>
            
            {loading ? (
              <div className="text-wibify-neon font-mono text-sm animate-pulse pl-2">Fetching from GitHub API...</div>
            ) : (
              repos.map((repo) => (
                <a 
                  key={repo.id} 
                  href={repo.html_url} 
                  target="_blank"
                  rel="noreferrer"
                  className="block border border-wibify-border bg-[var(--color-bg-card-alt)] p-6 hover:border-wibify-neon transition-all duration-300 group"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-wibify-neon transition-colors">
                      {repo.name}
                    </h3>
                    <span className="text-wibify-neon opacity-0 group-hover:opacity-100 transition-opacity text-xl">↗</span>
                  </div>
                  <p className="text-wibify-gray text-sm mb-4 line-clamp-2">
                    {repo.description || 'No description provided.'}
                  </p>
                  <div className="flex items-center gap-4 text-xs font-mono text-wibify-gray uppercase tracking-widest">
                    {repo.language && (
                      <span className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-wibify-neon"></span>
                        {repo.language}
                      </span>
                    )}
                  </div>
                </a>
              ))
            )}
          </RevealItem>
        </div>
      </RevealContainer>
    </section>
  );
}
