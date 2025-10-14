'use client';

import { useState, useEffect, useRef } from 'react';
import { Play, Calendar, MapPin, Star, X } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import SimpleLoadingVideo from './simple-loading-video';
import SimpleLoadingImage from './simple-loading-image';

export default function HeroCarousel() {
  const { t, language } = useLanguage();
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayVideo = () => {
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
  };

  useEffect(() => {
    // Set a timeout to handle video loading issues
    const timeout = setTimeout(() => {
      if (videoRef.current && videoRef.current.readyState < 2) {
        console.log('Video loading timeout, using fallback');
        setVideoError(true);
      }
    }, 10000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <section className="relative overflow-hidden" suppressHydrationWarning>
        {/* Video Container - Full Width */}
        <div className="w-full relative">
          <SimpleLoadingVideo
            src="https://pub-c732fae67a4540d5ae377e19b62491a7.r2.dev/shortvideo/4berh.mp4"
            fallbackSrc="https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=1920&h=1080&fit=crop"
            className="w-full h-auto"
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
              minHeight: '60vh',
              maxHeight: '80vh'
            }}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            itemId="hero-video"
          />
          
          {/* Dark Overlay for Better Logo Visibility */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content Container - Centered Logo Only */}
        <div className="absolute inset-0 z-10 flex items-center justify-center px-4 sm:px-6 lg:px-8 pointer-events-none" style={{ minHeight: '100%' }}>
          <div className="w-full max-w-7xl mx-auto flex justify-center">
            {/* Main Logo - Centered and Larger */}
            <div className="relative">
              <SimpleLoadingImage
                src="https://pub-c732fae67a4540d5ae377e19b62491a7.r2.dev/dancerLOGO.png"
                alt="Mongolian National Ballet"
                width={800}
                height={400}
                className="w-full max-w-4xl h-auto drop-shadow-2xl"
                style={{ maxWidth: '800px', height: 'auto' }}
                fallbackSrc="/dancerLOGO.png"
                itemId="hero-logo"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            onClick={closeVideoModal}
          />
          
          {/* Modal Content */}
          <div className="relative w-full max-w-5xl mx-auto">
            {/* Close Button */}
            <button
              onClick={closeVideoModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200 z-10"
            >
              <X className="w-8 h-8" />
            </button>
            
            {/* Video Player */}
            <div className="relative aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/N6Pdzg8T81o?autoplay=1&rel=0&modestbranding=1"
                title="Mongolian Traditional Dance Performance"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
