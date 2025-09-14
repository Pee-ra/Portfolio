import React from 'react';
import SectionHeader from './SectionHeader';
import ContactForm from './ContactForm';
import GlassCard from './GlassCard';
import { site } from '../content/site.config';

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <SectionHeader 
          title="Get In Touch" 
          subtitle="Let's connect and discuss opportunities or just say hello!"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <GlassCard>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="aurora-accent mr-4 mt-1" />
                  <div>
                    <p className="text-white/60 text-sm">Email</p>
                    <a 
                      href={`mailto:${site.links.email}`}
                      className="text-white"
                      aria-label="Send email"
                    >
                      {site.links.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="aurora-accent mr-4 mt-1" />
                  <div>
                    <p className="text-white/60 text-sm">Phone</p>
                    <a 
                      href={`tel:${site.links.phone}`}
                      className=" text-white"
                      aria-label="Call phone"
                    >
                      {site.links.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="aurora-accent mr-4 mt-1" />
                  <div>
                    <p className="text-white/60 text-sm">Location</p>
                    <p className="text-white">{site.links.address}</p>
                  </div>
                </div>
              </div>
            </GlassCard>
            
            <GlassCard>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Follow Me
              </h3>
              
              <div className="flex gap-4 flex-wrap">
                <a 
                  href={site.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 aurora-glass text-white rounded-lg transition-all hover:opacity-90"
                  aria-label="Open GitHub"
                >
                  GitHub
                </a>
                <a 
                  href={site.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 aurora-glass text-white rounded-lg transition-all hover:opacity-90"
                  aria-label="Open LinkedIn"
                >
                  LinkedIn
                </a>
              </div>
            </GlassCard>
          </div>
          
          {/* Contact Form */}
          {/* <div>
            <ContactForm />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
