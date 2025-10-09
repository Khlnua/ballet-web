'use client';

import { useLanguage } from '@/contexts/language-context';
import Image from 'next/image';
import { danceDrama } from '@/data/dances/dancedrama';
import { useState, useEffect, useRef } from 'react';

export default function DanceDramaPage() {
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
            {language === 'en' ? 'Dance Dramas' : 'Бүжгэн жүжгүүд'}
          </h1>
          <p 
            className={`text-lg sm:text-xl text-amber-200 max-w-3xl mx-auto classic-text transition-all duration-1000 transform`}
            style={{ transitionDelay: '400ms' }}
          >
            {language === 'en' 
             ? 'Epic Stories Brought to Life Through Dance'
             : 'Түүхэн домгийг бүжгээр амилуулсан бүтээлүүд'
            }
          </p>
          
        </div>
      </div>

      {/* Dance Dramas Section */}
      <div className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12 md:space-y-16">
          {danceDrama.map((drama, index) => (
            <div 
              key={drama.id} 
              ref={(el) => { cardRefs.current[index] = el; }}
              data-index={index}
              className={`group relative overflow-hidden rounded-xl sm:rounded-2xl transition-all duration-1000 transform ${
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
              {/* Background Image */}
              <div className="relative h-64 sm:h-80 md:h-96 lg:h-[28rem] xl:h-[32rem] overflow-hidden">
                <Image
                  src={drama.src}
                  alt={language === 'en' ? drama.titleEn : drama.titleMn}
                  fill
                  className="object-contain transition-all duration-700 group-hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI2MDAiIHZpZXdCb3g9IjAgMCAxMjAwIDYwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjEyMDAiIGhlaWdodD0iNjAwIiBmaWxsPSIjMWExYTJlIi8+CjxyZWN0IHg9IjEwIiB5PSIxMCIgd2lkdGg9IjExODAiIGhlaWdodD0iNTgwIiByeD0iMTAiIGZpbGw9IiNmNTllMGIiLz4KPHRleHQgeD0iNjAwIiB5PSIzMDAiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0OCIgZmlsbD0iI2YyYmIyNCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+SW1hZ2UgTm90IEF2YWlsYWJsZTwvdGV4dD4KPC9zdmc+Cg==';
                  }}
                />
                
                {/* Gradient Overlays - Hidden on mobile, visible on larger screens */}
                <div className="hidden sm:block absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent sm:from-black/80 sm:via-black/40 transition-opacity duration-500 group-hover:opacity-90" />
                <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content Overlay - Hidden on mobile, visible on larger screens */}
                <div className="hidden sm:flex absolute inset-0 items-end justify-center p-4 sm:p-6 md:p-8 lg:p-12">
                  <div className="w-full text-center">
                    {/* Title */}
                    <div className="transform transition-all duration-500 group-hover:translate-y-[-4px] sm:group-hover:translate-y-[-8px]">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center sm:gap-4 mb-3 sm:mb-4 md:mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gold classic-heading transition-all duration-500 group-hover:text-gold-light group-hover:scale-105 leading-tight">
                          {language === 'en' ? drama.titleEn : drama.titleMn}
                        </h2>
                        
                        {/* Year Badge */}
                        <div className="inline-block bg-gold/20 backdrop-blur-sm rounded-full px-3 py-1.5 sm:px-4 sm:py-2 transform transition-all duration-500 group-hover:bg-gold/30 group-hover:scale-105">
                          <span className="text-gold-light text-xs sm:text-sm font-semibold">
                            {drama.id === '1' ? '1988' : 
                             drama.id === '2' ? '1996' : 
                             drama.id === '3' ? '2006' : 
                             drama.id === '4' ? '2009' : 
                             drama.id === '5' ? '2010' : 
                             drama.id === '6' ? '2013' : 
                             drama.id === '7' ? '2019' : ''}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="max-w-4xl mx-auto transform transition-all duration-500 group-hover:translate-y-[-2px] sm:group-hover:translate-y-[-4px]">
                      <p className="text-gold-light/90 classic-text text-sm sm:text-base md:text-lg leading-relaxed transition-colors duration-300 group-hover:text-gold-light line-clamp-2 sm:line-clamp-3 md:line-clamp-none">
                        {language === 'en' ? drama.captionEn : drama.captionMn}
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Mobile Content - Visible only on mobile, positioned below image */}
              <div className="sm:hidden bg-black/95 backdrop-blur-sm p-4 space-y-3 transform transition-all duration-500 group-hover:translate-y-[-2px] group-hover:bg-black/98">
                {/* Title */}
                <div className="flex flex-col items-center gap-2 transform transition-all duration-500 group-hover:translate-y-[-1px]">
                  <h2 className="text-xl font-bold text-gold classic-heading text-center leading-tight transition-all duration-500 group-hover:text-gold-light group-hover:scale-105">
                    {language === 'en' ? drama.titleEn : drama.titleMn}
                  </h2>
                  
                  {/* Year Badge */}
                  <div className="inline-block bg-gold/20 backdrop-blur-sm rounded-full px-3 py-1.5 transform transition-all duration-500 group-hover:bg-gold/30 group-hover:scale-105">
                    <span className="text-gold-light text-xs font-semibold">
                      {drama.id === '1' ? '1988' : 
                       drama.id === '2' ? '1996' : 
                       drama.id === '3' ? '2006' : 
                       drama.id === '4' ? '2009' : 
                       drama.id === '5' ? '2010' : 
                       drama.id === '6' ? '2013' : 
                       drama.id === '7' ? '2019' : ''}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <div className="text-center transform transition-all duration-500 group-hover:translate-y-[-1px]">
                  <p className="text-gold-light/90 classic-text text-sm leading-relaxed transition-colors duration-300 group-hover:text-gold-light">
                    {language === 'en' ? drama.captionEn : drama.captionMn}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}