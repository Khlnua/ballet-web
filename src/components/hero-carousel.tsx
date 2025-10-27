'use client';

import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/language-context';
import SimpleLoadingVideo from './simple-loading-video';
import SimpleLoadingImage from './simple-loading-image';

export default function HeroCarousel() {
  const { t, language } = useLanguage();
  const [, setVideoError] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [userMutedPreference, setUserMutedPreference] = useState<boolean | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
 

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

  // Intersection Observer to detect when video is out of view
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If video is not visible, always mute it
          if (!entry.isIntersecting) {
            setIsMuted(true);
          } else {
            // Video is visible - use user preference if they set one, otherwise keep muted
            if (userMutedPreference !== null) {
              setIsMuted(userMutedPreference);
            }
            // If no user preference, stay muted (browser autoplay policy compliance)
          }
        });
      },
      {
        threshold: 0.1, // Trigger when at least 10% of video is visible
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, [userMutedPreference]);

  const toggleMute = () => {
    const newMutedState = !isMuted;
    setIsMuted(newMutedState);
    setUserMutedPreference(newMutedState); // Save user's preference
  };

  return (
    <>
      <section ref={sectionRef} className="relative overflow-hidden" suppressHydrationWarning>
        {/* Video Container - Full Width */}
        <div className="w-full relative">
          <SimpleLoadingVideo
            src="https://pub-c732fae67a4540d5ae377e19b62491a7.r2.dev/HOMEVIDEO.mp4"
            poster="https://pub-c732fae67a4540d5ae377e19b62491a7.r2.dev/loadpic.jpg"
            fallbackSrc="https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=1920&h=1080&fit=crop"
            className="w-full h-auto"
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
              minHeight: '60vh',
              maxHeight: '80vh'
            }}
            autoPlay
            muted={isMuted}
            loop
            playsInline
            preload="metadata"
            itemId="hero-video"
            showPlayButton={false}
          />
          
          {/* Dark Overlay for Better Logo Visibility */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Mute/Unmute Button */}
          <button
            onClick={toggleMute}
            className="absolute bottom-6 right-6 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 pointer-events-auto backdrop-blur-sm"
            aria-label={isMuted ? 'Unmute video' : 'Mute video'}
          >
            {isMuted ? (
              // Muted Icon
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.531V19.94a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.506-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.395C2.806 8.757 3.63 8.25 4.51 8.25H6.75z" />
              </svg>
            ) : (
              // Unmuted Icon
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
              </svg>
            )}
          </button>
        </div>

        {/* Content Container - Centered Logo Only */}
        <div className="absolute inset-0 z-10 flex items-center justify-center px-4 sm:px-6 lg:px-8 pointer-events-none" style={{ minHeight: '100%' }}>
          <div className="w-full mx-auto flex justify-center">
            {/* Main Logo - Responsive Sizing */}
            <div className="relative w-[280px] sm:w-[400px] md:w-[450px] lg:w-[480px]">
              <SimpleLoadingImage
                src="https://pub-c732fae67a4540d5ae377e19b62491a7.r2.dev/LOGOdance.png"
                alt="Mongolian National Ballet"
                width={480}
                height={240}
                className="w-full h-auto drop-shadow-2xl"
                fallbackSrc="/dancerLOGO.png"
                itemId="hero-logo"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
