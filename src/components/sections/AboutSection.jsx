import React from 'react';
import { Code, Database, Globe, MapPin } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import SectionHeader from '../common/SectionHeader';
import { personalInfo } from '../../data/personalInfo';

const AboutSection = () => {
  const coreSkills = [
    'Python', 'Java', 'React', 'PySpark', 'FastApi', 
    'Springboot', 'PyTorch', 'Azure'
  ];

  const services = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Modern UI/UX with React, Vue, and Angular. Focus on performance and user experience.',
      color: 'text-blue-400'
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Scalable APIs and server-side applications with Node.js, Python, and cloud technologies.',
      color: 'text-purple-400'
    },
    {
      icon: Globe,
      title: 'Full Stack Solutions',
      description: 'End-to-end application development from concept to deployment and maintenance.',
      color: 'text-pink-400'
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-800/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeader 
            title="About Me" 
            subtitle="Learn more about my background, skills, and what drives my passion for development"
          />
        </AnimatedSection>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Bio */}
          <AnimatedSection delay={200}>
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-gray-400 mb-4">
                <MapPin size={16} />
                <span>{personalInfo.location}</span>
              </div>
              
              <div className="text-gray-300 text-lg leading-relaxed space-y-4">
                <p>🚀 <strong>What I Actually Do:</strong></p>
                
                <ul className="list-disc list-inside space-y-2">
                  <li>🧠 I teach computers to think — mostly so they can do my homework. So far, they just keep asking for more RAM.</li>
                  
                  <li>☕ Fueled by caffeine and Stack Overflow, my code is 90% logic, 10% magic, and 100% held together by hope.</li>
                  
                  <li>☁️ I put things in the cloud — basically a professional way of saying I upload projects and forget they exist.</li>
                  
                  <li>💥 My main hobby is "rapid, unscheduled disassembly." I build things that fly, and they kindly remind me how gravity works.</li>
                </ul>
              </div>


              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                <h3 className="text-xl font-semibold text-blue-400 mb-4">Core Technologies</h3>
                <div className="flex flex-wrap gap-3">
                  {coreSkills.map((skill) => (
                    <span 
                      key={skill} 
                      className="bg-slate-700/50 px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-600/50 transition-colors cursor-default border border-slate-600/30 hover:border-blue-400/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          {/* Right Column - Services */}
          <AnimatedSection delay={400}>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-purple-400 mb-8">What I Do</h3>
              
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-blue-400/30 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 bg-gradient-to-r from-slate-700 to-slate-600 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className={service.color} size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-xl text-gray-200 mb-2 group-hover:text-blue-400 transition-colors">
                        {service.title}
                      </h4>
                      <p className="text-gray-400 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-slate-800/30 rounded-xl">
                  <div className="text-2xl font-bold text-blue-400 mb-1">3+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-xl">
                  <div className="text-2xl font-bold text-purple-400 mb-1">50+</div>
                  <div className="text-sm text-gray-400">Projects Done</div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;