import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Globe, UtensilsCrossed } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useCart } from '../contexts/CartContext';

interface NavbarProps {
  onOpenReservation: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenReservation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t, dir } = useLanguage();
  const { cart, setIsOpen: setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  const navLinks = [
    { name: t('home'), href: '#home' },
    { name: t('menu'), href: '#menu' },
    { name: t('reviews'), href: '#reviews' },
    { name: t('contact'), href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 100; // Height of navbar + extra padding
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-kuwait-dark/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, '#home')}
          className={`font-serif text-2xl font-bold flex items-center gap-3 ${isScrolled ? 'text-kuwait-gold' : 'text-white'}`}
        >
          <div className={`p-1.5 rounded-full border-2 ${isScrolled ? 'border-kuwait-gold' : 'border-white'}`}>
             <UtensilsCrossed size={20} strokeWidth={2} />
          </div>
          {t('restaurantName')}
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-sm font-medium uppercase tracking-wider hover:text-kuwait-gold transition-colors ${
                    isScrolled ? 'text-gray-200' : 'text-white'
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="w-px h-6 bg-white/20"></div>

          <div className="flex items-center gap-4">
            <button 
              onClick={toggleLanguage}
              className={`flex items-center gap-2 text-sm font-medium hover:text-kuwait-gold transition-colors ${
                isScrolled ? 'text-gray-200' : 'text-white'
              }`}
            >
              <Globe size={18} />
              <span>{language === 'en' ? 'العربية' : 'English'}</span>
            </button>

            <button 
              onClick={() => setIsCartOpen(true)}
              className={`relative p-2 hover:text-kuwait-gold transition-colors ${
                isScrolled ? 'text-gray-200' : 'text-white'
              }`}
            >
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-kuwait-gold text-kuwait-dark text-xs font-bold rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            <button 
              onClick={onOpenReservation}
              className="px-5 py-2 bg-kuwait-gold text-kuwait-dark font-semibold rounded-full text-sm hover:bg-white transition-colors"
            >
              {t('bookTable')}
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-kuwait-dark border-t border-white/10 p-6 flex flex-col gap-6 shadow-xl h-screen">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="block text-white text-lg font-serif"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="border-t border-white/10 pt-6 flex flex-col gap-4">
            <button 
              onClick={() => { toggleLanguage(); setIsMobileMenuOpen(false); }}
              className="flex items-center gap-2 text-white"
            >
              <Globe size={18} />
              <span>{language === 'en' ? 'العربية' : 'English'}</span>
            </button>
            <button 
              onClick={() => { onOpenReservation(); setIsMobileMenuOpen(false); }}
              className="w-full py-3 bg-kuwait-gold text-kuwait-dark font-bold rounded-lg"
            >
              {t('bookTable')}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;