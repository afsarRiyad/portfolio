"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { RevealContainer, RevealItem } from './Reveal';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '@/data/projects';

const VISIBLE_COUNT = 3;

export default function Projects() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const hasMore = projects.length > VISIBLE_COUNT;

  const toggleShowAll = () => {
    const next = !showAll;
    setShowAll(next);
    // Collapse a project that is about to be hidden
    if (!next && expandedId) {
      const index = projects.findIndex(p => p.id === expandedId);
      if (index >= VISIBLE_COUNT) setExpandedId(null);
    }
  };

  return (
    <section id="projects" className="py-32 px-6 md:px-12 bg-background border-t border-wibify-border">
      <RevealContainer>
        
        <RevealItem className="text-wibify-gray text-xs tracking-[0.2em] uppercase mb-12">
          [02] Selected Work / 2026
        </RevealItem>
        
        <RevealItem>
          <h2 className="text-5xl md:text-7xl lg:text-[8vw] font-bold tracking-tighter mb-16 leading-none">
            What I've <span className="text-wibify-neon italic font-serif">built.</span>
          </h2>
        </RevealItem>

        <div className="flex flex-col border-t border-wibify-border group/list">
          {projects.map((project, index) => (
            <RevealItem
              key={project.id}
              className={index >= VISIBLE_COUNT && !showAll ? 'hidden' : undefined}
            >
              <div className="border-b border-wibify-border">
                {/* Header Row (Clickable) */}
                <div

                  onClick={() => toggleExpand(project.id)}
                  className="group/row relative flex items-center justify-between py-10 md:py-14 cursor-pointer z-10"
                >
                  <div className="flex items-center gap-8 md:gap-16">
                    <span className={`text-sm font-mono transition-colors duration-300 ${expandedId === project.id ? 'text-wibify-neon opacity-100' : 'text-wibify-gray opacity-50 group-hover/row:text-wibify-neon'}`}>
                      {project.id}
                    </span>
                    <h3 className={`text-4xl md:text-6xl font-bold tracking-tight transition-all duration-500 ${expandedId === project.id ? 'text-wibify-neon pl-4' : 'text-foreground group-hover/row:text-wibify-neon group-hover/row:pl-4'}`}>
                      {project.title}
                    </h3>
                  </div>
                  
                  <div className="hidden md:flex items-center gap-8 text-wibify-gray font-mono text-xs tracking-widest uppercase">
                    <span className="transition-colors duration-300 group-hover/row:text-foreground">{project.type}</span>
                    <span className="transition-colors duration-300 group-hover/row:text-foreground">{project.year}</span>
                    <motion.span 
                      animate={{ rotate: expandedId === project.id ? 45 : 0 }}
                      className={`text-2xl transition-opacity duration-300 ${expandedId === project.id ? 'opacity-100 text-wibify-neon' : 'opacity-0 group-hover/row:opacity-100 text-wibify-neon'}`}
                    >
                      +
                    </motion.span>
                  </div>
                </div>

                {/* Expandable Details Section */}
                <AnimatePresence>
                  {expandedId === project.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden bg-background"
                    >
                      <div className="pb-14 pt-4 flex flex-col md:flex-row gap-8 md:gap-16 md:pl-[6.5rem]">
                        <div className="w-full md:w-2/3">
                          <p className="text-wibify-gray text-lg font-light leading-relaxed mb-8">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-3">
                            {project.tech.map((t, i) => (
                              <span key={i} className="border border-wibify-border px-3 py-1.5 text-xs font-mono text-foreground uppercase tracking-widest bg-[var(--color-bg-card)]">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="w-full md:w-1/3 flex items-start md:justify-end gap-4">
                          <Link
                            href={`/projects/${project.slug}`}
                            className="flex items-center gap-2 border border-wibify-neon text-wibify-neon px-6 py-3 text-xs font-mono uppercase tracking-widest hover:bg-wibify-neon hover:text-black transition-all duration-300"
                          >
                            View Details ↗
                          </Link>
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 border border-wibify-border text-wibify-gray px-6 py-3 text-xs font-mono uppercase tracking-widest hover:border-wibify-neon hover:text-wibify-neon transition-all duration-300"
                          >
                            GitHub ↗
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </RevealItem>
          ))}
        </div>

        {/* Show more / Show less toggle */}
        {hasMore && (
          <RevealItem>
            <div className="flex justify-center mt-12">
              <button
                onClick={toggleShowAll}
                aria-expanded={showAll}
                className="group/toggle flex items-center gap-3 border border-wibify-border px-6 py-3 text-xs font-mono uppercase tracking-widest text-wibify-gray hover:border-wibify-neon hover:text-wibify-neon transition-all duration-300"
              >
                <motion.span
                  animate={{ rotate: showAll ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-base leading-none"
                >
                  +
                </motion.span>
                {showAll ? 'Show less' : 'Show more'}
                <span className="opacity-50">
                  ({showAll ? projects.length : VISIBLE_COUNT}/{projects.length})
                </span>
              </button>
            </div>
          </RevealItem>
        )}
        
      </RevealContainer>
    </section>
  );
}


