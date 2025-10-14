'use client';

import { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'mn';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    'navigation.home': 'Home',
    'navigation.danceStyles': 'Dance Styles',
    'navigation.about': 'About',
    'navigation.dancers': 'Dancers',
    'navigation.choreographer': 'Choreographer',
    'navigation.dancedrama': 'Dance Drama',
    'navigation.featured': 'Featured',
    'navigation.ugsaatan': 'Ugsaatan',
    'home.hero.watchOnYoutube': 'Watch on YouTube',
    'home.hero.learnMore': 'Learn More',
    'home.performances.title': 'Upcoming Live Performances',
    'home.performances.getTickets': 'Get Tickets',
    'home.performances.noUpcoming': 'No upcoming performances at the moment',
    'home.about.title': 'About Us',
    'home.about.description': 'The Mongolian Traditional Dance Ensemble is dedicated to preserving and promoting the rich cultural traditions of Mongolia through dance. Our ensemble brings together the finest dancers to perform both traditional Mongolian dances and contemporary choreography that honors our cultural heritage.',
    'home.about.readMore': 'Read More',
    'danceStyles.title': 'Traditional Mongolian Dance Styles',
    'danceStyles.description': 'Discover the unique movements and rich history of Mongolia\'s traditional dance forms',
    'danceStyles.overview': 'Overview',
    'danceStyles.uniqueFeatures': 'Unique Features',
    'danceStyles.originHistory': 'Origin & History',
    'danceStyles.relatedStyles': 'Related Styles',
    'common.languageSwitch': 'Language',
    'common.darkMode': 'Dark Mode',
    'common.lightMode': 'Light Mode',
    'footer.contact': 'Contact',
    'footer.socialMedia': 'Social Media',
    'footer.copyright': '© 2025 Mongolian National Ballet. All rights reserved.',
    'danceStyles.learnMore': 'Learn More',
    'danceStyles.backToStyles': 'Back to Dance Styles',
    'danceStyles.category.traditional': 'Traditional',
    'danceStyles.category.ceremonial': 'Ceremonial',
    'danceStyles.category.folk': 'Folk',
    'home.hero.nowPlaying': '',
    'home.hero.rating': 'rating',
    'home.hero.close': 'Close',
    'footer.quickLinks': 'Quick Links',
    'footer.description': 'Preserving and promoting the rich cultural traditions of Mongolia through traditional dance and contemporary performances.',
    'footer.address': 'National Academic Drama Theatre SBD - 1 khoroo, Ulaanbaatar Mongolia',
    'footer.phone': '+976 8901 1333, +976 9800 9944',
    'footer.email': 'sevjiddancesevjid@gmail.com',
    'home.danceStyles.title': 'Traditional Mongolian Dance Styles',
    'home.danceStyles.description': 'Discover the unique movements and rich history of Mongolia\'s traditional dance forms',
    'home.danceStyles.viewAll': 'View All Dance Styles',
    'dancers.title': 'Our talented performers',
    'dancers.position.generalChoreographer': 'General Choreographer',
    'dancers.position.headOfDance': 'Head of Dance Department',
    'dancers.position.danceInstructor': 'Dance Instructor',
    'dancers.position.classicalInstructor': 'Instructor of Classical Dance',
    'dancers.position.dancer': 'Dancer',
    'dancers.filter.allPositions': 'All Positions',
    'dancers.filter.allCompanies': 'All Companies',
    'dancers.instagram': 'View on Instagram'
  },
  mn: {
    'navigation.home': 'Нүүр',
    'navigation.danceStyles': 'Уран бүтээл',
    'navigation.about': 'Бидний тухай',
    'navigation.dancers': 'Бүжигчид',
    'navigation.choreographer': 'Бүжиг дэглээч',
    'navigation.dancedrama': 'Бүжгэн жүжиг',
    'navigation.featured': 'Онцлох',
    'navigation.ugsaatan': 'Угсаатан',
    'home.hero.watchOnYoutube': 'YouTube дээр үзэх',
    'home.hero.learnMore': 'Дэлгэрэнгүй',
    'home.performances.title': 'Удахгүй болох шууд тоглолтууд',
    'home.performances.getTickets': 'Тасалбар авах',
    'home.performances.noUpcoming': 'Одоогоор болох тоглолт байхгүй',
    'home.about.title': 'Бидний тухай',
    'home.about.description': 'Монголын Уламжлалт Бүжигний Хамтлаг нь Монголын баялаг соёлын уламжлалыг бүжигээр хадгалж, дэмжихэд зориулсан байгууллага юм. Манай хамтлаг нь уламжлалт монгол бүжиг болон манай соёлын өвийг хүндэтгэсэн орчин үеийн хореографийг тоглохын тулд хамгийн сайн бүжигчиддийг нэгтгэдэг.',
    'home.about.readMore': 'Дэлгэрэнгүй унших',
    'danceStyles.title': 'Уламжлалт Монгол Бүжигний Хэв Мяггууд',
    'danceStyles.description': 'Монголын уламжлалт бүжигний хэв маягуудын өвөрмөц хөдөлгөөн, баялаг түүхийг нээж мэдээрэй',
    'danceStyles.overview': 'Тойм',
    'danceStyles.uniqueFeatures': 'Өвөрмөц онцлогууд',
    'danceStyles.originHistory': 'Гарал үүсэл ба түүх',
    'danceStyles.relatedStyles': 'Холбоотой хэв маягууд',
    'common.languageSwitch': 'Хэл',
    'common.darkMode': 'Харанхуй горим',
    'common.lightMode': 'Гэрэлтэй горим',
    'footer.contact': 'Холбоо барих',
    'footer.socialMedia': 'Нийгмийн сүлжээ',
    'footer.copyright': '© 2025 Ц.Сэвжидийн нэрэмжит Бүжигний Чуулга. Бүх эрх хуулиар хамгаалагдсан.',
    'danceStyles.learnMore': 'Дэлгэрэнгүй',
    'danceStyles.backToStyles': 'Буцах',
    'danceStyles.category.traditional': 'Уламжлалт',
    'danceStyles.category.ceremonial': 'Ёслол',
    'danceStyles.category.folk': 'Ардын',
    'home.hero.nowPlaying': '',
    'home.hero.rating': 'үнэлгээ',
    'home.hero.close': 'Хаах',
    'footer.quickLinks': 'Шуурхай холбоосууд',
    'footer.description': 'Уламжлалт бүжиг болон орчин үеийн тоглолтуудаар Монголын баялаг соёлын уламжлалыг хадгалж, дэмжих.',
    'footer.address': 'Улсын Драмын Эрдмийн Театр, СБД-1 хороо, Улаанбаатар, Монгол',
    'footer.phone': '+976 8901 1333, +976 9800 9944',
    'footer.email': 'sevjiddancesevjid@gmail.com',
    'home.danceStyles.title': 'Уламжлалт Монгол Бүжигний Хэв Мяггууд',
    'home.danceStyles.description': 'Монголын уламжлалт бүжигний хэв маягуудын өвөрмөц хөдөлгөөн, баялаг түүхийг нээж мэдээрэй',
    'home.danceStyles.viewAll': 'Бүх хэв маягийг харах',
    'dancers.title': 'Уран Бүтээлчид',
    'dancers.position.generalChoreographer': 'Ерөнхий бүжиг дэглээч',
    'dancers.position.headOfDance': 'Бүжиг албаны дарга',
    'dancers.position.danceInstructor': 'Дасгалжуулагч багш',
    'dancers.position.classicalInstructor': 'Сонгодог бүжгийн багш',
    'dancers.position.dancer': 'Бүжигчин',
    'dancers.filter.allPositions': 'Бүх албан тушаал',
    'dancers.filter.allCompanies': 'Бүх хамтлаг',
    'dancers.instagram': 'Instagram дээр харах'
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'mn')) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    if (isClient) {
      localStorage.setItem('language', language);
    }
  }, [language, isClient]);

  const t = (key: keyof typeof translations['en']): string => {
    return (translations[language][key] ?? translations['en'][key] ?? key);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: t as (key: string) => string }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
