import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Reveal } from './ui/Reveal';
import { Facebook, Instagram, Twitter, MapPin, Phone, Clock, ArrowRight, ChevronRight } from 'lucide-react';

const Footer: React.FC = () => {
  const { t, language } = useLanguage();

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
    <footer className="bg-kuwait-dark text-kuwait-cream relative pt-20 pb-10 border-t-4 border-kuwait-gold overflow-hidden font-sans">
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
            {/* 1. Brand Section */}
            <Reveal>
              <div className="space-y-6">
                  <h3 className="font-serif text-3xl text-kuwait-gold">{t('restaurantName')}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                      {t('aboutText').split('.')[0] + '.'} {t('aboutText').split('.')[1] + '.'}
                  </p>
                  <div className="w-12 h-1 bg-kuwait-gold/30 rounded-full" />
              </div>
            </Reveal>
            
            {/* 2. Quick Links */}
            <Reveal delay={100}>
              <div className="flex flex-col">
                  <h4 className="text-white font-serif text-lg mb-6 flex items-center gap-2">
                    {t('quickLinks')}
                  </h4>
                  <ul className="space-y-3 text-sm text-gray-400">
                      {[
                        { label: t('home'), href: '#home' },
                        { label: t('menu'), href: '#menu' },
                        { label: t('reviews'), href: '#reviews' },
                        { label: t('contact'), href: '#contact' }
                      ].map((link) => (
                        <li key={link.href}>
                          <a 
                            href={link.href} 
                            onClick={(e) => handleNavClick(e, link.href)} 
                            className="group flex items-center gap-2 hover:text-kuwait-gold transition-colors duration-300"
                          >
                            <span className="w-1.5 h-1.5 bg-kuwait-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                            <span className="transform group-hover:translate-x-1 transition-transform">{link.label}</span>
                          </a>
                        </li>
                      ))}
                  </ul>
              </div>
            </Reveal>

            {/* 3. Contact Info (New) */}
            <Reveal delay={200}>
              <div>
                   <h4 className="text-white font-serif text-lg mb-6">{t('contactInfo')}</h4>
                   <ul className="space-y-4 text-sm text-gray-400">
                       <li className="flex items-start gap-3">
                           <MapPin className="w-5 h-5 text-kuwait-gold shrink-0" />
                           <span>Habeeb Munawer St, Al Farwaniyah, Kuwait</span>
                       </li>
                       <li className="flex items-center gap-3">
                           <Phone className="w-5 h-5 text-kuwait-gold shrink-0" />
                           <span dir="ltr">+965 9696 1300</span>
                       </li>
                       <li className="flex items-start gap-3">
                           <Clock className="w-5 h-5 text-kuwait-gold shrink-0" />
                           <span>Open Daily: 8:00 AM - 11:00 PM</span>
                       </li>
                   </ul>
              </div>
            </Reveal>

            {/* 4. Social & Newsletter */}
            <Reveal delay={300}>
              <div>
                   <h4 className="text-white font-serif text-lg mb-6">{t('followUs')}</h4>
                   <p className="text-gray-400 text-sm mb-6">Stay updated with our latest offers and seasonal dishes.</p>
                   
                   <div className="flex gap-4 mb-8">
                       {[
                         { icon: <Instagram size={18} />, href: "#" },
                         { icon: <Facebook size={18} />, href: "#" },
                         { icon: <Twitter size={18} />, href: "#" }
                       ].map((social, idx) => (
                           <a 
                            key={idx} 
                            href={social.href} 
                            className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:bg-kuwait-gold hover:border-kuwait-gold hover:text-kuwait-dark transition-all duration-300 transform hover:-translate-y-1"
                           >
                               {social.icon}
                           </a>
                       ))}
                   </div>
              </div>
            </Reveal>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
            <p>&copy; {new Date().getFullYear()} {t('restaurantName')}. {t('rightsReserved')}</p>
            <div className="flex items-center gap-2">
              <span>{t('designedWith')}</span>
              <span className="text-red-500">❤</span>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;