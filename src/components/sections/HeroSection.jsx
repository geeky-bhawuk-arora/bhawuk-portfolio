// src/components/sections/HeroSection.jsx
import React from 'react';
import { User, Download, ChevronDown } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import Button from '../ui/Button';
import { personalInfo } from '../../data/personalInfo';

const HeroSection = ({ scrollToSection }) => {
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
          <div className="mb-8">
            {/* Profile Avatar */}
            <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center group hover:scale-105 transition-transform duration-300">
              <User size={64} className="text-white" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-20 animate-pulse"></div>
            </div>
            
            {/* Name with Gradient */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </h1>
            
            {/* Title */}
            <div className="text-xl md:text-2xl text-gray-300 mb-4">
              {personalInfo.title}
            </div>
            
            {/* Bio */}
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
              {personalInfo.bio}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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