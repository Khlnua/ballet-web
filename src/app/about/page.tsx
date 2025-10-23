'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/language-context';
import DanceEnsemble from '@/components/dance-ensemble';
import TheaterHistory from '@/components/theater-history';
import InternationalCooperation from '@/components/international-cooperation';

export default function AboutPage() {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState('theater');

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation Tabs - Fixed below main header */}
      <div className="fixed top-16 left-0 right-0 z-40 bg-black">
        <div className="max-w-7xl mx-auto px-8 sm:px-16 lg:px-24 xl:px-32 2xl:px-40 py-4">
          <div className="flex justify-center gap-1 sm:gap-4">
          {[
            { id: 'theater', label: language === 'en' ? 'Theater History' : 'Театрын түүх' },
            { id: 'international', label: language === 'en' ? 'International Cooperation' : 'Гадаад хамтын ажиллагаа' },
            { id: 'ensemble', label: language === 'en' ? 'Dance Ensemble' : 'Бүжгийн чуулга' }
          ].map((tab) => (
            <button
              key={tab.id}
                onClick={() => {
                  console.log('Button clicked:', tab.id);
                  setActiveTab(tab.id);
                }}
              className={`px-1 py-1.5 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 flex-1 leading-tight text-center ${
                activeTab === tab.id
                  ? 'bg-gold text-black'
                  : 'bg-gold/20 text-gold hover:bg-gold/30'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
                  </div>
                </div>
                
      {/* Main Content with top padding to account for fixed headers */}
      <div className="max-w-7xl mx-auto px-8 sm:px-16 lg:px-24 xl:px-32 2xl:px-40 pt-12 pb-12">

        {/* Tab Content */}
        {(() => {
          switch (activeTab) {
            case 'theater':
              return <TheaterHistory />;
            case 'international':
              return <InternationalCooperation />;
            case 'ensemble':
              return <DanceEnsemble />;
            default:
              return <TheaterHistory />;
          }
        })()}
      </div>
    </div>
  );
}
