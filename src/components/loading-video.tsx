'use client';

import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useLoading } from '@/contexts/loading-context';
import LoadingSkeleton from './loading-skeleton';
import LoadingSpinner from './loading-spinner';
import { Play, AlertCircle } from 'lucide-react';

interface LoadingVideoProps {
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
  onLoad?: () => void;
  onError?: () => void;
  onPlay?: () => void;
  itemId?: string;
  showPlayButton?: boolean;
}

const LoadingVideo: React.FC<LoadingVideoProps> = ({
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
  onLoad,
  onError,
  onPlay,
  itemId,
  showPlayButton = true
}) => {
  const { startLoading, stopLoading, setError, isItemLoading, hasItemError } = useLoading();
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const uniqueId = itemId || `video-${src}`;

  const handleLoad = useCallback(() => {
    setVideoLoaded(true);
    stopLoading(uniqueId);
    onLoad?.();
  }, [uniqueId, stopLoading, onLoad]);

  const handleError = useCallback(() => {
    setVideoError(true);
    setError(uniqueId);
    
    // Try fallback video if available
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
      setVideoError(false);
      setVideoLoaded(false);
      startLoading(uniqueId);
    } else {
      onError?.();
    }
  }, [uniqueId, setError, fallbackSrc, currentSrc, startLoading, onError]);

  const handlePlay = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
      onPlay?.();
    }
  }, [onPlay]);

  const handleVideoStart = useCallback(() => {
    if (!videoLoaded && !videoError) {
      startLoading(uniqueId);
    }
  }, [uniqueId, startLoading, videoLoaded, videoError]);

  // Start loading when component mounts, but with a small delay to prevent overwhelming
  useEffect(() => {
    const timer = setTimeout(() => {
      handleVideoStart();
    }, 200); // Slightly longer delay for videos

    return () => clearTimeout(timer);
  }, [handleVideoStart]);

  const isLoading = isItemLoading(uniqueId);
  const hasError = hasItemError(uniqueId);

  // Auto-timeout for individual videos after 8 seconds
  useEffect(() => {
    if (isLoading && !videoLoaded) {
      const timeout = setTimeout(() => {
        console.log(`Video ${uniqueId} loading timeout, stopping loading`);
        stopLoading(uniqueId);
        setVideoError(true);
        setError(uniqueId);
      }, 8000); // 8 second timeout per video

      return () => clearTimeout(timeout);
    }
  }, [isLoading, videoLoaded, uniqueId, stopLoading, setError]);

  // Auto-play handling
  useEffect(() => {
    if (autoPlay && videoLoaded && videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Auto-play failed, show play button
          setIsPlaying(false);
        });
      }
    }
  }, [autoPlay, videoLoaded]);

  return (
    <div className={`relative ${className}`}>
      {/* Loading State */}
      {isLoading && !videoLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-lg">
          <LoadingSkeleton 
            type="video" 
            width="100%" 
            height="100%"
            className="rounded-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <LoadingSpinner size="lg" color="gold" />
          </div>
        </div>
      )}

      {/* Error State */}
      {hasError && !videoLoaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 rounded-lg border border-gold/30">
          <div className="text-gold/70 text-center p-4">
            <AlertCircle className="w-12 h-12 mx-auto mb-2" />
            <p className="text-sm">Video unavailable</p>
            <p className="text-xs text-gold/50 mt-1">Loading from Cloudflare...</p>
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
      <video
        ref={videoRef}
        src={currentSrc}
        poster={poster}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          videoLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        style={style}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        controls={controls}
        playsInline={playsInline}
        preload={preload}
        onLoadStart={handleVideoStart}
        onCanPlay={handleLoad}
        onError={handleError}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
    </div>
  );
};

export default LoadingVideo;
