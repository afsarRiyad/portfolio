import React from 'react';

export default function Profile() {
  return (
    <section id="profile" className="py-32 px-6 md:px-12 bg-[var(--color-bg-card)] border-t border-wibify-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        
        {/* Profile Image Space */}
        <div className="w-full md:w-1/3 relative group">
          <div className="aspect-[3/4] bg-[var(--color-bg-card-alt)] border border-wibify-border overflow-hidden rounded-sm relative">
             <div className="absolute inset-0 bg-wibify-neon/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
             {/* Using a placeholder. */}
             <img
               src="/riyad.jpeg"
               alt="Nurul Afsar Riyad"
               className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
             />
             <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent z-20">
                <div className="flex gap-4 text-xs font-mono text-wibify-neon">
                    <span># FRONTEND</span>
                    <span># FULL STACK</span>
                </div>
             </div>
          </div>
          {/* Decorative Elements */}
          <div className="absolute -right-4 -bottom-4 w-24 h-24 border-r border-b border-wibify-neon/50"></div>
          <div className="absolute -left-4 -top-4 w-8 h-8 border-l border-t border-wibify-gray/50"></div>
        </div>

        {/* Profile Details */}
        <div className="w-full md:w-2/3">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
            Nurul Afsar <span className="text-wibify-neon italic font-serif">Riyad.</span>
          </h2>
          <p className="text-wibify-gray text-xl mb-12 max-w-2xl font-light leading-relaxed">
            Self-learner and frontend engineer based in Dhaka, Bangladesh. Currently transitioning to full-stack development with a focus on backend technologies. I build practical web applications and ecommerce solutions to solve real business problems.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-wibify-border pt-12">
            <div>
              <div className="text-4xl font-bold text-foreground mb-2">Dhaka</div>
              <div className="text-xs font-mono text-wibify-gray uppercase tracking-widest">Based in Bangladesh</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-foreground mb-2">8<span className="text-wibify-neon text-2xl ml-1 align-top">+</span></div>
              <div className="text-xs font-mono text-wibify-gray uppercase tracking-widest">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-foreground mb-2">1.5<span className="text-wibify-neon text-2xl ml-1 align-top">+</span></div>
              <div className="text-xs font-mono text-wibify-gray uppercase tracking-widest">Years Learning</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-foreground mb-2">React</div>
              <div className="text-xs font-mono text-wibify-gray uppercase tracking-widest">→ Full Stack</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}


