import React from 'react';
import Section from './ui/Section';
import { Utensils, ShoppingBag, Truck, Clock, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Reveal } from './ui/Reveal';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Section id="about" bg="cream">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <div className="space-y-6">
          <Reveal>
            <div className="flex items-center gap-2 text-kuwait-gold font-medium tracking-wide">
              <span className="h-px w-8 bg-kuwait-gold"></span>
              <span className="uppercase">{t('aboutUs')}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-kuwait-dark mt-2">
              {t('jewelTitle')} <span className="text-kuwait-green italic">{t('locationName')}</span>
            </h2>
          </Reveal>
          
          <Reveal delay={200}>
            <p className="text-gray-600 leading-relaxed text-lg">
              {t('aboutText')}
            </p>
          </Reveal>
          
          <Reveal delay={400}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {[
                { icon: <Utensils className="w-6 h-6" />, label: t('dineIn') },
                { icon: <ShoppingBag className="w-6 h-6" />, label: t('takeaway') },
                { icon: <Truck className="w-6 h-6" />, label: t('delivery') }
              ].map((service, idx) => (
                <div key={idx} className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm border border-kuwait-gold/10 hover:border-kuwait-gold/50 transition-colors group">
                  <div className="text-kuwait-green group-hover:text-kuwait-gold transition-colors mb-2">
                    {service.icon}
                  </div>
                  <span className="font-medium text-kuwait-dark">{service.label}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={600}>
            <div className="flex gap-6 text-sm text-gray-500 pt-4 border-t border-gray-200">
              <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-kuwait-gold" />
                  <span>{t('openUntil')}</span>
              </div>
              <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-kuwait-gold" />
                  <span>Habeeb Munawer St</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right: Image Mosaic */}
        <div className="relative h-[500px] w-full hidden md:block">
            <Reveal delay={300} className="absolute top-0 right-0 w-3/4 h-3/4 z-10">
              <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl hover:scale-[1.02] transition-transform duration-500">
                  <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop" alt="Restaurant Interior" className="w-full h-full object-cover" />
              </div>
            </Reveal>
            <Reveal delay={500} className="absolute bottom-0 left-0 w-1/2 h-1/2 z-20">
              <div className="w-full h-full rounded-2xl overflow-hidden shadow-xl border-4 border-kuwait-cream hover:scale-[1.02] transition-transform duration-500">
                  <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000&auto=format&fit=crop" alt="Delicious Dish" className="w-full h-full object-cover" />
              </div>
            </Reveal>
            {/* Decoration */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-kuwait-gold/10 rounded-full blur-2xl z-0" />
        </div>
      </div>
    </Section>
  );
};

export default About;