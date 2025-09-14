import React from 'react';
import SectionHeader from './SectionHeader';
import GlassCard from './GlassCard';
import { site } from '../content/site.config';

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <SectionHeader 
          title="Technical Skills" 
          subtitle="Technologies and tools I work with to bring ideas to life"
        />
        
        <GlassCard className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {site.skills.map((skill, index) => (
              <div 
                key={index}
                className="bg-white/10 rounded-lg p-4 text-center hover:bg-white/20 transition-colors backdrop-blur-sm"
              >
                <span className="text-white font-medium">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
};

export default Skills;