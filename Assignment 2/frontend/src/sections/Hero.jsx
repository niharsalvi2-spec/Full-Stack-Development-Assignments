import React from 'react';
import { developer } from '../data/portfolio';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center z-10 relative">
        <img 
          src="/profile.jpg" 
          alt={developer.name} 
          className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full mx-auto mb-6 border-4 border-white shadow-lg reveal" 
        />
        <div className="inline-block px-4 py-1.5 rounded-full bg-brand-light text-brand text-sm font-semibold tracking-wide mb-6 reveal">
          HELLO, WORLD
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight leading-tight reveal">
          I'm {developer.name}
        </h1>
        
        <h2 className="text-2xl md:text-3xl text-brand-dark mb-8 font-medium reveal" style={{ animationDelay: '100ms' }}>
          {developer.title}
        </h2>
        
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed reveal" style={{ animationDelay: '200ms' }}>
          {developer.intro}
        </p>

        <blockquote className="max-w-3xl mx-auto text-xl italic text-slate-500 border-l-4 border-brand-light pl-6 mb-12 py-2 reveal" style={{ animationDelay: '300ms' }}>
          "{developer.quote}"
        </blockquote>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal" style={{ animationDelay: '400ms' }}>
          <a 
            href="#projects" 
            className="px-8 py-4 bg-brand text-white font-medium rounded-lg shadow-sm hover:shadow-md hover:bg-brand-dark transition-all active:scale-95 w-full sm:w-auto"
          >
            View Projects
          </a>
          <a 
            href="#contact" 
            className="px-8 py-4 bg-white text-slate-700 border border-slate-200 font-medium rounded-lg shadow-sm hover:bg-slate-50 hover:border-slate-300 transition-all active:scale-95 w-full sm:w-auto"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
