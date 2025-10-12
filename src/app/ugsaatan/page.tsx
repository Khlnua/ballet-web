'use client';

import { ugsaatanDances } from "@/data/dances/ugsaatan";
import { useLanguage } from '@/contexts/language-context';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function UgsaatanPage() {
  const { language } = useLanguage();
  const [selectedDance, setSelectedDance] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-black text-amber-50">
      {/* Header */}
      <div className="pt-8 pb-8 px-8 sm:px-16 lg:px-24 xl:px-32 2xl:px-40">
        <div className="max-w-7xl mx-auto text-center">
          <h1 
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-gold mb-6 classic-heading transition-all duration-1000 transform ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            {language === 'en' ? 'Mongolian Ethnic Groups' : 'Монголын Угсаатан'}
          </h1>
          <p 
            className={`text-lg sm:text-xl text-amber-200 max-w-3xl mx-auto classic-text transition-all duration-1000 transform ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            {language === 'en' 
              ? 'Traditional Dance Styles Across Mongolia'
              : 'Уламжлалт бүжгийн хэв маягууд'
            }
          </p>
        </div>
      </div>

      {/* Ethnic Groups Grid */}
      <div className="px-8 sm:px-16 lg:px-24 xl:px-32 2xl:px-40 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center">
            {ugsaatanDances.map((dance, index) => (
              <div
                key={dance.id}
                className={`group relative bg-black rounded-2xl transition-all duration-700 transform hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20 cursor-pointer w-full max-w-sm ${
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
                onClick={() => setSelectedDance(selectedDance === dance.id ? null : dance.id)}
                style={{
                  transitionDelay: `${600 + index * 150}ms`
                }}
              >
                {/* Image */}
                <div className="relative aspect-[8/7] overflow-hidden rounded-2xl">
                  <Image
                    src={dance.src}
                    alt={language === 'en' ? dance.titleEn : dance.titleMn}
                    width={400}
                    height={350}
                    className="w-full h-full object-cover transition-all rounded-2xl duration-700 group-hover:scale-110"
                    priority={index < 6}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `data:image/svg+xml;base64,${btoa(`<svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="400" height="300" fill="#1a1a2e"/>
                        <rect x="10" y="10" width="380" height="280" rx="10" fill="#f59e0b"/>
                        <text x="200" y="150" font-family="Arial, sans-serif" font-size="18" fill="#fbbf24" text-anchor="middle">${language === 'en' ? dance.titleEn : dance.titleMn}</text>
                      </svg>`)}`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Dance Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-xl font-bold text-white classic-heading group-hover:text-amber-200 transition-all duration-300 transform group-hover:scale-105 text-center">
                      {language === 'en' ? dance.titleEn : dance.titleMn}
                    </h3>
                  </div>
                </div>

                {/* Expanded Description - Below the card */}
                {selectedDance === dance.id && (
                  <div className="mt-4 bg-black/95 rounded-2xl p-6 animate-fade-in-up">
                    <p className="text-yellow-100 classic-text text-sm leading-tight animate-fade-in font-medium">
                      {language === 'en' ? dance.captionEn : dance.captionMn}
                    </p>
                  </div>
                )}

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-400/15 to-orange-500/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}