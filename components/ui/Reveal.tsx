import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export const Reveal: React.FC<RevealProps> = ({ children, className = "", delay = 0, duration = 1000 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect(); // Only animate once
      }
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
        ref={ref} 
        className={`transform transition-all ease-out ${className} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        style={{ 
            transitionDuration: `${duration}ms`,
            transitionDelay: `${delay}ms` 
        }}
    >
      {children}
    </div>
  );
};
