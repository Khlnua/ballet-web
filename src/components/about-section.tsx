'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { aboutImages } from '@/data/about-images';
import { useLanguage } from '@/contexts/language-context';
import { cn } from '@/lib/utils';

export default function AboutSection() {
  const { t, language } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % aboutImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const {push} = useRouter();

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-8 sm:px-16 lg:px-24 xl:px-32 2xl:px-40" suppressHydrationWarning>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl font-bold text-gold mb-6 classic-heading">
              {language === 'en' ? 'Our Dance Ensemble' : 'Ц.СЭВЖИД-н нэрэмжит бүжгийн чуулга'}
            </h2>
            <p className="text-lg text-gold-light/90 mb-8 leading-relaxed classic-text">
              {language === 'en' 
                ? 'The primary purpose of the Mongolian Ballet is to research, preserve, and promote the traditional dance heritage of Mongolia, which reflects the nation’s rich history, nomadic lifestyle, and ancestral bii biyelgee traditions. The Ensemble is dedicated to sustaining and developing the folk dance styles of Mongolian peoples, with the aim of representing and promoting our cultural identity and artistic excellence both domestically and on the international stage.'
                : 'ҮУИТ-ын Бүжгийн чуулгын гол зорилго нь:  Монголын түүх соёл, нүүдэлчин ард түмний аж байдал, өвөг дээдсээс уламжлагдан ирсэн язгуур бий биелгээнээс улбаатай  Монгол туургатны олон усаатны дэгийг сурч, судалж өвлөн уламжлуулж Монголдоо төдийгүй олон улсад бахархалт өв соёлоо  бүжгийн урлагаар таниулхад оршино.'
              }
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-gold mb-1">20+</div>
                <div className="text-sm text-gold-light/80 classic-text">
                  {language === 'en' ? 'Years Experience' : 'Жилийн туршлага'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gold mb-1">100+</div>
                <div className="text-sm text-gold-light/80 classic-text">
                  {language === 'en' ? 'Performances' : 'Тоглолт'}
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-start">
              <button onClick={() => push('/about')} className="inline-flex items-center justify-center px-2 py-2 text-white font-semibold hover:text-gold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg classic-text">
                {language === 'en' ? 'See More' : 'Дэлгэрэнгүй'}
              </button>
            </div>
          </div>

          {/* Image Carousel */}
          <div className="relative">
            <div className="relative h-80 rounded-lg overflow-hidden">
              {aboutImages.map((image, index) => (
                <div
                  key={image.id}
                  className={cn(
                    'absolute inset-0 transition-opacity duration-1000 ease-in-out',
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  )}
                >
                  <img
                    src={image.src}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
