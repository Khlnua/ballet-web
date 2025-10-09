'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';

export default function Footer() {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-black border-t border-gray-600 px-4 mt-12 pt-8 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" suppressHydrationWarning>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-30 h-30 rounded-full flex items-center justify-center">
                <img src="/dancerLOGO.png" alt="Mongolian National Ballet" width={110} height={110} />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gold classic-heading">
                  {language === 'en' ? 'Mongolian National Ballet' : 'Монголын Ардын Бүжгийн Чуулга'}
                </span>
              </div>
            </div>
            <p className="text-gold-light/80 mb-8 classic-text leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gold classic-heading">{t('footer.quickLinks')}</h3>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2">
              <Link href="/" className="text-gold-light/80 hover:text-gold transition-colors duration-300 classic-text text-lg">
                {t('navigation.home')}
              </Link>
              <Link href="/about" className="text-gold-light/80 hover:text-gold transition-colors duration-300 classic-text text-lg">
                {t('navigation.about')}
              </Link>
              <Link href="/dancers" className="text-gold-light/80 hover:text-gold transition-colors duration-300 classic-text text-lg">
                {t('navigation.dancers')}
              </Link>
              <Link href="/choreographer" className="text-gold-light/80 hover:text-gold transition-colors duration-300 classic-text text-lg">
                {t('navigation.choreographer')}
              </Link>
              <Link href="/dancedrama" className="text-gold-light/80 hover:text-gold transition-colors duration-300 classic-text text-lg">
                {t('navigation.dancedrama')}
              </Link>
              <Link href="/featured" className="text-gold-light/80 hover:text-gold transition-colors duration-300 classic-text text-lg">
                {t('navigation.featured')}
              </Link>
              <Link href="/ugsaatan" className="text-gold-light/80 hover:text-gold transition-colors duration-300 classic-text text-lg">
                {t('navigation.ugsaatan')}
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gold classic-heading">{t('footer.contact')}</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-gold-light/80">
                <MapPin className="w-6 h-6 mr-4 text-gold" />
                <span className="classic-text">{t('footer.address')}</span>
              </li>
              <li className="flex items-center text-gold-light/80">
                <Phone className="w-6 h-6 mr-4 text-gold" />
                <span className="classic-text">{t('footer.phone')}</span>
              </li>
              <li className="flex items-center text-gold-light/80">
                <Mail className="w-6 h-6 mr-4 text-gold" />
                <span className="classic-text">{t('footer.email')}</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gold classic-heading">{t('footer.socialMedia')}</h3>
            <div className="flex gap-1">
              <a
                href="https://www.facebook.com/sevjid.mongolian.folk.dance"
                className="text-gold-light/80 hover:text-gold transition-colors duration-300 p-3 rounded-lg"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/ts.sevjid_folk_dance/?hl=en"
                className="text-gold-light/80 hover:text-gold transition-colors duration-300 p-3 rounded-lg"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.youtube.com/@MONGOLIANNATIONALBALLET"
                className="text-gold-light/80 hover:text-gold transition-colors duration-300 p-3 rounded-lg"
                aria-label="YouTube"
              >
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-none mt-12 pt-8 text-left">
          <p className="text-gold classic-text text-center">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
