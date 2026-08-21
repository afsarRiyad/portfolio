"use client";
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'What does a project with you cost?',
    answer: 'I do not charge by the hour. I charge by the value and complexity of the project. Whether it is a full-stack Next.js web app or an ecommerce platform, we agree on a fixed scope and price upfront.'
  },
  {
    question: 'How long does a project take?',
    answer: 'It depends on the scope. A custom web portfolio might take a few weeks, while a complex ecommerce platform or full-stack application takes months of iterative development and testing.'
  },
  {
    question: 'Which technologies do you use?',
    answer: 'My primary stack involves React, Next.js, REST APIs, and modern JavaScript/TypeScript. I focus on building performant, scalable web applications with clean code and best practices.'
  },
  {
    question: 'Do you work with clients outside Bangladesh?',
    answer: 'Absolutely. While I am based in Dhaka, Bangladesh, I work remotely with clients globally. All web development and full-stack projects can be managed efficiently through remote collaboration.'
  },
  {
    question: 'Who works on the project — a team or one person?',
    answer: 'You work directly with me. No account managers, no handoffs. I handle the frontend, backend, and overall architecture to ensure consistency and quality throughout the project.'
  },
  {
    question: 'Do I get the source code and full access?',
    answer: 'Yes. Once the project is completed and handed over, you receive the full repository access and exclusive usage rights. No vendor lock-in, and you own the code.'
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-32 px-6 md:px-12 bg-background border-t border-wibify-border">
      <div className="max-w-4xl mx-auto">
        <div className="text-wibify-gray text-xs tracking-[0.2em] uppercase mb-12 flex items-center gap-4">
          <span className="w-4 h-[1px] bg-wibify-gray"></span>
          [FAQ] FREQUENTLY ASKED
        </div>
        
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
          Answers up <span className="text-wibify-neon italic font-serif">front.</span>
        </h2>
        <p className="text-wibify-gray text-lg mb-16 max-w-xl font-light">
          Six answers that make briefing calls shorter — clearing the friction before we start.
        </p>

        <div className="flex flex-col border-t border-wibify-border">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border-b border-wibify-border py-8 cursor-pointer group"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex items-center justify-between gap-8">
                <div className="flex items-center gap-6 md:gap-12 w-full">
                  <span className="text-wibify-neon font-mono text-sm">{(index + 1).toString().padStart(2, '0')}</span>
                  <h3 className="text-xl md:text-3xl font-bold group-hover:text-wibify-neon transition-colors duration-300">
                    {faq.question}
                  </h3>
                </div>
                <div className="text-wibify-gray group-hover:text-foreground transition-colors duration-300 flex-shrink-0">
                  {openIndex === index ? <Minus size={24} /> : <Plus size={24} />}
                </div>
              </div>
              
              {/* Expandable Answer with smooth CSS grid transition */}
              <div 
                className={`grid transition-all duration-300 ease-in-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0'}`}
              >
                <div className="overflow-hidden">
                  <p className="text-wibify-gray text-lg font-light leading-relaxed pl-14 md:pl-20 max-w-3xl">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


