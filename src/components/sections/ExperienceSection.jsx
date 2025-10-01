import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import SectionHeader from '../common/SectionHeader';
import { workExperience } from '../../data/experience';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-slate-800/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeader 
            title="Professional Experience" 
            subtitle="My journey through various roles and the impact I've made along the way"
          />
        </AnimatedSection>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 hidden md:block"></div>
          
          <div className="space-y-12">
            {workExperience.map((job, index) => (
              <AnimatedSection key={index} delay={index * 150}>
                <div className="relative flex flex-col md:flex-row items-start gap-8">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full border-4 border-slate-900 z-10 hidden md:block"></div>
                  
                  {/* Content Card */}
                  <div className="flex-1 md:ml-16 bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 group">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Briefcase className="text-blue-400" size={20} />
                          <h3 className="text-2xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors">
                            {job.title}
                          </h3>
                        </div>
                        <p className="text-xl text-gray-300 mb-2">{job.company}</p>
                        <div className="flex items-center gap-2 text-gray-400">
                          <Calendar size={16} />
                          <span>{job.period}</span>
                        </div>
                      </div>
                      
                      {/* Period Badge */}
                      <div className="mt-4 lg:mt-0">
                        <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 border border-purple-400/30">
                          {job.period}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-400 leading-relaxed mb-6 text-lg">
                      {job.description}
                    </p>
                    
                    {/* Highlights */}
                    {job.highlights && (
                      <div>
                        <h4 className="text-lg font-semibold text-gray-300 mb-3">Key Achievements:</h4>
                        <div className="flex flex-wrap gap-3">
                          {job.highlights.map((highlight, i) => (
                            <span 
                              key={i} 
                              className="bg-slate-700/50 px-4 py-2 rounded-full text-sm text-blue-300 border border-blue-400/20 hover:border-blue-400/40 hover:bg-slate-700/70 transition-all duration-200"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <AnimatedSection delay={600}>
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Education & Certifications
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Briefcase className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-blue-400">Bachelor's in Computer Science</h4>
                    <p className="text-gray-400">University Name • 2018-2022</p>
                  </div>
                </div>
                <p className="text-gray-400">
                  Focused on software engineering, data structures, algorithms, and web technologies.
                  Graduated with honors and completed several industry projects.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-purple-400/50 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Briefcase className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-purple-400">AWS Certified</h4>
                    <p className="text-gray-400">Amazon Web Services • 2023</p>
                  </div>
                </div>
                <p className="text-gray-400">
                  AWS Solutions Architect Associate certification demonstrating cloud architecture 
                  and deployment expertise.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ExperienceSection;