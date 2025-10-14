'use client';

import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import { useLoading } from '@/contexts/loading-context';
import LoadingSkeleton from './loading-skeleton';
import LoadingSpinner from './loading-spinner';

interface LoadingImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  style?: React.CSSProperties;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  fallbackSrc?: string;
  onLoad?: () => void;
  onError?: () => void;
  itemId?: string;
}

const LoadingImage: React.FC<LoadingImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  style,
  priority = false,
  fill = false,
  sizes,
  quality = 75,
  placeholder = 'empty',
  blurDataURL,
  fallbackSrc,
  onLoad,
  onError,
  itemId
}) => {
  const { startLoading, stopLoading, setError, isItemLoading, hasItemError } = useLoading();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);

  const uniqueId = itemId || `image-${src}`;

  const handleLoad = useCallback(() => {
    setImageLoaded(true);
    stopLoading(uniqueId);
    onLoad?.();
  }, [uniqueId, stopLoading, onLoad]);

  const handleError = useCallback(() => {
    setImageError(true);
    setError(uniqueId);
    
    // Try fallback image if available
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
      setImageError(false);
      setImageLoaded(false);
      startLoading(uniqueId);
    } else {
      onError?.();
    }
  }, [uniqueId, setError, fallbackSrc, currentSrc, startLoading, onError]);

  const handleImageStart = useCallback(() => {
    if (!imageLoaded && !imageError) {
      startLoading(uniqueId);
    }
  }, [uniqueId, startLoading, imageLoaded, imageError]);

  // Start loading when component mounts, but with a small delay to prevent overwhelming
  React.useEffect(() => {
    const timer = setTimeout(() => {
      handleImageStart();
    }, 100); // Small delay to prevent all images loading at once

    return () => clearTimeout(timer);
  }, [handleImageStart]);

  const isLoading = isItemLoading(uniqueId);
  const hasError = hasItemError(uniqueId);

  // Auto-timeout for individual images after 8 seconds
  React.useEffect(() => {
    if (isLoading && !imageLoaded) {
      const timeout = setTimeout(() => {
        console.log(`Image ${uniqueId} loading timeout, stopping loading`);
        stopLoading(uniqueId);
        setImageError(true);
        setError(uniqueId);
      }, 8000); // 8 second timeout per image

      return () => clearTimeout(timeout);
    }
  }, [isLoading, imageLoaded, uniqueId, stopLoading, setError]);

  return (
    <div className={`relative ${className}`}>
      {/* Loading State */}
      {isLoading && !imageLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-lg">
          <LoadingSkeleton 
            type="image" 
            width="100%" 
            height={height || '200px'}
            className="rounded-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <LoadingSpinner size="lg" color="gold" />
          </div>
        </div>
      )}

      {/* Error State */}
      {hasError && !imageLoaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 rounded-lg border border-gold/30">
          <div className="text-gold/70 text-center p-4">
            <div className="text-4xl mb-2">🖼️</div>
            <p className="text-sm">Image unavailable</p>
            <p className="text-xs text-gold/50 mt-1">Loading from Cloudflare...</p>
          </div>
        </div>
      )}

      {/* Actual Image */}
      <Image
        src={currentSrc}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        fill={fill}
        sizes={sizes}
        quality={quality}
        priority={priority}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        className={`transition-opacity duration-300 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        style={style}
        onLoad={handleLoad}
        onError={handleError}
        onLoadStart={handleImageStart}
      />
    </div>
  );
};

export default LoadingImage;
