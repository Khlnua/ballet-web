'use client';

import { useLanguage } from '@/contexts/language-context';
import { useState } from 'react';

type ContinentKey = 'asia' | 'europe' | 'africa' | 'northAmerica' | 'southAmerica';

export default function InternationalCooperation() {
  const { language } = useLanguage();
  const [hoveredContinent, setHoveredContinent] = useState<ContinentKey | null>(null);
  const [selectedContinent, setSelectedContinent] = useState<ContinentKey | null>(null);

  const continents = {
    asia: {
      name: { en: 'ASIA', mn: 'АЗИ' },
      countries: {
        en: ['UAE', 'Afghanistan', 'Burma', 'Vietnam', 'DPRK', 'South Korea', 'Indonesia', 'Laos', 'Malaysia', 'Singapore', 'Taiwan', 'Thailand', 'Sri Lanka', 'India', 'Japan'],
        mn: ['АНЭУ', 'Афганистан', 'Бирм', 'Вьетнам', 'БНАСАУ', 'БНСУ', 'Индонез', 'Лаос', 'Малайз', 'Сингапур', 'Тайвань', 'Тайланд', 'Шри-Ланка', 'Энэтхэг', 'Япон']
      },
    },
    europe: {
      name: { en: 'EUROPE', mn: 'ЕВРОП' },
      countries: {
        en: ['Austria', 'Azerbaijan', 'England', 'Armenia', 'Bulgaria', 'Belgium', 'Belarus', 'Germany', 'Georgia', 'Spain', 'Italy', 'Kazakhstan', 'Kyrgyzstan', 'Latvia', 'Lithuania', 'Moldova', 'Netherlands', 'Russia', 'Poland', 'Romania', 'Uzbekistan', 'Ukraine', 'Hungary', 'Tajikistan', 'Turkey', 'Finland', 'France', 'Czech Republic', 'Sweden', 'Switzerland', 'Estonia'],
        mn: ['Австри', 'Азербайжан', 'Англи', 'Армен', 'Болгар', 'Бельги', 'Белорусь', 'Герман', 'Гүрж', 'Испани', 'Итали', 'Казакстан', 'Киргиз', 'Латви', 'Литва', 'Молдав', 'Нидерланди', 'ОХУ', 'Польш', 'Румын', 'Узбек', 'Украин', 'Унгар', 'Тажикстан', 'Турк', 'Финлянд', 'Франц', 'Чех', 'Швед', 'Швейцари', 'Эстони']
      },
    },
    africa: {
      name: { en: 'AFRICA', mn: 'АФРИК' },
      countries: {
        en: ['Algeria', 'Guinea', 'Mali'],
        mn: ['Алжир', 'Гвиней', 'Мали']
      },
    },
    northAmerica: {
      name: { en: 'NORTH AMERICA', mn: 'ХОЙД АМЕРИК' },
      countries: {
        en: ['USA', 'Canada', 'Cuba'],
        mn: ['АНУ', 'Канад', 'Куба']
      },
    },
    southAmerica: {
      name: { en: 'SOUTH AMERICA', mn: 'ӨМНӨД АМЕРИК' },
      countries: {
        en: ['Puerto Rico'],
        mn: ['Пуэрто-Рико']
      },
    }
  };

  const festivals = [
    { year: '1947', location: 'Prague, Czechoslovakia', locationMn: 'Прага, Чехословак', festival: 'I', flag: '🇨🇿' },
    { year: '1951', location: 'Berlin, GDR', locationMn: 'Берлин, ГДЕГ', festival: 'III', flag: '🇩🇪' },
    { year: '1953', location: 'Bucharest, Romania', locationMn: 'Бухарест, Румын', festival: 'IV', flag: '🇷🇴' },
    { year: '1955', location: 'Warsaw, Poland', locationMn: 'Варшав, Польш', festival: 'V', flag: '🇵🇱' },
    { year: '1957', location: 'Moscow, USSR', locationMn: 'Москва, ЗХУ', festival: 'VI', flag: '🇷🇺' },
    { year: '1959', location: 'Vienna, Austria', locationMn: 'Вена, Австри', festival: 'VII', flag: '🇦🇹' },
    { year: '1962', location: 'Helsinki, Finland', locationMn: 'Хельсинки, Финлянд', festival: 'VIII', flag: '🇫🇮' },
    { year: '1965', location: 'Algiers, Algeria', locationMn: 'Алжир, Алжир', festival: 'IX', flag: '🇩🇿' },
    { year: '1968', location: 'Sofia, Bulgaria', locationMn: 'Софи, Болгар', festival: 'IX', flag: '🇧🇬' },
    { year: '1973', location: 'Berlin, GDR', locationMn: 'Берлин, ГДЕГ', festival: 'X', flag: '🇩🇪' },
    { year: '1978', location: 'Havana, Cuba', locationMn: 'Гавана, Куба', festival: 'XI', flag: '🇨🇺' },
    { year: '1985', location: 'Moscow, USSR', locationMn: 'Москва, ЗХУ', festival: 'XII', flag: '🇷🇺' },
    { year: '1989', location: 'Pyongyang, DPRK', locationMn: 'Пхеньян, БНАСАУ', festival: 'XIII', flag: '🇰🇵' }
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Timeline Section */}
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-gold/10 to-gold/5 rounded-2xl p-6">
            <h3 className="text-2xl font-bold text-gold mb-4 classic-heading text-center">
              {language === 'en' ? 'World Youth and Student Festivals Journey' : 'Дэлхий Залуучууд оюутны их наадмын аялал'}
            </h3>
          </div>
          
          <div className="bg-gradient-to-r from-gold/10 to-gold/5 rounded-2xl p-6">
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute left-8 top-0 w-0.5 h-full bg-gradient-to-b from-gold via-gold/60 to-gold"></div>
              
              <div className="space-y-6">
                {festivals.map((festival, index) => (
                  <div key={index} className="relative flex items-center">
                    <div className="absolute left-6 w-4 h-4 bg-gold rounded-full border-2 border-black z-10"></div>
                    
                    <div className="w-24 text-center">
                      <div className="bg-gold text-black pl-10 text-sm font-bold px-3 py-1.5 rounded-full whitespace-nowrap inline-block">
                        {festival.year}
                      </div>
                    </div>
                    
                    <div className="ml-6 w-52">
                      <div className="bg-black/40 backdrop-blur-sm rounded-lg p-3 transition-all duration-300 hover:bg-black/50 w-full">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm">{festival.flag}</span>
                          <div className="text-gold-light/90 text-sm font-medium">
                            {language === 'en' ? festival.location : festival.locationMn}
                          </div>
                        </div>
                        <div className="text-gold/70 text-xs">{festival.festival} {language === 'en' ? 'Festival' : 'Их наадам'}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Interactive World Map Section */}
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-gold/10 to-gold/5 rounded-2xl p-6">
            <h3 className="text-2xl font-bold text-gold mb-4 classic-heading text-center">
              {language === 'en' ? 'Global Journey - Countries and Continents Visited' : 'Дэлхийн аялал - Айлчлан тоглосон тив, улс орнууд'}
            </h3>
          </div>

          <div className="bg-gradient-to-r from-gold/10 to-gold/5 rounded-2xl p-6">
            {/* High-Quality World Map with Interactive Overlays */}
            <div className="relative w-full" style={{ paddingBottom: '60%' }}>
              {/* Background World Map Image */}
              <img 
                src="https://pub-c732fae67a4540d5ae377e19b62491a7.r2.dev/continent.png" 
                alt="World Map"
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
              />
              
              {/* Interactive Overlay */}
              <svg viewBox="0 0 1000 600" className="absolute inset-0 w-full h-full">
                {/* North America Clickable Area */}
                <path
                  d="M 80 80 Q 130 60, 180 70 L 230 90 Q 250 110, 230 140 L 210 180 Q 190 200, 170 190 L 130 170 Q 100 150, 90 120 Z"
                  fill="transparent"
                  stroke="transparent"
                  strokeWidth="20"
                  className="cursor-pointer transition-all duration-300 hover:drop-shadow-lg"
                  onMouseEnter={() => setHoveredContinent('northAmerica')}
                  onMouseLeave={() => setHoveredContinent(null)}
                  onClick={() => setSelectedContinent(selectedContinent === 'northAmerica' ? null : 'northAmerica')}
                />
                <text x="170" y="135" fontSize="16" fontWeight="bold" fill="#000" textAnchor="middle" className="drop-shadow-lg">
                  {continents.northAmerica.name[language]}
                </text>

                {/* South America Clickable Area */}
                <path
                  d="M 220 250 Q 250 240, 280 260 L 300 300 Q 310 350, 290 380 L 260 400 Q 240 390, 230 370 L 200 320 Q 190 280, 210 260 Z"
                  fill="transparent"
                  stroke="transparent"
                  strokeWidth="20"
                  className="cursor-pointer transition-all duration-300 hover:drop-shadow-lg"
                  onMouseEnter={() => setHoveredContinent('southAmerica')}
                  onMouseLeave={() => setHoveredContinent(null)}
                  onClick={() => setSelectedContinent(selectedContinent === 'southAmerica' ? null : 'southAmerica')}
                />
                <text x="270" y="330" fontSize="14" fontWeight="bold" fill="#000" textAnchor="middle" className="drop-shadow-lg">
                  {continents.southAmerica.name[language]}
                </text>

                {/* Europe Clickable Area */}
                <path
                  d="M 440 60 Q 510 50, 580 65 L 640 90 Q 660 110, 650 130 L 610 150 Q 560 160, 510 145 L 460 120 Q 430 100, 435 75 Z"
                  fill="transparent"
                  stroke="transparent"
                  strokeWidth="20"
                  className="cursor-pointer transition-all duration-300 hover:drop-shadow-lg"
                  onMouseEnter={() => setHoveredContinent('europe')}
                  onMouseLeave={() => setHoveredContinent(null)}
                  onClick={() => setSelectedContinent(selectedContinent === 'europe' ? null : 'europe')}
                />
                <text x="520" y="110" fontSize="16" fontWeight="bold" fill="#000" textAnchor="middle" className="drop-shadow-lg">
                  {continents.europe.name[language]}
                </text>

                {/* Africa Clickable Area */}
                <path
                  d="M 470 180 Q 550 170, 610 190 L 640 240 Q 650 300, 620 360 L 570 400 Q 520 410, 480 390 L 450 340 Q 440 280, 460 220 Z"
                  fill="transparent"
                  stroke="transparent"
                  strokeWidth="20"
                  className="cursor-pointer transition-all duration-300 hover:drop-shadow-lg"
                  onMouseEnter={() => setHoveredContinent('africa')}
                  onMouseLeave={() => setHoveredContinent(null)}
                  onClick={() => setSelectedContinent(selectedContinent === 'africa' ? null : 'africa')}
                />
                <text x="525" y="245" fontSize="18" fontWeight="bold" fill="#000" textAnchor="middle" className="drop-shadow-lg">
                  {continents.africa.name[language]}
                </text>

                {/* Asia Clickable Area */}
                <path
                  d="M 590 70 Q 720 60, 820 80 L 920 120 Q 970 160, 950 200 L 870 260 Q 820 280, 770 270 L 670 240 Q 620 210, 590 180 L 570 130 Q 570 90, 590 70 Z"
                  fill="transparent"
                  stroke="transparent"
                  strokeWidth="20"
                  className="cursor-pointer transition-all duration-300 hover:drop-shadow-lg"
                  onMouseEnter={() => setHoveredContinent('asia')}
                  onMouseLeave={() => setHoveredContinent(null)}
                  onClick={() => setSelectedContinent(selectedContinent === 'asia' ? null : 'asia')}
                />
                <text x="730" y="130" fontSize="20" fontWeight="bold" fill="#000" textAnchor="middle" className="drop-shadow-lg">
                  {continents.asia.name[language]}
                </text>
              </svg>
            </div>

            {/* Countries Display */}
            {selectedContinent && (
              <div className="mt-6 bg-black/80 backdrop-blur-sm rounded-xl p-6 animate-in fade-in duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h4 className="text-2xl font-bold text-gold mb-2">
                      {continents[selectedContinent].name[language]}
                    </h4>
                  </div>
                  <button
                    onClick={() => setSelectedContinent(null)}
                    className="text-gold hover:text-gold-light text-xl font-bold p-2 hover:bg-gold/10 rounded-full transition-colors duration-200"
                  >
                    ✕
                  </button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {continents[selectedContinent].countries[language].map((country: string, idx: number) => (
                    <span
                      key={idx}
                      className="bg-black text-gold text-sm font-medium px-3 py-2 rounded-full transition-colors duration-200 text-center whitespace-nowrap"
                    >
                      {country}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Hover Tooltip */}
            {hoveredContinent && !selectedContinent && (
              <div className="mt-4 bg-black/80 backdrop-blur-sm rounded-lg p-4 text-center">
                <h4 className="text-lg font-bold text-gold mb-2">
                  {continents[hoveredContinent].name[language]}
                </h4>
                <p className="text-gold-light/80 text-sm">
                  {continents[hoveredContinent].countries[language].length} {language === 'en' ? 'countries visited' : 'улс айлчилсан'}
                </p>
              
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}