import React from 'react';
import SectionHeader from './SectionHeader';
import GlassCard from './GlassCard';
import { site } from '../content/site.config';

const SoftSkills = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <SectionHeader 
          title="Soft Skills" 
          subtitle="Personal qualities that enhance my ability to work effectively in teams and deliver results"
        />
        
        <GlassCard className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {site.softSkills.map((skill, index) => (
              <span 
                key={index}
                className="px-6 py-3 bg-forest-500/30 text-white rounded-full backdrop-blur-sm border border-white/20 hover:bg-forest-400/40 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
};

export default SoftSkills;