'use client';

import { Calendar, Clock, MapPin, ExternalLink } from 'lucide-react';
import { performances } from '@/data/performances';
import { useLanguage } from '@/contexts/language-context';

export default function PerformancesSection() {
  const { t, language } = useLanguage();

  // Filter future performances
  const upcomingPerformances = performances.filter(performance => {
    const performanceDate = new Date(performance.date);
    return performanceDate > new Date();
  });

  if (upcomingPerformances.length === 0) {
    return (
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-8 sm:px-16 lg:px-24 xl:px-32 2xl:px-40">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-theme mb-4">
              {t('home.performances.title')}
            </h2>
            <p className="text-theme/70">
              {t('home.performances.noUpcoming')}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-8 sm:px-16 lg:px-24 xl:px-32 2xl:px-40" suppressHydrationWarning>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-theme mb-4">
            {t('home.performances.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingPerformances.map((performance) => {
            const performanceDate = new Date(performance.date);
            const formattedDate = performanceDate.toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            });

            return (
              <div
                key={performance.id}
                className="bg-card border border-gold/20 rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:border-gold/40 transition-all duration-300"
              >
                <div className="relative h-48">
                  <img
                    src={performance.image}
                    alt={language === 'en' ? performance.titleEn : performance.titleMn}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {language === 'en' ? performance.titleEn : performance.titleMn}
                    </h3>
                  </div>
                </div>

                <div className="p-6">
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-theme/70">
                      <Calendar className="w-5 h-5 mr-2" />
                      <span>{formattedDate}</span>
                    </div>
                    <div className="flex items-center text-theme/70">
                      <Clock className="w-5 h-5 mr-2" />
                      <span>{performance.time}</span>
                    </div>
                    <div className="flex items-center text-theme/70">
                      <MapPin className="w-5 h-5 mr-2" />
                      <span>{language === 'en' ? performance.venueEn : performance.venueMn}</span>
                    </div>
                  </div>

                  <p className="text-theme/70 mb-6 line-clamp-3">
                    {language === 'en' ? performance.descriptionEn : performance.descriptionMn}
                  </p>

                  <a
                    href={performance.ticketUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-burgundy hover:bg-burgundy/90 text-white font-semibold rounded-lg transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {t('home.performances.getTickets')}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
