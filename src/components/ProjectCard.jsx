import React from 'react';
import GlassCard from './GlassCard';

const ProjectCard = ({ title, description, tech, live, github, cover }) => {
  return (
    <GlassCard hover={true} className="h-full">
      {/* Aurora Glass Cover */}
      <div className="aspect-video aurora-glass rounded-lg mb-6 flex items-center justify-center overflow-hidden">
        {cover ? (
          <img 
            src={cover} 
            alt={title}
            className="w-full h-full object-cover rounded-lg"
            
          />
        ) : null}

        {/* fallback ถ้าไม่มีภาพ */}
        <div className="hidden w-full h-full items-center justify-center text-white text-2xl font-semibold">
          {title}
        </div>
      </div>
      
      {/* Title */}
      <h3 className="text-xl font-semibold text-white mb-3">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-white/80 mb-4 line-clamp-3">
        {description}
      </p>
      
      {/* Tech Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tech.map((technology, index) => (
          <span 
            key={index}
            className="px-3 py-1 text-sm bg-white/20 text-white rounded-full backdrop-blur-sm"
          >
            {technology}
          </span>
        ))}
      </div>
      
      {/* Action Buttons */}
      <div className="flex gap-4 mt-auto">
        <a 
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center py-2 px-4 aurora-glass text-white rounded-lg transition-colors hover:opacity-90"
        >
          Live Demo
        </a>
        <a 
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center py-2 px-4 aurora-glass text-white rounded-lg transition-colors hover:opacity-90"
        >
          GitHub
        </a>
      </div>
    </GlassCard>
  );
};

export default ProjectCard;
