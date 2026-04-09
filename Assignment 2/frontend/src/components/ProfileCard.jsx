import React from 'react';
import { Github, Linkedin, Code2, Terminal, Hexagon, Mail, Code, Phone } from 'lucide-react';

const ProfileCard = ({ name, url }) => {
  const getIcon = (name) => {
    switch (name.toLowerCase()) {
      case 'github': return <Github size={24} />;
      case 'linkedin': return <Linkedin size={24} />;
      case 'leetcode': return <Code2 size={24} />;
      case 'codeforces': return <Terminal size={24} />;
      case 'codechef': return <Hexagon size={24} />;
      case 'hackerrank': return <Code size={24} />;
      case 'email': return <Mail size={24} />;
      case 'personal email': return <Mail size={24} />;
      case 'official email': return <Mail size={24} />;
      case 'phone': return <Phone size={24} />;
      default: return <Terminal size={24} />;
    }
  };

  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="glass-card p-6 flex flex-col items-center justify-center gap-4 hover:-translate-y-2 transition-all duration-300 hover:text-brand hover:border-brand-light group"
    >
      <div className="text-slate-600 group-hover:text-brand transition-colors">
        {getIcon(name)}
      </div>
      <span className="font-medium text-slate-800">{name}</span>
    </a>
  );
};

export default ProfileCard;
