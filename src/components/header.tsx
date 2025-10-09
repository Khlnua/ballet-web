'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/language-context';
import { Globe, Menu, X, } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDancersDropdownOpen, setIsDancersDropdownOpen] = useState(false);
  const [isDanceStylesDropdownOpen, setIsDanceStylesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const danceStylesDropdownRef = useRef<HTMLDivElement>(null);

  const navigation = [
    { name: t('navigation.home'), href: '/' },
    { name: t('navigation.danceStyles'), href: '/dance-styles' },
    { name: 'dancers', href: '#' },
    { name: t('navigation.about'), href: '/about' },
  ];

  const dancersSubmenu = [
    { name: language === 'en' ? 'Choreographers' : 'Бүжиг Дэглээчид', href: '/choreographer' },
    { name: language === 'en' ? 'Dancers' : 'Бүжигчид', href: '/dancers' },
  ];

  const danceStylesSubmenu = [
    { name: language === 'en' ? 'Featured' : 'Онцлох', href: '/featured' },
    { name: language === 'en' ? 'Dance Dramas' : 'Бүжгэн жүжгүүд', href: '/dancedrama' },
    { name: language === 'en' ? 'Ethnic Groups' : 'Угсаатнууд', href: '/ugsaatan' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'mn' : 'en');
  };

  const handleDancersMouseEnter = () => {
    setIsDancersDropdownOpen(true);
  };

  const handleDancersMouseLeave = () => {
    setIsDancersDropdownOpen(false);
  };

  const handleDanceStylesMouseEnter = () => {
    setIsDanceStylesDropdownOpen(true);
  };

  const handleDanceStylesMouseLeave = () => {
    setIsDanceStylesDropdownOpen(false);
  };

  // Close dropdown when clicking outside (keep for mobile compatibility)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDancersDropdownOpen(false);
      }
      if (danceStylesDropdownRef.current && !danceStylesDropdownRef.current.contains(event.target as Node)) {
        setIsDanceStylesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black via-black/95 to-black/90 backdrop-blur-md shadow-2xl shadow-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" suppressHydrationWarning>
        <div className="flex justify-between items-center h-20 relative">
          {/* Mobile Header - Clean text navigation */}
          <div className="md:hidden flex items-center space-x-1">
            <Link
              href="/"
              className="px-3 py-2 text-white/90 hover:text-gold transition-all duration-300 classic-text text-sm rounded-lg hover:bg-gold/10"
            >
              {t('navigation.home')}
            </Link>
            <Link
              href="/about"
              className="px-3 py-2 text-white/90 hover:text-gold transition-all duration-300 classic-text text-sm rounded-lg hover:bg-gold/10"
            >
              {t('navigation.about')}
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center justify-center space-x-10 absolute left-1/2 transform -translate-x-1/2">
            {navigation.map((item) => {
              if (item.name === t('navigation.danceStyles')) {
                return (
                  <div 
                    key={item.name} 
                    className="relative" 
                    ref={danceStylesDropdownRef}
                    onMouseEnter={handleDanceStylesMouseEnter}
                    onMouseLeave={handleDanceStylesMouseLeave}
                  >
                    <button
                      className="text-white/90 hover:text-gold transition-all duration-300 classic-text text-lg relative group flex items-center space-x-1 px-3 py-2 rounded-lg hover:bg-gold/10"
                    >
                      <span className="relative z-10">{item.name}</span>
                      <span className="absolute -bottom-1 left-3 right-3 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent group-hover:opacity-100 opacity-0 transition-all duration-300"></span>
                    </button>
                    
                    {/* Dance Styles Dropdown Menu */}
                    <div className={`absolute top-full left-0 mt-2 w-48 bg-black/95 backdrop-blur-md border-gold/20 rounded-lg shadow-2xl shadow-gold/20 z-50 transition-all duration-300 ease-in-out ${
                      isDanceStylesDropdownOpen 
                        ? 'opacity-100 visible transform translate-y-0' 
                        : 'opacity-0 invisible transform -translate-y-2'
                    }`}>
                      <div className="py-1">
                        {danceStylesSubmenu.map((subItem, index) => (
                          <Link
                            key={index}
                            href={subItem.href}
                            className="group relative block px-4 py-3 text-white hover:text-gold transition-all duration-300 classic-text text-sm hover:bg-gold/10 hover:pl-6"
                          >
                            <span className="relative z-10">{subItem.name}</span>
                            {/* Hover effect line */}
                            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gold transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
                            {/* Hover glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }
              
              if (item.name === 'dancers') {
                return (
                  <div 
                    key={item.name} 
                    className="relative" 
                    ref={dropdownRef}
                    onMouseEnter={handleDancersMouseEnter}
                    onMouseLeave={handleDancersMouseLeave}
                  >
                    <button
                      className="text-white/90 hover:text-gold transition-all duration-300 classic-text text-lg relative group flex items-center space-x-1 px-3 py-2 rounded-lg hover:bg-gold/10"
                    >
                      <span className="relative z-10">{t('navigation.dancers')}</span>
                      <span className="absolute -bottom-1 left-3 right-3 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent group-hover:opacity-100 opacity-0 transition-all duration-300"></span>
                    </button>
                    
                    {/* Dropdown Menu */}
                    <div className={`absolute top-full left-0 mt-2 w-40 bg-black/95 backdrop-blur-md border-gold/20 rounded-lg shadow-2xl shadow-gold/20 z-50 transition-all duration-300 ease-in-out ${
                      isDancersDropdownOpen 
                        ? 'opacity-100 visible transform translate-y-0' 
                        : 'opacity-0 invisible transform -translate-y-2'
                    }`}>
                      <div className="py-1">
                        {dancersSubmenu.map((subItem, index) => (
                          <Link
                            key={index}
                            href={subItem.href}
                            className="group relative block px-4 py-3 text-white hover:text-gold transition-all duration-300 classic-text text-sm hover:bg-gold/10 hover:pl-6"
                          >
                            <span className="relative z-10">{subItem.name}</span>
                            {/* Hover effect line */}
                            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gold transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
                            {/* Hover glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white/90 hover:text-gold transition-all duration-300 classic-text text-lg relative group px-3 py-2 rounded-lg hover:bg-gold/10"
                >
                  <span className="relative z-10">{item.name}</span>
                  <span className="absolute -bottom-1 left-3 right-3 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent group-hover:opacity-100 opacity-0 transition-all duration-300"></span>
                </Link>
              );
            })}
          </nav>

          {/* Right side controls - Language switcher and mobile menu */}
          <div className="flex items-center space-x-3 absolute right-0">
            {/* Language Switch - Always visible */}
            <button
              onClick={toggleLanguage}
              className="px-3 py-2 text-white/90 hover:text-gold transition-all duration-300 flex items-center space-x-2 rounded-lg bg-gold/5 hover:bg-gold/10 backdrop-blur-sm"
              title={t('common.languageSwitch')}
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium classic-text">{language.toUpperCase()}</span>
            </button>

            {/* Mobile menu button for additional navigation */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden px-3 py-2 text-white/90 hover:text-gold transition-all duration-300 rounded-lg bg-gold/5 hover:bg-gold/10 backdrop-blur-sm"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Additional options */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-4 pt-4 pb-6 space-y-3 bg-black border-t border-gold/20">
              {/* Dance Styles Submenu */}
              <div className="px-4 py-3">
                <div className="text-white classic-text text-lg mb-2 font-medium">
                  {language === 'en' ? 'Dance Styles' : 'Бүжгийн төрлүүд'}
                </div>
                <div className="ml-4 space-y-2">
                  {danceStylesSubmenu.map((subItem, index) => (
                    <Link
                      key={index}
                      href={subItem.href}
                      className="block px-4 py-2 text-gray-300 hover:text-gold transition-colors duration-300 classic-text text-sm border-l-2 border-transparent hover:border-gold"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Dancers Submenu */}
              <div className="px-4 py-3">
                <div className="text-white classic-text text-lg mb-2 font-medium">
                  {t('navigation.dancers')}
                </div>
                <div className="ml-4 space-y-2">
                  {dancersSubmenu.map((subItem, index) => (
                    <Link
                      key={index}
                      href={subItem.href}
                      className="block px-4 py-2 text-gray-300 hover:text-gold transition-colors duration-300 classic-text text-sm border-l-2 border-transparent hover:border-gold"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
