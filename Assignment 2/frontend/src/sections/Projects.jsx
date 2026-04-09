import React from 'react';
import { projects } from '../data/portfolio';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  // Group projects by category
  const categories = [...new Set(projects.map(p => p.category))];

  return (
    <section id="projects" className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
          <div className="w-16 h-1 bg-brand mx-auto mb-6 rounded-full"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">A selection of recent work spanning AI, systems, and full-stack development.</p>
        </div>

        <div className="space-y-16">
          {categories.map((category, idx) => (
            <div key={idx}>
              <h3 className="text-2xl font-semibold border-b border-slate-200 pb-2 mb-6 text-slate-800">{category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects
                  .filter(p => p.category === category)
                  .map((project, index) => (
                    <ProjectCard 
                      key={index}
                      title={project.title}
                      description={project.description}
                      stack={project.stack}
                    />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
