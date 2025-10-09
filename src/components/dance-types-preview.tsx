'use client';

import Link from 'next/link';
import { featured } from '@/data/dances/featured';
import { useLanguage } from '@/contexts/language-context';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function DanceTypesPreview() {
  const { language } = useLanguage();

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20" suppressHydrationWarning>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gold mb-6 classic-heading">
            {language === 'en' ? 'Dance Collections' : 'Уран бүтээлүүд'}
          </h2>
        </div>

        {/* Dance Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featured.map((danceType, index) => (
            <Link
              key={danceType.id}
              href={danceType.href}
              className="group relative overflow-hidden rounded-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-gold/20"
            >
              {/* Background Image */}
              <div className="relative h-64 sm:h-80 overflow-hidden">
                <Image
                  src={danceType.image}
                  alt={language === 'en' ? danceType.titleEn : danceType.titleMn}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjMWExYTJlIi8+CjxyZWN0IHg9IjEwIiB5PSIxMCIgd2lkdGg9IjM4MCIgaGVpZ2h0PSIyODAiIHJ4PSIxMCIgZmlsbD0iI2Y1OWUwYiIvPgo8dGV4dCB4PSIyMDAiIHk9IjE1MCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4IiBmaWxsPSIjZjJiYjI0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5JbWFnZSBOb3QgQXZhaWxhYmxlPC90ZXh0Pgo8L3N2Zz4K';
                  }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex items-end p-6">
                  <div className="w-full text-center">
                    <h3 className="text-2xl sm:text-3xl font-bold text-gold mb-3 classic-heading transition-all duration-500 group-hover:text-gold-light group-hover:scale-105">
                      {language === 'en' ? danceType.titleEn : danceType.titleMn}
                    </h3>
                    <p className="text-gold-light/90 classic-text text-sm sm:text-base leading-relaxed transition-colors duration-300 group-hover:text-gold-light line-clamp-2">
                      {language === 'en' ? danceType.descriptionEn : danceType.descriptionMn}
                    </p>
                  </div>
                </div>

                {/* Hover Arrow */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                  <div className="bg-gold/20 backdrop-blur-sm border border-gold/40 rounded-full p-2">
                    <ArrowRight className="w-4 h-4 text-gold-light" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
