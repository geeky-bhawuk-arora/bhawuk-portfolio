// src/components/sections/SkillsSection.jsx
import React from 'react';
import { Code, Database, Zap, Globe, Palette, Smartphone } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import SkillBar from '../ui/SkillBar';
import SectionHeader from '../common/SectionHeader';
import { technicalSkills, technologies } from '../../data/skills';

const SkillsSection = () => {
  const techIcons = {
    'React': Code,
    'Node.js': Database,
    'Python': Zap,
    'MongoDB': Database,
    'AWS': Globe,
    'Design': Palette
  };

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeader 
            title="Skills & Technologies" 
            subtitle="A comprehensive overview of my technical expertise and proficiency levels"
          />
        </AnimatedSection>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills with Progress Bars */}
          <AnimatedSection delay={200}>
            <div className="space-y-6">
              <div className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-xl border border-slate-700/50">
                <h3 className="text-2xl font-bold text-blue-400 mb-8 flex items-center gap-3">
                  <Code size={28} />
                  Technical Proficiency
                </h3>
                <div className="space-y-6">
                  {technicalSkills.map((skill, index) => (
                    <SkillBar 
                      key={skill.name}
                      skill={skill.name} 
                      percentage={skill.percentage} 
                      delay={index * 100} 
                    />
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          {/* Technology Stack */}
          <AnimatedSection delay={400}>
            <div className="space-y-6">
              <div className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-xl border border-slate-700/50">
                <h3 className="text-2xl font-bold text-purple-400 mb-8 flex items-center gap-3">
                  <Palette size={28} />
                  Technology Stack
                </h3>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                  {technologies.map((tech, index) => {
                    const IconComponent = techIcons[tech.name] || Code;
                    return (
                      <div
                        key={tech.name}
                        className="group bg-slate-700/30 hover:bg-slate-700/50 p-6 rounded-xl border border-slate-600/30 hover:border-blue-400/50 transition-all duration-300 text-center transform hover:scale-105"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className={`w-12 h-12 mx-auto mb-4 bg-gradient-to-r ${tech.color} rounded-lg flex items-center justify-center group-hover:animate-pulse`}>
                          <IconComponent className="text-white" size={24} />
                        </div>
                        <div className="text-gray-300 font-medium group-hover:text-blue-400 transition-colors">
                          {tech.name}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Additional Skills */}
              <div className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-xl border border-slate-700/50">
                <h4 className="text-xl font-semibold text-pink-400 mb-6 flex items-center gap-3">
                  <Smartphone size={24} />
                  Additional Skills
                </h4>
                
                <div className="space-y-4">
                  {[
                    { category: 'Mobile Development', skills: ['React Native', 'Flutter', 'Ionic'] },
                    { category: 'DevOps & Tools', skills: ['Docker', 'Git', 'CI/CD', 'Linux'] },
                    { category: 'Design & UX', skills: ['Figma', 'Adobe XD', 'Responsive Design'] }
                  ].map((category, index) => (
                    <div key={category.category} className="border-b border-slate-700/50 pb-4 last:border-b-0">
                      <div className="font-medium text-gray-300 mb-2">{category.category}</div>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
                          <span 
                            key={skill}
                            className="bg-slate-600/30 px-3 py-1 rounded-full text-sm text-gray-400 hover:text-blue-400 hover:bg-slate-600/50 transition-colors cursor-default"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;