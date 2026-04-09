import React from 'react';

const StackCard = ({ category, technologies }) => {
  const formatCategory = (cat) => {
    return cat.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  return (
    <div className="glass-card p-6">
      <h3 className="text-lg font-semibold mb-4 text-brand-dark">{formatCategory(category)}</h3>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span 
            key={index}
            className="px-3 py-1.5 border border-slate-200 text-slate-600 text-sm font-medium rounded-md hover:bg-slate-50 transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default StackCard;
