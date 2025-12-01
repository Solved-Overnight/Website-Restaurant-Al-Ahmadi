import React from 'react';
import Section from './ui/Section';
import { Phone, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Reveal } from './ui/Reveal';

const MapContact: React.FC = () => {
  const { t } = useLanguage();
  return (
    <Section id="contact" bg="white" className="!p-0 !max-w-none">
      <div className="flex flex-col-reverse md:flex-row h-full md:h-[600px]">
        
        {/* Contact Info Panel */}
        <div className="w-full md:w-1/3 bg-kuwait-dark text-kuwait-cream p-10 md:p-16 flex flex-col justify-center relative overflow-hidden">
             {/* Pattern bg */}
             <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]" />
             
             <div className="relative z-10 space-y-8">
                <Reveal>
                  <div>
                      <h3 className="text-kuwait-gold text-sm font-bold uppercase tracking-widest mb-2">{t('visitUs')}</h3>
                      <h2 className="text-3xl font-serif">{t('contactInfo')}</h2>
                  </div>
                </Reveal>

                <div className="space-y-6">
                    <Reveal delay={100}>
                      <div className="flex items-start gap-4">
                          <MapPin className="text-kuwait-gold shrink-0 mt-1" />
                          <div>
                              <p className="font-medium text-white">{t('address')}</p>
                              <p className="text-gray-400 text-sm">Habeeb Munawer St, Al Farwaniyah, Kuwait</p>
                              <p className="text-gray-500 text-xs mt-1">Plus Code: 7XG7+Q4</p>
                          </div>
                      </div>
                    </Reveal>

                    <Reveal delay={200}>
                      <div className="flex items-start gap-4">
                          <Phone className="text-kuwait-gold shrink-0 mt-1" />
                          <div>
                              <p className="font-medium text-white">{t('phone')}</p>
                              <p className="text-gray-400 text-sm">+965 9696 1300</p>
                          </div>
                      </div>
                    </Reveal>

                    <Reveal delay={300}>
                      <div className="flex items-start gap-4">
                          <Clock className="text-kuwait-gold shrink-0 mt-1" />
                          <div>
                              <p className="font-medium text-white">{t('time')}</p>
                              <p className="text-gray-400 text-sm">Open daily until 11:00 PM</p>
                          </div>
                      </div>
                    </Reveal>
                </div>

                <Reveal delay={400}>
                  <a 
                      href="tel:+96596961300"
                      className="inline-block w-full py-4 text-center border border-kuwait-gold text-kuwait-gold hover:bg-kuwait-gold hover:text-kuwait-dark transition-colors uppercase tracking-widest text-sm font-semibold"
                  >
                      {t('callNow')}
                  </a>
                </Reveal>
             </div>
        </div>

        {/* Map */}
        <div className="w-full md:w-2/3 h-[400px] md:h-full bg-gray-200">
          <iframe
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(0.1) contrast(1.1)' }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            // Using standard embed URL which doesn't require an API key for basic display
            src="https://maps.google.com/maps?q=Al%20Ahmadi%20Restaurant%20Habeeb%20Munawer%20St%20Al%20Farwaniyah%20Kuwait&t=&z=15&ie=UTF8&iwloc=&output=embed"
            title="Al Ahmadi Restaurant Map"
          >
          </iframe>
        </div>
      </div>
    </Section>
  );
};

export default MapContact;