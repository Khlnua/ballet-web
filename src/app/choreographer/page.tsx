'use client';

import { useLanguage } from '@/contexts/language-context';
import Image from 'next/image';
import { choreographers } from '@/data/choreographers';
import { useState, useEffect, useRef } from 'react';


export default function ChoreographerPage() {
  const { language } = useLanguage();
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header Section */}
      <div className="pt-8 pb-8 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-gold mb-6 classic-heading transition-all duration-1000 transform 
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            {language === 'en' ? 'Biographies of Masters' : 'Багш нарын намтар'}
            </h1>
          <p 
            className={`text-lg sm:text-xl text-amber-200 max-w-3xl mx-auto classic-text transition-all duration-1000 transform`}
            style={{ transitionDelay: '400ms' }}
          >
             {language === 'en' 
              ? 'Pioneers of Mongolian Dance Heritage'
              : 'Монголын бүжгийн урлагийн манлайлагчид'
            }
          </p>
          
        </div>
      </div>

      {/* Masters Section */}
      <div className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto space-y-16">
          {choreographers.map((master, index) => (
            <div 
              key={master.id} 
              ref={(el) => { cardRefs.current[index] = el; }}
              data-index={index}
              className={`bg-gradient-to-r from-gold/5 to-gold/10 rounded-2xl p-8 transition-all duration-1000 transform ${
                visibleCards.has(index) 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-12 scale-95'
              } ${
                hoveredCard === index 
                  ? 'scale-105 shadow-2xl shadow-gold/20' 
                  : 'hover:scale-102 hover:shadow-xl hover:shadow-gold/10'
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                transitionDelay: `${index * 200}ms`
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                {/* Image */}
                <div className="lg:col-span-1 group">
                  <div className="relative aspect-[3/4] rounded-lg overflow-hidden transform transition-all duration-700 group-hover:scale-105 group-hover:rotate-1">
                    <Image
                      src={master.image}
                      alt={language === 'en' ? master.nameEn : master.nameMn}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-110"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDQwMCA1MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNTAwIiBmaWxsPSIjMWExYTJlIi8+CjxyZWN0IHg9IjEwIiB5PSIxMCIgd2lkdGg9IjM4MCIgaGVpZ2h0PSI0ODAiIHJ4PSIxMCIgZmlsbD0iI2Y1OWUwYiIvPgo8dGV4dCB4PSIyMDAiIHk9IjI1MCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjI0IiBmaWxsPSIjZjJiYjI0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5JbWFnZSBOb3QgQXZhaWxhYmxlPC90ZXh0Pgo8L3N2Zz4K';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-500 group-hover:opacity-80" />
                    <div className="absolute inset-0 bg-gradient-to-r from-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Name and Title */}
                  <div className="transform transition-all duration-500 hover:translate-x-2">
                    <h2 className="text-3xl font-bold text-gold mb-2 classic-heading transition-all duration-500 hover:text-gold-light hover:scale-105">
                      {language === 'en' ? master.nameEn : master.nameMn}
                    </h2>
                    <p className="text-lg text-gold-light/80 mb-1 transition-colors duration-300 hover:text-gold-light">
                      {language === 'en' ? master.titleEn : master.titleMn}
                    </p>
                    <p className="text-base text-gold-light/70 transition-colors duration-300 hover:text-gold-light/90">
                      {language === 'en' ? master.positionEn : master.positionMn}
                    </p>
                  </div>

                  {/* Birth Info */}
                  <div className="bg-black/40 rounded-lg p-4 transform transition-all duration-500 hover:bg-black/60 hover:scale-102 hover:shadow-lg hover:shadow-gold/10">
                    <p className="text-gold-light/90 classic-text transition-colors duration-300 hover:text-gold-light">
                      {language === 'en' ? master.birthEn : master.birthMn}
                    </p>
                  </div>

                  {/* Timeline */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-gold mb-4 transform transition-all duration-500 hover:scale-105 hover:text-gold-light">
                      {language === 'en' ? 'Career Timeline' : 'Ажлын замнал'}
                    </h3>
                    {master.timeline.map((item, idx) => (
                      <div key={idx} className="flex items-start space-x-3 transform transition-all duration-500 hover:translate-x-2 group">
                        <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0 transition-all duration-500 group-hover:scale-150 group-hover:bg-gold-light group-hover:shadow-lg group-hover:shadow-gold/50"></div>
                        <p className="text-gold-light/90 classic-text transition-colors duration-300 group-hover:text-gold-light">
                          {language === 'en' ? item.periodEn : item.periodMn}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Achievements */}
                  <div className="bg-black/30 rounded-lg p-6 transform transition-all duration-500 hover:bg-black/50 hover:scale-102 hover:shadow-xl hover:shadow-gold/20 group">
                    <h3 className="text-xl font-semibold text-gold mb-4 transition-all duration-500 group-hover:scale-105 group-hover:text-gold-light">
                      {language === 'en' ? 'Achievements & Legacy' : 'Амжилт ба Өв'}
                    </h3>
                    <p className="text-gold-light/90 classic-text leading-relaxed transition-colors duration-300 group-hover:text-gold-light">
                      {language === 'en' ? master.achievementsEn : master.achievementsMn}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}