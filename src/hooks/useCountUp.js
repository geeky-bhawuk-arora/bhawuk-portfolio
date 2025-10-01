import { useState, useEffect } from 'react';

export const useCountUp = (end, duration = 2000, start = 0) => {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isVisible) return;
    
    const startTime = Date.now();
    const timer = setInterval(() => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      
      setCount(Math.floor(progress * (end - start) + start));
      
      if (progress === 1) {
        clearInterval(timer);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, end, duration, start]);

  return [count, setIsVisible];
};