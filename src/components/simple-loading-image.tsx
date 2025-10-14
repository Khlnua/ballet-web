'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import LoadingSkeleton from './loading-skeleton';

interface SimpleLoadingImageProps {
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
  fallbackSrc?: string;
  itemId?: string;
}

const SimpleLoadingImage: React.FC<SimpleLoadingImageProps> = ({
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
  fallbackSrc,
  itemId
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);

  const handleLoad = () => {
    setImageLoaded(true);
  };

  const handleError = () => {
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
      setImageError(false);
      setImageLoaded(false);
    } else {
      setImageError(true);
    }
  };

  return (
    <div className={`relative ${className}`}>
      {/* Loading State - Only show for 2 seconds max */}
      {!imageLoaded && !imageError && (
        <div className="absolute inset-0">
          <LoadingSkeleton 
            type="image" 
            width="100%" 
            height={height || '200px'}
            className="rounded-lg"
          />
        </div>
      )}

      {/* Error State */}
      {imageError && (
        <div className="flex items-center justify-center bg-black/20 rounded-lg border border-gold/30 min-h-[200px]">
          <div className="text-gold/70 text-center p-4">
            <div className="text-4xl mb-2">🖼️</div>
            <p className="text-sm">Image unavailable</p>
          </div>
        </div>
      )}

      {/* Actual Image */}
      {!imageError && (
        <Image
          src={currentSrc}
          alt={alt}
          width={fill ? undefined : width}
          height={fill ? undefined : height}
          fill={fill}
          sizes={sizes}
          quality={quality}
          priority={priority}
          className={`transition-opacity duration-300 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={style}
          onLoad={handleLoad}
          onError={handleError}
        />
      )}
    </div>
  );
};

export default SimpleLoadingImage;
