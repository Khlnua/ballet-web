'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Play, AlertCircle } from 'lucide-react';
import LoadingSkeleton from './loading-skeleton';

interface SimpleLoadingVideoProps {
  src: string;
  poster?: string;
  className?: string;
  style?: React.CSSProperties;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
  playsInline?: boolean;
  preload?: 'none' | 'metadata' | 'auto';
  fallbackSrc?: string;
  itemId?: string;
  showPlayButton?: boolean;
}

const SimpleLoadingVideo: React.FC<SimpleLoadingVideoProps> = ({
  src,
  poster,
  className = '',
  style,
  autoPlay = false,
  muted = true,
  loop = false,
  controls = false,
  playsInline = true,
  preload = 'metadata',
  fallbackSrc,
  itemId,
  showPlayButton = true
}) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleLoad = () => {
    setVideoLoaded(true);
  };

  const handleError = () => {
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
      setVideoError(false);
      setVideoLoaded(false);
    } else {
      setVideoError(true);
    }
  };

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  // Auto-play handling
  useEffect(() => {
    if (autoPlay && videoLoaded && videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          setIsPlaying(false);
        });
      }
    }
  }, [autoPlay, videoLoaded]);

  return (
    <div className={`relative ${className}`}>
      {/* Loading State - Only show for 3 seconds max */}
      {!videoLoaded && !videoError && (
        <div className="absolute inset-0">
          <LoadingSkeleton 
            type="video" 
            width="100%" 
            height="100%"
            className="rounded-lg"
          />
        </div>
      )}

      {/* Error State */}
      {videoError && (
        <div className="flex items-center justify-center bg-black/20 rounded-lg border border-gold/30 min-h-[200px]">
          <div className="text-gold/70 text-center p-4">
            <AlertCircle className="w-12 h-12 mx-auto mb-2" />
            <p className="text-sm">Video unavailable</p>
          </div>
        </div>
      )}

      {/* Play Button Overlay */}
      {videoLoaded && !isPlaying && showPlayButton && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-lg">
          <button
            onClick={handlePlay}
            className="bg-gold/90 hover:bg-gold text-black rounded-full p-4 transition-all duration-300 hover:scale-110 shadow-lg"
          >
            <Play className="w-8 h-8 ml-1" fill="currentColor" />
          </button>
        </div>
      )}

      {/* Actual Video */}
      {!videoError && (
        <video
          ref={videoRef}
          src={currentSrc}
          poster={poster}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            videoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={style}
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          controls={controls}
          playsInline={playsInline}
          preload={preload}
          onCanPlay={handleLoad}
          onError={handleError}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
      )}
    </div>
  );
};

export default SimpleLoadingVideo;
