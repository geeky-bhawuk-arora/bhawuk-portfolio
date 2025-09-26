import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionCounter';

const AnimatedSection = ({ children, className = "", delay = 0 }) => {
  const [ref, isIntersecting] = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-700 ease-out ${
        isIntersecting 
          ? 'translate-y-0 opacity-100' 
          : 'translate-y-10 opacity-0'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;