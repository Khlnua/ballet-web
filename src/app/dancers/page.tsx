'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/language-context';
import { dancers } from '@/data/dancers';
import Image from 'next/image';

const DancersPage = () => {
  const { language, t } = useLanguage();
  const [hoveredDancer, setHoveredDancer] = useState<string | null>(null);

  // Handle Instagram click
  const handleInstagramClick = (instagramUrl: string) => {
    window.open(instagramUrl, '_blank', 'noopener,noreferrer');
  };

  // Get position translation
  const getPositionTranslation = (positionEn: string) => {
    const positionMap: { [key: string]: string } = {
      'General Choreographer': t('dancers.position.generalChoreographer'),
      'Head of Dance Department': t('dancers.position.headOfDance'),
      'Dance Instructor': t('dancers.position.danceInstructor'),
      'Instructor of Classical Dance': t('dancers.position.classicalInstructor'),
      'Dancer': t('dancers.position.dancer'),
    };
    return positionMap[positionEn] || positionEn;
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header Section */}
      <div className="relative pt-8 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold text-gold mb-4 tracking-wide">
              {t('dancers.title')}
            </h1>
          </div>
        </div>
      </div>

      {/* Dancers Grid */}
      <div className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {dancers.map((dancer, index) => (
              <div
                key={dancer.id}
                className="group relative bg-transparent transition-all duration-500 transform hover:scale-105 h-full"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
                onMouseEnter={() => setHoveredDancer(dancer.id)}
                onMouseLeave={() => setHoveredDancer(null)}
              >
                {/* Dancer Card - Fixed Height */}
                <div 
                  className="relative overflow-hidden rounded-lg bg-gray-900 shadow-2xl transition-all duration-500 group-hover:shadow-yellow-500/20 cursor-pointer h-full flex flex-col"
                  onClick={() => handleInstagramClick(dancer.instagram)}
                >
                  {/* Image Container - Fixed Aspect Ratio */}
                  <div className="relative aspect-[3/4] overflow-hidden flex-shrink-0">
                    <Image
                      src={dancer.image}
                      alt={language === 'mn' ? dancer.nameMn : dancer.nameEn}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    />
                  </div>

                  {/* Info Box - Fixed Height */}
                  <div className="p-4 bg-gradient-to-r from-yellow-900 to-yellow-800 group-hover:from-yellow-800 group-hover:to-yellow-700 transition-all duration-300 flex-shrink-0 h-20 flex flex-col justify-center">
                    <h3 className="text-white font-semibold text-base sm:text-lg mb-1 group-hover:text-yellow-300 transition-colors duration-300 line-clamp-1">
                      {language === 'mn' ? dancer.nameMn : dancer.nameEn}
                    </h3>
                    <p className="text-gray-200 text-xs sm:text-sm group-hover:text-white transition-colors duration-300 line-clamp-1">
                      {language === 'mn' ? dancer.positionMn : getPositionTranslation(dancer.positionEn)}
                    </p>
                  </div>
                </div>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-yellow-400/20 to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DancersPage;