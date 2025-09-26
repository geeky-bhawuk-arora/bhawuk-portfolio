// src/components/ui/ProjectCard.jsx
import React from 'react';
import { Github, ExternalLink, Code, Star } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  return (
    <div className={`group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-blue-400/50 transition-all duration-500 transform hover:scale-[1.02] ${
      project.featured ? 'lg:col-span-2' : ''
    }`}>
      {/* Project Header */}
      <div className={`relative h-48 ${project.featured ? 'lg:h-64' : ''} bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
        </div>
        <Code size={project.featured ? 64 : 48} className="text-white z-10 group-hover:scale-110 transition-transform duration-300" />
        
        {/* Status Indicators */}
        <div className="absolute top-4 right-4 flex gap-2">
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        {project.featured && (
          <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-400 p-2 rounded-lg">
            <Star size={20} className="text-white" />
          </div>
        )}
      </div>
      
      <div className={`relative z-20 p-6 ${project.featured ? 'lg:p-8' : ''}`}>
        <div className="flex items-start justify-between mb-4">
          <h3 className={`font-bold text-blue-400 mb-3 group-hover:text-blue-300 transition-colors ${
            project.featured ? 'text-2xl lg:text-3xl' : 'text-xl'
          }`}>
            {project.title}
          </h3>
        </div>
        
        <p className={`text-gray-300 mb-6 leading-relaxed ${project.featured ? 'text-lg' : ''}`}>
          {project.description}
        </p>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <span 
              key={tech} 
              className="bg-slate-700/50 px-3 py-1 rounded-full text-sm text-gray-300 border border-slate-600/50 hover:border-blue-400/50 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Project Stats */}
        {project.stats && (
          <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-slate-700/30 rounded-xl">
            {Object.entries(project.stats).map(([key, value]) => (
              <div key={key} className="text-center">
                <div className="text-lg font-bold text-purple-400">{value}</div>
                <div className="text-sm text-gray-400 capitalize">{key}</div>
              </div>
            ))}
          </div>
        )}
        
        {/* Action Buttons */}
        <div className="flex gap-4">
          <button 
            onClick={() => window.open(project.githubUrl, '_blank')}
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group/btn"
          >
            <Github size={18} className="group-hover/btn:rotate-12 transition-transform" />
            <span>Code</span>
          </button>
          <button 
            onClick={() => window.open(project.liveUrl, '_blank')}
            className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors group/btn"
          >
            <ExternalLink size={18} className="group-hover/btn:scale-110 transition-transform" />
            <span>Live Demo</span>
          </button>
        </div>
      </div>
      
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500 pointer-events-none"></div>
    </div>
  );
};

export default ProjectCard;