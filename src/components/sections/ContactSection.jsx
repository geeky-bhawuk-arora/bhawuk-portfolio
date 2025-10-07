// src/components/sections/ContactSection.jsx - MODERN VERSION
import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, CheckCircle, MapPin } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import SectionHeader from '../common/SectionHeader';
import { personalInfo } from '../../data/personalInfo';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1000);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      info: personalInfo.email,
      description: 'Drop me a line anytime!',
      gradient: 'from-blue-500 to-cyan-500',
      action: () => window.open(`mailto:${personalInfo.email}`)
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      info: 'linkedin.com/in/bhawuk-arora',
      description: 'Let\'s connect professionally',
      gradient: 'from-purple-500 to-pink-500',
      action: () => window.open(personalInfo.linkedin, '_blank')
    },
    {
      icon: Github,
      title: 'GitHub',
      info: 'github.com/geeky-bhawuk-arora',
      description: 'Check out my code',
      gradient: 'from-pink-500 to-red-500',
      action: () => window.open(personalInfo.github, '_blank')
    }
  ];

  return (
    <section id="contact" className="py-32 bg-slate-900/30 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <AnimatedSection>
          <SectionHeader 
            title="Let's Connect" 
            subtitle="Got a wild idea? A bug that's driving you crazy? Or do you just want to debate whether a hot dog is a sandwich? ;)
Hit me up! Let's create something cool (or at least have a good laugh)."
          />
        </AnimatedSection>
        
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 mt-20">
          {/* Contact Information - 2 columns */}
          <div className="lg:col-span-2">
            <AnimatedSection delay={200}>
              <div className="space-y-10">
                <div>
                  <h3 className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text mb-10">
                    Get In Touch
                  </h3>
                  
                  <div className="space-y-6">
                    {contactMethods.map((contact, index) => (
                      <div 
                        key={index} 
                        className="group relative p-6 bg-gradient-to-br from-slate-800/50 to-slate-800/30 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 cursor-pointer overflow-hidden"
                        onClick={contact.action}
                      >
                        {/* Gradient overlay on hover */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${contact.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                        
                        <div className="relative flex items-start gap-5">
                          <div className={`p-4 bg-gradient-to-br ${contact.gradient} rounded-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0 shadow-lg`}>
                            <contact.icon size={26} className="text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-bold text-lg text-gray-100 mb-2 group-hover:text-blue-400 transition-colors">
                              {contact.title}
                            </h4>
                            <p className="text-blue-400 font-medium mb-2 break-all text-sm">{contact.info}</p>
                            <p className="text-gray-400 text-sm">{contact.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Location & Availability */}
                <div className="p-8 bg-gradient-to-br from-slate-800/50 to-slate-800/30 rounded-2xl border border-slate-700/50">
                  <h4 className="text-xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-6 flex items-center gap-3">
                    <MapPin size={24} className="text-purple-400" />
                    Location & Availability
                  </h4>
                  <div className="space-y-5">
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                      <span className="text-gray-200 text-base">Available for freelance projects</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <MapPin size={18} className="text-blue-400 flex-shrink-0" />
                      <span className="text-gray-200 text-base">{personalInfo.location}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50"></div>
                      <span className="text-gray-200 text-base">Open to remote opportunities</span>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h4 className="text-lg font-bold text-gray-200 mb-6">Follow Me</h4>
                  <div className="flex gap-4">
                    {[
                      { icon: Github, gradient: "from-gray-700 to-gray-800", url: personalInfo.github },
                      { icon: Linkedin, gradient: "from-blue-600 to-blue-700", url: personalInfo.linkedin },
                      { icon: Mail, gradient: "from-red-500 to-red-600", url: `mailto:${personalInfo.email}` },
                    ].map((social, index) => (
                      <button
                        key={index}
                        onClick={() => window.open(social.url, '_blank')}
                        className={`p-4 bg-gradient-to-br ${social.gradient} rounded-xl transition-all duration-300 transform hover:scale-110 hover:-rotate-6 border border-slate-700/50 hover:border-slate-600 shadow-lg`}
                      >
                        <social.icon size={22} className="text-gray-100" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
          
          {/* Contact Form - 3 columns */}
          <div className="lg:col-span-3">
            <AnimatedSection delay={400}>
              <div className="p-10 bg-gradient-to-br from-slate-800/50 to-slate-800/30 rounded-3xl border border-slate-700/50 shadow-2xl">
                <h3 className="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-10 flex items-center gap-4">
                  <Send size={32} className="text-purple-400" />
                  Send a Message
                </h3>
                
                {isSubmitted ? (
                  <div className="text-center py-20">
                    <CheckCircle size={80} className="text-green-400 mx-auto mb-6" />
                    <h4 className="text-2xl font-bold text-green-400 mb-3">Message Sent!</h4>
                    <p className="text-gray-300 text-lg">Thanks for reaching out. I'll get back to you soon!</p>
                  </div>
                ) : (
                  <div className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <label className="block text-base font-semibold text-gray-200 mb-3">
                          Name <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your Name"
                          required
                          className="w-full bg-slate-900/60 border-2 border-slate-700 rounded-xl px-5 py-4 text-gray-100 text-base placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 hover:border-slate-600"
                        />
                      </div>
                      <div>
                        <label className="block text-base font-semibold text-gray-200 mb-3">
                          Email <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your@email.com"
                          required
                          className="w-full bg-slate-900/60 border-2 border-slate-700 rounded-xl px-5 py-4 text-gray-100 text-base placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 hover:border-slate-600"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-base font-semibold text-gray-200 mb-3">
                        Subject <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Project Discussion / Collaboration / General Inquiry"
                        required
                        className="w-full bg-slate-900/60 border-2 border-slate-700 rounded-xl px-5 py-4 text-gray-100 text-base placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 hover:border-slate-600"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-base font-semibold text-gray-200 mb-3">
                        Message <span className="text-red-400">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={7}
                        placeholder="Tell me about your project ideas, timeline, budget, or any questions you have..."
                        required
                        className="w-full bg-slate-900/60 border-2 border-slate-700 rounded-xl px-5 py-4 text-gray-100 text-base placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 resize-none hover:border-slate-600"
                      />
                    </div>
                    
                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="group w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 py-5 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-[1.02] relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed shadow-xl hover:shadow-2xl"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-3 text-white">
                        {isSubmitting ? (
                          <>
                            <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send size={22} className="group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  </div>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;