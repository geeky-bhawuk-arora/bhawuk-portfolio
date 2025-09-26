// src/components/sections/ContactSection.jsx
import React, { useState } from 'react';
import { Mail, Linkedin, Github, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import SectionHeader from '../common/SectionHeader';
import Button from '../ui/Button';
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
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 3 seconds
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
      color: 'from-blue-500 to-blue-600',
      action: () => window.open(`mailto:${personalInfo.email}`)
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      info: 'linkedin.com/in/bhawuk-arora',
      description: 'Let\'s connect professionally',
      color: 'from-purple-500 to-purple-600',
      action: () => window.open(personalInfo.linkedin, '_blank')
    },
    {
      icon: Github,
      title: 'GitHub',
      info: 'github.com/bhawuk-arora',
      description: 'Check out my code',
      color: 'from-pink-500 to-pink-600',
      action: () => window.open(personalInfo.github, '_blank')
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-800/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeader 
            title="Let's Connect" 
            subtitle="Ready to bring your ideas to life? Let's discuss your next project and create something amazing together."
          />
        </AnimatedSection>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <AnimatedSection delay={200}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-blue-400 mb-8 flex items-center gap-3">
                  <Mail size={28} />
                  Get In Touch
                </h3>
                
                <div className="space-y-6">
                  {contactMethods.map((contact, index) => (
                    <div 
                      key={index} 
                      className="group flex items-start gap-6 p-6 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 cursor-pointer"
                      onClick={contact.action}
                    >
                      <div className={`p-4 bg-gradient-to-r ${contact.color} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                        <contact.icon size={28} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-xl text-gray-200 mb-1 group-hover:text-blue-400 transition-colors">
                          {contact.title}
                        </h4>
                        <p className="text-blue-400 font-medium mb-2">{contact.info}</p>
                        <p className="text-gray-400 text-sm">{contact.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Location & Availability */}
              <div className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-xl border border-slate-700/50">
                <h4 className="text-xl font-semibold text-purple-400 mb-6 flex items-center gap-3">
                  <MapPin size={24} />
                  Location & Availability
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-gray-300">Available for freelance projects</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin size={16} className="text-blue-400" />
                    <span className="text-gray-300">{personalInfo.location}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300">Open to remote opportunities</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-8">
                <h4 className="text-lg font-semibold text-gray-300 mb-6">Follow Me</h4>
                <div className="flex gap-4">
                  {[
                    { icon: Github, color: "hover:bg-gray-700", url: personalInfo.github },
                    { icon: Linkedin, color: "hover:bg-blue-600", url: personalInfo.linkedin },
                    { icon: Mail, color: "hover:bg-red-600", url: `mailto:${personalInfo.email}` },
                  ].map((social, index) => (
                    <button
                      key={index}
                      onClick={() => window.open(social.url, '_blank')}
                      className={`p-3 bg-slate-700/50 rounded-xl ${social.color} transition-all duration-300 transform hover:scale-110 hover:-rotate-6`}
                    >
                      <social.icon size={24} className="text-gray-300" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          {/* Contact Form */}
          <AnimatedSection delay={400}>
            <div className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50">
              <h3 className="text-2xl font-bold text-purple-400 mb-8 flex items-center gap-3">
                <Send size={28} />
                Send a Message
              </h3>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle size={64} className="text-green-400 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-green-400 mb-2">Message Sent!</h4>
                  <p className="text-gray-300">Thanks for reaching out. I'll get back to you soon!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your Name"
                        required
                        className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 text-gray-200 placeholder-gray-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        required
                        className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 text-gray-200 placeholder-gray-400"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Project Discussion / Collaboration / General Inquiry"
                      required
                      className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 text-gray-200 placeholder-gray-400"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      placeholder="Tell me about your project ideas, timeline, budget, or any questions you have..."
                      required
                      className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 resize-none text-gray-200 placeholder-gray-400"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full relative overflow-hidden"
                    size="lg"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send size={20} />
                        </>
                      )}
                    </span>
                  </Button>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;