import React, { useState } from 'react';
import Section from './ui/Section';
import { useLanguage } from '../contexts/LanguageContext';
import { useCart } from '../contexts/CartContext';
import { menuItems } from '../data/content';
import { Plus } from 'lucide-react';
import { Reveal } from './ui/Reveal';

const Menu: React.FC = () => {
  const { t, language } = useLanguage();
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState<'appetizers' | 'main' | 'desserts' | 'beverages'>('appetizers');

  const categories = [
    { id: 'appetizers', label: t('appetizers') },
    { id: 'main', label: t('mainCourses') },
    { id: 'desserts', label: t('desserts') },
    { id: 'beverages', label: t('beverages') },
  ];

  const currentItems = menuItems[language].filter(item => item.category === activeCategory);

  return (
    <Section id="menu" bg="white">
      <Reveal>
        <div className="text-center mb-12">
          <h3 className="text-kuwait-gold uppercase tracking-widest font-semibold text-sm mb-3">{t('authenticFlavors')}</h3>
          <h2 className="text-4xl md:text-5xl font-serif text-kuwait-dark mb-4">{t('ourMenu')}</h2>
          <div className="w-24 h-1 bg-kuwait-gold mx-auto rounded-full" />
        </div>
      </Reveal>

      {/* Categories */}
      <Reveal delay={200}>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 border ${
                activeCategory === cat.id 
                  ? 'bg-kuwait-dark text-kuwait-gold border-kuwait-dark' 
                  : 'text-gray-500 border-gray-200 hover:border-kuwait-gold hover:text-kuwait-dark'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </Reveal>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentItems.map((item, index) => (
          <Reveal key={item.id} delay={index * 100}>
            <div 
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-kuwait-dark font-bold text-sm shadow-sm">
                  {item.price.toFixed(3)} {t('kd')}
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-serif text-kuwait-dark mb-2">{item.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">{item.description}</p>
                
                <button 
                  onClick={() => addToCart(item)}
                  className="w-full py-3 bg-gray-50 text-kuwait-dark font-medium rounded-lg hover:bg-kuwait-gold hover:text-white transition-colors flex items-center justify-center gap-2 group-hover:bg-kuwait-dark group-hover:text-kuwait-gold"
                >
                  <Plus size={18} />
                  {t('addToCart')}
                </button>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default Menu;