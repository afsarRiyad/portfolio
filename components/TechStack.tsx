import React from 'react';

const claims = [
  { name: 'React & Next.js', desc: 'Modern frontend frameworks — building performant, SEO-friendly web applications with server-side rendering and static generation.' },
  { name: 'JavaScript & Tailwind CSS', desc: 'Core frontend technologies — writing clean, maintainable code with modern ES6+ features and utility-first CSS.' },
  { name: 'MongoDB & Express.js', desc: 'Backend fundamentals — working with REST APIs, MongoDB, and the Node.js ecosystem. Currently deepening full-stack skills.' },
  { name: 'Git & Vercel', desc: 'Git & Deployment — managing code with Git, collaborating via GitHub, and deploying frontend to Vercel and backend to Render.' }
];

export default function TechStack() {
  return (
    <section className="py-32 px-6 md:px-12 bg-background border-t border-wibify-border">
      <div className="flex flex-col md:flex-row gap-16 max-w-7xl mx-auto">
        <div className="md:w-1/3">
           <div className="text-wibify-gray text-xs tracking-[0.2em] uppercase mb-8">
            [REF] CORE STACK
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Verify the <br/> arsenal.</h2>
          <p className="text-wibify-gray text-lg font-light">
            Built on reliable, high-performance technologies. No bloatware, just optimized engineering.
          </p>
        </div>
        
        <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {claims.map((claim, idx) => (
            <div key={idx} className="group cursor-pointer">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2 group-hover:text-wibify-neon transition-colors duration-300">
                {claim.name} <span className="text-wibify-gray font-normal text-sm opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
              </h3>
              <p className="text-wibify-gray text-sm leading-relaxed font-light">{claim.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


