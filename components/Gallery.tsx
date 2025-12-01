import React from 'react';
import Section from './ui/Section';
import { Reveal } from './ui/Reveal';

const images = [
    { src: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=600&h=600&auto=format&fit=crop", category: "Vibe" },
    { src: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&h=800&auto=format&fit=crop", category: "Food" }, // Vertical
    { src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=600&h=600&auto=format&fit=crop", category: "Drinks" },
    { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&h=600&auto=format&fit=crop", category: "Food" }, // Horizontal
    { src: "https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?q=80&w=600&h=600&auto=format&fit=crop", category: "Vibe" },
    { src: "https://images.unsplash.com/photo-1606471191009-63994c53433b?q=80&w=600&h=600&auto=format&fit=crop", category: "Food" },
];

const Gallery: React.FC = () => {
  return (
    <Section id="gallery" bg="cream">
      <Reveal>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-kuwait-dark">Visual Journey</h2>
          <p className="text-gray-500 mt-2">A glimpse into our world</p>
        </div>
      </Reveal>

      <div className="columns-1 md:columns-3 gap-4 space-y-4">
        {images.map((img, idx) => (
          <Reveal key={idx} delay={idx * 100}>
            <div className="relative group overflow-hidden rounded-lg break-inside-avoid shadow-md hover:shadow-xl transition-shadow">
              <img 
                src={img.src} 
                alt={img.category} 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-serif tracking-widest uppercase border border-white px-4 py-2">
                  {img.category}
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default Gallery;