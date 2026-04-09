import React from 'react';
import { researchPapers } from '../data/portfolio';
import { BookOpen } from 'lucide-react';

const Research = () => {
  return (
    <section id="research" className="py-24 bg-amber-100/40">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Research & Publications</h2>
          <div className="w-16 h-1 bg-brand mx-auto mb-6 rounded-full"></div>
        </div>

        <div className="space-y-6">
          {researchPapers.map((paper, index) => (
            <div key={index} className="glass-card p-6 flex items-start gap-4">
              <div className="text-brand shrink-0 mt-1">
                <BookOpen size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{paper.title}</h3>
                <p className="text-slate-600 mb-3">{paper.description}</p>
                <div className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-sm font-medium rounded-full">
                  {paper.conference}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
