import React from 'react';
import Section from './ui/Section';
import { Star, Quote } from 'lucide-react';
import { Review } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import { Reveal } from './ui/Reveal';

const reviews: Review[] = [
  {
    id: '1',
    author: 'Meagan Luby',
    rating: 5,
    text: "Absolutely stunning authentic experience. The warm sand tones of the interior instantly transport you. The fresh bread is a must-try!",
    date: "2 weeks ago"
  },
  {
    id: '2',
    author: 'Effy Fanai',
    rating: 5,
    text: "Best spot in Al Farwaniyah! The service is impeccable, truly representing Kuwaiti hospitality. The fruit salad was incredibly fresh.",
    date: "1 month ago"
  },
  {
    id: '3',
    author: 'Vishnu Deepan',
    rating: 5,
    text: "A hidden gem. I come here often for the nachos and the peaceful vibe. Highly recommended for family dinners.",
    date: "3 months ago"
  }
];

const Reviews: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Section id="reviews" bg="green">
      <Reveal>
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
               <div className="flex text-kuwait-gold gap-1">
                   {[1,2,3,4,5].map(i => <Star key={i} fill="#C5A059" size={24} />)}
               </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-2">{t('lovedByLocals')}</h2>
          <p className="text-kuwait-sand text-lg">{t('ratingText')}</p>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-8">
        {reviews.map((review, idx) => (
          <Reveal key={review.id} delay={idx * 150} className="h-full">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 relative hover:bg-white/10 transition-colors duration-300 h-full flex flex-col">
              <Quote className="absolute top-6 right-6 text-kuwait-gold/20 w-12 h-12" />
              <div className="flex gap-1 mb-4">
                   {[...Array(review.rating)].map((_, i) => (
                       <Star key={i} size={16} className="text-kuwait-gold" fill="#C5A059" />
                   ))}
              </div>
              <p className="text-gray-200 mb-6 leading-relaxed italic flex-grow">"{review.text}"</p>
              <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-kuwait-gold flex items-center justify-center text-kuwait-dark font-bold text-lg shrink-0">
                      {review.author.charAt(0)}
                  </div>
                  <div>
                      <h4 className="text-white font-medium">{review.author}</h4>
                      <span className="text-xs text-gray-400">{review.date}</span>
                  </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default Reviews;