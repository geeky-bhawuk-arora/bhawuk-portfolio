// src/components/sections/StatsSection.jsx
import React, { useRef, useEffect } from 'react';
import { useCountUp } from '../../hooks/useCountUp';
import AnimatedSection from '../ui/AnimatedSection';

const StatsSection = () => {
  const [projectCount, setProjectCountVisible] = useCountUp(50, 2000);
  const [experienceCount, setExperienceCountVisible] = useCountUp(3, 2000);
  const [clientCount, setClientCountVisible] = useCountUp(25, 2000);
  
  const statsRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setProjectCountVisible(true);
          setExperienceCountVisible(true);
          setClientCountVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [setProjectCountVisible, setExperienceCountVisible, setClientCountVisible]);

  const stats = [
    {
      count: projectCount,
      label: 'Projects Completed',
      color: 'text-blue-400',
      borderColor: 'hover:border-blue-400/50'
    },
    {
      count: experienceCount,
      label: 'Years Experience',
      color: 'text-purple-400',
      borderColor: 'hover:border-purple-400/50'
    },
    {
      count: clientCount,
      label: 'Happy Clients',
      color: 'text-pink-400',
      borderColor: 'hover:border-pink-400/50'
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div ref={statsRef} className="grid md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`bg-slate-800/30 backdrop-blur-sm p-8 rounded-xl border border-slate-700/50 ${stat.borderColor} transition-all duration-300 transform hover:scale-105 group`}
              >
                <div className={`text-4xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.count}+
                </div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default StatsSection;