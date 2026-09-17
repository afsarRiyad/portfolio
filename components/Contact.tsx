"use client";
import React, { useState } from 'react';
import { RevealContainer, RevealItem } from './Reveal';

export default function Contact() {
  const [formStatus, setFormStatus] = useState('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormStatus('success');
        form.reset();
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        setFormStatus('error');
        setTimeout(() => setFormStatus('idle'), 5000);
      }
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-background border-t border-wibify-border">
      <RevealContainer className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
        
        {/* Left Side: Contact Info & Highlighted Text */}
        <RevealItem>
          <div className="text-wibify-gray text-xs tracking-[0.2em] uppercase mb-6 flex items-center gap-4">
            <span className="w-4 h-[1px] bg-wibify-gray"></span>
            [06] CONTACT
          </div>
          
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-wibify-neon mb-12">
            Let's talk.
          </h2>

          {/* Wibify Style Highlighted Text */}
          <div className="text-lg md:text-xl font-medium leading-loose mb-16 max-w-md">
            <span className="bg-wibify-neon text-black px-2 py-1 box-decoration-clone">
              Direct line to Riyad — no middleman and no
            </span>{' '}
            <span className="bg-wibify-neon text-black px-2 py-1 box-decoration-clone">
              unnecessary back-and-forth. Tell me
            </span>{' '}
            <span className="bg-wibify-neon text-black px-2 py-1 box-decoration-clone">
              about your next web project or ecommerce idea,
            </span>{' '}
            <span className="bg-wibify-neon text-black px-2 py-1 box-decoration-clone">
              and I'll reply within 24 hours with concrete next
            </span>{' '}
            <span className="bg-wibify-neon text-black px-2 py-1 box-decoration-clone">
              steps.
            </span>
          </div>

          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-8 text-sm font-mono border-t border-wibify-border pt-10">
            <div>
              <div className="text-wibify-gray tracking-widest uppercase mb-2 text-xs">Email</div>
              <a href="mailto:nariyad.dev@gmail.com" className="hover:text-wibify-neon transition-colors">nariyad.dev@gmail.com</a>
            </div>
            <div>
              <div className="text-wibify-gray tracking-widest uppercase mb-2 text-xs">GitHub</div>
              <a href="https://github.com/afsarriyad" target="_blank" rel="noreferrer" className="hover:text-wibify-neon transition-colors">github.com/afsarriyad</a>
            </div>
            <div>
              <div className="text-wibify-gray tracking-widest uppercase mb-2 text-xs">LinkedIn</div>
              <a href="https://linkedin.com/in/afsar-riyad" target="_blank" rel="noreferrer" className="hover:text-wibify-neon transition-colors">linkedin.com/in/afsar-riyad</a>
            </div>
            <div>
              <div className="text-wibify-gray tracking-widest uppercase mb-2 text-xs">Base</div>
              <div className="text-foreground">Dhaka, Bangladesh</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-black bg-wibify-neon px-3 py-1 text-xs font-bold uppercase tracking-widest">
                Reply within 24h
              </div>
            </div>
          </div>
        </RevealItem>

        {/* Right Side: The Briefing Form */}
        <RevealItem className="bg-[var(--color-bg-card)] border border-wibify-border p-8 md:p-12 rounded-sm relative">
           <div className="text-wibify-neon font-mono text-xs tracking-widest uppercase mb-4">
            Briefing
          </div>
          <h3 className="text-3xl font-bold mb-6 border-b border-wibify-border/50 pb-6">
            Send a short briefing.
          </h3>

          {/* Form Status Messages */}
          {formStatus === 'success' && (
            <div className="mb-6 p-4 bg-wibify-neon/10 border border-wibify-neon text-wibify-neon text-sm">
              Message sent successfully! I'll get back to you within 24 hours.
            </div>
          )}
          {formStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500 text-red-500 text-sm">
              Something went wrong. Please try again or contact me directly at nariyad.dev@gmail.com
            </div>
          )}
          {formStatus === 'submitting' && (
            <div className="mb-6 p-4 bg-wibify-neon/10 border border-wibify-neon text-wibify-neon text-sm">
              Sending...
            </div>
          )}

          <form
            action="https://formspree.io/f/xdenjdea"
            method="POST"
            onSubmit={handleSubmit}
            className="flex flex-col gap-8 text-sm"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label className="text-wibify-gray font-mono text-xs tracking-widest uppercase">First Name <span className="text-wibify-neon">*</span></label>
                <input type="text" name="name" placeholder="Anna" required className="bg-[var(--color-bg-card-alt)] border border-wibify-border p-4 text-foreground focus:border-wibify-neon outline-none transition-colors w-full rounded-sm" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-wibify-gray font-mono text-xs tracking-widest uppercase">Last Name <span className="text-wibify-neon">*</span></label>
                <input type="text" name="lastname" placeholder="Smith" required className="bg-[var(--color-bg-card-alt)] border border-wibify-border p-4 text-foreground focus:border-wibify-neon outline-none transition-colors w-full rounded-sm" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-wibify-gray font-mono text-xs tracking-widest uppercase">Email <span className="text-wibify-neon">*</span></label>
              <input type="email" name="email" placeholder="anna@company.com" required className="bg-[var(--color-bg-card-alt)] border border-wibify-border p-4 text-foreground focus:border-wibify-neon outline-none transition-colors w-full rounded-sm" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label className="text-wibify-gray font-mono text-xs tracking-widest uppercase">Company (Optional)</label>
                <input type="text" name="company" placeholder="Studio Inc." className="bg-[var(--color-bg-card-alt)] border border-wibify-border p-4 text-foreground focus:border-wibify-neon outline-none transition-colors w-full rounded-sm" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-wibify-gray font-mono text-xs tracking-widest uppercase">Website (Optional)</label>
                <input type="text" name="website" placeholder="https://..." className="bg-[var(--color-bg-card-alt)] border border-wibify-border p-4 text-foreground focus:border-wibify-neon outline-none transition-colors w-full rounded-sm" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-wibify-gray font-mono text-xs tracking-widest uppercase">Message (Optional)</label>
              <textarea name="message" rows={4} placeholder="Idea, industry, timeline — what we should know." className="bg-[var(--color-bg-card-alt)] border border-wibify-border p-4 text-foreground placeholder:text-wibify-gray focus:border-wibify-neon outline-none transition-colors w-full rounded-sm resize-none"></textarea>
            </div>

            <div className="flex items-center gap-4 mt-2">
              <input type="checkbox" name="consent" required className="w-5 h-5 accent-wibify-neon bg-transparent border-wibify-border cursor-pointer" />
              <span className="text-wibify-gray text-xs">I consent to the processing of my data according to the privacy policy.</span>
            </div>

            {/* Formspree honeypot for spam protection */}
            <input type="text" name="_gotcha" style={{display: 'none'}} />

            <button type="submit" className="mt-4 border border-wibify-border py-5 hover:bg-white hover:text-black transition-colors duration-300 font-medium">
              Send request →
            </button>
          </form>
        </RevealItem>

      </RevealContainer>
    </section>
  );
}


