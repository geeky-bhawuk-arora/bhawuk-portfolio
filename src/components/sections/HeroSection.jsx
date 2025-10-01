// src/components/sections/HeroSection.jsx
import React from 'react';
import { User, Download, ChevronDown } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import Button from '../ui/Button';
import { personalInfo } from '../../data/personalInfo';

const HeroSection = ({ scrollToSection }) => {
  // ... (omitted handleResumeDownload)
  const handleResumeDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = personalInfo.resumeUrl;
    link.download = `${personalInfo.name.replace(' ', '_')}_Resume.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <AnimatedSection>
          {/* MODIFIED: Replaced mb-8 on this div with flex-col and gap-6 to manage children spacing */}
          <div className="flex flex-col gap-6 items-center">
            {/* Profile Avatar */}
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center group hover:scale-105 transition-transform duration-300">
              <User size={64} className="text-white" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-20 animate-pulse"></div>
            </div>
            
            {/* Name with Gradient (REMOVED mb-6) */}
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </h1>
            
            {/* Title (REMOVED mb-4) */}
            <div className="text-xl md:text-2xl text-gray-300">
              {personalInfo.title}
            </div>
            
            {/* Bio (REMOVED mb-12, ADDED mt-4 for slightly more separation from title) */}
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed mt-4">
              {personalInfo.bio}
            </p>
            
            {/* CTA Buttons (ADDED mt-4 to position relative to parent gap, but manual control is often better here) */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-4">
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="primary"
                size="lg"
              >
                Get In Touch
              </Button>
              
              <Button 
                onClick={handleResumeDownload}
                variant="secondary"
                size="lg"
                className="flex items-center gap-2"
              >
                <Download size={18} />
                Download Resume
              </Button>
            </div>
          </div>
        </AnimatedSection>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown 
            size={24} 
            className="text-gray-400 cursor-pointer hover:text-blue-400 transition-colors" 
            onClick={() => scrollToSection('about')}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;