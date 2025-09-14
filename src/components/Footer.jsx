import React from 'react';
import { site } from '../content/site.config';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="glass-dark py-8 mt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-white/80 mb-4 md:mb-0">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </div>
          
          <nav className="flex space-x-6">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-white/60 hover:text-white transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-white/60 hover:text-white transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-white/60 hover:text-white transition-colors"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="text-white/60 hover:text-white transition-colors"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white/60 hover:text-white transition-colors"
            >
              Contact
            </button>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;