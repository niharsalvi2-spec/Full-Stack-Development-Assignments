import React from 'react';
import { stack } from '../data/portfolio';
import StackCard from '../components/StackCard';

const Stack = () => {
  return (
    <section id="stack" className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Technical Stack</h2>
          <div className="w-16 h-1 bg-brand mx-auto mb-6 rounded-full"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">Technologies I utilize for building and scaling applications.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(stack).map(([category, technologies], index) => (
            <StackCard 
              key={index} 
              category={category} 
              technologies={technologies} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;
