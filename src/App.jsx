import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import SoftSkills from './components/SoftSkills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="theme-aurora min-h-screen">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <SoftSkills />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;