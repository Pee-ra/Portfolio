import React from 'react';
import { site } from '../content/site.config';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Aurora background */}
      <div className="aurora-bg"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold text-white glow-text mb-6">
            {site.name}
          </h1>

          <h2 className="text-2xl md:text-3xl text-emerald-200 mb-8">
            {site.title}
          </h2>

          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            {site.bio}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href={site.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              {site.cta.github}
            </a>
            <button onClick={scrollToContact} className="btn-secondary">
              {site.cta.contact}
            </button>
            <a
              href={site.links.cv}
              download="Peerawit-Sutthatharn-CV.pdf" // ✅ ให้ดาวน์โหลดเลย
              className="btn-primary inline-block"
            >CV</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
