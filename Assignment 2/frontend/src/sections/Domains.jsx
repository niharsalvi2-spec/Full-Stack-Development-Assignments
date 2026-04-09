import React from 'react';
import { domains } from '../data/portfolio';
import DomainCard from '../components/DomainCard';

const Domains = () => {
  return (
    <section id="domains" className="py-24 bg-amber-100/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Core Domains</h2>
          <div className="w-16 h-1 bg-brand mx-auto mb-6 rounded-full"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">Areas of specialization and ongoing exploration in computer science.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {domains.map((domain, index) => (
            <DomainCard 
              key={index} 
              name={domain.name} 
              description={domain.description} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Domains;
