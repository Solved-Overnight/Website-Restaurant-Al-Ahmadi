import React, { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  bg?: 'white' | 'cream' | 'dark' | 'green';
}

const Section: React.FC<SectionProps> = ({ children, className = '', id, bg = 'white' }) => {
  const bgClasses = {
    white: 'bg-white',
    cream: 'bg-kuwait-cream',
    dark: 'bg-kuwait-dark text-kuwait-cream',
    green: 'bg-kuwait-green text-white',
  };

  return (
    <section id={id} className={`py-16 md:py-24 px-4 md:px-8 relative overflow-hidden ${bgClasses[bg]} ${className}`}>
      <div className="max-w-7xl mx-auto relative z-10">
        {children}
      </div>
    </section>
  );
};

export default Section;