'use client';

import React from 'react';

interface LoadingSkeletonProps {
  type?: 'image' | 'text' | 'video' | 'card';
  width?: string | number;
  height?: string | number;
  className?: string;
  lines?: number;
}

const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({ 
  type = 'image',
  width = '100%',
  height = '200px',
  className = '',
  lines = 3
}) => {
  const baseClasses = 'animate-pulse bg-gradient-to-r from-gold/20 via-gold/10 to-gold/20 bg-[length:200%_100%]';

  const renderSkeleton = () => {
    switch (type) {
      case 'image':
        return (
          <div 
            className={`${baseClasses} rounded-lg ${className}`}
            style={{ width, height }}
          />
        );
      
      case 'video':
        return (
          <div 
            className={`${baseClasses} rounded-lg aspect-video ${className}`}
            style={{ width, height }}
          />
        );
      
      case 'text':
        return (
          <div className={`space-y-2 ${className}`}>
            {Array.from({ length: lines }).map((_, index) => (
              <div
                key={index}
                className={`${baseClasses} rounded h-4`}
                style={{ 
                  width: index === lines - 1 ? '75%' : '100%',
                  height: '16px'
                }}
              />
            ))}
          </div>
        );
      
      case 'card':
        return (
          <div className={`${baseClasses} rounded-xl p-6 ${className}`} style={{ width, height }}>
            <div className="space-y-4">
              <div className={`${baseClasses} rounded h-6 w-3/4`} />
              <div className="space-y-2">
                <div className={`${baseClasses} rounded h-4 w-full`} />
                <div className={`${baseClasses} rounded h-4 w-5/6`} />
                <div className={`${baseClasses} rounded h-4 w-4/5`} />
              </div>
            </div>
          </div>
        );
      
      default:
        return (
          <div 
            className={`${baseClasses} rounded ${className}`}
            style={{ width, height }}
          />
        );
    }
  };

  return renderSkeleton();
};

export default LoadingSkeleton;
