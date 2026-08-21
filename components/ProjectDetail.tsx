"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ProjectGallery from '@/components/ProjectGallery';
import type { Project } from '@/types/project';

interface ProjectDetailProps {
  project: Project;
  prevProject?: Project;
  nextProject?: Project;
}

export default function ProjectDetail({ project, prevProject, nextProject }: ProjectDetailProps) {
  return (
    <motion.main
      className="min-h-screen bg-background text-foreground"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <div className="border-b border-wibify-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6">
          <Link
            href="/#projects"
            className="inline-flex items-center text-wibify-gray hover:text-wibify-neon transition-colors text-sm font-mono uppercase tracking-widest"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Projects
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        {/* Project Header */}
        <div className="mb-12">
          <div className="text-wibify-gray text-xs tracking-[0.2em] uppercase mb-4 flex items-center gap-4">
            <span className="w-4 h-[1px] bg-wibify-gray"></span>
            {project.type} — {project.year}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">{project.title}</h1>
          {project.overview && (
            <p className="text-wibify-gray text-xl max-w-3xl font-light leading-relaxed mb-8">
              {project.overview}
            </p>
          )}

          {/* Links */}
          <div className="flex gap-4">
            {project.liveUrl && project.liveUrl !== '#' && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--color-bg-nav)] border border-wibify-border px-6 py-3 rounded-sm text-sm font-medium hover:border-wibify-neon transition-all duration-300 relative group overflow-hidden"
              >
                <span className="relative z-10 group-hover:text-wibify-neon transition-colors duration-300">Live Demo →</span>
              </a>
            )}
            {project.githubUrl && project.githubUrl !== '#' && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--color-bg-nav)] border border-wibify-border px-6 py-3 rounded-sm text-sm font-medium hover:border-wibify-neon transition-all duration-300 relative group overflow-hidden"
              >
                <span className="relative z-10 group-hover:text-wibify-neon transition-colors duration-300">GitHub ↗</span>
              </a>
            )}
          </div>
        </div>

        {/* Project Gallery */}
        {project.screenshots && project.screenshots.length > 0 && (
          <ProjectGallery screenshots={project.screenshots} />
        )}

        {/* Tech Stack & Duration */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-[var(--color-bg-card)] border border-wibify-border rounded-sm p-6">
            <h2 className="text-wibify-neon font-mono text-xs tracking-widest uppercase mb-4">Technologies</h2>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-[var(--color-bg-card-alt)] text-sm text-foreground border border-wibify-border rounded-sm font-mono uppercase tracking-widest"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {project.duration && (
            <div className="bg-[var(--color-bg-card)] border border-wibify-border rounded-sm p-6">
              <h2 className="text-wibify-neon font-mono text-xs tracking-widest uppercase mb-4">Project Duration</h2>
              <p className="text-wibify-gray">{project.duration}</p>
            </div>
          )}
        </div>

        {/* What I Built */}
        {project.features && project.features.length > 0 && (
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6">
              What I <span className="text-wibify-neon italic font-serif">built.</span>
            </h2>
            <div className="bg-[var(--color-bg-card)] border border-wibify-border rounded-sm p-6">
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-wibify-gray">
                    <span className="text-wibify-neon mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Technical Architecture */}
        {project.architecture && project.architecture.length > 0 && (
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6">
              Technical <span className="text-wibify-neon italic font-serif">Architecture.</span>
            </h2>
            <div className="bg-[var(--color-bg-card)] border border-wibify-border rounded-sm p-6">
              <div className="space-y-4">
                {project.architecture.map((layer, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-wibify-neon rounded-full" />
                    <span className="text-wibify-gray">{layer}</span>
                    {index < project.architecture!.length - 1 && (
                      <svg className="w-4 h-4 text-wibify-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Challenges */}
        {project.challenges && project.challenges.length > 0 && (
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6">
              Challenges I <span className="text-wibify-neon italic font-serif">faced.</span>
            </h2>
            <div className="space-y-6">
              {project.challenges.map((challenge, index) => (
                <div key={index} className="bg-[var(--color-bg-card)] border border-wibify-border rounded-sm p-6">
                  <h3 className="text-xl font-bold mb-4">
                    {String(index + 1).padStart(2, '0')} — {challenge.title}
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-wibify-neon font-mono text-xs tracking-widest uppercase mb-2">Problem</h4>
                      <p className="text-wibify-gray">{challenge.problem}</p>
                    </div>

                    <div>
                      <h4 className="text-wibify-neon font-mono text-xs tracking-widest uppercase mb-2">Solution</h4>
                      <p className="text-wibify-gray">{challenge.solution}</p>
                    </div>

                    <div>
                      <h4 className="text-wibify-neon font-mono text-xs tracking-widest uppercase mb-2">Result</h4>
                      <p className="text-wibify-gray">{challenge.result}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* What I Learned */}
        {project.learnings && project.learnings.length > 0 && (
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6">
              What I <span className="text-wibify-neon italic font-serif">learned.</span>
            </h2>
            <div className="bg-[var(--color-bg-card)] border border-wibify-border rounded-sm p-6">
              <ul className="space-y-3">
                {project.learnings.map((learning, index) => (
                  <li key={index} className="flex items-start gap-3 text-wibify-gray">
                    <span className="text-wibify-neon mt-1">→</span>
                    <span>{learning}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* What I Would Improve */}
        {project.improvements && project.improvements.length > 0 && (
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6">
              What I would <span className="text-wibify-neon italic font-serif">improve.</span>
            </h2>
            <div className="bg-[var(--color-bg-card)] border border-wibify-border rounded-sm p-6">
              <ul className="space-y-3">
                {project.improvements.map((improvement, index) => (
                  <li key={index} className="flex items-start gap-3 text-wibify-gray">
                    <span className="text-wibify-neon mt-1">→</span>
                    <span>{improvement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Results */}
        {project.results && project.results.length > 0 && (
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6">
              <span className="text-wibify-neon italic font-serif">Results.</span>
            </h2>
            <div className="bg-[var(--color-bg-card)] border border-wibify-border rounded-sm p-6">
              <ul className="space-y-3">
                {project.results.map((result, index) => (
                  <li key={index} className="flex items-start gap-3 text-wibify-gray">
                    <span className="text-wibify-neon mt-1">✓</span>
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Project Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-wibify-border">
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="flex items-center gap-2 text-wibify-gray hover:text-wibify-neon transition-colors font-mono text-xs tracking-widest uppercase"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Previous Project
            </Link>
          ) : (
            <div />
          )}

          {nextProject ? (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="flex items-center gap-2 text-wibify-gray hover:text-wibify-neon transition-colors font-mono text-xs tracking-widest uppercase"
            >
              Next Project
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </motion.main>
  );
}


