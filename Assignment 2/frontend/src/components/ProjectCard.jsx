import React from 'react';

const ProjectCard = ({ title, description, stack }) => {
  return (
    <div className="glass-card p-6 flex flex-col h-full group">
      <h3 className="text-xl font-semibold mb-2 text-brand-dark group-hover:text-brand transition-colors">{title}</h3>
      <p className="text-brand-muted mb-6 flex-grow">{description}</p>
      
      <div className="flex flex-wrap gap-2 mt-auto">
        {stack.map((tech, index) => (
          <span 
            key={index}
            className="px-3 py-1 bg-brand-light text-brand text-xs font-medium rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
