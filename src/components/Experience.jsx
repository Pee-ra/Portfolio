import React from 'react';
import SectionHeader from './SectionHeader';
import GlassCard from './GlassCard';
import { site } from '../content/site.config';

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <SectionHeader 
          title="Experience & Education" 
          subtitle="My journey into web development and key milestones along the way"
        />
        
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-white/30"></div>
            
            {site.experience.map((item, index) => (
              <div key={index} className="relative mb-12 last:mb-0">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-forest-400 rounded-full border-4 border-white/50"></div>
                
                <div className="ml-20">
                  <GlassCard hover={true}>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h3 className="text-xl font-semibold text-white">
                        {item.title}
                      </h3>
                      <span className="text-forest-200 font-medium">
                        {item.date}
                      </span>
                    </div>
                    <p className="text-white/80">
                      {item.detail}
                    </p>
                  </GlassCard>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;