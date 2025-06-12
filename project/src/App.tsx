import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Languages from './components/Languages';
import Extracurricular from './components/Extracurricular';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Languages />
        <Extracurricular />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;