'use client';

import { useLanguage } from '@/contexts/language-context';
import { performances } from '@/data/dances/ontsloh';
import { useState, useEffect, useRef } from 'react';

export default function FeaturedPage() {
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
            {language === 'en' ? 'Featured Dances' : 'Онцлох бүжгүүд'}
          </h1>
          <p 
            className={`text-lg sm:text-xl text-amber-200 max-w-3xl mx-auto classic-text transition-all duration-1000 transform`}
            style={{ transitionDelay: '400ms' }}
          >
            {language === 'en' 
             ? 'Curated Collection of Traditional Mongolian Dances'
             : 'Монголын уламжлалт бүжгийн сор болсон бүтээлүүд'
            }
          </p>
        </div>
      </div>

      {/* Featured Dances Section */}
      <div className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12 md:space-y-16">
          {performances.map((performance, index) => (
            <div 
              key={performance.id} 
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
              {/* Video Background */}
              <div className="relative h-80 sm:h-96 md:h-[28rem] lg:h-[32rem] xl:h-[36rem] rounded-xl sm:rounded-2xl overflow-hidden">
                {performance.video && (
                  <video
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    controls={false}
                    style={{ pointerEvents: 'none' }}
                  >
                    <source src={performance.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
                
                {/* Gradient Overlays - Hidden on mobile, visible on larger screens */}
                <div className="hidden sm:block absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent sm:from-black/80 sm:via-black/40 transition-opacity duration-500 group-hover:opacity-90" />
                <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content Overlay - Hidden on mobile, visible on larger screens */}
                <div className="hidden sm:flex absolute inset-0 items-start justify-start p-4 sm:p-6 md:p-8 lg:p-12">
                  <div className="w-full max-w-2xl text-left">
                    {/* Title */}
                    <div className="transform transition-all duration-500 group-hover:translate-y-[-4px] sm:group-hover:translate-y-[-8px]">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-start sm:gap-4 mb-3 sm:mb-4 md:mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-yellow-300 classic-heading transition-all duration-500 group-hover:text-gold group-hover:scale-105 leading-tight">
                          {language === 'en' ? performance.titleEn : performance.titleMn}
                        </h2>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="max-w-2xl transform transition-all duration-500 group-hover:translate-y-[-2px] sm:group-hover:translate-y-[-4px] mb-4">
                      <p className="text-white classic-text text-sm sm:text-base md:text-lg leading-relaxed transition-colors duration-300 group-hover:text-white line-clamp-2 sm:line-clamp-3 md:line-clamp-none">
                        {language === 'en' ? performance.descriptionEn : performance.descriptionMn}
                      </p>
                    </div>

                    {/* Choreographer and Music Info */}
                    <div className="flex flex-col sm:flex-row sm:justify-start gap-4 sm:gap-8 text-sm sm:text-base">
                      <div className="flex flex-col sm:flex-row items-start gap-2">
                        <span className="text-white font-semibold">
                          {language === 'en' ? 'Choreography:' : 'Дэглэлт:'}
                        </span>
                        <span className="text-white">
                          {language === 'en' ? performance.choreographerEn : performance.choreographerMn}
                        </span>
                      </div>
                      {(language === 'en' ? performance.musicbyEn : performance.musicbyMn) && (
                        <div className="flex flex-col sm:flex-row items-start gap-2">
                          <span className="text-white font-semibold">
                            {language === 'en' ? 'Music:' : 'Хөгжим:'}
                          </span>
                          <span className="text-white">
                            {language === 'en' ? performance.musicbyEn : performance.musicbyMn}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

              </div>

              {/* Mobile Content - Visible only on mobile, positioned below video */}
              <div className="sm:hidden bg-black/95 backdrop-blur-sm p-4 space-y-3 transform transition-all duration-500 group-hover:translate-y-[-2px] group-hover:bg-black/98">
                {/* Title */}
                <div className="flex flex-col items-center gap-2 transform transition-all duration-500 group-hover:translate-y-[-1px]">
                  <h2 className="text-xl font-bold text-gold classic-heading text-center leading-tight transition-all duration-500 group-hover:text-gold-light group-hover:scale-105">
                    {language === 'en' ? performance.titleEn : performance.titleMn}
                  </h2>
                </div>

                {/* Description */}
                <div className="text-center transform transition-all duration-500 group-hover:translate-y-[-1px] mb-3">
                  <p className="text-gold-light/90 classic-text text-sm leading-relaxed transition-colors duration-300 group-hover:text-gold-light">
                    {language === 'en' ? performance.descriptionEn : performance.descriptionMn}
                  </p>
                </div>

                {/* Choreographer and Music Info */}
                <div className="flex flex-col gap-2 text-sm">
                  <div className="flex justify-center items-center gap-2">
                    <span className="text-gold/80 font-semibold">
                      {language === 'en' ? 'Choreography:' : 'Дэглэлт:'}
                    </span>
                    <span className="text-gold-light">
                      {language === 'en' ? performance.choreographerEn : performance.choreographerMn}
                    </span>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <span className="text-gold/80 font-semibold">
                      {language === 'en' ? 'Music:' : 'Хөгжим:'}
                    </span>
                    <span className="text-gold-light">
                      {language === 'en' ? performance.musicbyEn : performance.musicbyMn}
                    </span>
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