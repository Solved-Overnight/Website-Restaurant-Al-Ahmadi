import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const [offset, setOffset] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    setIsVisible(true);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          // Updated to a reliable high-res image of Middle Eastern architecture/desert vibe
          backgroundImage: 'url("https://images.unsplash.com/photo-1519817650390-64a93db51149?q=80&w=2600&auto=format&fit=crop")',
          transform: `translateY(${offset * 0.5}px)`
        }}
      >
        <div className="absolute inset-0 bg-kuwait-dark/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-kuwait-dark via-transparent to-transparent" />
      </div>

      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]" />

      {/* Content */}
      <div className={`relative z-10 text-center px-4 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="mb-4 flex justify-center">
             {/* Decorative element */}
            <div className="w-16 h-16 border-2 border-kuwait-gold rotate-45 flex items-center justify-center mb-6">
                <div className="w-12 h-12 border border-kuwait-gold/50 rotate-90" />
            </div>
        </div>
        
        <h2 className="text-kuwait-gold tracking-[0.2em] uppercase text-sm md:text-base mb-4 font-sans font-medium">
          {t('welcome')}
        </h2>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight">
          {t('restaurantName').split(' ')[0]}
          <span className="block text-3xl md:text-5xl mt-2 text-kuwait-goldLight italic">{t('restaurantName').split(' ').slice(1).join(' ')}</span>
        </h1>
        <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-10">
          {t('tagline')}
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a 
              href="#menu" 
              onClick={(e) => handleNavClick(e, '#menu')}
              className="group relative px-8 py-3 bg-kuwait-gold text-kuwait-dark font-semibold rounded-full overflow-hidden transition-all hover:scale-105"
            >
              <span className="relative z-10">{t('viewMenu')}</span>
              <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
            </a>
            <button 
              onClick={() => document.getElementById('navbar-book-btn')?.click()}
              className="px-8 py-3 border border-white/30 text-white rounded-full hover:bg-white/10 transition-colors"
            >
              {t('bookTable')}
            </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
        <ChevronDown size={32} />
      </div>
    </div>
  );
};

export default Hero;