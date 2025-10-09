'use client';

import { useLanguage } from '@/contexts/language-context';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function FeaturedPage() {
  const { language } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="pt-8 pb-8 px-8 sm:px-16 lg:px-24 xl:px-32 2xl:px-40">
        <div className="max-w-7xl mx-auto text-center">
          <h1 
            className={`text-3xl  text-gold sm:text-4xl lg:text-5xl font-bold mb-6 classic-heading transition-all duration-1000 transform ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            {language === 'en' ? 'Featured Dances' : 'Онцлох бүжгүүд'}
          </h1>
          <p 
            className={`text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto classic-text transition-all duration-1000 transform ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            {language === 'en' 
              ? 'Curated collection of the most beautiful and significant traditional Mongolian dances'
              : 'Монголын уламжлалт бүжгийн сор болсон бүтээлүүд'
            }
          </p>
        </div>
      </div>

      {/* Featured Content */}
      <div className="px-8 sm:px-16 lg:px-24 xl:px-32 2xl:px-40 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Featured Dances Card */}
            <div 
              className={`group relative overflow-hidden rounded-2xl transition-all duration-700 transform hover:scale-105 hover:shadow-2xl hover:shadow-gold/20 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              <div className="relative h-64 sm:h-80 overflow-hidden">
                <Image
                  src="https://pub-c732fae67a4540d5ae377e19b62491a7.r2.dev/bujgenjujig/mongolbaharhal3.jpg"
                  alt={language === 'en' ? 'Featured Dances' : 'Онцлох бүжгүүд'}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute inset-0 flex items-end p-6">
                  <div className="w-full text-center">
                    <h3 className="text-2xl sm:text-3xl font-bold text-gold mb-3 classic-heading">
                      {language === 'en' ? 'Featured Dances' : 'Онцлох бүжгүүд'}
                    </h3>
                    <p className="text-gold-light/90 classic-text text-sm sm:text-base">
                      {language === 'en' 
                        ? 'Curated collection of the most beautiful and significant traditional Mongolian dances'
                        : 'Монголын уламжлалт бүжгийн сор болсон бүтээлүүд'
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dance Dramas Card */}
            <div 
              className={`group relative overflow-hidden rounded-2xl transition-all duration-700 transform hover:scale-105 hover:shadow-2xl hover:shadow-gold/20 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
              style={{ transitionDelay: '800ms' }}
            >
              <div className="relative h-64 sm:h-80 overflow-hidden">
                <Image
                  src="https://pub-c732fae67a4540d5ae377e19b62491a7.r2.dev/bujgenjujig/mongolhatad6.jpg"
                  alt={language === 'en' ? 'Dance Dramas' : 'Бүжгэн жүжгүүд'}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute inset-0 flex items-end p-6">
                  <div className="w-full text-center">
                    <h3 className="text-2xl sm:text-3xl font-bold text-gold mb-3 classic-heading">
                      {language === 'en' ? 'Dance Dramas' : 'Бүжгэн жүжгүүд'}
                    </h3>
                    <p className="text-gold-light/90 classic-text text-sm sm:text-base">
                      {language === 'en' 
                        ? 'Epic stories brought to life through traditional Mongolian dance performances'
                        : 'Уламжлалт монгол бүжгээр амилуулсан түүхэн домог бүтээлүүд'
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Ethnic Groups Card */}
            <div 
              className={`group relative overflow-hidden rounded-2xl transition-all duration-700 transform hover:scale-105 hover:shadow-2xl hover:shadow-gold/20 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
              style={{ transitionDelay: '1000ms' }}
            >
              <div className="relative h-64 sm:h-80 overflow-hidden">
                <Image
                  src="https://pub-c732fae67a4540d5ae377e19b62491a7.r2.dev/ugsaatan/halh1.jpg"
                  alt={language === 'en' ? 'Ethnic Groups' : 'Угсаатнууд'}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute inset-0 flex items-end p-6">
                  <div className="w-full text-center">
                    <h3 className="text-2xl sm:text-3xl font-bold text-gold mb-3 classic-heading">
                      {language === 'en' ? 'Ethnic Groups' : 'Угсаатнууд'}
                    </h3>
                    <p className="text-gold-light/90 classic-text text-sm sm:text-base">
                      {language === 'en' 
                        ? 'Traditional dance styles from different Mongolian ethnic groups and regions'
                        : 'Монголын янз бүрийн угсаатнууд болон бүс нутгийн уламжлалт бүжгийн хэв маягууд'
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}