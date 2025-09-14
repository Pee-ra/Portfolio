import React from 'react';
import SectionHeader from './SectionHeader';
import ProjectCard from './ProjectCard';
import { site } from '../content/site.config';

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <SectionHeader 
          title="Featured Projects" 
          subtitle="A collection of my recent work showcasing various technologies and problem-solving approaches"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {site.projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              tech={project.tech}
              live={project.live}
              github={project.github}
              cover={project.cover}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;