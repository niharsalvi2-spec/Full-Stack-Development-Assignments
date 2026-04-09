import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Domains from './sections/Domains';
import Projects from './sections/Projects';
import Research from './sections/Research';
import Stack from './sections/Stack';
import Profiles from './sections/Profiles';
import Contact from './sections/Contact';

function App() {
  // Intersection Observer for scroll reveal animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('section > div');
    elements.forEach(el => {
      el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-8');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="font-sans smooth-scroll bg-amber-50 relative">
      <Navbar />
      <main>
        <Hero />
        <Domains />
        <Projects />
        <Research />
        <Stack />
        <Profiles />
        <Contact />
      </main>
      
      <footer className="bg-amber-50/50 py-8 border-t border-amber-200">
        <div className="max-w-7xl mx-auto px-6 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Nihar Salvi. Built with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
