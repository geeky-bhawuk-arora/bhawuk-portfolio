// src/components/layout/Footer.jsx
import React from 'react';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import { personalInfo } from '../../data/personalInfo';

const Footer = ({ scrollToSection }) => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      icon: Github, 
      url: personalInfo.github,
      label: 'GitHub',
      gradient: 'from-gray-700 to-gray-800'
    },
    { 
      icon: Linkedin, 
      url: personalInfo.linkedin,
      label: 'LinkedIn',
      gradient: 'from-blue-600 to-blue-700'
    },
    { 
      icon: Mail, 
      url: `mailto:${personalInfo.email}`,
      label: 'Email',
      gradient: 'from-red-500 to-red-600'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900/50 border-t border-slate-700/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid md:grid-cols-3 gap-12 items-center mb-12">
          {/* Left Column - Brand */}
          <div className="text-center md:text-left">
            <div 
              className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent cursor-pointer inline-block hover:scale-105 transition-transform"
              onClick={() => scrollToSection('home')}
            >
              {personalInfo.name}
            </div>
            <p className="text-gray-400 mt-4 text-base leading-relaxed">
              Full Stack Developer passionate about creating amazing digital experiences
            </p>
          </div>

          {/* Center Column - Social Links */}
          <div className="flex justify-center gap-5">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={`p-4 bg-gradient-to-br ${social.gradient} rounded-xl transition-all duration-300 transform hover:scale-110 hover:-rotate-6 border border-slate-700/50 hover:border-slate-600 shadow-lg`}
              >
                <social.icon size={22} className="text-gray-100" />
              </a>
            ))}
          </div>

          {/* Right Column - Back to Top */}
          <div className="text-center md:text-right">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-3 px-6 py-3 bg-slate-800/50 hover:bg-slate-800 rounded-xl text-gray-300 hover:text-blue-400 transition-all duration-300 border border-slate-700/50 hover:border-blue-500/50 group"
            >
              <span className="font-medium">Back to top</span>
              <ArrowUp size={18} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700/50 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2 text-gray-500">
              <span>© {currentYear} {personalInfo.name}. Made with</span>
              <Heart size={18} className="text-red-400 animate-pulse" fill="currentColor" />
              <span>using React & Tailwind CSS</span>
            </div>
            
            <div className="flex items-center gap-8 text-gray-500">
              <button 
                onClick={() => scrollToSection('about')}
                className="hover:text-blue-400 transition-colors font-medium"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="hover:text-blue-400 transition-colors font-medium"
              >
                Work
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="hover:text-blue-400 transition-colors font-medium"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;