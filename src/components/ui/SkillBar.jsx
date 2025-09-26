import React, { useState, useEffect } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const SkillBar = ({ skill, percentage, delay = 0 }) => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.5 });
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (isIntersecting) {
      setTimeout(() => setWidth(percentage), delay);
    }
  }, [isIntersecting, percentage, delay]);

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-gray-300 font-medium">{skill}</span>
        <span className="text-blue-400 font-semibold">{percentage}%</span>
      </div>
      <div className="w-full bg-slate-700/50 rounded-full h-2.5 overflow-hidden">
        <div
          className="h-2.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
};

export default SkillBar;