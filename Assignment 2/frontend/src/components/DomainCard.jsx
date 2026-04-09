import React from 'react';
import { Layers } from 'lucide-react';

const DomainCard = ({ name, description }) => {
  return (
    <div className="glass-card p-6 hover:-translate-y-1 transition-transform duration-300">
      <div className="w-12 h-12 bg-brand-light text-brand rounded-lg flex items-center justify-center mb-4">
        <Layers size={24} />
      </div>
      <h3 className="text-xl font-bold mb-3 text-slate-800">{name}</h3>
      <p className="text-brand-muted">{description}</p>
    </div>
  );
};

export default DomainCard;
