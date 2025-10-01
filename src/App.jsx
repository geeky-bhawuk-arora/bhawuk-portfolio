// src/App.jsx
import React from 'react';
import { useScrollPosition } from './hooks/useScrollPosition';

// Layout Components
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import BackgroundElements from './components/layout/BackgroundElements';

// Section Components
import HeroSection from './components/sections/HeroSection';
// import StatsSection from './components/sections/StatsSection';
// import AboutSection from './components/sections/AboutSection';
// import SkillsSection from './components/sections/SkillsSection';
// import ExperienceSection from './components/sections/ExperienceSection';
// import ProjectsSection from './components/sections/ProjectsSection';
import ContactSection from './components/sections/ContactSection';

// Styles
import './styles/global.css';

function App() {
  const { scrollY, activeSection } = useScrollPosition();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-x-hidden">
      {/* Background Elements */}
      <BackgroundElements />
      
      {/* Navigation */}
      <Navigation 
        activeSection={activeSection} 
        scrollToSection={scrollToSection}
      />
      
      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection scrollToSection={scrollToSection} />
        {/* <StatsSection /> */}
        {/* <AboutSection /> */}
        {/* <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />  */}
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}

export default App;