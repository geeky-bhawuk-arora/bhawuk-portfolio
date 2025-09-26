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
      color: 'hover:text-gray-300'
    },
    { 
      icon: Linkedin, 
      url: personalInfo.linkedin,
      label: 'LinkedIn',
      color: 'hover:text-blue-400'
    },
    { 
      icon: Mail, 
      url: `mailto:${personalInfo.email}`,
      label: 'Email',
      color: 'hover:text-red-400'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-t border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left Column - Brand */}
          <div className="text-center md:text-left">
            <div 
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent cursor-pointer inline-block"
              onClick={() => scrollToSection('home')}
            >
              {personalInfo.name}
            </div>
            <p className="text-gray-400 mt-2">
              Full Stack Developer passionate about creating amazing digital experiences
            </p>
          </div>

          {/* Center Column - Social Links */}
          <div className="flex justify-center gap-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={`p-3 bg-slate-800/50 hover:bg-slate-700 rounded-lg transition-all duration-300 transform hover:scale-110 hover:rotate-12 ${social.color}`}
              >
                <social.icon size={20} className="text-gray-400" />
              </a>
            ))}
          </div>

          {/* Right Column - Back to Top */}
          <div className="text-center md:text-right">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors group"
            >
              <span>Back to top</span>
              <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700/50 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <span>© {currentYear} {personalInfo.name}. Made with</span>
              <Heart size={16} className="text-red-400 animate-pulse" />
              <span>by Bhawuk</span>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <button 
                onClick={() => scrollToSection('about')}
                className="hover:text-blue-400 transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="hover:text-blue-400 transition-colors"
              >
                Work
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="hover:text-blue-400 transition-colors"
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